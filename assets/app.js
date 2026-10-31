(() => {
  'use strict';

  const categories = {
    tv: 'TV & Audio',
    audio: 'TV & Audio',
    ac: 'AC',
    kulkas: 'Kulkas',
    refrigerator: 'Kulkas',
    'mesin-cuci': 'Mesin Cuci',
    laundry: 'Mesin Cuci',
    elektronik: 'Elektronik',
    promo: 'Promo Spesial',
    lainnya: 'Lainnya',
  };

  const grid = document.getElementById('flyerGrid');
  const cards = Array.from(grid.querySelectorAll('.flyer-card'));
  const filterContainer = document.getElementById('categoryFilters');
  const search = document.getElementById('searchInput');
  const total = document.getElementById('totalCount');
  const results = document.getElementById('resultCount');
  const noResults = document.getElementById('noResults');
  const reset = document.getElementById('resetFilters');
  const dialog = document.getElementById('viewer');
  const modalImage = document.getElementById('viewerImage');
  const modalTitle = document.getElementById('viewerTitle');
  const modalCount = document.getElementById('viewerCounter');
  const download = document.getElementById('downloadFlyer');
  const share = document.getElementById('shareFlyer');
  const prev = document.getElementById('prevFlyer');
  const next = document.getElementById('nextFlyer');
  const close = document.getElementById('closeViewer');
  let activeCategory = 'all';
  let currentIndex = 0;
  let visibleCards = cards;

  const labelFor = key => categories[key] || key.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const normalize = value => (value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('id').trim();

  cards.forEach(card => {
    const categoryLabel = card.querySelector('[data-category-label]');
    categoryLabel.textContent = labelFor(card.dataset.category);
  });

  const keys = [...new Set(cards.map(card => card.dataset.category))].sort((a, b) => labelFor(a).localeCompare(labelFor(b), 'id'));
  keys.forEach(key => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'chip';
    button.dataset.filter = key;
    button.textContent = labelFor(key);
    button.setAttribute('aria-pressed', 'false');
    filterContainer.append(button);
  });

  function applyFilters() {
    const query = normalize(search.value);
    visibleCards = cards.filter(card => {
      const categoryMatches = activeCategory === 'all' || card.dataset.category === activeCategory;
      const textMatches = !query || normalize(card.dataset.title + ' ' + labelFor(card.dataset.category)).includes(query);
      const show = categoryMatches && textMatches;
      card.hidden = !show;
      return show;
    });
    total.textContent = String(cards.length);
    results.textContent = cards.length ? `${visibleCards.length} dari ${cards.length} flyer ditampilkan` : 'Katalog belum berisi flyer';
    noResults.hidden = cards.length === 0 || visibleCards.length !== 0;
    filterContainer.querySelectorAll('[data-filter]').forEach(button => {
      const active = button.dataset.filter === activeCategory;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  filterContainer.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    activeCategory = button.dataset.filter;
    applyFilters();
  });

  search.addEventListener('input', applyFilters);
  reset.addEventListener('click', () => {
    activeCategory = 'all';
    search.value = '';
    applyFilters();
    search.focus();
  });

  function currentCard() { return visibleCards[currentIndex]; }

  function renderModal() {
    const card = currentCard();
    if (!card) return;
    const img = card.querySelector('img');
    const src = img.currentSrc || img.src;
    const name = card.dataset.title;
    modalTitle.textContent = name;
    modalImage.src = src;
    modalImage.alt = `Flyer ${name}`;
    download.href = src;
    download.setAttribute('download', src.split('/').pop().split('?')[0]);
    modalCount.textContent = `${currentIndex + 1} / ${visibleCards.length}`;
    prev.disabled = visibleCards.length <= 1;
    next.disabled = visibleCards.length <= 1;
  }

  function openModal(card) {
    currentIndex = Math.max(0, visibleCards.indexOf(card));
    renderModal();
    if (!dialog.open) dialog.showModal();
  }

  function move(step) {
    if (!visibleCards.length) return;
    currentIndex = (currentIndex + step + visibleCards.length) % visibleCards.length;
    renderModal();
  }

  grid.addEventListener('click', event => {
    const target = event.target.closest('[data-open]');
    if (!target) return;
    const card = target.closest('.flyer-card');
    if (card) openModal(card);
  });
  prev.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
  });
  share.addEventListener('click', async () => {
    const card = currentCard();
    if (!card) return;
    const url = card.querySelector('img').src;
    const shareData = { title: 'Flyer AIO Store: ' + card.dataset.title, url };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
        share.textContent = 'Link disalin ✓';
        window.setTimeout(() => { share.textContent = 'Bagikan ↗'; }, 1800);
        return;
      }
      window.prompt('Salin link flyer:', url);
    } catch (error) {
      if (error.name !== 'AbortError') window.prompt('Salin link flyer:', url);
    }
  });

  applyFilters();
})();
