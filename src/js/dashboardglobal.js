import { AboutSection } from './components/sections/aboutSection.js?v=20260317-2';
import { Footer } from './components/layout/footer.js?v=20260318-3';
import { Header, setupHeader } from './components/layout/header.js?v=20260318-9';
import { HeroSection } from './components/sections/heroSection.js?v=20260317-3';
import { ImpactSection } from './components/sections/impactSection.js?v=20260317-2';
import { ProjectsSection } from './components/sections/projectsSection.js?v=20260317-2';
import { SponsorSection } from './components/sections/sponsorSection.js?v=20260317-2';
import { getAboutContent, resetAboutContent, saveAboutContent } from './store/aboutStore.js';
import { getFooterContent, resetFooterContent, saveFooterContent } from './store/footerStore.js';
import { getHeroContent, resetHeroContent, saveHeroContent } from './store/heroStore.js';
import { createItemId, getHeaderContent, resetHeaderContent, saveHeaderContent } from './store/headerStore.js';
import { getImpactContent, resetImpactContent, saveImpactContent } from './store/impactStore.js';
import { getProjectsContent, resetProjectsContent, saveProjectsContent } from './store/projectsStore.js';
import { getSponsorContent, resetSponsorContent, saveSponsorContent } from './store/sponsorStore.js';
import { escapeHtml } from './utils/escapeHtml.js';

const app = document.getElementById('dashboard-app');
const dashboardSections = [
  {
    id: 'header',
    label: 'Header',
    description: 'Logo, navigation et boutons CTA'
  },
  {
    id: 'hero',
    label: 'Hero Section',
    description: 'Titre principal, texte et CTA'
  },
  {
    id: 'about',
    label: 'About Section',
    description: 'Cartes mission, programmes et aide'
  },
  {
    id: 'impact',
    label: 'Impact Section',
    description: 'Statistiques cles, cartes et bouton rapport'
  },
  {
    id: 'projects',
    label: 'Projects Section',
    description: 'Campagnes en cours, progression et CTA'
  },
  {
    id: 'sponsor',
    label: 'Sponsor Section',
    description: 'Parrainage, presentation et CTA'
  },
  {
    id: 'footer',
    label: 'Footer',
    description: 'Contacts, liens et newsletter'
  }
];

let dashboardState = {
  activeSection: getInitialSection(),
  header: getHeaderContent(),
  hero: getHeroContent(),
  about: getAboutContent(),
  footer: getFooterContent(),
  impact: getImpactContent(),
  projects: getProjectsContent(),
  sponsor: getSponsorContent()
};
let destroyPreview = () => {};

function applyLucideIcons(scope = document) {
  if (typeof window === 'undefined') {
    return;
  }

  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }
}

function getInitialSection() {
  const hashSection = window.location.hash.replace('#', '');
  const hasMatchingSection = dashboardSections.some((section) => section.id === hashSection);

  return hasMatchingSection ? hashSection : 'header';
}

function renderSidebar() {
  return dashboardSections
    .map(
      (section) => `
        <button
          type="button"
          class="dashboard-sidebar__link ${dashboardState.activeSection === section.id ? 'is-active' : ''}"
          data-section-target="${section.id}"
        >
          <span>${escapeHtml(section.label)}</span>
          <small>${escapeHtml(section.description)}</small>
        </button>
      `
    )
    .join('');
}

function renderHeaderNavRows(items) {
  return items
    .map(
      (item, index) => `
        <article class="dashboard-list-item">
          <div>
            <div class="dashboard-list-item__topline">
              <strong>${escapeHtml(item.label)}</strong>
              <span class="dashboard-badge ${item.isActive ? 'dashboard-badge--active' : ''}">${item.isActive ? 'Actif' : 'Normal'}</span>
            </div>
            <p>${escapeHtml(item.href)}</p>
            <small>Ordre ${index + 1}</small>
          </div>
          <div class="dashboard-list-item__actions">
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-edit-nav="${item.id}">Modifier</button>
            <button type="button" class="dashboard-btn dashboard-btn--danger" data-delete-nav="${item.id}">Supprimer</button>
          </div>
        </article>
      `
    )
    .join('');
}

function renderHeaderActionRows(items) {
  return items
    .map(
      (item) => `
        <article class="dashboard-list-item">
          <div>
            <div class="dashboard-list-item__topline">
              <strong>${escapeHtml(item.label)}</strong>
              <span class="dashboard-badge">${escapeHtml(item.variant)}</span>
            </div>
            <p>${escapeHtml(item.href)}</p>
          </div>
          <div class="dashboard-list-item__actions">
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-edit-action="${item.id}">Modifier</button>
            <button type="button" class="dashboard-btn dashboard-btn--danger" data-delete-action="${item.id}">Supprimer</button>
          </div>
        </article>
      `
    )
    .join('');
}

function renderAboutCardRows(items) {
  return items
    .map(
      (item, index) => `
        <article class="dashboard-list-item">
          <div>
            <div class="dashboard-list-item__topline">
              <strong>${escapeHtml(item.title)}</strong>
              <span class="dashboard-badge">${escapeHtml(item.variant)}</span>
            </div>
            <p>${escapeHtml(item.description)}</p>
            <small>Ordre ${index + 1}</small>
          </div>
          <div class="dashboard-list-item__actions">
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-edit-about-card="${item.id}">Modifier</button>
            <button type="button" class="dashboard-btn dashboard-btn--danger" data-delete-about-card="${item.id}">Supprimer</button>
          </div>
        </article>
      `
    )
    .join('');
}

function renderImpactStatRows(items) {
  return items
    .map(
      (item, index) => `
        <article class="dashboard-list-item">
          <div>
            <div class="dashboard-list-item__topline">
              <strong>${escapeHtml(item.value)}</strong>
              <span class="dashboard-badge">${escapeHtml(item.variant)}</span>
            </div>
            <p>${escapeHtml(item.title)}</p>
            <small>${escapeHtml(item.description)} - Ordre ${index + 1}</small>
          </div>
          <div class="dashboard-list-item__actions">
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-edit-impact-stat="${item.id}">Modifier</button>
            <button type="button" class="dashboard-btn dashboard-btn--danger" data-delete-impact-stat="${item.id}">Supprimer</button>
          </div>
        </article>
      `
    )
    .join('');
}

function renderProjectCardRows(items) {
  return items
    .map(
      (item, index) => `
        <article class="dashboard-list-item">
          <div>
            <div class="dashboard-list-item__topline">
              <strong>${escapeHtml(item.title)}</strong>
              <span class="dashboard-badge">${escapeHtml(item.variant)}</span>
            </div>
            <p>${escapeHtml(item.kicker)}</p>
            <small>${escapeHtml(item.amountRaised)} / ${escapeHtml(item.goalAmount)} - ${escapeHtml(String(item.progressPercent))}% - Ordre ${index + 1}</small>
          </div>
          <div class="dashboard-list-item__actions">
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-edit-project-card="${item.id}">Modifier</button>
            <button type="button" class="dashboard-btn dashboard-btn--danger" data-delete-project-card="${item.id}">Supprimer</button>
          </div>
        </article>
      `
    )
    .join('');
}

