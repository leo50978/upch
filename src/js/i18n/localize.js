function isPlainObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

function cloneValue(value) {
  if (Array.isArray(value) || isPlainObject(value)) {
    return JSON.parse(JSON.stringify(value));
  }

  return value;
}

function buildReferenceMap(values = []) {
  const map = new Map();

  values.forEach((item, index) => {
    if (!isPlainObject(item)) {
      return;
    }

    const key = item.id || item.href || `${index}`;
    map.set(key, item);
  });

  return map;
}

function localizeArray(value, referenceEn, referenceFr, locale) {
  const source = Array.isArray(value)
    ? value
    : Array.isArray(locale === 'fr' ? referenceFr : referenceEn)
      ? locale === 'fr'
        ? referenceFr
        : referenceEn
      : [];

  const refEnMap = buildReferenceMap(referenceEn);
  const refFrMap = buildReferenceMap(referenceFr);

  return source.map((item, index) => {
    const key = isPlainObject(item) ? item.id || item.href || `${index}` : `${index}`;

    return localizeContent(
      item,
      refEnMap.get(key) ?? referenceEn?.[index],
      refFrMap.get(key) ?? referenceFr?.[index],
      locale
    );
  });
}

export function localizeContent(value, referenceEn, referenceFr, locale = 'en') {
  if (Array.isArray(value) || Array.isArray(referenceEn) || Array.isArray(referenceFr)) {
    return localizeArray(value, referenceEn, referenceFr, locale);
  }

  if (typeof value === 'string') {
    if (typeof referenceEn === 'string' && typeof referenceFr === 'string') {
      if (value === referenceEn || value === referenceFr) {
        return locale === 'fr' ? referenceFr : referenceEn;
      }
    }

    return value;
  }

  if (isPlainObject(value) || isPlainObject(referenceEn) || isPlainObject(referenceFr)) {
    const source =
      isPlainObject(value)
        ? value
        : cloneValue(locale === 'fr' ? referenceFr : referenceEn) || {};
    const result = {};
    const keys = new Set([
      ...Object.keys(source || {}),
      ...Object.keys(referenceEn || {}),
      ...Object.keys(referenceFr || {})
    ]);

    keys.forEach((key) => {
      const nextValue = source?.[key];
      const nextRefEn = referenceEn?.[key];
      const nextRefFr = referenceFr?.[key];

      if (typeof nextValue === 'undefined') {
        result[key] = cloneValue(locale === 'fr' ? nextRefFr : nextRefEn);
        return;
      }

      result[key] = localizeContent(nextValue, nextRefEn, nextRefFr, locale);
    });

    return result;
  }

  if (typeof value !== 'undefined') {
    return value;
  }

  return cloneValue(locale === 'fr' ? referenceFr : referenceEn);
}

export function pickLocalized(locale, english, french) {
  return locale === 'fr' ? french : english;
}
