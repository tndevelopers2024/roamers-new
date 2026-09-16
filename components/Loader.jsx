/* Loader — a split-flap departure board */
export default function Loader() {
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader__board">
        <img className="loader__pin" src="/assets/brand/roamers-pin.png" width="189" height="256" alt="" />
        <p className="loader__row mono"><span>Now boarding</span><span>Gate 01</span></p>
        <p className="loader__word" data-flap="ROAMERS">ROAMERS</p>
        <p className="loader__row mono"><span>Seat 1 of 1 — solo</span><span className="loader__status">On time</span></p>
      </div>
    </div>
  );
}
