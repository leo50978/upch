import { cloneProjectsContent, defaultProjectsContent } from '../data/projectsContent.js';

const STORAGE_KEY = 'lhupc-projects-content';
const PROJECTS_CONTENT_EVENT = 'lhupc:projects-content-updated';

export function getProjectsContent() {
  if (typeof window === 'undefined') {
    return cloneProjectsContent(defaultProjectsContent);
  }

  try {
    const savedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!savedValue) {
      return cloneProjectsContent(defaultProjectsContent);
    }

    const parsedValue = JSON.parse(savedValue);

    return {
      title: typeof parsedValue.title === 'string' && parsedValue.title.trim()
        ? parsedValue.title
        : cloneProjectsContent(defaultProjectsContent).title,
      description: typeof parsedValue.description === 'string' && parsedValue.description.trim()
        ? parsedValue.description
        : cloneProjectsContent(defaultProjectsContent).description,
      cards: Array.isArray(parsedValue.cards)
        ? parsedValue.cards
        : cloneProjectsContent(defaultProjectsContent).cards
    };
  } catch (error) {
    console.warn('Projects store reset after read error:', error);
    return cloneProjectsContent(defaultProjectsContent);
  }
}

export function saveProjectsContent(content) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(
    new CustomEvent(PROJECTS_CONTENT_EVENT, {
      detail: cloneProjectsContent(content)
    })
  );
}

export function resetProjectsContent() {
  if (typeof window === 'undefined') {
    return cloneProjectsContent(defaultProjectsContent);
  }

  window.localStorage.removeItem(STORAGE_KEY);
  const resetValue = cloneProjectsContent(defaultProjectsContent);

  window.dispatchEvent(
    new CustomEvent(PROJECTS_CONTENT_EVENT, {
      detail: resetValue
    })
  );

  return resetValue;
}

export function subscribeProjectsContent(callback) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleInternalUpdate = (event) => {
    callback(cloneProjectsContent(event.detail || getProjectsContent()));
  };

  const handleStorageUpdate = (event) => {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    callback(getProjectsContent());
  };

  window.addEventListener(PROJECTS_CONTENT_EVENT, handleInternalUpdate);
  window.addEventListener('storage', handleStorageUpdate);

  return () => {
    window.removeEventListener(PROJECTS_CONTENT_EVENT, handleInternalUpdate);
    window.removeEventListener('storage', handleStorageUpdate);
  };
}
