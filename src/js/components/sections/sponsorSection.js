import { getSponsorContent } from '../../store/sponsorStore.js';
import { escapeHtml } from '../../utils/escapeHtml.js';

function renderAccentTitle(title) {
  const safeTitle = escapeHtml(title);

  if (!safeTitle.includes('mettre fin à la pauvreté')) {
    return safeTitle;
  }

  return safeTitle.replace('mettre fin à la pauvreté', '<span class="sponsor-section__title-accent">mettre fin à la pauvreté</span>');
}

function renderLeftCard(leftCard) {
  const name = escapeHtml(leftCard.name);
  const age = escapeHtml(leftCard.age);
  const location = escapeHtml(leftCard.location);
  const flag = escapeHtml(leftCard.flagEmoji || '');
  const primaryLabel = escapeHtml(leftCard.primaryCta.label);
  const primaryHref = escapeHtml(leftCard.primaryCta.href);
  const secondaryLabel = escapeHtml(leftCard.secondaryCta.label);
  const secondaryHref = escapeHtml(leftCard.secondaryCta.href);
  const photoUrl = escapeHtml(leftCard.photoUrl || 'PHOTOS/5.jpg');

  return `
    <article class="sponsor-card sponsor-card--profile">
      <div class="sponsor-card__profile">
        <div class="sponsor-card__photo-shell" aria-hidden="true">
          <img class="sponsor-card__photo" src="${photoUrl}" alt="${name}" loading="lazy" decoding="async" />
        </div>
        <div class="sponsor-card__profile-info">
          <h3>${name}, ${age}</h3>
          <p class="sponsor-card__location">${flag} ${location}</p>
        </div>
      </div>
      <div class="sponsor-card__body">
        ${leftCard.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
      </div>
      <div class="sponsor-card__actions">
        <a class="sponsor-card__cta sponsor-card__cta--blue btn-shake" href="${primaryHref}">${primaryLabel}</a>
        <a class="sponsor-card__cta sponsor-card__cta--pink" href="${secondaryHref}">${secondaryLabel}</a>
      </div>
    </article>
  `;
}

function renderRightCard(rightCard) {
  const title = escapeHtml(rightCard.title);
  const description = escapeHtml(rightCard.description);
  const videoTitle = escapeHtml(rightCard.videoTitle);
  const videoHref = escapeHtml(rightCard.videoHref);
  const videoLabel = escapeHtml(rightCard.videoCtaLabel);

  return `
    <article class="sponsor-card sponsor-card--video">
      <div class="sponsor-card__body">
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
      <div class="sponsor-card__media">
        <div class="sponsor-card__media-header">${videoTitle}</div>
        <div class="sponsor-card__media-frame">
          <button class="sponsor-card__play" type="button" aria-label="${videoLabel}">
            <i class="lucide-icon" data-lucide="play" aria-hidden="true"></i>
          </button>
        </div>
        <a class="sponsor-card__media-link" href="${videoHref}">${videoLabel}</a>
      </div>
    </article>
  `;
}

export function SponsorSection() {
  const sponsorContent = getSponsorContent();
  const title = renderAccentTitle(sponsorContent.title);
  const description = escapeHtml(sponsorContent.description);

  return `
    <section id="sponsor" class="sponsor-section">
      <div class="sponsor-section__shell">
        <div class="sponsor-section__header">
          <h2 class="sponsor-section__title">
            <span class="section-rotator" data-animate-title>${title}</span>
          </h2>
          <p class="sponsor-section__description">${description}</p>
        </div>
        <div class="sponsor-section__grid">
          ${renderLeftCard(sponsorContent.leftCard)}
          ${renderRightCard(sponsorContent.rightCard)}
        </div>
      </div>
    </section>
  `;
}
