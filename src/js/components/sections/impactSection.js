import { defaultImpactContent, defaultImpactContentFr } from '../../data/impactContent.js';
import { localizeContent } from '../../i18n/localize.js';
import { getImpactContent } from '../../store/impactStore.js';
import { getLanguage } from '../../store/languageStore.js';
import { escapeHtml } from '../../utils/escapeHtml.js';
import { resolveSitePath } from '../../utils/sitePath.js';

function renderImpactIcon(variant) {
  if (variant === 'communities') {
    return `<i class="lucide-icon" data-lucide="users-round" aria-hidden="true"></i>`;
  }

  if (variant === 'projects') {
    return `<i class="lucide-icon" data-lucide="layers" aria-hidden="true"></i>`;
  }

  if (variant === 'volunteers') {
    return `<i class="lucide-icon" data-lucide="hand-heart" aria-hidden="true"></i>`;
  }

  return `<i class="lucide-icon" data-lucide="baby" aria-hidden="true"></i>`;
}

function renderImpactCard(stat) {
  const value = escapeHtml(stat.value);
  const title = escapeHtml(stat.title);
  const description = escapeHtml(stat.description);
  const variant = escapeHtml(stat.variant || 'children');
  const imageUrl = escapeHtml(stat.imageUrl || 'PHOTOS/pexels-justebuka-20407104.jpg');
  const numericTarget = Number(String(stat.value).replace(/[^\d.]/g, '')) || 0;
  const suffix = escapeHtml(String(stat.value).replace(/[\d.,\s]/g, ''));
  const imageAltUrl = escapeHtml(stat.imageAltUrl || imageUrl);

  return `
    <article class="impact-card impact-card--${variant}">
      <div class="impact-card__media">
        <img class="impact-media impact-media--base" src="${imageUrl}" alt="${title}" loading="lazy" decoding="async" />
        <img class="impact-media impact-media--alt" src="${imageAltUrl}" alt="${title}" loading="lazy" decoding="async" />
      </div>
      <div class="impact-card__icon">${renderImpactIcon(stat.variant)}</div>
      <p class="impact-card__value" data-count-target="${numericTarget}" data-count-suffix="${suffix}">${value}</p>
      <h3 class="impact-card__title">${title}</h3>
      <p class="impact-card__description">${description}</p>
    </article>
  `;
}

function renderImpactTitle(title) {
  const safeTitle = escapeHtml(title);

  if (safeTitle.toLowerCase().includes('numbers')) {
    return safeTitle.replace(/numbers/i, '<span class="impact-section__title-accent">numbers</span>');
  }

  if (!safeTitle.toLowerCase().includes('chiffres')) {
    return safeTitle;
  }

  return safeTitle.replace(/chiffres/i, '<span class="impact-section__title-accent">chiffres</span>');
}

export function ImpactSection() {
  const locale = getLanguage();
  const impactContent = localizeContent(
    getImpactContent(),
    defaultImpactContent,
    defaultImpactContentFr,
    locale
  );
  const title = renderImpactTitle(impactContent.title);
  const description = escapeHtml(impactContent.description);
  const ctaLabel = escapeHtml(impactContent.ctaLabel);
  const ctaHref = escapeHtml(resolveSitePath(impactContent.ctaHref));

  return `
    <section id="impact" class="impact-section">
      <div class="impact-section__shell">
        <div class="impact-section__header">
          <h2 class="impact-section__title">
            <span class="section-rotator" data-animate-title>${title}</span>
          </h2>
          <p class="impact-section__description">${description}</p>
        </div>
        <div class="impact-section__grid">
          ${impactContent.stats.map((stat) => renderImpactCard(stat)).join('')}
        </div>
        <div class="impact-section__actions">
          <a class="impact-section__cta btn-shake" href="${ctaHref}">${ctaLabel}<i class="lucide-icon lucide-icon--inline" data-lucide="arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </section>
  `;
}
