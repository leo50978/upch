const STORAGE_KEY = 'lhupc-language';
const LANGUAGE_EVENT = 'lhupc:language-updated';

function normalizeLanguage(language) {
  return language === 'fr' ? 'fr' : 'en';
}

function detectBrowserLanguage() {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const candidates = [
    window.navigator.language,
    ...(Array.isArray(window.navigator.languages) ? window.navigator.languages : [])
  ]
    .filter(Boolean)
    .map((value) => String(value).toLowerCase());

  return candidates.some((value) => value.startsWith('fr')) ? 'fr' : 'en';
}

export function getLanguage() {
  if (typeof window === 'undefined') {
    return 'en';
  }

  try {
    const savedValue = window.localStorage.getItem(STORAGE_KEY);

    if (savedValue) {
      return normalizeLanguage(savedValue);
    }
  } catch (error) {
    console.warn('Language store read failed:', error);
  }

  return detectBrowserLanguage();
}

export function applyLanguageToDocument(language = getLanguage()) {
  if (typeof document === 'undefined') {
    return;
  }

  const locale = normalizeLanguage(language);
  document.documentElement.lang = locale;
  document.documentElement.setAttribute('data-language', locale);

  if (document.body) {
    document.body.setAttribute('data-language', locale);
  }
}

export function saveLanguage(language) {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const locale = normalizeLanguage(language);
  window.localStorage.setItem(STORAGE_KEY, locale);
  applyLanguageToDocument(locale);
  window.dispatchEvent(new CustomEvent(LANGUAGE_EVENT, { detail: locale }));
  return locale;
}

export function subscribeLanguage(callback) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleInternalUpdate = (event) => {
    const locale = normalizeLanguage(event.detail);
    applyLanguageToDocument(locale);
    callback(locale);
  };

  const handleStorageUpdate = (event) => {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    const locale = getLanguage();
    applyLanguageToDocument(locale);
    callback(locale);
  };

  window.addEventListener(LANGUAGE_EVENT, handleInternalUpdate);
  window.addEventListener('storage', handleStorageUpdate);

  return () => {
    window.removeEventListener(LANGUAGE_EVENT, handleInternalUpdate);
    window.removeEventListener('storage', handleStorageUpdate);
  };
}
