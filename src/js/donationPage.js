import { Header, setupHeader } from './components/layout/header.js?v=20260318-11';
import { Footer } from './components/layout/footer.js?v=20260318-4';
import { initCountAnimations } from './utils/countAnimation.js';

const WISE_PAYMENT_URL = 'https://wise.com/';

const IMAGES = {
  hero: '../PHOTOS/pexels-director-muuh-321947994-20101037.jpg',
  classroom: '../PHOTOS/2.jpg',
  care: '../PHOTOS/4.jpg',
  workshop: '../PHOTOS/pexels-speakmediauganda-35305044.jpg'
};

const bodyClass = 'font-sans text-base leading-relaxed text-[#7c67a2]';
const smallBodyClass = 'font-sans text-sm leading-relaxed text-[#726f9b]';
const eyebrowClass = 'font-display text-xs font-black uppercase tracking-[0.24em] text-[#7c86cb]';
const overlineBlueClass = 'font-display text-xs font-black uppercase tracking-[0.24em] text-brandBlue';
const sectionTitleClass = 'font-display text-3xl font-black leading-[0.92] text-brandDeep sm:text-5xl';
const gradientTitleClass =
  'bg-gradient-to-r from-brandBlue via-brandDeep to-brandPink bg-clip-text text-transparent';
const primaryButtonClass =
  'btn-shake inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ff50d3] via-[#ff2fbf] to-[#d60ab9] px-5 py-3 text-center font-display text-sm font-black text-white shadow-lg shadow-pink-200/50 transition duration-200 hover:-translate-y-0.5';
const secondaryButtonClass =
  'inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-brandBlue/20 bg-white px-5 py-3 text-center font-display text-sm font-black text-brandDeep shadow-lg shadow-slate-100 transition duration-200 hover:-translate-y-0.5';

function renderMetricCard(value, label, text, prefix = '', suffix = '') {
  return `
    <article class="rounded-[1.75rem] border border-white/80 bg-white p-6 shadow-xl shadow-slate-100">
      <p class="font-display text-4xl font-black text-brandDeep">
        <span data-count-target="${value}" data-count-prefix="${prefix}" data-count-suffix="${suffix}">${prefix}${value}${suffix}</span>
      </p>
      <p class="mt-2 font-display text-sm font-black uppercase tracking-[0.24em] text-[#7c86cb]">${label}</p>
      <p class="mt-4 ${smallBodyClass}">${text}</p>
    </article>
  `;
}

function renderUseCard(icon, title, text) {
  return `
    <article class="rounded-[1.75rem] border border-white/80 bg-white p-5 shadow-lg shadow-slate-100">
      <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brandBlue/10 text-brandBlue">
        <span data-lucide="${icon}" class="lucide h-6 w-6"></span>
      </div>
      <h3 class="mt-5 font-display text-xl font-black text-brandDeep">${title}</h3>
      <p class="mt-3 ${smallBodyClass}">${text}</p>
    </article>
  `;
}

function renderStep(step, index, total) {
  return `
    <article class="relative rounded-[1.75rem] border border-white/80 bg-white p-5 shadow-lg shadow-slate-100">
      <div class="absolute left-8 top-16 hidden h-[calc(100%-4.5rem)] w-px bg-slate-100 sm:block ${index === total - 1 ? 'opacity-0' : ''}"></div>
      <div class="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div class="relative z-10 shrink-0 self-start">
          <div class="inline-flex h-8 w-8 items-center justify-center text-brandBlue">
            <span data-lucide="${step.icon}" class="lucide h-5 w-5"></span>
          </div>
        </div>
        <div>
          <p class="font-display text-xs font-black uppercase tracking-[0.14em] text-[#7c86cb]">${step.kicker}</p>
          <h3 class="font-display text-xl font-black text-brandDeep">${step.title}</h3>
          <p class="mt-3 ${smallBodyClass}">${step.text}</p>
        </div>
      </div>
    </article>
  `;
}

