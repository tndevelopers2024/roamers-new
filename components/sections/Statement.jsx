/* 02 Brand statement */
export default function Statement() {
  return (
    <section className="statement" data-chapter="01" data-chapter-name="Discover" aria-labelledby="statement-title">
      <div className="wrap">
        <p className="eyebrow mono">(01) The idea</p>
        <h2 className="statement__text" id="statement-title">
          You don’t need a travel group<span className="inline-img"><img src="/assets/img/st-group-640.webp" width="640" height="640" alt="" loading="lazy" /></span>.
          You just need the courage<span className="inline-img inline-img--tall"><img src="/assets/img/st-rider-640.webp" width="640" height="800" alt="" loading="lazy" /></span> to go.
          We’ll bring the <em>people</em><span className="inline-img"><img src="/assets/img/st-joy-640.webp" width="640" height="640" alt="" loading="lazy" /></span>.
        </h2>
        <div className="statement__grid">
          <p className="statement__lede">Roamers is a social travel club based in Chennai. We run small-group trips across India and beyond, built for everyone who is done waiting for their friends’ calendars to line up. Come alone or bring a friend — either way, you won’t be alone for long.</p>
          <ol className="pillars">
            <li><span className="pillars__n mono">01</span><h3>Everything included</h3><p>Transport, stays, meals, permits and the plan. One booking. Zero spreadsheets.</p></li>
            <li><span className="pillars__n mono">02</span><h3>Led by trip captains</h3><p>Leaders and local guides who know the shortcut, the sunset spot and the good chai.</p></li>
            <li><span className="pillars__n mono">03</span><h3>Off the brochure</h3><p>Hand-picked food, stays and places you won’t find on a tour-bus itinerary.</p></li>
          </ol>
        </div>
      </div>
    </section>
  );
}
