import { Header, setupHeader } from './components/layout/header.js?v=20260318-9';
import { Footer } from './components/layout/footer.js?v=20260318-3';
import { initCountAnimations } from './utils/countAnimation.js';

const IMAGES = {
  community: '../PHOTOS/1.jpg',
  classroom: '../PHOTOS/2.jpg',
  celebration: '../PHOTOS/3.jpg',
  care: '../PHOTOS/4.jpg',
  volunteer: '../PHOTOS/5.jpg',
  gathering: '../PHOTOS/pexels-b-aristotle-guweh-jr-1643208950-35610365.jpg',
  director: '../PHOTOS/pexels-director-muuh-321947994-20101037.jpg',
  landscape: '../PHOTOS/pexels-justebuka-20407104.jpg',
  portrait: '../PHOTOS/pexels-prince-beguin-81839921-31773583.jpg',
  safari: '../PHOTOS/pexels-safari-consoler-3290243-11834954.jpg',
  workshop: '../PHOTOS/pexels-speakmediauganda-35305044.jpg'
};

const pagePresets = {
  'qui sommes nous': {
    primaryAction: { label: 'Nous rencontrer', href: '../pages/s-impliquer.html' },
    sections: [
      {
        type: 'hero',
        background: 'linear-gradient(135deg, #fff8fc 0%, #eef6ff 58%, #f7fbff 100%)',
        eyebrow: 'Notre identite',
        title: 'Une organisation ancree dans les communautes et engagee aupres des enfants.',
        text:
          'Nous presentons ici notre histoire, nos valeurs et notre facon de travailler avec les familles, les enfants et les relais communautaires.',
        chips: ['Equipe locale', 'Ecoute active', 'Protection de l enfance', 'Suivi durable'],
        stats: [
          { value: '4', label: 'axes de confiance', note: 'ecouter, agir, mesurer, rendre compte' },
          { value: '1', label: 'cap commun', note: 'garder chaque enfant visible dans nos decisions' },
          { value: '100%', label: 'ancrage terrain', note: 'nos pages privilegient des scenes reelles et humaines' }
        ],
        image: IMAGES.director,
        panelTitle: 'Ce que vous trouverez ici',
        panelItems: ['Notre histoire', 'Nos valeurs', 'Notre facon d agir'],
        panelLabel: 'En bref',
        panelText: 'LHUPC / AED agit avec une equipe de proximite, une gouvernance simple et une attention constante a la dignite des enfants.',
        panelBackground: 'linear-gradient(135deg, #fff1f7 0%, #ffffff 100%)'
      },
      {
        type: 'cards',
        background: 'linear-gradient(135deg, #ffffff 0%, #f2f8ff 100%)',
        title: 'Nos reperes de travail',
        intro: 'Notre identite se lit dans des choix concrets, visibles dans chaque projet et dans chaque relation avec les familles.',
        image: IMAGES.gathering,
        imageLabel: 'Conversation de terrain',
        cards: [
          { icon: 'users', title: 'Presence utile', text: 'Nous faisons remonter les besoins depuis les familles, pas depuis un bureau central.' },
          { icon: 'heart', title: 'Protection d abord', text: 'Chaque action passe par une lecture protection, dignite et securite.' },
          { icon: 'sparkles', title: 'Transparence', text: 'Nous expliquons ce qui est lance, ce qui avance et ce qui demande encore du travail.' },
          { icon: 'badge-check', title: 'Cohesion', text: 'Nos decisions cherchent toujours a garder un lien clair entre besoins, actions et resultats.' }
        ]
      },
      {
        type: 'timeline',
        background: 'linear-gradient(135deg, #f5f9ff 0%, #fff9fc 100%)',
        title: 'Comment nous construisons la confiance',
        intro: 'La confiance se construit dans le temps, avec une methode simple et un dialogue constant.',
        steps: [
          { label: '01', title: 'Ecouter', text: 'Visites, entretiens, observation du quotidien et validation avec les relais communautaires.' },
          { label: '02', title: 'Prioriser', text: 'Nous transformons les besoins en actions courtes, visibles et mesurables.' },
          { label: '03', title: 'Executer', text: 'Une equipe locale pilote et documente, pendant que les partenaires suivent les preuves de terrain.' },
          { label: '04', title: 'Partager', text: 'Photos, resultats, comptes rendus et enseignements reviennent dans le site et le dashboard.' }
        ]
      },
      {
        type: 'spotlight',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)',
        tag: 'Portrait d approche',
        title: 'Notre engagement commence toujours par l ecoute et la proximite.',
        text:
          'Nous voulons que chaque famille sache a qui elle parle, comment nous intervenons et sur quelles valeurs repose notre accompagnement.',
        bullets: ['Respect de la dignite', 'Presence au plus pres des besoins', 'Dialogue permanent avec les communautes'],
        quote: 'La confiance nait quand une organisation sait ecouter, agir et rendre compte avec sincerite.',
        image: IMAGES.portrait,
        imageAlt: 'Portrait terrain',
        reverse: true
      },
      {
        type: 'gallery',
        background: 'linear-gradient(135deg, #fef7fb 0%, #eef5ff 100%)',
        title: 'Scenes qui nous ressemblent',
        intro: 'Quatre images, quatre registres: equipe, programme, communaute, temps long.',
        images: [
          { src: IMAGES.community, caption: 'Moments de proximite avec les enfants' },
          { src: IMAGES.classroom, caption: 'Education et accompagnement quotidien' },
          { src: IMAGES.workshop, caption: 'Travail collectif avec les relais locaux' },
          { src: IMAGES.care, caption: 'Actions visibles et ancrees dans le reel' }
        ]
      }
    ]
  },
  'ce que nous faisons': {
    primaryAction: { label: 'Voir nos programmes', href: '../pages/nos-programmes.html' },
    sections: [
      {
        type: 'hero',
        background: 'linear-gradient(135deg, #f4fff9 0%, #eef6ff 56%, #ffffff 100%)',
        eyebrow: 'Nos actions',
        title: 'Nous intervenons la ou les enfants ont besoin d un appui concret et regulier.',
        text:
          'Nos actions s organisent autour de l education, de la protection, de la nutrition et de la mobilisation communautaire pour repondre aux besoins les plus urgents.',
        chips: ['Education', 'Nutrition', 'Protection', 'Mobilisation communautaire'],
        stats: [
          { value: '234 M', label: 'enfants concernes', note: 'repere UNICEF 2024 pour l education en situation de crise' },
          { value: '242 M', label: 'scolarites perturbees', note: 'repere UNICEF 2024 lie aux evenements climatiques' },
          { value: '4', label: 'piliers de reponse', note: 'agir vite, coordonner, suivre, expliquer' }
        ],
        image: IMAGES.safari,
        panelTitle: 'Nos priorites',
        panelItems: ['Accompagner la scolarite', 'Renforcer la protection', 'Soutenir les familles'],
        panelLabel: 'Ce qui compte',
        panelText: 'Nous cherchons a relier chaque action a un besoin reel, a un suivi clair et a une presence concrete sur le terrain.',
        panelBackground: 'linear-gradient(135deg, #ecfff6 0%, #ffffff 100%)'
      },
      {
        type: 'metrics',
        background: 'linear-gradient(135deg, #ffffff 0%, #effaf4 100%)',
        title: 'Reperes utiles pour comprendre le contexte',
        intro: 'Ces reperes montrent pourquoi nos actions doivent etre rapides, coordonnees et suivies dans la duree.',
        metrics: [
          { value: '1 sur 4', label: 'enfants du monde', text: 'vivent aujourd hui dans un pays touche par un conflit ou une catastrophe' },
          { value: '181 M', label: 'jeunes enfants', text: 'subissent une pauvrete alimentaire severe selon les reperes UNICEF recents' },
          { value: '3 niveaux', label: 'deploiement', text: 'prevention, accompagnement, suivi terrain' }
        ],
        noteTitle: 'Ce que ces chiffres rappellent',
        noteText:
          'Les besoins des enfants evoluent vite. Nos programmes doivent donc rester lisibles, adaptables et capables de prioriser l essentiel.',
        noteItems: ['Agir vite', 'Coordonner localement', 'Mesurer regulierement']
      },
      {
        type: 'cards',
        background: 'linear-gradient(135deg, #f6fbff 0%, #ffffff 100%)',
        title: 'Nos interventions repondent a quatre besoins essentiels',
        intro: 'Chaque pilier complete les autres pour construire un accompagnement plus coherent et plus durable.',
        image: IMAGES.classroom,
        imageLabel: 'Education et accompagnement',
        cards: [
          { icon: 'book-open', title: 'Apprendre', text: 'Remise en classe, materiels, mentorat et suivi de la frequentation.' },
          { icon: 'heart-pulse', title: 'Proteger', text: 'Ecoute, orientation, prevention des violences et soutien psycho-social.' },
          { icon: 'apple', title: 'Soutenir', text: 'Nutrition, hygiene, gestes de sante et accompagnement familial.' },
          { icon: 'megaphone', title: 'Mobiliser', text: 'Campagnes locales, relais communautaires et participation des jeunes.' }
        ]
      },
      {
        type: 'spotlight',
        background: 'linear-gradient(135deg, #ffffff 0%, #eef8ff 100%)',
        tag: 'Scene de terrain',
        title: 'Nos actions prennent forme dans des situations tres concretes.',
        text:
          'Sur le terrain, une action commence par un besoin clairement identifie, se poursuit par une reponse adaptee puis par un suivi qui permet d ajuster si necessaire.',
        bullets: ['Identifier le besoin', 'Mettre en place la reponse', 'Suivre les effets dans le temps'],
        quote: 'Une action utile est une action comprise, suivie et ajustee avec la communaute.',
        image: IMAGES.workshop,
        imageAlt: 'Atelier communautaire'
      },
      {
        type: 'cta',
        background: 'linear-gradient(135deg, #f1fff7 0%, #f8fbff 100%)',
        title: 'Continuer vers le detail des programmes',
        text: 'Cette page donne la vue d ensemble. La page programmes detaille ensuite les modules, les publics accompagnes et le rythme de deploiement.',
        primary: { label: 'Explorer nos programmes', href: '../pages/nos-programmes.html' },
        points: ['Education et protection', 'Nutrition et sante', 'Actions de proximite']
      }
    ]
  },
  'impact transparence': {
    primaryAction: { label: 'Consulter nos rapports', href: '../pages/impact-transparence.html' },
    sections: [
      {
        type: 'hero',
        background: 'linear-gradient(135deg, #f4f7ff 0%, #f9fbff 56%, #ffffff 100%)',
        eyebrow: 'Resultats et transparence',
        title: 'Nous voulons rendre visibles les resultats, les preuves et les points de vigilance.',
        text:
          'Cette page rassemble les indicateurs, les syntheses, les preuves visuelles et les informations de redevabilite qui permettent de suivre notre action.',
        chips: ['Indicateurs', 'Rapports', 'Chronologie', 'Transparence'],
        stats: [
          { value: '4', label: 'revues / an', note: 'lecture trimestrielle du suivi recommande pour garder le cap' },
          { value: '3', label: 'preuves visibles', note: 'chiffres, photos, documentation' },
          { value: '1', label: 'promesse', note: 'rendre lisible ce qui avance et ce qui reste a consolider' }
        ],
        image: IMAGES.landscape,
        panelTitle: 'Ce que nous publions',
        panelItems: ['Syntheses regulieres', 'Indicateurs lisibles', 'Photos et rapports'],
        panelLabel: 'Notre engagement',
        panelText: 'Nous voulons montrer ce qui avance, ce qui change sur le terrain et les points qui demandent encore une attention particuliere.',
        panelBackground: 'linear-gradient(135deg, #eef2ff 0%, #ffffff 100%)'
      },
      {
        type: 'metrics',
        background: 'linear-gradient(135deg, #ffffff 0%, #eff3ff 100%)',
        title: 'Comment nous montrons la preuve',
        intro: 'La transparence repose sur des informations simples a retrouver, a comprendre et a partager.',
        metrics: [
          { value: 'T1-T4', label: 'lecture annuelle', text: 'un rythme simple a comprendre pour le public et le dashboard' },
          { value: '0 zone floue', label: 'sur les engagements', text: 'chaque promesse doit etre rattachee a une action ou a un indicateur' },
          { value: '2 niveaux', label: 'de lecture', text: 'synthese immediate puis detail pour les lecteurs qui veulent aller plus loin' }
        ],
        noteTitle: 'Notre logique de suivi',
        noteText:
          'Nous suivons nos actions sur un rythme regulier afin de relier les engagements annonces aux activites menees et aux progres observes.',
        noteItems: ['Suivi trimestriel', 'Lecture simple', 'Redevabilite publique']
      },
      {
        type: 'documents',
        background: 'linear-gradient(135deg, #f7f9ff 0%, #ffffff 100%)',
        title: 'Les preuves que nous devons rendre visibles',
        intro: 'Une page transparence forte ne parle pas seulement de valeurs: elle montre les pieces du systeme.',
        documents: [
          { icon: 'file-text', title: 'Synthese trimestrielle', meta: 'publication courte', text: 'Ce qui a ete lance, ce qui a ete freine, ce que nous ajustons.' },
          { icon: 'bar-chart-3', title: 'Indicateurs de progression', meta: 'lecture rapide', text: 'Quelques mesures simples reliees aux objectifs du terrain.' },
          { icon: 'images', title: 'Preuves visuelles', meta: 'photos terrain', text: 'Des images reelles pour montrer les actions et les contextes.' },
          { icon: 'scale', title: 'Cadre de redevabilite', meta: 'gouvernance', text: 'Qui verifie, qui valide, qui corrige si besoin.' }
        ],
        asideTitle: 'Pourquoi ces preuves comptent',
        asideText: 'Les chiffres seuls ne suffisent pas. Ils doivent etre relies a des documents, a des images et a un cadre clair de verification.',
        asideItems: ['Mesurer', 'Documenter', 'Partager']
      },
      {
        type: 'gallery',
        background: 'linear-gradient(135deg, #ffffff 0%, #f2f6ff 100%)',
        title: 'Verifier par l image',
        intro: 'La galerie joue ici le role d une annexe visuelle: elle ne decore pas, elle appuie le discours de transparence.',
        images: [
          { src: IMAGES.care, caption: 'Soin et accompagnement' },
          { src: IMAGES.workshop, caption: 'Moments de coordination' },
          { src: IMAGES.celebration, caption: 'Traces d une progression visible' },
          { src: IMAGES.landscape, caption: 'Contexte et environnement des actions' }
        ]
      },
      {
        type: 'cta',
        background: 'linear-gradient(135deg, #eef3ff 0%, #f8fbff 100%)',
        title: 'Consulter nos rapports et nos indicateurs',
        text: 'Notre objectif est de publier une information utile, reguliere et facile a comprendre pour les familles, les partenaires et les donateurs.',
        primary: { label: 'Voir la page impact', href: '../pages/impact-transparence.html' },
        points: ['Resultats cles', 'Documents de suivi', 'Preuves visuelles']
      }
    ]
  },
  'politiques': {
    primaryAction: { label: 'Lire nos politiques', href: '../pages/nos-politiques.html' },
    sections: [
      {
        type: 'hero',
        background: 'linear-gradient(135deg, #fbfbff 0%, #f5f7fb 56%, #ffffff 100%)',
        eyebrow: 'Cadre de gouvernance',
        title: 'Nos politiques definissent un cadre clair pour proteger les enfants et guider nos pratiques.',
        text:
          'Cette page presente les regles, les engagements et les procedures qui encadrent notre action au quotidien.',
        chips: ['Ethique', 'Protection', 'Conformite', 'Signalement'],
        stats: [
          { value: '4', label: 'socles', note: 'proteger, documenter, controler, corriger' },
          { value: '1', label: 'regle visuelle', note: 'tout document doit etre facile a reperer' },
          { value: '0', label: 'ambiguite souhaitee', note: 'les parcours de lecture doivent rester directs' }
        ],
        image: IMAGES.gathering,
        panelTitle: 'Nos garanties',
        panelItems: ['Protection des enfants', 'Ethique de conduite', 'Signalement accessible'],
        panelLabel: 'A connaitre',
        panelText: 'Nos politiques servent a proteger les enfants, a guider les equipes et a clarifier les responsabilites de chacun.',
        panelBackground: 'linear-gradient(135deg, #f5f7fb 0%, #ffffff 100%)'
      },
      {
        type: 'documents',
        background: 'linear-gradient(135deg, #ffffff 0%, #f6f8fc 100%)',
        title: 'Les familles de politiques a rendre visibles',
        intro: 'Chaque bloc prend la forme d une fiche sobre, comme dans une page ressource.',
        documents: [
          { icon: 'shield-check', title: 'Protection de l enfance', meta: 'priorite absolue', text: 'Principes, comportements attendus et mecanismes de prevention.' },
          { icon: 'lock', title: 'Vie privee', meta: 'donnees', text: 'Collecte minimale, usage explique et droits des personnes.' },
          { icon: 'scale', title: 'Ethique', meta: 'conduite', text: 'Conflits d interets, comportements interdits, responsabilites de chacun.' },
          { icon: 'bell-ring', title: 'Signalement', meta: 'alerte', text: 'Chemin court pour remonter un incident ou une inquietude.' }
        ],
        asideTitle: 'Pourquoi ces politiques existent',
        asideText: 'Elles permettent de prevenir les risques, de proteger les personnes et d offrir un cadre commun a toutes les parties prenantes.',
        asideItems: ['Prevenir', 'Encadrer', 'Corriger']
      },
      {
        type: 'timeline',
        background: 'linear-gradient(135deg, #f8faff 0%, #ffffff 100%)',
        title: 'Cycle de vie d une politique',
        intro: 'Une bonne page de gouvernance montre que les politiques vivent, elles ne restent pas figes.',
        steps: [
          { label: 'A', title: 'Redaction', text: 'Le texte part des obligations, mais aussi des situations terrain observees.' },
          { label: 'B', title: 'Validation', text: 'La gouvernance relit, arbitre et fixe un cadre d usage simple.' },
          { label: 'C', title: 'Diffusion', text: 'Les equipes et partenaires savent ou la retrouver et a quoi elle sert.' },
          { label: 'D', title: 'Revision', text: 'Les retours d usage et les incidents nourrissent les evolutions suivantes.' }
        ]
      },
      {
        type: 'spotlight',
        background: 'linear-gradient(135deg, #ffffff 0%, #f9fafc 100%)',
        tag: 'Gouvernance lisible',
        title: 'La forme doit inspirer la confiance autant que le fond.',
        text:
          'Une gouvernance solide repose sur des textes clairs, des responsabilites connues et des mecanismes de signalement accessibles.',
        bullets: ['Regles claires', 'Responsabilites identifiees', 'Mises a jour regulieres'],
        quote: 'Une politique utile est une politique que l on retrouve, que l on comprend et que l on sait appliquer.',
        image: IMAGES.director,
        imageAlt: 'Temps de travail en equipe'
      },
      {
        type: 'cta',
        background: 'linear-gradient(135deg, #f4f7fc 0%, #ffffff 100%)',
        title: 'Ouvrir la bibliotheque complete',
        text: 'Vous pouvez poursuivre la lecture dans la bibliotheque complete pour consulter les chartes, les procedures et les textes de reference.',
        primary: { label: 'Consulter nos politiques', href: '../pages/nos-politiques.html' },
        points: ['Chartes essentielles', 'Procedures de reference', 'Versions documentees']
      }
    ]
  },
  'notre mission': {
    primaryAction: { label: 'Soutenir la mission', href: '../pages/faire-un-don.html' },
    sections: [
      {
        type: 'hero',
        background: 'linear-gradient(135deg, #fffdf6 0%, #f3f8ff 58%, #ffffff 100%)',
        eyebrow: 'Notre mission',
        title: 'Offrir a chaque enfant un environnement plus sur, plus juste et plus porteur d avenir.',
        text:
          'Notre mission guide l ensemble de nos choix: proteger, accompagner, renforcer l autonomie et travailler avec les communautes dans la duree.',
        chips: ['Dignite', 'Autonomie', 'Presence', 'Temps long'],
        stats: [
          { value: '400 M', label: 'jeunes enfants', note: 'subissent encore une discipline violente a domicile selon UNICEF' },
          { value: '1', label: 'nord magnetique', note: 'mettre la protection et la dignite au centre' },
          { value: '3', label: 'mots cles', note: 'proximite, confiance, impact durable' }
        ],
        image: IMAGES.portrait,
        panelTitle: 'Notre cap',
        panelItems: ['Proteger les enfants', 'Soutenir les familles', 'Construire dans la duree'],
        panelLabel: 'Notre promesse',
        panelText: 'Nous cherchons a transformer les besoins urgents en accompagnements durables, concrets et respectueux de la dignite de chacun.',
        panelBackground: 'linear-gradient(135deg, #fff8e8 0%, #ffffff 100%)'
      },
      {
        type: 'spotlight',
        background: 'linear-gradient(135deg, #ffffff 0%, #fffdf5 100%)',
        tag: 'Notre boussole',
        title: 'La mission doit se lire comme une orientation, pas comme une brochure.',
        text:
          'Notre mission nous rappelle que chaque action doit rapprocher les enfants d un cadre de vie plus protecteur, plus stable et plus ouvert sur l avenir.',
        bullets: ['Protection', 'Autonomie', 'Presence durable'],
        quote: 'Notre mission n est pas de remplir des sections; elle est de rendre visibles des changements utiles pour des enfants reeles.',
        image: IMAGES.landscape,
        imageAlt: 'Cadre de vie et projection'
      },
      {
        type: 'cards',
        background: 'linear-gradient(135deg, #f9fbff 0%, #ffffff 100%)',
        title: 'Les priorites qui donnent un sens au mot mission',
        intro: 'Notre mission se traduit en priorites concretes qui orientent nos actions et nos choix de terrain.',
        image: IMAGES.community,
        imageLabel: 'Presence et lien',
        cards: [
          { icon: 'target', title: 'Donner un cap', text: 'Chaque section rappelle l objectif final: un enfant plus protege, plus accompagne, plus visible.' },
          { icon: 'sun', title: 'Rendre l espoir concret', text: 'Des verbes simples, des images reelles et des CTA relies a des actions precises.' },
          { icon: 'leaf', title: 'Travailler dans la duree', text: 'La mission ne promet pas tout, elle montre une progression responsable.' },
          { icon: 'hand-heart', title: 'Co-construire', text: 'Les solutions prennent forme avec les communautes et leurs relais.' }
        ]
      },
      {
        type: 'gallery',
        background: 'linear-gradient(135deg, #fff9f0 0%, #eef6ff 100%)',
        title: 'La mission se vit dans des gestes simples et durables',
        intro: 'Les images rappellent que notre mission prend forme dans la relation, la progression et la presence au quotidien.',
        images: [
          { src: IMAGES.portrait, caption: 'La dignite au centre' },
          { src: IMAGES.celebration, caption: 'La progression visible' },
          { src: IMAGES.gathering, caption: 'La communaute autour de l enfant' },
          { src: IMAGES.landscape, caption: 'Le temps long et le contexte' }
        ]
      },
      {
        type: 'cta',
        background: 'linear-gradient(135deg, #fffef7 0%, #f6f9ff 100%)',
        title: 'Passer du manifeste au soutien concret',
        text: 'La mission prend tout son sens quand elle rejoint un geste: don, implication, parrainage ou relais.',
        primary: { label: 'Faire un don', href: '../pages/faire-un-don.html' },
        points: ['Protection des enfants', 'Soutien des familles', 'Actions dans la duree']
      }
    ]
  },
  'nos programmes': {
    primaryAction: { label: 'Parler a notre equipe', href: '../pages/s-impliquer.html' },
    sections: [
      {
        type: 'hero',
        background: 'linear-gradient(135deg, #f5fbff 0%, #effbf4 58%, #ffffff 100%)',
        eyebrow: 'Nos programmes',
        title: 'Des programmes complementaires pour repondre aux besoins essentiels des enfants et des familles.',
        text:
          'Nos programmes s articulent autour de modules concrets: education, sante, soutien familial et insertion des jeunes.',
        chips: ['Education', 'Protection', 'Sante', 'Insertion'],
        stats: [
          { value: '4', label: 'familles de programmes', note: 'pour une lecture immediate' },
          { value: '2', label: 'niveaux de detail', note: 'vue macro puis description de module' },
          { value: '1', label: 'objectif', note: 'faire progresser les enfants avec des actions concretes et suivies' }
        ],
        image: IMAGES.safari,
        panelTitle: 'Ce que couvrent nos programmes',
        panelItems: ['Education', 'Sante', 'Soutien social'],
        panelLabel: 'A retenir',
        panelText: 'Chaque programme repond a un besoin precis et s inscrit dans une logique de suivi pour accompagner les enfants dans la duree.',
        panelBackground: 'linear-gradient(135deg, #eefcf4 0%, #ffffff 100%)'
      },
      {
        type: 'cards',
        background: 'linear-gradient(135deg, #ffffff 0%, #f0fbff 100%)',
        title: 'Nos modules prioritaires',
        intro: 'Chaque module correspond a un besoin prioritaire et complete les autres pour former un accompagnement plus global.',
        image: IMAGES.workshop,
        imageLabel: 'Atelier et accompagnement',
        cards: [
          { icon: 'school', title: 'Retour a l ecole', text: 'Reinscription, materiels, accompagnement des familles et suivi de la presence.' },
          { icon: 'heart-pulse', title: 'Sante et bien-etre', text: 'Orientation, prevention, hygiene et relais de proximite.' },
          { icon: 'home', title: 'Soutien familial', text: 'Ecoute, mediation, accompagnement social et appui de premiere necessite.' },
          { icon: 'briefcase', title: 'Insertion', text: 'Mentorat, ateliers pratiques et preparation a l autonomie des jeunes.' }
        ]
      },
      {
        type: 'timeline',
        background: 'linear-gradient(135deg, #f4fbf7 0%, #ffffff 100%)',
        title: 'Comment un programme prend vie',
        intro: 'Cette page descend d un cran et montre une logique de deploiement.',
        steps: [
          { label: '01', title: 'Cadrage', text: 'Identifier le besoin, le volume, les partenaires et les ressources disponibles.' },
          { label: '02', title: 'Prototype terrain', text: 'Tester le format avec un petit groupe avant d etendre.' },
          { label: '03', title: 'Execution', text: 'Documenter les presences, les retours et les blocages au fil de l eau.' },
          { label: '04', title: 'Capitalisation', text: 'Transformer l experience en un module plus clair pour la suite.' }
        ]
      },
      {
        type: 'spotlight',
        background: 'linear-gradient(135deg, #ffffff 0%, #eef8ff 100%)',
        tag: 'Vue terrain',
        title: 'Un programme n est credible que s il montre son rythme et sa realite.',
        text:
          'Un programme utile doit etre lisible dans son rythme, dans ses objectifs et dans les effets qu il cherche a produire pour les enfants.',
        bullets: ['Objectifs clairs', 'Modules complementaires', 'Suivi dans le temps'],
        quote: 'Un programme credible relie le besoin, l action et la progression observee.',
        image: IMAGES.classroom,
        imageAlt: 'Scene educative',
        reverse: true
      },
      {
        type: 'cta',
        background: 'linear-gradient(135deg, #eefcf4 0%, #f7fbff 100%)',
        title: 'Construire le detail programme par programme',
        text: 'Chaque programme peut ensuite etre detaille pour presenter les publics concernes, les actions prevues et les resultats suivis.',
        primary: { label: 'S impliquer avec nous', href: '../pages/s-impliquer.html' },
        points: ['Education', 'Sante', 'Insertion']
      }
    ]
  },
  's impliquer': {
    primaryAction: { label: 'Devenir benevole', href: '../pages/devenir-benevole.html' },
    sections: [
      {
        type: 'hero',
        background: 'linear-gradient(135deg, #fff6fa 0%, #eef7ff 60%, #ffffff 100%)',
        eyebrow: 'S impliquer',
        title: 'Chacun peut contribuer a sa facon pour soutenir les enfants et les familles.',
        text:
          'Cette page presente les differentes manieres de rejoindre notre action, selon le temps disponible, les competences et le niveau d engagement souhaite.',
        chips: ['Benevolat', 'Partenariats', 'Campagnes', 'Relais'],
        stats: [
          { value: '3', label: 'portes d entree', note: 'agir sur le terrain, relayer, soutenir' },
          { value: '1', label: 'etat d esprit', note: 'accueillir sans rendre le parcours intimidant' },
          { value: '12', label: 'mots utiles', note: 'clairs, simples, orientees action' }
        ],
        image: IMAGES.workshop,
        panelTitle: 'Facons de contribuer',
        panelItems: ['Donner du temps', 'Relayer une campagne', 'Mobiliser un reseau'],
        panelLabel: 'En pratique',
        panelText: 'S impliquer peut prendre des formes tres differentes: benevolat, relais local, partenariat ou soutien ponctuel.',
        panelBackground: 'linear-gradient(135deg, #fff1f7 0%, #ffffff 100%)'
      },
      {
        type: 'cards',
        background: 'linear-gradient(135deg, #ffffff 0%, #fff7fb 100%)',
        title: 'Comment chacun peut entrer dans l action',
        intro: 'Nous voulons rendre l engagement simple, utile et accessible a tous les profils.',
        image: IMAGES.volunteer,
        imageLabel: 'Mobilisation collective',
        cards: [
          { icon: 'hand-heart', title: 'Donner du temps', text: 'Participer a une action, un atelier ou un temps de mobilisation.' },
          { icon: 'megaphone', title: 'Relayer', text: 'Faire circuler une campagne, une collecte ou un besoin urgent.' },
          { icon: 'briefcase', title: 'Ouvrir un partenariat', text: 'Associer une entreprise, une equipe ou un reseau a un projet utile.' },
          { icon: 'calendar-range', title: 'Porter un evenement', text: 'Imaginer un format local simple pour lever de l attention et des ressources.' }
        ]
      },
      {
        type: 'timeline',
        background: 'linear-gradient(135deg, #fef8fb 0%, #ffffff 100%)',
        title: 'Le parcours d engagement doit etre rassurant',
        intro: 'Le parcours est volontairement simple pour aider chacun a passer d une envie a une premiere action concrete.',
        steps: [
          { label: '01', title: 'Je me signale', text: 'Je choisis le mode d engagement qui me correspond et je laisse mes coordonnees.' },
          { label: '02', title: 'Je suis oriente', text: 'L equipe propose une premiere maniere d aider, simple et adaptee.' },
          { label: '03', title: 'J entre en action', text: 'Je recois un cadre, un point de contact et une mission claire.' },
          { label: '04', title: 'Je reviens avec une preuve', text: 'Photo, retour, participation ou relais: mon geste rejoint une histoire collective.' }
        ]
      },
      {
        type: 'gallery',
        background: 'linear-gradient(135deg, #ffffff 0%, #eef6ff 100%)',
        title: 'Une mobilisation qui se vit ensemble',
        intro: 'Les images montrent des temps de rencontre, de service et de coordination autour des enfants et des familles.',
        images: [
          { src: IMAGES.workshop, caption: 'Ateliers et coordination' },
          { src: IMAGES.volunteer, caption: 'Temps forts collectifs' },
          { src: IMAGES.community, caption: 'Lien direct avec les enfants' },
          { src: IMAGES.gathering, caption: 'Mobilisation et relais' }
        ]
      },
      {
        type: 'cta',
        background: 'linear-gradient(135deg, #fff4fa 0%, #f7fbff 100%)',
        title: 'Choisir sa facon d aider',
        text: 'Vous pouvez maintenant choisir une forme d engagement adaptee a votre disponibilite et a vos competences.',
        primary: { label: 'Devenir benevole', href: '../pages/devenir-benevole.html' },
        points: ['Benevolat', 'Partenariats', 'Evenements solidaires']
      }
    ]
  },
  'parrainer un enfant': {
    primaryAction: { label: 'Demarrer un parrainage', href: '../pages/parrainer-un-enfant.html' },
    sections: [
      {
        type: 'hero',
        background: 'linear-gradient(135deg, #fff7fb 0%, #fffdf4 56%, #ffffff 100%)',
        eyebrow: 'Parrainage',
        title: 'Le parrainage cree un lien durable entre un soutien regulier et le parcours d un enfant.',
        text:
          'Le parrainage permet d accompagner un enfant dans la duree avec un cadre clair, des nouvelles regulieres et un suivi attentif.',
        chips: ['Suivi regulier', 'Lien humain', 'Parcours simple', 'Transparence'],
        stats: [
          { value: '1', label: 'engagement regulier', note: 'le parrainage se comprend comme une relation suivie' },
          { value: '3', label: 'temps cles', note: 'adhesion, nouvelles, evolution' },
          { value: 'Plan', label: 'inspiration', note: 'clarte du parcours de parrainage sur les pages officielles du secteur' }
        ],
        image: IMAGES.portrait,
        panelTitle: 'Ce que comprend le parrainage',
        panelItems: ['Un soutien regulier', 'Des nouvelles de suivi', 'Un cadre transparent'],
        panelLabel: 'A savoir',
        panelText: 'Le parrainage s inscrit dans le temps. Il repose sur la confiance, la regularite et une relation suivie avec notre equipe.',
        panelBackground: 'linear-gradient(135deg, #fff4f8 0%, #ffffff 100%)'
      },
      {
        type: 'timeline',
        background: 'linear-gradient(135deg, #ffffff 0%, #fff8f2 100%)',
        title: 'Comment le parrainage se lit en 4 temps',
        intro: 'Le visiteur doit comprendre le parcours sans devoir chercher longtemps.',
        steps: [
          { label: '01', title: 'Je choisis', text: 'Je decouvre le principe, les attentes et la promesse de suivi.' },
          { label: '02', title: 'Je confirme', text: 'Je mets en place un soutien regulier avec un cadre transparent.' },
          { label: '03', title: 'Je recois des nouvelles', text: 'La relation s entretient avec des retours et des updates reguliers.' },
          { label: '04', title: 'Je vois la progression', text: 'Le parrainage se relie a des etapes concretes et visibles.' }
        ]
      },
      {
        type: 'spotlight',
        background: 'linear-gradient(135deg, #fffdf6 0%, #ffffff 100%)',
        tag: 'Relation dans la duree',
        title: 'Parrainer, c est accompagner un enfant avec constance et attention.',
        text:
          'Au-dela du soutien financier, le parrainage repose sur une relation suivie, des retours reguliers et une meilleure lisibilite du chemin parcouru.',
        bullets: ['Suivi regulier', 'Relation claire', 'Progres visibles'],
        quote: 'Pour parrainer, il faut comprendre le lien, la cadence et la confiance.',
        image: IMAGES.community,
        imageAlt: 'Scene de proximite'
      },
      {
        type: 'gallery',
        background: 'linear-gradient(135deg, #ffffff 0%, #fef6fb 100%)',
        title: 'Des images qui soutiennent la promesse de suivi',
        intro: 'Cette galerie sert a montrer des situations de progression, pas juste de jolies photos.',
        images: [
          { src: IMAGES.portrait, caption: 'Un lien plus humain' },
          { src: IMAGES.classroom, caption: 'Scolarite et progression' },
          { src: IMAGES.care, caption: 'Accompagnement au quotidien' },
          { src: IMAGES.celebration, caption: 'Traces d evolution' }
        ]
      },
      {
        type: 'cta',
        background: 'linear-gradient(135deg, #fff6fb 0%, #fffdf6 100%)',
        title: 'Ouvrir un parcours de parrainage plus detaille',
        text: 'Vous pouvez passer a l etape suivante pour decouvrir plus en detail le fonctionnement du parrainage et les modalites de soutien.',
        primary: { label: 'Lancer le parrainage', href: '../pages/parrainer-un-enfant.html' },
        points: ['Soutien regulier', 'Suivi d un enfant', 'Relation dans le temps']
      }
    ]
  },
  'faire un don': {
    primaryAction: { label: 'Faire un don', href: '../pages/faire-un-don.html' },
    sections: [
      {
        type: 'hero',
        background: 'linear-gradient(135deg, #fffdf5 0%, #f5f9ff 58%, #ffffff 100%)',
        eyebrow: 'Faire un don',
        title: 'Chaque don aide a financer des actions concretes en faveur des enfants et des familles.',
        text:
          'Faire un don, c est soutenir des actions utiles, immediates et suivies dans le temps, avec une information claire sur leur mise en oeuvre.',
        chips: ['Don ponctuel', 'Don regulier', 'Utilisation claire', 'Confiance'],
        stats: [
          { value: '2', label: 'modes de don', note: 'ponctuel ou mensuel' },
          { value: '3', label: 'questions a lever', note: 'a quoi sert le don, comment il est suivi, quand agir' },
          { value: 'charity: water', label: 'inspiration', note: 'storytelling et clarte de la transparence' }
        ],
        image: IMAGES.care,
        panelTitle: 'Ce que permet un don',
        panelItems: ['Soutenir les programmes', 'Repondre a l urgence', 'Renforcer le suivi'],
        panelLabel: 'Notre responsabilite',
        panelText: 'Nous devons expliquer a quoi sert chaque soutien, comment il est suivi et de quelle maniere il rejoint les priorites du terrain.',
        panelBackground: 'linear-gradient(135deg, #fff9eb 0%, #ffffff 100%)'
      },
      {
        type: 'cards',
        background: 'linear-gradient(135deg, #ffffff 0%, #fffbf1 100%)',
        title: 'Trois raisons de donner maintenant',
        intro: 'Nous voulons aider chacun a comprendre pourquoi un don compte et de quelle maniere il soutient les actions.',
        image: IMAGES.landscape,
        imageLabel: 'Contexte et urgence',
        cards: [
          { icon: 'wallet', title: 'Don simple', text: 'Le visiteur comprend en une lecture ce qu il peut faire et pourquoi cela compte.' },
          { icon: 'pie-chart', title: 'Usage lisible', text: 'Le don doit etre rattache a une logique d utilisation claire et partageable.' },
          { icon: 'receipt', title: 'Suivi rassurant', text: 'Confirmation, traces et redevabilite renforcent la confiance apres le don.' },
          { icon: 'clock-3', title: 'Bon tempo', text: 'Le message doit aider a agir sans noyer dans trop d etapes.' }
        ]
      },
      {
        type: 'metrics',
        background: 'linear-gradient(135deg, #fefcf5 0%, #ffffff 100%)',
        title: 'Le don doit s accompagner d informations claires',
        intro: 'La confiance repose sur des explications simples, des preuves de suivi et une relation honnete avec les donateurs.',
        metrics: [
          { value: '1 clic', label: 'pour comprendre', text: 'vers ou va l argent et quelle suite est donnee' },
          { value: '2 preuves', label: 'a montrer', text: 'elements financiers et preuves terrain' },
          { value: '0 decor inutile', label: 'objectif', text: 'retirer les sections qui distraient du choix de soutien' }
        ],
        noteTitle: 'Ce que nous vous devons',
        noteText: 'Un don n est jamais un geste abstrait. Il doit etre relie a des actions concretes, a des preuves de terrain et a une communication responsable.',
        noteItems: ['Usage comprensible', 'Suivi visible', 'Dialogue transparent']
      },
      {
        type: 'spotlight',
        background: 'linear-gradient(135deg, #ffffff 0%, #f5f9ff 100%)',
        tag: 'Rassurer avant de convertir',
        title: 'La confiance doit etre visible avant le formulaire.',
        text:
          'Avant de donner, chacun doit pouvoir comprendre les besoins, identifier les actions soutenues et voir que la redevabilite fait partie de notre engagement.',
        bullets: ['Besoins clairement expliques', 'Actions identifiables', 'Suivi partage avec les donateurs'],
        quote: 'Un don inspire confiance quand son utilite et son suivi sont clairement expliques.',
        image: IMAGES.gathering,
        imageAlt: 'Moment collectif sur le terrain',
        reverse: true
      },
      {
        type: 'cta',
        background: 'linear-gradient(135deg, #fffdf4 0%, #f7fbff 100%)',
        title: 'Passer a l action en toute confiance',
        text: 'Vous pouvez maintenant choisir le type de soutien qui vous convient et rejoindre l effort en faveur des enfants et des familles.',
        primary: { label: 'Donner maintenant', href: '../pages/faire-un-don.html' },
        points: ['Don ponctuel', 'Don regulier', 'Suivi transparent']
      }
    ]
  },
  'devenir benevole': {
    primaryAction: { label: 'Rejoindre une mission', href: '../pages/devenir-benevole.html' },
    sections: [
      {
        type: 'hero',
        background: 'linear-gradient(135deg, #f8fff2 0%, #eef7ff 58%, #ffffff 100%)',
        eyebrow: 'Devenir benevole',
        title: 'Rejoindre une mission, c est mettre son temps et ses competences au service des enfants.',
        text:
          'Cette page explique les roles possibles, le parcours d integration et la maniere dont nous accompagnons chaque benevole.',
        chips: ['Missions courtes', 'Missions longues', 'Accompagnement', 'Communaute'],
        stats: [
          { value: '3', label: 'formats de mission', note: 'ponctuelle, recurrente, support' },
          { value: '4', label: 'etapes', note: 'contact, orientation, formation, action' },
          { value: '1', label: 'promesse', note: 'ne jamais laisser le benevole seul face au flou' }
        ],
        image: IMAGES.volunteer,
        panelTitle: 'Avant de vous engager',
        panelItems: ['Choisir un role', 'Comprendre le cadre', 'Recevoir un accompagnement'],
        panelLabel: 'Notre engagement',
        panelText: 'Nous voulons que chaque benevole sache comment s engager, a qui parler et de quelle maniere sa mission sera accompagnee.',
        panelBackground: 'linear-gradient(135deg, #f4ffe8 0%, #ffffff 100%)'
      },
      {
        type: 'cards',
        background: 'linear-gradient(135deg, #ffffff 0%, #f6fff1 100%)',
        title: 'Quels roles peuvent exister',
        intro: 'Le benevolat peut prendre plusieurs formes selon les besoins du terrain et les disponibilites de chacun.',
        image: IMAGES.workshop,
        imageLabel: 'Travail d equipe',
        cards: [
          { icon: 'hand', title: 'Terrain', text: 'Aider pendant un atelier, une campagne ou un evenement ponctuel.' },
          { icon: 'monitor', title: 'Support', text: 'Donner du temps a distance sur la communication, la coordination ou le contenu.' },
          { icon: 'map', title: 'Relais local', text: 'Contribuer dans son quartier, son eglise, son ecole ou son reseau.' },
          { icon: 'headphones', title: 'Accompagnement', text: 'Accueillir, orienter et soutenir les nouveaux profils benevoles.' }
        ]
      },
      {
        type: 'timeline',
        background: 'linear-gradient(135deg, #f7fff3 0%, #ffffff 100%)',
        title: 'Le parcours benevole ideal',
        intro: 'Le parcours d integration est pense pour etre simple, rassurant et utile des le premier contact.',
        steps: [
          { label: '01', title: 'Candidature simple', text: 'Quelques informations suffisent pour comprendre le profil et la disponibilite.' },
          { label: '02', title: 'Echange de cadrage', text: 'Une personne de contact explique les besoins et les regles du cadre.' },
          { label: '03', title: 'Preparation', text: 'Briefing, ressources, contacts utiles et points de vigilance.' },
          { label: '04', title: 'Mission + retour', text: 'L experience se termine par un retour pour progresser ensemble.' }
        ]
      },
      {
        type: 'spotlight',
        background: 'linear-gradient(135deg, #ffffff 0%, #eef8ff 100%)',
        tag: 'Esprit d equipe',
        title: 'Le benevolat doit paraitre accessible, encadre et valorisant.',
        text:
          'Le benevolat se vit mieux quand chacun connait son role, ses points de contact et les reperes qui l aident a agir de maniere juste.',
        bullets: ['Cadre clair', 'Orientation utile', 'Esprit d equipe'],
        quote: 'La meilleure page benevole est celle qui transforme une envie vague en prochaine etape evidente.',
        image: IMAGES.gathering,
        imageAlt: 'Engagement collectif'
      },
      {
        type: 'cta',
        background: 'linear-gradient(135deg, #f4ffe9 0%, #f7fbff 100%)',
        title: 'Passer au formulaire benevole',
        text: 'Vous pouvez maintenant rejoindre une mission, proposer vos competences ou demander a etre oriente vers un besoin concret.',
        primary: { label: 'Je deviens benevole', href: '../pages/devenir-benevole.html' },
        points: ['Missions utiles', 'Cadre rassurant', 'Accompagnement dedie']
      }
    ]
  },
  'nos politiques': {
    primaryAction: { label: 'Voir la confidentialite', href: '../pages/politique-de-confidentialite.html' },
    sections: [
      {
        type: 'hero',
        background: 'linear-gradient(135deg, #f8f9fc 0%, #f5f7ff 58%, #ffffff 100%)',
        eyebrow: 'Nos politiques',
        title: 'Retrouvez ici l ensemble des chartes, procedures et textes qui encadrent notre action.',
        text:
          'Cette bibliotheque rassemble les documents de reference qui guident nos pratiques, nos obligations et notre responsabilite envers les enfants, les familles et les partenaires.',
        chips: ['Chartes', 'Procedures', 'Conformite', 'Mises a jour'],
        stats: [
          { value: '4', label: 'blocs documentaires', note: 'pour guider la consultation' },
          { value: '1', label: 'regle d usage', note: 'tout visiteur doit comprendre ou cliquer ensuite' },
          { value: '0', label: 'effet brochure', note: 'nous evitons les sections marketing ici' }
        ],
        image: IMAGES.director,
        panelTitle: 'Contenu de la bibliotheque',
        panelItems: ['Chartes essentielles', 'Procedures de signalement', 'Regles de conduite'],
        panelLabel: 'Utilite',
        panelText: 'Ces documents servent a orienter les pratiques, a prevenir les risques et a rendre notre cadre d action plus lisible.',
        panelBackground: 'linear-gradient(135deg, #f5f6fb 0%, #ffffff 100%)'
      },
      {
        type: 'documents',
        background: 'linear-gradient(135deg, #ffffff 0%, #f7f8fb 100%)',
        title: 'Les documents de reference a consulter',
        intro: 'Chaque document a un role precis pour encadrer les pratiques et clarifier les responsabilites.',
        documents: [
          { icon: 'scroll-text', title: 'Charte de protection', meta: 'cadre fondamental', text: 'Le document que toute equipe doit comprendre et appliquer.' },
          { icon: 'lock', title: 'Politique vie privee', meta: 'donnees', text: 'Le cadre qui explique collecte, usage, conservation et droits.' },
          { icon: 'shield-alert', title: 'Procedure d alerte', meta: 'incident', text: 'Le chemin de signalement et les roles de reponse.' },
          { icon: 'scale', title: 'Code de conduite', meta: 'ethique', text: 'Les comportements attendus et les zones de vigilance.' }
        ],
        asideTitle: 'Pourquoi ces documents comptent',
        asideText: 'Ils permettent d harmoniser les pratiques, de mieux proteger les personnes et de savoir quoi faire en cas de question ou d incident.',
        asideItems: ['Clarifier', 'Encadrer', 'Proteger']
      },
      {
        type: 'metrics',
        background: 'linear-gradient(135deg, #f8f9fd 0%, #ffffff 100%)',
        title: 'Une gouvernance lisible tient en quelques principes',
        intro: 'Une bonne bibliotheque documentaire permet de retrouver rapidement l information, de comprendre son statut et de savoir a quoi elle sert.',
        metrics: [
          { value: 'Versionnee', label: 'documentation', text: 'une politique doit pouvoir etre relue dans le temps' },
          { value: 'Tracee', label: 'validation', text: 'on doit savoir qui relit et qui approuve' },
          { value: 'Accessible', label: 'consultation', text: 'le document doit etre trouvable sans effort' }
        ],
        noteTitle: 'Ce que nous garantissons',
        noteText: 'Chaque politique doit etre identifiable, comprehensible et reliee a un usage concret dans la vie de l organisation.',
        noteItems: ['Documents versionnes', 'Validation claire', 'Acces facilite']
      },
      {
        type: 'timeline',
        background: 'linear-gradient(135deg, #ffffff 0%, #f4f6fb 100%)',
        title: 'De la charte a la pratique',
        intro: 'Une politique ne sert que si son chemin d application est visible.',
        steps: [
          { label: '01', title: 'Publier', text: 'Le document apparait avec son objet, son perimetre et son statut.' },
          { label: '02', title: 'Former', text: 'Les equipes comprennent ce qu il change dans leurs gestes quotidiens.' },
          { label: '03', title: 'Appliquer', text: 'Les responsables savent comment reagir en cas de question ou d incident.' },
          { label: '04', title: 'Reviser', text: 'Les retours du terrain alimentent la prochaine version.' }
        ]
      },
      {
        type: 'cta',
        background: 'linear-gradient(135deg, #f4f6fb 0%, #ffffff 100%)',
        title: 'Approfondir la page vie privee',
        text: 'La page suivante peut descendre encore plus precisement sur la logique donnees, droits et securite.',
        primary: { label: 'Voir la confidentialite', href: '../pages/politique-de-confidentialite.html' },
        points: ['Droits des personnes', 'Gestion des donnees', 'Cadre de securite']
      }
    ]
  },
  'politique de confidentialite': {
    primaryAction: { label: 'Lire nos politiques', href: '../pages/nos-politiques.html' },
    sections: [
      {
        type: 'hero',
        background: 'linear-gradient(135deg, #f9fafc 0%, #eef5ff 56%, #ffffff 100%)',
        eyebrow: 'Confidentialite',
        title: 'Nous expliquons comment les donnees sont collectees, utilisees, protegees et supprimees.',
        text:
          'Cette page presente nos engagements de confidentialite dans un langage clair, utile et comprehensible par tous.',
        chips: ['Collecte minimale', 'Usage explique', 'Conservation', 'Droits'],
        stats: [
          { value: '4', label: 'questions clefs', note: 'quoi, pourquoi, combien de temps, quels droits' },
          { value: '1', label: 'priorite', note: 'faire comprendre sans jargon inutile' },
          { value: '0', label: 'zone floue', note: 'chaque traitement doit etre explicable' }
        ],
        image: IMAGES.portrait,
        panelTitle: 'Nos engagements',
        panelItems: ['Collecter le necessaire', 'Expliquer l usage', 'Respecter les droits'],
        panelLabel: 'Point essentiel',
        panelText: 'La confidentialite repose sur la sobriete des donnees, la clarte de leur usage et le respect des demandes des personnes concernees.',
        panelBackground: 'linear-gradient(135deg, #f6f8fc 0%, #ffffff 100%)'
      },
      {
        type: 'timeline',
        background: 'linear-gradient(135deg, #ffffff 0%, #f4f8ff 100%)',
        title: 'Le cycle de vie d une donnee',
        intro: 'Pour etre vraiment utile, la politique de confidentialite doit montrer chaque etape du traitement des donnees.',
        steps: [
          { label: '01', title: 'Collecter peu', text: 'Ne demander que ce qui est utile pour un service, un don ou un contact.' },
          { label: '02', title: 'Utiliser clairement', text: 'Associer chaque donnee a une finalite understandable par le public.' },
          { label: '03', title: 'Proteger', text: 'Limiter l acces, journaliser si besoin et encadrer les usages internes.' },
          { label: '04', title: 'Supprimer ou archiver', text: 'Ne pas conserver par habitude ce qui n a plus de raison d etre garde.' }
        ]
      },
      {
        type: 'cards',
        background: 'linear-gradient(135deg, #f8fbff 0%, #ffffff 100%)',
        title: 'Les droits a faire comprendre simplement',
        intro: 'Les droits des personnes doivent etre presentes de maniere claire afin que chacun sache quoi demander et a qui s adresser.',
        image: IMAGES.director,
        imageLabel: 'Pilotage et controle',
        cards: [
          { icon: 'eye-off', title: 'Savoir', text: 'Comprendre quelles donnees sont utilisees et pour quelle raison.' },
          { icon: 'download', title: 'Recuperer', text: 'Pouvoir demander une copie des informations pertinentes.' },
          { icon: 'square-pen', title: 'Corriger', text: 'Signaler une erreur ou mettre a jour une information importante.' },
          { icon: 'trash-2', title: 'Supprimer', text: 'Demander l effacement lorsque le cadre le permet.' }
        ]
      },
      {
        type: 'spotlight',
        background: 'linear-gradient(135deg, #ffffff 0%, #f7f9fd 100%)',
        tag: 'Pedagogie avant jargon',
        title: 'Une bonne page confidentialite explique, elle n intimide pas.',
        text:
          'La confidentialite ne doit pas etre reservee aux specialistes. Elle doit rester comprehensible, applicable et reliee a des gestes concrets.',
        bullets: ['Cycle de vie clair', 'Droits explicites', 'Securite des acces'],
        quote: 'La confiance ne vient pas d un long texte legal: elle vient d une explication claire et d un parcours lisible.',
        image: IMAGES.gathering,
        imageAlt: 'Equipe et gouvernance',
        reverse: true
      },
      {
        type: 'cta',
        background: 'linear-gradient(135deg, #f5f8fd 0%, #ffffff 100%)',
        title: 'Completer le centre de ressources',
        text: 'Vous pouvez poursuivre vers la bibliotheque complete pour consulter les textes associes et les autres politiques de reference.',
        primary: { label: 'Retour aux politiques', href: '../pages/nos-politiques.html' },
        points: ['Cycle de vie des donnees', 'Droits des personnes', 'Cadre de protection']
      }
    ]
  }
};

