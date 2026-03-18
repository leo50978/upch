import { escapeHtml } from '../../utils/escapeHtml.js';

export function BrandLogo(brand = {}) {
  const title = escapeHtml(brand.title || 'LHUPC');
  const subtitle = escapeHtml(brand.subtitle || 'AIDONS LES ENFANTS DÉFAVORISÉS');
  const logoUrl = escapeHtml(brand.logoUrl || '/src/logo/ICON.png');
  const logoAlt = escapeHtml(brand.ariaLabel || brand.title || 'LHUPC');

  return `
    <div class="brand-logo">
      <div class="brand-logo__icon" aria-hidden="true">
        <img src="${logoUrl}" alt="${logoAlt}" width="654" height="620" decoding="async" />
      </div>
      <div class="brand-logo__text">
        <span class="brand-logo__title">${title}</span>
        <span class="brand-logo__subtitle">${subtitle}</span>
      </div>
    </div>
  `;
}
