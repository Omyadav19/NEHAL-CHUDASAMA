/**
 * GALLERY PAGE — real photos, editorial masonry, filter, lightbox
 */
import { renderFooter } from '../components/footer.js';
import { initLightbox } from '../components/lightbox.js';
import { initScrollAnimations, killScrollTriggers } from '../animations.js';
import { updateActiveLink } from '../nav.js';

const galleryItems = [
  { src: '/images/nehal-editorial-7.jpg',  alt: 'Nehal Chudasama — Editorial portrait',            category: 'editorial',      title: 'Editorial Portrait' },
  { src: '/images/nehal-editorial-1.jpg',  alt: 'Nehal Chudasama — Miss Diva Universe 2018',      category: 'pageant',        title: 'Miss Diva 2018' },
  { src: '/images/nehal-editorial-9.jpg',  alt: 'Nehal Chudasama — Haute Couture look',           category: 'fashion',        title: 'Couture Fashion' },
  { src: '/images/nehal-editorial-2.jpg',  alt: 'Nehal Chudasama — Red Carpet glamour',          category: 'red-carpet',     title: 'Red Carpet Glamour' },
  { src: '/images/nehal-editorial-3.jpg',  alt: 'Nehal Chudasama — High Fashion photoshoot',      category: 'fashion',        title: 'Fashion Statement' },
  { src: '/images/nehal-editorial-4.jpg',  alt: 'Nehal Chudasama — Spotlight appearance',         category: 'pageant',        title: 'Spotlight' },
  { src: '/images/nehal-editorial-10.jpg', alt: 'Nehal Chudasama — Beauty portrait',              category: 'editorial',      title: 'Beauty Editorial' },
  { src: '/images/nehal-editorial-5.jpg',  alt: 'Nehal Chudasama — Behind the scenes moments',    category: 'behind-scenes',  title: 'Behind The Scenes' },
  { src: '/images/nehal-editorial-8.jpg',  alt: 'Nehal Chudasama — Reality & media event',        category: 'reality',        title: 'Media Appearance' },
  { src: '/images/nehal-editorial-6.jpg',  alt: 'Nehal Chudasama — Lifestyle editorial',          category: 'lifestyle',      title: 'Lifestyle Moments' },
  { src: '/images/nehal-editorial-11.png', alt: 'Nehal Chudasama — Miss Diva Red Carpet',         category: 'red-carpet',     title: 'Miss Diva Red Carpet' },
  { src: '/images/nehal-editorial-12.jpg', alt: 'Nehal Chudasama — Coronation Ceremony',           category: 'pageant',        title: 'Coronation Ceremony' },
  { src: '/images/nehal-editorial-13.png', alt: 'Nehal Chudasama — Miss Universe Portrait',       category: 'pageant',        title: 'Miss Universe Portrait' },
  { src: '/images/nehal-editorial-14.png', alt: 'Nehal Chudasama — Portrait closeup with crown',  category: 'editorial',      title: 'Crown Editorial Portrait' },
];

const categories = [
  { key: 'all',          label: 'ALL' },
  { key: 'editorial',    label: 'EDITORIAL' },
  { key: 'fashion',      label: 'FASHION' },
  { key: 'pageant',      label: 'PAGEANT' },
  { key: 'red-carpet',   label: 'RED CARPET' },
  { key: 'reality',      label: 'REALITY' },
  { key: 'behind-scenes',label: 'BEHIND THE SCENES' },
  { key: 'lifestyle',    label: 'LIFESTYLE' },
];

export function renderGallery(container) {
  killScrollTriggers();
  document.title = 'Gallery | Nehal Chudasama — Photography';

  container.innerHTML = `

  <!-- GALLERY HERO -->
  <section class="gallery-hero" style="padding-top:var(--nav-height);" aria-label="Gallery">
    <div class="container">
      <span class="eyebrow reveal" style="color:var(--clr-gold);">PHOTOGRAPHY</span>
      <span class="gold-line reveal"></span>
      <h1 class="display-1 reveal" style="color:var(--clr-dark);">IN FRONT OF<br>THE CAMERA.</h1>
    </div>
  </section>

  <!-- FILTER -->
  <div style="background:var(--clr-ivory);padding:0 0 0;" role="navigation" aria-label="Gallery filter">
    <div class="container">
      <div class="gallery-filter">
        ${categories.map(cat => `
          <button
            class="filter-btn ${cat.key === 'all' ? 'active' : ''}"
            data-filter="${cat.key}"
            aria-pressed="${cat.key === 'all' ? 'true' : 'false'}"
          >${cat.label}</button>
        `).join('')}
      </div>
    </div>
  </div>

  <!-- MASONRY -->
  <div style="background:var(--clr-ivory);">
    <div class="container container--wide">
      <div class="gallery-masonry" id="gallery-masonry" role="list" aria-label="Image gallery">
        ${galleryItems.map((item, i) => `
          <div
            class="gallery-item"
            data-category="${item.category}"
            data-index="${i}"
            role="listitem"
          >
            <img
              src="${item.src}"
              alt="${item.alt}"
              loading="lazy"
              style="object-position:center top;"
            />
            <div class="gallery-item-overlay">
              <div class="gallery-item-caption">
                <p class="gallery-item-category">${categories.find(c => c.key === item.category)?.label || item.category}</p>
                <p class="gallery-item-title">${item.title}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <p style="font-size:0.5rem;color:var(--clr-light-mid);padding-bottom:var(--space-lg);text-align:center;letter-spacing:0.1em;">
        Photos: Wikimedia Commons (CC-BY-SA) — Nehal Chudasama Miss Diva Universe 2018
      </p>
    </div>
  </div>

  <!-- LIGHTBOX -->
  <div class="lightbox" id="gallery-lightbox" aria-modal="true" aria-label="Image lightbox" aria-hidden="true" role="dialog">
    <button class="lightbox-close" aria-label="Close lightbox">✕</button>
    <button class="lightbox-nav lightbox-prev" aria-label="Previous image">‹</button>
    <button class="lightbox-nav lightbox-next" aria-label="Next image">›</button>
    <div class="lightbox-img-wrap">
      <img src="" alt="" />
    </div>
    <div class="lightbox-caption">
      <p class="lightbox-caption-cat"></p>
    </div>
  </div>

  ${renderFooter()}
  `;

  updateActiveLink();
  initGalleryFilter();
  initLightbox();
  initScrollAnimations();
}

function initGalleryFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const filter = btn.dataset.filter;
      items.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        if (match) {
          item.style.display = '';
          requestAnimationFrame(() => {
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          });
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => { item.style.display = 'none'; }, 400);
        }
      });
    });
  });
}
