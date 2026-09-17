/* 12 Finale — roll credits */
import { PHOTOS, imgProps } from '@/lib/images';
export default function Finale() {
  return (
    <section className="finale" data-chapter="05" data-chapter-name="Join" aria-labelledby="finale-title">
      <div className="finale__stage">
        <div className="finale__media"><img {...imgProps(PHOTOS.kedarkanthaSunrise.src, 1600, [900, 1600, 2400])} sizes="100vw" width="5568" height="4176" alt={PHOTOS.kedarkanthaSunrise.alt} loading="lazy" /><div className="grain"></div></div>
        <div className="finale__credits mono" aria-hidden="true">
          <p><strong>Solo Friendly</strong></p>
          <p><strong>Group Trips</strong></p>
          <p><strong>Treks &amp; Camps</strong></p>
          <p><strong>Roamers Meetups</strong></p>
          <p><strong>Everything Included</strong></p>
          <p><strong>Led by Pros</strong></p>
          <p><strong>Unexplored Paths</strong></p>
        </div>
        <div className="finale__end">
          <h2 className="finale__title" id="finale-title"><span>Discover the world</span> <span>with Roamers!</span></h2>
          <div className="finale__ctas">
            <a className="btn btn--sky btn--xl" href="#departures" data-magnetic><span>Upcoming Trips</span><i className="btn__arrow" aria-hidden="true">→</i></a>
            <a className="link link--light" href="#contact">Talk To Our Travel Experts</a>
          </div>
        </div>
      </div>
    </section>
  );
}
