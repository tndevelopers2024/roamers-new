/* 07 Season collection — Christmas & New Year */
export default function Season() {
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
            <p className="season__lede">End the year somewhere that earns the last page of the album. Six departures over the long holiday window — the ones that sell out first, every single year.</p>
            <p className="season__meta mono"><span>26 Dec — 02 Jan</span><span>6 departures</span><span>Booking open</span></p>
          </div>
        </div>
      </div>

      <div className="rail" data-rail>
        <div className="rail__track season__track" data-rail-track>

          <article className="scard" data-cursor="View trip">
            <a className="scard__link" href="https://www.roamers.in/srilanka" data-transition="Sri Lanka">
              <img className="scard__img" src="/assets/img/ch-srilanka-2-800.webp" width="800" height="533" alt="Golden hour on the Galle coast, Sri Lanka" loading="lazy" />
              <span className="scard__scrim" aria-hidden="true"></span>
              <p className="scard__tag mono">27 Dec — 02 Jan</p>
              <div className="scard__body">
                <h3 className="scard__name">Sri Lanka</h3>
                <p className="scard__line mono">6 nights · Ella, Galle, Bentota</p>
                <p className="scard__foot"><span className="scard__price"><span className="mono">from</span><strong>₹43,990</strong></span><span className="scard__cta mono">View <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="scard" data-cursor="View trip">
            <a className="scard__link" href="https://www.roamers.in/trips" data-transition="Andaman">
              <img className="scard__img" src="/assets/img/pp-selfie-900.webp" width="900" height="900" alt="A Roamers group on the water in Port Blair, Andaman" loading="lazy" />
              <span className="scard__scrim" aria-hidden="true"></span>
              <p className="scard__tag mono">28 Dec — 02 Jan</p>
              <div className="scard__body">
                <h3 className="scard__name">Andaman</h3>
                <p className="scard__line mono">5 nights · Havelock, Neil</p>
                <p className="scard__foot"><span className="scard__price"><span className="mono">from</span><strong>₹37,500</strong></span><span className="scard__cta mono">View <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="scard" data-cursor="View trip">
            <a className="scard__link" href="https://www.roamers.in/trips" data-transition="Thailand">
              <img className="scard__img" src="/assets/img/ch-thailand-2-800.webp" width="800" height="578" alt="A climber on the limestone cliffs at Railay, Thailand" loading="lazy" />
              <span className="scard__scrim" aria-hidden="true"></span>
              <p className="scard__tag mono">27 Dec — 01 Jan</p>
              <div className="scard__body">
                <h3 className="scard__name">Thailand</h3>
                <p className="scard__line mono">5 nights · Bangkok, Coral Island</p>
                <p className="scard__foot"><span className="scard__price"><span className="mono">from</span><strong>₹37,500</strong></span><span className="scard__cta mono">View <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="scard" data-cursor="View trip">
            <a className="scard__link" href="https://www.roamers.in/meghalaya" data-transition="Meghalaya">
              <img className="scard__img" src="/assets/img/ch-meghalaya-2-800.webp" width="800" height="600" alt="The Umngot river at Dawki, Meghalaya" loading="lazy" />
              <span className="scard__scrim" aria-hidden="true"></span>
              <p className="scard__tag mono">26 Dec — 31 Dec</p>
              <div className="scard__body">
                <h3 className="scard__name">Meghalaya</h3>
                <p className="scard__line mono">5 nights · Shillong, Cherrapunjee</p>
                <p className="scard__foot"><span className="scard__price"><span className="mono">from</span><strong>₹21,990</strong></span><span className="scard__cta mono">View <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="scard" data-cursor="View trip">
            <a className="scard__link" href="https://www.roamers.in/kerala-grand-circuit" data-transition="Kerala">
              <img className="scard__img" src="/assets/img/ch-kerala-2-800.webp" width="800" height="450" alt="Palms leaning over the Kerala backwaters" loading="lazy" />
              <span className="scard__scrim" aria-hidden="true"></span>
              <p className="scard__tag mono">27 Dec — 02 Jan</p>
              <div className="scard__body">
                <h3 className="scard__name">Kerala</h3>
                <p className="scard__line mono">6 nights · Munnar, Alleppey, Varkala</p>
                <p className="scard__foot"><span className="scard__price"><span className="mono">from</span><strong>₹16,990</strong></span><span className="scard__cta mono">View <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="scard" data-cursor="View trip">
            <a className="scard__link" href="https://www.roamers.in/shortbreak-trips" data-transition="Ooty">
              <img className="scard__img" src="/assets/img/cat-short-900.webp" width="900" height="720" alt="Sunrise over the tea slopes above Ooty" loading="lazy" />
              <span className="scard__scrim" aria-hidden="true"></span>
              <p className="scard__tag mono">30 Dec — 01 Jan</p>
              <div className="scard__body">
                <h3 className="scard__name">Ooty</h3>
                <p className="scard__line mono">2 nights · Coonoor, Kolukkumalai</p>
                <p className="scard__foot"><span className="scard__price"><span className="mono">from</span><strong>₹9,990</strong></span><span className="scard__cta mono">View <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

        </div>
        <div className="rail__nav">
          <button className="rail__arrow" type="button" data-rail-prev aria-label="Previous trips"><i aria-hidden="true">←</i></button>
          <button className="rail__arrow" type="button" data-rail-next aria-label="More trips"><i aria-hidden="true">→</i></button>
        </div>
      </div>

      <div className="wrap season__foot">
        <a className="btn" href="https://www.roamers.in/trips" data-magnetic data-transition="Season trips"><span>View the whole collection</span><i className="btn__arrow" aria-hidden="true">→</i></a>
        <p className="season__note mono">Last year every New Year departure was full by 12 November.</p>
      </div>
    </section>
  );
}