function renderPage() {
  const steps = [
    {
      kicker: 'Etape 01',
      icon: 'receipt',
      title: 'Choisir le montant',
      text: 'Le donateur prepare un montant ponctuel ou plus genereux selon l urgence, puis retrouve sur la page un rappel simple de son impact.'
    },
    {
      kicker: 'Etape 02',
      icon: 'mail',
      title: 'Basculer vers Wise',
      text: 'Le bouton principal ouvre Wise dans un nouvel onglet pour finaliser le paiement dans un environnement connu et rassurant.'
    },
    {
      kicker: 'Etape 03',
      icon: 'badge-check',
      title: 'Confirmer et suivre',
      text: 'Apres validation, nous pouvons retrouver le don plus facilement si le nom ou l email du donateur est bien renseigne dans la reference.'
    }
  ];

  return `
    ${Header()}
    <main style="padding-top: 7rem; padding-bottom: 2.5rem;">
      <section class="px-4 py-10 sm:px-6 lg:px-10" style="background: linear-gradient(135deg, #fff8fc 0%, #eef6ff 56%, #ffffff 100%);">
        <div class="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div class="space-y-6">
            <div class="space-y-3">
              <p class="${eyebrowClass}">Faire un don via Wise</p>
              <h1 class="${sectionTitleClass} ${gradientTitleClass}">Une page de don claire, rassurante et alignee avec l univers du site.</h1>
              <p class="max-w-2xl ${bodyClass}">
                Votre soutien finance des actions concretes: kits scolaires, appui alimentaire, soins de base et accompagnement des enfants vulnerables. Le paiement final s effectue sur Wise, dans un nouvel onglet.
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-3">
              ${renderMetricCard(15, 'USD utiles', 'Peut contribuer a des fournitures de base pour un enfant.', '$')}
              ${renderMetricCard(35, 'USD solidaires', 'Peut soutenir un appui plus complet pour une famille.', '$')}
              ${renderMetricCard(120, 'USD renforces', 'Peut aider a financer une reponse plus large sur le terrain.', '$')}
            </div>

            <div class="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl shadow-slate-100">
              <div class="relative h-[22rem] w-full overflow-hidden">
                <img src="${IMAGES.hero}" alt="Enfant accompagne par LHUPC" class="h-full w-full object-cover" loading="eager" decoding="async" />
                <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent px-6 py-5">
                  <p class="font-display text-sm font-black uppercase tracking-[0.24em] text-white/80">Chaque don soutient une action visible</p>
                  <p class="mt-1 font-display text-xl font-black text-white">Education, accompagnement et soins de proximite</p>
                </div>
              </div>
            </div>
          </div>

          <aside class="rounded-[2rem] border border-white/90 bg-white p-7 shadow-2xl shadow-slate-100">
            <div class="flex items-center justify-between gap-3">
              <div>
                <p class="${overlineBlueClass}">Paiement</p>
                <h2 class="mt-2 font-display text-2xl font-black text-brandDeep">Finaliser votre don avec Wise</h2>
              </div>
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brandBlue/10 text-brandBlue">
                <span data-lucide="heart" class="lucide h-6 w-6"></span>
              </div>
            </div>

            <p class="mt-4 ${smallBodyClass}">
              Choisissez un montant, laissez une reference si vous le souhaitez, puis ouvrez Wise pour terminer le don.
            </p>

            <div class="mt-6 space-y-3">
              <p class="${eyebrowClass}">Montants conseilles</p>
              <div class="grid gap-3 sm:grid-cols-2">
                <button type="button" class="donation-amount-option rounded-full border border-brandBlue/20 bg-slate-50 px-4 py-3 text-left font-display text-sm font-black text-brandDeep shadow-sm shadow-slate-100" data-amount="15">$15</button>
                <button type="button" class="donation-amount-option rounded-full border border-brandBlue/20 bg-slate-50 px-4 py-3 text-left font-display text-sm font-black text-brandDeep shadow-sm shadow-slate-100" data-amount="35">$35</button>
                <button type="button" class="donation-amount-option rounded-full border border-brandBlue/20 bg-slate-50 px-4 py-3 text-left font-display text-sm font-black text-brandDeep shadow-sm shadow-slate-100" data-amount="60">$60</button>
                <button type="button" class="donation-amount-option rounded-full border border-brandBlue/20 bg-slate-50 px-4 py-3 text-left font-display text-sm font-black text-brandDeep shadow-sm shadow-slate-100" data-amount="120">$120</button>
              </div>
            </div>

            <div class="mt-6 space-y-3">
              <label class="block">
                <span class="${eyebrowClass}">Montant libre (USD)</span>
                <input data-custom-amount type="number" min="1" step="1" placeholder="Ex. 75" class="mt-2 w-full rounded-full border border-slate-100 bg-slate-50 px-4 py-3 font-sans text-sm text-brandDeep" />
              </label>
              <label class="block">
                <span class="${eyebrowClass}">Nom du donateur</span>
                <input type="text" placeholder="Votre nom ou votre organisation" class="mt-2 w-full rounded-full border border-slate-100 bg-slate-50 px-4 py-3 font-sans text-sm text-brandDeep" />
              </label>
              <label class="block">
                <span class="${eyebrowClass}">Email</span>
                <input type="email" placeholder="vous@exemple.com" class="mt-2 w-full rounded-full border border-slate-100 bg-slate-50 px-4 py-3 font-sans text-sm text-brandDeep" />
              </label>
            </div>

            <div class="mt-6 rounded-[1.75rem] p-6 shadow-xl shadow-slate-100" style="background: linear-gradient(135deg, #f7fbff 0%, #fff3fb 100%);">
              <p class="${overlineBlueClass}">Resume du don</p>
              <p class="mt-3 font-display text-3xl font-black text-brandDeep"><span data-selected-amount>$35</span></p>
              <p class="mt-3 ${smallBodyClass}">
                Le paiement final sera lance sur Wise. Vous pourrez verifier la devise et la reference avant confirmation.
              </p>
            </div>

            <div class="mt-6 flex flex-col gap-3">
              <a data-wise-link href="${WISE_PAYMENT_URL}" target="_blank" rel="noreferrer" class="${primaryButtonClass}">
                Continuer sur Wise
                <span data-lucide="arrow-right" class="lucide h-4 w-4"></span>
              </a>
              <a href="mailto:dons@lhupc.org" class="${secondaryButtonClass}">
                Recevoir de l aide avant le paiement
                <span data-lucide="mail" class="lucide h-4 w-4"></span>
              </a>
            </div>

            <ul class="mt-6 space-y-3">
              <li class="flex items-center gap-3 ${smallBodyClass}">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brandBlue/10 text-brandBlue">
                  <span data-lucide="lock" class="lucide h-4 w-4"></span>
                </span>
                Le paiement final se fait sur Wise.
              </li>
              <li class="flex items-center gap-3 ${smallBodyClass}">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brandBlue/10 text-brandBlue">
                  <span data-lucide="receipt" class="lucide h-4 w-4"></span>
                </span>
                Une reference claire aide notre suivi interne.
              </li>
              <li class="flex items-center gap-3 ${smallBodyClass}">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brandBlue/10 text-brandBlue">
                  <span data-lucide="badge-check" class="lucide h-4 w-4"></span>
                </span>
                Le formulaire reste volontairement simple pour aller a l essentiel.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section class="px-4 py-10 sm:px-6 lg:px-10" style="background: linear-gradient(135deg, #ffffff 0%, #f2f8ff 100%);">
        <div class="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <div class="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl shadow-slate-100">
            <div class="relative h-[22rem] w-full overflow-hidden">
              <img src="${IMAGES.classroom}" alt="Salle de classe soutenue par les dons" class="h-full w-full object-cover" loading="lazy" decoding="async" />
              <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent px-6 py-5">
                <p class="font-display text-sm font-black uppercase tracking-[0.24em] text-white/80">Ce que le don rend possible</p>
                <p class="mt-1 font-display text-xl font-black text-white">Des reponses simples, visibles et utiles</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="${overlineBlueClass}">Usage des dons</p>
              <h2 class="${sectionTitleClass}">Le don doit rester lisible, concret et relie a des besoins clairs.</h2>
              <p class="max-w-2xl ${bodyClass}">
                Nous presentons ici trois usages concrets qui parlent immediatement a un donateur: education, soutien alimentaire et accompagnement de proximite.
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-3">
              ${renderUseCard('book-open', 'Scolarite', 'Fournitures, appui scolaire et presence reguliere pour que l enfant reste dans son parcours.')}
              ${renderUseCard('apple', 'Nutrition', 'Aide alimentaire de proximite lorsque les familles traversent une phase plus fragile.')}
              ${renderUseCard('heart-pulse', 'Sante', 'Orientation, soins de base et gestes simples pour proteger les enfants au quotidien.')}
            </div>
          </div>
        </div>
      </section>

      <section class="px-4 py-10 sm:px-6 lg:px-10" style="background: linear-gradient(135deg, #f5f9ff 0%, #fff9fc 100%);">
        <div class="mx-auto w-full max-w-5xl space-y-6">
          <div class="space-y-3 text-center">
            <p class="${overlineBlueClass}">Parcours Wise</p>
            <h2 class="${sectionTitleClass}">Une experience de don courte, compréhensible et sans friction inutile.</h2>
            <p class="mx-auto max-w-3xl ${bodyClass}">
              Le role de cette page est de preparer le donateur avant l ouverture de Wise, avec juste ce qu il faut d informations et de reassurance.
            </p>
          </div>
          <div class="grid gap-4 md:grid-cols-2">
            ${steps.map((step, index) => renderStep(step, index, steps.length)).join('')}
          </div>
        </div>
      </section>

      <section class="px-4 py-10 sm:px-6 lg:px-10" style="background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);">
        <div class="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div class="space-y-6">
            <div class="space-y-3">
              <p class="${eyebrowClass}">Confiance et clarte</p>
              <h2 class="${sectionTitleClass}">Pourquoi une page Wise dediee peut rassurer davantage.</h2>
              <p class="max-w-2xl ${bodyClass}">
                Cette page clarifie l usage du don, prepare le montant et explique le parcours avant la redirection. Cela evite au donateur une sensation de rupture trop forte.
              </p>
            </div>
            <div class="grid gap-4 sm:grid-cols-3">
              ${renderUseCard('lock', 'Paiement externe', 'Wise gere la phase finale de paiement dans son propre environnement.')}
              ${renderUseCard('file-text', 'Reference claire', 'Le donateur peut arriver sur Wise avec deja en tete le montant et la logique du geste.')}
              ${renderUseCard('bar-chart-3', 'Impact explique', 'Le site garde le lien entre le montant, le besoin et le resultat attendu.')}
            </div>
          </div>

          <aside class="rounded-[2rem] border border-white/80 bg-white p-7 shadow-2xl shadow-slate-100">
            <p class="${overlineBlueClass}">Questions rapides</p>
            <div class="mt-5 space-y-5">
              <div>
                <h3 class="font-display text-xl font-black text-brandDeep">Le don est-il debite sur ce site ?</h3>
                <p class="mt-2 ${smallBodyClass}">Non. Cette page prepare le don puis Wise prend le relais pour le paiement final.</p>
              </div>
              <div>
                <h3 class="font-display text-xl font-black text-brandDeep">Puis-je choisir un autre montant ?</h3>
                <p class="mt-2 ${smallBodyClass}">Oui. Un champ libre permet de preparer un montant personnalise avant d ouvrir Wise.</p>
              </div>
              <div>
                <h3 class="font-display text-xl font-black text-brandDeep">Et si j ai besoin d aide ?</h3>
                <p class="mt-2 ${smallBodyClass}">Un contact email reste visible pour accompagner un donateur avant ou apres le paiement.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section class="px-4 py-10 sm:px-6 lg:px-10" style="background: linear-gradient(135deg, #fef7fb 0%, #eef5ff 100%);">
        <div class="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <div class="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl shadow-slate-100">
            <div class="relative h-[22rem] w-full overflow-hidden">
              <img src="${IMAGES.workshop}" alt="Equipe locale en action" class="h-full w-full object-cover" loading="lazy" decoding="async" />
              <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent px-6 py-5">
                <p class="font-display text-sm font-black uppercase tracking-[0.24em] text-white/80">Merci pour votre confiance</p>
                <p class="mt-1 font-display text-xl font-black text-white">Chaque geste peut nourrir une action reelle</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="${overlineBlueClass}">Derniere etape</p>
              <h2 class="${sectionTitleClass}">Vous etes pret a donner ? Nous vous emmenons maintenant vers Wise.</h2>
              <p class="max-w-2xl ${bodyClass}">
                Le site garde ici son role editorial: expliquer, rassurer et orienter. Le paiement, lui, continue sur Wise pour une experience plus claire.
              </p>
            </div>
            <div class="flex flex-col gap-3">
              <a data-wise-link-secondary href="${WISE_PAYMENT_URL}" target="_blank" rel="noreferrer" class="${primaryButtonClass}">
                Ouvrir Wise pour faire le don
                <span data-lucide="arrow-right" class="lucide h-4 w-4"></span>
              </a>
              <a href="../pages/s-impliquer.html" class="${secondaryButtonClass}">
                Decouvrir d autres manieres d agir
                <span data-lucide="heart-pulse" class="lucide h-4 w-4"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    ${Footer()}
  `;
}

