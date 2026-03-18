function formatCount(value, decimals = 0) {
  if (decimals > 0) {
    return value.toLocaleString('fr-FR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  return Math.floor(value).toLocaleString('fr-FR');
}

export function initCountAnimations(scope = document) {
  if (typeof window === 'undefined') return () => {};

  const counters = Array.from(scope.querySelectorAll('[data-count-target]'));
  if (!counters.length) return () => {};

  const animateCount = (el) => {
    if (el.dataset.countAnimated === 'true') return;

    const target = Number(el.dataset.countTarget || 0);
    const suffix = el.dataset.countSuffix || '';
    const prefix = el.dataset.countPrefix || '';
    const decimals = Number(el.dataset.countDecimals || 0);
    const duration = 1200;
    const start = performance.now();

    el.dataset.countAnimated = 'true';

    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      el.textContent = `${prefix}${formatCount(current, decimals)}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = `${prefix}${formatCount(target, decimals)}${suffix}`;
      }
    };

    window.requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}
