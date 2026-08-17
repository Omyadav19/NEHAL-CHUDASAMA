/**
 * CONTACT PAGE — cinematic final scene
 *
 * OWNER CONFIG: Update CONTACT_CONFIG with real contact information.
 */

// ── OWNER-CONFIGURABLE ──────────────────────────────────────
const CONTACT_CONFIG = {
  instagram: 'https://www.instagram.com/nehalchudasama9',
  // Add real contact details below when available:
  // email: 'contact@nehalchudasama.com',
  // phone: '[ADD VERIFIED PHONE]',
  // manager: '[ADD MANAGER/AGENCY CONTACT]',
};
// ────────────────────────────────────────────────────────────

import { renderFooter } from '../components/footer.js';
import { initContactForm } from '../components/form.js';
import { killScrollTriggers } from '../animations.js';
import { updateActiveLink } from '../nav.js';

export function renderContact(container) {
  killScrollTriggers();
  document.title = 'Contact Nehal Chudasama | Casting · Collaboration · Media';

  container.innerHTML = `
  <div class="contact-page">
    <div class="contact-bg" aria-hidden="true">
      <img src="/images/nehal-editorial-9.jpg" alt="" role="presentation" loading="lazy" style="object-position: center center;" />
    </div>

    <div class="contact-content">
      <div class="container">

        <!-- HEADER -->
        <header class="contact-header">
          <span class="eyebrow reveal" style="margin-bottom:1.5rem;display:block;">GET IN TOUCH</span>
          <h1 class="display-1 reveal" style="margin-bottom:0.05em;">LET'S CREATE</h1>
          <h1 class="display-1 reveal" style="color:rgba(244,237,224,0.2);margin-bottom:0.05em;">SOMETHING</h1>
          <h1 class="display-1 reveal" style="margin-bottom:1.5rem;">UNFORGETTABLE.</h1>
          <span class="gold-line reveal"></span>
          <p class="editorial-body reveal" style="margin-top:1.5rem;max-width:600px;">
            For casting, collaborations, appearances, media and professional enquiries.
          </p>
        </header>

        <!-- FORM + INFO GRID -->
        <div class="contact-form-section">

          <!-- INFO SIDE -->
          <div class="contact-info">
            <h2 class="display-3 reveal" style="margin-bottom:2rem;">REACH OUT.</h2>
            <p class="body-text reveal" style="margin-bottom:2.5rem;">
              Whether you're looking for a compelling lead for your next project,
              a powerful face for your campaign, or a personality to elevate your brand —
              Nehal's team would love to hear from you.
            </p>

            <div class="reveal" style="margin-bottom:2rem;">
              <span class="eyebrow" style="display:block;margin-bottom:0.75rem;">REPRESENTATION</span>
              <p class="body-text">[ADD VERIFIED AGENCY / MANAGEMENT DETAILS]</p>
            </div>

            <div class="reveal" style="margin-bottom:2rem;">
              <span class="eyebrow" style="display:block;margin-bottom:0.75rem;">SOCIAL</span>
              <a
                href="${CONTACT_CONFIG.instagram}"
                target="_blank"
                rel="noopener noreferrer"
                class="body-text"
                style="color:var(--clr-gold);display:inline-flex;align-items:center;gap:0.5rem;transition:opacity .3s;"
                aria-label="Follow Nehal on Instagram"
              >
                Instagram — @nehalchudasama9
              </a>
            </div>

            <div class="contact-cta-buttons reveal">
              <a
                href="${CONTACT_CONFIG.instagram}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--gold"
                aria-label="Visit Nehal's Instagram"
              >
                INSTAGRAM <span class="btn-arrow">→</span>
              </a>
            </div>
          </div>

          <!-- FORM SIDE -->
          <div>
            <!-- Success State -->
            <div class="form-success" id="form-success" aria-live="polite">
              <span class="eyebrow" style="display:block;margin-bottom:1.5rem;color:var(--clr-gold);">MESSAGE SENT</span>
              <h3 class="display-3" style="margin-bottom:1rem;">Thank you.</h3>
              <p class="editorial-body">We'll be in touch very soon.</p>
              <span class="gold-line gold-line--center" style="margin-top:2rem;"></span>
            </div>

            <!-- Contact Form -->
            <form
              id="contact-form"
              class="contact-form"
              novalidate
              aria-label="Contact form"
            >
              <div class="form-grid-2">
                <div class="form-group">
                  <label for="contact-name">NAME <span aria-hidden="true" style="color:var(--clr-gold)">*</span></label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    autocomplete="name"
                    placeholder="Your full name"
                    aria-required="true"
                  />
                  <span class="form-error-msg" id="contact-name-error" role="alert"></span>
                </div>
                <div class="form-group">
                  <label for="contact-email">EMAIL <span aria-hidden="true" style="color:var(--clr-gold)">*</span></label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    autocomplete="email"
                    placeholder="your@email.com"
                    aria-required="true"
                  />
                  <span class="form-error-msg" id="contact-email-error" role="alert"></span>
                </div>
              </div>

              <div class="form-grid-2">
                <div class="form-group">
                  <label for="contact-phone">PHONE</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    autocomplete="tel"
                    placeholder="+91 00000 00000"
                  />
                  <span class="form-error-msg" id="contact-phone-error" role="alert"></span>
                </div>
                <div class="form-group">
                  <label for="contact-company">COMPANY / PRODUCTION</label>
                  <input
                    type="text"
                    id="contact-company"
                    name="company"
                    autocomplete="organization"
                    placeholder="Your company name"
                  />
                  <span class="form-error-msg" id="contact-company-error" role="alert"></span>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-type">ENQUIRY TYPE <span aria-hidden="true" style="color:var(--clr-gold)">*</span></label>
                <select id="contact-type" name="type" required aria-required="true">
                  <option value="" disabled selected>Select an enquiry type</option>
                  <option value="casting">Casting</option>
                  <option value="collaborate">Brand Collaboration</option>
                  <option value="appearance">Personal Appearance</option>
                  <option value="press">Press / Media</option>
                  <option value="other">Other</option>
                </select>
                <span class="form-error-msg" id="contact-type-error" role="alert"></span>
              </div>

              <div class="form-group">
                <label for="contact-message">MESSAGE <span aria-hidden="true" style="color:var(--clr-gold)">*</span></label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  aria-required="true"
                  placeholder="Tell us about your project or enquiry..."
                  rows="5"
                ></textarea>
                <span class="form-error-msg" id="contact-message-error" role="alert"></span>
              </div>

              <div>
                <button type="submit" class="btn btn--gold" style="width:100%;justify-content:center;">
                  SEND ENQUIRY <span class="btn-arrow">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>

  ${renderFooter()}
  `;

  updateActiveLink();
  initContactForm();

  waitForGSAP(() => {
    window.gsap.fromTo('.display-1', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 });
  });
}

function waitForGSAP(cb, attempt = 0) {
  if (window.gsap) { cb(); return; }
  if (attempt > 30) return;
  setTimeout(() => waitForGSAP(cb, attempt + 1), 100);
}

