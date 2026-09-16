import SiteMotion from '@/components/SiteMotion';
import Loader from '@/components/Loader';
import Curtain from '@/components/Curtain';
import Cursor from '@/components/Cursor';
import Nav from '@/components/Nav';
import Menu from '@/components/Menu';
import MobileBar from '@/components/MobileBar';
import Footer from '@/components/Footer';

import Hero from '@/components/sections/Hero';
import Statement from '@/components/sections/Statement';
import How from '@/components/sections/How';
import Trips from '@/components/sections/Trips';
import Departures from '@/components/sections/Departures';
import Ways from '@/components/sections/Ways';
import Season from '@/components/sections/Season';
import People from '@/components/sections/People';
import Community from '@/components/sections/Community';
import Meetups from '@/components/sections/Meetups';
import Stories from '@/components/sections/Stories';
import Proof from '@/components/sections/Proof';
import Finale from '@/components/sections/Finale';

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <Loader />
      <Curtain />
      <Cursor />
      <Nav />
      <Menu />

      <main id="main">
        <Hero />
        <Statement />
        <How />
        <Trips />
        <Departures />
        <Ways />
        <Season />
        <People />
        <Community />
        <Meetups />
        <Stories />
        <Proof />
        <Finale />
      </main>

      <Footer />
      <MobileBar />
      <SiteMotion />
    </>
  );
}
