import { defaultHeaderContent, defaultHeaderContentFr } from '../../data/headerContent.js';
import { localizeContent, pickLocalized } from '../../i18n/localize.js';
import { getLanguage, saveLanguage } from '../../store/languageStore.js';
import { getHeaderContent } from '../../store/headerStore.js';
import { escapeHtml } from '../../utils/escapeHtml.js';
import { resolveSitePath, stripSiteBasePath } from '../../utils/sitePath.js';
import { BrandLogo } from './brandLogo.js?v=20260318-3';

function normalizePathname(pathname = '') {
  if (!pathname) return '/';

  const normalized = pathname.replace(/\/+$/, '') || '/';
  return normalized === '/index.html' ? '/index.html' : normalized;
}

function getCurrentPathname() {
  if (typeof window === 'undefined') return '/';

  const pathname = normalizePathname(stripSiteBasePath(window.location.pathname));
  return pathname === '/' ? '/index.html' : pathname;
}

function getItemPathname(href = '') {
  if (!href) return '';

  try {
    const url = new URL(href, typeof window !== 'undefined' ? window.location.origin : 'http://localhost');
    const pathname = normalizePathname(stripSiteBasePath(url.pathname));
    return pathname === '/' ? '/index.html' : pathname;
  } catch {
    return normalizePathname(href);
  }
}

function isNavItemActive(item) {
  const currentPath = getCurrentPathname();
  const itemPath = getItemPathname(item?.href || '');

  if (!itemPath) {
    return false;
  }

  return currentPath === itemPath;
}

function renderNavItem(item, mobile = false) {
  const activeClass = isNavItemActive(item) ? (mobile ? 'is-active-mobile' : 'is-active') : '';
  const label = escapeHtml(item.label);
  const href = escapeHtml(resolveSitePath(item.href));

  return `
    <a class="header-link ${mobile ? 'header-link--mobile' : ''} ${activeClass}" href="${href}" data-close-menu>
      ${label}
    </a>
  `;
}

function renderAction(action, mobile = false) {
  const label = escapeHtml(action.label);
  const href = escapeHtml(resolveSitePath(action.href));
  const variant = action.variant === 'secondary' ? 'secondary' : 'primary';

  return `
    <a
      class="header-action header-action--${variant} ${mobile ? 'header-action--mobile' : ''}"
      href="${href}"
      data-close-menu
    >
      ${label}
    </a>
  `;
}

function renderLanguageToggle(locale, mobile = false) {
  const shellClass = mobile ? 'language-toggle language-toggle--mobile' : 'language-toggle';
  const groupLabel = escapeHtml(pickLocalized(locale, 'Language switcher', 'Sélecteur de langue'));
  const englishLabel = escapeHtml(pickLocalized(locale, 'Switch to English', 'Passer en anglais'));
  const frenchLabel = escapeHtml(pickLocalized(locale, 'Switch to French', 'Passer en français'));

  return `
    <div class="${shellClass}" role="group" aria-label="${groupLabel}">
      <button
        type="button"
        class="language-toggle__option ${locale === 'en' ? 'is-active' : ''}"
        aria-pressed="${locale === 'en'}"
        aria-label="${englishLabel}"
        data-language-choice="en"
      >
        EN
      </button>
      <button
        type="button"
        class="language-toggle__option ${locale === 'fr' ? 'is-active' : ''}"
        aria-pressed="${locale === 'fr'}"
        aria-label="${frenchLabel}"
        data-language-choice="fr"
      >
        FR
      </button>
    </div>
  `;
}

