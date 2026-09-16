/* Menu overlay — tablet and mobile */
export default function Menu() {
  return (
    <div className="menu" id="menu" aria-hidden="true">
      <div className="menu__inner">
        <nav className="menu__links" aria-label="Menu">
          <a href="#departures"><span className="mono">01</span>Departures</a>
          <a href="#trips"><span className="mono">02</span>Trips</a>
          <a href="#season"><span className="mono">03</span>Season</a>
          <a href="#meetups"><span className="mono">04</span>Meetups</a>
          <a href="#proof"><span className="mono">05</span>About</a>
        </nav>
        <a className="menu__next" href="https://www.roamers.in/ladakh-circuit">
          <img src="/assets/img/ch-ladakh-900.webp" width="900" height="439" alt="" loading="lazy" />
          <span className="mono">Next departure</span>
          <strong>Ladakh — Sat, 19 Sep</strong>
        </a>
        <div className="menu__contact mono">
          <a href="tel:+918122121066">+91 81221 21066</a>
          <a href="https://wa.me/918122121066">WhatsApp</a>
          <a href="https://www.instagram.com/roamers.in/">Instagram</a>
        </div>
      </div>
    </div>
  );
}
