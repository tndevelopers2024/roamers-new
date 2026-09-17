/* Live data from roamers.in — upcoming group trips, prices and meetups.
   The live home page renders trip cards per month tab; assets/js/price.js holds
   the starting prices and dynamic/upcoming-dates.json overrides card dates, the
   same way the live site applies them in the browser. Everything is re-fetched
   on the server every REVALIDATE seconds, and falls back to the last snapshot
   if roamers.in can't be reached. */
import snapshot from './roamers-snapshot.json';
import { TRIP_PHOTOS, EVENT_PHOTOS } from './images';

export const ORIGIN = 'https://www.roamers.in';
export const REVALIDATE = 900;

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const decode = s => s
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
const text = s => decode(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
/* "KERALA GRAND CIRCUIT" → "Kerala", for the big chapter type */
export const placeName = s => titleCase(s
  .replace(/\(.*?\)|\b(grand circuit|backpacking|island hopping|trek|magical|the queen of hills)\b/gi, '')
  .replace(/\s+/g, ' ').trim());

/* "LEH LADAKH GRAND CIRCUIT" → "Leh Ladakh Grand Circuit" */
export const titleCase = s => s.toLowerCase().replace(/(^|[\s(-])(\p{L})/gu, (_, a, b) => a + b.toUpperCase());
const monthIndex = key => MONTHS.indexOf(String(key).slice(0, 3).toLowerCase());

/* Only images Roamers hosts itself — third-party stock is left out. */
const imageUrl = src => {
  if (!src) return null;
  const url = new URL(src.trim(), ORIGIN + '/');
  if (!/(^|\.)roamers\.in$/.test(url.hostname)) return null;
  url.hostname = 'roamers.in';
  return url.href;
};
const linkUrl = href => {
  if (!href || href === '#' || href.startsWith('#')) return null;
  return new URL(href.trim(), ORIGIN + '/').href;
};

async function get(path, type) {
  const res = await fetch(ORIGIN + path, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Roamers site)' },
    next: { revalidate: REVALIDATE },
  });
  if (!res.ok) throw new Error(`${path} → ${res.status}`);
  return type === 'json' ? res.json() : res.text();
}

/* ₹ prices keyed by CSS class, e.g. { 'ooty-price': '₹7,299' } */
export function parsePrices(js) {
  const prices = {};
  for (const m of js.matchAll(/"\.([\w-]+)"\s*:\s*"([^"]+)"/g)) prices[m[1]] = m[2];
  return prices;
}

