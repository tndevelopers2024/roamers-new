# Roamers — homepage concept

**Travel solo. Leave with a squad.**

A high-fidelity homepage concept for Roamers, the social travel club. The page is built as one continuous story rather than a stack of sections:

**Discover → Imagine → Explore → Connect → Join**

## Run it

A Next.js app (App Router, JavaScript). The page is fully static — it prerenders at build time.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the production build
```

## The story, beat by beat

| # | Beat | What happens |
|---|------|--------------|
| — | Loader | A split-flap departure board flips to `ROAMERS`, then lifts. |
| 01 | Hero: *the pull-back* | The page opens tight on one silhouette: **"Travel solo."** Scrolling pulls the camera back to reveal the whole squad, and the photo shrinks into a framed print: **"Leave with a squad."** |
| 01 | Statement | *"You don't need a travel group…"* The words brighten as you read, with small trip photos set into the sentence. Three pillars follow. |
| 02 | How it works | **Day 0 → Day 7.** A sticky photo swaps with each day, and a small network graphic shows 13 scattered dots becoming one connected squad. |
| 03 | Featured adventures | Six destinations as chapters on a horizontal track (desktop) or a swipe carousel (mobile). |
| 04 | Upcoming departures | The booking board: month filter chips and a grid of departure cards — duration, route, dates, seats left, from-price, Reserve. |
| 05 | Trip styles | Styled like a magazine contents page. On desktop a photo follows the cursor; on mobile each row has a thumbnail. |
| 06 | Christmas & New Year | The season collection, as a winter-night panel: midnight sky, falling snow, gold-leaf title, six tall postcards on a rail. |
| — | The people | Photos start scattered at the edges (*strangers today*) and huddle around the headline as you scroll (*travel buddies tomorrow*). |
| 07 | Community | The one full brand-sky section — why the club exists, and how to join it. |
| 08 | Meetups | The calendar as cards: date stub, city and time, Register or Notify me. |
| 09 | Stories | Testimonials as full-screen postcards that stack, with photography taking most of each card. |
| 10 | Proof | The stats set as a single sentence with oversized numbers that count up, then a "talk to a travel expert" box. |
| — | Finale | Film credits roll (*Starring: You. With: a bus full of strangers.*), then **"Your next adventure is waiting."** |

Calls to action are deliberately few:
- **Book a seat / Reserve** is primary. It sits in the nav, the departures board, the mobile bottom bar and the finale.
- **View trip**, **Join the community** and **Talk to a travel expert** are secondary.

## Design system

- **Type:**
  - *Archivo* condensed (width axis 62) for display type and uppercase headlines.
  - *Instrument Serif* italic for the human words (*squad, people, stories*).
  - *Archivo* regular for body text.
  - *Geist Mono* for documentary-style captions (`FIG. 01`, `CH. 03`, departure dates).
- **Colour:**

  Only the Roamers palette: the sky of the logo, the blues of its mountains, and white.

  The page runs on a light theme. `styles/base.css` maps the palette onto theme tokens
  (`--paper`, `--card`, `--ink`, `--ink-muted`, `--ink-on-photo`, `--accent`, `--accent-ink`, `--rule`),
  so re-theming the site means editing that one block rather than the rules underneath.

  | Name | Hex | Use |
  |------|-----|-----|
  | Sky | `#4EC0DB` | brand colour: main buttons, nav bar, mobile bar, the Community section, accents on dark |
  | Ocean | `#1B7196` | accent text on light backgrounds |
  | Deep | `#15496A` | the Day 0–7 section and alternate story cards |
  | Navy | `#0E2229` | text and dark sections |
  | Ice | `#F3FAFC` | light sections |
  | Cloud | `#B2F0F8` | soft highlights on dark |
- **Logo:** the Roamers pin and wordmark, cleaned from `public/assets/logo.webp` into `public/assets/brand/`. The pin is used in the nav, loader, footer and favicon. The wordmark is a CSS mask, so it turns white over the hero and navy on the sky bar.
- **Shapes:** rectangular 2px corners and hairline rules. No pills, no glass, no card grids.
- **Motion:**
  - GSAP with ScrollTrigger, and Lenis for smooth scroll (npm packages, booted client-side).
  - Every animation tells part of the story: the camera pull-back, strangers converging, credits rolling.
  - Also: a cursor label on trips ("View trip"), magnetic main buttons, and a curtain transition when leaving for a trip page.
  - `prefers-reduced-motion` switches to static layouts with no pinning.
- **Mobile is its own composition:**
  - a bottom "Book a seat" bar within thumb reach
  - a full-screen menu that shows the next departure
  - a swipe carousel for trips
  - thumbnail rows for trip styles
  - the hero camera frames the squad in portrait

## Structure

```
app/layout.js            metadata, fonts, global CSS, the no-js → js flag
app/page.js              composes the page from section components
components/              nav, menu, loader, curtain, cursor, footer, mobile bar
components/sections/     one component per chapter, in page order
components/SiteMotion.jsx  boots the chrome and the choreography after mount
lib/chrome.js            smooth scroll, loader, nav, menu, cursor, magnetic buttons, page exits
lib/story.js             scroll choreography for every chapter
styles/base.css          palette, theme tokens, type, buttons, nav, menu, cursor, loader
styles/sections.css      each chapter, plus responsive and static fallbacks
public/assets/brand/     Roamers pin, wordmark, favicons
public/assets/img/       responsive WebP images (see credits)
legacy/                  the original static build this was ported from
```

## Before going live

These are concept placeholders to replace:

- **Testimonial photos:** the quotes are real reviews from roamers.in, but each is paired with a representative trip photo. Swap in each reviewer's own photo, with their consent.
- **Trip data:** departure dates, routes and the Sep–Nov 2026 calendar follow the pattern on the current site. Wire them to the live trip data.
- **Thailand link:** the current site has no dedicated Thailand page, so "View trip" goes to `/trips`.
- **Stock photos:** replace them with Roamers' own trip photography where possible. The real trip photos are what make the page feel like a community rather than an agency.

## Photo credits

- **Roamers trip photography** (roamers.in): Ladakh riders, Pangong, Umling La, Spiti squad, Chandratal, Port Blair selfie, Valley of Flowers group and trek, Kedarkantha camps, Kolukkumalai campfire, Andaman, Munnar, Ooty, Galle, the monks.
- **Unsplash (Unsplash License):**
  - hero banner `1418854982207-12f710b74003`
  - departures board `1517400508447`
  - friends laughing `1491438590914`
  - forest campfire `1478131143081`
  - houseboat `1602216056096`
  - Thailand `1552465011`, `1522163182402`, `1609137144813`
  - people collage `1528605248644`, `1543807535`, `1516939884455`, `1510915361894`, `1464207687429`, `1539635278303`
  - community `1543269865`, `1528605105345`, `1531058020387`
- **Wikimedia Commons:**
  - *Key Monastery – Spiti*, Prasad Gaude, CC BY-SA 4.0
  - *Clear Water of Umngot River* and *Umngot River View (3)*, ANKAN, CC BY-SA 4.0
  - *SL Demodara near Ella*, A.Savin, Free Art License
