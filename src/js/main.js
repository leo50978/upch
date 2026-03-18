import { subscribeAboutContent } from './store/aboutStore.js';
import { renderApp } from './app.js?v=20260318-11';
import { subscribeFooterContent } from './store/footerStore.js';
import { subscribeImpactContent } from './store/impactStore.js';
import { subscribeHeroContent } from './store/heroStore.js';
import { subscribeHeaderContent } from './store/headerStore.js';
import { subscribeProjectsContent } from './store/projectsStore.js';
import { subscribeSponsorContent } from './store/sponsorStore.js';
import { initCountAnimations } from './utils/countAnimation.js';

const root = document.getElementById('app');

function applyLucideIcons(scope = document) {
  if (typeof window === 'undefined') {
    return;
  }

  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }
}

function initSectionTitleAnimations(scope = document) {
  if (typeof window === 'undefined') return () => {};

  const elements = Array.from(scope.querySelectorAll('[data-animate-title]'));
  if (!elements.length) return () => {};

  const typeOnce = (el) => {
    const text = el.textContent || '';
    const originalHeight = el.offsetHeight || 0;
    el.textContent = '';
    el.style.minHeight = `${originalHeight || 28}px`;

    let i = 0;
    const total = text.length;

    const step = () => {
      el.textContent = text.slice(0, i);

      if (i > total) return;

      const progress = total ? i / total : 1;
      let delay;
      if (progress < 0.3) delay = 22;
      else if (progress < 0.7) delay = 70;
      else if (progress < 0.9) delay = 95;
      else delay = 26;

      i += 1;
      window.setTimeout(step, delay);
    };

    step();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typeOnce(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}

function showOpeningSplash() {
  if (typeof window === 'undefined') {
    return;
  }

  const overlay = document.querySelector('[data-opening-splash]');

  if (!overlay) {
    document.body.classList.remove('opening-active');
    return;
  }

  window.setTimeout(() => {
    overlay.classList.add('is-hidden');
    window.setTimeout(() => {
      overlay.remove();
      document.body.classList.remove('opening-active');
    }, 400);
  }, 2100);
}

if (root) {
  showOpeningSplash();
  let cleanup = renderApp(root);
  applyLucideIcons(root);
  let teardownTitles = initSectionTitleAnimations(root);
  let teardownCounters = initCountAnimations(root);
  const rerenderPage = () => {
    cleanup();
    teardownTitles();
    teardownCounters();
    cleanup = renderApp(root);
    applyLucideIcons(root);
    teardownTitles = initSectionTitleAnimations(root);
    teardownCounters = initCountAnimations(root);
  };

  const unsubscribeHeader = subscribeHeaderContent(rerenderPage);
  const unsubscribeHero = subscribeHeroContent(rerenderPage);
  const unsubscribeAbout = subscribeAboutContent(rerenderPage);
  const unsubscribeFooter = subscribeFooterContent(rerenderPage);
  const unsubscribeImpact = subscribeImpactContent(rerenderPage);
  const unsubscribeProjects = subscribeProjectsContent(rerenderPage);
  const unsubscribeSponsor = subscribeSponsorContent(rerenderPage);

  window.addEventListener(
    'beforeunload',
    () => {
      cleanup();
      unsubscribeHeader();
      unsubscribeHero();
      unsubscribeAbout();
      unsubscribeFooter();
      unsubscribeImpact();
      unsubscribeProjects();
      unsubscribeSponsor();
    },
    { once: true }
  );
}
