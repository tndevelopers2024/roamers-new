/* 05 Upcoming group trips — the booking board, live from roamers.in */
import { ORIGIN, titleCase } from '@/lib/roamers';
import { imgProps } from '@/lib/images';

export default function Departures({ trips, months }) {
  return (
    <section className="deps" id="departures" data-chapter="03" data-chapter-name="Explore" aria-labelledby="deps-title">
      <div className="wrap">
        <div className="deps__head">
          <p className="eyebrow mono">(02) Upcoming departures</p>
          <h2 className="h-display" id="deps-title">Upcoming<br /><em>Group Trips.</em></h2>
        </div>

        <div className="deps__bar">
          <div className="deps__filters mono" role="group" aria-label="Filter departures by month">
            <button className="fchip is-on" type="button" data-filter="all" aria-pressed="true">All<span className="fchip__n">{trips.length}</span></button>
            {months.map(m => (
              <button key={m.key} className="fchip" type="button" data-filter={m.key} aria-pressed="false">{m.label}<span className="fchip__n">{m.count}</span></button>
            ))}
          </div>
          <p className="deps__count mono" aria-live="polite"><span data-dep-count>{trips.length}</span> trips</p>
        </div>
      </div>

      <div className="rail" data-rail>
        <div className="rail__track deps__track" data-rail-track>
          {trips.map((t, i) => {
            const name = titleCase(t.title);
            return (
              <article key={t.key || t.title} className="dep" data-months={t.months.join(' ')} data-cursor="View trip">
                <a className="dep__link" href={t.url || `${ORIGIN}/trips`} data-transition={name}>
                  <span className="dep__rule" aria-hidden="true"></span>
                  <div className={`dep__media${t.image ? '' : ' dep__media--none'}`}>
                    {t.image && <img {...imgProps(t.image, 800, [640, 1000])} sizes="(min-width: 900px) 24rem, 80vw" alt={name} loading="lazy" />}
                    <p className="dep__chips mono"><span>{t.duration}</span><span>Ex {t.from}</span></p>
                    <p className="dep__idx mono" aria-hidden="true">Trip {String(i + 1).padStart(2, '0')}</p>
                  </div>
                  <div className="dep__body">
                    <h3 className="dep__name">{name}</h3>
                    <p className="dep__route mono">{t.locations}</p>
                    <p className="dep__dates mono">{t.dates.map(d => <span key={d}>{d}</span>)}</p>
                    <p className="dep__foot">
                      {t.price
                        ? <span className="dep__price"><span className="mono">Starts</span><strong>{t.price}</strong></span>
                        : <span />}
                      <span className="dep__cta mono">View Trip <i aria-hidden="true">→</i></span>
                    </p>
                  </div>
                </a>
              </article>
            );
          })}

          <p className="deps__empty mono" hidden>No departures that month.</p>
        </div>
        <div className="rail__nav">
          <button className="rail__arrow" type="button" data-rail-prev aria-label="Previous departures"><i aria-hidden="true">←</i></button>
          <button className="rail__arrow" type="button" data-rail-next aria-label="More departures"><i aria-hidden="true">→</i></button>
        </div>
      </div>

      <div className="wrap">
        <div className="deps__foot">
          <a className="btn btn--sky" href={`${ORIGIN}/trips`} data-magnetic><span>More Trips</span><i className="btn__arrow" aria-hidden="true">→</i></a>
        </div>
      </div>
    </section>
  );
}
