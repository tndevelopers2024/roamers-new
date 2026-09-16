/* 05 Upcoming departures — the booking board */
export default function Departures() {
  return (
    <section className="deps" id="departures" data-chapter="03" data-chapter-name="Explore" aria-labelledby="deps-title">
      <div className="wrap">
        <div className="deps__head">
          <p className="eyebrow mono">(04) Upcoming departures</p>
          <h2 className="h-display" id="deps-title">Pick a date.<br />We do <em>the rest.</em></h2>
          <p className="deps__lede">Live seats on the next departures. Every one is solo-friendly and sorted end to end — transport, stays, meals, permits and a trip captain. Filter by month, then book the one that fits your calendar.</p>
        </div>

        <div className="deps__bar">
          <div className="deps__filters mono" role="group" aria-label="Filter departures by month">
            <button className="fchip is-on" type="button" data-filter="all" aria-pressed="true">All<span className="fchip__n">10</span></button>
            <button className="fchip" type="button" data-filter="sep" aria-pressed="false">Sep<span className="fchip__n">3</span></button>
            <button className="fchip" type="button" data-filter="oct" aria-pressed="false">Oct<span className="fchip__n">4</span></button>
            <button className="fchip" type="button" data-filter="nov" aria-pressed="false">Nov<span className="fchip__n">2</span></button>
            <button className="fchip" type="button" data-filter="dec" aria-pressed="false">Dec<span className="fchip__n">2</span></button>
          </div>
          <p className="deps__count mono" aria-live="polite"><span data-dep-count>10</span> departures · 40+ more online</p>
        </div>

        <div className="deps__grid">

          <article className="dep" data-months="sep" data-cursor="Reserve">
            <a className="dep__link" href="https://www.roamers.in/ladakh-circuit" data-transition="Ladakh">
              <span className="dep__rule" aria-hidden="true"></span>
              <div className="dep__media">
                <img src="/assets/img/ch-ladakh-900.webp" width="900" height="439" alt="A rider on a motorbike kicking up dust on a Ladakh road" loading="lazy" />
                <p className="dep__chips mono"><span>8D / 7N</span><span>Ex Leh</span></p>
                <p className="dep__idx mono" aria-hidden="true">Dep 01</p>
              </div>
              <div className="dep__body">
                <h3 className="dep__name">Leh Ladakh<br />Grand Circuit</h3>
                <p className="dep__route mono">Leh · Khardung La · Nubra · Pangong</p>
                <p className="dep__dates mono"><span>19 Sep</span><span>26 Sep</span></p>
                <p className="dep__seats mono"><span className="dep__meter" style={{ '--filled': '.67' }} aria-hidden="true"><i></i></span>6 of 18 seats left</p>
                <p className="dep__foot"><span className="dep__price"><span className="mono">from</span><strong>₹24,990</strong></span><span className="dep__cta mono">Reserve <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="dep" data-months="sep oct" data-cursor="Reserve">
            <a className="dep__link" href="https://www.roamers.in/spiti-chandratal" data-transition="Spiti">
              <span className="dep__rule" aria-hidden="true"></span>
              <div className="dep__media">
                <img src="/assets/img/ch-spiti-960.webp" width="960" height="640" alt="Key Monastery on its hilltop in Spiti, lit by late sun" loading="lazy" />
                <p className="dep__chips mono"><span>7D / 6N</span><span>Ex Delhi</span></p>
                <p className="dep__idx mono" aria-hidden="true">Dep 02</p>
              </div>
              <div className="dep__body">
                <h3 className="dep__name">Spiti with<br />Chandratal</h3>
                <p className="dep__route mono">Kalpa · Kaza · Chandratal</p>
                <p className="dep__dates mono"><span>19 Sep</span><span>03 Oct</span></p>
                <p className="dep__seats mono"><span className="dep__meter" style={{ '--filled': '.75' }} aria-hidden="true"><i></i></span>4 of 16 seats left</p>
                <p className="dep__foot"><span className="dep__price"><span className="mono">from</span><strong>₹22,990</strong></span><span className="dep__cta mono">Reserve <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="dep" data-months="sep" data-cursor="Reserve">
            <a className="dep__link" href="https://www.roamers.in/trips" data-transition="Valley of Flowers">
              <span className="dep__rule" aria-hidden="true"></span>
              <div className="dep__media">
                <img src="/assets/img/day3-800.webp" width="800" height="1000" alt="A Roamers group trekking through the Valley of Flowers" loading="lazy" />
                <p className="dep__chips mono"><span>6D / 5N</span><span>Ex Rishikesh</span></p>
                <p className="dep__idx mono" aria-hidden="true">Dep 03</p>
              </div>
              <div className="dep__body">
                <h3 className="dep__name">Valley of<br />Flowers Trek</h3>
                <p className="dep__route mono">Joshimath · Ghangaria · Hemkund</p>
                <p className="dep__dates mono"><span>26 Sep</span></p>
                <p className="dep__seats mono"><span className="dep__meter" style={{ '--filled': '.8' }} aria-hidden="true"><i></i></span>3 of 15 seats left</p>
                <p className="dep__foot"><span className="dep__price"><span className="mono">from</span><strong>₹9,990</strong></span><span className="dep__cta mono">Reserve <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="dep" data-months="oct" data-cursor="Reserve">
            <a className="dep__link" href="https://www.roamers.in/meghalaya" data-transition="Meghalaya">
              <span className="dep__rule" aria-hidden="true"></span>
              <div className="dep__media">
                <img src="/assets/img/ch-meghalaya-960.webp" width="960" height="720" alt="The glass-clear Umngot river in Meghalaya" loading="lazy" />
                <p className="dep__chips mono"><span>6D / 5N</span><span>Ex Guwahati</span></p>
                <p className="dep__idx mono" aria-hidden="true">Dep 04</p>
              </div>
              <div className="dep__body">
                <h3 className="dep__name">Meghalaya<br />Full Circuit</h3>
                <p className="dep__route mono">Shillong · Cherrapunjee · Dawki</p>
                <p className="dep__dates mono"><span>03 Oct</span><span>10 Oct</span><span>17 Oct</span></p>
                <p className="dep__seats mono"><span className="dep__meter" style={{ '--filled': '.45' }} aria-hidden="true"><i></i></span>11 of 20 seats left</p>
                <p className="dep__foot"><span className="dep__price"><span className="mono">from</span><strong>₹18,990</strong></span><span className="dep__cta mono">Reserve <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="dep" data-months="oct" data-cursor="Reserve">
            <a className="dep__link" href="https://www.roamers.in/kerala-grand-circuit" data-transition="Kerala">
              <span className="dep__rule" aria-hidden="true"></span>
              <div className="dep__media">
                <img src="/assets/img/ch-kerala-900.webp" width="900" height="600" alt="Mist rolling over the tea hills of Munnar" loading="lazy" />
                <p className="dep__chips mono"><span>7D / 6N</span><span>Ex Kochi</span></p>
                <p className="dep__idx mono" aria-hidden="true">Dep 05</p>
              </div>
              <div className="dep__body">
                <h3 className="dep__name">Kerala<br />Grand Circuit</h3>
                <p className="dep__route mono">Munnar · Vagamon · Varkala · Alleppey</p>
                <p className="dep__dates mono"><span>17 Oct</span><span>24 Oct</span></p>
                <p className="dep__seats mono"><span className="dep__meter" style={{ '--filled': '.55' }} aria-hidden="true"><i></i></span>9 of 20 seats left</p>
                <p className="dep__foot"><span className="dep__price"><span className="mono">from</span><strong>₹16,990</strong></span><span className="dep__cta mono">Reserve <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="dep" data-months="oct" data-cursor="Reserve">
            <a className="dep__link" href="https://www.roamers.in/srilanka" data-transition="Sri Lanka">
              <span className="dep__rule" aria-hidden="true"></span>
              <div className="dep__media">
                <img src="/assets/img/ch-srilanka-960.webp" width="960" height="600" alt="A blue train crossing the Nine Arch Bridge near Ella" loading="lazy" />
                <p className="dep__chips mono"><span>7D / 6N</span><span>Ex Colombo</span></p>
                <p className="dep__idx mono" aria-hidden="true">Dep 06</p>
              </div>
              <div className="dep__body">
                <h3 className="dep__name">Sri Lanka<br />Island Loop</h3>
                <p className="dep__route mono">Sigiriya · Kandy · Ella · Galle</p>
                <p className="dep__dates mono"><span>10 Oct</span><span>24 Oct</span></p>
                <p className="dep__seats mono"><span className="dep__meter" style={{ '--filled': '.5' }} aria-hidden="true"><i></i></span>8 of 16 seats left</p>
                <p className="dep__foot"><span className="dep__price"><span className="mono">from</span><strong>₹43,990</strong></span><span className="dep__cta mono">Reserve <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="dep" data-months="nov" data-cursor="Reserve">
            <a className="dep__link" href="https://www.roamers.in/trips" data-transition="Thailand">
              <span className="dep__rule" aria-hidden="true"></span>
              <div className="dep__media">
                <img src="/assets/img/ch-thailand-960.webp" width="960" height="664" alt="Longtail boats moored below limestone cliffs in Thailand" loading="lazy" />
                <p className="dep__chips mono"><span>6D / 5N</span><span>Ex Bangkok</span></p>
                <p className="dep__idx mono" aria-hidden="true">Dep 07</p>
              </div>
              <div className="dep__body">
                <h3 className="dep__name">Thailand<br />Island Hop</h3>
                <p className="dep__route mono">Bangkok · Pattaya · Coral Island</p>
                <p className="dep__dates mono"><span>10 Nov</span><span>24 Nov</span></p>
                <p className="dep__seats mono"><span className="dep__meter" style={{ '--filled': '.61' }} aria-hidden="true"><i></i></span>7 of 18 seats left</p>
                <p className="dep__foot"><span className="dep__price"><span className="mono">from</span><strong>₹37,500</strong></span><span className="dep__cta mono">Reserve <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="dep" data-months="nov" data-cursor="Reserve">
            <a className="dep__link" href="https://www.roamers.in/trips" data-transition="Andaman">
              <span className="dep__rule" aria-hidden="true"></span>
              <div className="dep__media">
                <img src="/assets/img/pp-selfie-900.webp" width="900" height="900" alt="A Roamers group on the water in Port Blair, Andaman" loading="lazy" />
                <p className="dep__chips mono"><span>6D / 5N</span><span>Ex Port Blair</span></p>
                <p className="dep__idx mono" aria-hidden="true">Dep 08</p>
              </div>
              <div className="dep__body">
                <h3 className="dep__name">Andaman<br />Island Hopping</h3>
                <p className="dep__route mono">Havelock · Neil · Radhanagar</p>
                <p className="dep__dates mono"><span>14 Nov</span><span>28 Nov</span></p>
                <p className="dep__seats mono"><span className="dep__meter" style={{ '--filled': '.58' }} aria-hidden="true"><i></i></span>8 of 19 seats left</p>
                <p className="dep__foot"><span className="dep__price"><span className="mono">from</span><strong>₹37,500</strong></span><span className="dep__cta mono">Reserve <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="dep" data-months="dec" data-cursor="Reserve">
            <a className="dep__link" href="https://www.roamers.in/kedarkantha" data-transition="Kedarkantha">
              <span className="dep__rule" aria-hidden="true"></span>
              <div className="dep__media">
                <img src="/assets/img/cat-treks-900.webp" width="900" height="530" alt="Trekkers crossing a snow field below a ridge" loading="lazy" />
                <p className="dep__chips mono"><span>6D / 5N</span><span>Ex Dehradun</span></p>
                <p className="dep__idx mono" aria-hidden="true">Dep 09</p>
              </div>
              <div className="dep__body">
                <h3 className="dep__name">Kedarkantha<br />Snow Trek</h3>
                <p className="dep__route mono">Sankri · Juda Ka Talab · Summit</p>
                <p className="dep__dates mono"><span>12 Dec</span><span>26 Dec</span></p>
                <p className="dep__seats mono"><span className="dep__meter" style={{ '--filled': '.36' }} aria-hidden="true"><i></i></span>14 of 22 seats left</p>
                <p className="dep__foot"><span className="dep__price"><span className="mono">from</span><strong>₹11,990</strong></span><span className="dep__cta mono">Reserve <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <article className="dep" data-months="dec" data-cursor="Reserve">
            <a className="dep__link" href="https://www.roamers.in/shortbreak-trips" data-transition="Kolukkumalai">
              <span className="dep__rule" aria-hidden="true"></span>
              <div className="dep__media">
                <img src="/assets/img/cat-short-900.webp" width="900" height="720" alt="Mist over the tea slopes above Ooty" loading="lazy" />
                <p className="dep__chips mono"><span>3D / 2N</span><span>Ex Chennai</span></p>
                <p className="dep__idx mono" aria-hidden="true">Dep 10</p>
              </div>
              <div className="dep__body">
                <h3 className="dep__name">Ooty &amp;<br />Kolukkumalai Camp</h3>
                <p className="dep__route mono">Ooty · Coonoor · Kolukkumalai</p>
                <p className="dep__dates mono"><span>12 Dec</span><span>26 Dec</span></p>
                <p className="dep__seats mono"><span className="dep__meter" style={{ '--filled': '.7' }} aria-hidden="true"><i></i></span>6 of 20 seats left</p>
                <p className="dep__foot"><span className="dep__price"><span className="mono">from</span><strong>₹7,299</strong></span><span className="dep__cta mono">Reserve <i aria-hidden="true">→</i></span></p>
              </div>
            </a>
          </article>

          <p className="deps__empty mono" hidden>No departures that month yet — try another, or ask us to open a private date.</p>
        </div>

        <div className="deps__foot">
          <a className="btn btn--sky" href="https://www.roamers.in/trips" data-magnetic data-transition="All trips"><span>See all upcoming trips</span><i className="btn__arrow" aria-hidden="true">→</i></a>
          <p className="deps__note mono">New dates open every week · Travelling as 4+? We’ll open a private departure — <a className="link" href="https://wa.me/918122121066">ask on WhatsApp</a></p>
        </div>
      </div>
    </section>
  );
}
