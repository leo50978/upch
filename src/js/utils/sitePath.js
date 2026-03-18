const GITHUB_PAGES_REPO = 'upch';

function isSpecialScheme(path = '') {
  return /^(https?:|mailto:|tel:|data:|blob:|javascript:)/i.test(path);
}

export function getSiteBasePath() {
  if (typeof window === 'undefined') {
    return '';
  }

  if (!window.location.hostname.endsWith('github.io')) {
    return '';
  }

  const repoPrefix = `/${GITHUB_PAGES_REPO}`;
  const pathname = window.location.pathname || '/';

  if (pathname === repoPrefix || pathname.startsWith(`${repoPrefix}/`)) {
    return repoPrefix;
  }

  return '';
}

export function stripSiteBasePath(pathname = '') {
  const basePath = getSiteBasePath();

  if (!basePath) {
    return pathname || '/';
  }

  if (pathname === basePath) {
    return '/';
  }

  if (pathname.startsWith(`${basePath}/`)) {
    return pathname.slice(basePath.length) || '/';
  }

  return pathname || '/';
}

export function resolveSitePath(path = '') {
  if (!path || path.startsWith('#') || isSpecialScheme(path)) {
    return path;
  }

  if (!path.startsWith('/')) {
    return path;
  }

  const basePath = getSiteBasePath();

  if (!basePath) {
    return path;
  }

  if (path === basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }

  return `${basePath}${path}`;
}
