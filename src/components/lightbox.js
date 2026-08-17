/**
 * GALLERY LIGHTBOX
 */
export function initLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;

  const imgEl = lightbox.querySelector('.lightbox-img-wrap img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  const catEl = lightbox.querySelector('.lightbox-caption-cat');

  let items = [];
  let current = 0;

  function open(idx) {
    current = idx;
    update();
    lightbox.classList.add('open');
    lightbox.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function update() {
    const item = items[current];
    if (!item) return;
    imgEl.src = item.src;
    imgEl.alt = item.alt || '';
    if (catEl) catEl.textContent = item.category || '';
  }

  function prev() { current = (current - 1 + items.length) % items.length; update(); }
  function next() { current = (current + 1) % items.length; update(); }

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  // Wire gallery items
  document.querySelectorAll('.gallery-item').forEach((item, idx) => {
    const img = item.querySelector('img');
    items.push({
      src: img?.src || '',
      alt: img?.alt || '',
      category: item.dataset.category || ''
    });
    item.addEventListener('click', () => open(idx));
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `View image ${idx + 1}`);
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(idx); } });
  });
}
