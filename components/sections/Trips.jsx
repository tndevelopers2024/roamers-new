/* 04 Backpacking trips — horizontal chapters, the longest upcoming trips */
import { ORIGIN, titleCase, placeName } from '@/lib/roamers';
import { imgProps } from '@/lib/images';

const days = t => parseInt(t.duration, 10) || 0;

export default function Trips({ trips }) {
  const featured = trips.filter(t => t.image).sort((a, b) => days(b) - days(a)).slice(0, 3);

  return (
    <section className="trips" id="trips" data-chapter="03" data-chapter-name="Explore" aria-labelledby="trips-title">
      <div className="trips__pin">
        <div className="trips__track">
          <div className="trips__intro">
            <p className="eyebrow mono">(04) Backpacking trips</p>
            <h2 className="h-display" id="trips-title">40+<br /><em>Destinations.</em></h2>
            <p className="trips__hint mono"><i aria-hidden="true"></i><span className="hint-desk">Keep scrolling</span><span className="hint-touch">Swipe</span></p>
          </div>

          {featured.map((t, i) => {
            const name = titleCase(t.title);
            return (
              <article key={t.key || t.title} className="chapter" data-cursor="View trip">
                <a className="chapter__link" href={t.url || `${ORIGIN}/backpacking-trips`} data-transition={name}>
                  <div className="chapter__media"><img className="chapter__img" {...imgProps(t.image)} sizes="(min-width: 900px) 60vw, 90vw" alt={name} loading="lazy" /></div>
                  <p className="chapter__num mono">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="chapter__name">{placeName(t.title)}</h3>
                  <p className="chapter__line">{t.locations}</p>
                  <dl className="chapter__meta">
                    <div><dt>Duration</dt><dd>{t.duration}</dd></div>
                    <div><dt>Starts</dt><dd>Ex {t.from}</dd></div>
                    {t.price && <div className="wide"><dt>Starting price</dt><dd>{t.price}</dd></div>}
                    <div className="wide"><dt>Upcoming dates</dt><dd>{t.dates.slice(0, 4).join(' · ')}</dd></div>
                  </dl>
                  <span className="chapter__cta">View Trip <i aria-hidden="true">→</i></span>
                </a>
              </article>
            );
          })}

          <div className="trips__outro">
            <p className="trips__outro-big">Backpacking<br /><em>trips.</em></p>
            <a className="btn btn--sky" href={`${ORIGIN}/backpacking-trips`} data-magnetic><span>Backpacking trips</span><i className="btn__arrow" aria-hidden="true">→</i></a>
          </div>
        </div>
        <div className="trips__progress" aria-hidden="true"><span></span></div>
      </div>
    </section>
  );
}
