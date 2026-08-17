/**
 * REALITY PAGE — Light theme with dark accent sections, real photos
 */
import { renderFooter } from '../components/footer.js';
import { initScrollAnimations, killScrollTriggers } from '../animations.js';
import { updateActiveLink } from '../nav.js';

const traitImages = [
  '/images/nehal-editorial-3.jpg',
  '/images/nehal-editorial-9.jpg',
  '/images/nehal-editorial-10.jpg',
  '/images/nehal-editorial-7.jpg',
  '/images/nehal-editorial-2.jpg',
  '/images/nehal-editorial-6.jpg'
];

const traits = [
  {
    word: 'CONFIDENCE',
    description: 'She walks into every room with the quiet certainty of someone who has already done the work. Confidence isn\'t performed — it radiates.',
    detail: 'Built through years of discipline, competition, and the relentless pursuit of personal excellence.',
  },
  {
    word: 'FEARLESS',
    description: 'Standing on the Miss Universe stage in front of a global audience demands more than beauty — it demands courage of the highest order.',
    detail: 'Fearlessness is the willingness to be seen, to compete, and to show up fully — no matter the stakes.',
  },
  {
    word: 'FITNESS',
    description: 'An athlete at heart, Nehal brings the same rigour to physical training that she brings to every other pursuit. The body is her instrument.',
    detail: 'Fitness is not aesthetic — it is discipline made visible. Every effort is intentional.',
  },
  {
    word: 'CHARISMA',
    description: 'Some qualities can\'t be manufactured. Nehal\'s charisma is genuine — the magnetic pull of someone fully present and deeply alive.',
    detail: 'In every frame, every room, every moment — she commands attention without demanding it.',
  },
  {
    word: 'PRESENCE',
    description: 'A camera doesn\'t lie. Nehal\'s screen and stage presence is unmistakable — the result of inner work reflected outward.',
    detail: 'Presence is what remains when the performance ends. Hers is unforgettable.',
  },
  {
    word: 'ENTERTAINMENT',
    description: 'From pageant stages to entertainment platforms, Nehal\'s world continues to expand — powered by talent, authenticity and an unstoppable drive.',
    detail: 'She entertains not by playing a character, but by revealing one.',
  }
];

export function renderReality(container) {
  killScrollTriggers();
  document.title = 'Reality | Nehal Chudasama — Beyond the Crown';

  container.innerHTML = `

  <!-- HERO (dark) -->
  <section class="reality-hero" aria-label="Reality hero">
    <div class="hero-bg parallax-wrap">
      <img
        src="/images/nehal-editorial-7.jpg"
        alt="Nehal Chudasama — Miss Diva Universe 2018 stage appearance"
        fetchpriority="high"
        loading="eager"
        class="parallax-img"
        style="filter:brightness(0.4) saturate(0.7);"
      />
    </div>
    <div class="hero-content" style="text-align:center;padding-bottom:6rem;">
      <span class="eyebrow reveal" style="color:var(--clr-gold);margin-bottom:2rem;display:block;">BEYOND THE PAGEANT</span>
      <h1 class="display-1 reveal" style="text-align:center;color:var(--clr-white);">
        THE REALITY<br>BEHIND THE<br>GLAMOUR.
      </h1>
    </div>
  </section>

  <!-- INTRO (light) -->
  <section style="padding:var(--space-xl) 0;background:var(--clr-white);" aria-label="Reality intro">
    <div class="container container--narrow" style="text-align:center;">
      <span class="eyebrow reveal">SIX WORDS. ONE WOMAN.</span>
      <span class="gold-line gold-line--center reveal"></span>
      <p class="editorial-body reveal" style="margin-top:2rem;">
        Behind every crown is a woman who earned it — through sacrifice,
        sweat, and the silent hours when no one is watching. This is her reality.
      </p>
    </div>
  </section>

  <!-- TRAITS (alternating light/dark) -->
  <section style="background:var(--clr-white);" aria-label="Defining traits">
    <div class="container">
      ${traits.map((trait, i) => `
        <article class="trait-item ${i % 2 === 1 ? 'trait-item--reverse' : ''}" aria-label="${trait.word}">
          <div class="trait-visual ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}">
            <img src="${traitImages[i]}"
                 alt="Nehal Chudasama — ${trait.word.toLowerCase()}"
                 loading="lazy"
                 style="object-position:center top;" />
            <div class="trait-label-large">${trait.word}</div>
          </div>
          <div class="trait-content" style="position:relative;">
            <div class="trait-word-bg" aria-hidden="true">${trait.word.substring(0,4)}</div>
            <span class="section-num reveal">${String(i + 1).padStart(2, '0')}</span>
            <h2 class="display-3 reveal" style="margin-bottom:1.5rem;color:var(--clr-dark);">${trait.word}</h2>
            <span class="gold-line reveal"></span>
            <p class="editorial-body reveal" style="margin-bottom:1.5rem;">${trait.description}</p>
            <p class="body-text reveal">${trait.detail}</p>
          </div>
        </article>
      `).join('')}
    </div>
  </section>

  <!-- MANIFESTO (dark) -->
  <section class="reality-manifesto" aria-label="Philosophy">
    <div class="container container--narrow">
      <span class="eyebrow reveal" style="color:var(--clr-gold);display:block;margin-bottom:2rem;">THE PHILOSOPHY</span>
      <blockquote class="display-2 reveal" style="font-style:italic;font-family:var(--font-serif);font-weight:300;color:var(--clr-white);margin-bottom:1rem;">
        "There's no substitute<br>to hardwork."
      </blockquote>
      <span class="gold-line gold-line--center reveal"></span>
      <p class="eyebrow reveal" style="margin-top:1.5rem;color:rgba(255,255,255,0.4);">— NEHAL CHUDASAMA</p>
      <div style="margin-top:3rem;" class="reveal">
        <a href="/gallery" data-link class="btn" style="border-color:rgba(255,255,255,0.4);color:var(--clr-white);">
          EXPLORE THE GALLERY <span class="btn-arrow">→</span>
        </a>
      </div>
    </div>
  </section>

  ${renderFooter()}
  `;

  updateActiveLink();
  waitForGSAP(() => {
    if (window.gsap) {
      window.gsap.fromTo('.display-1',
        { opacity: 0, y: 70, skewY: 1 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.3, ease: 'power4.out', delay: 0.3 }
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
