/* Nav — transparent over the hero, sky bar after */
export default function Nav() {
  return (
    <header className="nav" data-theme="dark">
      <a className="nav__logo" href="#top" aria-label="Roamers — back to top">
        <img className="nav__pin" src="/assets/brand/roamers-pin.png" width="189" height="256" alt="" />
        <span className="nav__word" aria-hidden="true"></span>
      </a>
      <p className="nav__chapter mono" aria-hidden="true"><span className="nav__chapter-num">01</span><span className="nav__chapter-name">Discover</span></p>
      <nav className="nav__links" aria-label="Primary">
        <a href="#departures">Upcoming Trips</a>
        <a href="#trips">Backpacking</a>
        <a href="#ways">Short Breaks</a>
        <a href="#meetups">Community</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="btn btn--nav" href="#departures" data-magnetic><span>Upcoming Trips</span><i className="btn__arrow" aria-hidden="true">→</i></a>
      <button className="nav__menu" type="button" aria-expanded="false" aria-controls="menu"><span className="nav__menu-label">Menu</span><i aria-hidden="true"></i></button>
    </header>
  );
}
