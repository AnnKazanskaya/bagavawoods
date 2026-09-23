/* BAGAVAWOODS — theme toggle, works grid, modal */
(function () {
  'use strict';

  const TG = 'https://t.me/bagavawoodsmaster';

  /* ---------- products ---------- */
  const PRODUCTS = [
    {
      id: 'table',
      origin: 'дуб, Пермский край, спилен в 2023, сушился 14 месяцев; валун с берега Камы',
      smell: 'дуб, мокрый камень, трава после дождя',
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
      origin: 'дуб, Башкирия, спилен в 2022, сушился 18 месяцев',
      smell: 'дуб, тёплое масло, воск',
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
      origin: 'сосна, Пермский край, 2024, сушка 8 месяцев; шпон дуба из той же партии, что столик',
      smell: 'смола, сосна, нагретое дерево',
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
      origin: 'сосна, Пермский край, 2024; гнута паром за один вечер',
      note: 'клиент просил ниже, сделали 160',
      smell: 'сосновая смола, мох, лес',
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
      origin: 'дуб, Башкирия, 2022, из той же доски, что тумба',
      smell: 'дуб, воск, немного пыли от винила',
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
      origin: 'дуб и сосна, Пермский край, 2024; шпон подбирался по рисунку вручную',
      smell: 'дуб, тёплый воск, свет',
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

  const onTheme = [];
  function applyTheme(theme, animate) {
    if (animate) {
      root.classList.add('theme-anim');
      clearTimeout(applyTheme._t);
      applyTheme._t = setTimeout(() => root.classList.remove('theme-anim'), 900);
    }
    root.dataset.theme = theme;
    toggle.setAttribute('aria-checked', theme === 'night' ? 'true' : 'false');
    if (metaTheme) metaTheme.setAttribute('content', theme === 'night' ? '#0b0a08' : '#efece4');
    try { sessionStorage.setItem('bw-theme', theme); localStorage.removeItem('bw-theme'); } catch (e) { /* private mode */ }
    onTheme.forEach((f) => f(theme));
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
            ${p.note ? `<span class="pnote hand">${p.note}</span>` : ''}
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
    document.getElementById('modalSmell').textContent = 'пахнет: ' + p.smell;
    document.getElementById('modalOrigin').textContent = 'откуда дерево: ' + p.origin;
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
  function stepSlide(dir) {
    if (!current) return;
    const n = current.day.length + 1;
    const active = [...thumbs.children].findIndex((t) => t.classList.contains('is-active'));
    renderStage(current, (active + dir + n) % n);
  }
  let tx = 0, ty = 0, tt = 0;
  stage.addEventListener('touchstart', (e) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; tt = Date.now(); }, { passive: true });
  stage.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Date.now() - tt < 600 && Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) stepSlide(dx < 0 ? 1 : -1);
  }, { passive: true });
  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') stepSlide(1);
    if (e.key === 'ArrowLeft') stepSlide(-1);
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
  const drawSvgs = reduceMotion ? [] : [...document.querySelectorAll('svg.draw')];
  drawSvgs.forEach(prepDraw);
  function armDraw() {
    const dio = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { playDraw(en.target, 1600); dio.unobserve(en.target); } });
    }, { threshold: 0.2 });
    drawSvgs.forEach((s) => dio.observe(s));
  }

  /* ---------- выноски на фото: линия всегда упирается в рамку ---------- */
  function drawLeadersIn(leaders) {
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
      s += `<path class="lead-bg" d="M${x} ${y}L${px} ${py}"/><path d="M${x} ${y}L${px} ${py}"/><circle class="lead-bg" cx="${x}" cy="${y}" r="6"/><circle cx="${x}" cy="${y}" r="3.5"/>`;
    });
    leaders.innerHTML = s;
  }
  function drawLeaders() { document.querySelectorAll('.leaders').forEach(drawLeadersIn); }
  drawLeaders();
  addEventListener('resize', drawLeaders);
  if (document.fonts) document.fonts.ready.then(drawLeaders);
  addEventListener('load', drawLeaders);

  /* ---------- прелоадер: заполняемый спил ---------- */
  const loader = document.getElementById('loader');
  let seen = false; try { seen = sessionStorage.getItem('bw-sheet') === '1'; } catch (e) { /* */ }
  const firstVisit = !seen && !reduceMotion;
  let loaderDone = Promise.resolve();
  if (loader && firstVisit) {
    root.classList.add('is-loading');
    const W = innerWidth, H = innerHeight, mg = Math.round(Math.min(W, H) * 0.045);
    const svg = document.getElementById('loaderSvg');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.innerHTML = `<rect x="${mg}" y="${mg}" width="${W - 2 * mg}" height="${H - 2 * mg}"/>
      <path d="M${mg + 16} ${mg + 16}h36M${mg + 16} ${mg + 16}v36"/><path d="M${W - mg - 16} ${H - mg - 16}h-36M${W - mg - 16} ${H - mg - 16}v-36"/>
      <path d="M${W - mg - 16} ${mg + 16}h-36M${W - mg - 16} ${mg + 16}v36"/><path d="M${mg + 16} ${H - mg - 16}h36M${mg + 16} ${H - mg - 16}v-36"/>`;
    prepDraw(svg); requestAnimationFrame(() => playDraw(svg, 700));
    // копия спила из подвала, кольца проявляются от сердцевины к коре
    const src = document.querySelector('.rings-svg');
    const ringsBox = document.getElementById('loaderRings');
    const rsvg = src.cloneNode(true); rsvg.classList.remove('draw'); rsvg.removeAttribute('class'); rsvg.setAttribute('class', 'loader__rings-svg');
    ringsBox.appendChild(rsvg);
    const ringEls = [...rsvg.children]; ringEls.forEach((el) => { el.style.strokeDasharray = ''; el.style.strokeDashoffset = ''; el.style.transition = ''; el.style.fillOpacity = ''; el.style.opacity = '0'; });
    const pct = document.getElementById('loaderPct');
    let progress = 0, loaded = false, shownPrev = -1, t0 = performance.now(), tLoaded = 0;
    addEventListener('load', () => { loaded = true; });
    const ease = (x) => 1 - Math.pow(1 - x, 3);
    const finish = new Promise((resolve) => {
      function frame(now) {
        const t = (now - t0) / 1000;
        if ((loaded || t > 1.9) && !tLoaded) tLoaded = t;
        // до 90 % за 1,4 с, дальше ждём загрузку (максимум до 1,9 с), потом добираем до 100 % за 0,4 с
        progress = tLoaded ? 0.9 + 0.1 * Math.min(1, (t - tLoaded) / 0.4) : 0.9 * ease(Math.min(1, t / 1.4));
        const shown = Math.round(progress * ringEls.length);
        if (shown !== shownPrev) { ringEls.forEach((el, i) => { el.style.opacity = i < shown ? '1' : '0'; }); shownPrev = shown; }
        pct.textContent = String(Math.round(progress * 100)).padStart(2, '0') + ' %';
        if (progress < 1) requestAnimationFrame(frame);
        else {
          setTimeout(() => { loader.classList.add('is-done'); root.classList.remove('is-loading'); try { sessionStorage.setItem('bw-sheet', '1'); } catch (e) { /* */ } resolve(); }, 350);
          setTimeout(() => loader.remove(), 1100);
        }
      }
      requestAnimationFrame(frame);
    });
    loaderDone = finish;
    finish.then(() => setTimeout(armDraw, 300));
  } else { if (loader) loader.remove(); armDraw(); }

  /* ---------- рулон: лист разворачивается при первой прокрутке ---------- */
  const hero = document.querySelector('.hero');
  const roll = document.getElementById('roll');
  let rolled = false; try { rolled = sessionStorage.getItem('bw-roll') === '1'; } catch (e) { /* */ }
  if (hero && roll && !rolled && !reduceMotion && matchMedia('(min-width: 600px)').matches) {
    hero.classList.add('is-rolled');
    root.classList.add('is-locked');
    let started = false;
    function unroll() {
      if (started) return; started = true;
      hero.classList.add('is-unrolling');
      setTimeout(() => {
        hero.classList.remove('is-rolled', 'is-unrolling');
        root.classList.remove('is-locked');
        roll.remove();
        try { sessionStorage.setItem('bw-roll', '1'); } catch (e) { /* */ }
        drawLeaders();
      }, 1500);
      ['wheel', 'touchmove', 'keydown'].forEach((ev) => removeEventListener(ev, onIntent));
    }
    function onIntent(e) { if (e.type === 'keydown' && !['ArrowDown', 'PageDown', ' ', 'End'].includes(e.key)) return; unroll(); }
    loaderDone.then(() => {
      ['wheel', 'touchmove', 'keydown'].forEach((ev) => addEventListener(ev, onIntent, { passive: true }));
      roll.addEventListener('click', unroll);
      setTimeout(unroll, 5000); // если 5 секунд нет действий, разворачиваем сами
    });
  } else if (roll) { roll.remove(); }

  /* ---------- опилки при клике на «заказать» ---------- */
  let dustAt = 0;
  function sawdust(x, y, n) {
    const now = Date.now();
    if (reduceMotion || now - dustAt < 350) return; dustAt = now;
    const colors = ['#c9a252', '#a8783a', '#e0c48a', '#8b5e2b', '#d9b26a'];
    for (let i = 0; i < n; i++) {
      const p = document.createElement('i');
      p.className = 'dust';
      const w = 3 + Math.random() * 6, hgt = 1.5 + Math.random() * 2.5;
      p.style.cssText = `left:${x}px;top:${y}px;width:${w}px;height:${hgt}px;background:${colors[i % colors.length]}`;
      document.body.appendChild(p);
      const ang = -Math.PI / 2 + (Math.random() - 0.5) * 2.4, sp = 90 + Math.random() * 160;
      const vx = Math.cos(ang) * sp, vy = Math.sin(ang) * sp;
      p.animate([
        { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${vx * .6}px, ${vy * .6 + 40}px) rotate(${180 + Math.random() * 360}deg)`, opacity: 1, offset: .5 },
        { transform: `translate(${vx}px, ${vy + 220}px) rotate(${360 + Math.random() * 360}deg)`, opacity: 0 }
      ], { duration: 800 + Math.random() * 400, easing: 'cubic-bezier(.2,.6,.4,1)', fill: 'forwards' }).onfinish = () => p.remove();
    }
  }
  document.addEventListener('click', (e) => {
    if (!e.isTrusted) return;
    const big = e.target.closest('.order__cta, .order__link, #modalOrder, .order__handle');
    const any = e.target.closest('button, .btn, a[href]');
    if (big) sawdust(e.clientX, e.clientY, 26);
    else if (any) sawdust(e.clientX, e.clientY, 14);
  });

  /* ---------- голос мастера ---------- */
  const voiceBtn = document.getElementById('voiceBtn'), voice = document.getElementById('voice');
  if (voiceBtn && voice) {
    voiceBtn.addEventListener('click', () => {
      if (voice.paused) { voice.play(); voiceBtn.classList.add('is-playing'); }
      else { voice.pause(); voice.currentTime = 0; voiceBtn.classList.remove('is-playing'); }
    });
    voice.addEventListener('ended', () => voiceBtn.classList.remove('is-playing'));
  }

  /* ---------- подсказки: вечером и после 50 секунд ---------- */
  const toast = document.getElementById('toast');
  let themeTouched = false;
  toggle.addEventListener('click', () => { themeTouched = true; });
  if (toast) {
    const txt = toast.querySelector('.hand'), yes = toast.querySelector('[data-yes]'), no = toast.querySelector('[data-no]');
    let shownCount = 0, visible = false;
    const hide = () => { visible = false; toast.classList.remove('is-on'); setTimeout(() => { toast.hidden = true; }, 400); };
    function show(text, yesLabel, onYes) {
      if (visible || themeTouched) return;
      shownCount += 1; visible = true;
      txt.textContent = text; yes.textContent = yesLabel;
      toast.hidden = false; requestAnimationFrame(() => toast.classList.add('is-on'));
      yes.onclick = () => { onYes(); hide(); };
      no.onclick = hide;
    }
    let asked = false; try { asked = sessionStorage.getItem('bw-asked') === '1'; } catch (e) { /* */ }
    const hr = new Date().getHours();
    loaderDone.then(() => {
      if (asked) return;
      try { sessionStorage.setItem('bw-asked', '1'); } catch (e) { /* */ }
      if ((hr >= 20 || hr < 6) && root.dataset.theme === 'day') {
        setTimeout(() => show('Уже вечер. Хочешь посмотреть, как сейчас лампа освещала бы твою комнату?', 'хочу', () => {
          applyTheme('night', true);
          document.querySelector('.hero__photo').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }), 2500);
      }
      setTimeout(() => show('Попробуй ночную и дневную тему: посмотри, как выглядят мои работы ночью и днём.', 'переключить', () => {
        applyTheme(root.dataset.theme === 'night' ? 'day' : 'night', true);
        document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
      }), 50000);
    });
  }

  /* ---------- образцы пород: тап на телефоне ---------- */
  const touchOnly = matchMedia('(hover: none)').matches;
  document.querySelectorAll('.sample').forEach((s) => {
    s.addEventListener('click', () => {
      if (!touchOnly) return;
      const card = s.closest('.mat');
      document.querySelectorAll('.mat.is-open').forEach((c) => { if (c !== card) c.classList.remove('is-open'); });
      card.classList.toggle('is-open');
    });
  });
  document.querySelectorAll('.mat__tex').forEach((t) => t.addEventListener('click', () => t.closest('.mat').classList.remove('is-open')));

  /* ---------- три вопроса вместо формы ---------- */
  const wiz = document.getElementById('wizard');
  if (wiz) {
    const Q = [
      { q: 'Что делаем?', key: 'what', opts: [['столик', 'журнальный столик'], ['тумбу', 'тумбу'], ['полку', 'полку'], ['лампу', 'лампу'], ['стойку', 'стойку для аппаратуры'], ['что-то своё', 'кое-что своё, опишу в сообщении']] },
      { q: 'Где будет стоять?', key: 'where', opts: [['в гостиной', 'в гостиной'], ['в спальне', 'в спальне'], ['в кабинете', 'в кабинете'], ['на даче', 'на даче'], ['в кафе или офисе', 'в кафе или офисе']] },
      { q: 'Когда нужно?', key: 'when', opts: [['не срочно', 'не срочно'], ['в течение месяца', 'в течение месяца'], ['к дате', 'к конкретной дате, напишу какой'], ['сначала посчитать', 'пока хочу только узнать цену и сроки']] }
    ];
    const qEl = document.getElementById('wizQ'), optsEl = document.getElementById('wizOpts'), stepEl = document.getElementById('wizStep');
    const doneEl = document.getElementById('wizDone'), textEl = document.getElementById('wizText'), sendEl = document.getElementById('wizSend'), trailEl = document.getElementById('wizTrail');
    let step = 0; const ans = {};
    function renderStep() {
      const s = Q[step];
      stepEl.textContent = `шаг ${step + 1} / 3`;
      qEl.textContent = s.q;
      optsEl.innerHTML = s.opts.map(([label, phrase], i) => `<button type="button" class="wizard__opt" data-i="${i}"><span class="mono">${String(i + 1).padStart(2, '0')}</span>${label}</button>`).join('');
      trailEl.textContent = Object.values(ans).map((a) => a.label).join(' · ');
      doneEl.hidden = true; qEl.hidden = false; optsEl.hidden = false;
    }
    function finish() {
      const text = `Здравствуйте! Хочу заказать ${ans.what.phrase}. Стоять будет ${ans.where.phrase}. По срокам: ${ans.when.phrase}.`;
      textEl.textContent = text;
      sendEl.href = TG + '?text=' + encodeURIComponent(text);
      stepEl.textContent = 'готово';
      qEl.hidden = true; optsEl.hidden = true; doneEl.hidden = false;
      trailEl.textContent = Object.values(ans).map((a) => a.label).join(' · ');
    }
    optsEl.addEventListener('click', (e) => {
      const b = e.target.closest('.wizard__opt'); if (!b) return;
      const s = Q[step], [label, phrase] = s.opts[+b.dataset.i];
      ans[s.key] = { label, phrase };
      wiz.classList.add('is-switching');
      setTimeout(() => { step += 1; if (step < Q.length) renderStep(); else finish(); wiz.classList.remove('is-switching'); }, 220);
    });
    document.getElementById('wizReset').addEventListener('click', () => { step = 0; for (const k in ans) delete ans[k]; renderStep(); });
    renderStep();
  }

  /* ---------- звук мастерской: настоящие записи, зацикленные ---------- */
  const soundBtn = document.getElementById('soundBtn');
  const ambient = (() => {
    const LEVELS = { day: { birds: 1, workshop: 0.35, crickets: 0 }, night: { birds: 0, workshop: 0.35, crickets: 1 } };
    const tracks = {};
    let on = false, mode = 'day', raf = 0;
    function track(name) {
      if (!tracks[name]) { const a = new Audio(`audio/${name}.mp3`); a.loop = true; a.preload = 'none'; a.volume = 0; tracks[name] = { a, target: 0 }; }
      return tracks[name];
    }
    function tick() {
      let busy = false;
      for (const k in tracks) {
        const t = tracks[k], d = t.target - t.a.volume;
        if (Math.abs(d) > 0.01) { t.a.volume = Math.max(0, Math.min(1, t.a.volume + d * 0.08)); busy = true; }
        else if (t.a.volume !== t.target) t.a.volume = t.target;
        if (t.target === 0 && t.a.volume === 0 && !t.a.paused) t.a.pause();
      }
      raf = busy ? requestAnimationFrame(tick) : 0;
    }
    function apply() {
      const lv = on ? LEVELS[mode] : { birds: 0, workshop: 0, crickets: 0 };
      for (const name of ['birds', 'workshop', 'crickets']) {
        const t = track(name); t.target = lv[name];
        if (t.target > 0 && t.a.paused) { t.a.play().catch(() => {}); }
      }
      if (!raf) raf = requestAnimationFrame(tick);
    }
    return {
      start: (theme) => { on = true; mode = theme; apply(); },
      stop: () => { on = false; apply(); },
      isOn: () => on,
      setMode: (t) => { mode = t; if (on) apply(); },
      state: () => (on ? 'running' : 'off'),
      level: () => Object.values(tracks).reduce((s, t) => s + (t.a.paused ? 0 : t.a.volume), 0),
      resume: () => { if (on) apply(); }
    };
  })();
  if (soundBtn) {
    const lbl = soundBtn.querySelector('.sound__lbl');
    function setSound(state) {
      soundBtn.setAttribute('aria-pressed', state ? 'true' : 'false');
      soundBtn.classList.toggle('is-on', state);
      lbl.textContent = state ? (root.dataset.theme === 'night' ? 'звук: ночь' : 'звук: день') : 'звук: выкл';
      if (state) ambient.start(root.dataset.theme); else ambient.stop();
      try { sessionStorage.setItem('bw-sound', state ? '1' : '0'); } catch (e) { /* */ }
    }
    soundBtn.addEventListener('click', () => setSound(!ambient.isOn()));
    window.bwAmbient = ambient;
    ['pointerdown', 'keydown', 'touchstart'].forEach((ev) => document.addEventListener(ev, () => ambient.resume(), { passive: true }));
    onTheme.push((t) => { if (ambient.isOn()) { ambient.setMode(t); lbl.textContent = t === 'night' ? 'звук: ночь' : 'звук: день'; } });
    document.addEventListener('visibilitychange', () => { if (document.hidden && ambient.isOn()) setSound(false); });
  }

  /* ---------- высота шапки для мобильного меню ---------- */
  function setHeaderH() { document.documentElement.style.setProperty('--header-h', document.querySelector('.header').offsetHeight + 'px'); }
  setHeaderH(); addEventListener('resize', setHeaderH); if (document.fonts) document.fonts.ready.then(setHeaderH); addEventListener('load', setHeaderH);

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
