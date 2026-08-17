/**
 * SITE FOOTER — dark base, light text
 */
export function renderFooter() {
  return `
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-inner">
        <span class="footer-wordmark">Nehal Chudasama</span>
        <p class="footer-copy">&copy; ${new Date().getFullYear()} Nehal Chudasama. All rights reserved.</p>
        <nav class="footer-social" aria-label="Social links">
          <a href="https://www.instagram.com/nehalchudasama9" target="_blank" rel="noopener noreferrer" aria-label="Nehal on Instagram">INSTAGRAM</a>
        </nav>
      </div>
    </div>
  </footer>`;
}
