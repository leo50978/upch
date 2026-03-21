import { defaultHeroContent, defaultHeroContentFr } from '../../data/heroContent.js';
import { localizeContent, pickLocalized } from '../../i18n/localize.js';
import { getHeroContent } from '../../store/heroStore.js';
import { getLanguage } from '../../store/languageStore.js';
import { escapeHtml } from '../../utils/escapeHtml.js';
import { resolveSitePath } from '../../utils/sitePath.js';

export function HeroSection() {
  const locale = getLanguage();
  const heroContent = localizeContent(
    getHeroContent(),
    defaultHeroContent,
    defaultHeroContentFr,
    locale
  );
  const title = escapeHtml(heroContent.title);
  const description = escapeHtml(heroContent.description);
  const primaryLabel = escapeHtml(heroContent.primaryCta.label);
  const primaryHref = escapeHtml(resolveSitePath(heroContent.primaryCta.href));
  const secondaryLabel = escapeHtml(heroContent.secondaryCta.label);
  const secondaryHref = escapeHtml(resolveSitePath(heroContent.secondaryCta.href));
  const imageUrl = escapeHtml(heroContent.imageUrl || 'PHOTOS/1.jpg');
  const imageAlt = escapeHtml(
    pickLocalized(locale, 'Children supported by LHUPC / AED', 'Enfants accompagnés par LHUPC / AED')
  );
  const cycleTexts = Array.isArray(heroContent.cycleTexts) && heroContent.cycleTexts.length
    ? heroContent.cycleTexts
    : [heroContent.title];
  const dataTexts = escapeHtml(JSON.stringify(cycleTexts));

  return `
    <section id="hero" class="hero-section">
      <div class="hero-section__shell">
        <div class="hero-section__content">
          <div class="hero-section__copy">
            <h1 class="hero-section__title">
              <span class="hero-rotator" data-hero-rotator data-texts='${dataTexts}'>${title}</span>
            </h1>
            <p class="hero-section__description">
              ${description}
            </p>
            <div class="hero-section__actions">
              <a href="${primaryHref}" class="hero-cta hero-cta--blue">${primaryLabel}</a>
              <a href="${secondaryHref}" class="hero-cta hero-cta--pink btn-shake">${secondaryLabel}</a>
            </div>
          </div>

          <div class="hero-section__media" aria-hidden="true">
            <div class="hero-section__mist hero-section__mist--left"></div>
            <div class="hero-section__mist hero-section__mist--bottom"></div>
            <div class="hero-section__image">
              <img class="hero-photo" src="${imageUrl}" alt="${imageAlt}" fetchpriority="high" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function setupHeroSection(scope = document) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const target = scope.querySelector('[data-hero-rotator]');

  if (!target) {
    return () => {};
  }

  const texts = (() => {
    try {
      return JSON.parse(target.dataset.texts || '[]');
    } catch {
      return [];
    }
  })();

  if (!texts.length) {
    return () => {};
  }

  let destroyed = false;
  let timeouts = [];
  let index = 0;

  const clearTimers = () => {
    timeouts.forEach((t) => clearTimeout(t));
    timeouts = [];
  };

  const schedule = (fn, delay) => {
    const id = window.setTimeout(fn, delay);
    timeouts.push(id);
  };

  const typeText = (text, onDone) => {
    let i = 0;
    const total = text.length;

    const step = () => {
      if (destroyed) return;
      target.textContent = text.slice(0, i);

      if (i > total) {
        onDone();
        return;
      }

      const progress = total ? i / total : 1;
      let delay;
      if (progress < 0.3) delay = 22;
      else if (progress < 0.7) delay = 70;
      else if (progress < 0.9) delay = 95;
      else delay = 26;

      schedule(step, delay);
      i += 1;
    };

    step();
  };

  const eraseText = (onDone) => {
    const text = target.textContent || '';
    let i = text.length;

    const step = () => {
      if (destroyed) return;
      if (i <= 0) {
        onDone();
        return;
      }
      i -= 1;
      target.textContent = text.slice(0, i);
      schedule(step, 40);
    };

    step();
  };

  const cycle = () => {
    const current = texts[index % texts.length];
    typeText(current, () => {
      schedule(() => {
        eraseText(() => {
          index += 1;
          schedule(cycle, 200);
        });
      }, 4000);
    });
  };

  cycle();

  return () => {
    destroyed = true;
    clearTimers();
  };
}
