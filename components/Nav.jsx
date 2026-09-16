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
        <a href="#trips">Trips</a>
        <a href="#departures">Departures</a>
        <a href="#ways">Experiences</a>
        <a href="#meetups">Meetups</a>
        <a href="#proof">About</a>
      </nav>
      <a className="btn btn--nav" href="#departures" data-magnetic><span>Book a seat</span><i className="btn__arrow" aria-hidden="true">→</i></a>
      <button className="nav__menu" type="button" aria-expanded="false" aria-controls="menu"><span className="nav__menu-label">Menu</span><i aria-hidden="true"></i></button>
    </header>
  );
}
