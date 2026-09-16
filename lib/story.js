import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* Roamers — the story: scroll choreography, chapter by chapter.
   Pins are created in page order; generic reveals last, so every trigger measures after the pin spacers exist. */
export function initStory() {
  const d = document, R = window.Roamers;
  const $ = (s, c = d) => c.querySelector(s), $$ = (s, c = d) => [...c.querySelectorAll(s)];
  const mm = gsap.matchMedia();
  const DESK = '(min-width: 901px)', MOB = '(max-width: 900px)';
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp01 = v => Math.max(0, Math.min(1, v));
  const inOut = gsap.parseEase('power2.inOut');

  if (R.reduce) { R.initChapters(); return; }

  /* Text prep: masked lines for display headings, words for the statement ---- */
  $$('.h-display, .season__title').forEach(h => {
    h.innerHTML = h.innerHTML.split(/<br\s*\/?>/i).map(l => `<span class="ln"><span class="ln-i">${l.trim()}</span></span>`).join('');
  });
  $$('.hero__solo, .hero__squad').forEach(el => { el.classList.add('ln'); el.innerHTML = `<span class="ln-i">${el.innerHTML}</span>`; });
  const wrapWords = node => [...node.childNodes].forEach(n => {
    if (n.nodeType === 3) {
      const frag = d.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) return frag.appendChild(d.createTextNode(part));
        const s = d.createElement('span'); s.className = 'w'; s.textContent = part; frag.appendChild(s);
      });
      n.replaceWith(frag);
    } else if (n.nodeType === 1 && !n.classList.contains('inline-img')) wrapWords(n);
  });

  /* 01 HERO — a camera that starts on one traveller and pulls back to the squad */
  const hero = $('.hero'), stage = $('.hero__stage'), media = $('.hero__media'), img = $('.hero__img');
  const ref = d.createElement('div'); ref.className = 'hero__ref'; stage.appendChild(ref);
  const AR = 1.5;                                          // photo is 3:2
  const SOLO = { u: .262, v: .68 };                        // the traveller on the far left, arm out
  const GROUP = { u0: .18, v0: .55, u1: .655, v1: .9 };    // all six, in photo coordinates
  const cam = { p: 0, intro: 1.18 };
  let B = null;

  const measureHero = () => {
    const vw = stage.clientWidth, vh = stage.clientHeight;
    const W = Math.max(vw, vh * AR), H = W / AR;
    img.style.width = W + 'px'; img.style.height = H + 'px'; img.style.objectFit = 'fill';
    const s = stage.getBoundingClientRect(), f = ref.getBoundingClientRect();
    B = { vw, vh, W, H, mobile: vw < 700, frame: { x0: f.left - s.left, y0: f.top - s.top, x1: f.right - s.left, y1: f.bottom - s.top } };
  };
  const renderHero = () => {
    if (!B) return;
    const { vw, vh, W, H, frame, mobile } = B;
    const t = inOut(clamp01(cam.p / .85)), c = inOut(clamp01((cam.p - .18) / .67));
    const s0 = vh / (H * .3);
    const fw = frame.x1 - frame.x0, fh = frame.y1 - frame.y0;
    let s1 = Math.min(fw / ((GROUP.u1 - GROUP.u0) * W), fh / ((GROUP.v1 - GROUP.v0) * H)) * .94;
    s1 = Math.max(s1, fw / W, fh / H);
    const s = s0 * Math.pow(s1 / s0, t) * cam.intro;
    const ax = lerp(vw * (mobile ? .5 : .82), (frame.x0 + frame.x1) / 2, t);
    const ay = lerp(vh * (mobile ? .46 : .5), (frame.y0 + frame.y1) / 2, t);
    const pu = lerp(SOLO.u, (GROUP.u0 + GROUP.u1) / 2, t), pv = lerp(SOLO.v, (GROUP.v0 + GROUP.v1) / 2, t);
    const r = { x0: frame.x0 * c, y0: frame.y0 * c, x1: lerp(vw, frame.x1, c), y1: lerp(vh, frame.y1, c) };
    const w = W * s, h = H * s;
    let x = ax - pu * w, y = ay - pv * h;
    x = w >= r.x1 - r.x0 ? Math.min(r.x0, Math.max(r.x1 - w, x)) : (r.x0 + r.x1 - w) / 2;
    y = h >= r.y1 - r.y0 ? Math.min(r.y0, Math.max(r.y1 - h, y)) : (r.y0 + r.y1 - h) / 2;
    img.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${s})`;
    media.style.clipPath = `inset(${r.y0}px ${vw - r.x1}px ${vh - r.y1}px ${r.x0}px)`;
  };
  measureHero(); renderHero();

  gsap.timeline({
    scrollTrigger: {
      trigger: hero, start: 'top top', end: '+=150%', pin: true, scrub: 1,
      onRefresh: self => { measureHero(); renderHero(); R.heroEnd = self.end; R.navTick(); },
      onUpdate: self => { const solid = self.progress > .42; if (solid !== R.heroSolid) { R.heroSolid = solid; R.navTick(); } }
    }
  })
    .to(cam, { p: 1, duration: 1, ease: 'none', onUpdate: renderHero }, 0)
    .to('.hero__over', { autoAlpha: 0, y: () => -innerHeight * .07, duration: .26, ease: 'power1.in' }, .03)
    .fromTo('.hero__end-line', { autoAlpha: 0, yPercent: 35 }, { autoAlpha: 1, yPercent: 0, duration: .24, ease: 'power2.out' }, .62)
    .fromTo('.hero__end-fig', { autoAlpha: 0 }, { autoAlpha: 1, duration: .14 }, .72)
    .to({}, { duration: .12 });

  R.ready.then(() => {
    gsap.to(cam, { intro: 1, duration: 2.8, ease: 'expo.out', onUpdate: renderHero });
    gsap.from('.hero__solo .ln-i, .hero__squad .ln-i', { yPercent: 110, duration: 1.4, ease: 'expo.out', stagger: .12, delay: .15 });
    gsap.from('.hero__fig, .hero__foot > *, .hero__scroll', { opacity: 0, y: 24, duration: 1.1, ease: 'power3.out', stagger: .08, delay: .55 });
  });

  /* 02 STATEMENT — read at the speed of scroll ------------------------------- */
  const statement = $('.statement__text');
  wrapWords(statement);
  gsap.fromTo($$('.w, .inline-img', statement), { opacity: .12 }, {
    opacity: 1, ease: 'none', stagger: .08,
    scrollTrigger: { trigger: statement, start: 'top 82%', end: 'bottom 48%', scrub: true }
  });
  $$('.inline-img img', statement).forEach(im => gsap.fromTo(im, { scale: 1.45 }, {
    scale: 1, ease: 'none', scrollTrigger: { trigger: im, start: 'top 95%', end: 'top 45%', scrub: true }
  }));

  /* 03 HOW — Day 0 → Day 7; strangers drift into a constellation ------------- */
  const buildNet = svg => {
    const NS = 'http://www.w3.org/2000/svg', N = 14, C = 150;
    let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const scatter = [[C, C]], cluster = [[C, C]];
    for (let i = 1; i < N; i++) {
      let x, y; do { x = 14 + rnd() * 272; y = 14 + rnd() * 272; } while (Math.hypot(x - C, y - C) < 72);
      scatter.push([x, y]);
      const a = (i - 1) / (N - 1) * Math.PI * 2 - Math.PI / 2, r = 70 + (i % 3) * 16;
      cluster.push([C + Math.cos(a) * r, C + Math.sin(a) * r]);
    }
    const minStep = new Map();
    const link = (a, b, s) => { const k = a < b ? `${a}-${b}` : `${b}-${a}`; minStep.set(k, Math.min(s, minStep.get(k) ?? 9)); };
    [[0, 4], [0, 10], [6, 7], [12, 13]].forEach(([a, b]) => link(a, b, 1));
    for (let i = 1; i < N; i++) link(i, i === N - 1 ? 1 : i + 1, 2);
    for (let i = 1; i < N; i++) link(0, i, 3);
    const lines = [...minStep].map(([k, s]) => {
      const [a, b] = k.split('-').map(Number), l = d.createElementNS(NS, 'line');
      svg.appendChild(l); return { l, a, b, s };
    });
    const dots = scatter.map((_, i) => {
      const c = d.createElementNS(NS, 'circle'); c.setAttribute('r', i ? 4 : 6.5);
      if (!i) c.classList.add('you'); svg.appendChild(c); return c;
    });
    const K = [0, .36, .72, 1], st = { k: 0 };
    const draw = () => {
      const pts = scatter.map((p, i) => [lerp(p[0], cluster[i][0], st.k), lerp(p[1], cluster[i][1], st.k)]);
      dots.forEach((c, i) => { c.setAttribute('cx', pts[i][0]); c.setAttribute('cy', pts[i][1]); });
      lines.forEach(({ l, a, b }) => { l.setAttribute('x1', pts[a][0]); l.setAttribute('y1', pts[a][1]); l.setAttribute('x2', pts[b][0]); l.setAttribute('y2', pts[b][1]); });
    };
    draw();
    return {
      set(step) {
        gsap.to(st, { k: K[step], duration: 1.4, ease: 'power3.inOut', onUpdate: draw, overwrite: true });
        lines.forEach(({ l, s }) => { l.style.opacity = s <= step ? (step === 3 ? .5 : .4) : 0; });
        dots.forEach((c, i) => { c.style.opacity = i === 0 || step > 0 ? 1 : .32; });
      }
    };
  };
  const net = buildNet($('.how__net svg'));

  mm.add(DESK, () => {
    const steps = $$('.how__step'), imgs = $$('.how__img');
    const day = $('.how__count-day'), text = $('.how__count-text');
    let cur = -1;
    const go = i => {
      if (i === cur) return;
      const prev = cur; cur = i;
      steps.forEach((s, k) => s.classList.toggle('is-active', k === i));
      imgs.forEach((im, k) => { im.style.zIndex = k === i ? 2 : k === prev ? 1 : 0; });
      gsap.fromTo(imgs[i],
        { clipPath: i > prev ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)', scale: 1.14 },
        { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.15, ease: 'expo.inOut', overwrite: true });
      day.textContent = $('.how__day', steps[i]).textContent;
      text.textContent = steps[i].dataset.count;
      net.set(i);
    };
    steps.forEach((s, i) => ScrollTrigger.create({ trigger: s, start: 'top 60%', end: 'bottom 60%', onToggle: self => self.isActive && go(i) }));
    go(0);
    return () => steps.forEach(s => s.classList.remove('is-active'));
  });

  /* 04 TRIPS — six chapters on a horizontal track ----------------------------- */
  mm.add(DESK, () => {
    const section = $('.trips'), track = $('.trips__track'), bar = $('.trips__progress span');
    const dist = () => track.scrollWidth - innerWidth;
    const move = gsap.to(track, {
      x: () => -dist(), ease: 'none',
      scrollTrigger: {
        trigger: section, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true,
        onUpdate: s => gsap.set(bar, { scaleX: s.progress })
      }
    });
    $$('.chapter', track).forEach(ch => {
      gsap.fromTo($('.chapter__img', ch), { xPercent: -6 }, { xPercent: 6, ease: 'none', scrollTrigger: { trigger: ch, containerAnimation: move, start: 'left right', end: 'right left', scrub: true } });
      gsap.from($('.chapter__name', ch), { yPercent: 45, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: ch, containerAnimation: move, start: 'left 62%' } });
      gsap.from([$('.chapter__inset', ch), $('.chapter__line', ch)], { y: 40, opacity: 0, duration: 1, stagger: .1, ease: 'power3.out', scrollTrigger: { trigger: ch, containerAnimation: move, start: 'left 55%' } });
    });
  });
  mm.add(MOB, () => {
    const pin = $('.trips__pin'), bar = $('.trips__progress span');
    const onScroll = () => gsap.set(bar, { scaleX: pin.scrollLeft / Math.max(1, pin.scrollWidth - pin.clientWidth) });
    pin.addEventListener('scroll', onScroll, { passive: true });
    return () => pin.removeEventListener('scroll', onScroll);
  });

  /* 05 WAYS — a photo follows the cursor down the contents page --------------- */
  if (R.fine) {
    const float = $('.ways__float'), fimg = $('img', float), list = $('.ways__list');
    const pos = { x: 0, y: 0 }, cur = { x: 0, y: 0 };
    let on = false, rot = 0;
    $$('.way a', list).forEach(a => {
      new Image().src = a.dataset.img;
      a.addEventListener('pointerenter', e => {
        if (!on) { cur.x = pos.x = e.clientX; cur.y = pos.y = e.clientY; }
        fimg.src = a.dataset.img; on = true; float.classList.add('is-on');
      });
    });
    list.addEventListener('pointermove', e => { pos.x = e.clientX; pos.y = e.clientY; }, { passive: true });
    list.addEventListener('pointerleave', () => { on = false; float.classList.remove('is-on'); });
    addEventListener('scroll', () => { if (on && !list.matches(':hover')) { on = false; float.classList.remove('is-on'); } }, { passive: true });
    gsap.ticker.add(() => {
      if (!on && !float.classList.contains('is-on')) return;
      const dx = pos.x - cur.x;
      cur.x += dx * .14; cur.y += (pos.y - cur.y) * .14;
      rot += (gsap.utils.clamp(-10, 10, dx * .06) - rot) * .12;
      float.style.transform = `translate3d(${cur.x + 32}px, ${cur.y - float.offsetHeight / 2}px, 0) rotate(${rot}deg)`;
    });
  }

  /* 06 PEOPLE — strangers scattered at the edges huddle around the words ------ */
  const PP = {
    desk: {
      s: [[-46, -8, -8, .7], [-10, -44, -5, .68], [18, -46, 7, .64], [-34, -42, 6, .68], [47, 6, 7, .7], [-12, 45, -7, .64], [-36, 42, 5, .68], [36, 43, -6, .68], [38, -40, -7, .64], [-48, 38, 5, .68], [49, -36, 6, .64], [14, 46, 6, .68]],
      e: [[-38, -3, -3], [-5, -26, -2], [11, -29, 3], [-24, -26, 4], [38, 3, 3], [-7, 28, -3], [-22, 26, 2], [24, 26, -3], [26, -26, -4], [-37, 29, -3], [37, -27, 3], [8, 26, 2]]
    },
    mob: {
      s: [[-40, -40, -8, .7], [36, -45, 7, .7], [44, -26, -8, .66], [4, -42, 6, .7], [38, 40, 8, .7], [-44, 28, -7, .66], [-30, 44, 6, .7], [-2, 42, -6, .7]],
      e: [[-22, -30, -3], [20, -36, 3], [29, -20, -4], [2, -27, 2], [22, 30, 3], [-28, 21, -3], [-18, 35, 2], [-1, 28, -2]]
    }
  };
  mm.add({ desk: DESK, mob: MOB }, ctx => {
    const cfg = ctx.conditions.desk ? PP.desk : PP.mob;
    const vw = v => innerWidth * v / 100, vh = v => innerHeight * v / 100;
    const items = $$('.pp').slice(0, cfg.e.length);
    gsap.set(items, { xPercent: -50, yPercent: -50 });
    const tl = gsap.timeline({ scrollTrigger: { trigger: '.people', start: 'top top', end: '+=170%', pin: true, scrub: 1, invalidateOnRefresh: true } });
    const title = $('.people__title'), clearTitle = () => title.offsetWidth / 2 / innerWidth * 100 + 7.25;
    items.forEach((el, i) => {
      const [sx, sy, sr, ss] = cfg.s[i], [ex, ey, er] = cfg.e[i];
      const side = ctx.conditions.desk && (i === 0 || i === 4);   // the two big prints flank the headline
      const endX = () => vw(side ? Math.sign(ex) * Math.max(Math.abs(ex), clearTitle()) : ex);
      tl.fromTo(el, { x: () => vw(sx), y: () => vh(sy), rotate: sr, scale: ss, opacity: .45 },
        { x: endX, y: () => vh(ey), rotate: er, scale: 1, opacity: 1, ease: 'power2.inOut', duration: 1 }, i * .025);
    });
    tl.fromTo('.people__t2', { clipPath: 'inset(0% 0% 100% 0%)', yPercent: 25 }, { clipPath: 'inset(0% 0% -15% 0%)', yPercent: 0, duration: .32, ease: 'power2.out' }, .64)
      .to({}, { duration: .25 });
  });

  /* 08 STORIES — each postcard sinks as the next one lands -------------------- */
  const stack = $('.stories__stack'), stories = $$('.story');
  stories.forEach((story, i) => {
    gsap.fromTo($('.story__media img', story), { scale: 1.18 }, {
      scale: 1, ease: 'none',
      scrollTrigger: { trigger: stack, start: () => `top+=${(i - 1) * innerHeight} top`, end: () => `top+=${i * innerHeight} top`, scrub: true, invalidateOnRefresh: true }
    });
    if (i < stories.length - 1) gsap.to($('.story__card', story), {
      scale: .9, opacity: .55, ease: 'none',
      scrollTrigger: { trigger: stack, start: () => `top+=${i * innerHeight} top`, end: () => `top+=${(i + 1) * innerHeight} top`, scrub: true, invalidateOnRefresh: true }
    });
  });

  /* 09 PROOF — the numbers count up once --------------------------------------- */
  $$('.proof .num').forEach(el => {
    const to = parseFloat(el.dataset.to), dec = +(el.dataset.decimals || 0), suf = el.dataset.suffix || '';
    const o = { v: 0 }, fmt = () => { el.textContent = o.v.toFixed(dec) + suf; };
    fmt();
    ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => gsap.to(o, { v: to, duration: 2.1, ease: 'power3.out', onUpdate: fmt }) });
  });

  /* 10 FINALE — credits roll, then the ask ------------------------------------ */
  const credits = $('.finale__credits');
  gsap.timeline({ scrollTrigger: { trigger: '.finale', start: 'top top', end: '+=190%', pin: true, scrub: 1, invalidateOnRefresh: true } })
    .fromTo('.finale__media img', { scale: 1.3 }, { scale: 1.05, ease: 'none', duration: 1 }, 0)
    .fromTo(credits, { y: 0 }, { y: () => -(credits.offsetHeight + innerHeight * .7), ease: 'none', duration: .6 }, 0)
    .fromTo('.finale__end > *', { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, stagger: .04, duration: .18, ease: 'power2.out' }, .56);

  /* Generic reveals (created last, after every pin) ---------------------------- */
  $$('.h-display').forEach(h => gsap.from($$('.ln-i', h), {
    yPercent: 108, duration: 1.2, ease: 'expo.out', stagger: .09, scrollTrigger: { trigger: h, start: 'top 86%' }
  }));
  $$('.eyebrow, .statement__lede, .pillars li, .how__sub, .trips__lede, .ways__lede, .way, .community__title, .community__lede, .community__ctas, .proof__list li, .expert, .people__note, .deps__lede, .deps__bar, .deps__foot, .season__aside, .season__foot, .meets__lede, .meets__foot')
    .forEach(el => gsap.from(el, { y: 36, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } }));

  /* Card collections deal in like a hand — set first, so nothing flashes in */
  ['.dep', '.scard', '.meet'].forEach(sel => {
    const cards = $$(sel);
    if (!cards.length) return;
    gsap.set(cards, { opacity: 0, y: 44 });
    ScrollTrigger.batch(cards, {
      start: 'top 90%',
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: .07, overwrite: true })
    });
  });
  gsap.from('.season__title .ln-i, .season__meta span', { yPercent: 60, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: .07, scrollTrigger: { trigger: '.season__head', start: 'top 82%' } });
  $$('.cm').forEach((el, i) => gsap.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, {
    clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, delay: i * .15, ease: 'expo.inOut', scrollTrigger: { trigger: '.community__media', start: 'top 80%' }
  }));
  gsap.from('.proof__poem .pw', { opacity: 0, y: 24, stagger: .07, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.proof__poem', start: 'top 80%' } });

  R.initChapters();
  ScrollTrigger.refresh();
  R.navTick();
}
