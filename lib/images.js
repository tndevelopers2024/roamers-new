/* Unsplash photos standing in where the roamers.in image is too small, too soft
   or missing. Served from images.unsplash.com so imgix sizes each request. */

const unsplash = (id, author, alt) => ({ src: `https://images.unsplash.com/photo-${id}`, author, alt });

export const PHOTOS = {
  hero: { src: '/assets/hero-cliff.webp', author: 'Roamers', alt: 'Group of friends on a cliff overlooking a tropical ocean bay' },
  ladakh: unsplash('1536295243470-d7cba4efab7b', 'Vamshi Vangapally', 'Motorbikes parked on the shore of Pangong Lake, Ladakh'),
  meghalaya: unsplash('1552978534-9d01e1f91517', 'Amit Jain', 'A boat floating on the clear Umngot river, Meghalaya'),
  kodaikanal: unsplash('1692792284356-f80113facd09', 'Priya Singh', 'Pillar Rocks rising through the clouds, Kodaikanal'),
  kedarkantha: unsplash('1661623031407-23d1115e671c', 'Neha Maheen Mahfin', 'Trekkers crossing a snow slope in the sun'),
  kedarkanthaSunrise: unsplash('1644076253748-80c43d1894a6', 'Mayur V Bhat', 'Sunrise over snow-covered Himalayan peaks'),
  chikmagalur: unsplash('1590767924392-a3b3d2de10ef', 'Chaitanya Rayampally', 'Rolling green hills of Chikkamagaluru'),
  thailand: unsplash('1728525978104-b84e5a95578e', 'Prashant', 'Longtail boats in a turquoise bay below limestone islands, Thailand'),
  meetup: unsplash('1753351058504-ad3943e088fa', 'Vitaly Gariev', 'Friends taking a selfie together in a café'),
  buddies: unsplash('1539635278303-d4002c07eae3', 'Helena Lopes', 'A group of cheerful friends celebrating together outdoors'),
  rafting: unsplash('1530866495561-507c9faab2ed', 'Filip Mroz', 'A group of adventurous travelers whitewater rafting through river rapids'),
  guides: unsplash('1527631746610-1da003978703', 'Kal Visuals', 'Professional trip leader and group exploring scenic mountain trails'),
  waterfall: unsplash('1519708227418-c8fd9a32b7a2', 'Seth Doyle', 'A traveler exploring a breathtaking hidden waterfall'),
};

/* Live roamers.in trips and meetups whose own image gets upgraded */
export const TRIP_PHOTOS = {
  'ladakh-circuit': PHOTOS.ladakh,
  meghalaya: PHOTOS.meghalaya,
  kodaikanal1: PHOTOS.kodaikanal,
  kedarkantha: PHOTOS.kedarkantha,
  chikmagalur: PHOTOS.chikmagalur,
  'THAILAND BACKPACKING': PHOTOS.thailand, // listed on roamers.in without a link, so matched by title
};
export const EVENT_PHOTOS = {
  'strangers fun meetup': PHOTOS.meetup,
};

export const isUnsplash = src => typeof src === 'string' && src.startsWith('https://images.unsplash.com/');

/* src + srcSet props for any image; Unsplash ones get responsive widths */
export function imgProps(src, width = 1600, widths = [640, 1000, 1600, 2400]) {
  if (!isUnsplash(src)) return { src };
  const at = w => `${src}?w=${w}&q=80&auto=format&fit=crop`;
  return { src: at(width), srcSet: widths.map(w => `${at(w)} ${w}w`).join(', ') };
}

export const credits = () => [...new Set(Object.values(PHOTOS).map(p => p.author))];
