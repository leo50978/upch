import { getHeaderContent } from '../store/headerStore.js';

export function getPublicNavigation() {
  return getHeaderContent().navigation;
}

export function getPublicActions() {
  return getHeaderContent().actions;
}
