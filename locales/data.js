/**
 * Manelis Studio — localization data.
 *
 * Loaded as a plain <script src> (not fetch()/JSON) so the page localizes
 * correctly whether it's opened as file:///.../index.html or served over
 * http(s) — browsers block fetch() on file:// for security, but a normal
 * <script src="..."> tag loads local files fine either way.
 *
 * To add a language: add one entry to MANIFEST.locales and one property to
 * BUNDLES below. No changes to index.html or assets/i18n.js are needed.
 */
window.MANELIS_I18N = (function () {
  var MANIFEST = {
    default: 'en',
    locales: [
      { code: 'en', name: 'English', dir: 'ltr' },
      { code: 'es', name: 'Español', dir: 'ltr' },
      { code: 'fr', name: 'Français', dir: 'ltr' },
      { code: 'it', name: 'Italiano', dir: 'ltr' },
      { code: 'pt', name: 'Português', dir: 'ltr' },
      { code: 'ru', name: 'Русский', dir: 'ltr' },
      { code: 'uk', name: 'Українська', dir: 'ltr' },
      {
        code: 'he',
        name: 'עברית',
        dir: 'rtl',
        fontsHref: 'https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@500;600&family=Heebo:wght@300;400;500&display=swap',
        fontSerif: "'Frank Ruhl Libre', Georgia, serif",
        fontSans: "'Heebo', 'Segoe UI', Tahoma, Geneva, sans-serif"
      }
    ]
  };

  var BUNDLES = {
    en: {
      title: 'Manelis Studio — Coming Soon',
      meta_description: "Manelis Studio is a jewelry atelier under construction — necklaces, charms, chains, and bundles made to become heirlooms. Coming soon.",
      eyebrow: 'Under Construction',
      headline: 'Something delicate is being made ready.',
      tagline: "We're stringing together a new home for {0} designed to become tomorrow's heirlooms. Thank you for your patience while we set the table.",
      tagline_highlight: 'necklaces, charms, chains & bundles',
      switcher_label: 'Language'
    },
    es: {
      title: 'Manelis Studio — Muy pronto',
      meta_description: 'Manelis Studio es un atelier de joyería en construcción — collares, dijes, cadenas y conjuntos pensados para convertirse en herencias. Muy pronto.',
      eyebrow: 'En construcción',
      headline: 'Algo delicado se está preparando.',
      tagline: 'Estamos hilvanando un nuevo hogar para {0} pensados para ser las herencias del mañana. Gracias por tu paciencia mientras ponemos la mesa.',
      tagline_highlight: 'collares, dijes, cadenas y conjuntos',
      switcher_label: 'Idioma'
    },
    fr: {
      title: 'Manelis Studio — Bientôt disponible',
      meta_description: 'Manelis Studio est un atelier de joaillerie en construction — colliers, breloques, chaînes et ensembles conçus pour devenir des héritages. Bientôt disponible.',
      eyebrow: 'En construction',
      headline: 'Quelque chose de délicat prend forme.',
      tagline: 'Nous tissons un nouvel écrin pour {0} conçus pour devenir les héritages de demain. Merci de votre patience pendant que nous dressons la table.',
      tagline_highlight: 'colliers, breloques, chaînes et ensembles',
      switcher_label: 'Langue'
    },
    it: {
      title: 'Manelis Studio — Prossimamente',
      meta_description: 'Manelis Studio è un atelier di gioielleria in allestimento — collane, ciondoli, catene e set pensati per diventare eredità di famiglia. Prossimamente.',
      eyebrow: 'In allestimento',
      headline: 'Qualcosa di delicato sta per essere pronto.',
      tagline: 'Stiamo intrecciando una nuova casa per {0} pensati per diventare le eredità di domani. Grazie per la pazienza mentre apparecchiamo la tavola.',
      tagline_highlight: 'collane, ciondoli, catene e set',
      switcher_label: 'Lingua'
    },
    pt: {
      title: 'Manelis Studio — Em breve',
      meta_description: 'Manelis Studio é um ateliê de joalheria em construção — colares, pingentes, correntes e conjuntos feitos para se tornarem heranças. Em breve.',
      eyebrow: 'Em construção',
      headline: 'Algo delicado está sendo preparado.',
      tagline: 'Estamos entrelaçando um novo lar para {0} pensados para se tornarem as heranças de amanhã. Obrigado pela paciência enquanto arrumamos a mesa.',
      tagline_highlight: 'colares, pingentes, correntes e conjuntos',
      switcher_label: 'Idioma'
    },
    ru: {
      title: 'Manelis Studio — Скоро открытие',
      meta_description: 'Manelis Studio — ювелирная мастерская в процессе создания: колье, шармы, цепочки и наборы, которым суждено стать фамильными ценностями. Скоро открытие.',
      eyebrow: 'Идёт подготовка',
      headline: 'Готовится что-то нежное и утончённое.',
      tagline: 'Мы создаём новый дом для {0}, которым суждено стать драгоценностями завтрашнего дня. Благодарим за терпение, пока мы накрываем на стол.',
      tagline_highlight: 'колье, шармов, цепочек и наборов',
      switcher_label: 'Язык'
    },
    uk: {
      title: 'Manelis Studio — Незабаром',
      meta_description: 'Manelis Studio — ювелірна майстерня, яку ми творимо: кольє, шарми, ланцюжки та набори, яким судилося стати родинними цінностями. Незабаром.',
      eyebrow: 'Триває підготовка',
      headline: 'Готується щось ніжне й витончене.',
      tagline: 'Ми плетемо новий дім для {0}, яким судилося стати коштовностями завтрашнього дня. Дякуємо за терпіння, поки ми накриваємо на стіл.',
      tagline_highlight: 'кольє, шармів, ланцюжків та наборів',
      switcher_label: 'Мова'
    },
    he: {
      title: 'Manelis Studio — בקרוב',
      meta_description: 'Manelis Studio הוא סדנת תכשיטים בהקמה — שרשראות, תליונים, חוליות ומארזים שנועדו להפוך לתכשיטי ירושה. בקרוב.',
      eyebrow: 'בהקמה',
      headline: 'משהו עדין נמצא בהכנה.',
      tagline: 'אנחנו שוזרים בית חדש עבור {0} שנועדו להפוך לתכשיטי הירושה של מחר. תודה על הסבלנות בזמן שאנו עורכים את השולחן.',
      tagline_highlight: 'שרשראות, תליונים, חוליות ומארזים',
      switcher_label: 'שפה'
    }
  };

  return { manifest: MANIFEST, bundles: BUNDLES };
})();
