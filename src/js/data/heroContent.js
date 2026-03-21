export const defaultHeroContent = {
  title: 'Helping underprivileged children',
  description:
    'Join us to change the lives of underprivileged children through care, education, and long-term support.',
  primaryCta: {
    label: 'Get involved',
    href: '/pages/s-impliquer.html'
  },
  secondaryCta: {
    label: 'Donate',
    href: '/pages/faire-un-don.html'
  },
  imageUrl: 'PHOTOS/1.jpg',
  cycleTexts: [
    'Helping underprivileged children',
    'Building a fairer future',
    'Act together, now'
  ]
};

export const defaultHeroContentFr = {
  title: 'Aider les enfants défavorisés',
  description:
    'Rejoignez-nous pour changer la vie des enfants défavorisés grâce aux soins, à l’éducation et au soutien.',
  primaryCta: {
    label: 'S’impliquer',
    href: '/pages/s-impliquer.html'
  },
  secondaryCta: {
    label: 'Faire un don',
    href: '/pages/faire-un-don.html'
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
