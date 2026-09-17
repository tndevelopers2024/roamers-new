/* 10 Testimonials — postcards that stack; reviews as published on roamers.in */
const STORIES = [
  {
    name: 'Shreya', place: 'Andaman', img: 't-andaman.avif', alt: 'A Roamers group in scuba gear in the sea',
    quote: 'Joined the group trip with my sister, it was the best experience we could ask for. Everything was great about the trip, explored even the spots which was not mentioned in itinerary, don’t really know how the days went so soon. No words, Thanks you all!',
  },
  {
    name: 'Vinayak', place: 'Spiti', img: 't-spiti.avif', alt: 'A Roamers traveller with local children in Spiti',
    quote: 'The VIBE was unreal, didn’t expect I’ll connect like this.. Best trip I have gone, explored places, local foods, cultures, and those kids Ohh my goodness!!!! 😍 Thank you roamers and trip captain. We’ll meet soon on our reunion :',
  },
  {
    name: 'Naisha', place: 'Chikmagalur', img: 't-chikmagalur.avif', alt: 'A traveller sitting by a waterfall',
    quote: 'I joined solo and was imaginable experience, my first time going with the group trip, truly knocked my expectations. Very cool people, and awesome spots. Enjoyed a lot, Spl thanks to our trip captain veer. Gonna miss you’ll Fam…',
  },
  {
    name: 'Aadhya', place: 'Manali', img: 't-manali.avif', alt: 'A Roamers group river rafting',
    quote: 'Camp nights with the bunch of crazy travellers, this was the trip which I’m gonna remember for long. Lots of memories to take with….. definitely a must goooo!',
  },
];

export default function Stories() {
  return (
    <section className="stories" id="stories" data-chapter="04" data-chapter-name="Connect" aria-labelledby="stories-title">
      <div className="wrap stories__head">
        <p className="eyebrow mono">(08) Stories</p>
        <h2 className="h-display" id="stories-title">10K+ Happy<br /><em>Travelers.</em></h2>
      </div>
      <div className="stories__stack">
        {STORIES.map((s, i) => (
          <article key={s.name} className="story">
            <div className="story__card">
              <div className="story__media"><img src={`/assets/roamers/${s.img}`} width="782" height="500" alt={s.alt} loading="lazy" /></div>
              <div className="story__body">
                <p className="story__tag mono"><span>Story {String(i + 1).padStart(2, '0')} / {String(STORIES.length).padStart(2, '0')}</span><span className="story__solo" aria-label="Rated 5 stars">★★★★★</span></p>
                <blockquote className="story__quote"><p>“{s.quote}”</p></blockquote>
                <p className="story__who"><strong>{s.name}</strong><span className="mono">{s.place}</span></p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
