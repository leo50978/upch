export const defaultImpactContent = {
  title: 'Our impact in numbers',
  description:
    'Every number reflects a life changed. Through education, nutrition, and community support, we help vulnerable children build a better future.',
  ctaLabel: 'View the impact report',
  ctaHref: '/pages/impact-transparence.html',
  stats: [
    {
      id: 'impact-stat-1',
      variant: 'children',
      value: '2,450+',
      title: 'Children supported',
      description: 'Children receiving education, meals, and essential support.',
      imageUrl: 'PHOTOS/pexels-justebuka-20407104.jpg',
      imageAltUrl: 'PHOTOS/pexels-b-aristotle-guweh-jr-1643208950-35610365.jpg'
    },
    {
      id: 'impact-stat-2',
      variant: 'communities',
      value: '35+',
      title: 'Communities reached',
      description: 'Communities benefiting from our programs and initiatives.',
      imageUrl: 'PHOTOS/pexels-prince-beguin-81839921-31773583.jpg',
      imageAltUrl: 'PHOTOS/pexels-speakmediauganda-35305044.jpg'
    },
    {
      id: 'impact-stat-3',
      variant: 'projects',
      value: '120+',
      title: 'Projects delivered',
      description: 'Education, nutrition, and development projects successfully carried out.',
      imageUrl: 'PHOTOS/pexels-safari-consoler-3290243-11834954.jpg',
      imageAltUrl: 'PHOTOS/4.jpg'
    },
    {
      id: 'impact-stat-4',
      variant: 'volunteers',
      value: '85+',
      title: 'Volunteers mobilized',
      description: 'Committed volunteers helping advance our mission.',
      imageUrl: 'PHOTOS/pexels-director-muuh-321947994-20101037.jpg',
      imageAltUrl: 'PHOTOS/5.jpg'
    }
  ]
};

export const defaultImpactContentFr = {
  title: 'Notre impact en chiffres',
  description:
    'Chaque chiffre représente une vie transformée. Grâce à l’éducation, à la nutrition et au soutien communautaire, nous aidons les enfants vulnérables à bâtir un avenir meilleur.',
  ctaLabel: 'Voir le rapport d’impact',
  ctaHref: '/pages/impact-transparence.html',
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