function renderHeaderView() {
  return `
    <div class="dashboard-view-header">
      <div>
        <p class="dashboard-kicker">Section active</p>
        <h1>Header</h1>
        <p>Modifie le logo, les liens de navigation et les boutons d'action du header public.</p>
      </div>
      <div class="dashboard-view-header__actions">
        <a class="dashboard-btn dashboard-btn--ghost" href="./index.html">Voir le site</a>
        <button type="button" class="dashboard-btn dashboard-btn--danger" data-reset-section="header">Reinitialiser le Header</button>
      </div>
    </div>

    <section class="dashboard-panel">
      <div class="dashboard-panel__heading">
        <div>
          <p class="dashboard-kicker">Preview</p>
          <h2>Apercu du Header</h2>
        </div>
        <p>Le composant ci-dessous utilise exactement les memes donnees que la page publique.</p>
      </div>
      <div class="dashboard-preview" id="section-preview"></div>
    </section>

    <section class="dashboard-columns">
      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Update</p>
            <h2>Identite du Header</h2>
          </div>
        </div>

        <form class="dashboard-form" id="header-brand-form">
          <label>
            <span>Titre logo</span>
            <input type="text" name="title" value="${escapeHtml(dashboardState.header.brand.title)}" required />
          </label>
          <label>
            <span>Sous-titre logo</span>
            <input type="text" name="subtitle" value="${escapeHtml(dashboardState.header.brand.subtitle)}" required />
          </label>
          <label>
            <span>Lien du logo</span>
            <input type="text" name="href" value="${escapeHtml(dashboardState.header.brand.href)}" required />
          </label>
          <label>
            <span>Aria label</span>
            <input type="text" name="ariaLabel" value="${escapeHtml(dashboardState.header.brand.ariaLabel)}" required />
          </label>
          <button type="submit" class="dashboard-btn dashboard-btn--primary">Sauvegarder l'identite</button>
        </form>
      </article>

      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Read / Delete</p>
            <h2>Liens de navigation</h2>
          </div>
          <p>${dashboardState.header.navigation.length} lien(s)</p>
        </div>
        <div class="dashboard-list">${renderHeaderNavRows(dashboardState.header.navigation)}</div>
      </article>
    </section>

    <section class="dashboard-columns">
      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Create / Update</p>
            <h2>Ajouter ou modifier un lien</h2>
          </div>
        </div>

        <form class="dashboard-form" id="header-nav-form">
          <input type="hidden" name="id" />
          <label>
            <span>Label</span>
            <input type="text" name="label" placeholder="WHO WE ARE" required />
          </label>
          <label>
            <span>Lien</span>
            <input type="text" name="href" placeholder="#about" required />
          </label>
          <label class="dashboard-checkbox">
            <input type="checkbox" name="isActive" />
            <span>Definir comme lien actif</span>
          </label>
          <div class="dashboard-form__actions">
            <button type="submit" class="dashboard-btn dashboard-btn--primary">Enregistrer le lien</button>
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-reset-form="header-nav">Vider le formulaire</button>
          </div>
        </form>
      </article>

      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Read / Delete</p>
            <h2>Boutons d'action</h2>
          </div>
          <p>${dashboardState.header.actions.length} bouton(s)</p>
        </div>
        <div class="dashboard-list">${renderHeaderActionRows(dashboardState.header.actions)}</div>
      </article>
    </section>

    <section class="dashboard-columns dashboard-columns--single">
      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Create / Update</p>
            <h2>Ajouter ou modifier un bouton</h2>
          </div>
        </div>

        <form class="dashboard-form" id="header-action-form">
          <input type="hidden" name="id" />
          <label>
            <span>Label</span>
            <input type="text" name="label" placeholder="Donate" required />
          </label>
          <label>
            <span>Lien</span>
            <input type="text" name="href" placeholder="#donate" required />
          </label>
          <label>
            <span>Style</span>
            <select name="variant">
              <option value="primary">primary</option>
              <option value="secondary">secondary</option>
            </select>
          </label>
          <div class="dashboard-form__actions">
            <button type="submit" class="dashboard-btn dashboard-btn--primary">Enregistrer le bouton</button>
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-reset-form="header-action">Vider le formulaire</button>
          </div>
        </form>
      </article>
    </section>
  `;
}

function renderHeroView() {
  return `
    <div class="dashboard-view-header">
      <div>
        <p class="dashboard-kicker">Section active</p>
        <h1>Hero Section</h1>
        <p>Modifie le titre principal, le texte descriptif et les CTA du hero public.</p>
      </div>
      <div class="dashboard-view-header__actions">
        <a class="dashboard-btn dashboard-btn--ghost" href="./index.html#hero">Voir le hero</a>
        <button type="button" class="dashboard-btn dashboard-btn--danger" data-reset-section="hero">Reinitialiser le Hero</button>
      </div>
    </div>

    <section class="dashboard-panel">
      <div class="dashboard-panel__heading">
        <div>
          <p class="dashboard-kicker">Preview</p>
          <h2>Apercu du Hero</h2>
        </div>
        <p>Le visuel utilise la meme structure que la page publique, avec illustration temporaire integree.</p>
      </div>
      <div class="dashboard-preview dashboard-preview--hero" id="section-preview"></div>
    </section>

    <section class="dashboard-columns dashboard-columns--single">
      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Update</p>
            <h2>Contenu du Hero</h2>
          </div>
        </div>

        <form class="dashboard-form" id="hero-content-form">
          <label>
            <span>Titre principal</span>
            <input type="text" name="title" value="${escapeHtml(dashboardState.hero.title)}" required />
          </label>
          <div class="dashboard-columns dashboard-columns--compact">
            <label>
              <span>Texte animé 1</span>
              <input type="text" name="cycleText1" value="${escapeHtml(dashboardState.hero.cycleTexts?.[0] || '')}" required />
            </label>
            <label>
              <span>Texte animé 2</span>
              <input type="text" name="cycleText2" value="${escapeHtml(dashboardState.hero.cycleTexts?.[1] || '')}" required />
            </label>
          </div>
          <label>
            <span>Texte animé 3</span>
            <input type="text" name="cycleText3" value="${escapeHtml(dashboardState.hero.cycleTexts?.[2] || '')}" required />
          </label>
          <label>
            <span>Description</span>
            <textarea name="description" rows="5" required>${escapeHtml(dashboardState.hero.description)}</textarea>
          </label>
          <div class="dashboard-columns dashboard-columns--compact">
            <label>
              <span>Label CTA 1</span>
              <input type="text" name="primaryLabel" value="${escapeHtml(dashboardState.hero.primaryCta.label)}" required />
            </label>
            <label>
              <span>Lien CTA 1</span>
              <input type="text" name="primaryHref" value="${escapeHtml(dashboardState.hero.primaryCta.href)}" required />
            </label>
          </div>
          <div class="dashboard-columns dashboard-columns--compact">
            <label>
              <span>Label CTA 2</span>
              <input type="text" name="secondaryLabel" value="${escapeHtml(dashboardState.hero.secondaryCta.label)}" required />
            </label>
            <label>
              <span>Lien CTA 2</span>
              <input type="text" name="secondaryHref" value="${escapeHtml(dashboardState.hero.secondaryCta.href)}" required />
            </label>
          </div>
          <div class="dashboard-form__actions">
            <button type="submit" class="dashboard-btn dashboard-btn--primary">Sauvegarder le Hero</button>
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-reset-form="hero-content">Recharger les valeurs</button>
          </div>
        </form>
      </article>
    </section>
  `;
}

function renderAboutView() {
  return `
    <div class="dashboard-view-header">
      <div>
        <p class="dashboard-kicker">Section active</p>
        <h1>About Section</h1>
        <p>Modifie les cartes de presentation qui suivent le hero sur la page d'accueil.</p>
      </div>
      <div class="dashboard-view-header__actions">
        <a class="dashboard-btn dashboard-btn--ghost" href="./index.html#about">Voir la section</a>
        <button type="button" class="dashboard-btn dashboard-btn--danger" data-reset-section="about">Reinitialiser la section</button>
      </div>
    </div>

    <section class="dashboard-panel">
      <div class="dashboard-panel__heading">
        <div>
          <p class="dashboard-kicker">Preview</p>
          <h2>Apercu de la section</h2>
        </div>
        <p>Cette vue utilise les memes cartes que la page publique.</p>
      </div>
      <div class="dashboard-preview dashboard-preview--about" id="section-preview"></div>
    </section>

    <section class="dashboard-columns">
      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Read / Delete</p>
            <h2>Cartes existantes</h2>
          </div>
          <p>${dashboardState.about.cards.length} carte(s)</p>
        </div>
        <div class="dashboard-list">${renderAboutCardRows(dashboardState.about.cards)}</div>
      </article>

      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Create / Update</p>
            <h2>Ajouter ou modifier une carte</h2>
          </div>
        </div>

        <form class="dashboard-form" id="about-card-form">
          <input type="hidden" name="id" />
          <label>
            <span>Titre</span>
            <input type="text" name="title" placeholder="Our Mission" required />
          </label>
          <label>
            <span>Description</span>
            <textarea name="description" rows="5" placeholder="Supporting and empowering underprivileged children" required></textarea>
          </label>
          <label>
            <span>Style de carte</span>
            <select name="variant">
              <option value="mission">mission</option>
              <option value="programs">programs</option>
              <option value="help">help</option>
            </select>
          </label>
          <div class="dashboard-form__actions">
            <button type="submit" class="dashboard-btn dashboard-btn--primary">Enregistrer la carte</button>
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-reset-form="about-card">Vider le formulaire</button>
          </div>
        </form>
      </article>
    </section>
  `;
}

