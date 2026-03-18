import { Header, setupHeader } from './components/layout/header.js?v=20260318-9';
import { Footer } from './components/layout/footer.js?v=20260318-3';
import { HeroSection, setupHeroSection } from './components/sections/heroSection.js?v=20260318-5';
import { AboutSection } from './components/sections/aboutSection.js?v=20260317-2';
import { ProjectsSection } from './components/sections/projectsSection.js?v=20260317-2';
import { SponsorSection } from './components/sections/sponsorSection.js?v=20260317-2';
import { ImpactSection } from './components/sections/impactSection.js?v=20260317-2';

let destroyHeader = () => {};
let destroyHero = () => {};

export function renderApp(root) {
  destroyHeader();
  destroyHero();

  root.innerHTML = `
    ${Header()}
    <main class="page-shell">
      ${HeroSection()}
      ${AboutSection()}
      ${ImpactSection()}
      ${ProjectsSection()}
      ${SponsorSection()}
    </main>
    ${Footer()}
  `;

  destroyHeader = setupHeader(root);
  destroyHero = setupHeroSection(root);

  return () => {
    destroyHeader();
    destroyHero();
  };
}
