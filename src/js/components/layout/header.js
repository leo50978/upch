import { getHeaderContent } from '../../store/headerStore.js';
import { escapeHtml } from '../../utils/escapeHtml.js';
import { BrandLogo } from './brandLogo.js?v=20260318-2';

function normalizePathname(pathname = '') {
  if (!pathname) return '/';

  const normalized = pathname.replace(/\/+$/, '') || '/';
  return normalized === '/index.html' ? '/index.html' : normalized;
}

function getCurrentPathname() {
  if (typeof window === 'undefined') return '/';

  const pathname = normalizePathname(window.location.pathname);
  return pathname === '/' ? '/index.html' : pathname;
}

function getItemPathname(href = '') {
  if (!href) return '';

  try {
    const url = new URL(href, typeof window !== 'undefined' ? window.location.origin : 'http://localhost');
    const pathname = normalizePathname(url.pathname);
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
  const href = escapeHtml(item.href);

  return `
    <a class="header-link ${mobile ? 'header-link--mobile' : ''} ${activeClass}" href="${href}" data-close-menu>
      ${label}
    </a>
  `;
}

function renderAction(action, mobile = false) {
  const label = escapeHtml(action.label);
  const href = escapeHtml(action.href);
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

export function Header() {
  const headerContent = getHeaderContent();
  const brandHref = escapeHtml(headerContent.brand.href || '/');
  const brandAriaLabel = escapeHtml(headerContent.brand.ariaLabel || 'LHUPC / AED');
  const mobileNavigation = [
    { id: 'nav-home-mobile', label: 'ACCUEIL', href: '/index.html' },
    ...headerContent.navigation
  ];

  return `
    <header class="site-header" data-header>
      <div class="site-header__shell">
        <div class="site-header__bar">
          <a href="${brandHref}" class="site-header__brand" aria-label="${brandAriaLabel}">
            ${BrandLogo(headerContent.brand)}
          </a>

          <div class="site-header__desktop">
            <nav class="site-header__nav" aria-label="Navigation principale">
              ${headerContent.navigation.map((item) => renderNavItem(item)).join('')}
            </nav>

            <div class="site-header__actions">
              ${headerContent.actions.map((action) => renderAction(action)).join('')}
            </div>
          </div>

          <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Ouvrir le menu" data-menu-toggle>
            <span class="menu-toggle__icon" data-lucide="menu" aria-hidden="true"></span>
            <span class="menu-toggle__icon menu-toggle__icon--close" data-lucide="x" aria-hidden="true"></span>
          </button>
        </div>

        <div class="site-header__mobile-panel" data-mobile-menu>
          <button class="mobile-panel__close" type="button" aria-label="Fermer le menu" data-close-menu>
            <span class="mobile-panel__close-icon" data-lucide="x" aria-hidden="true"></span>
          </button>
          <nav class="site-header__mobile-nav" aria-label="Navigation mobile">
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

  const closeMenu = () => {
    if (!panel.classList.contains('is-open')) {
      return;
    }

    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Ouvrir le menu');
    button.classList.remove('is-open');
    panel.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  const openMenu = () => {
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Fermer le menu');
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