function renderImpactView() {
  return `
    <div class="dashboard-view-header">
      <div>
        <p class="dashboard-kicker">Section active</p>
        <h1>Impact Section</h1>
        <p>Modifie la section des chiffres cles, les cartes d'impact et le bouton du rapport.</p>
      </div>
      <div class="dashboard-view-header__actions">
        <a class="dashboard-btn dashboard-btn--ghost" href="./index.html#impact">Voir la section</a>
        <button type="button" class="dashboard-btn dashboard-btn--danger" data-reset-section="impact">Reinitialiser la section</button>
      </div>
    </div>

    <section class="dashboard-panel">
      <div class="dashboard-panel__heading">
        <div>
          <p class="dashboard-kicker">Preview</p>
          <h2>Apercu de la section</h2>
        </div>
        <p>La previsualisation reprend le rendu public complet de la section impact.</p>
      </div>
      <div class="dashboard-preview dashboard-preview--impact" id="section-preview"></div>
    </section>

    <section class="dashboard-columns">
      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Update</p>
            <h2>Contenu principal</h2>
          </div>
        </div>

        <form class="dashboard-form" id="impact-content-form">
          <label>
            <span>Titre de section</span>
            <input type="text" name="title" value="${escapeHtml(dashboardState.impact.title)}" required />
          </label>
          <label>
            <span>Description</span>
            <textarea name="description" rows="5" required>${escapeHtml(dashboardState.impact.description)}</textarea>
          </label>
          <div class="dashboard-columns dashboard-columns--compact">
            <label>
              <span>Label du bouton</span>
              <input type="text" name="ctaLabel" value="${escapeHtml(dashboardState.impact.ctaLabel)}" required />
            </label>
            <label>
              <span>Lien du bouton</span>
              <input type="text" name="ctaHref" value="${escapeHtml(dashboardState.impact.ctaHref)}" required />
            </label>
          </div>
          <div class="dashboard-form__actions">
            <button type="submit" class="dashboard-btn dashboard-btn--primary">Sauvegarder la section</button>
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-reset-form="impact-content">Recharger les valeurs</button>
          </div>
        </form>
      </article>

      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Read / Delete</p>
            <h2>Statistiques existantes</h2>
          </div>
          <p>${dashboardState.impact.stats.length} statistique(s)</p>
        </div>
        <div class="dashboard-list">${renderImpactStatRows(dashboardState.impact.stats)}</div>
      </article>
    </section>

    <section class="dashboard-columns dashboard-columns--single">
      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Create / Update</p>
            <h2>Ajouter ou modifier une statistique</h2>
          </div>
        </div>

        <form class="dashboard-form" id="impact-stat-form">
          <input type="hidden" name="id" />
          <div class="dashboard-columns dashboard-columns--compact">
            <label>
              <span>Valeur</span>
              <input type="text" name="value" placeholder="2,450+" required />
            </label>
            <label>
              <span>Style</span>
              <select name="variant">
                <option value="children">children</option>
                <option value="communities">communities</option>
                <option value="projects">projects</option>
                <option value="volunteers">volunteers</option>
              </select>
            </label>
          </div>
          <label>
            <span>Titre</span>
            <input type="text" name="title" placeholder="Children Supported" required />
          </label>
          <label>
            <span>Description</span>
            <textarea name="description" rows="5" placeholder="Children receiving education, food, and essential support." required></textarea>
          </label>
          <div class="dashboard-form__actions">
            <button type="submit" class="dashboard-btn dashboard-btn--primary">Enregistrer la statistique</button>
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-reset-form="impact-stat">Vider le formulaire</button>
          </div>
        </form>
      </article>
    </section>
  `;
}

function renderSponsorView() {
  const leftParagraphs = dashboardState.sponsor.leftCard.paragraphs || [];
  return `
    <div class="dashboard-view-header">
      <div>
        <p class="dashboard-kicker">Section active</p>
        <h1>Sponsor Section</h1>
        <p>Modifie la section de parrainage, le profil enfant, le texte et les CTA.</p>
      </div>
      <div class="dashboard-view-header__actions">
        <a class="dashboard-btn dashboard-btn--ghost" href="./index.html#sponsor">Voir la section</a>
        <button type="button" class="dashboard-btn dashboard-btn--danger" data-reset-section="sponsor">Reinitialiser la section</button>
      </div>
    </div>

    <section class="dashboard-panel">
      <div class="dashboard-panel__heading">
        <div>
          <p class="dashboard-kicker">Preview</p>
          <h2>Apercu de la section</h2>
        </div>
        <p>La previsualisation reprend le rendu public complet de la section parrainage.</p>
      </div>
      <div class="dashboard-preview dashboard-preview--sponsor" id="section-preview"></div>
    </section>

    <section class="dashboard-columns">
      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Update</p>
            <h2>Contenu principal</h2>
          </div>
        </div>

        <form class="dashboard-form" id="sponsor-content-form">
          <label>
            <span>Titre de section</span>
            <input type="text" name="title" value="${escapeHtml(dashboardState.sponsor.title)}" required />
          </label>
          <label>
            <span>Description</span>
            <textarea name="description" rows="5" required>${escapeHtml(dashboardState.sponsor.description)}</textarea>
          </label>
          <div class="dashboard-form__actions">
            <button type="submit" class="dashboard-btn dashboard-btn--primary">Sauvegarder la section</button>
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-reset-form="sponsor-content">Recharger les valeurs</button>
          </div>
        </form>
      </article>

      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Update</p>
            <h2>Carte profil enfant</h2>
          </div>
        </div>

        <form class="dashboard-form" id="sponsor-profile-form">
          <div class="dashboard-columns dashboard-columns--compact">
            <label>
              <span>Prenom</span>
              <input type="text" name="name" value="${escapeHtml(dashboardState.sponsor.leftCard.name)}" required />
            </label>
            <label>
              <span>Age</span>
              <input type="text" name="age" value="${escapeHtml(dashboardState.sponsor.leftCard.age)}" required />
            </label>
          </div>
          <label>
            <span>Localisation</span>
            <input type="text" name="location" value="${escapeHtml(dashboardState.sponsor.leftCard.location)}" required />
          </label>
          <label>
            <span>Emoji drapeau</span>
            <input type="text" name="flagEmoji" value="${escapeHtml(dashboardState.sponsor.leftCard.flagEmoji)}" />
          </label>
          <label>
            <span>Paragraphe 1</span>
            <textarea name="paragraph1" rows="4" required>${escapeHtml(leftParagraphs[0] || '')}</textarea>
          </label>
          <label>
            <span>Paragraphe 2</span>
            <textarea name="paragraph2" rows="4" required>${escapeHtml(leftParagraphs[1] || '')}</textarea>
          </label>
          <div class="dashboard-columns dashboard-columns--compact">
            <label>
              <span>CTA 1</span>
              <input type="text" name="primaryLabel" value="${escapeHtml(dashboardState.sponsor.leftCard.primaryCta.label)}" required />
            </label>
            <label>
              <span>Lien CTA 1</span>
              <input type="text" name="primaryHref" value="${escapeHtml(dashboardState.sponsor.leftCard.primaryCta.href)}" required />
            </label>
          </div>
          <div class="dashboard-columns dashboard-columns--compact">
            <label>
              <span>CTA 2</span>
              <input type="text" name="secondaryLabel" value="${escapeHtml(dashboardState.sponsor.leftCard.secondaryCta.label)}" required />
            </label>
            <label>
              <span>Lien CTA 2</span>
              <input type="text" name="secondaryHref" value="${escapeHtml(dashboardState.sponsor.leftCard.secondaryCta.href)}" required />
            </label>
          </div>
          <div class="dashboard-form__actions">
            <button type="submit" class="dashboard-btn dashboard-btn--primary">Sauvegarder le profil</button>
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-reset-form="sponsor-profile">Recharger les valeurs</button>
          </div>
        </form>
      </article>
    </section>

    <section class="dashboard-columns dashboard-columns--single">
      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Update</p>
            <h2>Carte video</h2>
          </div>
        </div>

        <form class="dashboard-form" id="sponsor-video-form">
          <label>
            <span>Titre carte</span>
            <input type="text" name="title" value="${escapeHtml(dashboardState.sponsor.rightCard.title)}" required />
          </label>
          <label>
            <span>Description</span>
            <textarea name="description" rows="4" required>${escapeHtml(dashboardState.sponsor.rightCard.description)}</textarea>
          </label>
          <div class="dashboard-columns dashboard-columns--compact">
            <label>
              <span>Titre video</span>
              <input type="text" name="videoTitle" value="${escapeHtml(dashboardState.sponsor.rightCard.videoTitle)}" required />
            </label>
            <label>
              <span>Label bouton</span>
              <input type="text" name="videoCtaLabel" value="${escapeHtml(dashboardState.sponsor.rightCard.videoCtaLabel)}" required />
            </label>
          </div>
          <label>
            <span>Lien video</span>
            <input type="text" name="videoHref" value="${escapeHtml(dashboardState.sponsor.rightCard.videoHref)}" required />
          </label>
          <div class="dashboard-form__actions">
            <button type="submit" class="dashboard-btn dashboard-btn--primary">Sauvegarder la video</button>
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-reset-form="sponsor-video">Recharger les valeurs</button>
          </div>
        </form>
      </article>
    </section>
  `;
}

