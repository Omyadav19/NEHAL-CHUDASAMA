/**
 * SHOWREEL PAGE — minimal cinematic video page
 *
 * CONFIG: Replace SHOWREEL_URL with a valid YouTube or Vimeo embed URL.
 * Set SHOWREEL_AVAILABLE = true when a real video is available.
 */

// ── OWNER-CONFIGURABLE ──────────────────────────────────────
const SHOWREEL_AVAILABLE = false; // Set to true when video is ready
const SHOWREEL_URL = ''; // e.g. 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1&rel=0'
// ────────────────────────────────────────────────────────────

import { renderFooter } from '../components/footer.js';
import { killScrollTriggers } from '../animations.js';
import { updateActiveLink } from '../nav.js';

export function renderShowreel(container) {
  killScrollTriggers();
  document.title = 'Showreel | Nehal Chudasama';

  container.innerHTML = `
  <div class="showreel-page">
    <div class="showreel-heading">
      <span class="eyebrow" style="display:block;margin-bottom:2rem;color:rgba(244,237,224,0.4);">FILM &amp; PERFORMANCE</span>
      <h1 class="display-1" style="text-align:center;color:var(--clr-ivory);margin-bottom:0.5rem;">THE SHOWREEL.</h1>
      <span class="gold-line gold-line--center" style="margin-top:1.5rem;"></span>
      <p style="font-family:var(--font-sans);font-size:0.65rem;letter-spacing:0.2em;color:rgba(244,237,224,0.35);text-align:center;margin-top:1.5rem;">
        WATCH NEHAL IN HER ELEMENT.
      </p>
    </div>

    <div class="showreel-player-wrap">
      <div class="showreel-player" role="${SHOWREEL_AVAILABLE ? 'application' : 'figure'}"
           aria-label="${SHOWREEL_AVAILABLE ? 'Nehal Chudasama showreel video' : 'Showreel coming soon'}">
        ${SHOWREEL_AVAILABLE && SHOWREEL_URL
          ? `<iframe
              src="${SHOWREEL_URL}"
              title="Nehal Chudasama — Showreel"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              style="position:absolute;inset:0;width:100%;height:100%;"
            ></iframe>`
          : `<div class="showreel-placeholder">
              <div class="showreel-play-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
              </div>
              <p class="eyebrow" style="margin-bottom:1rem;">SHOWREEL COMING SOON</p>
              <p class="body-text" style="max-width:400px;text-align:center;">
                The showreel is being prepared. Contact for screening requests or casting materials.
              </p>
            </div>`
        }
      </div>
    </div>

    <div style="text-align:center;padding-bottom:var(--space-xl);">
      <a href="/contact?type=casting" data-link class="btn btn--gold">
        REQUEST SCREENING <span class="btn-arrow">→</span>
      </a>
    </div>
  </div>

  ${renderFooter()}
  `;

  updateActiveLink();

  // Animate in
  waitForGSAP(() => {
    window.gsap.fromTo('.display-1', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
    window.gsap.fromTo('.showreel-player-wrap', { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.5 });
  });
}

function waitForGSAP(cb, attempt = 0) {
  if (window.gsap) { cb(); return; }
  if (attempt > 30) return;
  setTimeout(() => waitForGSAP(cb, attempt + 1), 100);
}

