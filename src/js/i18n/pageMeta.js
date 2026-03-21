import { pickLocalized } from './localize.js';
import { getLanguage } from '../store/languageStore.js';

const pageMeta = {
  home: {
    title: {
      en: 'LHUPC / AED',
      fr: 'LHUPC / AED'
    },
    description: {
      en: 'LHUPC / AED institutional platform with an editable public website and upcoming Firebase connection.',
      fr: 'Plateforme institutionnelle LHUPC / AED avec site public administrable et future connexion Firebase.'
    }
  },
  links: {
    title: {
      en: 'LHUPC / AED - All links',
      fr: 'LHUPC / AED - Tous les liens'
    },
    description: {
      en: 'All LHUPC / AED pages and links gathered on one illustrated page.',
      fr: 'Toutes les pages et liens de LHUPC / AED, réunis sur une page illustrée.'
    }
  },
  donation: {
    title: {
      en: 'LHUPC / AED - Donate',
      fr: 'LHUPC / AED - Faire un don'
    },
    description: {
      en: 'Support children through education, health, nutrition, and long-term care. Prepare your donation before continuing to Wise.',
      fr: 'Soutenez les enfants via l’éducation, la santé, la nutrition et l’accompagnement durable. Préparez votre don avant de poursuivre sur Wise.'
    }
  },
  'qui-sommes-nous': {
    title: {
      en: 'LHUPC / AED - Who we are',
      fr: 'LHUPC / AED - Qui sommes-nous'
    },
    subtitle: {
      en: 'About',
      fr: 'À propos'
    },
    label: {
      en: 'Who we are',
      fr: 'Qui sommes-nous'
    },
    description: {
      en: 'Discover the story of LHUPC / AED, our purpose, and the values that guide every action we take for children.',
      fr: 'Découvrez l’histoire de LHUPC / AED, notre raison d’être et les valeurs qui guident chacune de nos actions en faveur des enfants.'
    }
  },
  'ce-que-nous-faisons': {
    title: {
      en: 'LHUPC / AED - What we do',
      fr: 'LHUPC / AED - Ce que nous faisons'
    },
    subtitle: {
      en: 'Programs & action',
      fr: 'Programmes & Actions'
    },
    label: {
      en: 'What we do',
      fr: 'Ce que nous faisons'
    },
    description: {
      en: 'Explore our areas of intervention: education, health, nutrition, and protection for children facing vulnerability.',
      fr: 'Découvrez nos axes d’intervention : éducation, santé, nutrition et protection des enfants en situation de vulnérabilité.'
    }
  },
  'impact-transparence': {
    title: {
      en: 'LHUPC / AED - Impact & transparency',
      fr: 'LHUPC / AED - Impact & transparence'
    },
    subtitle: {
      en: 'Results & reports',
      fr: 'Résultats & rapports'
    },
    label: {
      en: 'Impact & transparency',
      fr: 'Impact & transparence'
    },
    description: {
      en: 'Follow our results, key indicators, and transparency commitments through reports, projects delivered, and communities supported.',
      fr: 'Suivez nos résultats, indicateurs clés et engagements de transparence : rapports financiers, projets livrés et bénéficiaires accompagnés.'
    }
  },
  'nos-politiques': {
    title: {
      en: 'LHUPC / AED - Our policies',
      fr: 'LHUPC / AED - Nos politiques'
    },
    subtitle: {
      en: 'Governance',
      fr: 'Gouvernance'
    },
    label: {
      en: 'Our policies',
      fr: 'Nos politiques'
    },
    description: {
      en: 'Review our frameworks and charters covering child protection, compliance, ethics, and risk management.',
      fr: 'Consultez nos cadres et chartes : protection de l’enfance, conformité, éthique, gestion des risques.'
    }
  },
  'nos-programmes': {
    title: {
      en: 'LHUPC / AED - Our programs',
      fr: 'LHUPC / AED - Nos programmes'
    },
    subtitle: {
      en: 'Programs & action',
      fr: 'Programmes & Actions'
    },
    label: {
      en: 'Our programs',
      fr: 'Nos programmes'
    },
    description: {
      en: 'Educational pathways, psychosocial support, nutrition, health, and empowerment: explore our key programs.',
      fr: 'Parcours éducatifs, soutien psychosocial, nutrition, santé et autonomisation : explorez nos programmes clés.'
    }
  },
  'notre-mission': {
    title: {
      en: 'LHUPC / AED - Our mission',
      fr: 'LHUPC / AED - Notre mission'
    },
    subtitle: {
      en: 'About',
      fr: 'À propos'
    },
    label: {
      en: 'Our mission',
      fr: 'Notre mission'
    },
    description: {
      en: 'Our mission is to protect, support, and empower every underprivileged child through a comprehensive and sustainable approach.',
      fr: 'Notre mission : protéger, soutenir et émanciper chaque enfant défavorisé grâce à une approche globale et durable.'
    }
  },
  'parrainer-un-enfant': {
    title: {
      en: 'LHUPC / AED - Sponsor a child',
      fr: 'LHUPC / AED - Parrainer un enfant'
    },
    subtitle: {
      en: 'Take action',
      fr: 'Agir avec nous'
    },
    label: {
      en: 'Sponsor a child',
      fr: 'Parrainer un enfant'
    },
    description: {
      en: 'Provide ongoing support for a child through education, health, and care. Learn how sponsorship works.',
      fr: 'Offrez un soutien régulier à un enfant : scolarité, santé et accompagnement. Découvrez comment fonctionne le parrainage.'
    }
  },
  'politique-de-confidentialite': {
    title: {
      en: 'LHUPC / AED - Privacy policy',
      fr: 'LHUPC / AED - Politique de confidentialité'
    },
    subtitle: {
      en: 'Policies',
      fr: 'Politiques'
    },
    label: {
      en: 'Privacy policy',
      fr: 'Politique de confidentialité'
    },
    description: {
      en: 'Learn how we protect personal data and ensure its confidentiality.',
      fr: 'Découvrez comment nous protégeons vos données personnelles et garantissons leur confidentialité.'
    }
  },
  politiques: {
    title: {
      en: 'LHUPC / AED - Policies',
      fr: 'LHUPC / AED - Politiques'
    },
    subtitle: {
      en: 'Governance',
      fr: 'Gouvernance'
    },
    label: {
      en: 'Policies',
      fr: 'Politiques'
    },
    description: {
      en: 'Discover our internal policies, governance, and the ethical commitments that frame every decision we make.',
      fr: 'Découvrez nos politiques internes, notre gouvernance et les engagements éthiques qui encadrent chacune de nos décisions.'
    }
  },
  's-impliquer': {
    title: {
      en: 'LHUPC / AED - Get involved',
      fr: 'LHUPC / AED - S’impliquer'
    },
    subtitle: {
      en: 'Take action',
      fr: 'Agir avec nous'
    },
    label: {
      en: 'Get involved',
      fr: 'S’impliquer'
    },
    description: {
      en: 'See how you can contribute through sponsorship, partnerships, events, fundraising, or logistical support.',
      fr: 'Découvrez comment vous pouvez contribuer : mécénat, partenariats, événements, collectes ou soutien logistique.'
    }
  },
  'devenir-benevole': {
    title: {
      en: 'LHUPC / AED - Become a volunteer',
      fr: 'LHUPC / AED - Devenir bénévole'
    },
    subtitle: {
      en: 'Take action',
      fr: 'Agir avec nous'
    },
    label: {
      en: 'Become a volunteer',
      fr: 'Devenir bénévole'
    },
    description: {
      en: 'Join our field or support teams in facilitation, logistics, health, education, or communication.',
      fr: 'Rejoignez nos équipes terrain ou support : animation, logistique, santé, éducation ou communication.'
    }
  }
};

function getPageEntry(pageKey) {
  return pageMeta[pageKey] || pageMeta.home;
}

export function getPageMeta(pageKey, locale = getLanguage()) {
  const entry = getPageEntry(pageKey);

  return {
    title: pickLocalized(locale, entry.title?.en || pageMeta.home.title.en, entry.title?.fr || pageMeta.home.title.fr),
    subtitle: pickLocalized(locale, entry.subtitle?.en || '', entry.subtitle?.fr || ''),
    label: pickLocalized(locale, entry.label?.en || '', entry.label?.fr || ''),
    description: pickLocalized(
      locale,
      entry.description?.en || pageMeta.home.description.en,
      entry.description?.fr || pageMeta.home.description.fr
    )
  };
}

export function applyPageMeta(pageKey, locale = getLanguage()) {
  if (typeof document === 'undefined') {
    return;
  }

  const meta = getPageMeta(pageKey, locale);
  document.title = meta.title;

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute('content', meta.description);
  }
}
