export const defaultSponsorContent = {
  title: 'Vous pouvez aider à mettre fin à la pauvreté dès l’enfance',
  description:
    'Le parrainage crée un changement durable en offrant aux enfants éducation, soutien et opportunités pour bâtir un avenir meilleur.',
  leftCard: {
    name: 'Jackson',
    age: '7 ans',
    location: 'Seguin, Haiti',
    flagEmoji: '🇭🇹',
    photoUrl: 'PHOTOS/pexels-director-muuh-321947994-20101037.jpg',
    paragraphs: [
      'Faites un don et offrez à Jackson la possibilité de recevoir une éducation, des soins médicaux et un soutien émotionnel.',
      'Votre parrainage peut briser le cycle de la pauvreté et transformer son avenir.'
    ],
    primaryCta: {
      label: 'Découvrir son histoire',
      href: '/pages/parrainer-un-enfant.html'
    },
    secondaryCta: {
      label: 'Voir d’autres enfants',
      href: '/pages/s-impliquer.html'
    }
  },
  rightCard: {
    title: 'Comment fonctionne le parrainage',
    description:
      'Un don mensuel de 39 $ assure aux enfants vivant dans la pauvreté un accès à des soins, un soutien scolaire, des compétences de vie et une formation professionnelle avant leur diplôme.',
    videoTitle: 'Parrainage : mode d’emploi',
    videoCtaLabel: 'Lire la vidéo',
    videoHref: '/pages/parrainer-un-enfant.html'
  }
};

export function cloneSponsorContent(content = defaultSponsorContent) {
  return JSON.parse(JSON.stringify(content));
}
