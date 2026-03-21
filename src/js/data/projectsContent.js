export const defaultProjectsContent = {
  title: 'Support our active projects',
  description: 'Help us bring these projects to life by contributing to our current campaigns.',
  cards: [
    {
      id: 'project-card-1',
      variant: 'school',
      kicker: 'Project 1',
      title: 'Back-to-school campaign',
      description: 'Help provide school kits for 200 children.',
      amountRaised: '$2,500',
      goalAmount: '$5,000',
      progressPercent: 50,
      ctaLabel: 'Donate to this project',
      ctaHref: '/pages/faire-un-don.html',
      imageUrl: 'PHOTOS/2.jpg'
    },
    {
      id: 'project-card-2',
      variant: 'learning',
      kicker: 'Learning hub',
      title: 'Community learning center',
      description: 'Create a safe place where children can study.',
      amountRaised: '$3,000',
      goalAmount: '$10,000',
      progressPercent: 30,
      ctaLabel: 'Support this project',
      ctaHref: '/pages/faire-un-don.html',
      imageUrl: 'PHOTOS/3.jpg'
    },
    {
      id: 'project-card-3',
      variant: 'nutrition',
      kicker: 'Nutrition program',
      title: 'Nutrition program',
      description: 'Provide meals for children in vulnerable communities.',
      amountRaised: '$1,200',
      goalAmount: '$4,000',
      progressPercent: 30,
      ctaLabel: 'Donate now',
      ctaHref: '/pages/faire-un-don.html',
      imageUrl: 'PHOTOS/4.jpg'
    }
  ]
};

export const defaultProjectsContentFr = {
  title: 'Soutenez nos projets en cours',
  description: 'Aidez-nous à concrétiser ces projets en contribuant à nos campagnes en cours.',
  cards: [
    {
      id: 'project-card-1',
      variant: 'school',
      kicker: 'Projet 1',
      title: 'Campagne rentrée scolaire',
      description: 'Aider à fournir des kits scolaires pour 200 enfants.',
      amountRaised: '$2,500',
      goalAmount: '$5,000',
      progressPercent: 50,
      ctaLabel: 'Donner pour ce projet',
      ctaHref: '/pages/faire-un-don.html',
      imageUrl: 'PHOTOS/2.jpg'
    },
    {
      id: 'project-card-2',
      variant: 'learning',
      kicker: 'Centre d’apprentissage',
      title: 'Centre d’apprentissage communautaire',
      description: 'Créer un lieu sûr pour que les enfants puissent étudier.',
      amountRaised: '$3,000',
      goalAmount: '$10,000',
      progressPercent: 30,
      ctaLabel: 'Soutenir ce projet',
      ctaHref: '/pages/faire-un-don.html',
      imageUrl: 'PHOTOS/3.jpg'
    },
    {
      id: 'project-card-3',
      variant: 'nutrition',
      kicker: 'Programme nutrition',
      title: 'Programme nutrition',
      description: 'Offrir des repas aux enfants des communautés vulnérables.',
      amountRaised: '$1,200',
      goalAmount: '$4,000',
      progressPercent: 30,
      ctaLabel: 'Donner maintenant',
      ctaHref: '/pages/faire-un-don.html',
      imageUrl: 'PHOTOS/4.jpg'
    }
  ]
};

export function cloneProjectsContent(content = defaultProjectsContent) {
  return JSON.parse(JSON.stringify(content));
}
