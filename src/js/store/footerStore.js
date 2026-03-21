import { cloneFooterContent, defaultFooterContent } from '../data/footerContent.js';

const STORAGE_KEY = 'lhupc-footer-content';
const FOOTER_CONTENT_EVENT = 'lhupc:footer-content-updated';

function normalizeLogoUrl(url) {
  if (typeof url !== 'string') return url;
  if (!url.trim()) return url;
  if (url.startsWith('/')) return url;
  if (url.startsWith('src/')) return `/${url}`;
  if (url.startsWith('./src/')) return `/${url.slice(2)}`;
  if (url.startsWith('../src/')) return `/${url.slice(3)}`;
  return url;
}

function ensurePolicyLink(columns = []) {
  const safeColumns = Array.isArray(columns) ? columns.map((col) => ({ ...col, links: Array.isArray(col.links) ? [...col.links] : [] })) : [];
  const policyColumnIndex = safeColumns.findIndex((col) =>
    ['politique', 'policies', 'policy'].some((token) => String(col?.title || '').toLowerCase().includes(token))
  );

  const fallbackPolicyLink = cloneFooterContent(defaultFooterContent).columns[2]?.links?.[0] || {
    id: 'footer-link-policy-main',
    label: 'Policies',
    href: '/pages/politiques.html'
  };
  const policyLink = { id: 'footer-link-policy-main', label: fallbackPolicyLink.label, href: '/pages/politiques.html' };

  if (policyColumnIndex === -1) {
    safeColumns.push({
      id: 'footer-column-policies',
      title: cloneFooterContent(defaultFooterContent).columns[2]?.title || 'Policies',
      links: [policyLink]
    });
    return safeColumns;
  }

  const links = safeColumns[policyColumnIndex].links;
  const hasPolicyLink = links.some((link) => String(link?.href || '') === '/pages/politiques.html');
  if (!hasPolicyLink) {
    links.unshift(policyLink);
  }
  return safeColumns;
}

export function getFooterContent() {
  if (typeof window === 'undefined') {
    return cloneFooterContent(defaultFooterContent);
  }

  try {
    const savedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!savedValue) {
      return cloneFooterContent(defaultFooterContent);
    }

    const parsedValue = JSON.parse(savedValue);

    const merged = {
      brand: {
        ...cloneFooterContent(defaultFooterContent).brand,
        ...(parsedValue.brand || {})
      },
      contacts: {
        ...cloneFooterContent(defaultFooterContent).contacts,
        ...(parsedValue.contacts || {})
      },
      columns: ensurePolicyLink(
        Array.isArray(parsedValue.columns)
          ? parsedValue.columns
          : cloneFooterContent(defaultFooterContent).columns
      ),
      newsletter: {
        ...cloneFooterContent(defaultFooterContent).newsletter,
        ...(parsedValue.newsletter || {})
      },
      copyright:
        typeof parsedValue.copyright === 'string' && parsedValue.copyright.trim()
          ? parsedValue.copyright
          : cloneFooterContent(defaultFooterContent).copyright
    };

    // Migration : si des liens contiennent encore des ancres (#), on réinitialise aux nouvelles pages
    const hasLegacyAnchors =
      merged.columns?.some((col) =>
        Array.isArray(col.links) && col.links.some((l) => typeof l.href === 'string' && l.href.startsWith('#'))
      );

    if (hasLegacyAnchors) {
      return cloneFooterContent(defaultFooterContent);
    }

    merged.brand.logoUrl = normalizeLogoUrl(merged.brand.logoUrl);

    return merged;
  } catch (error) {
    console.warn('Footer store reset after read error:', error);
    return cloneFooterContent(defaultFooterContent);
  }
}

export function saveFooterContent(content) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(
    new CustomEvent(FOOTER_CONTENT_EVENT, {
      detail: cloneFooterContent(content)
    })
  );
}

export function resetFooterContent() {
  if (typeof window === 'undefined') {
    return cloneFooterContent(defaultFooterContent);
  }

  window.localStorage.removeItem(STORAGE_KEY);
  const resetValue = cloneFooterContent(defaultFooterContent);

  window.dispatchEvent(
    new CustomEvent(FOOTER_CONTENT_EVENT, {
      detail: resetValue
    })
  );

  return resetValue;
}

export function subscribeFooterContent(callback) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleInternalUpdate = (event) => {
    callback(cloneFooterContent(event.detail || getFooterContent()));
  };

  const handleStorageUpdate = (event) => {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    callback(getFooterContent());
  };

  window.addEventListener(FOOTER_CONTENT_EVENT, handleInternalUpdate);
  window.addEventListener('storage', handleStorageUpdate);

  return () => {
    window.removeEventListener(FOOTER_CONTENT_EVENT, handleInternalUpdate);
    window.removeEventListener('storage', handleStorageUpdate);
  };
}
