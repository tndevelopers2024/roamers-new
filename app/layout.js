import '@/styles/base.css';
import '@/styles/sections.css';
import { PHOTOS, imgProps } from '@/lib/images';

const hero = imgProps(PHOTOS.hero.src, 1600, [1000, 1600, 2880]);

export const metadata = {
  metadataBase: new URL('https://www.roamers.in'),
  title: 'Roamers - Explore the World with Our Social Travel Agency',
  description:
    'Join Roamers, a social travel agency offering exciting solo trip packages, weekend getaways, and group travel experiences. Explore, connect, and create unforgettable memories with like-minded travelers!',
  openGraph: {
    title: 'Roamers | Your Gateway to Social Travel Adventures',
    description: 'Discover the world with Roamers! From solo adventures to group travel, we create experiences that bring travelers together. Explore destinations, meet people, and make memories!',
    images: ['/assets/hero-cliff.png'],
  },
  icons: {
    icon: '/assets/brand/favicon-64.png',
    apple: '/assets/brand/apple-touch-icon.png',
  },
};

export const viewport = {
  themeColor: '#0E2229',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

/* Swaps the no-js class before first paint, the way the static build did — the
   stylesheet uses .js to hide elements the choreography animates in. */
const jsFlag = `document.documentElement.classList.replace('no-js','js')`;

export default function RootLayout({ children }) {
  // suppressHydrationWarning: the inline script swaps this class before
  // hydration on purpose, so the server and client markup differ by design.
  return (
    <html lang="en" className="no-js" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Instrument+Serif:ital@0;1&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as="image"
          href={hero.src}
          imageSrcSet={hero.srcSet}
          imageSizes="200vw"
          fetchPriority="high"
        />
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