/* One roamers.in trip card (used by the home page and the Christmas page) */
function parseCard(card, prices = {}) {
  const href = card.match(/href="([^"]+)"\s+class="upcoming-view/)?.[1];
  const key = href ? href.split('/').pop().replace(/\.(php|html?)$/i, '') : null;
  const img = card.match(/<div class="upcoming-image">\s*<img src="([^"]+)"\s+alt="([^"]*)"/);
  const priceClass = card.match(/class="upcoming-price ([\w-]+)"/)?.[1];
  const inlinePrice = text(card.match(/<div class="upcoming-price(?:\s[^"]*)?"[^>]*>([\s\S]*?)<\/div>/)?.[1] || '').replace(/\s*\/-\s*$/, '');
  return {
    key,
    title: text(card.match(/<h1 class="upcoming-title">([\s\S]*?)<\/h1>/)?.[1] || ''),
    locations: text(card.match(/<p class="upcoming-locations">([\s\S]*?)<\/p>/)?.[1] || ''),
    duration: text(card.match(/upcoming-duration">([\s\S]*?)<\/div>/)?.[1] || ''),
    from: text(card.match(/upcoming-from">([\s\S]*?)<\/div>/)?.[1] || '').replace(/^ex:\s*/i, ''),
    dates: text(card.match(/upcoming-dates-text">([\s\S]*?)<\/span>/)?.[1] || ''),
    price: (priceClass && prices[priceClass]) || inlinePrice || null,
    image: imageUrl(img?.[1]),
    alt: img ? decode(img[2]) : '',
    url: linkUrl(href),
  };
}

/* Christmas & New Year trips, from their own roamers.in page (each card appears twice there) */
export function parseSeason(html) {
  const seen = new Set();
  return html.split(/<div class="upcoming-card"/).slice(1)
    .map(card => parseCard(card))
    .filter(t => t.title && !seen.has(t.key || t.title) && seen.add(t.key || t.title));
}

/* Upcoming trip cards, one entry per month tab */
export function parseTrips(html, prices = {}, overrides = {}) {
  const tabs = [...html.matchAll(/class="upcoming-tab-content[^"]*"\s+id="tab-([\w-]+)"/g)];
  const out = [];
  tabs.forEach((tab, t) => {
    const monthKey = tab[1];
    const section = html.slice(tab.index, t + 1 < tabs.length ? tabs[t + 1].index : html.indexOf('</section>', tab.index));
    for (const card of section.split(/<div class="upcoming-card"/).slice(1)) {
      const trip = parseCard(card, prices);
      // Same override the live site's upcoming-dates.js applies, but only when it
      // actually belongs to this month — the JSON carries some stale entries.
      const override = overrides[monthKey]?.[trip.key];
      if (override && monthIndex(override) === monthIndex(monthKey)) trip.dates = override;
      out.push({ ...trip, month: monthKey });
    }
  });
  return out;
}

/* Meetup / event cards */
export function parseEvents(html) {
  const start = html.indexOf('class="event-card"');
  if (start < 0) return [];
  return html.slice(start).split(/<div onclick="[^"]*"[^>]*class="event-card">|class="event-card">/)
    .map(card => {
      const title = card.match(/<h1 class="event-title[^"]*">\s*([^<]+)/)?.[1];
      if (!title) return null;
      const dateTexts = [...card.matchAll(/<span class="event-dates-text"[^>]*>([\s\S]*?)<\/span>/g)].map(m => text(m[1]));
      const cta = card.match(/<a ([^>]*class="event-view[^>]*)>([\s\S]*?)<\/a>/);
      const ctaHref = cta?.[1].match(/href="([^"]*)"/)?.[1];
      return {
        title: text(title),
        line: text(card.match(/<h1 class="event-title[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/)?.[1] || ''),
        image: imageUrl(card.match(/<div class="event-image">\s*<img src="([^"]+)"/)?.[1]),
        slot: (dateTexts[0] || '').replace(/^Slot:\s*/i, '').trim(),
        dates: dateTexts[1] || '',
        city: dateTexts[2] || '',
        cta: cta ? text(cta[2]) : '',
        url: linkUrl(ctaHref),
      };
    })
    .filter(Boolean);
}

/* Dates carry no year. An earlier month counts as next year only when it falls
   within `ahead` months (December listing January); otherwise it has passed. */
const yearFor = (m, now, ahead) =>
  now.getFullYear() + (m < now.getMonth() && (m - now.getMonth() + 12) % 12 <= ahead ? 1 : 0);

/* "Sep 05, 12, 26" → [Date, Date, Date] in the tab's month */
function tripDates(dates, monthKey, now) {
  const mi = monthIndex(monthKey);
  if (mi < 0) return [];
  let m = mi;
  const out = [];
  for (const part of dates.split(',')) {
    const named = part.match(/([A-Za-z]{3})[a-z]*\s*(\d{1,2})/);
    const day = named ? +named[2] : +(part.match(/\d{1,2}/)?.[0] ?? NaN);
    if (named) m = monthIndex(named[1]);
    if (!day || m < 0) continue;
    const year = yearFor(m, now, 6);
    out.push(new Date(Date.UTC(year, m, day)));
  }
  return out;
}

const fmt = d => `${String(d.getUTCDate()).padStart(2, '0')} ${MONTH_NAMES[d.getUTCMonth()].slice(0, 3)}`;

/* Group raw cards into departures that still have a future date */
export function upcoming(trips, now = new Date()) {
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const byKey = new Map();
  for (const t of trips) {
    const future = tripDates(t.dates, t.month, now).filter(d => d.getTime() >= today);
    if (!future.length) continue;
    const id = t.key || t.title;
    const trip = byKey.get(id) || { ...t, departures: [] };
    trip.departures.push(...future);
    if (!trip.image && t.image) trip.image = t.image;
    byKey.set(id, trip);
  }
  return [...byKey.values()]
    .map(t => {
      const deps = [...new Map(t.departures.map(d => [d.getTime(), d])).values()].sort((a, b) => a - b);
      const { month, dates, ...rest } = t;
      return {
        ...rest,
        next: deps[0].toISOString(),
        dates: deps.map(fmt),
        months: [...new Set(deps.map(d => MONTHS[d.getUTCMonth()]))],
      };
    })
    .sort((a, b) => a.next.localeCompare(b.next));
}

/* "28th Feb,9th May" → the dates still ahead, as { day, month } */
export function upcomingEventDates(dates, now = new Date()) {
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return [...dates.matchAll(/(\d{1,2})(?:st|nd|rd|th)?\s*([A-Za-z]{3})/g)]
    .map(([, day, mon]) => {
      const m = monthIndex(mon);
      if (m < 0) return null;
      const when = Date.UTC(yearFor(m, now, 3), m, +day);
      return when >= today ? { when, day: String(+day).padStart(2, '0'), month: MONTH_NAMES[m].slice(0, 3) } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.when - b.when);
}

export function monthFilters(trips, now = new Date()) {
  const counts = new Map();
  trips.forEach(t => t.months.forEach(m => counts.set(m, (counts.get(m) || 0) + 1)));
  const fromNow = key => (MONTHS.indexOf(key) - now.getMonth() + 12) % 12;
  return [...counts]
    .sort((a, b) => fromNow(a[0]) - fromNow(b[0]))
    .map(([key, count]) => ({ key, label: key[0].toUpperCase() + key.slice(1), count }));
}

export async function getRoamersData() {
  let raw = snapshot;
  let live = false;
  try {
    const [html, priceJs, overrides, seasonHtml] = await Promise.all([
      get('/', 'text'),
      get('/assets/js/price.js', 'text'),
      get('/dynamic/upcoming-dates.json', 'json').catch(() => ({})),
      get('/christmas&newyear.php', 'text').catch(() => ''),
    ]);
    const prices = parsePrices(priceJs);
    const trips = parseTrips(html, prices, overrides);
    const events = parseEvents(html);
    const season = seasonHtml ? parseSeason(seasonHtml) : [];
    if (trips.length) {
      raw = { trips, events: events.length ? events : snapshot.events, season: season.length ? season : snapshot.season };
      live = true;
    }
  } catch {
    /* roamers.in unreachable — keep the snapshot */
  }
  const trips = upcoming(raw.trips).map(t => {
    const photo = TRIP_PHOTOS[t.key] || TRIP_PHOTOS[t.title];
    return photo ? { ...t, image: photo.src, alt: photo.alt } : t;
  });
  const events = raw.events.map(e => {
    const photo = EVENT_PHOTOS[e.title.toLowerCase()];
    return photo ? { ...e, image: photo.src, alt: photo.alt } : e;
  });
  // Christmas trips reuse the upgraded photo of the trip they're based on (meghalaya-christmas-new-year → meghalaya)
  const season = (raw.season || []).map(t => {
    const base = Object.keys(TRIP_PHOTOS).find(k => t.key && t.key.startsWith(k));
    return base ? { ...t, image: TRIP_PHOTOS[base].src, alt: TRIP_PHOTOS[base].alt } : t;
  });
  return { trips, months: monthFilters(trips), events, season, live };
}
