/* 13 Finale — roll credits */
export default function Finale() {
  return (
    <section className="finale" data-chapter="05" data-chapter-name="Join" aria-labelledby="finale-title">
      <div className="finale__stage">
        <div className="finale__media"><img src="/assets/img/final-camp-1600.webp" srcSet="/assets/img/final-camp-900.webp 900w, assets/img/final-camp-1600.webp 1600w" sizes="100vw" width="1600" height="1066" alt="Tents glowing under a full moon at a snowy Kedarkantha campsite" loading="lazy" /><div className="grain"></div></div>
        <div className="finale__credits mono" aria-hidden="true">
          <p><span>Starring</span><strong>You</strong></p>
          <p><span>With</span><strong>A bus full of strangers</strong></p>
          <p><span>On location in</span><strong>Ladakh, Spiti, Meghalaya, Kerala, Sri Lanka, Thailand &amp; 34 more</strong></p>
          <p><span>Catering by</span><strong>Every chai stop on the way</strong></p>
          <p><span>Directed by</span><strong>Roamers</strong></p>
        </div>
        <div className="finale__end">
          <h2 className="finale__title" id="finale-title"><span>Your next adventure</span> <span>is waiting.</span></h2>
          <p className="finale__sub">And your next travel squad might be too.</p>
          <div className="finale__ctas">
            <a className="btn btn--sky btn--xl" href="https://www.roamers.in/trips" data-magnetic data-transition="Upcoming trips"><span>Explore upcoming trips</span><i className="btn__arrow" aria-hidden="true">→</i></a>
            <a className="link link--light" href="tel:+918122121066">or talk to a travel expert</a>
          </div>
        </div>
      </div>
    </section>
  );
}
