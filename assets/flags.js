/**
 * Manelis Studio — flag icon markup for the language switcher.
 *
 * These SVG strings are trusted, hand-authored application code (like the
 * rest of assets/), not translation data — unlike locales/data.js, nothing
 * here is ever meant to be edited when adding a language, so rendering them
 * via innerHTML does not reopen the injection risk that data-i18n rendering
 * deliberately avoids. Keyed by locale code; a locale with no entry here
 * simply renders without an icon (see assets/i18n.js).
 *
 * Simplified flat flags, hand-drawn to a shared 30x20 (3:2) viewBox — not
 * pixel-accurate replicas, chosen over emoji flags (which Windows renders
 * as plain two-letter codes, not pictures) and over an external icon CDN
 * (which would break offline/file:// use and add a third-party request).
 */
window.MANELIS_FLAGS = {
  en: '<svg viewBox="0 0 30 20" aria-hidden="true" focusable="false">' +
    '<clipPath id="fc-en"><rect width="30" height="20" rx="3"/></clipPath>' +
    '<g clip-path="url(#fc-en)">' +
    '<rect width="30" height="20" fill="#00247d"/>' +
    '<line x1="0" y1="0" x2="30" y2="20" stroke="#fff" stroke-width="6"/>' +
    '<line x1="30" y1="0" x2="0" y2="20" stroke="#fff" stroke-width="6"/>' +
    '<line x1="0" y1="0" x2="30" y2="20" stroke="#cf142b" stroke-width="2.4"/>' +
    '<line x1="30" y1="0" x2="0" y2="20" stroke="#cf142b" stroke-width="2.4"/>' +
    '<rect x="12" width="6" height="20" fill="#fff"/>' +
    '<rect y="7" width="30" height="6" fill="#fff"/>' +
    '<rect x="13.5" width="3" height="20" fill="#cf142b"/>' +
    '<rect y="8.5" width="30" height="3" fill="#cf142b"/>' +
    '</g></svg>',

  es: '<svg viewBox="0 0 30 20" aria-hidden="true" focusable="false">' +
    '<clipPath id="fc-es"><rect width="30" height="20" rx="3"/></clipPath>' +
    '<g clip-path="url(#fc-es)">' +
    '<rect width="30" height="20" fill="#aa151b"/>' +
    '<rect y="5" width="30" height="10" fill="#f1bf00"/>' +
    '</g></svg>',

  fr: '<svg viewBox="0 0 30 20" aria-hidden="true" focusable="false">' +
    '<clipPath id="fc-fr"><rect width="30" height="20" rx="3"/></clipPath>' +
    '<g clip-path="url(#fc-fr)">' +
    '<rect width="10" height="20" fill="#0055a4"/>' +
    '<rect x="10" width="10" height="20" fill="#fff"/>' +
    '<rect x="20" width="10" height="20" fill="#ef4135"/>' +
    '</g></svg>',

  it: '<svg viewBox="0 0 30 20" aria-hidden="true" focusable="false">' +
    '<clipPath id="fc-it"><rect width="30" height="20" rx="3"/></clipPath>' +
    '<g clip-path="url(#fc-it)">' +
    '<rect width="10" height="20" fill="#008c45"/>' +
    '<rect x="10" width="10" height="20" fill="#f4f5f0"/>' +
    '<rect x="20" width="10" height="20" fill="#cd212a"/>' +
    '</g></svg>',

  pt: '<svg viewBox="0 0 30 20" aria-hidden="true" focusable="false">' +
    '<clipPath id="fc-pt"><rect width="30" height="20" rx="3"/></clipPath>' +
    '<g clip-path="url(#fc-pt)">' +
    '<rect width="12" height="20" fill="#046a38"/>' +
    '<rect x="12" width="18" height="20" fill="#da291c"/>' +
    '<circle cx="12" cy="10" r="2.6" fill="#ffd100"/>' +
    '</g></svg>',

  ru: '<svg viewBox="0 0 30 20" aria-hidden="true" focusable="false">' +
    '<clipPath id="fc-ru"><rect width="30" height="20" rx="3"/></clipPath>' +
    '<g clip-path="url(#fc-ru)">' +
    '<rect width="30" height="6.667" fill="#fff"/>' +
    '<rect y="6.667" width="30" height="6.667" fill="#0039a6"/>' +
    '<rect y="13.333" width="30" height="6.667" fill="#d52b1e"/>' +
    '</g></svg>',

  uk: '<svg viewBox="0 0 30 20" aria-hidden="true" focusable="false">' +
    '<clipPath id="fc-uk"><rect width="30" height="20" rx="3"/></clipPath>' +
    '<g clip-path="url(#fc-uk)">' +
    '<rect width="30" height="10" fill="#0057b7"/>' +
    '<rect y="10" width="30" height="10" fill="#ffd700"/>' +
    '</g></svg>',

  he: '<svg viewBox="0 0 30 20" aria-hidden="true" focusable="false">' +
    '<clipPath id="fc-he"><rect width="30" height="20" rx="3"/></clipPath>' +
    '<g clip-path="url(#fc-he)">' +
    '<rect width="30" height="20" fill="#fff" stroke="rgba(0,0,0,0.12)" stroke-width="0.6"/>' +
    '<rect y="2.5" width="30" height="2.5" fill="#0038b8"/>' +
    '<rect y="15" width="30" height="2.5" fill="#0038b8"/>' +
    '<polygon points="15,6.7 17.858,11.65 12.142,11.65" fill="none" stroke="#0038b8" stroke-width="0.7"/>' +
    '<polygon points="15,13.3 12.142,8.35 17.858,8.35" fill="none" stroke="#0038b8" stroke-width="0.7"/>' +
    '</g></svg>'
};
