/* 01 Hero — the pull-back */
import { PHOTOS, imgProps } from '@/lib/images';
export default function Hero() {
  return (
    <section className="hero" id="top" data-chapter="01" data-chapter-name="Discover" aria-labelledby="hero-title">
      <div className="hero__stage">
        <div className="hero__media">
          <img className="hero__img" {...imgProps(PHOTOS.hero.src, 1600, [1000, 1600, 2880])}
            sizes="200vw" width="1672" height="941" fetchPriority="high"
            alt={PHOTOS.hero.alt} />
          <div className="hero__shade"></div>
          <div className="grain"></div>
        </div>

        <div className="hero__over">
          <h1 className="hero__title" id="hero-title">
            <span className="hero__solo">Solo friendly.</span>
            <span className="hero__squad">Group trips.</span>
          </h1>
          <div className="hero__foot">
            <p className="hero__lede">Discover the world with Roamers! From solo adventures to group travel, we create experiences that bring travelers together. Explore destinations, meet people, and make memories!</p>
            <div className="hero__ctas">
              <a className="btn btn--light" href="#departures" data-magnetic><span>Upcoming Trips</span><i className="btn__arrow" aria-hidden="true">→</i></a>
              <a className="link link--light" href="#meetups">Roamers Meetups</a>
            </div>
          </div>
        </div>

        <div className="hero__end" aria-hidden="true">
          <p className="hero__end-line">Let’s <em>roam.</em></p>
        </div>
      </div>
    </section>
  );
}
