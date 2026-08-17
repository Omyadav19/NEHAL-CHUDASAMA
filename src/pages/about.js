/**
 * ABOUT PAGE — Light editorial theme, real Nehal photos
 */
import { renderFooter } from '../components/footer.js';
import { initScrollAnimations, killScrollTriggers } from '../animations.js';
import { updateActiveLink } from '../nav.js';

const REAL = {
  closeup: '/images/nehal-editorial-3.jpg',
  cropped: '/images/nehal-editorial-9.jpg',
  stage:   '/images/nehal-editorial-6.jpg',
};

export function renderAbout(container) {
  killScrollTriggers();
  document.title = 'About Nehal Chudasama | Miss Diva Universe 2018 · Actor · Model';

  container.innerHTML = `

  <!-- ABOUT HERO -->
  <section class="about-hero" aria-label="About hero">
    <div class="about-hero-left">
      <img
        src="${REAL.closeup}"
        alt="Nehal Chudasama — Portrait closeup"
        fetchpriority="high"
        loading="eager"
      />
    </div>
    <div class="about-hero-right">
      <div class="hero-eyebrow" style="margin-bottom: 1.5rem;">
        <span class="eyebrow" style="color:var(--clr-gold);">THE WOMAN BEHIND THE SPOTLIGHT</span>
      </div>
      <h1 class="display-1" style="font-size: clamp(2.5rem, 5.5vw, 4.4rem); line-height: 0.95; color: var(--clr-dark); margin-bottom: 1.5rem;">
        <span class="hero-title"><span>MORE THAN</span></span>
        <span class="hero-title"><span style="color:rgba(17,17,17,0.35);">THE CROWN.</span></span>
      </h1>
      <p class="editorial-body" style="max-width: 550px; font-size: clamp(1rem, 1.4vw, 1.15rem); color: var(--clr-mid); line-height: 1.7; text-align: left; margin-bottom: 2rem;">
        Beyond the glamour of the stage lies a story of relentless dedication, discipline, and vision. Nehal Chudasama's path is defined not just by the titles she won, but by the barrier-breaking journey she continues to lead.
      </p>
      
      <!-- Highlights Grid (Content enhancement) -->
      <div style="display: flex; gap: 2.5rem; margin-top: 1.5rem; border-top: 1px solid var(--clr-ivory-2); padding-top: 1.5rem;">
        <div>
          <span class="eyebrow" style="font-size: 0.52rem; color: var(--clr-gold); display: block; margin-bottom: 0.25rem;">CROWNED</span>
          <span style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--clr-dark); font-weight: 300;">Miss Diva Universe 2018</span>
        </div>
        <div>
          <span class="eyebrow" style="font-size: 0.52rem; color: var(--clr-gold); display: block; margin-bottom: 0.25rem;">REPRESENTED</span>
          <span style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--clr-dark); font-weight: 300;">India at Miss Universe</span>
        </div>
      </div>
    </div>
  </section>

  <!-- FACTS BAR -->
  <section style="padding:var(--space-xl) 0;background:var(--clr-white);" aria-label="Key facts">
    <div class="container">
      <span class="eyebrow reveal" style="text-align:center;display:block;margin-bottom:0.75rem;">BY THE FACTS</span>
      <span class="gold-line gold-line--center reveal"></span>
      <div class="facts-grid">
        <div class="fact-item stagger">
          <span class="fact-label">HOMETOWN</span>
          <span class="fact-value">Mumbai, India</span>
        </div>
        <div class="fact-item stagger">
          <span class="fact-label">MAJOR TITLE</span>
          <span class="fact-value">Miss Diva Universe 2018</span>
        </div>
        <div class="fact-item stagger">
          <span class="fact-label">INTERNATIONAL</span>
          <span class="fact-value">Miss Universe 2018<br><small style="opacity:.5;font-size:.8em;letter-spacing:.05em;">Represented India</small></span>
        </div>
        <div class="fact-item stagger">
          <span class="fact-label">PROFESSION</span>
          <span class="fact-value">Actor · Model<br>Entertainment Personality</span>
        </div>
        <div class="fact-item stagger">
          <span class="fact-label">INSTAGRAM</span>
          <span class="fact-value">
            <a href="https://www.instagram.com/nehalchudasama9" target="_blank" rel="noopener noreferrer"
               style="color:var(--clr-gold);" aria-label="Nehal on Instagram">
              @nehalchudasama9
            </a>
          </span>
        </div>
        <div class="fact-item stagger">
          <span class="fact-label">PURSUITS</span>
          <span class="fact-value">Fitness · Athletics · Dance · Cooking</span>
        </div>
      </div>
    </div>
  </section>

  <!-- EDITORIAL SECTION 1 -->
  <section style="padding:var(--space-xl) 0;background:var(--clr-ivory);" aria-label="Nehal's story">
    <div class="container">
      <div class="about-editorial-inner">
        <div class="reveal-left">
          <div class="img-wrap" style="height:680px;">
            <img
              src="${REAL.stage}"
              alt="Nehal Chudasama — Miss Diva Universe 2018 stage (Photo: Wikimedia Commons, CC-BY-SA)"
              loading="lazy"
            />
          </div>
        </div>
        <div class="about-editorial-text">
          <span class="section-num reveal">01</span>
          <h2 class="display-3 reveal" style="margin-bottom:1.5rem;color:var(--clr-dark);">
            FROM MUMBAI<br>TO THE WORLD.
          </h2>
          <span class="gold-line reveal"></span>
          <p class="editorial-body reveal" style="margin-bottom:1.5rem;">
            Nehal Chudasama is a Mumbai-born talent who rose to national prominence
            when she won the Miss Diva Universe 2018 title — one of India's most
            prestigious pageants and the pathway to Miss Universe.
          </p>
          <p class="body-text reveal" style="margin-bottom:1.5rem;">
            With confidence, fearlessness, and an unwavering belief in hard work,
            Nehal went on to represent India at the 2018 Miss Universe competition —
            standing alongside representatives from nations worldwide and carrying
            her nation's pride on the world stage.
          </p>
          <p class="body-text reveal">
            Beyond the tiaras and the spotlights, Nehal is a woman driven by
            purpose — an athlete, a dancer, a fitness enthusiast, and a
            personality who continues to grow in the entertainment space.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- QUOTE (dark) -->
  <section class="about-quote" aria-label="Quote">
    <div class="container container--narrow">
      <span class="quote-mark reveal" aria-hidden="true">"</span>
      <blockquote class="quote-text reveal">
        There's no substitute to hardwork.
      </blockquote>
      <span class="gold-line gold-line--center reveal" style="margin-top:2.5rem;"></span>
      <p class="eyebrow reveal" style="margin-top:1.5rem;color:rgba(255,255,255,0.4);">— NEHAL CHUDASAMA</p>
    </div>
  </section>

  <!-- EDITORIAL SECTION 2 -->
  <section style="padding:var(--space-xl) 0;background:var(--clr-white);" aria-label="Values">
    <div class="container">
      <div class="about-editorial-inner">
        <div>
          <span class="section-num reveal">02</span>
          <h2 class="display-3 reveal" style="margin-bottom:1.5rem;color:var(--clr-dark);">
            FEARLESS.<br>DETERMINED.<br>AUTHENTIC.
          </h2>
          <span class="gold-line reveal"></span>
          <p class="editorial-body reveal" style="margin-bottom:1.5rem;">
            Confidence isn't given. It's built — through discipline, sacrifice,
            and the quiet hours before the stage lights come on.
          </p>
          <p class="body-text reveal" style="margin-bottom:1.5rem;">
            Nehal embodies qualities that define not just a pageant winner but a
            complete woman of substance: self-respect, determination, and the
            relentless pursuit of excellence in everything she does.
          </p>
          <p class="body-text reveal">
            She is fearless in the face of challenge, gracious under pressure,
            and deeply committed to inspiring others — particularly young women
            who dare to dream beyond expectation.
          </p>
        </div>
        <div class="reveal-right">
          <div class="img-wrap" style="height:600px;">
            <img
              src="${REAL.cropped}"
              alt="Nehal Chudasama — Miss Diva Universe 2018 (Photo: Wikimedia Commons, CC-BY-SA)"
              loading="lazy"
              style="object-position:center top;"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- INTERESTS -->
  <section style="padding:var(--space-xl) 0;background:var(--clr-ivory);" aria-label="Interests">
    <div class="container">
      <span class="eyebrow reveal" style="text-align:center;display:block;margin-bottom:1rem;">BEYOND THE CAMERA</span>
      <span class="gold-line gold-line--center reveal"></span>
      <div class="interests-grid">
        <div class="interest-item reveal">
          <div class="interest-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M20.5 11H19V8c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v3H9V8c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v3H3.5c-.83 0-1.5.67-1.5 1.5S2.67 14 3.5 14H5v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-3h6v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-3h1.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
            </svg>
          </div>
          <span class="interest-label">FITNESS</span>
          <p class="interest-desc">Rigorous discipline and physical training as an essential foundation.</p>
        </div>

        <div class="interest-item reveal">
          <div class="interest-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M15 1H9v2h6V1zm-3 5c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm1-6H9.5v-3.5H11V13h2v1z" />
            </svg>
          </div>
          <span class="interest-label">ATHLETICS</span>
          <p class="interest-desc">A lifelong competitive spirit driving power and mental focus.</p>
        </div>

        <div class="interest-item reveal">
          <div class="interest-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
          <span class="interest-label">DANCING</span>
          <p class="interest-desc">Artistic expression, rhythm, and motion reflecting grace and poise.</p>
        </div>

        <div class="interest-item reveal">
          <div class="interest-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm7-3c-1.78 0-3 1.2-3 3v8h1.5v-3H21v3h1.5v-8c0-1.8-1.22-3-3-3h-1.5z" />
            </svg>
          </div>
          <span class="interest-label">COOKING</span>
          <p class="interest-desc">Culinary creativity finding balance and mindfulness in the kitchen.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- LINK TO JOURNEY -->
  <section style="padding:var(--space-xl) 0;background:var(--clr-white);text-align:center;">
    <div class="container">
      <span class="eyebrow reveal">FOLLOW THE PATH</span>
      <span class="gold-line gold-line--center reveal"></span>
      <h2 class="display-3 reveal" style="margin-bottom:2rem;">EXPLORE THE<br>FULL JOURNEY</h2>
      <a href="/journey" data-link class="btn reveal">
        VIEW THE JOURNEY <span class="btn-arrow">→</span>
      </a>
    </div>
  </section>

  ${renderFooter()}
  `;

  updateActiveLink();
  waitForGSAP(() => {
    if (window.gsap) {
      window.gsap.fromTo('.hero-title span',
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.18, delay: 0.3, ease: 'power4.out' }
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
