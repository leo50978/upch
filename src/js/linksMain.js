import { renderLinksPage } from './linksPage.js?v=20260318-5';
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

if (root) {
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