function renderFooterView() {
  const columns = Array.isArray(dashboardState.footer.columns) ? dashboardState.footer.columns : [];
  const aboutColumn = columns[0] || { title: '', links: [] };
  const workColumn = columns[1] || { title: '', links: [] };
  const policyColumn = columns[2] || { title: '', links: [] };

  const getLink = (column, index) => (Array.isArray(column.links) ? column.links[index] : null) || { label: '', href: '' };

  return `
    <div class="dashboard-view-header">
      <div>
        <p class="dashboard-kicker">Section active</p>
        <h1>Footer</h1>
        <p>Modifie le branding, les contacts, les liens et la newsletter du footer public.</p>
      </div>
      <div class="dashboard-view-header__actions">
        <a class="dashboard-btn dashboard-btn--ghost" href="./index.html#footer">Voir le footer</a>
        <button type="button" class="dashboard-btn dashboard-btn--danger" data-reset-section="footer">Reinitialiser le footer</button>
      </div>
    </div>

    <section class="dashboard-panel">
      <div class="dashboard-panel__heading">
        <div>
          <p class="dashboard-kicker">Preview</p>
          <h2>Apercu du footer</h2>
        </div>
        <p>La previsualisation reprend le footer public avec son fond bleu.</p>
      </div>
      <div class="dashboard-preview dashboard-preview--footer" id="section-preview"></div>
    </section>

    <section class="dashboard-columns">
      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Update</p>
            <h2>Branding et contacts</h2>
          </div>
        </div>

        <form class="dashboard-form" id="footer-brand-form">
          <label>
            <span>Titre logo</span>
            <input type="text" name="brandTitle" value="${escapeHtml(dashboardState.footer.brand.title)}" required />
          </label>
          <label>
            <span>Sous-titre logo</span>
            <input type="text" name="brandSubtitle" value="${escapeHtml(dashboardState.footer.brand.subtitle)}" required />
          </label>
          <label>
            <span>Adresse ligne 1</span>
            <input type="text" name="addressLine1" value="${escapeHtml(dashboardState.footer.contacts.addressLine1)}" required />
          </label>
          <label>
            <span>Adresse ligne 2</span>
            <input type="text" name="addressLine2" value="${escapeHtml(dashboardState.footer.contacts.addressLine2)}" required />
          </label>
          <label>
            <span>Email</span>
            <input type="text" name="email" value="${escapeHtml(dashboardState.footer.contacts.email)}" required />
          </label>
          <label>
            <span>Telephone</span>
            <input type="text" name="phone" value="${escapeHtml(dashboardState.footer.contacts.phone)}" required />
          </label>
          <label>
            <span>Copyright</span>
            <input type="text" name="copyright" value="${escapeHtml(dashboardState.footer.copyright)}" required />
          </label>
          <div class="dashboard-form__actions">
            <button type="submit" class="dashboard-btn dashboard-btn--primary">Sauvegarder le footer</button>
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-reset-form="footer-brand">Recharger les valeurs</button>
          </div>
        </form>
      </article>

      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Update</p>
            <h2>Newsletter</h2>
          </div>
        </div>

        <form class="dashboard-form" id="footer-newsletter-form">
          <label>
            <span>Titre</span>
            <input type="text" name="title" value="${escapeHtml(dashboardState.footer.newsletter.title)}" required />
          </label>
          <label>
            <span>Placeholder</span>
            <input type="text" name="placeholder" value="${escapeHtml(dashboardState.footer.newsletter.placeholder)}" required />
          </label>
          <label>
            <span>Label bouton</span>
            <input type="text" name="buttonLabel" value="${escapeHtml(dashboardState.footer.newsletter.buttonLabel)}" required />
          </label>
          <div class="dashboard-form__actions">
            <button type="submit" class="dashboard-btn dashboard-btn--primary">Sauvegarder la newsletter</button>
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-reset-form="footer-newsletter">Recharger les valeurs</button>
          </div>
        </form>
      </article>
    </section>

    <section class="dashboard-columns dashboard-columns--single">
      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Update</p>
            <h2>Colonnes de liens</h2>
          </div>
        </div>

        <form class="dashboard-form" id="footer-links-form">
          <label>
            <span>Titre colonne 1</span>
            <input type="text" name="column1Title" value="${escapeHtml(aboutColumn.title || '')}" required />
          </label>
          <label>
            <span>Liens colonne 1</span>
            <textarea name="column1Links" rows="5" required>${escapeHtml(
              [0, 1, 2]
                .map((index) => {
                  const link = getLink(aboutColumn, index);
                  return `${link.label}|${link.href}`;
                })
                .join('\n')
            )}</textarea>
          </label>
          <label>
            <span>Titre colonne 2</span>
            <input type="text" name="column2Title" value="${escapeHtml(workColumn.title || '')}" required />
          </label>
          <label>
            <span>Liens colonne 2</span>
            <textarea name="column2Links" rows="6" required>${escapeHtml(
              [0, 1, 2, 3]
                .map((index) => {
                  const link = getLink(workColumn, index);
                  return `${link.label}|${link.href}`;
                })
                .join('\n')
            )}</textarea>
          </label>
          <label>
            <span>Titre colonne 3</span>
            <input type="text" name="column3Title" value="${escapeHtml(policyColumn.title || '')}" required />
          </label>
          <label>
            <span>Liens colonne 3</span>
            <textarea name="column3Links" rows="5" required>${escapeHtml(
              [0, 1, 2]
                .map((index) => {
                  const link = getLink(policyColumn, index);
                  return `${link.label}|${link.href}`;
                })
                .join('\n')
            )}</textarea>
          </label>
          <p class="dashboard-panel__note">Format attendu : Label|#ancre sur chaque ligne.</p>
          <div class="dashboard-form__actions">
            <button type="submit" class="dashboard-btn dashboard-btn--primary">Sauvegarder les liens</button>
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-reset-form="footer-links">Recharger les valeurs</button>
          </div>
        </form>
      </article>
    </section>
  `;
}

