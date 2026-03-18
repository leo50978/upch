export const defaultHeroContent = {
  title: 'Aider les enfants défavorisés',
  description:
    'Rejoignez-nous pour changer la vie des enfants défavorisés grâce aux soins, à l’éducation et au soutien.',
  primaryCta: {
    label: 'S’impliquer',
    href: '#about'
  },
  secondaryCta: {
    label: 'Faire un don',
    href: '#donate'
  },
  imageUrl: 'PHOTOS/1.jpg',
  cycleTexts: [
    'Aider les enfants défavorisés',
    'Construire un avenir plus juste',
    'Agir ensemble, maintenant'
  ]
};

export function cloneHeroContent(content = defaultHeroContent) {
  return JSON.parse(JSON.stringify(content));
}