function updateAmountUI(scope, amount) {
  const safeAmount = Number(amount) > 0 ? Number(amount) : 35;
  const label = `$${safeAmount}`;
  const amountNode = scope.querySelector('[data-selected-amount]');
  const links = scope.querySelectorAll('[data-wise-link], [data-wise-link-secondary]');
  const options = scope.querySelectorAll('[data-amount]');

  if (amountNode) {
    amountNode.textContent = label;
  }

  links.forEach((link) => {
    link.dataset.amount = String(safeAmount);
    const iconMarkup = link.innerHTML.includes('arrow-right')
      ? '<span data-lucide="arrow-right" class="lucide h-4 w-4"></span>'
      : '';
    if (link.hasAttribute('data-wise-link')) {
      link.innerHTML = `Continuer sur Wise - ${label} ${iconMarkup}`.trim();
    } else {
      link.innerHTML = `Ouvrir Wise pour faire le don - ${label} ${iconMarkup}`.trim();
    }
  });

  options.forEach((option) => {
    const isActive = Number(option.dataset.amount) === safeAmount;
    option.style.background = isActive ? 'linear-gradient(135deg, #eef6ff 0%, #fff3fb 100%)' : '';
    option.style.borderColor = isActive ? '#62a9f5' : '';
    option.style.boxShadow = isActive ? '0 18px 32px -24px rgba(98, 169, 245, 0.7)' : '';
  });

  window.lucide?.createIcons?.();
}

function setupDonationInteractions(scope) {
  const customAmountInput = scope.querySelector('[data-custom-amount]');
  const amountOptions = scope.querySelectorAll('[data-amount]');

  updateAmountUI(scope, 35);

  amountOptions.forEach((option) => {
    option.addEventListener('click', () => {
      const amount = Number(option.dataset.amount || 35);
      if (customAmountInput) {
        customAmountInput.value = '';
      }
      updateAmountUI(scope, amount);
    });
  });

  customAmountInput?.addEventListener('input', () => {
    const amount = Number(customAmountInput.value || 35);
    updateAmountUI(scope, amount);
  });
}

function mountDonationPage() {
  const app = document.getElementById('donation-app');

  if (!app) {
    return;
  }

  app.innerHTML = renderPage();
  setupHeader(app);
  setupDonationInteractions(app);
  initCountAnimations(app);
  window.lucide?.createIcons?.();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountDonationPage, { once: true });
} else {
  mountDonationPage();
}
