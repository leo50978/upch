export const defaultFooterContent = {
  brand: {
    title: 'LHUPC',
    subtitle: 'SUPPORT FOR VULNERABLE CHILDREN',
    logoUrl: '/src/logo/ICON.png'
  },
  contacts: {
    addressLine1: '123 Compassion Street,',
    addressLine2: 'Port-au-Prince, Haiti',
    email: 'contact@lhupc.org',
    phone: '+509 1234 5678'
  },
  columns: [
    {
      id: 'footer-column-1',
      title: 'About',
      links: [
        { id: 'footer-link-1', label: 'Who we are', href: '/pages/qui-sommes-nous.html' },
        { id: 'footer-link-2', label: 'Our mission', href: '/pages/notre-mission.html' },
        { id: 'footer-link-3', label: 'Our programs', href: '/pages/nos-programmes.html' }
      ]
    },
    {
      id: 'footer-column-2',
      title: 'Take action',
      links: [
        { id: 'footer-link-4', label: 'Get involved', href: '/pages/s-impliquer.html' },
        { id: 'footer-link-5', label: 'Sponsor a child', href: '/pages/parrainer-un-enfant.html' },
        { id: 'footer-link-6', label: 'Donate', href: '/pages/faire-un-don.html' },
        { id: 'footer-link-7', label: 'Become a volunteer', href: '/pages/devenir-benevole.html' }
      ]
    },
    {
      id: 'footer-column-3',
      title: 'Policies',
      links: [
        { id: 'footer-link-8', label: 'Policies', href: '/pages/politiques.html' },
        { id: 'footer-link-9', label: 'Impact & transparency', href: '/pages/impact-transparence.html' },
        { id: 'footer-link-10', label: 'Our policies', href: '/pages/nos-politiques.html' },
        { id: 'footer-link-11', label: 'Privacy policy', href: '/pages/politique-de-confidentialite.html' }
      ]
    }
  ],
  newsletter: {
    title: 'Subscribe to the newsletter',
    placeholder: 'Your email',
    buttonLabel: 'Subscribe'
  },
  copyright: '© 2026 LHUPC. All rights reserved.'
};

export const defaultFooterContentFr = {
  brand: {
    title: 'LHUPC',
    subtitle: 'PETITS CŒURS DÉFAVORISÉS',
    logoUrl: '/src/logo/ICON.png'
  },
  contacts: {
    addressLine1: '123 rue de la Compassion,',
    addressLine2: 'Port-au-Prince, Haïti',
    email: 'contact@lhupc.org',
    phone: '+509 1234 5678'
  },
  columns: [
    {
      id: 'footer-column-1',
      title: 'À propos',
      links: [
        { id: 'footer-link-1', label: 'Qui sommes-nous', href: '/pages/qui-sommes-nous.html' },
        { id: 'footer-link-2', label: 'Notre mission', href: '/pages/notre-mission.html' },
        { id: 'footer-link-3', label: 'Nos programmes', href: '/pages/nos-programmes.html' }
      ]
    },
    {
      id: 'footer-column-2',
      title: 'Agir avec nous',
      links: [
        { id: 'footer-link-4', label: 'S’impliquer', href: '/pages/s-impliquer.html' },
        { id: 'footer-link-5', label: 'Parrainer un enfant', href: '/pages/parrainer-un-enfant.html' },
        { id: 'footer-link-6', label: 'Faire un don', href: '/pages/faire-un-don.html' },
        { id: 'footer-link-7', label: 'Devenir bénévole', href: '/pages/devenir-benevole.html' }
      ]
    },
    {
      id: 'footer-column-3',
      title: 'Politiques',
      links: [
        { id: 'footer-link-8', label: 'Politiques', href: '/pages/politiques.html' },
        { id: 'footer-link-9', label: 'Impact & transparence', href: '/pages/impact-transparence.html' },
        { id: 'footer-link-10', label: 'Nos politiques', href: '/pages/nos-politiques.html' },
        { id: 'footer-link-11', label: 'Politique de confidentialité', href: '/pages/politique-de-confidentialite.html' }
      ]
    }
  ],
  newsletter: {
    title: 'S’abonner à la newsletter',
    placeholder: 'Votre email',
    buttonLabel: 'S’abonner'
  },
  copyright: '© 2026 LHUPC. Tous droits réservés.'
};

export function cloneFooterContent(content = defaultFooterContent) {
  return JSON.parse(JSON.stringify(content));
}