function renderProjectsView() {
  return `
    <div class="dashboard-view-header">
      <div>
        <p class="dashboard-kicker">Section active</p>
        <h1>Projects Section</h1>
        <p>Modifie la section des campagnes en cours, ses textes et ses cartes de financement.</p>
      </div>
      <div class="dashboard-view-header__actions">
        <a class="dashboard-btn dashboard-btn--ghost" href="./index.html#projects">Voir la section</a>
        <button type="button" class="dashboard-btn dashboard-btn--danger" data-reset-section="projects">Reinitialiser la section</button>
      </div>
    </div>

    <section class="dashboard-panel">
      <div class="dashboard-panel__heading">
        <div>
          <p class="dashboard-kicker">Preview</p>
          <h2>Apercu de la section</h2>
        </div>
        <p>La previsualisation reprend le rendu public complet des cartes projets.</p>
      </div>
      <div class="dashboard-preview dashboard-preview--projects" id="section-preview"></div>
    </section>

    <section class="dashboard-columns">
      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Update</p>
            <h2>Contenu principal</h2>
          </div>
        </div>

        <form class="dashboard-form" id="projects-content-form">
          <label>
            <span>Titre de section</span>
            <input type="text" name="title" value="${escapeHtml(dashboardState.projects.title)}" required />
          </label>
          <label>
            <span>Description</span>
            <textarea name="description" rows="5" required>${escapeHtml(dashboardState.projects.description)}</textarea>
          </label>
          <div class="dashboard-form__actions">
            <button type="submit" class="dashboard-btn dashboard-btn--primary">Sauvegarder la section</button>
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-reset-form="projects-content">Recharger les valeurs</button>
          </div>
        </form>
      </article>

      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Read / Delete</p>
            <h2>Projets existants</h2>
          </div>
          <p>${dashboardState.projects.cards.length} projet(s)</p>
        </div>
        <div class="dashboard-list">${renderProjectCardRows(dashboardState.projects.cards)}</div>
      </article>
    </section>

    <section class="dashboard-columns dashboard-columns--single">
      <article class="dashboard-panel">
        <div class="dashboard-panel__heading">
          <div>
            <p class="dashboard-kicker">Create / Update</p>
            <h2>Ajouter ou modifier une carte projet</h2>
          </div>
        </div>

        <form class="dashboard-form" id="projects-card-form">
          <input type="hidden" name="id" />
          <div class="dashboard-columns dashboard-columns--compact">
            <label>
              <span>Petit titre</span>
              <input type="text" name="kicker" placeholder="Project 1" required />
            </label>
            <label>
              <span>Style</span>
              <select name="variant">
                <option value="school">school</option>
                <option value="learning">learning</option>
                <option value="nutrition">nutrition</option>
              </select>
            </label>
          </div>
          <label>
            <span>Titre</span>
            <input type="text" name="title" placeholder="Back to School Campaign" required />
          </label>
          <label>
            <span>Description</span>
            <textarea name="description" rows="5" placeholder="Help provide school kits for 200 children." required></textarea>
          </label>
          <div class="dashboard-columns dashboard-columns--compact">
            <label>
              <span>Montant leve</span>
              <input type="text" name="amountRaised" placeholder="$2,500" required />
            </label>
            <label>
              <span>Objectif</span>
              <input type="text" name="goalAmount" placeholder="$5,000" required />
            </label>
          </div>
          <div class="dashboard-columns dashboard-columns--compact">
            <label>
              <span>Progression (%)</span>
              <input type="number" name="progressPercent" min="0" max="100" step="1" placeholder="50" required />
            </label>
            <label>
              <span>Label du bouton</span>
              <input type="text" name="ctaLabel" placeholder="Donate to this Project" required />
            </label>
          </div>
          <label>
            <span>Lien du bouton</span>
            <input type="text" name="ctaHref" placeholder="#donate" required />
          </label>
          <div class="dashboard-form__actions">
            <button type="submit" class="dashboard-btn dashboard-btn--primary">Enregistrer le projet</button>
            <button type="button" class="dashboard-btn dashboard-btn--ghost" data-reset-form="projects-card">Vider le formulaire</button>
          </div>
        </form>
      </article>
    </section>
  `;
}

function renderActiveSection() {
  if (dashboardState.activeSection === 'hero') {
    return renderHeroView();
  }

  if (dashboardState.activeSection === 'about') {
    return renderAboutView();
  }

  if (dashboardState.activeSection === 'impact') {
    return renderImpactView();
  }

  if (dashboardState.activeSection === 'projects') {
    return renderProjectsView();
  }

  if (dashboardState.activeSection === 'sponsor') {
    return renderSponsorView();
  }

  if (dashboardState.activeSection === 'footer') {
    return renderFooterView();
  }

  return renderHeaderView();
}

function layoutTemplate() {
  return `
    <div class="dashboard-shell">
      <aside class="dashboard-sidebar">
        <div class="dashboard-sidebar__intro">
          <p class="dashboard-kicker">Dashboard global</p>
          <h1>Gestion des sections</h1>
          <p>Navigue entre les sections du site et ouvre a droite les options CRUD de la section selectionnee.</p>
        </div>

        <nav class="dashboard-sidebar__nav" aria-label="Sections du dashboard">
          ${renderSidebar()}
        </nav>
      </aside>

      <main class="dashboard-main">
        ${renderActiveSection()}
      </main>
    </div>
  `;
}

function renderPreview() {
  const preview = document.getElementById('section-preview');

  destroyPreview();
  destroyPreview = () => {};

  if (!preview) {
    return;
  }

  if (dashboardState.activeSection === 'header') {
    preview.innerHTML = Header();
    destroyPreview = setupHeader(preview);
    preview.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', (event) => event.preventDefault());
    });
    return;
  }

  if (dashboardState.activeSection === 'hero') {
    preview.innerHTML = HeroSection();
    preview.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', (event) => event.preventDefault());
    });
    return;
  }

  if (dashboardState.activeSection === 'impact') {
    preview.innerHTML = ImpactSection();
    preview.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', (event) => event.preventDefault());
    });
    return;
  }

  if (dashboardState.activeSection === 'projects') {
    preview.innerHTML = ProjectsSection();
    preview.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', (event) => event.preventDefault());
    });
    return;
  }

  if (dashboardState.activeSection === 'sponsor') {
    preview.innerHTML = SponsorSection();
    preview.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', (event) => event.preventDefault());
    });
    return;
  }

  if (dashboardState.activeSection === 'footer') {
    preview.innerHTML = Footer();
    preview.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', (event) => event.preventDefault());
    });
    return;
  }

  preview.innerHTML = AboutSection();
}

function saveHeaderAndRender() {
  saveHeaderContent(dashboardState.header);
  render();
}

function saveHeroAndRender() {
  saveHeroContent(dashboardState.hero);
  render();
}

function saveAboutAndRender() {
  saveAboutContent(dashboardState.about);
  render();
}

function saveImpactAndRender() {
  saveImpactContent(dashboardState.impact);
  render();
}

function saveProjectsAndRender() {
  saveProjectsContent(dashboardState.projects);
  render();
}

function saveSponsorAndRender() {
  saveSponsorContent(dashboardState.sponsor);
  render();
}

function saveFooterAndRender() {
  saveFooterContent(dashboardState.footer);
  render();
}

function resetHeaderNavForm() {
  const form = document.getElementById('header-nav-form');

  if (!form) {
    return;
  }

  form.reset();
  form.elements.id.value = '';
  form.elements.isActive.checked = false;
}

