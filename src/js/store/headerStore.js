import { cloneHeaderContent, defaultHeaderContent } from '../data/headerContent.js';

const STORAGE_KEY = 'lhupc-header-content';
const HEADER_CONTENT_EVENT = 'lhupc:header-content-updated';

function normalizeLogoUrl(url) {
  if (typeof url !== 'string') return url;
  if (!url.trim()) return url;
  if (url.startsWith('/')) return url;
  if (url.startsWith('src/')) return `/${url}`;
  if (url.startsWith('./src/')) return `/${url.slice(2)}`;
  if (url.startsWith('../src/')) return `/${url.slice(3)}`;
  return url;
}

function sanitizeNavigation(items = []) {
  return items.filter((item) => {
    const label = String(item?.label || '').toLowerCase();
    const href = String(item?.href || '').toLowerCase();
    return label !== 'politiques' && href !== '/pages/politiques.html';
  });
}

export function getHeaderContent() {
  if (typeof window === 'undefined') {
    return cloneHeaderContent(defaultHeaderContent);
  }

  try {
    const savedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!savedValue) {
      return cloneHeaderContent(defaultHeaderContent);
    }

    const parsedValue = JSON.parse(savedValue);

    const merged = {
      brand: {
        ...cloneHeaderContent(defaultHeaderContent).brand,
        ...(parsedValue.brand || {})
      },
      navigation: sanitizeNavigation(
        Array.isArray(parsedValue.navigation)
          ? parsedValue.navigation
          : cloneHeaderContent(defaultHeaderContent).navigation
      ),
      actions: Array.isArray(parsedValue.actions)
        ? parsedValue.actions
        : cloneHeaderContent(defaultHeaderContent).actions
    };

    if (!merged.navigation.length) {
      merged.navigation = sanitizeNavigation(cloneHeaderContent(defaultHeaderContent).navigation);
    }

    merged.brand.logoUrl = normalizeLogoUrl(merged.brand.logoUrl);

    // Migration : si des liens utilisent encore des ancres (#), on revient aux valeurs par défaut (nouvelles pages)
    const hasLegacyAnchors =
      merged.navigation.some((item) => typeof item.href === 'string' && item.href.startsWith('#')) ||
      merged.actions.some((item) => typeof item.href === 'string' && item.href.startsWith('#'));

    if (hasLegacyAnchors) {
      return cloneHeaderContent(defaultHeaderContent);
    }

    return merged;
  } catch (error) {
    console.warn('Header store reset after read error:', error);
    return cloneHeaderContent(defaultHeaderContent);
  }
}

export function saveHeaderContent(content) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(
    new CustomEvent(HEADER_CONTENT_EVENT, {
      detail: cloneHeaderContent(content)
    })
  );
}

export function resetHeaderContent() {
  if (typeof window === 'undefined') {
    return cloneHeaderContent(defaultHeaderContent);
  }

  window.localStorage.removeItem(STORAGE_KEY);
  const resetValue = cloneHeaderContent(defaultHeaderContent);

  window.dispatchEvent(
    new CustomEvent(HEADER_CONTENT_EVENT, {
      detail: resetValue
    })
  );

  return resetValue;
}

export function createItemId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

export function subscribeHeaderContent(callback) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleInternalUpdate = (event) => {
    callback(cloneHeaderContent(event.detail || getHeaderContent()));
  };

  const handleStorageUpdate = (event) => {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    callback(getHeaderContent());
  };

  window.addEventListener(HEADER_CONTENT_EVENT, handleInternalUpdate);
  window.addEventListener('storage', handleStorageUpdate);

  return () => {
    window.removeEventListener(HEADER_CONTENT_EVENT, handleInternalUpdate);
    window.removeEventListener('storage', handleStorageUpdate);
  };
}
