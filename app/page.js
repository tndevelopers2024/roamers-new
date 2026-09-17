import SiteMotion from '@/components/SiteMotion';
import Loader from '@/components/Loader';
import Curtain from '@/components/Curtain';
import Cursor from '@/components/Cursor';
import Nav from '@/components/Nav';
import Menu from '@/components/Menu';
import MobileBar from '@/components/MobileBar';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';

import Hero from '@/components/sections/Hero';
import Statement from '@/components/sections/Statement';
import How from '@/components/sections/How';
import Trips from '@/components/sections/Trips';
import Departures from '@/components/sections/Departures';
import Ways from '@/components/sections/Ways';
import Season from '@/components/sections/Season';
import People from '@/components/sections/People';
import Meetups from '@/components/sections/Meetups';
import Stories from '@/components/sections/Stories';
import Proof from '@/components/sections/Proof';
import Finale from '@/components/sections/Finale';

import { getRoamersData } from '@/lib/roamers';

/* Trips, prices and meetups are pulled from roamers.in and refreshed on this interval. */
export const revalidate = 900;

export default async function Home() {
  const { trips, months, events, season } = await getRoamersData();

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <Loader />
      <Curtain />
      <Cursor />
      <Nav />
      <Menu next={trips[0]} />

      <main id="main">
        <Hero />
        <Statement />
        <Departures trips={trips} months={months} />
        <How />
        <Trips trips={trips} />
        <Ways trips={trips} events={events} />
        <Season trips={season} />
        <People />
        <Meetups events={events} />
        <Stories />
        <Proof />
        <Finale />
      </main>

      <Footer />
      <MobileBar />
      <ScrollToTop />
      <SiteMotion />
    </>
  );
}
