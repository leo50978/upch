import { cloneAboutContent, defaultAboutContent } from '../data/aboutContent.js';

const STORAGE_KEY = 'lhupc-about-content';
const ABOUT_CONTENT_EVENT = 'lhupc:about-content-updated';

export function getAboutContent() {
  if (typeof window === 'undefined') {
    return cloneAboutContent(defaultAboutContent);
  }

  try {
    const savedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!savedValue) {
      return cloneAboutContent(defaultAboutContent);
    }

    const parsedValue = JSON.parse(savedValue);

    return {
      cards: Array.isArray(parsedValue.cards)
        ? parsedValue.cards
        : cloneAboutContent(defaultAboutContent).cards
    };
  } catch (error) {
    console.warn('About store reset after read error:', error);
    return cloneAboutContent(defaultAboutContent);
  }
}

export function saveAboutContent(content) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(
    new CustomEvent(ABOUT_CONTENT_EVENT, {
      detail: cloneAboutContent(content)
    })
  );
}

export function resetAboutContent() {
  if (typeof window === 'undefined') {
    return cloneAboutContent(defaultAboutContent);
  }

  window.localStorage.removeItem(STORAGE_KEY);
  const resetValue = cloneAboutContent(defaultAboutContent);

  window.dispatchEvent(
    new CustomEvent(ABOUT_CONTENT_EVENT, {
      detail: resetValue
    })
  );

  return resetValue;
}

export function subscribeAboutContent(callback) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleInternalUpdate = (event) => {
    callback(cloneAboutContent(event.detail || getAboutContent()));
  };

  const handleStorageUpdate = (event) => {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    callback(getAboutContent());
  };

  window.addEventListener(ABOUT_CONTENT_EVENT, handleInternalUpdate);
  window.addEventListener('storage', handleStorageUpdate);

  return () => {
    window.removeEventListener(ABOUT_CONTENT_EVENT, handleInternalUpdate);
    window.removeEventListener('storage', handleStorageUpdate);
  };
}
