/**
 * Manelis Studio — runtime localization engine.
 *
 * Static, framework-free page: locale data is loaded via a plain <script>
 * tag (locales/data.js), not fetch(), so this works from file:// as well as
 * http(s)://. This script swaps text/attributes on elements tagged with
 * data-i18n* attributes. English text stays inline in index.html as the
 * fallback for no-JS visitors and for any unexpected data problem.
 *
 * Adding a language requires NO changes to this file or to index.html: add
 * one manifest entry and one bundle to locales/data.js.
 *
 * Locale resolution (?lang= -> localStorage -> navigator.languages -> the
 * manifest default) lives in locales/data.js as resolveLocale()/localeMeta()
 * so index.html's synchronous boot script and this file share one
 * implementation instead of keeping it in sync by hand.
 */
(function () {
  'use strict';

  var htmlEl = document.documentElement;

  var data = window.MANELIS_I18N;
  if (!data || !data.manifest || !data.bundles) {
    console.warn('[i18n] locales/data.js did not load — showing default English text.');
    htmlEl.removeAttribute('data-i18n-pending');
    return;
  }

  var manifest = data.manifest;
  var bundles = data.bundles;
  var localeMeta = data.localeMeta;
  var STORAGE_KEY = data.storageKey;

  function applyLocaleAttributes(meta) {
    htmlEl.setAttribute('lang', meta.code);
    htmlEl.setAttribute('dir', meta.dir || 'ltr');

    if (meta.fontSerif) htmlEl.style.setProperty('--font-serif', meta.fontSerif);
    else htmlEl.style.removeProperty('--font-serif');

    if (meta.fontSans) htmlEl.style.setProperty('--font-sans', meta.fontSans);
    else htmlEl.style.removeProperty('--font-sans');

    var existingLink = document.getElementById('i18n-extra-fonts');
    if (existingLink) existingLink.parentNode.removeChild(existingLink);

    if (meta.fontsHref) {
      var link = document.createElement('link');
      link.id = 'i18n-extra-fonts';
      link.rel = 'stylesheet';
      link.href = meta.fontsHref;
      document.head.appendChild(link);
    }
  }

  /** value chain: active bundle -> default (en) bundle -> null (leave inline text) */
  function lookup(key, active, fallback) {
    if (active && Object.prototype.hasOwnProperty.call(active, key)) return active[key];
    if (fallback && Object.prototype.hasOwnProperty.call(fallback, key)) return fallback[key];
    return null;
  }

  function renderText(active, fallback) {
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      var value = lookup(key, active, fallback);
      if (value !== null) nodes[i].textContent = value;
    }
  }

  function renderAttrs(active, fallback) {
    var nodes = document.querySelectorAll('[data-i18n-attr]');
    for (var i = 0; i < nodes.length; i++) {
      var spec = nodes[i].getAttribute('data-i18n-attr'); // "attrName:key"
      var parts = spec.split(':');
      var attrName = parts[0];
      var key = parts[1];
      var value = lookup(key, active, fallback);
      if (value !== null) nodes[i].setAttribute(attrName, value);
    }
  }

  /**
   * Renders a translation containing a single "{0}" placeholder as real DOM
   * nodes (text + <strong> + text) — never innerHTML, so a translation entry
   * can never inject markup, and the highlighted phrase can move anywhere
   * in the sentence to fit each language's word order.
   */
  function renderSlots(active, fallback) {
    var nodes = document.querySelectorAll('[data-i18n-slot]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n-slot');
      var slotKey = el.getAttribute('data-i18n-slot-highlight');

      var template = lookup(key, active, fallback);
      var highlight = lookup(slotKey, active, fallback);
      if (template === null) continue;

      var placeholderIndex = template.indexOf('{0}');
      if (placeholderIndex === -1 || highlight === null) {
        el.textContent = template;
        continue;
      }

      var before = template.slice(0, placeholderIndex);
      var after = template.slice(placeholderIndex + 3);

      el.textContent = '';
      if (before) el.appendChild(document.createTextNode(before));
      var strong = document.createElement('strong');
      strong.textContent = highlight;
      el.appendChild(strong);
      if (after) el.appendChild(document.createTextNode(after));
    }
  }

  function buildSwitcher(activeCode, active, fallback) {
    var container = document.querySelector('[data-i18n-switcher]');
    if (!container) return;

    var label = lookup('switcher_label', active, fallback);
    if (label) container.setAttribute('aria-label', label);

    container.innerHTML = '';
    manifest.locales.forEach(function (loc) {
      var link = document.createElement('a');
      // Preserve any existing query params/hash (not just replace the whole
      // search string with "?lang=xx") so the link behaves the same as the
      // click handler below if opened directly — e.g. in a new tab, or with
      // JS unavailable.
      var linkUrl = new URL(window.location.href);
      linkUrl.searchParams.set('lang', loc.code);
      link.href = linkUrl.toString();
      link.lang = loc.code;
      link.hreflang = loc.code;

      // Flag markup comes from assets/flags.js — hand-authored trusted code,
      // never from translation data — so this innerHTML use carries none of
      // the injection risk that data-i18n rendering avoids by using
      // textContent/DOM nodes exclusively for anything locale-file-sourced.
      var flagSvg = window.MANELIS_FLAGS && window.MANELIS_FLAGS[loc.code];
      if (flagSvg) {
        var flag = document.createElement('span');
        flag.className = 'flag-icon';
        flag.innerHTML = flagSvg;
        link.appendChild(flag);
      }
      link.appendChild(document.createTextNode(loc.name));
      if (loc.code === activeCode) {
        link.setAttribute('aria-current', 'true');
        link.classList.add('is-active');
      }
      link.addEventListener('click', function (evt) {
        evt.preventDefault();
        var code = loc.code;
        try {
          window.localStorage.setItem(STORAGE_KEY, code);
        } catch (e) {
          /* localStorage unavailable — URL param still works */
        }
        var url = new URL(window.location.href);
        url.searchParams.set('lang', code);
        window.history.replaceState(null, '', url);
        render(code);
      });
      container.appendChild(link);
    });
  }

  function updateHreflangLinks() {
    document.querySelectorAll('link[data-i18n-hreflang]').forEach(function (el) {
      el.parentNode.removeChild(el);
    });
    var base = window.location.pathname;
    manifest.locales.forEach(function (loc) {
      var link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = loc.code;
      link.href = base + '?lang=' + loc.code;
      link.setAttribute('data-i18n-hreflang', '');
      document.head.appendChild(link);
    });
  }

  function render(requestedCode) {
    var meta = localeMeta(requestedCode) || localeMeta(manifest.default);
    var active = bundles[meta.code] || null;
    var fallback = bundles[manifest.default] || null;

    if (!active) {
      console.warn('[i18n] No bundle for "' + meta.code + '" — falling back to ' + manifest.default);
      meta = localeMeta(manifest.default) || meta;
      active = fallback;
    }

    applyLocaleAttributes(meta);
    renderText(active, fallback);
    renderAttrs(active, fallback);
    renderSlots(active, fallback);
    buildSwitcher(meta.code, active, fallback);
    updateHreflangLinks();
    htmlEl.removeAttribute('data-i18n-pending');
  }

  render(data.resolveLocale().code);
})();
