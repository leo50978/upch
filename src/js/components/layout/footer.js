import { getFooterContent } from '../../store/footerStore.js';
import { escapeHtml } from '../../utils/escapeHtml.js';

function resolveAssetUrl(url) {
  if (!url) return './src/logo/ICON.png';
  if (/^(https?:|data:|blob:)/.test(url)) return url;
  if (!url.startsWith('/')) return url;
  if (typeof window === 'undefined') return url;
  return window.location.pathname.startsWith('/pages/') ? `..${url}` : `.${url}`;
}

function renderFooterColumn(column) {
  const title = escapeHtml(column.title);
  const links = Array.isArray(column.links) ? column.links : [];

  return `
    <div>
      <p class="site-footer__heading">${title}</p>
      ${links
        .map((link) => `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`)
        .join('')}
    </div>
  `;
}

export function Footer() {
  const footerContent = getFooterContent();
  const logoUrl = escapeHtml(resolveAssetUrl(footerContent.brand.logoUrl || '/src/logo/ICON.png'));
  const logoAlt = escapeHtml(footerContent.brand.title || 'LHUPC');

  return `
    <footer id="footer" class="site-footer">
      <div class="site-footer__inner">
        <div class="site-footer__brand">
          <div class="site-footer__logo" aria-hidden="true">
            <img src="${logoUrl}" alt="${logoAlt}" loading="lazy" decoding="async" />
          </div>
          <div>
            <p class="site-footer__title">${escapeHtml(footerContent.brand.title)}</p>
            <p class="site-footer__subtitle">${escapeHtml(footerContent.brand.subtitle)}</p>
          </div>
        </div>

        <div class="site-footer__contacts">
          <p>${escapeHtml(footerContent.contacts.addressLine1)}</p>
          <p>${escapeHtml(footerContent.contacts.addressLine2)}</p>
          <p>${escapeHtml(footerContent.contacts.email)}</p>
          <p>${escapeHtml(footerContent.contacts.phone)}</p>
        </div>

        <div class="site-footer__links">${footerContent.columns.map((column) => renderFooterColumn(column)).join('')}</div>

        <div class="site-footer__newsletter">
          <p class="site-footer__heading">${escapeHtml(footerContent.newsletter.title)}</p>
          <form class="site-footer__form">
            <input
              type="email"
              name="email"
              placeholder="${escapeHtml(footerContent.newsletter.placeholder)}"
              aria-label="Email"
            />
            <button type="button">${escapeHtml(footerContent.newsletter.buttonLabel)}</button>
          </form>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p>${escapeHtml(footerContent.copyright)}</p>
      </div>
    </footer>
  `;
}
