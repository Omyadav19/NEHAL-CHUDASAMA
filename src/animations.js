/**
 * SPECTACULAR ANIMATIONS SYSTEM
 * Advanced GSAP scroll reveals, parallax, stagger, text clip reveals
 */

export function initScrollAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  // Fade + rise reveal
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 55 },
      {
        opacity: 1, y: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    );
  });

  // Slide from left
  gsap.utils.toArray('.reveal-left').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: -60 },
      {
        opacity: 1, x: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    );
  });

  // Slide from right
  gsap.utils.toArray('.reveal-right').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: 60 },
      {
        opacity: 1, x: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    );
  });

  // Scale reveal
  gsap.utils.toArray('.reveal-scale').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      }
    );
  });

  // Clip reveal (line by line text)
  gsap.utils.toArray('.reveal-clip').forEach(el => {
    gsap.fromTo(el,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power4.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true }
      }
    );
  });

  // Stagger children
  gsap.utils.toArray('.stagger').forEach(parent => {
    const children = parent.querySelectorAll(':scope > *');
    gsap.fromTo(children,
      { opacity: 0, y: 35 },
      {
        opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: parent, start: 'top 85%', once: true }
      }
    );
  });

  // Slow parallax on marked images
  gsap.utils.toArray('.parallax-img').forEach(img => {
    const wrap = img.closest('.parallax-wrap') || img.parentElement;
    gsap.to(img, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: { trigger: wrap, scrub: 1 }
    });
  });

  // Hero image subtle scale-out on scroll
  const heroBg = document.querySelector('.hero-bg img');
  if (heroBg) {
    gsap.to(heroBg, {
      scale: 1.12,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 }
    });
  }

  // Milestone counter number roll
  gsap.utils.toArray('.milestone-item').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.9, delay: i * 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    );
  });

  // Big chapter titles — letter-by-letter approach
  gsap.utils.toArray('.chapter-title').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      }
    );
  });

  // Floating gold line draw
  gsap.utils.toArray('.gold-line').forEach(el => {
    gsap.fromTo(el,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true }
      }
    );
  });
}

export function animateHero() {
  if (!window.gsap) return;
  const { gsap } = window;

  const tl = gsap.timeline({ delay: 0.1 });

  if (document.querySelector('.hero-bg img')) {
    tl.fromTo('.hero-bg img',
      { scale: 1.1 },
      { scale: 1, duration: 2.5, ease: 'power2.out' }, 0
    );
  }

  tl.fromTo('.hero-eyebrow .eyebrow',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.3
  );

  tl.fromTo('.hero-title span',
    { opacity: 0, y: 90, skewY: 2 },
    { opacity: 1, y: 0, skewY: 0, duration: 1.3, stagger: 0.18, ease: 'power4.out' }, 0.5
  );

  tl.fromTo('.hero-subtitle',
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 1.1
  );

  tl.fromTo('.hero-ctas',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 1.3
  );

  tl.fromTo('.scroll-indicator',
    { opacity: 0 },
    { opacity: 1, duration: 0.8, ease: 'power3.out' }, 1.6
  );

  // Marquee entrance
  tl.fromTo('.marquee-wrap',
    { opacity: 0 },
    { opacity: 1, duration: 0.6, ease: 'power3.out' }, 1.4
  );
}

export function killScrollTriggers() {
  if (window.ScrollTrigger) {
    window.ScrollTrigger.getAll().forEach(st => st.kill());
  }
}
