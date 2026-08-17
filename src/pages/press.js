/**
 * PRESS PAGE — Light editorial theme, real photos
 */
import { renderFooter } from '../components/footer.js';
import { initScrollAnimations, killScrollTriggers } from '../animations.js';
import { updateActiveLink } from '../nav.js';

const pressItems = [
  {
    publication: 'Femina',
    date: '2018',
    headline: 'Miss Diva Universe 2018: Nehal Chudasama Takes the Crown',
    summary: 'Mumbai\'s Nehal Chudasama was crowned Miss Diva Universe 2018, earning the right to represent India at Miss Universe 2018.',
    image: '/images/nehal-editorial-5.jpg',
    link: '#',
    linkText: 'Read on Femina'
  },
  {
    publication: 'Times of India',
    date: '2018',
    headline: 'Nehal Chudasama to Represent India at Miss Universe 2018',
    summary: 'After winning the Miss Diva Universe title, Nehal Chudasama set her sights on the world stage — representing India at the prestigious Miss Universe pageant.',
    image: '/images/nehal-editorial-4.jpg',
    link: '#',
    linkText: 'Read on Times of India'
  },
  {
    publication: 'Hindustan Times',
    date: '2018',
    headline: 'Nehal Chudasama Captivates on the Global Stage at Miss Universe 2018',
    summary: 'India\'s Miss Universe representative Nehal Chudasama made her mark at the international competition, drawing praise for her poise and presence.',
    image: '/images/nehal-editorial-8.jpg',
    link: '#',
    linkText: 'Read on Hindustan Times'
  },
  {
    publication: 'ETimes',
    date: '2018',
    headline: '"There\'s no substitute to hardwork" — Nehal Chudasama',
    summary: 'In an exclusive profile, Nehal shares the philosophy that drove her from Mumbai to the Miss Universe stage and beyond.',
    image: '/images/nehal-editorial-2.jpg',
    link: '#',
    linkText: 'Read on ETimes'
  },
];

export function renderPress(container) {
  killScrollTriggers();
  document.title = 'Press | Nehal Chudasama — Media Coverage';

  container.innerHTML = `

  <!-- PRESS HERO -->
  <section class="press-hero" style="padding-top:var(--nav-height);" aria-label="Press">
    <div class="container">
      <span class="eyebrow reveal" style="color:var(--clr-gold);">MEDIA &amp; PRESS</span>
      <span class="gold-line reveal"></span>
      <h1 class="display-1 reveal" style="color:var(--clr-dark);">IN THE<br>SPOTLIGHT.</h1>
    </div>
  </section>

  <!-- DISCLAIMER -->
  <div style="background:var(--clr-ivory);padding:1.5rem 0;border-bottom:1px solid var(--clr-ivory-3);">
    <div class="container">
      <p class="body-text" style="font-style:italic;">
        ⓘ Press items listed are based on publicly reported information about Nehal Chudasama's 2018 pageant journey.
        [ADD VERIFIED ARTICLE LINKS — CONTACT NEHAL'S TEAM FOR OFFICIAL MEDIA PACK]
      </p>
    </div>
  </div>

  <!-- PRESS GRID -->
  <section style="background:var(--clr-white);" aria-label="Press articles">
    <div class="container container--wide">
      <div class="press-grid">
        ${pressItems.map((item, i) => `
          <article class="press-item reveal" aria-label="${item.publication}: ${item.headline}">
            <div class="press-item-img">
              <img
                src="${item.image}"
                alt="${item.publication} — coverage of Nehal Chudasama (Photo: Wikimedia Commons, CC-BY-SA)"
                loading="lazy"
                style="object-position:center top;"
              />
            </div>
            <div class="press-item-content">
              <div>
                <p class="press-publication">${item.publication}</p>
                <p class="press-date">${item.date}</p>
                <h2 class="press-headline">${item.headline}</h2>
                <p class="press-summary">${item.summary}</p>
              </div>
              <a
                href="${item.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="press-link"
                aria-label="Read article on ${item.publication}"
              >
                READ ARTICLE <span class="press-link-arrow">→</span>
              </a>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- PRESS CONTACT -->
  <section style="padding:var(--space-xl) 0;background:var(--clr-dark);text-align:center;" aria-label="Press contact">
    <div class="container">
      <span class="eyebrow reveal" style="color:var(--clr-gold);">MEDIA ENQUIRIES</span>
      <span class="gold-line gold-line--center reveal"></span>
      <h2 class="display-3 reveal" style="color:var(--clr-white);margin-bottom:1.5rem;">WANT TO FEATURE<br>NEHAL?</h2>
      <p class="editorial-body reveal" style="margin-bottom:2.5rem;max-width:500px;margin-inline:auto;color:rgba(250,247,242,0.6);">
        For interviews, features, editorial shoots and media collaboration — reach out directly.
      </p>
      <a
        href="https://www.instagram.com/nehalchudasama9"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn--gold reveal"
      >
        CONNECT ON INSTAGRAM <span class="btn-arrow">→</span>
      </a>
    </div>
  </section>



  ${renderFooter()}
  `;

  updateActiveLink();
  waitForGSAP(() => {
    if (window.gsap) {
      window.gsap.fromTo('.display-1',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
      );
    }
    initScrollAnimations();
  });
}

function waitForGSAP(cb, attempt = 0) {
  if (window.gsap && window.ScrollTrigger) { cb(); return; }
  if (attempt > 40) return;
  setTimeout(() => waitForGSAP(cb, attempt + 1), 100);
}
