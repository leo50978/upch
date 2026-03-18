export const defaultImpactContent = {
  title: 'Notre impact en chiffres',
  description:
    'Chaque chiffre représente une vie transformée. Grâce à l’éducation, à la nutrition et au soutien communautaire, nous aidons les enfants vulnérables à bâtir un avenir meilleur.',
  ctaLabel: 'Voir le rapport d’impact',
  ctaHref: '#impact-report',
  stats: [
    {
      id: 'impact-stat-1',
      variant: 'children',
      value: '2,450+',
      title: 'Enfants accompagnés',
      description: 'Enfants bénéficiant d’éducation, de repas et d’un soutien essentiel.',
      imageUrl: 'PHOTOS/pexels-justebuka-20407104.jpg',
      imageAltUrl: 'PHOTOS/pexels-b-aristotle-guweh-jr-1643208950-35610365.jpg'
    },
    {
      id: 'impact-stat-2',
      variant: 'communities',
      value: '35+',
      title: 'Communautés touchées',
      description: 'Communautés bénéficiaires de nos programmes et initiatives.',
      imageUrl: 'PHOTOS/pexels-prince-beguin-81839921-31773583.jpg',
      imageAltUrl: 'PHOTOS/pexels-speakmediauganda-35305044.jpg'
    },
    {
      id: 'impact-stat-3',
      variant: 'projects',
      value: '120+',
      title: 'Projets réalisés',
      description: 'Projets éducatifs, nutritionnels et de développement menés à bien.',
      imageUrl: 'PHOTOS/pexels-safari-consoler-3290243-11834954.jpg',
      imageAltUrl: 'PHOTOS/4.jpg'
    },
    {
      id: 'impact-stat-4',
      variant: 'volunteers',
      value: '85+',
      title: 'Volontaires mobilisés',
      description: 'Des bénévoles engagés qui soutiennent notre mission dans le monde.',
      imageUrl: 'PHOTOS/pexels-director-muuh-321947994-20101037.jpg',
      imageAltUrl: 'PHOTOS/5.jpg'
    }
  ]
};

export function cloneImpactContent(content = defaultImpactContent) {
  return JSON.parse(JSON.stringify(content));
}