export function Header() {
  const locale = getLanguage();
  const headerContent = localizeContent(
    getHeaderContent(),
    defaultHeaderContent,
    defaultHeaderContentFr,
    locale
  );
  const brandHref = escapeHtml(resolveSitePath(headerContent.brand.href || '/'));
  const brandAriaLabel = escapeHtml(headerContent.brand.ariaLabel || 'LHUPC / AED');
  const mobileNavigation = [
    { id: 'nav-home-mobile', label: pickLocalized(locale, 'HOME', 'ACCUEIL'), href: '/index.html' },
    ...headerContent.navigation
  ];
  const desktopNavLabel = escapeHtml(pickLocalized(locale, 'Primary navigation', 'Navigation principale'));
  const mobileNavLabel = escapeHtml(pickLocalized(locale, 'Mobile navigation', 'Navigation mobile'));
  const openMenuLabel = escapeHtml(pickLocalized(locale, 'Open menu', 'Ouvrir le menu'));
  const closeMenuLabel = escapeHtml(pickLocalized(locale, 'Close menu', 'Fermer le menu'));

  return `
    <header class="site-header" data-header>
      <div class="site-header__shell">
        <div class="site-header__bar">
          <a href="${brandHref}" class="site-header__brand" aria-label="${brandAriaLabel}">
            ${BrandLogo(headerContent.brand)}
          </a>

          <div class="site-header__desktop">
            <nav class="site-header__nav" aria-label="${desktopNavLabel}">
              ${headerContent.navigation.map((item) => renderNavItem(item)).join('')}
            </nav>

            <div class="site-header__actions">
              ${renderLanguageToggle(locale)}
              ${headerContent.actions.map((action) => renderAction(action)).join('')}
            </div>
          </div>

          <button class="menu-toggle" type="button" aria-expanded="false" aria-label="${openMenuLabel}" data-menu-toggle>
            <span class="menu-toggle__icon" data-lucide="menu" aria-hidden="true"></span>
            <span class="menu-toggle__icon menu-toggle__icon--close" data-lucide="x" aria-hidden="true"></span>
          </button>
        </div>

        <div class="site-header__mobile-panel" data-mobile-menu>
          <button class="mobile-panel__close" type="button" aria-label="${closeMenuLabel}" data-close-menu>
            <span class="mobile-panel__close-icon" data-lucide="x" aria-hidden="true"></span>
          </button>
          ${renderLanguageToggle(locale, true)}
          <nav class="site-header__mobile-nav" aria-label="${mobileNavLabel}">
            ${mobileNavigation.map((item) => renderNavItem(item, true)).join('')}
          </nav>

          <div class="site-header__mobile-actions">
            ${headerContent.actions.map((action) => renderAction(action, true)).join('')}
          </div>
        </div>
      </div>
    </header>
  `;
}

export function setupHeader(scope = document) {
  const header = scope.querySelector('[data-header]');

  if (!header) {
    return () => {};
  }

  const button = header.querySelector('[data-menu-toggle]');
  const panel = header.querySelector('[data-mobile-menu]');
  const closers = header.querySelectorAll('[data-close-menu]');

  if (!button || !panel) {
    return () => {};
  }

  const controller = new AbortController();
  const { signal } = controller;
  let lastScrollY = window.scrollY;
  const locale = getLanguage();
  const openMenuLabel = pickLocalized(locale, 'Open menu', 'Ouvrir le menu');
  const closeMenuLabel = pickLocalized(locale, 'Close menu', 'Fermer le menu');

  const closeMenu = () => {
    if (!panel.classList.contains('is-open')) {
      return;
    }

    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', openMenuLabel);
    button.classList.remove('is-open');
    panel.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  const openMenu = () => {
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', closeMenuLabel);
    button.classList.add('is-open');
    panel.classList.add('is-open');
    document.body.classList.add('menu-open');
  };

  const showHeader = () => {
    header.classList.remove('is-hidden');
  };

  const hideHeader = () => {
    if (button.getAttribute('aria-expanded') === 'true') {
      return;
    }

    header.classList.add('is-hidden');
  };

  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      closeMenu();
      return;
    }

    openMenu();
  }, { signal });

  closers.forEach((link) => {
    link.addEventListener('click', closeMenu, { signal });
  });

  header.querySelectorAll('[data-language-choice]').forEach((option) => {
    option.addEventListener(
      'click',
      () => {
        const nextLocale = option.getAttribute('data-language-choice');

        if (!nextLocale || nextLocale === getLanguage()) {
          closeMenu();
          return;
        }

        saveLanguage(nextLocale);
        closeMenu();
      },
      { signal }
    );
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1100) {
      closeMenu();
    }
  }, { signal });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  }, { signal });

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 4) {
      showHeader();
      lastScrollY = currentScrollY;
      return;
    }

    if (currentScrollY > lastScrollY) {
      hideHeader();
    } else if (currentScrollY < lastScrollY) {
      showHeader();
    }

    lastScrollY = currentScrollY;
  }, { signal, passive: true });

  return () => {
    closeMenu();
    showHeader();
    controller.abort();
  };
}
