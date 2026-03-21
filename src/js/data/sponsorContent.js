export const defaultSponsorContent = {
  title: 'You can help end poverty from childhood',
  description:
    'Sponsorship creates lasting change by giving children education, support, and opportunities to build a better future.',
  leftCard: {
    name: 'Jackson',
    age: '7 years old',
    location: 'Seguin, Haiti',
    flagEmoji: '🇭🇹',
    photoUrl: 'PHOTOS/pexels-director-muuh-321947994-20101037.jpg',
    paragraphs: [
      'Make a donation and give Jackson the chance to receive education, medical care, and emotional support.',
      'Your sponsorship can break the cycle of poverty and transform his future.'
    ],
    primaryCta: {
      label: 'Discover his story',
      href: '/pages/parrainer-un-enfant.html'
    },
    secondaryCta: {
      label: 'See other children',
      href: '/pages/s-impliquer.html'
    }
  },
  rightCard: {
    title: 'How sponsorship works',
    description:
      'A monthly donation of $39 helps children living in poverty access care, learning support, life skills, and vocational preparation before graduation.',
    videoTitle: 'Sponsorship: how it works',
    videoCtaLabel: 'Watch the video',
    videoHref: '/pages/parrainer-un-enfant.html'
  }
};

export const defaultSponsorContentFr = {
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
