/* 04 Featured adventures — horizontal chapters */
export default function Trips() {
  return (
    <section className="trips" id="trips" data-chapter="03" data-chapter-name="Explore" aria-labelledby="trips-title">
      <div className="trips__pin">
        <div className="trips__track">
          <div className="trips__intro">
            <p className="eyebrow mono">(03) Featured adventures</p>
            <h2 className="h-display" id="trips-title">Six places.<br />Six <em>chapters.</em></h2>
            <p className="trips__lede">Upcoming group departures this season. Every one of them is solo-friendly, every one of them is sorted end to end.</p>
            <p className="trips__hint mono"><i aria-hidden="true"></i><span className="hint-desk">Keep scrolling</span><span className="hint-touch">Swipe</span></p>
          </div>

          <article className="chapter" data-cursor="View trip">
            <a className="chapter__link" href="https://www.roamers.in/ladakh-circuit" data-transition="Ladakh">
              <div className="chapter__media"><img className="chapter__img" src="/assets/img/ch-ladakh-1600.webp" srcSet="/assets/img/ch-ladakh-900.webp 900w, assets/img/ch-ladakh-1600.webp 1600w" sizes="(min-width: 900px) 60vw, 90vw" width="1600" height="780" alt="A rider on a motorbike kicking up dust on a Ladakh road" loading="lazy" /></div>
              <figure className="chapter__inset"><img src="/assets/img/ch-ladakh-2-800.webp" width="800" height="1000" alt="" loading="lazy" /><figcaption className="mono">Pangong road, 4,225 m</figcaption></figure>
              <p className="chapter__num mono">Ch. 01</p>
              <h3 className="chapter__name">Ladakh</h3>
              <p className="chapter__line">Where the road runs out of oxygen — never out of stories.</p>
              <dl className="chapter__meta">
                <div><dt>Duration</dt><dd>8D / 7N</dd></div>
                <div><dt>Starts</dt><dd>Ex Leh</dd></div>
                <div className="wide"><dt>Route</dt><dd>Leh · Khardung La · Nubra · Pangong</dd></div>
                <div className="wide"><dt>Next departures</dt><dd>19 Sep · 26 Sep</dd></div>
              </dl>
              <span className="chapter__cta">View trip <i aria-hidden="true">→</i></span>
            </a>
          </article>

          <article className="chapter" data-cursor="View trip">
            <a className="chapter__link" href="https://www.roamers.in/spiti-chandratal" data-transition="Spiti">
              <div className="chapter__media"><img className="chapter__img" src="/assets/img/ch-spiti-1920.webp" srcSet="/assets/img/ch-spiti-960.webp 960w, assets/img/ch-spiti-1920.webp 1920w" sizes="(min-width: 900px) 60vw, 90vw" width="1920" height="1280" alt="Key Monastery on its hilltop in Spiti, lit by late sun" loading="lazy" /></div>
              <figure className="chapter__inset"><img src="/assets/img/ch-spiti-2-800.webp" width="800" height="1000" alt="" loading="lazy" /><figcaption className="mono">The squad, Kaza</figcaption></figure>
              <p className="chapter__num mono">Ch. 02</p>
              <h3 className="chapter__name">Spiti</h3>
              <p className="chapter__line">Moonscapes, monasteries and the quietest night sky you’ll ever share.</p>
              <dl className="chapter__meta">
                <div><dt>Duration</dt><dd>7D / 6N</dd></div>
                <div><dt>Starts</dt><dd>Ex Delhi</dd></div>
                <div className="wide"><dt>Route</dt><dd>Kalpa · Kaza · Chandratal</dd></div>
                <div className="wide"><dt>Next departures</dt><dd>19 Sep · 3 Oct</dd></div>
              </dl>
              <span className="chapter__cta">View trip <i aria-hidden="true">→</i></span>
            </a>
          </article>

          <article className="chapter" data-cursor="View trip">
            <a className="chapter__link" href="https://www.roamers.in/meghalaya" data-transition="Meghalaya">
              <div className="chapter__media"><img className="chapter__img" src="/assets/img/ch-meghalaya-1920.webp" srcSet="/assets/img/ch-meghalaya-960.webp 960w, assets/img/ch-meghalaya-1920.webp 1920w" sizes="(min-width: 900px) 60vw, 90vw" width="1920" height="1440" alt="The glass-clear Umngot river in Meghalaya" loading="lazy" /></div>
              <figure className="chapter__inset"><img src="/assets/img/ch-meghalaya-2-800.webp" width="800" height="600" alt="" loading="lazy" /><figcaption className="mono">Umngot, Dawki</figcaption></figure>
              <p className="chapter__num mono">Ch. 03</p>
              <h3 className="chapter__name">Meghalaya</h3>
              <p className="chapter__line">Living root bridges, rivers like glass, and rain that feels like a welcome.</p>
              <dl className="chapter__meta">
                <div><dt>Duration</dt><dd>6D / 5N</dd></div>
                <div><dt>Starts</dt><dd>Ex Guwahati</dd></div>
                <div className="wide"><dt>Route</dt><dd>Guwahati · Shillong · Cherrapunjee</dd></div>
                <div className="wide"><dt>Next departures</dt><dd>3 Oct · 10 Oct · 17 Oct</dd></div>
              </dl>
              <span className="chapter__cta">View trip <i aria-hidden="true">→</i></span>
            </a>
          </article>

          <article className="chapter" data-cursor="View trip">
            <a className="chapter__link" href="https://www.roamers.in/kerala-grand-circuit" data-transition="Kerala">
              <div className="chapter__media"><img className="chapter__img" src="/assets/img/ch-kerala-1500.webp" srcSet="/assets/img/ch-kerala-900.webp 900w, assets/img/ch-kerala-1500.webp 1500w" sizes="(min-width: 900px) 60vw, 90vw" width="1500" height="1000" alt="Mist rolling over the tea hills of Munnar" loading="lazy" /></div>
              <figure className="chapter__inset"><img src="/assets/img/ch-kerala-2-800.webp" width="800" height="450" alt="" loading="lazy" /><figcaption className="mono">Backwaters, Alleppey</figcaption></figure>
              <p className="chapter__num mono">Ch. 04</p>
              <h3 className="chapter__name">Kerala</h3>
              <p className="chapter__line">Backwater mornings, tea-hill afternoons, cliffside sunsets in Varkala.</p>
              <dl className="chapter__meta">
                <div><dt>Duration</dt><dd>7D / 6N</dd></div>
                <div><dt>Starts</dt><dd>Ex Kochi</dd></div>
                <div className="wide"><dt>Route</dt><dd>Kochi · Munnar · Vagamon · Varkala · Alleppey</dd></div>
                <div className="wide"><dt>Next departures</dt><dd>3 Oct · 17 Oct · 24 Oct</dd></div>
              </dl>
              <span className="chapter__cta">View trip <i aria-hidden="true">→</i></span>
            </a>
          </article>

          <article className="chapter" data-cursor="View trip">
            <a className="chapter__link" href="https://www.roamers.in/srilanka" data-transition="Sri Lanka">
              <div className="chapter__media"><img className="chapter__img" src="/assets/img/ch-srilanka-1920.webp" srcSet="/assets/img/ch-srilanka-960.webp 960w, assets/img/ch-srilanka-1920.webp 1920w" sizes="(min-width: 900px) 60vw, 90vw" width="1920" height="1200" alt="A blue train crossing the Nine Arch Bridge near Ella" loading="lazy" /></div>
              <figure className="chapter__inset"><img src="/assets/img/ch-srilanka-2-800.webp" width="800" height="533" alt="" loading="lazy" /><figcaption className="mono">Galle, golden hour</figcaption></figure>
              <p className="chapter__num mono">Ch. 05</p>
              <h3 className="chapter__name">Sri Lanka</h3>
              <p className="chapter__line">Train windows, tea country, and the slow coast from Ella to Galle.</p>
              <dl className="chapter__meta">
                <div><dt>Duration</dt><dd>7D / 6N</dd></div>
                <div><dt>Starts</dt><dd>Ex Colombo</dd></div>
                <div className="wide"><dt>Route</dt><dd>Sigiriya · Kandy · Ella · Galle · Bentota</dd></div>
                <div className="wide"><dt>Next departures</dt><dd>10 Oct · 24 Oct</dd></div>
              </dl>
              <span className="chapter__cta">View trip <i aria-hidden="true">→</i></span>
            </a>
          </article>

          <article className="chapter" data-cursor="View trip">
            <a className="chapter__link" href="https://www.roamers.in/trips" data-transition="Thailand">
              <div className="chapter__media"><img className="chapter__img" src="/assets/img/ch-thailand-2000.webp" srcSet="/assets/img/ch-thailand-960.webp 960w, assets/img/ch-thailand-2000.webp 2000w" sizes="(min-width: 900px) 60vw, 90vw" width="2000" height="1384" alt="Longtail boats moored below limestone cliffs in Thailand" loading="lazy" /></div>
              <figure className="chapter__inset"><img src="/assets/img/ch-thailand-2-800.webp" width="800" height="578" alt="" loading="lazy" /><figcaption className="mono">Railay, low tide</figcaption></figure>
              <p className="chapter__num mono">Ch. 06</p>
              <h3 className="chapter__name">Thailand</h3>
              <p className="chapter__line">Island hops, 2 a.m. street food, and a new friend on every longtail.</p>
              <dl className="chapter__meta">
                <div><dt>Duration</dt><dd>6D / 5N</dd></div>
                <div><dt>Starts</dt><dd>Ex Bangkok</dd></div>
                <div className="wide"><dt>Route</dt><dd>Bangkok · Pattaya · Coral Island</dd></div>
                <div className="wide"><dt>Next departures</dt><dd>10 Nov · 24 Nov</dd></div>
              </dl>
              <span className="chapter__cta">View trip <i aria-hidden="true">→</i></span>
            </a>
          </article>

          <div className="trips__outro">
            <p className="trips__outro-big">40+ destinations.<br /><em>One seat is all it takes.</em></p>
            <a className="btn btn--sky" href="https://www.roamers.in/trips" data-magnetic data-transition="All trips"><span>All upcoming trips</span><i className="btn__arrow" aria-hidden="true">→</i></a>
          </div>
        </div>
        <div className="trips__progress" aria-hidden="true"><span></span></div>
      </div>
    </section>
  );
}
