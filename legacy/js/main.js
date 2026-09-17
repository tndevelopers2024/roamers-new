/* Roamers — chrome: smooth scroll, loader, nav, menu, cursor, magnetic buttons, page exits.
   Section choreography lives in story.js. */
(() => {
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

  /* Loader — the departure board flips to ROAMERS, then lifts --------------- */
  const loader = d.querySelector('.loader');
  R.ready = new Promise(resolve => {
    if (!loader || reduce) { loader && loader.remove(); return resolve(); }
    lenis && lenis.stop();
    const word = loader.querySelector('.loader__word');
    const target = word.dataset.flap;
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    word.innerHTML = [...target].map(() => '<span class="flap">&nbsp;</span>').join('');
    const flaps = [...word.children];
    const settle = flaps.map((_, i) => 5 + i * 2);
    let frame = 0;
    const iv = setInterval(() => {
      frame++;
      flaps.forEach((f, i) => { f.textContent = frame >= settle[i] ? target[i] : abc[(Math.random() * 26) | 0]; });
      if (frame >= settle[settle.length - 1]) { clearInterval(iv); lift(); }
    }, 48);
    function lift() {
      gsap.timeline({ delay: .25 })
        .to(loader.querySelector('.loader__board'), { y: -30, opacity: 0, duration: .5, ease: 'power3.in' })
        .to(loader, {
          clipPath: 'inset(0% 0% 100% 0%)', duration: 1.05, ease: 'expo.inOut',
          onStart: () => setTimeout(resolve, 250),
          onComplete: () => { loader.remove(); lenis && lenis.start(); }
        }, '-=.1');
    }
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
    const mbar = d.querySelector('.mbar');
    ScrollTrigger.create({
      trigger: '.statement', start: 'top 60%', endTrigger: '.finale', end: 'top 70%',
      onToggle: s => mbar.classList.toggle('is-visible', s.isActive)
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
    const cursor = d.querySelector('.cursor'), label = cursor.querySelector('.cursor__label');
    const pos = { x: innerWidth / 2, y: innerHeight / 2 }, cur = { x: pos.x, y: pos.y };
    let shown = false;
    addEventListener('pointermove', e => {
      pos.x = e.clientX; pos.y = e.clientY;
      if (!shown) { shown = true; cur.x = pos.x; cur.y = pos.y; gsap.to(cursor, { opacity: 1, duration: .3 }); }
      const t = e.target.closest('[data-cursor]');
      if (t) { label.textContent = t.dataset.cursor; cursor.classList.add('has-label'); }
      else cursor.classList.remove('has-label');
    }, { passive: true });
    d.addEventListener('pointerleave', () => { shown = false; gsap.to(cursor, { opacity: 0, duration: .3 }); });
    addEventListener('pointerdown', () => cursor.classList.add('is-down'));
    addEventListener('pointerup', () => cursor.classList.remove('is-down'));
    gsap.set(cursor, { opacity: 0 });
    gsap.ticker.add(() => {
      cur.x += (pos.x - cur.x) * .22; cur.y += (pos.y - cur.y) * .22;
      cursor.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
    });

    d.querySelectorAll('[data-magnetic]').forEach(el => {
      const xTo = gsap.quickTo(el, 'x', { duration: .7, ease: 'power3' });
      const yTo = gsap.quickTo(el, 'y', { duration: .7, ease: 'power3' });
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * .28); yTo((e.clientY - r.top - r.height / 2) * .4);
      });
      el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
    });
  }

  /* Fonts shift layout — re-measure once they land */
  if (d.fonts && d.fonts.ready) d.fonts.ready.then(() => ScrollTrigger.refresh());
})();
