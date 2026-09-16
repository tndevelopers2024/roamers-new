/* 10 Meetups — the calendar as cards */
export default function Meetups() {
  return (
    <section className="meets" id="meetups" data-chapter="04" data-chapter-name="Connect" aria-labelledby="meets-title">
      <div className="wrap meets__head">
        <p className="eyebrow mono">(08) Meetups</p>
        <h2 className="h-display" id="meets-title">The squad meets<br />before <em>the bus.</em></h2>
        <p className="meets__lede">Coffee, games, clay, film nights — small rooms in Chennai and Coimbatore where the first hello happens. Free or near-free, always open to first-timers.</p>
      </div>

      <div className="rail" data-rail>
        <div className="rail__track meets__track" data-rail-track>

          <article className="meet is-open" data-cursor="Register">
            <a className="meet__link" href="https://www.roamers.in/events/c&amp;c" data-transition="Coffee &amp; Conversations">
              <div className="meet__media">
                <img src="/assets/img/com-cafe-800.webp" width="800" height="534" alt="Four friends laughing over coffee" loading="lazy" />
                <p className="meet__slots mono">15 seats</p>
              </div>
              <div className="meet__body">
                <p className="meet__when mono"><span className="meet__d">26</span><span>Sep<br />Sat</span></p>
                <h3 className="meet__name">Coffee &amp; Conversations</h3>
                <p className="meet__line">Sip, chat, swap stories — and meet the people you’ll travel with next.</p>
                <p className="meet__foot"><span className="meet__where mono">Chennai · 5 PM</span><span className="meet__cta mono">Register <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="meet" data-cursor="Get notified">
            <a className="meet__link" href="https://wa.me/918122121066" data-transition="Strangers Fun Meetup">
              <div className="meet__media">
                <img src="/assets/img/com-meetup-900.webp" width="900" height="600" alt="A busy meetup in a café" loading="lazy" />
                <p className="meet__slots mono">Opening soon</p>
              </div>
              <div className="meet__body">
                <p className="meet__when mono"><span className="meet__d">10</span><span>Oct<br />Sat</span></p>
                <h3 className="meet__name">Strangers Fun Meetup</h3>
                <p className="meet__line">Games, icebreakers, laughs — and, reliably, a few future travel buddies.</p>
                <p className="meet__foot"><span className="meet__where mono">Chennai · 6 PM</span><span className="meet__cta mono">Notify me <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="meet is-open" data-cursor="Register">
            <a className="meet__link" href="https://wa.me/918122121066" data-transition="Potluck &amp; Board Games">
              <div className="meet__media">
                <img src="/assets/img/pp-meal-900.webp" width="900" height="600" alt="Friends sharing a long dinner table" loading="lazy" />
                <p className="meet__slots mono">12 seats</p>
              </div>
              <div className="meet__body">
                <p className="meet__when mono"><span className="meet__d">19</span><span>Oct<br />Sun</span></p>
                <h3 className="meet__name">Potluck &amp; Board Games</h3>
                <p className="meet__line">Bring one dish. Leave with a group chat and a very strong Catan opinion.</p>
                <p className="meet__foot"><span className="meet__where mono">Chennai · 12 PM</span><span className="meet__cta mono">Register <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="meet" data-cursor="Get notified">
            <a className="meet__link" href="https://wa.me/918122121066" data-transition="Music &amp; Jam Night">
              <div className="meet__media">
                <img src="/assets/img/pp-guitar-900.webp" width="900" height="600" alt="Hands playing a guitar" loading="lazy" />
                <p className="meet__slots mono">Opening soon</p>
              </div>
              <div className="meet__body">
                <p className="meet__when mono"><span className="meet__d">23</span><span>Oct<br />Fri</span></p>
                <h3 className="meet__name">Music &amp; Jam Night</h3>
                <p className="meet__line">Someone always brings a guitar. This time it’s the whole point.</p>
                <p className="meet__foot"><span className="meet__where mono">Coimbatore · 7 PM</span><span className="meet__cta mono">Notify me <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="meet" data-cursor="Get notified">
            <a className="meet__link" href="https://wa.me/918122121066" data-transition="Mystery Movie Night">
              <div className="meet__media">
                <img src="/assets/img/com-hall-900.webp" width="900" height="600" alt="A screening room filling up before a film" loading="lazy" />
                <p className="meet__slots mono">Opening soon</p>
              </div>
              <div className="meet__body">
                <p className="meet__when mono"><span className="meet__d">07</span><span>Nov<br />Fri</span></p>
                <h3 className="meet__name">Mystery Movie Night</h3>
                <p className="meet__line">A surprise film, too much popcorn, and a proper argument afterwards.</p>
                <p className="meet__foot"><span className="meet__where mono">Coimbatore · 7 PM</span><span className="meet__cta mono">Notify me <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

        </div>
        <div className="rail__nav">
          <button className="rail__arrow" type="button" data-rail-prev aria-label="Previous meetups"><i aria-hidden="true">←</i></button>
          <button className="rail__arrow" type="button" data-rail-next aria-label="More meetups"><i aria-hidden="true">→</i></button>
        </div>
      </div>

      <div className="wrap meets__foot">
        <a className="btn" href="https://www.instagram.com/roamers.in/" data-magnetic><span>Follow for new meetups</span><i className="btn__arrow" aria-hidden="true">→</i></a>
        <p className="meets__note mono">Chennai &amp; Coimbatore now · Bengaluru and Hyderabad next</p>
      </div>
    </section>
  );
}