function normalizeTitle(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u2019']/g, ' ')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .toLowerCase();
}

function esc(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function sectionStyle(gradient) {
  return `min-height:100vh;display:flex;align-items:center;background:${gradient};`;
}

const eyebrowClass = 'font-display text-sm font-black uppercase tracking-[0.28em] text-[#7c86cb]';
const overlineBlueClass = 'font-display text-sm font-black uppercase tracking-[0.28em] text-[#7c86cb]';
const titleClass = 'font-display text-4xl font-black leading-[0.92] text-[#62a9f5] sm:text-5xl';
const sectionTitleClass = 'font-display text-3xl font-black leading-tight text-[#4d4b7f]';
const bodyClass = 'font-sans text-base leading-relaxed text-[#7c67a2]';
const smallBodyClass = 'font-sans text-sm leading-relaxed text-[#726f9b]';

function getCountData(value = '') {
  const match = String(value).trim().match(/^(\d+(?:[.,]\d+)?)(.*)$/);
  if (!match) return null;

  const numeric = Number(match[1].replace(',', '.'));
  if (!Number.isFinite(numeric)) return null;

  const decimals = match[1].includes('.') || match[1].includes(',') ? 1 : 0;
  return {
    target: numeric,
    suffix: match[2] || '',
    decimals
  };
}

function renderAnimatedCount(value = '', className = '') {
  const config = getCountData(value);
  if (!config) {
    return `<span class="${className}">${esc(value)}</span>`;
  }

  return `
    <span
      class="${className}"
      data-count-target="${config.target}"
      data-count-suffix="${esc(config.suffix)}"
      data-count-decimals="${config.decimals}"
    >${esc(value)}</span>
  `;
}

function renderHomeAndLinks() {
  return `
    <div class="flex flex-wrap gap-3">
      <a href="../index.html" class="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#89d7ff] via-[#5fb4ff] to-[#4d9cf2] px-5 py-3 font-display text-sm font-black text-white shadow-lg shadow-sky-200/50 transition duration-200 hover:-translate-y-0.5">
        Retour a l accueil
        <span data-lucide="arrow-left" class="lucide h-4 w-4"></span>
      </a>
      <a href="../liens.html" class="inline-flex items-center gap-2 rounded-full border border-brandBlue/20 bg-white px-5 py-3 font-display text-sm font-black text-brandDeep shadow-sm transition duration-200 hover:-translate-y-0.5">
        Voir tous les liens
        <span data-lucide="link" class="lucide h-4 w-4"></span>
      </a>
    </div>
  `;
}

function renderPrimaryAction(action, fallback) {
  const finalAction = action || fallback;
  if (!finalAction) return '';

  return `
    <a href="${esc(finalAction.href)}" class="btn-shake inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#ff50d3] via-[#ff2fbf] to-[#d60ab9] px-5 py-3 font-display text-sm font-black text-white shadow-lg shadow-pink-200/50 transition duration-200 hover:-translate-y-0.5">
      ${esc(finalAction.label)}
      <span data-lucide="arrow-up-right" class="lucide h-4 w-4"></span>
    </a>
  `;
}

function renderHero(section, page, description) {
  const bodyText = section.text || description || '';
  const panelStyle = `background:${section.panelBackground || 'linear-gradient(135deg, #eef5ff 0%, #ffffff 100%)'};`;
  const panelBody =
    section.panelText ||
    'Retrouvez ici les informations essentielles a connaitre avant d aller plus loin.';
  const stats = (section.stats || [])
    .map(
      ({ value, label, note }) => `
        <div class="rounded-3xl border border-white/80 bg-white/95 p-4 shadow-lg shadow-slate-100">
          <p>${renderAnimatedCount(value, 'font-display text-2xl font-black text-brandDeep sm:text-3xl')}</p>
          <p class="mt-1 font-display text-sm font-black uppercase tracking-[0.2em] text-[#7c86cb]">${esc(label)}</p>
          <p class="mt-2 ${smallBodyClass}">${esc(note)}</p>
        </div>
      `
    )
    .join('');

  const chips = (section.chips || [])
    .map(
      (chip) => `
        <span class="inline-flex items-center rounded-full border border-white/90 bg-white/90 px-4 py-2 font-display text-xs font-black uppercase tracking-[0.18em] text-brandDeep shadow-sm">
          ${esc(chip)}
        </span>
      `
    )
    .join('');

  const panelItems = (section.panelItems || [])
    .map(
      (item) => `
        <li class="flex items-center gap-2 ${smallBodyClass}">
          <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brandBlue/10 text-brandBlue">
            <span data-lucide="check" class="lucide h-3.5 w-3.5"></span>
          </span>
          ${esc(item)}
        </li>
      `
    )
    .join('');

  return `
    <section class="px-4 py-10 sm:px-6 lg:px-10" style="${sectionStyle(section.background)}">
      <div class="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.02fr,0.98fr] lg:items-center">
        <div class="space-y-6">
          <div class="inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/85 px-4 py-2 font-display text-xs font-black uppercase tracking-[0.28em] text-[#7c86cb] shadow-sm">
            <span>${esc(page.label)}</span>
            <span class="h-1.5 w-1.5 rounded-full bg-brandPink"></span>
            <span>${esc(section.eyebrow)}</span>
          </div>
          <div class="space-y-4">
            <h1 class="max-w-3xl ${titleClass}">${esc(section.title)}</h1>
            <p class="max-w-2xl ${bodyClass} sm:text-lg">${esc(bodyText)}</p>
          </div>
          <div class="flex flex-wrap gap-3">${chips}</div>
          <div class="grid gap-4 sm:grid-cols-3">${stats}</div>
          <div class="flex flex-wrap gap-3">
            ${renderPrimaryAction(page.primaryAction, null)}
            ${renderHomeAndLinks()}
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
          <div class="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl shadow-slate-200/70">
            <img src="${esc(section.image)}" alt="${esc(page.label)}" class="h-[24rem] w-full object-cover md:h-[30rem]" fetchpriority="high" decoding="async" />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/35 to-transparent px-6 py-5">
              <p class="font-display text-sm font-black uppercase tracking-[0.24em] text-white/80">${esc(page.label)}</p>
              <p class="mt-1 font-display text-xl font-black text-white">${esc(section.eyebrow)}</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="rounded-[2rem] border border-white/80 bg-white p-6 shadow-xl shadow-slate-100">
              <p class="${eyebrowClass}">Lecture guidee</p>
              <h2 class="mt-3 font-display text-2xl font-black text-brandDeep">${esc(section.panelTitle)}</h2>
              <ul class="mt-4 space-y-3">${panelItems}</ul>
            </div>
            <div class="rounded-[2rem] p-6 shadow-xl shadow-slate-100" style="${panelStyle}">
              <p class="${overlineBlueClass}">${esc(section.panelLabel || 'A retenir')}</p>
              <p class="mt-3 ${bodyClass}">${esc(panelBody)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCards(section) {
  const cards = (section.cards || [])
    .map(
      ({ icon, title, text }) => `
        <article class="rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-lg shadow-slate-100">
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brandBlue/10 text-brandBlue">
            <span data-lucide="${esc(icon)}" class="lucide h-6 w-6"></span>
          </div>
          <h3 class="mt-5 font-display text-xl font-black text-brandDeep">${esc(title)}</h3>
          <p class="mt-3 ${smallBodyClass}">${esc(text)}</p>
        </article>
      `
    )
    .join('');

  return `
    <section class="px-4 py-10 sm:px-6 lg:px-10" style="${sectionStyle(section.background)}">
      <div class="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
        <div class="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl shadow-slate-100">
          <div class="relative h-[22rem] w-full overflow-hidden">
            <img src="${esc(section.image)}" alt="${esc(section.title)}" class="h-full w-full object-cover" loading="lazy" decoding="async" />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent px-6 py-5">
              <p class="font-display text-sm font-black uppercase tracking-[0.24em] text-white/80">${esc(section.imageLabel || 'Image de terrain')}</p>
            </div>
          </div>
          <div class="p-6">
            <p class="${overlineBlueClass}">Angle de lecture</p>
            <p class="mt-3 ${bodyClass}">${esc(section.intro)}</p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="space-y-3">
            <p class="${eyebrowClass}">Points cles</p>
            <h2 class="${sectionTitleClass}">${esc(section.title)}</h2>
            <p class="max-w-2xl ${bodyClass}">${esc(section.intro)}</p>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">${cards}</div>
        </div>
      </div>
    </section>
  `;
}

function renderTimeline(section) {
  const steps = (section.steps || [])
    .map(
      ({ label, title, text }, index) => `
        <article class="relative rounded-[1.75rem] border border-white/80 bg-white p-5 shadow-lg shadow-slate-100">
          <div class="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-slate-100 md:block ${index === (section.steps || []).length - 1 ? 'opacity-0' : ''}"></div>
          <div class="flex items-start gap-4">
            <div class="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brandBlue to-brandPink font-display text-sm font-black text-white shadow-lg shadow-indigo-100">${esc(label)}</div>
            <div>
              <h3 class="font-display text-xl font-black text-brandDeep">${esc(title)}</h3>
              <p class="mt-3 ${smallBodyClass}">${esc(text)}</p>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  return `
    <section class="px-4 py-10 sm:px-6 lg:px-10" style="${sectionStyle(section.background)}">
      <div class="mx-auto w-full max-w-5xl space-y-6">
        <div class="space-y-3 text-center">
          <p class="${overlineBlueClass}">Parcours</p>
          <h2 class="${sectionTitleClass}">${esc(section.title)}</h2>
          <p class="mx-auto max-w-3xl ${bodyClass}">${esc(section.intro)}</p>
        </div>
        <div class="grid gap-4 md:grid-cols-2">${steps}</div>
      </div>
    </section>
  `;
}

function renderMetrics(section) {
  const cards = (section.metrics || [])
    .map(
      ({ value, label, text }) => `
        <article class="rounded-[1.75rem] border border-white/80 bg-white p-6 shadow-xl shadow-slate-100">
          <p>${renderAnimatedCount(value, 'font-display text-4xl font-black text-brandDeep')}</p>
          <p class="mt-2 font-display text-sm font-black uppercase tracking-[0.26em] text-[#7c86cb]">${esc(label)}</p>
          <p class="mt-4 ${smallBodyClass}">${esc(text)}</p>
        </article>
      `
    )
    .join('');

  const notes = (section.noteItems || [])
    .map(
      (item) => `
        <li class="flex items-center gap-3 ${smallBodyClass}">
          <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brandPink/10 text-brandPink">
            <span data-lucide="sparkles" class="lucide h-4 w-4"></span>
          </span>
          ${esc(item)}
        </li>
      `
    )
    .join('');

  return `
    <section class="px-4 py-10 sm:px-6 lg:px-10" style="${sectionStyle(section.background)}">
      <div class="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <div class="space-y-6">
          <div class="space-y-3">
            <p class="${eyebrowClass}">Reperes</p>
            <h2 class="${sectionTitleClass}">${esc(section.title)}</h2>
            <p class="max-w-2xl ${bodyClass}">${esc(section.intro)}</p>
          </div>
          <div class="grid gap-4 sm:grid-cols-3">${cards}</div>
        </div>

        <aside class="rounded-[2rem] border border-white/80 bg-white p-7 shadow-2xl shadow-slate-100">
          <p class="${overlineBlueClass}">${esc(section.noteTitle)}</p>
          <p class="mt-4 ${bodyClass}">${esc(section.noteText)}</p>
          <ul class="mt-5 space-y-3">${notes}</ul>
        </aside>
      </div>
    </section>
  `;
}

function renderSpotlight(section) {
  const bullets = (section.bullets || [])
    .map(
      (item) => `
        <li class="flex items-start gap-3 ${smallBodyClass}">
          <span class="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brandBlue/10 text-brandBlue">
            <span data-lucide="check" class="lucide h-4 w-4"></span>
          </span>
          ${esc(item)}
        </li>
      `
    )
    .join('');

  const content = `
    <div class="space-y-5">
      <div class="space-y-3">
        <p class="${eyebrowClass}">${esc(section.tag)}</p>
        <h2 class="${sectionTitleClass}">${esc(section.title)}</h2>
        <p class="max-w-2xl ${bodyClass}">${esc(section.text)}</p>
      </div>
      <ul class="space-y-3">${bullets}</ul>
      <blockquote class="rounded-[1.75rem] border border-white/80 bg-white p-6 font-display text-lg font-bold leading-relaxed text-brandDeep shadow-lg shadow-slate-100">
        "${esc(section.quote)}"
      </blockquote>
    </div>
  `;

  const image = `
    <div class="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl shadow-slate-100">
      <img src="${esc(section.image)}" alt="${esc(section.imageAlt || section.title)}" class="h-[28rem] w-full object-cover" loading="lazy" decoding="async" />
    </div>
  `;

  return `
    <section class="px-4 py-10 sm:px-6 lg:px-10" style="${sectionStyle(section.background)}">
      <div class="mx-auto grid w-full max-w-6xl gap-8 ${section.reverse ? 'lg:grid-cols-[1.05fr,0.95fr]' : 'lg:grid-cols-[0.95fr,1.05fr]'} lg:items-center">
        ${section.reverse ? `${content}${image}` : `${image}${content}`}
      </div>
    </section>
  `;
}

function renderGallery(section) {
  const images = (section.images || [])
    .map(
      ({ src, caption }, index) => `
        <figure class="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-xl shadow-slate-100 ${index === 0 ? 'sm:col-span-2' : ''}">
          <img src="${esc(src)}" alt="${esc(caption)}" class="h-${index === 0 ? '[20rem]' : '[16rem]'} w-full object-cover" loading="lazy" decoding="async" />
          <figcaption class="p-4 font-display text-sm font-bold text-brandDeep">${esc(caption)}</figcaption>
        </figure>
      `
    )
    .join('');

  return `
    <section class="px-4 py-10 sm:px-6 lg:px-10" style="${sectionStyle(section.background)}">
      <div class="mx-auto w-full max-w-6xl space-y-6">
        <div class="space-y-3 text-center">
          <p class="${overlineBlueClass}">Galerie</p>
          <h2 class="${sectionTitleClass}">${esc(section.title)}</h2>
          <p class="mx-auto max-w-3xl ${bodyClass}">${esc(section.intro)}</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">${images}</div>
      </div>
    </section>
  `;
}

function renderDocuments(section) {
  const documents = (section.documents || [])
    .map(
      ({ icon, title, meta, text }) => `
        <article class="rounded-[1.75rem] border border-white/80 bg-white p-5 shadow-lg shadow-slate-100">
          <div class="flex items-start justify-between gap-3">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brandBlue/10 text-brandBlue">
              <span data-lucide="${esc(icon)}" class="lucide h-6 w-6"></span>
            </div>
            <span class="rounded-full bg-slate-50 px-3 py-1 font-display text-xs font-black uppercase tracking-[0.18em] text-[#7c86cb]">${esc(meta)}</span>
          </div>
          <h3 class="mt-5 font-display text-xl font-black text-brandDeep">${esc(title)}</h3>
          <p class="mt-3 ${smallBodyClass}">${esc(text)}</p>
        </article>
      `
    )
    .join('');

  const aside = (section.asideItems || [])
    .map(
      (item) => `
        <li class="flex items-center gap-3 ${smallBodyClass}">
          <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brandPink/10 text-brandPink">
            <span data-lucide="check" class="lucide h-4 w-4"></span>
          </span>
          ${esc(item)}
        </li>
      `
    )
    .join('');

  return `
    <section class="px-4 py-10 sm:px-6 lg:px-10" style="${sectionStyle(section.background)}">
      <div class="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
        <div class="space-y-5">
          <div class="space-y-3">
            <p class="${overlineBlueClass}">Centre de ressources</p>
            <h2 class="${sectionTitleClass}">${esc(section.title)}</h2>
            <p class="max-w-2xl ${bodyClass}">${esc(section.intro)}</p>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">${documents}</div>
        </div>
        <aside class="rounded-[2rem] border border-white/80 bg-white p-7 shadow-2xl shadow-slate-100">
          <p class="${eyebrowClass}">${esc(section.asideTitle)}</p>
          <p class="mt-4 ${bodyClass}">${esc(section.asideText)}</p>
          <ul class="mt-5 space-y-3">${aside}</ul>
        </aside>
      </div>
    </section>
  `;
}

function renderCta(section, page) {
  const points = (section.points || [])
    .map(
      (item) => `
        <li class="flex items-center gap-3 ${smallBodyClass}">
          <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brandBlue/10 text-brandBlue">
            <span data-lucide="sparkles" class="lucide h-4 w-4"></span>
          </span>
          ${esc(item)}
        </li>
      `
    )
    .join('');

  return `
    <section class="px-4 py-10 sm:px-6 lg:px-10" style="${sectionStyle(section.background)}">
      <div class="mx-auto w-full max-w-4xl rounded-[2.5rem] border border-white/80 bg-white px-6 py-8 text-center shadow-2xl shadow-slate-100 sm:px-10 sm:py-10">
        <p class="${eyebrowClass}">${esc(page.label)}</p>
        <h2 class="mt-4 ${sectionTitleClass}">${esc(section.title)}</h2>
        <p class="mx-auto mt-4 max-w-2xl ${bodyClass}">${esc(section.text)}</p>
        <ul class="mx-auto mt-6 flex max-w-2xl flex-col gap-3 text-left">${points}</ul>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          ${renderPrimaryAction(section.primary || page.primaryAction, page.primaryAction)}
          ${renderHomeAndLinks()}
        </div>
      </div>
    </section>
  `;
}

function renderSection(section, page, description) {
  switch (section.type) {
    case 'hero':
      return renderHero(section, page, description);
    case 'cards':
      return renderCards(section);
    case 'timeline':
      return renderTimeline(section);
    case 'metrics':
      return renderMetrics(section);
    case 'spotlight':
      return renderSpotlight(section);
    case 'gallery':
      return renderGallery(section);
    case 'documents':
      return renderDocuments(section);
    case 'cta':
      return renderCta(section, page);
    default:
      return '';
  }
}

function getPreset(title = '') {
  return pagePresets[normalizeTitle(title)] || pagePresets['qui sommes nous'];
}

function buildContent({ title, subtitle, description }) {
  const preset = getPreset(title);
  const page = {
    label: title || 'Page',
    subtitle: subtitle || 'Presentation',
    primaryAction: preset.primaryAction
  };

  return preset.sections.map((section) => renderSection(section, page, description)).join('');
}

function renderStaticPage(root) {
  const { title, subtitle, description } = root.dataset || {};
  let destroyHeader = () => {};

  root.innerHTML = `
    ${Header()}
    <main class="page-shell">
      ${buildContent({ title, subtitle, description })}
    </main>
    ${Footer()}
  `;

  destroyHeader = setupHeader(root);

  return () => {
    destroyHeader();
  };
}

function applyLucideIcons() {
  if (typeof window === 'undefined') return;
  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }
}

const root = document.getElementById('static-app');

if (root) {
  let cleanup = renderStaticPage(root);
  applyLucideIcons();
  let teardownCounters = initCountAnimations(root);

  const rerender = () => {
    cleanup();
    teardownCounters();
    cleanup = renderStaticPage(root);
    applyLucideIcons();
    teardownCounters = initCountAnimations(root);
  };

  import('./store/headerStore.js').then(({ subscribeHeaderContent }) => {
    const unsubHeader = subscribeHeaderContent(rerender);
    window.addEventListener(
      'beforeunload',
      () => {
        teardownCounters();
        unsubHeader();
      },
      { once: true }
    );
  });

  import('./store/footerStore.js').then(({ subscribeFooterContent }) => {
    const unsubFooter = subscribeFooterContent(rerender);
    window.addEventListener(
      'beforeunload',
      () => {
        teardownCounters();
        unsubFooter();
      },
      { once: true }
    );
  });
}
