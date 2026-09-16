/* 01 Hero — the pull-back */
export default function Hero() {
  return (
    <section className="hero" id="top" data-chapter="01" data-chapter-name="Discover" aria-labelledby="hero-title">
      <div className="hero__stage">
        <div className="hero__media">
          <img className="hero__img" src="/assets/img/hero-squad-1600.webp"
            srcSet="/assets/img/hero-squad-1000.webp 1000w, assets/img/hero-squad-1600.webp 1600w, assets/img/hero-squad-2880.webp 2880w"
            sizes="200vw" width="2880" height="1920" fetchPriority="high"
            alt="Six friends silhouetted on a hilltop at sunrise, arms raised" />
          <div className="hero__shade"></div>
          <div className="grain"></div>
        </div>

        <div className="hero__over">
          <p className="hero__fig mono"><span>Fig. 01</span> One traveller. One seat.</p>
          <h1 className="hero__title" id="hero-title">
            <span className="hero__solo">Travel solo.</span>
            <span className="hero__squad">Leave with a squad.</span>
          </h1>
          <div className="hero__foot">
            <p className="hero__lede">Roamers is a social travel club. Book one seat, show up on your own — we handle the route, the stays and, somehow, the friendships.</p>
            <div className="hero__ctas">
              <a className="btn btn--light" href="#trips" data-magnetic><span>Explore Trips</span><i className="btn__arrow" aria-hidden="true">→</i></a>
              <a className="link link--light" href="#people">Meet the Roamers</a>
            </div>
          </div>
          <p className="hero__scroll mono" aria-hidden="true"><i></i>Scroll to pull back</p>
        </div>

        <div className="hero__end" aria-hidden="true">
          <p className="hero__end-fig mono"><span>Fig. 02</span> Same sunrise. Five new friends.</p>
          <p className="hero__end-line">Leave with a <em>squad.</em></p>
        </div>
      </div>
    </section>
  );
}