function resetHeaderActionForm() {
  const form = document.getElementById('header-action-form');

  if (!form) {
    return;
  }

  form.reset();
  form.elements.id.value = '';
  form.elements.variant.value = 'primary';
}

function resetHeroForm() {
  const form = document.getElementById('hero-content-form');

  if (!form) {
    return;
  }

  form.elements.title.value = dashboardState.hero.title;
  form.elements.cycleText1.value = dashboardState.hero.cycleTexts?.[0] || '';
  form.elements.cycleText2.value = dashboardState.hero.cycleTexts?.[1] || '';
  form.elements.cycleText3.value = dashboardState.hero.cycleTexts?.[2] || '';
  form.elements.description.value = dashboardState.hero.description;
  form.elements.primaryLabel.value = dashboardState.hero.primaryCta.label;
  form.elements.primaryHref.value = dashboardState.hero.primaryCta.href;
  form.elements.secondaryLabel.value = dashboardState.hero.secondaryCta.label;
  form.elements.secondaryHref.value = dashboardState.hero.secondaryCta.href;
}

function resetAboutForm() {
  const form = document.getElementById('about-card-form');

  if (!form) {
    return;
  }

  form.reset();
  form.elements.id.value = '';
  form.elements.variant.value = 'mission';
}

function resetImpactContentForm() {
  const form = document.getElementById('impact-content-form');

  if (!form) {
    return;
  }

  form.elements.title.value = dashboardState.impact.title;
  form.elements.description.value = dashboardState.impact.description;
  form.elements.ctaLabel.value = dashboardState.impact.ctaLabel;
  form.elements.ctaHref.value = dashboardState.impact.ctaHref;
}

function resetImpactStatForm() {
  const form = document.getElementById('impact-stat-form');

  if (!form) {
    return;
  }

  form.reset();
  form.elements.id.value = '';
  form.elements.variant.value = 'children';
}

function resetSponsorContentForm() {
  const form = document.getElementById('sponsor-content-form');

  if (!form) {
    return;
  }

  form.elements.title.value = dashboardState.sponsor.title;
  form.elements.description.value = dashboardState.sponsor.description;
}

function resetSponsorProfileForm() {
  const form = document.getElementById('sponsor-profile-form');

  if (!form) {
    return;
  }

  form.elements.name.value = dashboardState.sponsor.leftCard.name;
  form.elements.age.value = dashboardState.sponsor.leftCard.age;
  form.elements.location.value = dashboardState.sponsor.leftCard.location;
  form.elements.flagEmoji.value = dashboardState.sponsor.leftCard.flagEmoji;
  form.elements.paragraph1.value = dashboardState.sponsor.leftCard.paragraphs[0] || '';
  form.elements.paragraph2.value = dashboardState.sponsor.leftCard.paragraphs[1] || '';
  form.elements.primaryLabel.value = dashboardState.sponsor.leftCard.primaryCta.label;
  form.elements.primaryHref.value = dashboardState.sponsor.leftCard.primaryCta.href;
  form.elements.secondaryLabel.value = dashboardState.sponsor.leftCard.secondaryCta.label;
  form.elements.secondaryHref.value = dashboardState.sponsor.leftCard.secondaryCta.href;
}

function resetSponsorVideoForm() {
  const form = document.getElementById('sponsor-video-form');

  if (!form) {
    return;
  }

  form.elements.title.value = dashboardState.sponsor.rightCard.title;
  form.elements.description.value = dashboardState.sponsor.rightCard.description;
  form.elements.videoTitle.value = dashboardState.sponsor.rightCard.videoTitle;
  form.elements.videoCtaLabel.value = dashboardState.sponsor.rightCard.videoCtaLabel;
  form.elements.videoHref.value = dashboardState.sponsor.rightCard.videoHref;
}

function formatFooterLinksForForm(column, count) {
  const links = Array.isArray(column.links) ? column.links : [];

  return Array.from({ length: count }, (_, index) => {
    const link = links[index] || { label: '', href: '' };
    return `${link.label}|${link.href}`;
  }).join('\n');
}

function resetFooterBrandForm() {
  const form = document.getElementById('footer-brand-form');

  if (!form) {
    return;
  }

  form.elements.brandTitle.value = dashboardState.footer.brand.title;
  form.elements.brandSubtitle.value = dashboardState.footer.brand.subtitle;
  form.elements.addressLine1.value = dashboardState.footer.contacts.addressLine1;
  form.elements.addressLine2.value = dashboardState.footer.contacts.addressLine2;
  form.elements.email.value = dashboardState.footer.contacts.email;
  form.elements.phone.value = dashboardState.footer.contacts.phone;
  form.elements.copyright.value = dashboardState.footer.copyright;
}

function resetFooterNewsletterForm() {
  const form = document.getElementById('footer-newsletter-form');

  if (!form) {
    return;
  }

  form.elements.title.value = dashboardState.footer.newsletter.title;
  form.elements.placeholder.value = dashboardState.footer.newsletter.placeholder;
  form.elements.buttonLabel.value = dashboardState.footer.newsletter.buttonLabel;
}

function resetFooterLinksForm() {
  const form = document.getElementById('footer-links-form');

  if (!form) {
    return;
  }

  const columns = dashboardState.footer.columns || [];
  form.elements.column1Title.value = columns[0]?.title || '';
  form.elements.column1Links.value = formatFooterLinksForForm(columns[0] || {}, 3);
  form.elements.column2Title.value = columns[1]?.title || '';
  form.elements.column2Links.value = formatFooterLinksForForm(columns[1] || {}, 4);
  form.elements.column3Title.value = columns[2]?.title || '';
  form.elements.column3Links.value = formatFooterLinksForForm(columns[2] || {}, 3);
}

function resetProjectsContentForm() {
  const form = document.getElementById('projects-content-form');

  if (!form) {
    return;
  }

  form.elements.title.value = dashboardState.projects.title;
  form.elements.description.value = dashboardState.projects.description;
}

function resetProjectsCardForm() {
  const form = document.getElementById('projects-card-form');

  if (!form) {
    return;
  }

  form.reset();
  form.elements.id.value = '';
  form.elements.variant.value = 'school';
  form.elements.progressPercent.value = '';
}

function handleSectionClick(target) {
  const sectionTarget = target.closest('[data-section-target]');

  if (!sectionTarget) {
    return false;
  }

  dashboardState.activeSection = sectionTarget.dataset.sectionTarget;
  window.location.hash = dashboardState.activeSection;
  render();
  return true;
}

