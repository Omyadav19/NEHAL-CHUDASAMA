/**
 * JOURNEY PAGE — Light editorial theme, real photos
 */
import { renderFooter } from '../components/footer.js';
import { initScrollAnimations, killScrollTriggers } from '../animations.js';
import { updateActiveLink } from '../nav.js';

const REAL = {
  closeup: '/images/nehal-editorial-14.png',
  cropped: '/images/nehal-editorial-7.jpg',
  stage:   '/images/nehal-editorial-4.jpg',
};

export function renderJourney(container) {
  killScrollTriggers();
  document.title = 'Journey | Nehal Chudasama — Miss Diva Universe 2018';

  container.innerHTML = `

  <!-- JOURNEY HERO -->
  <section class="journey-hero" style="padding-top:var(--nav-height);" aria-label="Journey">
    <div class="container">
      <span class="eyebrow reveal" style="color:var(--clr-gold);">CAREER CHAPTERS</span>
      <span class="gold-line reveal"></span>
      <h1 class="display-1 reveal" style="color:var(--clr-dark);">THE<br>JOURNEY.</h1>
    </div>
  </section>

  <!-- CHAPTERS -->
  <div style="background:var(--clr-white);" aria-label="Career timeline">
    <div class="container">

      <!-- CHAPTER 01 -->
      <article class="chapter" aria-label="Miss Diva Universe 2018">
        <div class="chapter-text">
          <span class="chapter-num">CHAPTER 01</span>
          <span class="chapter-year">2018</span>
          <h2 class="chapter-title reveal">MISS DIVA<br>UNIVERSE</h2>
          <span class="chapter-subtitle">WINNER</span>
          <p class="body-text reveal" style="margin-bottom:1.5rem;">
            The Miss Diva Universe pageant — India's foremost beauty pageant and official
            send-off to Miss Universe — became Nehal's breakout moment.
          </p>
          <p class="body-text reveal" style="margin-bottom:1.5rem;">
            Competing against some of India's most accomplished young women, Nehal won
            the Miss Diva Universe 2018 title. Her confidence, poise, and fearless presence
            set her apart — not just as a beautiful face, but as a woman with
            depth, determination, and an exceptional story.
          </p>
          <p class="body-text reveal">
            The crown was more than an honour. It was an invitation to represent
            a billion people on the world's biggest stage.
          </p>
        </div>
        <div class="chapter-img reveal-right">
          <img
            src="${REAL.closeup}"
            alt="Nehal Chudasama — Miss Diva Universe 2018 (Photo: Wikimedia Commons, CC-BY-SA)"
            loading="lazy"
            style="object-position:center top;"
          />
        </div>
      </article>

      <!-- CHAPTER 02 -->
      <article class="chapter chapter--reverse" aria-label="Miss Universe 2018">
        <div class="chapter-text" style="order:1;">
          <span class="chapter-num">CHAPTER 02</span>
          <span class="chapter-year">2018</span>
          <h2 class="chapter-title reveal">MISS<br>UNIVERSE</h2>
          <span class="chapter-subtitle">REPRESENTED INDIA</span>
          <p class="body-text reveal" style="margin-bottom:1.5rem;">
            With the Miss Diva Universe crown came India's most prestigious international
            responsibility: representing the nation at the 2018 Miss Universe competition.
          </p>
          <p class="body-text reveal" style="margin-bottom:1.5rem;">
            Miss Universe is the world's most-watched pageant, broadcast to hundreds of
            millions across the globe. Nehal stood among representatives from nations
            worldwide — carrying India's spirit, culture, and pride with her.
          </p>
          <p class="body-text reveal">
            Her participation was a landmark achievement — the result of extraordinary
            personal commitment and the belief that hard work has no substitute.
          </p>
        </div>
        <div class="chapter-img reveal-left" style="order:0;">
          <img
            src="${REAL.stage}"
            alt="Nehal Chudasama — Miss Universe 2018, representing India (Photo: Wikimedia Commons, CC-BY-SA)"
            loading="lazy"
          />
        </div>
      </article>

      <!-- CHAPTER 03 -->
      <article class="chapter" aria-label="Entertainment career">
        <div class="chapter-text">
          <span class="chapter-num">CHAPTER 03</span>
          <span class="chapter-year">ONGOING</span>
          <h2 class="chapter-title reveal">ENTERTAINMENT</h2>
          <span class="chapter-subtitle">ACTOR · PERSONALITY</span>
          <p class="body-text reveal" style="margin-bottom:1.5rem;">
            Following her pageant journey, Nehal channelled her energy, presence,
            and performance skills into the entertainment industry — establishing
            herself as a personality who transcends any single category.
          </p>
          <p class="body-text reveal" style="margin-bottom:1.5rem;">
            With natural charisma, a commanding screen presence, and a work ethic
            that has defined every chapter of her life, Nehal continues to build
            her legacy in acting, modelling, and entertainment.
          </p>
          <p class="body-text reveal" style="color:var(--clr-gold);font-style:italic;">
            [ADD VERIFIED ENTERTAINMENT CREDITS — CONTACT FOR CURRENT REPRESENTATION DETAILS]
          </p>
        </div>
        <div class="chapter-img reveal-right">
          <img
            src="${REAL.cropped}"
            alt="Nehal Chudasama — entertainment and personality (Photo: Wikimedia Commons, CC-BY-SA)"
            loading="lazy"
            style="object-position:center top;"
          />
        </div>
      </article>

      <!-- CHAPTER 04 -->
      <article style="padding:var(--space-xl) 0;text-align:center;border-bottom:none;" aria-label="Future">
        <span class="section-num" style="display:block;text-align:center;margin-bottom:1rem;">CHAPTER 04</span>
        <h2 class="display-2 reveal" style="margin-bottom:1rem;">THE NEXT<br>CHAPTER.</h2>
        <span class="gold-line gold-line--center reveal"></span>
        <p class="editorial-body reveal" style="max-width:600px;margin-inline:auto;margin-bottom:2.5rem;">
          The story continues. New projects, new horizons, new milestones — still unfolding.
        </p>
        <p class="eyebrow reveal" style="color:rgba(17,17,17,0.25);">
          [ADD VERIFIED UPCOMING PROJECTS]
        </p>
        <div style="margin-top:3rem;" class="reveal">
          <a href="https://www.instagram.com/nehalchudasama9" target="_blank" rel="noopener noreferrer" class="btn btn--gold">
            FOLLOW ON INSTAGRAM <span class="btn-arrow">→</span>
          </a>
        </div>
      </article>

    </div>
  </div>



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
