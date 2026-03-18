import { cloneImpactContent, defaultImpactContent } from '../data/impactContent.js';

const STORAGE_KEY = 'lhupc-impact-content';
const IMPACT_CONTENT_EVENT = 'lhupc:impact-content-updated';

export function getImpactContent() {
  if (typeof window === 'undefined') {
    return cloneImpactContent(defaultImpactContent);
  }

  try {
    const savedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!savedValue) {
      return cloneImpactContent(defaultImpactContent);
    }

    const parsedValue = JSON.parse(savedValue);

    return {
      title:
        typeof parsedValue.title === 'string' && parsedValue.title.trim()
          ? parsedValue.title
          : cloneImpactContent(defaultImpactContent).title,
      description:
        typeof parsedValue.description === 'string' && parsedValue.description.trim()
          ? parsedValue.description
          : cloneImpactContent(defaultImpactContent).description,
      ctaLabel:
        typeof parsedValue.ctaLabel === 'string' && parsedValue.ctaLabel.trim()
          ? parsedValue.ctaLabel
          : cloneImpactContent(defaultImpactContent).ctaLabel,
      ctaHref:
        typeof parsedValue.ctaHref === 'string' && parsedValue.ctaHref.trim()
          ? parsedValue.ctaHref
          : cloneImpactContent(defaultImpactContent).ctaHref,
      stats: Array.isArray(parsedValue.stats)
        ? parsedValue.stats
        : cloneImpactContent(defaultImpactContent).stats
    };
  } catch (error) {
    console.warn('Impact store reset after read error:', error);
    return cloneImpactContent(defaultImpactContent);
  }
}

export function saveImpactContent(content) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(
    new CustomEvent(IMPACT_CONTENT_EVENT, {
      detail: cloneImpactContent(content)
    })
  );
}

export function resetImpactContent() {
  if (typeof window === 'undefined') {
    return cloneImpactContent(defaultImpactContent);
  }

  window.localStorage.removeItem(STORAGE_KEY);
  const resetValue = cloneImpactContent(defaultImpactContent);

  window.dispatchEvent(
    new CustomEvent(IMPACT_CONTENT_EVENT, {
      detail: resetValue
    })
  );

  return resetValue;
}

export function subscribeImpactContent(callback) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleInternalUpdate = (event) => {
    callback(cloneImpactContent(event.detail || getImpactContent()));
  };

  const handleStorageUpdate = (event) => {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    callback(getImpactContent());
  };

  window.addEventListener(IMPACT_CONTENT_EVENT, handleInternalUpdate);
  window.addEventListener('storage', handleStorageUpdate);

  return () => {
    window.removeEventListener(IMPACT_CONTENT_EVENT, handleInternalUpdate);
    window.removeEventListener('storage', handleStorageUpdate);
  };
}
