import { applyPageMeta } from './i18n/pageMeta.js';
import { renderLinksPage } from './linksPage.js?v=20260318-7';
import { subscribeHeaderContent } from './store/headerStore.js';
import { subscribeFooterContent } from './store/footerStore.js';
import { applyLanguageToDocument, subscribeLanguage } from './store/languageStore.js';

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
  applyLanguageToDocument();
  applyPageMeta('links');
  let cleanup = renderLinksPage(root);
  applyLucideIcons(root);

  const rerender = () => {
    cleanup();
    cleanup = renderLinksPage(root);
    applyLucideIcons(root);
  };

  const unsubscribeHeader = subscribeHeaderContent(rerender);
  const unsubscribeFooter = subscribeFooterContent(rerender);
  const unsubscribeLanguage = subscribeLanguage((locale) => {
    applyPageMeta('links', locale);
    rerender();
  });

  window.addEventListener(
    'beforeunload',
    () => {
      cleanup();
      unsubscribeHeader();
      unsubscribeFooter();
      unsubscribeLanguage();
    },
    { once: true }
  );
}