function handleHeaderListActions(target) {
  const editNavId = target.dataset.editNav;
  const deleteNavId = target.dataset.deleteNav;
  const editActionId = target.dataset.editAction;
  const deleteActionId = target.dataset.deleteAction;

  if (editNavId) {
    const item = dashboardState.header.navigation.find((entry) => entry.id === editNavId);
    const form = document.getElementById('header-nav-form');

    if (item && form) {
      form.elements.id.value = item.id;
      form.elements.label.value = item.label;
      form.elements.href.value = item.href;
      form.elements.isActive.checked = Boolean(item.isActive);
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return true;
  }

  if (deleteNavId) {
    dashboardState.header.navigation = dashboardState.header.navigation.filter((entry) => entry.id !== deleteNavId);
    saveHeaderAndRender();
    return true;
  }

  if (editActionId) {
    const item = dashboardState.header.actions.find((entry) => entry.id === editActionId);
    const form = document.getElementById('header-action-form');

    if (item && form) {
      form.elements.id.value = item.id;
      form.elements.label.value = item.label;
      form.elements.href.value = item.href;
      form.elements.variant.value = item.variant;
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return true;
  }

  if (deleteActionId) {
    dashboardState.header.actions = dashboardState.header.actions.filter((entry) => entry.id !== deleteActionId);
    saveHeaderAndRender();
    return true;
  }

  return false;
}

function handleAboutListActions(target) {
  const editCardId = target.dataset.editAboutCard;
  const deleteCardId = target.dataset.deleteAboutCard;

  if (editCardId) {
    const item = dashboardState.about.cards.find((entry) => entry.id === editCardId);
    const form = document.getElementById('about-card-form');

    if (item && form) {
      form.elements.id.value = item.id;
      form.elements.title.value = item.title;
      form.elements.description.value = item.description;
      form.elements.variant.value = item.variant;
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return true;
  }

  if (deleteCardId) {
    dashboardState.about.cards = dashboardState.about.cards.filter((entry) => entry.id !== deleteCardId);
    saveAboutAndRender();
    return true;
  }

  return false;
}

function handleImpactListActions(target) {
  const editStatId = target.dataset.editImpactStat;
  const deleteStatId = target.dataset.deleteImpactStat;

  if (editStatId) {
    const item = dashboardState.impact.stats.find((entry) => entry.id === editStatId);
    const form = document.getElementById('impact-stat-form');

    if (item && form) {
      form.elements.id.value = item.id;
      form.elements.value.value = item.value;
      form.elements.title.value = item.title;
      form.elements.description.value = item.description;
      form.elements.variant.value = item.variant;
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return true;
  }

  if (deleteStatId) {
    dashboardState.impact.stats = dashboardState.impact.stats.filter((entry) => entry.id !== deleteStatId);
    saveImpactAndRender();
    return true;
  }

  return false;
}

function handleProjectListActions(target) {
  const editCardId = target.dataset.editProjectCard;
  const deleteCardId = target.dataset.deleteProjectCard;

  if (editCardId) {
    const item = dashboardState.projects.cards.find((entry) => entry.id === editCardId);
    const form = document.getElementById('projects-card-form');

    if (item && form) {
      form.elements.id.value = item.id;
      form.elements.kicker.value = item.kicker;
      form.elements.title.value = item.title;
      form.elements.description.value = item.description;
      form.elements.amountRaised.value = item.amountRaised;
      form.elements.goalAmount.value = item.goalAmount;
      form.elements.progressPercent.value = item.progressPercent;
      form.elements.ctaLabel.value = item.ctaLabel;
      form.elements.ctaHref.value = item.ctaHref;
      form.elements.variant.value = item.variant;
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return true;
  }

  if (deleteCardId) {
    dashboardState.projects.cards = dashboardState.projects.cards.filter((entry) => entry.id !== deleteCardId);
    saveProjectsAndRender();
    return true;
  }

  return false;
}

function handleResetButtons(target) {
  const resetSectionButton = target.closest('[data-reset-section]');
  const resetFormButton = target.closest('[data-reset-form]');

  if (resetSectionButton) {
    const sectionId = resetSectionButton.dataset.resetSection;

    if (sectionId === 'header') {
      dashboardState.header = resetHeaderContent();
      render();
      return true;
    }

    if (sectionId === 'hero') {
      dashboardState.hero = resetHeroContent();
      render();
      return true;
    }

    if (sectionId === 'about') {
      dashboardState.about = resetAboutContent();
      render();
      return true;
    }

    if (sectionId === 'impact') {
      dashboardState.impact = resetImpactContent();
      render();
      return true;
    }

    if (sectionId === 'projects') {
      dashboardState.projects = resetProjectsContent();
      render();
      return true;
    }

    if (sectionId === 'sponsor') {
      dashboardState.sponsor = resetSponsorContent();
      render();
      return true;
    }

    if (sectionId === 'footer') {
      dashboardState.footer = resetFooterContent();
      render();
      return true;
    }
  }

  if (resetFormButton) {
    const formId = resetFormButton.dataset.resetForm;

    if (formId === 'header-nav') {
      resetHeaderNavForm();
      return true;
    }

    if (formId === 'header-action') {
      resetHeaderActionForm();
      return true;
    }

    if (formId === 'hero-content') {
      resetHeroForm();
      return true;
    }

    if (formId === 'about-card') {
      resetAboutForm();
      return true;
    }

    if (formId === 'impact-content') {
      resetImpactContentForm();
      return true;
    }

    if (formId === 'impact-stat') {
      resetImpactStatForm();
      return true;
    }

    if (formId === 'projects-content') {
      resetProjectsContentForm();
      return true;
    }

    if (formId === 'projects-card') {
      resetProjectsCardForm();
      return true;
    }

    if (formId === 'sponsor-content') {
      resetSponsorContentForm();
      return true;
    }

    if (formId === 'sponsor-profile') {
      resetSponsorProfileForm();
      return true;
    }

    if (formId === 'sponsor-video') {
      resetSponsorVideoForm();
      return true;
    }

    if (formId === 'footer-brand') {
      resetFooterBrandForm();
      return true;
    }

    if (formId === 'footer-newsletter') {
      resetFooterNewsletterForm();
      return true;
    }

    if (formId === 'footer-links') {
      resetFooterLinksForm();
      return true;
    }
  }

  return false;
}

function handleHeaderBrandSubmit(form) {
  dashboardState.header.brand = {
    title: form.elements.title.value.trim(),
    subtitle: form.elements.subtitle.value.trim(),
    href: form.elements.href.value.trim(),
    ariaLabel: form.elements.ariaLabel.value.trim()
  };

  saveHeaderAndRender();
}

function handleHeaderNavSubmit(form) {
  const payload = {
    id: form.elements.id.value || createItemId('nav'),
    label: form.elements.label.value.trim(),
    href: form.elements.href.value.trim(),
    isActive: form.elements.isActive.checked
  };

  if (payload.isActive) {
    dashboardState.header.navigation = dashboardState.header.navigation.map((item) => ({ ...item, isActive: false }));
  }

  const existingIndex = dashboardState.header.navigation.findIndex((item) => item.id === payload.id);

  if (existingIndex >= 0) {
    dashboardState.header.navigation[existingIndex] = payload;
  } else {
    dashboardState.header.navigation.push(payload);
  }

  saveHeaderAndRender();
}

function handleHeaderActionSubmit(form) {
  const payload = {
    id: form.elements.id.value || createItemId('action'),
    label: form.elements.label.value.trim(),
    href: form.elements.href.value.trim(),
    variant: form.elements.variant.value
  };

  const existingIndex = dashboardState.header.actions.findIndex((item) => item.id === payload.id);

  if (existingIndex >= 0) {
    dashboardState.header.actions[existingIndex] = payload;
  } else {
    dashboardState.header.actions.push(payload);
  }

  saveHeaderAndRender();
}

function handleHeroSubmit(form) {
  dashboardState.hero = {
    title: form.elements.title.value.trim(),
    cycleTexts: [
      form.elements.cycleText1.value.trim(),
      form.elements.cycleText2.value.trim(),
      form.elements.cycleText3.value.trim()
    ].filter(Boolean),
    description: form.elements.description.value.trim(),
    primaryCta: {
      label: form.elements.primaryLabel.value.trim(),
      href: form.elements.primaryHref.value.trim()
    },
    secondaryCta: {
      label: form.elements.secondaryLabel.value.trim(),
      href: form.elements.secondaryHref.value.trim()
    }
  };

  saveHeroAndRender();
}

function handleAboutSubmit(form) {
  const payload = {
    id: form.elements.id.value || createItemId('about-card'),
    title: form.elements.title.value.trim(),
    description: form.elements.description.value.trim(),
    variant: form.elements.variant.value
  };

  const existingIndex = dashboardState.about.cards.findIndex((item) => item.id === payload.id);

  if (existingIndex >= 0) {
    dashboardState.about.cards[existingIndex] = payload;
  } else {
    dashboardState.about.cards.push(payload);
  }

  saveAboutAndRender();
}

function handleImpactContentSubmit(form) {
  dashboardState.impact.title = form.elements.title.value.trim();
  dashboardState.impact.description = form.elements.description.value.trim();
  dashboardState.impact.ctaLabel = form.elements.ctaLabel.value.trim();
  dashboardState.impact.ctaHref = form.elements.ctaHref.value.trim();
  saveImpactAndRender();
}

function handleImpactStatSubmit(form) {
  const payload = {
    id: form.elements.id.value || createItemId('impact-stat'),
    value: form.elements.value.value.trim(),
    title: form.elements.title.value.trim(),
    description: form.elements.description.value.trim(),
    variant: form.elements.variant.value
  };

  const existingIndex = dashboardState.impact.stats.findIndex((item) => item.id === payload.id);

  if (existingIndex >= 0) {
    dashboardState.impact.stats[existingIndex] = payload;
  } else {
    dashboardState.impact.stats.push(payload);
  }

  saveImpactAndRender();
}

function handleProjectsContentSubmit(form) {
  dashboardState.projects.title = form.elements.title.value.trim();
  dashboardState.projects.description = form.elements.description.value.trim();
  saveProjectsAndRender();
}

function handleProjectCardSubmit(form) {
  const progressPercent = Number(form.elements.progressPercent.value);
  const payload = {
    id: form.elements.id.value || createItemId('project-card'),
    kicker: form.elements.kicker.value.trim(),
    title: form.elements.title.value.trim(),
    description: form.elements.description.value.trim(),
    amountRaised: form.elements.amountRaised.value.trim(),
    goalAmount: form.elements.goalAmount.value.trim(),
    progressPercent: Number.isFinite(progressPercent) ? Math.max(0, Math.min(100, progressPercent)) : 0,
    ctaLabel: form.elements.ctaLabel.value.trim(),
    ctaHref: form.elements.ctaHref.value.trim(),
    variant: form.elements.variant.value
  };

  const existingIndex = dashboardState.projects.cards.findIndex((item) => item.id === payload.id);

  if (existingIndex >= 0) {
    dashboardState.projects.cards[existingIndex] = payload;
  } else {
    dashboardState.projects.cards.push(payload);
  }

  saveProjectsAndRender();
}

function handleSponsorContentSubmit(form) {
  dashboardState.sponsor.title = form.elements.title.value.trim();
  dashboardState.sponsor.description = form.elements.description.value.trim();
  saveSponsorAndRender();
}

function handleSponsorProfileSubmit(form) {
  dashboardState.sponsor.leftCard = {
    ...dashboardState.sponsor.leftCard,
    name: form.elements.name.value.trim(),
    age: form.elements.age.value.trim(),
    location: form.elements.location.value.trim(),
    flagEmoji: form.elements.flagEmoji.value.trim(),
    paragraphs: [form.elements.paragraph1.value.trim(), form.elements.paragraph2.value.trim()],
    primaryCta: {
      label: form.elements.primaryLabel.value.trim(),
      href: form.elements.primaryHref.value.trim()
    },
    secondaryCta: {
      label: form.elements.secondaryLabel.value.trim(),
      href: form.elements.secondaryHref.value.trim()
    }
  };
  saveSponsorAndRender();
}

function handleSponsorVideoSubmit(form) {
  dashboardState.sponsor.rightCard = {
    ...dashboardState.sponsor.rightCard,
    title: form.elements.title.value.trim(),
    description: form.elements.description.value.trim(),
    videoTitle: form.elements.videoTitle.value.trim(),
    videoCtaLabel: form.elements.videoCtaLabel.value.trim(),
    videoHref: form.elements.videoHref.value.trim()
  };
  saveSponsorAndRender();
}

function parseFooterLinks(value) {
  return value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => {
      const [label = '', href = ''] = line.split('|');

      return {
        id: `footer-link-${Date.now()}-${index}-${Math.random().toString(16).slice(2, 6)}`,
        label: label.trim(),
        href: href.trim()
      };
    })
    .filter((item) => item.label && item.href);
}

function handleFooterBrandSubmit(form) {
  dashboardState.footer.brand = {
    title: form.elements.brandTitle.value.trim(),
    subtitle: form.elements.brandSubtitle.value.trim()
  };

  dashboardState.footer.contacts = {
    addressLine1: form.elements.addressLine1.value.trim(),
    addressLine2: form.elements.addressLine2.value.trim(),
    email: form.elements.email.value.trim(),
    phone: form.elements.phone.value.trim()
  };

  dashboardState.footer.copyright = form.elements.copyright.value.trim();
  saveFooterAndRender();
}

function handleFooterNewsletterSubmit(form) {
  dashboardState.footer.newsletter = {
    title: form.elements.title.value.trim(),
    placeholder: form.elements.placeholder.value.trim(),
    buttonLabel: form.elements.buttonLabel.value.trim()
  };

  saveFooterAndRender();
}

function handleFooterLinksSubmit(form) {
  dashboardState.footer.columns = [
    {
      id: 'footer-column-1',
      title: form.elements.column1Title.value.trim(),
      links: parseFooterLinks(form.elements.column1Links.value)
    },
    {
      id: 'footer-column-2',
      title: form.elements.column2Title.value.trim(),
      links: parseFooterLinks(form.elements.column2Links.value)
    },
    {
      id: 'footer-column-3',
      title: form.elements.column3Title.value.trim(),
      links: parseFooterLinks(form.elements.column3Links.value)
    }
  ];

  saveFooterAndRender();
}

function handleSubmit(event) {
  event.preventDefault();

  if (event.target.matches('#header-brand-form')) {
    handleHeaderBrandSubmit(event.target);
    return;
  }

  if (event.target.matches('#header-nav-form')) {
    handleHeaderNavSubmit(event.target);
    return;
  }

  if (event.target.matches('#header-action-form')) {
    handleHeaderActionSubmit(event.target);
    return;
  }

  if (event.target.matches('#hero-content-form')) {
    handleHeroSubmit(event.target);
    return;
  }

  if (event.target.matches('#about-card-form')) {
    handleAboutSubmit(event.target);
    return;
  }

  if (event.target.matches('#impact-content-form')) {
    handleImpactContentSubmit(event.target);
    return;
  }

  if (event.target.matches('#impact-stat-form')) {
    handleImpactStatSubmit(event.target);
    return;
  }

  if (event.target.matches('#projects-content-form')) {
    handleProjectsContentSubmit(event.target);
    return;
  }

  if (event.target.matches('#projects-card-form')) {
    handleProjectCardSubmit(event.target);
    return;
  }

  if (event.target.matches('#sponsor-content-form')) {
    handleSponsorContentSubmit(event.target);
    return;
  }

  if (event.target.matches('#sponsor-profile-form')) {
    handleSponsorProfileSubmit(event.target);
    return;
  }

  if (event.target.matches('#sponsor-video-form')) {
    handleSponsorVideoSubmit(event.target);
    return;
  }

  if (event.target.matches('#footer-brand-form')) {
    handleFooterBrandSubmit(event.target);
    return;
  }

  if (event.target.matches('#footer-newsletter-form')) {
    handleFooterNewsletterSubmit(event.target);
    return;
  }

  if (event.target.matches('#footer-links-form')) {
    handleFooterLinksSubmit(event.target);
  }
}

function handleClick(event) {
  const target = event.target;

  if (handleSectionClick(target)) {
    return;
  }

  if (handleResetButtons(target)) {
    return;
  }

  if (handleHeaderListActions(target)) {
    return;
  }

  if (handleAboutListActions(target)) {
    return;
  }

  if (handleImpactListActions(target)) {
    return;
  }

  handleProjectListActions(target);
}

function render() {
  if (!app) {
    return;
  }

  app.innerHTML = layoutTemplate();
  renderPreview();
  applyLucideIcons(app);
}

if (app) {
  app.addEventListener('click', handleClick);
  app.addEventListener('submit', handleSubmit);
  window.addEventListener('hashchange', () => {
    const nextSection = getInitialSection();

    if (nextSection !== dashboardState.activeSection) {
      dashboardState.activeSection = nextSection;
      render();
    }
  });
  render();
}
