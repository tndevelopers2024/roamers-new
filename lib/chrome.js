import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createSea } from './sea';
import Lenis from 'lenis';

/* Roamers — chrome: smooth scroll, loader, nav, menu, cursor, magnetic buttons, page exits.
   Section choreography lives in story.js. */
export function initChrome() {
  const d = document, root = d.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const R = (window.Roamers = { reduce, fine, heroEnd: innerHeight, heroSolid: false });

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (reduce) root.classList.add('is-static');

  /* Smooth scroll ---------------------------------------------------------- */
  let lenis = null;
  if (!reduce) {
    lenis = new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  R.lenis = lenis;
  R.scrollTo = target => {
    if (lenis) lenis.scrollTo(target, { duration: 1.6 });
    else (typeof target === 'number' ? scrollTo({ top: target, behavior: 'smooth' }) : target.scrollIntoView({ behavior: 'smooth' }));
  };

  /* Loader — shown until the page has loaded, as on roamers.in --------------- */
  const loader = d.querySelector('.loader');
  R.ready = new Promise(resolve => {
    if (!loader || reduce) { loader && loader.remove(); return resolve(); }
    lenis && lenis.stop();

    const canvas = loader.querySelector('.loader__sea');
    const sea = canvas && createSea(canvas);
    if (sea) sea.state.horizon = parseFloat(getComputedStyle(loader).getPropertyValue('--waterline')) / 100 || .34;
    else loader.classList.add('no-gl');

    const MIN = 1500;                                       // the word, the tags and a breath — even from cache
    const loaded = new Promise(r => d.readyState === 'complete' ? r() : addEventListener('load', r, { once: true }));
    const shown = new Promise(r => setTimeout(r, MIN));
    const stall = new Promise(r => setTimeout(r, 7000));   // never trap the visitor behind a slow image
    Promise.race([Promise.all([loaded, shown]), stall]).then(() => {
      loader.style.pointerEvents = 'none';
      const done = () => { sea && sea.destroy(); loader.remove(); };
      const $l = sel => [...loader.querySelectorAll(sel)];

      // hand the looping CSS animations over to GSAP where they stand, so the finale can move them
      const orbit = loader.querySelector('.loader__orbit');
      const m = new DOMMatrix(getComputedStyle(orbit).transform);
      orbit.style.animation = 'none';
      gsap.set(orbit, { rotation: Math.atan2(m.b, m.a) * 180 / Math.PI });
      $l('.loader__word span').forEach(el => { el.style.animation = 'none'; });

      const tl = gsap.timeline()
        // the plane opens the throttle, laps the ring and climbs out of it
        .to(orbit, { rotation: '+=320', duration: .75, ease: 'power2.in' }, 0)
        .to('.loader__plane', { scale: 1.9, opacity: 0, duration: .3, ease: 'power1.in' }, .45)
        // the ring switches off dot by dot behind it
        .to($l('.loader__dot'), { opacity: 0, duration: .2, stagger: .018 }, .1)
        // the tags and the words sink below the waterline, the pin last
        .to($l('.loader__tags span'), { y: 30, opacity: 0, duration: .3, ease: 'power2.in', stagger: .04 }, .15)
        .to($l('.loader__word span'), { y: () => innerHeight * .3, duration: .45, ease: 'power2.in', stagger: .025 }, .25)
        .to('.loader__ring', { y: () => innerHeight * .45, duration: .5, ease: 'power2.in' }, .5);

      if (!sea) {
        tl.to(loader, { opacity: 0, duration: .4, onStart: () => { lenis && lenis.start(); resolve(); }, onComplete: done }, .8);
        return;
      }
      tl
        // the sea sinks away below the screen while the sky fades, uncovering the page
        .to(sea.state, { horizon: -0.02, duration: .55, ease: 'power2.in' }, .7)
        .to(loader, {
          opacity: 0, duration: .4, ease: 'power1.out',
          onStart: () => { lenis && lenis.start(); resolve(); },
          onComplete: done
        }, .9);
    });
  });

  /* Nav: transparent on the hero, paper bar after, hides on scroll down ------ */
  const nav = d.querySelector('.nav');
  let lastY = scrollY;
  const navTick = () => {
    const y = scrollY, past = y > R.heroEnd - 40, open = root.classList.contains('menu-open');
    nav.classList.toggle('is-solid', R.heroSolid || past);
    if (open || y < lastY - 3 || !past) nav.classList.remove('is-hidden');
    else if (y > lastY + 3) nav.classList.add('is-hidden');
    lastY = y;
  };
  addEventListener('scroll', navTick, { passive: true });
  R.navTick = navTick;

  /* Chapter indicator (called by story.js once pins exist) ------------------- */
  const chNum = d.querySelector('.nav__chapter-num'), chName = d.querySelector('.nav__chapter-name');
  let currentCh = '01';
  const setChapter = (num, name) => {
    if (num === currentCh) return;
    currentCh = num;
    gsap.to([chNum, chName], {
      yPercent: -60, opacity: 0, duration: .25, ease: 'power2.in', onComplete: () => {
        chNum.textContent = num; chName.textContent = name;
        gsap.fromTo([chNum, chName], { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .45, ease: 'power3.out' });
      }
    });
  };
  R.initChapters = () => {
    d.querySelectorAll('[data-chapter]').forEach(sec => ScrollTrigger.create({
      trigger: sec, start: 'top 55%', end: 'bottom 55%',
      onToggle: s => s.isActive && setChapter(sec.dataset.chapter, sec.dataset.chapterName)
    }));
    const mbar = d.querySelector('.mbar'), toTop = d.querySelector('.to-top');
    ScrollTrigger.create({
      trigger: '.statement', start: 'top 60%', endTrigger: '.footer', end: 'bottom top',
      onToggle: s => {
        mbar && mbar.classList.toggle('is-visible', s.isActive);
        toTop && toTop.classList.toggle('is-visible', s.isActive);
      }
    });
  };

  /* Menu (tablet & mobile) --------------------------------------------------- */
  const menuBtn = d.querySelector('.nav__menu'), menu = d.getElementById('menu'), menuLabel = d.querySelector('.nav__menu-label');
  const openMenu = () => {
    root.classList.add('menu-open'); menuBtn.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false'); menuLabel.textContent = 'Close'; lenis && lenis.stop();
  };
  const closeMenu = () => {
    if (!root.classList.contains('menu-open')) return;
    root.classList.remove('menu-open'); menuBtn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true'); menuLabel.textContent = 'Menu'; lenis && lenis.start();
  };
  menuBtn.addEventListener('click', () => root.classList.contains('menu-open') ? closeMenu() : openMenu());
  d.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  /* Departures — filter the board by month ----------------------------------- */
  const deps = d.querySelector('.deps');
  if (deps) {
    const cards = [...deps.querySelectorAll('.dep')];
    const chips = [...deps.querySelectorAll('.fchip')];
    const count = deps.querySelector('[data-dep-count]');
    const empty = deps.querySelector('.deps__empty');
    const track = deps.querySelector('[data-rail-track]');
    chips.forEach(chip => chip.addEventListener('click', () => {
      const month = chip.dataset.filter;
      chips.forEach(c => {
        const on = c === chip;
        c.classList.toggle('is-on', on);
        c.setAttribute('aria-pressed', String(on));
      });
      const shown = cards.filter(card => {
        const on = month === 'all' || card.dataset.months.split(' ').includes(month);
        card.classList.toggle('is-out', !on);
        return on;
      });
      count.textContent = shown.length;
      empty.hidden = shown.length > 0;
      if (track) {
        track.scrollLeft = 0;
        setTimeout(() => track.dispatchEvent(new Event('scroll')), 50);
      }
      if (!reduce) gsap.fromTo(shown, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .5, ease: 'power3.out', stagger: .04, overwrite: true });
      ScrollTrigger.refresh();
    }));
  }

  /* Card rails — arrows for pointer users, swipe everywhere else -------------- */
  d.querySelectorAll('[data-rail]').forEach(rail => {
    const track = rail.querySelector('[data-rail-track]');
    const prev = rail.querySelector('[data-rail-prev]'), next = rail.querySelector('[data-rail-next]');
    const sync = () => {
      prev.disabled = track.scrollLeft < 4;
      next.disabled = track.scrollLeft > track.scrollWidth - track.clientWidth - 4;
    };
    const nudge = dir => track.scrollBy({ left: dir * Math.max(260, track.clientWidth * .78), behavior: reduce ? 'auto' : 'smooth' });
    prev.addEventListener('click', () => nudge(-1));
    next.addEventListener('click', () => nudge(1));
    track.addEventListener('scroll', sync, { passive: true });
    addEventListener('resize', sync);
    sync();
  });

  /* In-page anchors glide; external links do not redirect -------------------- */
  const curtain = d.querySelector('.curtain');
  if (curtain) gsap.set(curtain, { y: 0, yPercent: 100, pointerEvents: 'none' });
  d.addEventListener('click', e => {
    const a = e.target.closest('a'); if (!a || e.defaultPrevented) return;
    const href = a.getAttribute('href') || '';
    if (href.startsWith('#')) {
      const el = href.length > 1 ? d.querySelector(href) : null;
      e.preventDefault(); closeMenu();
      R.scrollTo(el && href !== '#top' ? el : 0);
      return;
    }
    // Prevent redirect to external links
    e.preventDefault();
    closeMenu();
  });
  addEventListener('pageshow', e => { if (e.persisted && curtain) gsap.set(curtain, { y: 0, yPercent: 100, pointerEvents: 'none' }); });

  /* Cursor + magnetic buttons (fine pointers only) ---------------------------- */
  if (fine && !reduce) {
    const cursor = d.querySelector('.cursor');
    if (cursor) {
      const label = cursor.querySelector('.cursor__label');
      const pos = { x: innerWidth / 2, y: innerHeight / 2 }, cur = { x: pos.x, y: pos.y };
      let shown = false;

      const onPointerMove = e => {
        pos.x = e.clientX; pos.y = e.clientY;
        if (!shown) {
          shown = true; cur.x = pos.x; cur.y = pos.y;
          gsap.to(cursor, { opacity: 1, duration: .25 });
        }
        const target = e.target;
        if (target && target.closest) {
          const custom = target.closest('[data-cursor]');
          if (custom && label) {
            label.textContent = custom.dataset.cursor;
            cursor.classList.add('has-label');
            cursor.classList.remove('is-hover');
          } else {
            cursor.classList.remove('has-label');
            const interactive = target.closest('a, button, .btn, [role="button"], input, select, textarea, label');
            cursor.classList.toggle('is-hover', !!interactive);
          }
        }
      };

      const onPointerLeave = () => {
        shown = false;
        gsap.to(cursor, { opacity: 0, duration: .25 });
      };

      const onPointerDown = () => cursor.classList.add('is-down');
      const onPointerUp = () => cursor.classList.remove('is-down');

      addEventListener('pointermove', onPointerMove, { passive: true });
      d.addEventListener('pointerleave', onPointerLeave);
      addEventListener('pointerdown', onPointerDown);
      addEventListener('pointerup', onPointerUp);

      gsap.set(cursor, { opacity: 0 });

      if (R._cursorTicker) gsap.ticker.remove(R._cursorTicker);
      R._cursorTicker = () => {
        cur.x += (pos.x - cur.x) * .22;
        cur.y += (pos.y - cur.y) * .22;
        cursor.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
      };
      gsap.ticker.add(R._cursorTicker);

      d.querySelectorAll('[data-magnetic]').forEach(el => {
        const xTo = gsap.quickTo(el, 'x', { duration: .7, ease: 'power3' });
        const yTo = gsap.quickTo(el, 'y', { duration: .7, ease: 'power3' });
        el.addEventListener('pointermove', e => {
          const r = el.getBoundingClientRect();
          xTo((e.clientX - r.left - r.width / 2) * .28);
          yTo((e.clientY - r.top - r.height / 2) * .4);
        });
        el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
      });
    }
  }

  /* Fonts shift layout — re-measure once they land */
  if (d.fonts && d.fonts.ready) d.fonts.ready.then(() => ScrollTrigger.refresh());
}
