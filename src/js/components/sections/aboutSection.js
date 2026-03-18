import { getAboutContent } from '../../store/aboutStore.js';
import { escapeHtml } from '../../utils/escapeHtml.js';

function renderCardIcon(variant) {
  if (variant === 'programs') {
    return `<i class="lucide-icon" data-lucide="graduation-cap" aria-hidden="true"></i>`;
  }

  if (variant === 'help') {
    return `<i class="lucide-icon" data-lucide="helping-hand" aria-hidden="true"></i>`;
  }

  return `<i class="lucide-icon" data-lucide="heart-handshake" aria-hidden="true"></i>`;
}

function renderAboutCard(card) {
  const title = escapeHtml(card.title);
  const description = escapeHtml(card.description);
  const variant = escapeHtml(card.variant || 'mission');
  const imageUrl = escapeHtml(card.imageUrl || 'PHOTOS/1.jpg');

  return `
    <article class="about-card about-card--${variant}">
      <div class="about-card__icon">${renderCardIcon(card.variant)}</div>
      <h2 class="about-card__title">${title}</h2>
      <p class="about-card__description">${description}</p>
      <div class="about-card__media">
        <img src="${imageUrl}" alt="${title}" loading="lazy" decoding="async" />
      </div>
    </article>
  `;
}

export function AboutSection() {
  const aboutContent = getAboutContent();

  return `
    <section id="about" class="about-section">
      <div class="about-section__shell">
        <div class="about-section__header">
          <h2 class="about-section__title">
            <span class="section-rotator" data-animate-title>Ce que nous faisons</span>
          </h2>
        </div>
        <div class="about-section__grid">
          ${aboutContent.cards.map((card) => renderAboutCard(card)).join('')}
        </div>
      </div>
    </section>
  `;
}
