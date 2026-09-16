import '@/styles/base.css';
import '@/styles/sections.css';

export const metadata = {
  metadataBase: new URL('https://www.roamers.in'),
  title: 'Roamers — Travel solo. Leave with a squad.',
  description:
    'Roamers is a social travel club. Book one seat, show up solo, and leave with a squad. Small-group trips to Ladakh, Spiti, Meghalaya, Kerala, Sri Lanka, Thailand and 40+ destinations.',
  openGraph: {
    title: 'Roamers — Travel solo. Leave with a squad.',
    description: 'Book one seat. Show up solo. Come home with a squad.',
    images: ['/assets/img/hero-squad-1600.webp'],
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
          href="/assets/img/hero-squad-1600.webp"
          imageSrcSet="/assets/img/hero-squad-1000.webp 1000w, /assets/img/hero-squad-1600.webp 1600w, /assets/img/hero-squad-2880.webp 2880w"
          imageSizes="200vw"
          fetchPriority="high"
        />
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
