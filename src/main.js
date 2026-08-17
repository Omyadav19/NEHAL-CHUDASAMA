/**
 * MAIN APP ENTRY POINT
 * Initializes router, transitions, navigation.
 * Contact & Showreel pages REMOVED per request.
 */

import './style.css';

import { register, initRouter, navigate } from './router.js';
import { initTransitions } from './transitions.js';
import { initNav, updateActiveLink } from './nav.js';

import { renderHome }     from './pages/home.js';
import { renderAbout }    from './pages/about.js';
import { renderJourney }  from './pages/journey.js';
import { renderReality }  from './pages/reality.js';
import { renderGallery }  from './pages/gallery.js';
import { renderPress }    from './pages/press.js';

// Register routes (Contact & Showreel removed)
register('/',          renderHome);
register('/about',     renderAbout);
register('/journey',   renderJourney);
register('/reality',   renderReality);
register('/gallery',   renderGallery);
register('/press',     renderPress);
register('/404',       renderHome); // fallback

// Cursor glow effect (desktop only)
function initCursorGlow() {
  if (window.matchMedia('(hover: none)').matches) return;
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  let mx = 0, my = 0;
  let cx = 0, cy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function raf() {
    cx += (mx - cx) * 0.08;
    cy += (my - cy) * 0.08;
    glow.style.left = cx + 'px';
    glow.style.top = cy + 'px';
    requestAnimationFrame(raf);
  }
  raf();
}

// Init
initNav();
initTransitions();
initRouter();
initCursorGlow();

// Render current route
navigate(window.location.pathname, false);
