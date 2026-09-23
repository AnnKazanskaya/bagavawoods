/* BAGAVAWOODS — theme toggle, works grid, modal */
(function () {
  'use strict';

  const TG = 'https://t.me/bagavawoodsmaster';

  /* ---------- products ---------- */
  const PRODUCTS = [
    {
      id: 'table',
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
        <span class="card__photo">${swapImg(p.day[0], p.night[0], p.alt, true, p.pos)}</span>
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
    stage.innerHTML = swapImg(p.day[i], p.night[i] || p.day[i], p.alt, false);
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

    thumbs.innerHTML = p.day.map((d, i) => `<button type="button" class="modal__thumb" aria-label="Фото ${i + 1}">${swapImg(d, p.night[i] || d, '', false)}</button>`).join('');
    thumbs.hidden = p.day.length < 2;
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
      const n = current.day.length;
      const active = [...thumbs.children].findIndex((t) => t.classList.contains('is-active'));
      renderStage(current, (active + (e.key === 'ArrowRight' ? 1 : n - 1)) % n);
    }
  });

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });
  document.querySelectorAll('.section__head, .about__grid, .works__grid, .steps, .materials__grid, .order__grid').forEach((el) => { el.classList.add('reveal'); io.observe(el); });
})();
