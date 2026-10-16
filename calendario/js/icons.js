/** Minimal line icons for advent drawers — returns SVG markup */
const ICONS = {
  pines: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M12 32 L20 10 L28 32"/><path d="M8 32 L16 16 L24 32"/><path d="M16 32 L24 16 L32 32"/><line x1="20" y1="32" x2="20" y2="36"/></svg>`,
  snow: `<svg viewBox="0 0 40 40" class="icon-svg"><line x1="20" y1="6" x2="20" y2="34"/><line x1="6" y1="20" x2="34" y2="20"/><line x1="10" y1="10" x2="30" y2="30"/><line x1="30" y1="10" x2="10" y2="30"/><circle cx="20" cy="20" r="2.5"/></svg>`,
  mountain: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M4 32 L16 10 L22 20 L28 8 L36 32 Z"/><path d="M14 16 L16 12 L19 18"/></svg>`,
  gift: `<svg viewBox="0 0 40 40" class="icon-svg"><rect x="8" y="16" width="24" height="16"/><rect x="6" y="12" width="28" height="6"/><line x1="20" y1="12" x2="20" y2="32"/><path d="M20 12 C16 6 10 8 12 12"/><path d="M20 12 C24 6 30 8 28 12"/></svg>`,
  deer: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M14 34 C12 28 12 22 16 18 C18 16 22 16 24 18 C28 22 28 28 26 34"/><path d="M16 18 L12 8 M12 8 L8 12 M12 8 L14 4"/><path d="M24 18 L28 8 M28 8 L32 12 M28 8 L26 4"/><circle cx="17" cy="22" r="1"/><circle cx="23" cy="22" r="1"/></svg>`,
  compass: `<svg viewBox="0 0 40 40" class="icon-svg"><circle cx="20" cy="20" r="12"/><path d="M20 10 L23 20 L20 30 L17 20 Z"/><circle cx="20" cy="20" r="2"/></svg>`,
  mug: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M10 14 H26 V28 C26 31 23 34 20 34 H16 C13 34 10 31 10 28 Z"/><path d="M26 18 H30 C32 18 34 20 34 22 C34 24 32 26 30 26 H26"/><path d="M14 10 C14 8 16 8 16 10 M18 10 C18 8 20 8 20 10 M22 10 C22 8 24 8 24 10"/></svg>`,
  beanie: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M10 24 C10 14 30 14 30 24"/><rect x="8" y="24" width="24" height="6" rx="1"/><circle cx="20" cy="12" r="2.5"/></svg>`,
  arrows: `<svg viewBox="0 0 40 40" class="icon-svg"><line x1="10" y1="30" x2="30" y2="10"/><polyline points="22,10 30,10 30,18"/><line x1="10" y1="10" x2="30" y2="30"/><polyline points="22,30 30,30 30,22"/></svg>`,
  wreath: `<svg viewBox="0 0 40 40" class="icon-svg"><circle cx="20" cy="20" r="11"/><circle cx="20" cy="20" r="7"/><path d="M18 9 L20 6 L22 9"/><circle cx="20" cy="28" r="1.5"/></svg>`,
  fox: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M8 30 L12 14 L20 20 L28 14 L32 30 Z"/><path d="M12 14 L10 6 L16 14"/><path d="M28 14 L30 6 L24 14"/><circle cx="16" cy="22" r="1"/><circle cx="24" cy="22" r="1"/></svg>`,
  star: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M20 6 L23 16 L34 16 L25 23 L28 34 L20 27 L12 34 L15 23 L6 16 L17 16 Z"/></svg>`,
  cabin: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M6 22 L20 8 L34 22"/><rect x="10" y="22" width="20" height="12"/><rect x="17" y="26" width="6" height="8"/></svg>`,
  axe: `<svg viewBox="0 0 40 40" class="icon-svg"><line x1="12" y1="28" x2="28" y2="12"/><path d="M24 8 L32 16 L28 20 L20 12 Z"/></svg>`,
  boot: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M14 8 V24 H10 C8 24 8 28 10 30 H28 C32 30 34 26 32 24 H22 V8 Z"/></svg>`,
  lantern: `<svg viewBox="0 0 40 40" class="icon-svg"><rect x="13" y="14" width="14" height="16" rx="1"/><line x1="20" y1="8" x2="20" y2="14"/><path d="M16 8 H24"/><line x1="20" y1="18" x2="20" y2="26"/></svg>`,
  ski: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M12 8 L16 32 L20 30 L16 8"/><path d="M24 8 L28 32 L32 30 L28 8"/><line x1="10" y1="18" x2="30" y2="18"/></svg>`,
  scarf: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M10 14 H30"/><path d="M14 14 V28 L18 32"/><path d="M26 14 V28 L22 32"/><path d="M14 20 H26"/></svg>`,
  mittens: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M12 16 C12 10 20 10 20 16 V28 H12 Z"/><path d="M20 18 C24 16 26 20 22 22"/><path d="M10 28 H22 V32 H10 Z"/></svg>`,
  bird: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M8 22 C14 14 22 14 28 18 L34 14 C30 22 28 26 22 28 C16 30 10 28 8 22 Z"/><circle cx="26" cy="18" r="1.2"/></svg>`,
  moon: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M24 8 C14 10 10 20 14 28 C20 34 30 32 32 24 C26 28 18 24 24 8 Z"/></svg>`,
  bell: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M14 18 C14 12 26 12 26 18 V26 H14 Z"/><path d="M12 26 H28"/><circle cx="20" cy="30" r="2"/><line x1="20" y1="8" x2="20" y2="12"/></svg>`,
  candle: `<svg viewBox="0 0 40 40" class="icon-svg"><rect x="16" y="16" width="8" height="16"/><path d="M20 16 C18 12 20 8 20 8 C20 8 22 12 20 16"/><line x1="12" y1="32" x2="28" y2="32"/></svg>`,
  holly: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M12 20 C8 14 14 10 18 14 C16 8 24 8 24 14 C28 10 34 16 28 20 C34 24 28 32 24 26 C24 32 16 32 16 26 C10 30 8 24 12 20 Z"/><circle cx="18" cy="22" r="1.5"/><circle cx="22" cy="20" r="1.5"/><circle cx="20" cy="24" r="1.5"/></svg>`,
  heart: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M20 32 C12 26 8 20 8 16 C8 12 11 10 14 10 C17 10 19 12 20 14 C21 12 23 10 26 10 C29 10 32 12 32 16 C32 20 28 26 20 32 Z"/></svg>`,
  ginger: `<svg viewBox="0 0 40 40" class="icon-svg"><circle cx="20" cy="12" r="5"/><path d="M14 18 H26 V28 H14 Z"/><path d="M10 18 L14 20 M30 18 L26 20"/><path d="M14 28 L12 34 M26 28 L28 34"/><circle cx="18" cy="12" r="0.8"/><circle cx="22" cy="12" r="0.8"/></svg>`,
  ornament: `<svg viewBox="0 0 40 40" class="icon-svg"><circle cx="20" cy="22" r="10"/><rect x="17" y="10" width="6" height="4"/><line x1="20" y1="6" x2="20" y2="10"/><line x1="14" y1="22" x2="26" y2="22"/></svg>`,
  candy: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M22 8 C28 8 32 14 28 20 C24 26 18 30 14 32"/><path d="M20 10 C24 10 28 14 26 18"/><path d="M12 30 L10 34 M16 32 L14 36"/></svg>`,
  bow: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M20 20 L8 12 L8 28 Z"/><path d="M20 20 L32 12 L32 28 Z"/><rect x="17" y="17" width="6" height="6"/></svg>`,
  teacup: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M10 14 H26 V26 C26 30 22 32 18 32 H18 C14 32 10 30 10 26 Z"/><path d="M26 18 H30 C32 18 34 20 34 22 C34 24 32 26 30 26 H26"/><line x1="12" y1="36" x2="28" y2="36"/></svg>`,
  dove: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M8 22 C16 16 24 14 32 12 C28 18 26 24 20 28 C14 30 8 28 8 22 Z"/><path d="M18 20 C22 18 26 16 30 14"/><circle cx="28" cy="14" r="1"/></svg>`,
  snowman: `<svg viewBox="0 0 40 40" class="icon-svg"><circle cx="20" cy="12" r="5"/><circle cx="20" cy="24" r="8"/><line x1="12" y1="22" x2="6" y2="18"/><line x1="28" y1="22" x2="34" y2="18"/></svg>`,
  flower: `<svg viewBox="0 0 40 40" class="icon-svg"><circle cx="20" cy="20" r="3"/><circle cx="20" cy="12" r="4"/><circle cx="20" cy="28" r="4"/><circle cx="12" cy="20" r="4"/><circle cx="28" cy="20" r="4"/></svg>`,
  angel: `<svg viewBox="0 0 40 40" class="icon-svg"><circle cx="20" cy="12" r="4"/><path d="M14 18 H26 V30 H14 Z"/><path d="M14 20 C6 18 6 28 14 26"/><path d="M26 20 C34 18 34 28 26 26"/><path d="M16 8 C20 4 24 8 20 10"/></svg>`,
  star2: `<svg viewBox="0 0 40 40" class="icon-svg"><path d="M20 8 L22 16 L30 16 L24 21 L26 30 L20 24 L14 30 L16 21 L10 16 L18 16 Z"/></svg>`,
};

