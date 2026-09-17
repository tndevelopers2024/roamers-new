/* 08 Our Travelgram — Roamers photos gather around the handle */
const INSTAGRAM = 'https://www.instagram.com/roamers.in/';

const PHOTOS = [
  ['pp--l', 't-andaman.avif', 782, 500, 'A Roamers group in scuba gear in the sea'],
  ['pp--m', 'event-strangers.avif', 1080, 1080, 'A Roamers Strangers Fun meetup'],
  ['pp--s', 'trip-ladakh.avif', 889, 591, 'Riders on a Ladakh highway'],
  ['pp--m pp--tall', 'trip-kerala.jpg', 900, 1600, 'A traveller on the rocks by the sea in Kerala'],
  ['pp--l', 't-spiti.avif', 782, 500, 'A Roamers traveller with local children'],
  ['pp--s', 'event-pottery.avif', 1080, 1080, 'A Roamers pottery workshop'],
  ['pp--m', 't-manali.avif', 782, 500, 'A Roamers group river rafting'],
  ['pp--m pp--tall', 'trip-valley-of-flowers.jpg', 1440, 1801, 'A traveller among flowers in the Valley of Flowers'],
  ['pp--s', 'trip-meghalaya.avif', 500, 385, 'A waterfall in Meghalaya'],
  ['pp--m', 't-chikmagalur.avif', 782, 500, 'A traveller sitting by a waterfall'],
  ['pp--s', 'trip-kerala-grand.jpg', 1430, 955, 'Houseboats on the Kerala backwaters'],
  ['pp--m', 'trip-andaman.jpg', 1500, 843, 'Boats moored at an island beach'],
];

export default function People() {
  return (
    <section className="people" id="people" data-chapter="04" data-chapter-name="Connect" aria-labelledby="people-title">
      <div className="people__stage">
        <h2 className="people__title" id="people-title">
          <span className="people__t1">Our Travelgram</span>
          <span className="people__t2">@roamers.in</span>
        </h2>
        <div className="people__cloud">
          {PHOTOS.map(([cls, file, w, h, alt]) => (
            <figure key={file} className={`pp ${cls}`}><img src={`/assets/roamers/${file}`} width={w} height={h} alt={alt} loading="lazy" /></figure>
          ))}
        </div>
        <p className="people__note"><a className="link link--light" href={INSTAGRAM}>Follow us</a></p>
      </div>
    </section>
  );
}
