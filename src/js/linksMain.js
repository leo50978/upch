import { renderLinksPage } from './linksPage.js?v=20260318-3';
import { subscribeHeaderContent } from './store/headerStore.js';
import { subscribeFooterContent } from './store/footerStore.js';

const root = document.getElementById('links-app');

function applyLucideIcons(scope = document) {
  if (typeof window === 'undefined') {
    return;
  }

  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }
}

function showOpeningSplash() {
  if (typeof window === 'undefined') {
    return;
  }

  if (document.querySelector('.splash-overlay')) {
    return;
  }

  const overlay = document.createElement('div');
  overlay.className = 'splash-overlay';
  overlay.innerHTML = `
    <div class="splash-card">
      <img class="splash-logo" src="src/logo/ICON.png" alt="LHUPC" loading="lazy" decoding="async" />
      <p class="splash-quote">« Aidons les enfants défavorisés »</p>
      <div class="splash-loader"></div>
    </div>
  `;

  document.body.appendChild(overlay);

  window.setTimeout(() => {
    overlay.classList.add('is-hidden');
    window.setTimeout(() => {
      overlay.remove();
    }, 400);
  }, 3000);
}

if (root) {
  showOpeningSplash();
  let cleanup = renderLinksPage(root);
  applyLucideIcons(root);

  const rerender = () => {
    cleanup();
    cleanup = renderLinksPage(root);
    applyLucideIcons(root);
  };

  const unsubscribeHeader = subscribeHeaderContent(rerender);
  const unsubscribeFooter = subscribeFooterContent(rerender);

  window.addEventListener(
    'beforeunload',
    () => {
      cleanup();
      unsubscribeHeader();
      unsubscribeFooter();
    },
    { once: true }
  );
}
