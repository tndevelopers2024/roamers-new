/* Loader — the roamers.in preloader (a ring of pulsing dots with a plane circling it),
   over a live WebGL sea (lib/sea.js) that sinks away as the page appears */
const DOTS = Array.from({ length: 20 }, (_, i) => i + 1);
const WORD = [...'Let’s roam'];
const TAGS = ['Solo friendly', 'Group trips', 'Treks & camps'];

export default function Loader() {
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader__sky">
        <span className="loader__sun" />
        <span className="loader__cloud loader__cloud--a" />
        <span className="loader__cloud loader__cloud--b" />
        <span className="loader__cloud loader__cloud--c" />
      </div>

      <div className="loader__stage">
        <div className="loader__ring">
          {DOTS.map(i => <span key={i} className="loader__dot" style={{ '--i': i }} />)}
          <div className="loader__orbit">
            <svg className="loader__plane" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>
          <img className="loader__pin" src="/assets/brand/roamers-pin.png" width="189" height="256" alt="" />
        </div>

        <p className="loader__word">
          {WORD.map((ch, n) => <span key={n} style={{ '--n': n }}>{ch === ' ' ? ' ' : ch}</span>)}
        </p>
        <p className="loader__tags mono">
          {TAGS.map((t, n) => <span key={t} style={{ '--n': n }}>{t}</span>)}
        </p>
      </div>

      <canvas className="loader__sea" />
    </div>
  );
}
