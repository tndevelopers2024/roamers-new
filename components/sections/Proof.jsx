/* 12 Trust — a data poem */
export default function Proof() {
  return (
    <section className="proof" id="proof" data-chapter="05" data-chapter-name="Join" aria-labelledby="proof-title">
      <div className="wrap">
        <p className="eyebrow mono" id="proof-title">(10) The fine print, in very large print</p>
        <p className="proof__poem">
          <span className="pw">In</span> <span className="num" data-to="5" data-suffix="+">5+</span> <span className="pw">years,</span>
          <span className="num num--accent" data-to="10" data-suffix="K+">10K+</span> <span className="pw"><em>travellers</em> have taken</span>
          <span className="num" data-to="500" data-suffix="+">500+</span> <span className="pw">trips to</span>
          <span className="num" data-to="40" data-suffix="+">40+</span> <span className="pw"><em>destinations</em> — and rated the whole thing</span>
          <span className="num num--accent" data-to="4.9" data-decimals="1" data-suffix="★">4.9★</span>
        </p>
        <div className="proof__base">
          <ul className="proof__list">
            <li><span className="mono">Included</span>Transport, stays, meals on the itinerary, permits.</li>
            <li><span className="mono">On the ground</span>A trip captain on every departure, local guides where it matters.</li>
            <li><span className="mono">Before you go</span>A group chat, a packing list and a human you can call.</li>
          </ul>
          <div className="expert">
            <p className="expert__title">Not sure which trip is your trip?</p>
            <p className="expert__text">Talk to a travel expert — no pressure, no spam, just honest advice.</p>
            <div className="expert__ctas">
              <a className="btn" href="tel:+918122121066" data-magnetic><span>Call +91 81221 21066</span></a>
              <a className="link" href="https://wa.me/918122121066">Request a call back on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
