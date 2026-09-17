/* 11 Trust — the numbers and contact details from roamers.in */
export default function Proof() {
  return (
    <section className="proof" id="proof" data-chapter="05" data-chapter-name="Join" aria-labelledby="proof-title">
      <div className="wrap">
        <p className="eyebrow mono" id="proof-title">(09) Roamers in numbers</p>
        <p className="proof__poem">
          <span className="num" data-to="500" data-suffix="+">500+</span> <span className="pw">Trips Completed ·</span>
          <span className="num num--accent" data-to="10" data-suffix="K+">10K+</span> <span className="pw"><em>Happy Travelers</em> ·</span>
          <span className="num" data-to="40" data-suffix="+">40+</span> <span className="pw">Destinations ·</span>
          <span className="num num--accent" data-to="4.9" data-decimals="1" data-suffix="★">4.9★</span> <span className="pw"><em>Average Rating</em> ·</span>
          <span className="num" data-to="5" data-suffix="+">5+</span> <span className="pw">Years of Adventure</span>
        </p>
        <div className="proof__base" id="contact">
          <ul className="proof__list">
            <li><span className="mono">Support Line</span><a href="tel:+918122121066">+91 81221 21066</a></li>
            <li><span className="mono">WhatsApp Us</span><a href="https://wa.me/918122121066">+91 81221 21066</a></li>
            <li><span className="mono">Email Us</span><a href="mailto:info@roamers.in">info@roamers.in</a></li>
            <li><span className="mono">Our Offices</span><a href="https://maps.google.com/?q=Chennai,India">Chennai &amp; Delhi, India</a></li>
            <li><span className="mono">Office Hours</span>Mon – Sat: 9 AM – 7 PM IST</li>
          </ul>
          <div className="expert">
            <p className="expert__title">Talk To Our Travel Experts</p>
            <div className="expert__ctas">
              <a className="btn" href="https://www.roamers.in/#contact-roamers" data-magnetic><span>Request Call Back</span></a>
              <a className="link" href="https://wa.me/918122121066">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
