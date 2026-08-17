/**
 * CLIENT-SIDE ROUTER
 * Handles pushState navigation, route matching and page rendering.
 */

const routes = {};

export function register(path, handler) {
  routes[path] = handler;
}

export function navigate(path, push = true) {
  if (push) window.history.pushState(null, '', path);

  const pathname = path === '/' ? '/' : path.replace(/\/$/, '');
  const handler = routes[pathname] || routes['/404'] || routes['/'];

  const app = document.getElementById('app');
  app.scrollTo ? app.scrollTo(0, 0) : window.scrollTo(0, 0);
  window.scrollTo(0, 0);

  if (handler) {
    handler(app);
  }
}

export function initRouter() {
  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    navigate(window.location.pathname, false);
  });

  // Intercept all [data-link] anchor clicks
  document.addEventListener('click', e => {
    const anchor = e.target.closest('[data-link]');
    if (!anchor) return;
    e.preventDefault();
    const href = anchor.getAttribute('href');
    if (href === window.location.pathname) return;
    navigate(href);
  });
}
