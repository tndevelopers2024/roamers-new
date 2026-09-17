/* 07 Season collection — Christmas & New Year, live from roamers.in */
import { ORIGIN, titleCase } from '@/lib/roamers';
import { imgProps } from '@/lib/images';

const COLLECTION = `${ORIGIN}/christmas&newyear.php`;

/* "Dec 20,25,27" → { label: "20 · 25 · 27 Dec", days: [20, 25, 27], month: "Dec" } */
const parseDates = dates => {
  const month = dates.match(/[A-Za-z]{3}/)?.[0] || '';
  const days = (dates.match(/\d{1,2}/g) || []).map(Number);
  return { month, days, label: days.length ? `${days.map(d => String(d).padStart(2, '0')).join(' · ')} ${month}` : dates };
};
const nights = duration => duration.match(/(\d+)\s*N/i)?.[1];
const tidy = s => s.replace(/\s+,/g, ',').replace(/\s+/g, ' ').trim();

export default function Season({ trips = [] }) {
  const all = trips.map(t => ({ ...t, when: parseDates(t.dates) }));
  const days = all.flatMap(t => t.when.days);
  const month = all.find(t => t.when.month)?.when.month;
  const range = days.length ? `${String(Math.min(...days)).padStart(2, '0')} ${month} — ${String(Math.max(...days)).padStart(2, '0')} ${month}` : null;

  return (
    <section className="season" id="season" data-chapter="03" data-chapter-name="Explore" aria-labelledby="season-title">
      <div className="season__snow" aria-hidden="true">
        <span className="season__flakes season__flakes--far" />
        <span className="season__flakes season__flakes--mid" />
        <span className="season__flakes season__flakes--near" />
      </div>

      {/* a few flakes fall in front of the cards, so the snow has depth */}
      <div className="season__snow season__snow--front" aria-hidden="true">
        <span className="season__flakes season__flakes--front" />
      </div>

      <div className="wrap season__head">
        <p className="eyebrow mono">(06) Season collection</p>
        <div className="season__intro">
          <h2 className="season__title" id="season-title">Christmas &amp;<br /><em>New Year.</em></h2>
          <div className="season__aside">
            <p className="season__lede">Whether you’re joining solo, with friends, or as a couple, these group trips are designed to accommodate all types of travelers.</p>
            <p className="season__meta mono">
              {range && <span>{range}</span>}
              <span>{all.length} trips</span>
              <span>Ages 18–39</span>
            </p>
          </div>
        </div>
      </div>

      <div className="rail" data-rail>
        <div className="rail__track season__track" data-rail-track>
          {all.map(t => {
            const name = titleCase(t.title);
            const n = nights(t.duration);
            return (
              <article key={t.key || t.title} className="scard" data-cursor="View trip">
                <a className="scard__link" href={t.url || COLLECTION} data-transition={name}>
                  {t.image && <img className="scard__img" {...imgProps(t.image, 800, [640, 1000])} sizes="(min-width: 900px) 20rem, 76vw" alt={t.alt || name} loading="lazy" />}
                  <span className="scard__scrim" aria-hidden="true"></span>
                  <p className="scard__tag mono">{t.when.label}</p>
                  <div className="scard__body">
                    <h3 className="scard__name">{name}</h3>
                    <p className="scard__line mono">{n ? `${n} ${n === '1' ? 'night' : 'nights'} · ` : ''}{tidy(t.locations)}</p>
                    <p className="scard__foot">
                      {t.price ? <span className="scard__price"><span className="mono">from</span><strong>{t.price}</strong></span> : <span />}
                      <span className="scard__cta mono">View <i aria-hidden="true">→</i></span>
                    </p>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
        <div className="rail__nav">
          <button className="rail__arrow" type="button" data-rail-prev aria-label="Previous trips"><i aria-hidden="true">←</i></button>
          <button className="rail__arrow" type="button" data-rail-next aria-label="More trips"><i aria-hidden="true">→</i></button>
        </div>
      </div>

      <div className="wrap season__foot">
        <a className="btn" href={COLLECTION} data-magnetic><span>View All</span><i className="btn__arrow" aria-hidden="true">→</i></a>
      </div>
    </section>
  );
}
