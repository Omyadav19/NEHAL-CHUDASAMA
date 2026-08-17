/**
 * GLOBAL NAVIGATION
 * Scroll behaviour, hamburger menu, active link highlighting.
 */

export function initNav() {
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('nav-mobile-menu');
  const mobileClose = document.getElementById('nav-mobile-close');

  // Scroll → frosted nav
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Hamburger toggle
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggleMobileMenu(!open);
  });

  mobileClose.addEventListener('click', () => toggleMobileMenu(false));

  function toggleMobileMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    mobileMenu.classList.toggle('open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  // Close on mobile link click
  document.querySelectorAll('[data-mobile-link]').forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // ESC closes mobile menu
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggleMobileMenu(false);
  });

  // Update active nav link
  updateActiveLink();
}

export function updateActiveLink() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('[data-link]').forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '') || '/';
    link.classList.toggle('active', href === path);
  });

  const nav = document.getElementById('site-nav');
  if (nav) {
    const darkPages = ['/reality', '/showreel'];
    const isDarkPage = darkPages.includes(path);
    nav.classList.toggle('nav-on-dark', isDarkPage);
  }
}
