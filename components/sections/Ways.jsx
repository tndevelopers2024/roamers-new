/* 06 Travel categories — a contents page */
export default function Ways() {
  return (
    <section className="ways" id="ways" data-chapter="03" data-chapter-name="Explore" aria-labelledby="ways-title">
      <div className="wrap">
        <div className="ways__head">
          <p className="eyebrow mono">(05) Trip styles</p>
          <h2 className="h-display" id="ways-title">Five ways<br />to <em>roam.</em></h2>
          <p className="ways__lede">Read it like a contents page. Pick the pace that sounds like you.</p>
        </div>
        <ul className="ways__list">
          <li className="way"><a href="https://www.roamers.in/backpacking-trips" data-img="/assets/img/cat-backpacking-900.webp">
            <span className="way__n mono">01</span><span className="way__name">Backpacking</span><span className="way__desc">For the long way round.</span><span className="way__where mono">Kerala · Kodaikanal · Chikmagalur · Thailand</span>
            <img className="way__thumb" src="/assets/img/cat-backpacking-900.webp" width="900" height="687" alt="" loading="lazy" /><i className="way__arrow" aria-hidden="true">→</i></a></li>
          <li className="way"><a href="https://www.roamers.in/shortbreak-trips" data-img="/assets/img/cat-short-900.webp">
            <span className="way__n mono">02</span><span className="way__name">Short Breaks</span><span className="way__desc">Friday night out, Sunday night home.</span><span className="way__where mono">Ooty · Kodaikanal · Pondicherry · Kolukkumalai</span>
            <img className="way__thumb" src="/assets/img/cat-short-900.webp" width="900" height="720" alt="" loading="lazy" /><i className="way__arrow" aria-hidden="true">→</i></a></li>
          <li className="way"><a href="https://www.roamers.in/trips" data-img="/assets/img/cat-treks-900.webp">
            <span className="way__n mono">03</span><span className="way__name">Treks &amp; Camps</span><span className="way__desc">Summits, snow and a very large sky.</span><span className="way__where mono">Kedarkantha · Valley of Flowers · Kolukkumalai</span>
            <img className="way__thumb" src="/assets/img/cat-treks-900.webp" width="900" height="530" alt="" loading="lazy" /><i className="way__arrow" aria-hidden="true">→</i></a></li>
          <li className="way"><a href="https://www.roamers.in/trips" data-img="/assets/img/cat-intl-900.webp">
            <span className="way__n mono">04</span><span className="way__name">International</span><span className="way__desc">Passports out, squad sorted.</span><span className="way__where mono">Sri Lanka · Thailand</span>
            <img className="way__thumb" src="/assets/img/cat-intl-900.webp" width="900" height="1349" alt="" loading="lazy" /><i className="way__arrow" aria-hidden="true">→</i></a></li>
          <li className="way"><a href="https://www.roamers.in/trips" data-img="/assets/img/cat-solo-900.webp">
            <span className="way__n mono">05</span><span className="way__name">Solo-Friendly</span><span className="way__desc">Honestly? All of them. These are extra good for first-timers.</span><span className="way__where mono">Spiti · Meghalaya · Andaman</span>
            <img className="way__thumb" src="/assets/img/cat-solo-900.webp" width="900" height="1200" alt="" loading="lazy" /><i className="way__arrow" aria-hidden="true">→</i></a></li>
        </ul>
      </div>
      <div className="ways__float" aria-hidden="true"><img alt="" /></div>
    </section>
  );
}
