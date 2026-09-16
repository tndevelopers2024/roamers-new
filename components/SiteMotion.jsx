'use client';

import { useEffect } from 'react';
import { initChrome } from '@/lib/chrome';
import { initStory } from '@/lib/story';

/* The chrome and the scroll choreography drive the DOM directly, so they boot
   once after mount. The guard keeps Strict Mode's double effect from creating a
   second set of ScrollTriggers and listeners. */
let booted = false;

export default function SiteMotion() {
  useEffect(() => {
    if (booted) return;
    booted = true;
    initChrome();
    initStory();
  }, []);

  return null;
}