const ICONS_EL = [
  'pines', 'snow', 'mountain', 'gift', 'deer', 'compass',
  'mug', 'beanie', 'arrows', 'wreath', 'fox', 'star',
  'cabin', 'axe', 'boot', 'lantern', 'ski', 'scarf',
  'mittens', 'bird', 'moon', 'bell', 'candle', 'holly',
];

const ICONS_ELLA = [
  'heart', 'snow', 'ginger', 'ornament', 'wreath', 'mittens',
  'star', 'candle', 'bow', 'gift', 'candy', 'scarf',
  'dove', 'holly', 'bell', 'angel', 'flower', 'teacup',
  'snowman', 'star2', 'heart', 'ornament', 'candy', 'bow',
];

const COLORS_EL = ['#1b3022', '#1a2b45', '#2c2c2c', '#a88c6c'];
const COLORS_ELLA = ['#6b1a28', '#c97b8a', '#f4c2c2', '#8b2942'];

function iconFor(theme, day) {
  const list = theme === 'ella' ? ICONS_ELLA : ICONS_EL;
  return ICONS[list[(day - 1) % list.length]];
}

function colorFor(theme, day) {
  const list = theme === 'ella' ? COLORS_ELLA : COLORS_EL;
  return list[(day - 1) % list.length];
}

function injectIcon(el, name) {
  if (el && ICONS[name]) el.innerHTML = ICONS[name];
}
