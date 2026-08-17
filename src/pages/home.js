/**
 * HOME PAGE — White editorial theme, real Nehal photos, spectacular animations
 */
import { renderFooter } from '../components/footer.js';
import { initScrollAnimations, animateHero, killScrollTriggers } from '../animations.js';
import { updateActiveLink } from '../nav.js';

const REAL_PHOTOS = {
  hero:     '/images/nehal-editorial-7.jpg',
  portrait: '/images/nehal-editorial-9.jpg',
  stage:    '/images/nehal-editorial-4.jpg',
  cropped:  '/images/nehal-editorial-10.jpg',
};

export function renderHome(container) {
  killScrollTriggers();
  document.title = 'Nehal Chudasama | Actor · Model · Entertainment Personality';

  container.innerHTML = `

  <!-- HERO SPLIT (Image Removed) -->
  <section class="hero" aria-label="Hero">
    <div class="hero-left" style="margin-inline: auto; text-align: center; display: flex; flex-direction: column; align-items: center;">
      <div class="hero-eyebrow">
        <span class="eyebrow" style="color:var(--clr-gold); font-size: 0.65rem;">MUMBAI &nbsp;·&nbsp; INDIA</span>
      </div>
      <h1 class="display-1" style="font-size: clamp(3rem, 7vw, 6.5rem); line-height: 0.95; margin-bottom: 2rem; text-align: center; color: var(--clr-dark);">
        <span class="hero-title"><span>NEHAL</span></span>
        <span class="hero-title"><span>CHUDASAMA</span></span>
      </h1>
      
      <div class="hero-subtitle" style="display: block; margin-top: 0; margin-bottom: 2.5rem; width: 100%;">
        <!-- Editorial Biography (More detail) -->
        <p class="editorial-body" style="font-size: clamp(1.1rem, 1.6vw, 1.3rem); color: var(--clr-mid); margin-bottom: 2.5rem; max-width: 650px; text-align: center; margin-inline: auto; line-height: 1.7;">
          A trailblazer of elegance and determination. Representing India on the global Miss Universe stage, Nehal Chudasama is a model, actor, fitness advocate, and creative artist defining a new standard of cinematic and pageant excellence.
        </p>

        <!-- Profile Quick Facts Grid (More detail) -->
        <div class="hero-details-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem 3rem; max-width: 600px; border-top: 1px solid var(--clr-ivory-2); padding-top: 2rem; margin-inline: auto; text-align: center;">
          <div class="hero-detail-item">
            <span class="eyebrow" style="font-size: 0.52rem; color: var(--clr-gold); display: block; margin-bottom: 0.25rem;">TITLE</span>
            <span style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--clr-dark); font-weight: 300; display: block; line-height: 1.2;">Miss Diva Universe '18</span>
          </div>
          <div class="hero-detail-item">
            <span class="eyebrow" style="font-size: 0.52rem; color: var(--clr-gold); display: block; margin-bottom: 0.25rem;">REPRESENTED</span>
            <span style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--clr-dark); font-weight: 300; display: block; line-height: 1.2;">Miss Universe 2018</span>
          </div>
          <div class="hero-detail-item">
            <span class="eyebrow" style="font-size: 0.52rem; color: var(--clr-gold); display: block; margin-bottom: 0.25rem;">DISCIPLINES</span>
            <span style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--clr-dark); font-weight: 300; display: block; line-height: 1.2;">Acting · Couture Model</span>
          </div>
          <div class="hero-detail-item">
            <span class="eyebrow" style="font-size: 0.52rem; color: var(--clr-gold); display: block; margin-bottom: 0.25rem;">ADVOCACY</span>
            <span style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--clr-dark); font-weight: 300; display: block; line-height: 1.2;">Athletics & Fitness</span>
          </div>
        </div>
      </div>

      <div class="hero-ctas" style="justify-content: center; gap: 1.5rem;">
        <a href="/journey" data-link class="btn btn--dark">
          ENTER THE JOURNEY <span class="btn-arrow">→</span>
        </a>
        <a href="/gallery" data-link class="btn btn--gold">
          VIEW GALLERY <span class="btn-arrow">→</span>
        </a>
      </div>
    </div>

    <div class="scroll-indicator" aria-hidden="true" style="right: auto; left: 50%; transform: translateX(-50%);">
      <div class="scroll-indicator-line"></div>
      <span>SCROLL</span>
    </div>
  </section>

  <!-- MARQUEE -->
  <div class="marquee-wrap" aria-hidden="true">
    <div class="marquee-track">
      <span class="marquee-item">Miss Diva Universe 2018 <span class="marquee-dot">◆</span></span>
      <span class="marquee-item">Miss Universe 2018 <span class="marquee-dot">◆</span></span>
      <span class="marquee-item">Actor <span class="marquee-dot">◆</span></span>
      <span class="marquee-item">Model <span class="marquee-dot">◆</span></span>
      <span class="marquee-item">Mumbai <span class="marquee-dot">◆</span></span>
      <span class="marquee-item">Entertainment Personality <span class="marquee-dot">◆</span></span>
      <span class="marquee-item">Miss Diva Universe 2018 <span class="marquee-dot">◆</span></span>
      <span class="marquee-item">Miss Universe 2018 <span class="marquee-dot">◆</span></span>
      <span class="marquee-item">Actor <span class="marquee-dot">◆</span></span>
      <span class="marquee-item">Model <span class="marquee-dot">◆</span></span>
      <span class="marquee-item">Mumbai <span class="marquee-dot">◆</span></span>
      <span class="marquee-item">Entertainment Personality <span class="marquee-dot">◆</span></span>
    </div>
  </div>

  <!-- INTRO -->
  <section class="home-intro" aria-label="Introduction" style="padding-top:var(--space-2xl);">
    <div class="container">
      <div class="home-intro-inner">
        <div class="home-intro-text">
          <span class="eyebrow reveal">THE WOMAN BEHIND THE SPOTLIGHT</span>
          <span class="gold-line reveal"></span>
          <h2 class="display-2 reveal" style="margin-bottom:1.5rem;">
            MORE THAN<br>THE CROWN.
          </h2>
          <p class="editorial-body reveal" style="margin-bottom:1.5rem;">
            From the streets of Mumbai to the world stage — Nehal Chudasama is a force 
            that transcends titles. A winner. A trailblazer. An artist still writing her story.
          </p>
          <p class="body-text reveal" style="margin-bottom:2.5rem;">
            In 2018, she claimed the Miss Diva Universe crown and carried India's pride 
            to Miss Universe — one of the most celebrated pageants on earth. But the crown 
            was never the destination. It was the beginning.
          </p>
          <a href="/about" data-link class="btn reveal">
            DISCOVER HER STORY <span class="btn-arrow">→</span>
          </a>
        </div>
        <div class="reveal-right">
          <div class="img-wrap" style="height:620px;">
            <img
              src="${REAL_PHOTOS.cropped}"
              alt="Nehal Chudasama — Portrait"
              loading="lazy"
              style="object-position:center center;"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CREATIVE PILLARS (ADDITIONAL DETAIL) -->
  <section style="padding:var(--space-xl) 0;background:var(--clr-ivory);border-top:1px solid var(--clr-ivory-3);" aria-label="Creative Dimensions">
    <div class="container">
      <span class="eyebrow reveal" style="text-align:center;display:block;margin-bottom:1rem;">CREATIVE DIMENSIONS</span>
      <span class="gold-line gold-line--center reveal"></span>
      <h2 class="display-3 reveal" style="text-align:center;color:var(--clr-dark);margin-bottom:4rem;">ARTISTIC FOCUS &amp; INFLUENCE</h2>
      
      <div class="interests-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; background: transparent;">
        <div class="interest-item reveal" style="text-align:left; padding: 2.5rem 2rem;">
          <span class="eyebrow" style="font-size: 0.55rem; color: var(--clr-gold); display: block; margin-bottom: 1rem;">01 / PERFORMANCE</span>
          <h3 class="display-3" style="font-size: 1.6rem; color: var(--clr-dark); margin-bottom: 1rem;">Cinematic Acting</h3>
          <p class="body-text" style="color: var(--clr-mid); font-size: 0.85rem; line-height: 1.7;">
            Bringing depth, emotional range, and natural stage presence to Indian cinema and digital media platforms.
          </p>
        </div>

        <div class="interest-item reveal" style="text-align:left; padding: 2.5rem 2rem;">
          <span class="eyebrow" style="font-size: 0.55rem; color: var(--clr-gold); display: block; margin-bottom: 1rem;">02 / COUTURE</span>
          <h3 class="display-3" style="font-size: 1.6rem; color: var(--clr-dark); margin-bottom: 1rem;">High Fashion</h3>
          <p class="body-text" style="color: var(--clr-mid); font-size: 0.85rem; line-height: 1.7;">
            Collaborating with leading Indian designers, brands, and editorial photographers for striking visual concepts.
          </p>
        </div>

        <div class="interest-item reveal" style="text-align:left; padding: 2.5rem 2rem;">
          <span class="eyebrow" style="font-size: 0.55rem; color: var(--clr-gold); display: block; margin-bottom: 1rem;">03 / WELLNESS</span>
          <h3 class="display-3" style="font-size: 1.6rem; color: var(--clr-dark); margin-bottom: 1rem;">Fitness &amp; Athletics</h3>
          <p class="body-text" style="color: var(--clr-mid); font-size: 0.85rem; line-height: 1.7;">
            Inspiring strength and resilience as a dedicated athlete, promoting a holistic wellness and active lifestyle.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- MILESTONES (dark strip) -->
  <section class="home-milestones" aria-label="Career milestones">
    <div class="container">
      <span class="eyebrow" style="color:rgba(184,150,90,0.7);text-align:center;display:block;margin-bottom:0.5rem;">DEFINING MOMENTS</span>
      <span class="gold-line gold-line--center" style="margin-top:0.5rem;"></span>
    </div>
    <div class="milestones-grid">
      <article class="milestone-item">
        <span class="milestone-year">2018</span>
        <h3 class="milestone-title">MISS DIVA<br>UNIVERSE</h3>
        <span class="milestone-sub">WINNER</span>
      </article>
      <article class="milestone-item">
        <span class="milestone-year">2018</span>
        <h3 class="milestone-title">MISS<br>UNIVERSE</h3>
        <span class="milestone-sub">REPRESENTED INDIA</span>
      </article>
      <article class="milestone-item">
        <span class="milestone-year">ONGOING</span>
        <h3 class="milestone-title">ENTERTAINMENT</h3>
        <span class="milestone-sub">ACTOR · PERSONALITY</span>
      </article>
    </div>
    <div class="container" style="text-align:center;padding-top:3rem;">
      <a href="/journey" data-link class="btn btn--gold reveal">
        VIEW FULL JOURNEY <span class="btn-arrow">→</span>
      </a>
    </div>
  </section>

  <!-- REALITY PREVIEW -->
  <section class="home-reality" aria-label="Reality preview">
    <div class="home-reality-bg">
      <img
        src="${REAL_PHOTOS.stage}"
        alt="Nehal Chudasama — Editorial"
        loading="lazy"
      />
    </div>
    <div class="home-reality-content container">
      <span class="eyebrow reveal" style="color:var(--clr-gold);margin-bottom:2rem;display:block;">BEYOND THE CROWN</span>
      <h2 class="display-2 reveal" style="text-align:center;max-width:700px;margin-inline:auto;">
        THE REALITY<br>BEHIND THE GLAMOUR.
      </h2>
      <div style="text-align:center;margin-top:2.5rem;" class="reveal">
        <a href="/reality" data-link class="btn" style="border-color:rgba(255,255,255,0.5);color:var(--clr-white);">
          ENTER THE REALITY <span class="btn-arrow">→</span>
        </a>
      </div>
    </div>
  </section>

  <!-- GALLERY PREVIEW -->
  <section class="home-gallery" aria-label="Gallery preview">
    <div class="container">
      <span class="section-num reveal">03</span>
      <h2 class="display-3 reveal" style="color:var(--clr-dark);margin-bottom:0.5rem;">IN FRONT OF<br>THE CAMERA.</h2>
      <span class="gold-line reveal"></span>
    </div>
    <div class="container container--wide">
      <div class="gallery-preview-grid">
        ${[
          '/images/nehal-editorial-3.jpg',
          '/images/nehal-editorial-1.jpg',
          '/images/nehal-editorial-9.jpg',
          '/images/nehal-editorial-10.jpg',
          '/images/nehal-editorial-6.jpg'
        ].map((src, i) => `<div class="gallery-preview-item reveal-scale">
            <img src="${src}" alt="Nehal Chudasama — photo ${i+1}" loading="lazy" style="object-position:center center;" />
          </div>`).join('')}
      </div>
    </div>
    <div class="container" style="text-align:center;padding-top:3rem;">
      <a href="/gallery" data-link class="btn reveal">
        EXPLORE THE FULL GALLERY <span class="btn-arrow">→</span>
      </a>
    </div>
  </section>

  <!-- QUOTE BREAK -->
  <section style="padding:var(--space-xl) 0;background:var(--clr-dark);text-align:center;" aria-label="Quote">
    <div class="container container--narrow">
      <span class="quote-mark reveal" aria-hidden="true" style="color:var(--clr-gold);">"</span>
      <blockquote class="quote-text reveal">
        There's no substitute to hardwork.
      </blockquote>
      <span class="gold-line gold-line--center reveal" style="margin-top:2.5rem;"></span>
      <p class="eyebrow reveal" style="margin-top:1.5rem;color:rgba(255,255,255,0.4);">— NEHAL CHUDASAMA</p>
    </div>
  </section>

  ${renderFooter()}
  `;

  updateActiveLink();
  waitForGSAP(() => {
    animateHero();
    initScrollAnimations();
  });
}

function waitForGSAP(cb, attempt = 0) {
  if (window.gsap && window.ScrollTrigger) { cb(); return; }
  if (attempt > 40) return;
  setTimeout(() => waitForGSAP(cb, attempt + 1), 100);
}
