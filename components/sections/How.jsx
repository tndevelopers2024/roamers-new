/* 03 How it works — Day 0 to Day 7 */
export default function How() {
  return (
    <section className="how" id="how" data-chapter="02" data-chapter-name="Imagine" aria-labelledby="how-title">
      <div className="wrap how__head">
        <p className="eyebrow mono">(02) How it works</p>
        <h2 className="h-display" id="how-title">How strangers<br />become a <em>squad.</em></h2>
        <p className="how__sub">It takes about a week. Here’s the play-by-play.</p>
      </div>
      <div className="how__body">
        <div className="how__visual" aria-hidden="true">
          <div className="how__frames">
            <img className="how__img is-active" src="/assets/img/day0-1400.webp" srcSet="/assets/img/day0-800.webp 800w, assets/img/day0-1400.webp 1400w" sizes="50vw" width="1400" height="934" alt="" loading="lazy" />
            <img className="how__img" src="/assets/img/day1-1400.webp" srcSet="/assets/img/day1-800.webp 800w, assets/img/day1-1400.webp 1400w" sizes="50vw" width="1400" height="933" alt="" loading="lazy" />
            <img className="how__img" src="/assets/img/day3-1440.webp" srcSet="/assets/img/day3-800.webp 800w, assets/img/day3-1440.webp 1440w" sizes="50vw" width="1440" height="1800" alt="" loading="lazy" />
            <img className="how__img" src="/assets/img/day7-1400.webp" srcSet="/assets/img/day7-800.webp 800w, assets/img/day7-1400.webp 1400w" sizes="50vw" width="1400" height="933" alt="" loading="lazy" />
          </div>
          <div className="how__net"><svg viewBox="0 0 300 300"></svg></div>
          <p className="how__count mono"><span className="how__count-day">Day 0</span><span className="how__count-text">Just you.</span></p>
        </div>
        <ol className="how__steps">
          <li className="how__step" data-count="Just you.">
            <p className="how__day">Day 0</p>
            <h3>Choose a trip.</h3>
            <p>Pick a place, a date, a vibe. Book one seat — really, just one. Then you’re added to a group chat full of people you haven’t met yet.</p>
            <img className="how__step-img" src="/assets/img/day0-800.webp" width="800" height="534" alt="A traveller with a backpack checking the departures board" loading="lazy" />
          </li>
          <li className="how__step" data-count="You + a bus full of strangers.">
            <p className="how__day">Day 1</p>
            <h3>Meet your people.</h3>
            <p>Awkward hellos at the pickup point. Snacks get shared by the first chai stop, and by dinner there’s a running joke. Trip captains are suspiciously good at icebreakers.</p>
            <img className="how__step-img" src="/assets/img/day1-800.webp" width="800" height="533" alt="Two friends laughing together in warm light" loading="lazy" />
          </li>
          <li className="how__step" data-count="You + a bus full of friends.">
            <p className="how__day">Day 3</p>
            <h3>Explore together.</h3>
            <p>Summits, backwaters, night markets, stargazing at 4,000 metres. The plan is handled, so all you do is show up for the moments — with people as curious as you are.</p>
            <img className="how__step-img" src="/assets/img/day3-800.webp" width="800" height="1000" alt="A Roamers group trekking through the Valley of Flowers" loading="lazy" />
          </li>
          <li className="how__step" data-count="One squad. One group chat that never sleeps.">
            <p className="how__day">Day 7</p>
            <h3>Come back with stories.</h3>
            <p>And a camera roll you’ll scroll for months, a reunion already on the calendar, and a group chat that refuses to go quiet.</p>
            <img className="how__step-img" src="/assets/img/day7-800.webp" width="800" height="533" alt="Friends gathered around a campfire in the forest at night" loading="lazy" />
          </li>
        </ol>
      </div>
    </section>
  );
}
