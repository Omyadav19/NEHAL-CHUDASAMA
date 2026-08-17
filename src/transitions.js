/**
 * PAGE TRANSITIONS
 * Cinematic curtain wipe between page navigations.
 */

import { navigate } from './router.js';

const curtain = () => document.getElementById('page-curtain');

function getGSAP() {
  return window.gsap;
}

export function initTransitions() {
  document.addEventListener('click', e => {
    const anchor = e.target.closest('[data-link]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (href === window.location.pathname) return;
    e.stopImmediatePropagation();
    e.preventDefault();
    transitionTo(href);
  }, true); // capture phase so it fires before router
}

export function transitionTo(path) {
  const gsap = getGSAP();
  if (!gsap) {
    navigate(path);
    return;
  }

  const el = curtain();

  // Slide curtain up (in)
  gsap.set(el, { yPercent: 100, pointerEvents: 'all' });
  gsap.to(el, {
    yPercent: 0,
    duration: 0.55,
    ease: 'power2.inOut',
    onComplete: () => {
      navigate(path);
      // Slide curtain out after route renders
      gsap.to(el, {
        yPercent: -100,
        duration: 0.55,
        delay: 0.08,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(el, { yPercent: 100, pointerEvents: 'none' });
        }
      });
    }
  });
}

export function revealPage() {
  const gsap = getGSAP();
  if (!gsap) return;
  // Stagger-reveal all .reveal elements on the new page
  gsap.fromTo('.reveal', { opacity: 0, y: 50 }, {
    opacity: 1, y: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: 'power3.out',
    delay: 0.2,
    clearProps: 'all'
  });
}
