export const defaultHeaderContent = {
  brand: {
    title: 'LHUPC',
    subtitle: 'HELPING UNDERPRIVILEGED CHILDREN',
    href: '/index.html',
    ariaLabel: 'LHUPC / AED',
    logoUrl: '/src/logo/ICON.png'
  },
  navigation: [
    { id: 'nav-1', label: 'WHO WE ARE', href: '/pages/qui-sommes-nous.html', isActive: true },
    { id: 'nav-2', label: 'WHAT WE DO', href: '/pages/ce-que-nous-faisons.html', isActive: false },
    { id: 'nav-3', label: 'IMPACT & TRANSPARENCY', href: '/pages/impact-transparence.html', isActive: false }
  ],
  actions: [
    { id: 'action-1', label: 'Donate', href: '/pages/faire-un-don.html', variant: 'primary' },
    { id: 'action-2', label: 'Sponsor a child', href: '/pages/parrainer-un-enfant.html', variant: 'secondary' }
  ]
};

export const defaultHeaderContentFr = {
  brand: {
    title: 'LHUPC',
    subtitle: 'AIDONS LES ENFANTS DÉFAVORISÉS',
    href: '/index.html',
    ariaLabel: 'LHUPC / AED',
    logoUrl: '/src/logo/ICON.png'
  },
  navigation: [
    { id: 'nav-1', label: 'QUI SOMMES-NOUS', href: '/pages/qui-sommes-nous.html', isActive: true },
    { id: 'nav-2', label: 'CE QUE NOUS FAISONS', href: '/pages/ce-que-nous-faisons.html', isActive: false },
    { id: 'nav-3', label: 'IMPACT & TRANSPARENCE', href: '/pages/impact-transparence.html', isActive: false }
  ],
  actions: [
    { id: 'action-1', label: 'Faire un don', href: '/pages/faire-un-don.html', variant: 'primary' },
    { id: 'action-2', label: 'Parrainer un enfant', href: '/pages/parrainer-un-enfant.html', variant: 'secondary' }
  ]
};

export function cloneHeaderContent(content = defaultHeaderContent) {
  return JSON.parse(JSON.stringify(content));
}
