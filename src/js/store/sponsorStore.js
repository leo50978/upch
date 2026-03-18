import { cloneSponsorContent, defaultSponsorContent } from '../data/sponsorContent.js';

const STORAGE_KEY = 'lhupc-sponsor-content';
const SPONSOR_CONTENT_EVENT = 'lhupc:sponsor-content-updated';

export function getSponsorContent() {
  if (typeof window === 'undefined') {
    return cloneSponsorContent(defaultSponsorContent);
  }

  try {
    const savedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!savedValue) {
      return cloneSponsorContent(defaultSponsorContent);
    }

    const parsedValue = JSON.parse(savedValue);

    const merged = {
      title:
        typeof parsedValue.title === 'string' && parsedValue.title.trim()
          ? parsedValue.title
          : cloneSponsorContent(defaultSponsorContent).title,
      description:
        typeof parsedValue.description === 'string' && parsedValue.description.trim()
          ? parsedValue.description
          : cloneSponsorContent(defaultSponsorContent).description,
      leftCard: {
        ...cloneSponsorContent(defaultSponsorContent).leftCard,
        ...(parsedValue.leftCard || {})
      },
      rightCard: {
        ...cloneSponsorContent(defaultSponsorContent).rightCard,
        ...(parsedValue.rightCard || {})
      }
    };

    // Migration legacy: garde "7 ans" et remplace l ancienne photo par la nouvelle image par defaut.
    if (String(merged.leftCard.age || '').trim() === '7') {
      merged.leftCard.age = '7 ans';
    }

    if (
      !merged.leftCard.photoUrl ||
      String(merged.leftCard.photoUrl).trim() === 'PHOTOS/5.jpg'
    ) {
      merged.leftCard.photoUrl =
        cloneSponsorContent(defaultSponsorContent).leftCard.photoUrl;
    }

    return merged;
  } catch (error) {
    console.warn('Sponsor store reset after read error:', error);
    return cloneSponsorContent(defaultSponsorContent);
  }
}

export function saveSponsorContent(content) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(
    new CustomEvent(SPONSOR_CONTENT_EVENT, {
      detail: cloneSponsorContent(content)
    })
  );
}

export function resetSponsorContent() {
  if (typeof window === 'undefined') {
    return cloneSponsorContent(defaultSponsorContent);
  }

  window.localStorage.removeItem(STORAGE_KEY);
  const resetValue = cloneSponsorContent(defaultSponsorContent);

  window.dispatchEvent(
    new CustomEvent(SPONSOR_CONTENT_EVENT, {
      detail: resetValue
    })
  );

  return resetValue;
}

export function subscribeSponsorContent(callback) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleInternalUpdate = (event) => {
    callback(cloneSponsorContent(event.detail || getSponsorContent()));
  };

  const handleStorageUpdate = (event) => {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    callback(getSponsorContent());
  };

  window.addEventListener(SPONSOR_CONTENT_EVENT, handleInternalUpdate);
  window.addEventListener('storage', handleStorageUpdate);

  return () => {
    window.removeEventListener(SPONSOR_CONTENT_EVENT, handleInternalUpdate);
    window.removeEventListener('storage', handleStorageUpdate);
  };
}
