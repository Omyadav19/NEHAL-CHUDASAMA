/**
 * IMAGE PLACEHOLDER SYSTEM
 * Creates beautiful editorial-style SVG placeholders for missing images.
 * These are replaced when real photos are supplied.
 */

const placeholders = {
  'reality-bg': { label: 'BEHIND THE GLAMOUR', tone: 'dark', accent: '#c9a96e' },
  'journey-miss-diva': { label: 'MISS DIVA UNIVERSE 2018', tone: 'dark', accent: '#c9a96e' },
  'journey-miss-universe': { label: 'MISS UNIVERSE 2018', tone: 'dark', accent: '#d4b882' },
  'journey-entertainment': { label: 'ENTERTAINMENT', tone: 'medium', accent: '#c9a96e' },
  'trait-confidence': { label: 'CONFIDENCE', tone: 'dark', accent: '#c9a96e' },
  'trait-fearless': { label: 'FEARLESS', tone: 'dark', accent: '#c9a96e' },
  'trait-fitness': { label: 'FITNESS', tone: 'medium', accent: '#c9a96e' },
  'trait-charisma': { label: 'CHARISMA', tone: 'dark', accent: '#c9a96e' },
  'trait-presence': { label: 'PRESENCE', tone: 'dark', accent: '#c9a96e' },
  'trait-entertainment': { label: 'ENTERTAINMENT', tone: 'medium', accent: '#c9a96e' },
  'gallery-1': { label: 'PAGEANT', tone: 'dark', accent: '#c9a96e' },
  'gallery-2': { label: 'EDITORIAL', tone: 'dark', accent: '#c9a96e' },
  'gallery-3': { label: 'RED CARPET', tone: 'dark', accent: '#c9a96e' },
  'gallery-4': { label: 'PORTRAIT', tone: 'medium', accent: '#c9a96e' },
  'gallery-5': { label: 'LIFESTYLE', tone: 'dark', accent: '#c9a96e' },
  'gallery-6': { label: 'MISS UNIVERSE', tone: 'dark', accent: '#c9a96e' },
  'gallery-7': { label: 'FASHION', tone: 'dark', accent: '#c9a96e' },
  'gallery-8': { label: 'BEHIND THE SCENES', tone: 'medium', accent: '#c9a96e' },
  'gallery-9': { label: 'BEAUTY', tone: 'dark', accent: '#c9a96e' },
  'gallery-10': { label: 'FITNESS', tone: 'dark', accent: '#c9a96e' },
  'gallery-11': { label: 'STAGE', tone: 'dark', accent: '#c9a96e' },
  'gallery-12': { label: 'COUTURE', tone: 'medium', accent: '#c9a96e' },
  'gallery-13': { label: 'CANDID', tone: 'dark', accent: '#c9a96e' },
  'gallery-14': { label: 'EVENING WEAR', tone: 'dark', accent: '#c9a96e' },
  'gallery-15': { label: 'GALA', tone: 'medium', accent: '#c9a96e' },
  'press-1': { label: 'FEMINA', tone: 'dark', accent: '#c9a96e' },
  'press-2': { label: 'TIMES OF INDIA', tone: 'dark', accent: '#c9a96e' },
  'press-3': { label: 'HINDUSTAN TIMES', tone: 'medium', accent: '#c9a96e' },
  'press-4': { label: 'ETIMES', tone: 'dark', accent: '#c9a96e' },
  'contact-bg': { label: '', tone: 'dark', accent: '#c9a96e' },
  'og-image': { label: 'NEHAL CHUDASAMA', tone: 'dark', accent: '#c9a96e' },
};

const tones = {
  dark: { bg: '#0d0d0d', fg: 'rgba(244,237,224,0.15)' },
  medium: { bg: '#161616', fg: 'rgba(244,237,224,0.12)' },
};

function makeSVG(key, cfg) {
  const tone = tones[cfg.tone];
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <rect width="800" height="1000" fill="${tone.bg}"/>
  <!-- Subtle grid -->
  <line x1="0" y1="500" x2="800" y2="500" stroke="${tone.fg}" stroke-width="0.5"/>
  <line x1="400" y1="0" x2="400" y2="1000" stroke="${tone.fg}" stroke-width="0.5"/>
  <!-- Corner marks -->
  <line x1="40" y1="40" x2="80" y2="40" stroke="${cfg.accent}" stroke-width="0.8" opacity="0.6"/>
  <line x1="40" y1="40" x2="40" y2="80" stroke="${cfg.accent}" stroke-width="0.8" opacity="0.6"/>
  <line x1="760" y1="40" x2="720" y2="40" stroke="${cfg.accent}" stroke-width="0.8" opacity="0.6"/>
  <line x1="760" y1="40" x2="760" y2="80" stroke="${cfg.accent}" stroke-width="0.8" opacity="0.6"/>
  <line x1="40" y1="960" x2="80" y2="960" stroke="${cfg.accent}" stroke-width="0.8" opacity="0.6"/>
  <line x1="40" y1="960" x2="40" y2="920" stroke="${cfg.accent}" stroke-width="0.8" opacity="0.6"/>
  <line x1="760" y1="960" x2="720" y2="960" stroke="${cfg.accent}" stroke-width="0.8" opacity="0.6"/>
  <line x1="760" y1="960" x2="760" y2="920" stroke="${cfg.accent}" stroke-width="0.8" opacity="0.6"/>
  <!-- Central line -->
  <line x1="360" y1="500" x2="440" y2="500" stroke="${cfg.accent}" stroke-width="1" opacity="0.8"/>
  <!-- Label -->
  ${cfg.label ? `<text x="400" y="530" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="${cfg.accent}" opacity="0.7" letter-spacing="4">${cfg.label}</text>` : ''}
  <!-- Replace notice -->
  <text x="400" y="560" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" fill="${tone.fg}" opacity="0.8" letter-spacing="2">REPLACE WITH APPROVED PHOTOGRAPHY</text>
</svg>`;
  return svg;
}

// Generate all placeholder SVG files
import { writeFileSync } from 'fs';
import { join } from 'path';

const outputDir = join(process.cwd(), 'public', 'images');

for (const [key, cfg] of Object.entries(placeholders)) {
  const svg = makeSVG(key, cfg);
  const filename = `${key}.jpg`; // Save as jpg reference but SVG content
  // We'll write as SVG files with jpg extension workaround via actual SVG
  writeFileSync(join(outputDir, `${key}.svg`), svg, 'utf8');
}

console.log('Generated', Object.keys(placeholders).length, 'placeholder SVGs');
