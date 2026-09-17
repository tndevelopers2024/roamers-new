/* 02 Brand statement */
export default function Statement() {
  return (
    <section className="statement" data-chapter="01" data-chapter-name="Discover" aria-labelledby="statement-title">
      <div className="wrap">
        <p className="eyebrow mono">(01) The idea</p>
        <h2 className="statement__text" id="statement-title">
          You don’t need a travel group<span className="inline-img"><img src="/assets/roamers/t-spiti.avif" width="782" height="500" alt="" loading="lazy" /></span>.
          You just need the courage<span className="inline-img inline-img--tall"><img src="/assets/roamers/trip-kerala.jpg" width="900" height="1600" alt="" loading="lazy" /></span> to go.
          We’ll bring the <em>people</em><span className="inline-img"><img src="/assets/roamers/t-manali.avif" width="782" height="500" alt="" loading="lazy" /></span>.
        </h2>
        <div className="statement__grid">
          <p className="statement__lede">Roamers is a social travel club for solo travelers. We run small-group trips across India and beyond — come alone, leave with a squad.</p>
          <ol className="pillars">
            <li><span className="pillars__n mono">01</span><h3>Everything included</h3><p>Stays, transport, meals & permits. Zero spreadsheets.</p></li>
            <li><span className="pillars__n mono">02</span><h3>Led by trip captains</h3><p>Local leaders who know the shortcuts & sunset spots.</p></li>
            <li><span className="pillars__n mono">03</span><h3>Off the brochure</h3><p>Hand-picked stays & places off the main tourist trail.</p></li>
          </ol>
        </div>
      </div>
    </section>
  );
}
