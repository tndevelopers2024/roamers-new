/* 09 Roamers Meetups — live from roamers.in */
import { upcomingEventDates } from '@/lib/roamers';
import { imgProps } from '@/lib/images';

export default function Meetups({ events }) {
  return (
    <section className="meets" id="meetups" data-chapter="04" data-chapter-name="Connect" aria-labelledby="meets-title">
      <div className="wrap meets__head">
        <p className="eyebrow mono">(07) Meetups</p>
        <h2 className="h-display" id="meets-title">Roamers<br /><em>Meetups.</em></h2>
      </div>

      <div className="rail" data-rail>
        <div className="rail__track meets__track" data-rail-track>
          {events.map(e => {
            const dates = upcomingEventDates(e.dates);
            const open = Boolean(e.url);
            const Tag = open ? 'a' : 'div';
            return (
              <article key={e.title} className={`meet${open ? ' is-open' : ''}`} data-cursor={open ? e.cta : undefined}>
                <Tag className="meet__link" {...(open ? { href: e.url, 'data-transition': e.title } : {})}>
                  <div className="meet__media">
                    {e.image && <img {...imgProps(e.image, 800, [640, 1000])} sizes="(min-width: 900px) 22rem, 80vw" alt={e.alt || e.title} loading="lazy" />}
                    <p className="meet__slots mono">{e.slot && e.slot !== '-' ? `Slot: ${e.slot}` : e.cta}</p>
                  </div>
                  <div className="meet__body">
                    {dates.length > 0 && (
                      <p className="meet__when mono"><span className="meet__d">{dates[0].day}</span><span>{dates[0].month}</span></p>
                    )}
                    <h3 className="meet__name">{e.title}</h3>
                    <p className="meet__line">{e.line}</p>
                    <p className="meet__foot"><span className="meet__where mono">{e.city}</span><span className="meet__cta mono">{e.cta}{open && <> <i aria-hidden="true">→</i></>}</span></p>
                  </div>
                </Tag>
              </article>
            );
          })}
        </div>
        <div className="rail__nav">
          <button className="rail__arrow" type="button" data-rail-prev aria-label="Previous meetups"><i aria-hidden="true">←</i></button>
          <button className="rail__arrow" type="button" data-rail-next aria-label="More meetups"><i aria-hidden="true">→</i></button>
        </div>
      </div>
    </section>
  );
}
