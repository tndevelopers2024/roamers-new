/* Footer */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__brand">
        <img src="/assets/brand/roamers-pin-lg.png" width="473" height="640" alt="Roamers" loading="lazy" />
        <p>Travel solo.<br /><em>Leave with a squad.</em></p>
      </div>
      <div className="wrap footer__grid">
        <div className="footer__col"><h4 className="mono">Trips</h4><a href="#departures">Upcoming departures</a><a href="https://www.roamers.in/trips">All trips</a><a href="https://www.roamers.in/backpacking-trips">Backpacking</a><a href="https://www.roamers.in/shortbreak-trips">Short breaks</a><a href="https://www.roamers.in/kedarkantha">Treks &amp; camps</a><a href="https://www.roamers.in/srilanka">International</a></div>
        <div className="footer__col"><h4 className="mono">Community</h4><a href="#meetups">Meetups</a><a href="https://www.instagram.com/roamers.in/">Instagram</a><a href="https://wa.me/918122121066">WhatsApp</a></div>
        <div className="footer__col"><h4 className="mono">Roamers</h4><a href="#proof">About</a><a href="mailto:info@roamers.in">Contact</a><a href="https://www.roamers.in/cancellation-policy">Cancellation policy</a></div>
        <div className="footer__col"><h4 className="mono">Say hi</h4><a href="tel:+918122121066">+91 81221 21066</a><a href="mailto:info@roamers.in">info@roamers.in</a><p>Chennai, India</p></div>
      </div>
      <p className="footer__mark" aria-hidden="true">Roamers</p>
      <div className="wrap footer__base mono">
        <span>© 2026 Roamers. Travel solo. Leave with a squad.</span>
        <span>Photography: Roamers trips, Unsplash, and Wikimedia Commons — Prasad Gaude &amp; ANKAN (CC BY-SA 4.0), A.Savin (Free Art License).</span>
      </div>
    </footer>
  );
}
