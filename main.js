/* BAGAVAWOODS — theme toggle, works grid, modal */
(function () {
  'use strict';

  const TG = 'https://t.me/bagavawoodsmaster';

  /* ---------- products ---------- */
  const PRODUCTS = [
    {
      id: 'table',
      draw: 'img/draw-table.webp',
      line: 'Живая форма. Натуральный характер.',
      cat: 'Столы',
      num: '01',
      title: 'Журнальный столик «Природа»',
      tag: 'дуб / цельный валун / подсветка',
      lead: 'Столешница из массива дуба на цельном валуне. В ножке установлена подсветка: ночью камень мягко светится снизу.',
      specs: [['Материалы', 'массив дуба, цельный валун'], ['Длина', '780 мм'], ['Ширина', '480 мм'], ['Высота', '360 мм'], ['Особенность', 'подсветка ножки']],
      feat: [],
      day: ['img/table-1-day.webp', 'img/table-2-day.webp', 'img/table-3-day.webp'],
      night: ['img/table-1-night.webp', 'img/table-2-night.webp', 'img/table-3-night.webp'],
      alt: 'Журнальный столик с дубовой столешницей неправильной формы на каменном валуне',
      pos: '50% 62%',
      span: 'wide'
    },
    {
      id: 'tv',
      draw: 'img/draw-tv.webp',
      line: 'Функциональность. Чистые линии.',
      cat: 'Мебель',
      num: '02',
      title: 'Тумба под телевизор',
      tag: 'дуб / шип-паз / масло + воск',
      lead: 'Тумба из массива дуба. Все соединения шип-паз, без единого самореза. Три открытые ниши и три ящика на ласточкином хвосте.',
      specs: [['Материал', 'массив дуба'], ['Соединения', 'без саморезов, шип-паз'], ['Покрытие', 'бесцветное масло + воск']],
      feat: [],
      day: ['img/tv-1-day.webp', 'img/tv-2-day.webp'],
      night: ['img/tv-1-night.webp', 'img/tv-2-night.webp'],
      alt: 'Длинная тумба под телевизор из массива дуба с тремя ящиками',
      pos: '50% 50%'
    },
    {
      id: 'lamp',
      draw: 'img/draw-lamp.webp',
      line: 'Свет сквозь текстуру дуба.',
      cat: 'Свет',
      num: '03',
      title: 'Лампа из массива сосны и дуба',
      tag: 'сосна / дуб / без пластика',
      lead: 'Основание из сосны, абажур из дубового шпона. При включении текстура дуба светится тёплым янтарным светом. Без пластика и имитации.',
      specs: [['Основание', 'массив сосны'], ['Абажур', 'дуб'], ['Свет', 'мягкий, не режет глаза'], ['Где', 'спальня, уютный интерьер']],
      feat: ['100% натуральные материалы', 'Ручная работа', 'Уникальный рисунок дерева', 'Каждая лампа уникальна'],
      day: ['img/lamp-1-day.webp'],
      night: ['img/lamp-1-night.webp'],
      alt: 'Настольная лампа со светлым сосновым основанием и абажуром из дуба',
      pos: '50% 60%'
    },
    {
      id: 'shelf',
      draw: 'img/draw-shelf.webp',
      line: 'Необычные формы. Смелые решения.',
      cat: 'Полки',
      num: '04',
      title: 'Навесная полка «Петля»',
      tag: 'сосна / гнутая форма',
      lead: 'Полка из массива сосны, согнутая в замкнутую петлю. Изготовлю такую полку по вашим размерам.',
      specs: [['Материал', 'массив сосны'], ['Длина', '570 мм'], ['Высота', '160 мм'], ['Глубина', '~140 мм']],
      feat: ['Под ваши размеры'],
      day: ['img/shelf-1-day.webp', 'img/shelf-2-day.webp', 'img/shelf-3-day.webp'],
      night: ['img/shelf-1-night.webp', 'img/shelf-2-night.webp', 'img/shelf-3-day.webp'],
      alt: 'Гнутая полка-петля из сосны на мху в лесу',
      pos: '50% 64%',
      span: 'wide'
    },
    {
      id: 'stand',
      draw: 'img/draw-stand.webp',
      line: 'Дуб для всего, что звучит.',
      cat: 'Мебель',
      num: '05',
      title: 'Стойка для аудиоаппаратуры',
      tag: 'дуб / масло + воск',
      lead: 'Четыре полки из массива дуба для усилителя, проигрывателя и всего, что звучит. Устойчивая, тяжёлая, честная.',
      specs: [['Материал', 'дуб'], ['Покрытие', 'масло + воск'], ['Полок', '4']],
      feat: [],
      day: ['img/stand-1-day.webp', 'img/stand-2-day.webp', 'img/stand-3-day.webp'],
      night: ['img/stand-1-night.webp', 'img/stand-2-night.webp', 'img/stand-3-day.webp'],
      alt: 'Стойка для аудиоаппаратуры из дуба с четырьмя полками',
      pos: '50% 58%'
    },
    {
      id: 'amber',
      draw: 'img/draw-amber.webp',
      line: 'Детали, создающие атмосферу.',
      cat: 'Свет',
      num: '06',
      title: 'Лампы «Янтарь»',
      tag: 'дуб / радиальный и тангенциальный шпон',
      lead: 'Серия ламп из массива. Два основания, два рисунка абажура, две высоты. Свет проходит сквозь дерево и становится янтарным.',
      specs: [['Основание', 'сосна / дуб'], ['Рисунок абажура', 'радиальный / тангенциальный'], ['Высота', '240 мм / 450 мм']],
      feat: ['Мягкий свет, не режущий глаза', 'Идеальна для спальни'],
      day: ['img/lamp-2-day.webp', 'img/lamp-3-day.webp'],
      night: ['img/lamp-2-night.webp', 'img/lamp-3-night.webp'],
      alt: 'Дубовая лампа с круглым абажуром из шпона',
      pos: '50% 50%'
    }
  ];

  /* ---------- theme ---------- */
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const metaTheme = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme, animate) {
    if (animate) {
      root.classList.add('theme-anim');
      clearTimeout(applyTheme._t);
      applyTheme._t = setTimeout(() => root.classList.remove('theme-anim'), 900);
    }
    root.dataset.theme = theme;
    toggle.setAttribute('aria-checked', theme === 'night' ? 'true' : 'false');
    if (metaTheme) metaTheme.setAttribute('content', theme === 'night' ? '#0b0a08' : '#efece4');
    try { localStorage.setItem('bw-theme', theme); } catch (e) { /* private mode */ }
  }
  applyTheme(root.dataset.theme === 'night' ? 'night' : 'day', false);
  toggle.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'night' ? 'day' : 'night', true);
  });

  /* ---------- burger ---------- */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  burger.addEventListener('click', () => {
    const open = root.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  });
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      root.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---------- works grid ---------- */
  const grid = document.getElementById('worksGrid');

  function swapImg(day, night, alt, lazy, pos) {
    const l = lazy ? ' loading="lazy" decoding="async"' : '';
    const st = pos ? ` style="object-position:${pos}"` : '';
    return `<span class="swap">
      <img class="swap__day" src="${day}" alt="${alt}"${l}${st}>
      <img class="swap__night" src="${night}" alt=""${l}${st}>
    </span>`;
  }

  grid.innerHTML = PRODUCTS.map((p) => `
    <article class="card${p.span ? ' card--' + p.span : ''}" data-id="${p.id}">
      <button class="card__btn" type="button" aria-label="${p.title}, подробнее">
        <span class="card__head">
          <span class="num">${p.num}</span>
          <span class="card__cat">${p.cat}</span>
          <span class="card__line mono">${p.line}</span>
        </span>
        <span class="card__photo">${swapImg(p.day[0], p.night[0], p.alt, true, p.pos)}<img class="swap__draw" src="${p.draw}" alt="" loading="lazy" decoding="async"></span>
        <span class="card__foot">
          <span class="card__caption">
            <span class="card__title">${p.title}</span>
            <span class="card__tag mono">${p.tag}</span>
          </span>
          <span class="card__plus" aria-hidden="true">+</span>
        </span>
      </button>
    </article>`).join('');

  /* ---------- modal ---------- */
  const modal = document.getElementById('modal');
  const stage = document.getElementById('modalStage');
  const thumbs = document.getElementById('modalThumbs');
  let lastFocus = null;
  let current = null;

  function renderStage(p, i) {
    const isDraw = i >= p.day.length;
    stage.classList.toggle('is-draw', isDraw);
    stage.innerHTML = isDraw
      ? `<img class="stage__draw" src="${p.draw}" alt="Чертёж: ${p.title}">`
      : swapImg(p.day[i], p.night[i] || p.day[i], p.alt, false);
    document.getElementById('modalDims').style.display = isDraw ? 'none' : '';
    [...thumbs.children].forEach((t, k) => t.classList.toggle('is-active', k === i));
  }

  function openModal(p) {
    current = p;
    document.getElementById('modalNum').textContent = p.num + ' / ' + p.tag;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalLead').textContent = p.lead;
    document.getElementById('modalSpecs').innerHTML = p.specs.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
    const feat = document.getElementById('modalFeat');
    feat.innerHTML = p.feat.map((f) => `<li>${f}</li>`).join('');
    feat.hidden = p.feat.length === 0;
    document.getElementById('modalOrder').href = TG + '?text=' + encodeURIComponent('Здравствуйте! Интересует: ' + p.title);

    const dims = document.getElementById('modalDims');
    const get = (k) => (p.specs.find((s) => s[0] === k) || [])[1];
    const L = get('Длина'), H = get('Высота'), W = get('Ширина');
    dims.innerHTML = (L ? `<span class="dim dim--h"><i>${L}</i></span>` : '') + (H ? `<span class="dim dim--v"><i>${H}</i></span>` : '') + (W ? `<span class="dim dim--w mono">ширина ${W}</span>` : '');
    dims.hidden = !(L || H);
    thumbs.innerHTML = p.day.map((d, i) => `<button type="button" class="modal__thumb" aria-label="Фото ${i + 1}">${swapImg(d, p.night[i] || d, '', false)}</button>`).join('')
      + `<button type="button" class="modal__thumb modal__thumb--draw" aria-label="Чертёж"><img src="${p.draw}" alt=""><span class="mono">чертёж</span></button>`;
    thumbs.hidden = false;
    [...thumbs.children].forEach((t, i) => t.addEventListener('click', () => renderStage(p, i)));
    renderStage(p, 0);

    lastFocus = document.activeElement;
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => modal.classList.add('is-open'));
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal__close').focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => { modal.hidden = true; }, 300);
    if (lastFocus) lastFocus.focus();
    current = null;
  }

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    const p = PRODUCTS.find((x) => x.id === card.dataset.id);
    if (p) openModal(p);
  });
  modal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeModal(); });
  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') closeModal();
    if (current && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
      const n = current.day.length + 1;
      const active = [...thumbs.children].findIndex((t) => t.classList.contains('is-active'));
      renderStage(current, (active + (e.key === 'ArrowRight' ? 1 : n - 1)) % n);
    }
  });

  /* ---------- «плоттер»: прочерчивание линий ---------- */
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function drawables(svg) {
    return [...svg.querySelectorAll('path, circle, line, polyline, rect, ellipse')].filter((el) => !el.hasAttribute('stroke-dasharray'));
  }
  function prepDraw(svg) {
    drawables(svg).forEach((el) => {
      let L = 0; try { L = el.getTotalLength(); } catch (e) { return; }
      if (!L) return;
      el.style.strokeDasharray = L + ' ' + L;
      el.style.strokeDashoffset = L;
      el.style.transition = 'none';
      if (el.getAttribute('fill') && el.getAttribute('fill') !== 'none') { el.dataset.fill = el.getAttribute('fill'); el.style.fillOpacity = '0'; }
    });
  }
  function playDraw(svg, total) {
    const els = drawables(svg).filter((el) => el.style.strokeDasharray);
    const step = Math.min(70, total / Math.max(els.length, 1));
    els.forEach((el, i) => {
      const L = parseFloat(el.style.strokeDasharray);
      const dur = Math.min(900, Math.max(250, L * 1.2));
      el.style.transition = `stroke-dashoffset ${dur}ms linear ${i * step}ms, fill-opacity .4s ease ${i * step + dur}ms`;
      el.style.strokeDashoffset = 0;
      if (el.dataset.fill) el.style.fillOpacity = '1';
    });
  }
  if (!reduceMotion) {
    const svgs = [...document.querySelectorAll('svg.draw')];
    svgs.forEach(prepDraw);
    const dio = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { playDraw(en.target, 1800); dio.unobserve(en.target); } });
    }, { threshold: 0.25 });
    svgs.forEach((s) => dio.observe(s));
  }

  /* ---------- выноски на фото: линия всегда упирается в рамку ---------- */
  const leaders = document.getElementById('leaders');
  function drawLeaders() {
    if (!leaders) return;
    const fig = leaders.parentElement;
    const W = fig.clientWidth, H = fig.clientHeight;
    if (!W || !H) return;
    leaders.setAttribute('viewBox', `0 0 ${W} ${H}`);
    let s = '';
    fig.querySelectorAll('.callout').forEach((c) => {
      if (getComputedStyle(c).display === 'none') return;
      const x = W * parseFloat(c.dataset.x) / 100, y = H * parseFloat(c.dataset.y) / 100;
      const bx = c.offsetLeft, by = c.offsetTop, bw = c.offsetWidth, bh = c.offsetHeight;
      // ближайшая точка на рамке
      const px = Math.max(bx, Math.min(x, bx + bw)), py = Math.max(by, Math.min(y, by + bh));
      s += `<path d="M${x} ${y}L${px} ${py}"/><circle cx="${x}" cy="${y}" r="4"/>`;
    });
    leaders.innerHTML = s;
  }
  drawLeaders();
  addEventListener('resize', drawLeaders);
  if (document.fonts) document.fonts.ready.then(drawLeaders);
  addEventListener('load', drawLeaders);

  /* ---------- курсор-перекрестие с координатами ---------- */
  const xh = document.getElementById('xhair');
  if (xh && matchMedia('(pointer: fine)').matches && !reduceMotion) {
    const v = xh.querySelector('.xhair__v'), hz = xh.querySelector('.xhair__h'), lbl = xh.querySelector('.xhair__lbl');
    let mx = -1, my = -1, raf = 0;
    const pad = (n) => String(Math.round(n)).padStart(4, '0');
    function tick() {
      raf = 0;
      v.style.transform = `translateX(${mx}px)`;
      hz.style.transform = `translateY(${my}px)`;
      lbl.style.transform = `translate(${mx + 14}px, ${my + 14}px)`;
      lbl.textContent = `x ${pad(mx)}  y ${pad(my + scrollY)}`;
    }
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      xh.classList.add('is-on');
      if (!raf) raf = requestAnimationFrame(tick);
    });
    document.addEventListener('mouseleave', () => xh.classList.remove('is-on'));
    document.addEventListener('mouseover', (e) => {
      xh.classList.toggle('is-hidden', !!e.target.closest('a, button, .modal'));
    });
  }

  /* ---------- прелоадер «лист чертежа» ---------- */
  const loader = document.getElementById('loader');
  let seen = false; try { seen = sessionStorage.getItem('bw-sheet') === '1'; } catch (e) { /* */ }
  if (loader && !seen && !reduceMotion) {
    const W = innerWidth, H = innerHeight, m = Math.round(Math.min(W, H) * 0.045);
    const sw = Math.min(360, W - 2 * m - 20), sh = 70, sx = W - m - sw, sy = H - m - sh;
    const svg = document.getElementById('loaderSvg');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.innerHTML = `<rect x="${m}" y="${m}" width="${W - 2 * m}" height="${H - 2 * m}"/>
      <rect x="${sx}" y="${sy}" width="${sw}" height="${sh}"/>
      <path d="M${sx} ${sy + sh / 2}H${sx + sw}"/><path d="M${sx + sw * .34} ${sy}V${sy + sh}"/><path d="M${sx + sw * .68} ${sy}V${sy + sh}"/>
      <path d="M${m + 18} ${m + 18}h40M${m + 18} ${m + 18}v40"/><path d="M${W - m - 18} ${H - m - 18}h-40M${W - m - 18} ${H - m - 18}v-40"/>
      <path d="M${W / 2 - 60} ${H / 2}h120M${W / 2} ${H / 2 - 60}v120"/>`;
    prepDraw(svg);
    requestAnimationFrame(() => playDraw(svg, 900));
    setTimeout(() => loader.classList.add('is-text'), 900);
    setTimeout(() => { loader.classList.add('is-done'); try { sessionStorage.setItem('bw-sheet', '1'); } catch (e) { /* */ } }, 1750);
    setTimeout(() => loader.remove(), 2400);
  } else if (loader) { loader.remove(); }

  /* ---------- rulers ---------- */
  function buildRuler(el) {
    const w = el.clientWidth || 1200;
    const h = 22;
    let s = `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" stroke="currentColor" stroke-width="1">`;
    for (let x = 0; x <= w; x += 10) {
      const big = x % 100 === 0, mid = x % 50 === 0;
      s += `<path d="M${x + .5} ${h}V${h - (big ? 14 : mid ? 9 : 5)}"/>`;
      if (big) s += `<text x="${x + 4}" y="9" font-size="8" font-family="JetBrains Mono, monospace" fill="currentColor" stroke="none">${x / 10}</text>`;
    }
    el.innerHTML = s + '</svg>';
  }
  const rulers = [...document.querySelectorAll('.ruler')];
  rulers.forEach(buildRuler);
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => rulers.forEach(buildRuler), 150); });

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });
  document.querySelectorAll('.section__head, .about__grid, .works__grid, .steps, .materials__grid, .order__grid').forEach((el) => { el.classList.add('reveal'); io.observe(el); });
})();
