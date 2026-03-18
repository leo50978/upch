import { getProjectsContent } from '../../store/projectsStore.js';
import { escapeHtml } from '../../utils/escapeHtml.js';

function clampPercent(value) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return 0;
  }

  return Math.max(0, Math.min(100, number));
}

function getProjectTone(variant) {
  if (variant === 'learning') {
    return {
      cardClass: 'project-card--learning',
      ctaClass: 'project-card__cta--blue',
      progressClass: 'project-card__progress-bar--blue'
    };
  }

  if (variant === 'nutrition') {
    return {
      cardClass: 'project-card--nutrition',
      ctaClass: 'project-card__cta--pink',
      progressClass: 'project-card__progress-bar--gold'
    };
  }

  return {
    cardClass: 'project-card--school',
    ctaClass: 'project-card__cta--pink',
    progressClass: 'project-card__progress-bar--blue'
  };
}

function parseCurrencyCount(value) {
  const match = String(value || '').trim().match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (!match) return null;

  const target = Number(match[2].replace(/,/g, ''));
  if (!Number.isFinite(target)) return null;

  return {
    prefix: match[1] || '',
    suffix: match[3] || '',
    target
  };
}

function renderAnimatedCurrency(value) {
  const count = parseCurrencyCount(value);

  if (!count) {
    return escapeHtml(value);
  }

  return `<span data-count-target="${count.target}" data-count-prefix="${escapeHtml(count.prefix)}" data-count-suffix="${escapeHtml(count.suffix)}">${escapeHtml(value)}</span>`;
}

function renderProjectCard(card) {
  const tone = getProjectTone(card.variant);
  const kicker = escapeHtml(card.kicker);
  const title = escapeHtml(card.title);
  const description = escapeHtml(card.description);
  const amountRaised = renderAnimatedCurrency(card.amountRaised);
  const goalAmount = renderAnimatedCurrency(card.goalAmount);
  const ctaLabel = escapeHtml(card.ctaLabel);
  const ctaHref = escapeHtml(card.ctaHref);
  const progressPercent = clampPercent(card.progressPercent);
  const imageUrl = escapeHtml(card.imageUrl || 'PHOTOS/2.jpg');

  return `
    <article class="project-card ${tone.cardClass}">
      <p class="project-card__kicker">${kicker}</p>
      <div class="project-card__photo-shell">
        <img class="project-card__photo" src="${imageUrl}" alt="${title}" loading="lazy" />
      </div>
      <h3 class="project-card__title">${title}</h3>
      <p class="project-card__description">${description}</p>
      <p class="project-card__raised">Collecte : <strong>${amountRaised}</strong> / ${goalAmount}</p>
      <div class="project-card__progress" aria-label="Progression du financement">
        <span class="project-card__progress-bar ${tone.progressClass}" style="width: ${progressPercent}%;"></span>
      </div>
      <a class="project-card__cta ${tone.ctaClass} btn-shake" href="${ctaHref}">${ctaLabel}</a>
    </article>
  `;
}

export function ProjectsSection() {
  const projectsContent = getProjectsContent();
  const title = escapeHtml(projectsContent.title);
  const description = escapeHtml(projectsContent.description);

  return `
    <section id="projects" class="projects-section">
      <div class="projects-section__shell">
        <div class="projects-section__header">
          <h2 class="projects-section__title">
            <span class="section-rotator" data-animate-title>${title}</span>
          </h2>
          <p class="projects-section__description">${description}</p>
        </div>
        <div class="projects-section__grid">
          ${projectsContent.cards.map((card) => renderProjectCard(card)).join('')}
        </div>
      </div>
    </section>
  `;
}
