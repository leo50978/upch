import { Header, setupHeader } from './components/layout/header.js?v=20260318-9';
import { Footer } from './components/layout/footer.js?v=20260318-3';
import { getPublicNavigation, getPublicActions } from './data/navigation.js';
import { escapeHtml } from './utils/escapeHtml.js';

const gallery = [
  'PHOTOS/1.jpg',
  'PHOTOS/2.jpg',
  'PHOTOS/3.jpg',
  'PHOTOS/4.jpg',
  'PHOTOS/5.jpg',
  'PHOTOS/pexels-director-muuh-321947994-20101037.jpg',
  'PHOTOS/pexels-speakmediauganda-35305044.jpg'
];

function pickImage(index = 0) {
  const safeIndex = Number(index) % gallery.length;
  return escapeHtml(gallery[safeIndex]);
}

function LinksSection() {
  const nav = getPublicNavigation();
  const actions = getPublicActions();
  const items = [...nav, ...actions];

  const cards = items.map((item, idx) => {
    const label = escapeHtml(item.label);
    const href = escapeHtml(item.href || '#');
    const img = pickImage(idx);

    return `
      <a href="${href}" class="group relative overflow-hidden rounded-3xl border border-white/70 shadow-xl bg-white/90 backdrop-blur hover:-translate-y-1 transition-transform duration-200">
        <div class="h-48 w-full overflow-hidden">
          <img src="${img}" alt="${label}" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" decoding="async" />
        </div>
        <div class="p-5 flex items-start gap-3">
          <div class="p-3 rounded-2xl bg-gradient-to-br from-brandBlue/15 to-brandPink/20 text-brandDeep">
            <span data-lucide="link-2" class="lucide w-6 h-6"></span>
          </div>
          <div class="flex-1">
            <h3 class="font-display text-xl font-black text-[#4d4b7f]">${label}</h3>
            <p class="mt-1 font-sans text-sm text-[#7c67a2]">Decouvrir la page associee</p>
          </div>
          <div class="text-brandBlue">
            <span data-lucide="arrow-up-right" class="lucide w-6 h-6"></span>
          </div>
        </div>
      </a>
    `;
  }).join('');

  return `
    <section class="py-10 px-4 sm:px-6 lg:px-10">
      <div class="max-w-6xl mx-auto space-y-6">
        <header class="text-center space-y-2">
          <p class="font-display text-sm font-black uppercase tracking-[0.3em] text-[#7c86cb]">Navigation</p>
          <h1 class="font-display text-3xl sm:text-4xl font-black text-[#62a9f5]">Toutes les pages en un coup d oeil</h1>
          <p class="mx-auto max-w-3xl font-sans text-[#7c67a2]">Retrouvez ici l ensemble des liens presents dans le site, avec un apercu visuel pour vous orienter rapidement.</p>
        </header>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

export function renderLinksPage(root) {
  let destroyHeader = () => {};

  root.innerHTML = `
    ${Header()}
    <main class="page-shell">
      ${LinksSection()}
    </main>
    ${Footer()}
  `;

  destroyHeader = setupHeader(root);

  return () => {
    destroyHeader();
  };
}
