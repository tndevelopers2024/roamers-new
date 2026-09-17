/* Footer — links and details as on roamers.in */
import { credits } from '@/lib/images';
const R = 'https://www.roamers.in';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__brand">
        <img src="/assets/brand/roamers-pin-lg.png" width="473" height="640" alt="Roamers" loading="lazy" />
        <p>Let’s roam.<br /><em>The ultimate travel community.</em></p>
      </div>
      <div className="wrap footer__grid">
        <div className="footer__col"><h4 className="mono">Backpacking</h4><a href={`${R}/kerala`}>Kerala</a><a href={`${R}/ladakh-circuit`}>Leh Ladakh</a><a href={`${R}/andaman`}>Andaman Island</a><a href={`${R}/meghalaya`}>Meghalaya</a><a href={`${R}/spiti-chandratal`}>Spiti Valley</a></div>
        <div className="footer__col"><h4 className="mono">Short Breaks</h4><a href={`${R}/ooty`}>Ooty</a><a href={`${R}/pondicherry`}>Pondicherry</a><a href={`${R}/kolukkumalai`}>Kolukkumalai</a><a href={`${R}/kodaikanal`}>Kodaikanal</a><a href={`${R}/chikmagalur`}>Chikmagalur</a></div>
        <div className="footer__col"><h4 className="mono">Service</h4><a href="#contact">Contact Us</a><a href={`${R}/cancellation-policy`}>Cancellation Policy</a><a href="https://www.instagram.com/roamers.in/">Instagram</a></div>
        <div className="footer__col"><h4 className="mono">Contact Info</h4><a href="tel:+918122121066">+91 81221 21066</a><a href="mailto:info@roamers.in">info@roamers.in</a><p>Chennai &amp; Delhi, India</p><p>Mon – Sat: 9 AM – 7 PM IST</p></div>
      </div>
      <p className="footer__mark" aria-hidden="true">Roamers</p>
      <div className="wrap footer__base mono">
        <span>© Roamers Travel Community. All Rights Reserved.</span>
        <span>Secure Payments: UPI · Visa · Mastercard · Net Banking · SSL Secured</span>
        <span>Photography: Roamers and Unsplash — {credits().join(', ')}.</span>
      </div>
    </footer>
  );
}
