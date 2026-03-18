import { cloneHeroContent, defaultHeroContent } from '../data/heroContent.js';

const STORAGE_KEY = 'lhupc-hero-content';
const HERO_CONTENT_EVENT = 'lhupc:hero-content-updated';

export function getHeroContent() {
  if (typeof window === 'undefined') {
    return cloneHeroContent(defaultHeroContent);
  }

  try {
    const savedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!savedValue) {
      return cloneHeroContent(defaultHeroContent);
    }

    const parsedValue = JSON.parse(savedValue);
    const merged = {
      ...cloneHeroContent(defaultHeroContent),
      ...parsedValue,
      primaryCta: {
        ...cloneHeroContent(defaultHeroContent).primaryCta,
        ...(parsedValue.primaryCta || {})
      },
      secondaryCta: {
        ...cloneHeroContent(defaultHeroContent).secondaryCta,
        ...(parsedValue.secondaryCta || {})
      },
      cycleTexts: Array.isArray(parsedValue.cycleTexts) && parsedValue.cycleTexts.length
        ? parsedValue.cycleTexts
        : cloneHeroContent(defaultHeroContent).cycleTexts
    };

    if (
      String(merged.primaryCta?.href || '').startsWith('#') ||
      String(merged.secondaryCta?.href || '').startsWith('#')
    ) {
      return cloneHeroContent(defaultHeroContent);
    }

    return merged;
  } catch (error) {
    console.warn('Hero store reset after read error:', error);
    return cloneHeroContent(defaultHeroContent);
  }
}

export function saveHeroContent(content) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(
    new CustomEvent(HERO_CONTENT_EVENT, {
      detail: cloneHeroContent(content)
    })
  );
}

export function resetHeroContent() {
  if (typeof window === 'undefined') {
    return cloneHeroContent(defaultHeroContent);
  }

  window.localStorage.removeItem(STORAGE_KEY);
  const resetValue = cloneHeroContent(defaultHeroContent);

  window.dispatchEvent(
    new CustomEvent(HERO_CONTENT_EVENT, {
      detail: resetValue
    })
  );

  return resetValue;
}

export function subscribeHeroContent(callback) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleInternalUpdate = (event) => {
    callback(cloneHeroContent(event.detail || getHeroContent()));
  };

  const handleStorageUpdate = (event) => {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    callback(getHeroContent());
  };

  window.addEventListener(HERO_CONTENT_EVENT, handleInternalUpdate);
  window.addEventListener('storage', handleStorageUpdate);

  return () => {
    window.removeEventListener(HERO_CONTENT_EVENT, handleInternalUpdate);
    window.removeEventListener('storage', handleStorageUpdate);
  };
}
