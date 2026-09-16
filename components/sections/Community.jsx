/* 09 Community */
export default function Community() {
  return (
    <section className="community" id="community" data-chapter="04" data-chapter-name="Connect" aria-labelledby="community-title">
      <div className="wrap community__grid">
        <div className="community__head">
          <p className="eyebrow mono">(07) Community</p>
          <h2 className="community__title" id="community-title">The adventure doesn’t start when you board the bus. <em>It starts when you meet your people.</em></h2>
          <p className="community__lede">Roamers runs all year, not just on the road. Meetups in Chennai and Coimbatore — coffee, games, workshops, film nights — so the first hello happens long before the first hairpin bend.</p>
          <div className="community__ctas">
            <a className="btn" href="https://www.instagram.com/roamers.in/" data-magnetic><span>Join the community</span><i className="btn__arrow" aria-hidden="true">→</i></a>
            <a className="link" href="https://wa.me/918122121066">Say hi on WhatsApp</a>
          </div>
        </div>
        <div className="community__media">
          <figure className="cm cm--a"><img src="/assets/img/com-cafe-1400.webp" srcSet="/assets/img/com-cafe-800.webp 800w, assets/img/com-cafe-1400.webp 1400w" sizes="(min-width: 900px) 40vw, 90vw" width="1400" height="934" alt="Four friends laughing over coffee" loading="lazy" /></figure>
          <figure className="cm cm--b"><img src="/assets/img/com-meetup-900.webp" width="900" height="600" alt="A meetup in a busy café" loading="lazy" /></figure>
          <p className="cm__tag mono">Coffee &amp; Conversations, Chennai</p>
        </div>
      </div>
    </section>
  );
}
