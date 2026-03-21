import { Header, setupHeader } from './components/layout/header.js?v=20260318-11';
import { Footer } from './components/layout/footer.js?v=20260318-4';
import { applyPageMeta } from './i18n/pageMeta.js';
import { pickLocalized } from './i18n/localize.js';
import { subscribeFooterContent } from './store/footerStore.js';
import { subscribeHeaderContent } from './store/headerStore.js';
import { applyLanguageToDocument, getLanguage, subscribeLanguage } from './store/languageStore.js';
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

function getDonationCopy(locale = getLanguage()) {
  if (locale === 'fr') {
    return {
      steps: [
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
      ],
      heroEyebrow: 'Faire un don via Wise',
      heroTitle: 'Une page de don claire, rassurante et alignee avec l univers du site.',
      heroText:
        'Votre soutien finance des actions concretes: kits scolaires, appui alimentaire, soins de base et accompagnement des enfants vulnerables. Le paiement final s effectue sur Wise, dans un nouvel onglet.',
      metrics: [
        { value: 15, label: 'USD utiles', text: 'Peut contribuer a des fournitures de base pour un enfant.' },
        { value: 35, label: 'USD solidaires', text: 'Peut soutenir un appui plus complet pour une famille.' },
        { value: 120, label: 'USD renforces', text: 'Peut aider a financer une reponse plus large sur le terrain.' }
      ],
      heroImageAlt: 'Enfant accompagne par LHUPC',
      heroImageTag: 'Chaque don soutient une action visible',
      heroImageTitle: 'Education, accompagnement et soins de proximite',
      paymentEyebrow: 'Paiement',
      paymentTitle: 'Finaliser votre don avec Wise',
      paymentText: 'Choisissez un montant, laissez une reference si vous le souhaitez, puis ouvrez Wise pour terminer le don.',
      suggestedAmounts: 'Montants conseilles',
      freeAmount: 'Montant libre (USD)',
      freeAmountPlaceholder: 'Ex. 75',
      donorName: 'Nom du donateur',
      donorNamePlaceholder: 'Votre nom ou votre organisation',
      donorEmailPlaceholder: 'vous@exemple.com',
      summaryEyebrow: 'Resume du don',
      summaryText: 'Le paiement final sera lance sur Wise. Vous pourrez verifier la devise et la reference avant confirmation.',
      wisePrimary: 'Continuer sur Wise',
      supportBeforePayment: 'Recevoir de l aide avant le paiement',
      trustPoints: [
        'Le paiement final se fait sur Wise.',
        'Une reference claire aide notre suivi interne.',
        'Le formulaire reste volontairement simple pour aller a l essentiel.'
      ],
      usageImageAlt: 'Salle de classe soutenue par les dons',
      usageImageTag: 'Ce que le don rend possible',
      usageImageTitle: 'Des reponses simples, visibles et utiles',
      usageEyebrow: 'Usage des dons',
      usageTitle: 'Le don doit rester lisible, concret et relie a des besoins clairs.',
      usageText:
        'Nous presentons ici trois usages concrets qui parlent immediatement a un donateur: education, soutien alimentaire et accompagnement de proximite.',
      usageCards: [
        {
          icon: 'book-open',
          title: 'Scolarite',
          text: 'Fournitures, appui scolaire et presence reguliere pour que l enfant reste dans son parcours.'
        },
        {
          icon: 'apple',
          title: 'Nutrition',
          text: 'Aide alimentaire de proximite lorsque les familles traversent une phase plus fragile.'
        },
        {
          icon: 'heart-pulse',
          title: 'Sante',
          text: 'Orientation, soins de base et gestes simples pour proteger les enfants au quotidien.'
        }
      ],
      flowEyebrow: 'Parcours Wise',
      flowTitle: 'Une experience de don courte, compréhensible et sans friction inutile.',
      flowText:
        'Le role de cette page est de preparer le donateur avant l ouverture de Wise, avec juste ce qu il faut d informations et de reassurance.',
      trustEyebrow: 'Confiance et clarte',
      trustTitle: 'Pourquoi une page Wise dediee peut rassurer davantage.',
      trustText:
        'Cette page clarifie l usage du don, prepare le montant et explique le parcours avant la redirection. Cela evite au donateur une sensation de rupture trop forte.',
      trustCards: [
        {
          icon: 'lock',
          title: 'Paiement externe',
          text: 'Wise gere la phase finale de paiement dans son propre environnement.'
        },
        {
          icon: 'file-text',
          title: 'Reference claire',
          text: 'Le donateur peut arriver sur Wise avec deja en tete le montant et la logique du geste.'
        },
        {
          icon: 'bar-chart-3',
          title: 'Impact explique',
          text: 'Le site garde le lien entre le montant, le besoin et le resultat attendu.'
        }
      ],
      faqEyebrow: 'Questions rapides',
      faqs: [
        {
          title: 'Le don est-il debite sur ce site ?',
          text: 'Non. Cette page prepare le don puis Wise prend le relais pour le paiement final.'
        },
        {
          title: 'Puis-je choisir un autre montant ?',
          text: 'Oui. Un champ libre permet de preparer un montant personnalise avant d ouvrir Wise.'
        },
        {
          title: 'Et si j ai besoin d aide ?',
          text: 'Un contact email reste visible pour accompagner un donateur avant ou apres le paiement.'
        }
      ],
      finalImageAlt: 'Equipe locale en action',
      finalImageTag: 'Merci pour votre confiance',
      finalImageTitle: 'Chaque geste peut nourrir une action reelle',
      finalEyebrow: 'Derniere etape',
      finalTitle: 'Vous etes pret a donner ? Nous vous emmenons maintenant vers Wise.',
      finalText:
        'Le site garde ici son role editorial: expliquer, rassurer et orienter. Le paiement, lui, continue sur Wise pour une experience plus claire.',
      wiseSecondary: 'Ouvrir Wise pour faire le don',
      alternateAction: 'Decouvrir d autres manieres d agir'
    };
  }

  return {
    steps: [
      {
        kicker: 'Step 01',
        icon: 'receipt',
        title: 'Choose the amount',
        text: 'The donor prepares a one-time or more generous amount depending on the urgency, then sees a simple reminder of its impact on the page.'
      },
      {
        kicker: 'Step 02',
        icon: 'mail',
        title: 'Continue to Wise',
        text: 'The main button opens Wise in a new tab so the payment can be completed in a familiar and reassuring environment.'
      },
      {
        kicker: 'Step 03',
        icon: 'badge-check',
        title: 'Confirm and track',
        text: 'After validation, we can identify the donation more easily when the donor name or email is included in the reference.'
      }
    ],
    heroEyebrow: 'Donate via Wise',
    heroTitle: 'A donation page that feels clear, reassuring, and aligned with the site experience.',
    heroText:
      'Your support funds concrete action: school kits, food assistance, basic care, and support for vulnerable children. Final payment takes place on Wise in a new tab.',
    metrics: [
      { value: 15, label: 'Useful USD', text: 'Can help cover basic supplies for one child.' },
      { value: 35, label: 'Supportive USD', text: 'Can support more complete assistance for a family.' },
      { value: 120, label: 'Stronger USD', text: 'Can help finance a broader response on the ground.' }
    ],
    heroImageAlt: 'Child supported by LHUPC',
    heroImageTag: 'Every donation supports visible action',
    heroImageTitle: 'Education, support, and nearby care',
    paymentEyebrow: 'Payment',
    paymentTitle: 'Complete your donation with Wise',
    paymentText: 'Choose an amount, leave a reference if you wish, then open Wise to complete the donation.',
    suggestedAmounts: 'Suggested amounts',
    freeAmount: 'Custom amount (USD)',
    freeAmountPlaceholder: 'Ex. 75',
    donorName: 'Donor name',
    donorNamePlaceholder: 'Your name or organization',
    donorEmailPlaceholder: 'you@example.com',
    summaryEyebrow: 'Donation summary',
    summaryText: 'Final payment will start on Wise. You will be able to review the currency and reference before confirming.',
    wisePrimary: 'Continue on Wise',
    supportBeforePayment: 'Get help before payment',
    trustPoints: [
      'Final payment is processed on Wise.',
      'A clear reference helps our internal tracking.',
      'The form stays intentionally simple so the focus remains on the donation.'
    ],
    usageImageAlt: 'Classroom supported by donations',
    usageImageTag: 'What the donation makes possible',
    usageImageTitle: 'Simple, visible, useful responses',
    usageEyebrow: 'Use of donations',
    usageTitle: 'Giving should remain clear, concrete, and tied to real needs.',
    usageText:
      'We highlight three concrete uses that speak immediately to a donor: education, food support, and nearby care.',
    usageCards: [
      {
        icon: 'book-open',
        title: 'Schooling',
        text: 'Supplies, academic support, and consistent attendance to help a child stay on track.'
      },
      {
        icon: 'apple',
        title: 'Nutrition',
        text: 'Local food support when families are going through a more fragile period.'
      },
      {
        icon: 'heart-pulse',
        title: 'Health',
        text: 'Guidance, basic care, and simple protective actions for children every day.'
      }
    ],
    flowEyebrow: 'Wise journey',
    flowTitle: 'A donation experience that stays short, understandable, and free of unnecessary friction.',
    flowText:
      'The purpose of this page is to prepare the donor before Wise opens, with just the right amount of information and reassurance.',
    trustEyebrow: 'Trust and clarity',
    trustTitle: 'Why a dedicated Wise page can feel more reassuring.',
    trustText:
      'This page clarifies how the donation is used, prepares the amount, and explains the journey before the redirect. That reduces the feeling of abrupt transition.',
    trustCards: [
      {
        icon: 'lock',
        title: 'External payment',
        text: 'Wise handles the final payment step inside its own environment.'
      },
      {
        icon: 'file-text',
        title: 'Clear reference',
        text: 'The donor can arrive on Wise already knowing the amount and the reason behind the gesture.'
      },
      {
        icon: 'bar-chart-3',
        title: 'Explained impact',
        text: 'The site keeps the link between the amount, the need, and the expected result.'
      }
    ],
    faqEyebrow: 'Quick questions',
    faqs: [
      {
        title: 'Is the donation charged on this site?',
        text: 'No. This page prepares the donation, then Wise takes over for the final payment.'
      },
      {
        title: 'Can I choose another amount?',
        text: 'Yes. A free input lets you prepare a custom amount before opening Wise.'
      },
      {
        title: 'What if I need help?',
        text: 'An email contact stays visible to support donors before or after payment.'
      }
    ],
    finalImageAlt: 'Local team in action',
    finalImageTag: 'Thank you for your trust',
    finalImageTitle: 'Every gesture can fuel real action',
    finalEyebrow: 'Final step',
    finalTitle: 'Ready to donate? We now take you to Wise.',
    finalText:
      'The site keeps its editorial role here: explain, reassure, and guide. The payment itself continues on Wise for a clearer experience.',
    wiseSecondary: 'Open Wise to donate',
    alternateAction: 'Discover other ways to help'
  };
}

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
  const locale = getLanguage();
  const copy = getDonationCopy(locale);

  return `
    ${Header()}
    <main style="padding-top: 7rem; padding-bottom: 2.5rem;">
      <section class="px-4 py-10 sm:px-6 lg:px-10" style="background: linear-gradient(135deg, #fff8fc 0%, #eef6ff 56%, #ffffff 100%);">
        <div class="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div class="space-y-6">
            <div class="space-y-3">
              <p class="${eyebrowClass}">${copy.heroEyebrow}</p>
              <h1 class="${sectionTitleClass} ${gradientTitleClass}">${copy.heroTitle}</h1>
              <p class="max-w-2xl ${bodyClass}">
                ${copy.heroText}
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-3">
              ${copy.metrics.map((item) => renderMetricCard(item.value, item.label, item.text, '$')).join('')}
            </div>

            <div class="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl shadow-slate-100">
              <div class="relative h-[22rem] w-full overflow-hidden">
                <img src="${IMAGES.hero}" alt="${copy.heroImageAlt}" class="h-full w-full object-cover" loading="eager" decoding="async" />
                <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent px-6 py-5">
                  <p class="font-display text-sm font-black uppercase tracking-[0.24em] text-white/80">${copy.heroImageTag}</p>
                  <p class="mt-1 font-display text-xl font-black text-white">${copy.heroImageTitle}</p>
                </div>
              </div>
            </div>
          </div>

          <aside class="rounded-[2rem] border border-white/90 bg-white p-7 shadow-2xl shadow-slate-100">
            <div class="flex items-center justify-between gap-3">
              <div>
                <p class="${overlineBlueClass}">${copy.paymentEyebrow}</p>
                <h2 class="mt-2 font-display text-2xl font-black text-brandDeep">${copy.paymentTitle}</h2>
              </div>
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brandBlue/10 text-brandBlue">
                <span data-lucide="heart" class="lucide h-6 w-6"></span>
              </div>
            </div>

            <p class="mt-4 ${smallBodyClass}">
              ${copy.paymentText}
            </p>

            <div class="mt-6 space-y-3">
              <p class="${eyebrowClass}">${copy.suggestedAmounts}</p>
              <div class="grid gap-3 sm:grid-cols-2">
                <button type="button" class="donation-amount-option rounded-full border border-brandBlue/20 bg-slate-50 px-4 py-3 text-left font-display text-sm font-black text-brandDeep shadow-sm shadow-slate-100" data-amount="15">$15</button>
                <button type="button" class="donation-amount-option rounded-full border border-brandBlue/20 bg-slate-50 px-4 py-3 text-left font-display text-sm font-black text-brandDeep shadow-sm shadow-slate-100" data-amount="35">$35</button>
                <button type="button" class="donation-amount-option rounded-full border border-brandBlue/20 bg-slate-50 px-4 py-3 text-left font-display text-sm font-black text-brandDeep shadow-sm shadow-slate-100" data-amount="60">$60</button>
                <button type="button" class="donation-amount-option rounded-full border border-brandBlue/20 bg-slate-50 px-4 py-3 text-left font-display text-sm font-black text-brandDeep shadow-sm shadow-slate-100" data-amount="120">$120</button>
              </div>
            </div>

            <div class="mt-6 space-y-3">
              <label class="block">
                <span class="${eyebrowClass}">${copy.freeAmount}</span>
                <input data-custom-amount type="number" min="1" step="1" placeholder="${copy.freeAmountPlaceholder}" class="mt-2 w-full rounded-full border border-slate-100 bg-slate-50 px-4 py-3 font-sans text-sm text-brandDeep" />
              </label>
              <label class="block">
                <span class="${eyebrowClass}">${copy.donorName}</span>
                <input type="text" placeholder="${copy.donorNamePlaceholder}" class="mt-2 w-full rounded-full border border-slate-100 bg-slate-50 px-4 py-3 font-sans text-sm text-brandDeep" />
              </label>
              <label class="block">
                <span class="${eyebrowClass}">Email</span>
                <input type="email" placeholder="${copy.donorEmailPlaceholder}" class="mt-2 w-full rounded-full border border-slate-100 bg-slate-50 px-4 py-3 font-sans text-sm text-brandDeep" />
              </label>
            </div>

            <div class="mt-6 rounded-[1.75rem] p-6 shadow-xl shadow-slate-100" style="background: linear-gradient(135deg, #f7fbff 0%, #fff3fb 100%);">
              <p class="${overlineBlueClass}">${copy.summaryEyebrow}</p>
              <p class="mt-3 font-display text-3xl font-black text-brandDeep"><span data-selected-amount>$35</span></p>
              <p class="mt-3 ${smallBodyClass}">
                ${copy.summaryText}
              </p>
            </div>

            <div class="mt-6 flex flex-col gap-3">
              <a data-wise-link href="${WISE_PAYMENT_URL}" target="_blank" rel="noreferrer" class="${primaryButtonClass}">
                ${copy.wisePrimary}
                <span data-lucide="arrow-right" class="lucide h-4 w-4"></span>
              </a>
              <a href="mailto:dons@lhupc.org" class="${secondaryButtonClass}">
                ${copy.supportBeforePayment}
                <span data-lucide="mail" class="lucide h-4 w-4"></span>
              </a>
            </div>

            <ul class="mt-6 space-y-3">
              <li class="flex items-center gap-3 ${smallBodyClass}">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brandBlue/10 text-brandBlue">
                  <span data-lucide="lock" class="lucide h-4 w-4"></span>
                </span>
                ${copy.trustPoints[0]}
              </li>
              <li class="flex items-center gap-3 ${smallBodyClass}">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brandBlue/10 text-brandBlue">
                  <span data-lucide="receipt" class="lucide h-4 w-4"></span>
                </span>
                ${copy.trustPoints[1]}
              </li>
              <li class="flex items-center gap-3 ${smallBodyClass}">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brandBlue/10 text-brandBlue">
                  <span data-lucide="badge-check" class="lucide h-4 w-4"></span>
                </span>
                ${copy.trustPoints[2]}
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section class="px-4 py-10 sm:px-6 lg:px-10" style="background: linear-gradient(135deg, #ffffff 0%, #f2f8ff 100%);">
        <div class="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <div class="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl shadow-slate-100">
            <div class="relative h-[22rem] w-full overflow-hidden">
              <img src="${IMAGES.classroom}" alt="${copy.usageImageAlt}" class="h-full w-full object-cover" loading="lazy" decoding="async" />
              <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent px-6 py-5">
                <p class="font-display text-sm font-black uppercase tracking-[0.24em] text-white/80">${copy.usageImageTag}</p>
                <p class="mt-1 font-display text-xl font-black text-white">${copy.usageImageTitle}</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="${overlineBlueClass}">${copy.usageEyebrow}</p>
              <h2 class="${sectionTitleClass}">${copy.usageTitle}</h2>
              <p class="max-w-2xl ${bodyClass}">
                ${copy.usageText}
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-3">
              ${copy.usageCards.map((card) => renderUseCard(card.icon, card.title, card.text)).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="px-4 py-10 sm:px-6 lg:px-10" style="background: linear-gradient(135deg, #f5f9ff 0%, #fff9fc 100%);">
        <div class="mx-auto w-full max-w-5xl space-y-6">
          <div class="space-y-3 text-center">
            <p class="${overlineBlueClass}">${copy.flowEyebrow}</p>
            <h2 class="${sectionTitleClass}">${copy.flowTitle}</h2>
            <p class="mx-auto max-w-3xl ${bodyClass}">
              ${copy.flowText}
            </p>
          </div>
          <div class="grid gap-4 md:grid-cols-2">
            ${copy.steps.map((step, index) => renderStep(step, index, copy.steps.length)).join('')}
          </div>
        </div>
      </section>

      <section class="px-4 py-10 sm:px-6 lg:px-10" style="background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);">
        <div class="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <div class="space-y-6">
            <div class="space-y-3">
              <p class="${eyebrowClass}">${copy.trustEyebrow}</p>
              <h2 class="${sectionTitleClass}">${copy.trustTitle}</h2>
              <p class="max-w-2xl ${bodyClass}">
                ${copy.trustText}
              </p>
            </div>
            <div class="grid gap-4 sm:grid-cols-3">
              ${copy.trustCards.map((card) => renderUseCard(card.icon, card.title, card.text)).join('')}
            </div>
          </div>

          <aside class="rounded-[2rem] border border-white/80 bg-white p-7 shadow-2xl shadow-slate-100">
            <p class="${overlineBlueClass}">${copy.faqEyebrow}</p>
            <div class="mt-5 space-y-5">
              ${copy.faqs.map((faq) => `
                <div>
                  <h3 class="font-display text-xl font-black text-brandDeep">${faq.title}</h3>
                  <p class="mt-2 ${smallBodyClass}">${faq.text}</p>
                </div>
              `).join('')}
            </div>
          </aside>
        </div>
      </section>

      <section class="px-4 py-10 sm:px-6 lg:px-10" style="background: linear-gradient(135deg, #fef7fb 0%, #eef5ff 100%);">
        <div class="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <div class="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl shadow-slate-100">
            <div class="relative h-[22rem] w-full overflow-hidden">
              <img src="${IMAGES.workshop}" alt="${copy.finalImageAlt}" class="h-full w-full object-cover" loading="lazy" decoding="async" />
              <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent px-6 py-5">
                <p class="font-display text-sm font-black uppercase tracking-[0.24em] text-white/80">${copy.finalImageTag}</p>
                <p class="mt-1 font-display text-xl font-black text-white">${copy.finalImageTitle}</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="${overlineBlueClass}">${copy.finalEyebrow}</p>
              <h2 class="${sectionTitleClass}">${copy.finalTitle}</h2>
              <p class="max-w-2xl ${bodyClass}">
                ${copy.finalText}
              </p>
            </div>
            <div class="flex flex-col gap-3">
              <a data-wise-link-secondary href="${WISE_PAYMENT_URL}" target="_blank" rel="noreferrer" class="${primaryButtonClass}">
                ${copy.wiseSecondary}
                <span data-lucide="arrow-right" class="lucide h-4 w-4"></span>
              </a>
              <a href="../pages/s-impliquer.html" class="${secondaryButtonClass}">
                ${copy.alternateAction}
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
  const locale = getLanguage();
  const copy = getDonationCopy(locale);
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
      link.innerHTML = `${copy.wisePrimary} - ${label} ${iconMarkup}`.trim();
    } else {
      link.innerHTML = `${copy.wiseSecondary} - ${label} ${iconMarkup}`.trim();
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

function renderDonationPage(root) {
  let destroyHeader = () => {};
  let teardownCounters = () => {};

  root.innerHTML = renderPage();
  destroyHeader = setupHeader(root);
  setupDonationInteractions(root);
  teardownCounters = initCountAnimations(root);
  window.lucide?.createIcons?.();

  return () => {
    destroyHeader();
    teardownCounters();
  };
}

function mountDonationPage() {
  const app = document.getElementById('donation-app');

  if (!app) {
    return;
  }

  applyLanguageToDocument();
  applyPageMeta('donation');
  let cleanup = renderDonationPage(app);

  const rerender = () => {
    cleanup();
    cleanup = renderDonationPage(app);
  };

  const unsubscribeHeader = subscribeHeaderContent(rerender);
  const unsubscribeFooter = subscribeFooterContent(rerender);
  const unsubscribeLanguage = subscribeLanguage((locale) => {
    applyPageMeta('donation', locale);
    rerender();
  });

  window.addEventListener(
    'beforeunload',
    () => {
      cleanup();
      unsubscribeHeader();
      unsubscribeFooter();
      unsubscribeLanguage();
    },
    { once: true }
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountDonationPage, { once: true });
} else {
  mountDonationPage();
}
