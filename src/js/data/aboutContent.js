export const defaultAboutContent = {
  cards: [
    {
      id: 'about-card-1',
      variant: 'mission',
      title: 'Notre mission',
      description: 'Soutenir et autonomiser les enfants défavorisés',
      imageUrl: 'PHOTOS/1.jpg'
    },
    {
      id: 'about-card-2',
      variant: 'programs',
      title: 'Nos programmes',
      description: 'Soutien éducatif, sanitaire et nutritionnel pour les enfants',
      imageUrl: 'PHOTOS/2.jpg'
    },
    {
      id: 'about-card-3',
      variant: 'help',
      title: 'Comment aider',
      description: 'Différentes façons de s’engager et d’avoir un impact',
      imageUrl: 'PHOTOS/3.jpg'
    }
  ]
};

export function cloneAboutContent(content = defaultAboutContent) {
  return JSON.parse(JSON.stringify(content));
}
