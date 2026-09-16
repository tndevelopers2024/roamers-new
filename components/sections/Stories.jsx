/* 11 Testimonials — postcards that stack */
export default function Stories() {
  return (
    <section className="stories" id="stories" data-chapter="04" data-chapter-name="Connect" aria-labelledby="stories-title">
      <div className="wrap stories__head">
        <p className="eyebrow mono">(09) Stories</p>
        <h2 className="h-display" id="stories-title">Came alone.<br />Left with <em>stories.</em></h2>
      </div>
      <div className="stories__stack">
        <article className="story">
          <div className="story__card">
            <div className="story__media"><img src="/assets/img/story-naisha-1440.webp" srcSet="/assets/img/story-naisha-800.webp 800w, assets/img/story-naisha-1440.webp 1440w" sizes="(min-width: 900px) 60vw, 100vw" width="1440" height="1800" alt="Two trekkers throwing their arms up beside a glacial lake" loading="lazy" /></div>
            <div className="story__body">
              <p className="story__tag mono"><span>Story 01 / 04</span><span className="story__solo">Joined solo</span></p>
              <blockquote className="story__quote"><p>“I joined solo — my first group trip ever — and it knocked my expectations flat. Very cool people, awesome spots. Gonna miss you all, fam.”</p></blockquote>
              <p className="story__who"><strong>Naisha</strong><span className="mono">Valley of Flowers Trek · Uttarakhand</span></p>
            </div>
          </div>
        </article>
        <article className="story">
          <div className="story__card">
            <div className="story__media"><img src="/assets/img/story-vinayak-735.webp" width="735" height="1103" alt="Young monks laughing as they run with a red robe billowing behind them" loading="lazy" /></div>
            <div className="story__body">
              <p className="story__tag mono"><span>Story 02 / 04</span><span className="story__solo">Joined solo</span></p>
              <blockquote className="story__quote"><p>“The vibe was unreal. I didn’t expect to connect like this. The places, the local food, the cultures — and those kids! See you all at the reunion.”</p></blockquote>
              <p className="story__who"><strong>Vinayak</strong><span className="mono">Leh Ladakh Grand Circuit</span></p>
            </div>
          </div>
        </article>
        <article className="story">
          <div className="story__card">
            <div className="story__media"><img src="/assets/img/story-aadhya-1360.webp" srcSet="/assets/img/story-aadhya-800.webp 800w, assets/img/story-aadhya-1360.webp 1360w" sizes="(min-width: 900px) 60vw, 100vw" width="1360" height="765" alt="A campfire glowing at dusk on a grassy hilltop camp" loading="lazy" /></div>
            <div className="story__body">
              <p className="story__tag mono"><span>Story 03 / 04</span><span className="story__solo">Joined solo</span></p>
              <blockquote className="story__quote"><p>“Camp nights with a bunch of crazy travellers. This is the trip I’m going to remember for a long, long time.”</p></blockquote>
              <p className="story__who"><strong>Aadhya</strong><span className="mono">Kolukkumalai Camp · Munnar</span></p>
            </div>
          </div>
        </article>
        <article className="story">
          <div className="story__card">
            <div className="story__media"><img src="/assets/img/story-shreya-1500.webp" srcSet="/assets/img/story-shreya-800.webp 800w, assets/img/story-shreya-1500.webp 1500w" sizes="(min-width: 900px) 60vw, 100vw" width="1500" height="1031" alt="A traveller walking along a turquoise Andaman shoreline" loading="lazy" /></div>
            <div className="story__body">
              <p className="story__tag mono"><span>Story 04 / 04</span><span className="story__solo">Came with her sister</span></p>
              <blockquote className="story__quote"><p>“The best experience we could have asked for. We even explored spots that weren’t on the itinerary. No idea where the days went.”</p></blockquote>
              <p className="story__who"><strong>Shreya</strong><span className="mono">Andaman Island Hopping</span></p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
