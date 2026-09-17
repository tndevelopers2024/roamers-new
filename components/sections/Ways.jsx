/* 06 Trip categories — a contents page; destinations as roamers.in lists them */
import { ORIGIN, titleCase } from '@/lib/roamers';
import { PHOTOS } from '@/lib/images';

export default function Ways({ trips, events }) {
  const treks = trips.filter(t => /trek/i.test(t.title)).map(t => titleCase(t.title.replace(/\s*trek\s*/i, '')));
  const cities = [...new Set(events.map(e => e.city).filter(Boolean))];

  const ways = [
    { name: 'Backpacking trips', href: `${ORIGIN}/backpacking-trips`, img: `${PHOTOS.ladakh.src}?w=900&q=80&auto=format&fit=crop`, w: 3715, h: 2572,
      where: ['Kerala', 'Leh Ladakh', 'Andaman Island', 'Meghalaya', 'Spiti Valley'] },
    { name: 'Short Break trips', href: `${ORIGIN}/shortbreak-trips`, img: '/assets/roamers/trip-ooty.jpg', w: 1500, h: 1000,
      where: ['Ooty', 'Pondicherry', 'Kolukkumalai', 'Kodaikanal', 'Chikmagalur'] },
    { name: 'Treks & Camps', href: `${ORIGIN}/trips`, img: '/assets/roamers/trip-valley-of-flowers.jpg', w: 1440, h: 1801,
      where: treks },
    { name: 'Roamers Meetups', href: '#meetups', img: `${PHOTOS.meetup.src}?w=900&q=80&auto=format&fit=crop`, w: 3800, h: 2138,
      where: cities },
  ];

  return (
    <section className="ways" id="ways" data-chapter="03" data-chapter-name="Explore" aria-labelledby="ways-title">
      <div className="wrap">
        <div className="ways__head">
          <p className="eyebrow mono">(05) Trips</p>
          <h2 className="h-display" id="ways-title">Solo friendly.<br /><em>Group trips.</em></h2>
        </div>
        <ul className="ways__list">
          {ways.map((w, i) => (
            <li key={w.name} className="way"><a href={w.href} data-img={w.img}>
              <span className="way__n mono">{String(i + 1).padStart(2, '0')}</span><span className="way__name">{w.name}</span>
              <span className="way__where mono">{w.where.join(' · ')}</span>
              <img className="way__thumb" src={w.img} width={w.w} height={w.h} alt="" loading="lazy" /><i className="way__arrow" aria-hidden="true">→</i></a></li>
          ))}
        </ul>
      </div>
      <div className="ways__float" aria-hidden="true"><img alt="" /></div>
    </section>
  );
}
