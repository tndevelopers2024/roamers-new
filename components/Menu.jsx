/* Menu overlay — tablet and mobile */
import { titleCase } from '@/lib/roamers';
import { imgProps } from '@/lib/images';

export default function Menu({ next }) {
  const when = next && new Date(next.next).toLocaleDateString('en-IN', { weekday: 'short', day: '2-digit', month: 'short', timeZone: 'UTC' });
  return (
    <div className="menu" id="menu" aria-hidden="true">
      <div className="menu__inner">
        <nav className="menu__links" aria-label="Menu">
          <a href="#departures"><span className="mono">01</span>Upcoming Trips</a>
          <a href="#trips"><span className="mono">02</span>Backpacking</a>
          <a href="#season"><span className="mono">03</span>Christmas &amp; New Year</a>
          <a href="#meetups"><span className="mono">04</span>Meetups</a>
          <a href="#contact"><span className="mono">05</span>Contact</a>
        </nav>
        {next && (
          <a className="menu__next" href={next.url || 'https://www.roamers.in/trips'}>
            {next.image && <img {...imgProps(next.image, 900, [640, 1000])} sizes="90vw" alt="" loading="lazy" />}
            <span className="mono">Next departure</span>
            <strong>{titleCase(next.title)} — {when}</strong>
          </a>
        )}
        <div className="menu__contact mono">
          <a href="tel:+918122121066">+91 81221 21066</a>
          <a href="https://wa.me/918122121066">WhatsApp</a>
          <a href="https://www.instagram.com/roamers.in/">Instagram</a>
        </div>
      </div>
    </div>
  );
}
