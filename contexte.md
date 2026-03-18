# Contexte du projet

## Role de ce document

Ce fichier est notre journal de bord principal.

Il doit etre mis a jour a chaque etape importante pour :

- savoir exactement ou nous en sommes
- garder une trace claire des decisions prises
- eviter de repartir de zero ou de perdre le fil
- faciliter la reprise du projet a tout moment

Regle de travail : apres chaque avancee significative, ce fichier doit etre relu puis mis a jour.

---

## Identite du projet

- Nom du projet : `LHUPC / AED`
- Type : plateforme institutionnelle avec site public + dashboard d'administration
- Objectif principal : construire un site moderne, administrable, evolutif et connecte a Firebase
- Document de reference initial : `CONTEXTE_PROJET.md`

---

## Etat actuel

- Phase actuelle : `Phase 2 - Base simple HTML/CSS/JS + premiers composants UI`
- Statut global : `En cours`
- Design : `Header, Hero, section cartes, section impact, section projets, section parrainage et footer integres (avec photos reelles, icones Lucide et contenus en francais)`
- Firebase : `Pas encore connecte`
- Dashboard : `Dashboard global avec sidebar et vues dynamiques Header / Hero / About / Impact / Projects / Sponsor / Footer`
- Front public : `Header, Hero, section cartes, section impact, section projets, section parrainage et footer responsive crees et illustres`
- Mise en page : `Sections publiques passees en full width device`

---

## Decision technique prise pour demarrer

La direction technique a ete corrigee.

Nous n'utilisons plus `React` ni `Vite`.

La base actuelle du projet est :

- `HTML`
- `CSS`
- `JavaScript` modulaire natif

Interpretation correcte du besoin :

- quand le client dit `JSX`, il veut surtout dire `du HTML structure dans du JavaScript`
- il ne veut pas de framework front
- il veut une base simple, lisible et compatible avec un serveur statique classique

Decision retenue :

- chaque composant sera une fonction JavaScript qui retourne du HTML
- le style sera gere en CSS classique
- le projet doit fonctionner directement avec `index.html` et un serveur simple comme `Live Preview`

---

## Ce qui a deja ete cree

### Racine du projet

- `index.html`
- `dashboardglobal.html`
- `.gitignore`
- `README.md`
- `CONTEXTE_PROJET.md`
- `contexte.md`

### Structure applicative

- `src/js/main.js`
- `src/js/app.js`
- `src/js/dashboardglobal.js`
- `src/styles/main.css`
- `src/styles/dashboard.css`

### Configuration

- `src/js/config/firebase.example.js`

### Donnees temporaires

- `src/js/data/headerContent.js`
- `src/js/data/heroContent.js`
- `src/js/data/aboutContent.js`
- `src/js/data/impactContent.js`
- `src/js/data/projectsContent.js`
- `src/js/data/sponsorContent.js`
- `src/js/data/navigation.js`

### Stockage et utilitaires

- `src/js/store/headerStore.js`
- `src/js/store/heroStore.js`
- `src/js/store/aboutStore.js`
- `src/js/store/impactStore.js`
- `src/js/store/projectsStore.js`
- `src/js/store/sponsorStore.js`
- `src/js/utils/escapeHtml.js`

### Composants publics

- `src/js/components/layout/brandLogo.js`
- `src/js/components/layout/header.js`
- `src/js/components/layout/footer.js`
- `src/js/components/sections/heroSection.js`
- `src/js/components/sections/aboutSection.js`
- `src/js/components/sections/projectsSection.js`
- `src/js/components/sections/programsSection.js`
- `src/js/components/sections/impactSection.js`
- `src/js/components/sections/sponsorSection.js`
- `src/js/components/sections/newsSection.js`

---

## Ce que le squelette fait deja

- prepare une base front-end simple sans framework
- cree les sections principales de la home sous forme de composants JavaScript modulaires
- permet une ouverture directe via `index.html` et un serveur simple
- prepare une base de configuration Firebase pour plus tard
- integre un premier vrai composant `Header` responsive en mobile first base sur la reference desktop fournie
- integre une vraie `HeroSection` responsive inspiree de la maquette fournie
- remplace les illustrations placeholder par des photos reelles issues du dossier `PHOTOS` pour le hero, les projets et la carte parrainage
- remplace les icones custom par des icones Lucide charges globalement
- traduit les contenus par defaut du front en francais
- ajoute des visuels reels aux cartes de la section impact
- ajoute des visuels reels aux cartes de la section about
- supprime les animations de section (GSAP desactive)
- refinement du menu mobile : panneau slide-in a droite, transition douce, fermeture retardee pour laisser l’animation se jouer
- ajustement du z-index du header/panneau mobile pour garantir l’affichage au-dessus de la page
- simplification du menu mobile (suppression de l'attribut `hidden` pour un slide systematique via la classe `is-open`)
- repositionnement du panneau mobile en absolu sous le header (z-index eleve, overflow visible, scroll interne)
- passage du panneau mobile en pleine hauteur fixe (right slide, hauteur 100vh)
- ajout d'un bouton de fermeture (icone X) dans le panneau mobile
- ajout d'une fenetre d'ouverture (splash) avec logo, dicton et loader rose qui disparait apres 3s
- animation du titre hero en rotateur lettre par lettre avec 3 textes configurables depuis le dashboard
- ajustement du rotateur pour laisser le texte revenir a la ligne (plus de debordement sur l'image)
- temporisation du rotateur (affichage 4s avant effacement) et stabilisation de la hauteur du titre pour eviter les sauts de layout
- renforcement de la reservation d'espace pour les titres animes afin d'eviter tout deplacement du flux
- ajout d'un comptage anime sur les chiffres de la section impact (count-up on scroll)
- fonds degrades differents et coherents par section (hero/about/impact/projects/sponsor)
- animations hover/unfocus homogenes sur tous les boutons (header, hero, cards, impact CTA, sponsor CTA, footer, dashboard)
- animation “shine” sur les barres de progression des projets
- animation “shake” intermittente (3s toutes les 13s) sur les CTA cles (hero secondaire, impact CTA)
- style neumorphique sur les cartes de la section impact (fond, icon, media)
- hover des images impact : crossfade vers une image alternative
- correction du chemin d'image de la section bridge (background)
- ajout d'une image explicite dans la section bridge pour garantir l'affichage (plein ecran)
- fond global du site passe sur la photo `pexels-justebuka-20407104.jpg`
- suppression de la section bridge et resserrage des espacements (sections collees)
- correction du chemin du bg global (../../PHOTOS/pexels-justebuka-20407104.jpg)
- reintroduction d'une section bridge transparente simple (100vh, sans pin) entre impact et projects, espacements colles
- les images alternatives des cartes impact pointent maintenant sur des fichiers existants du dossier PHOTOS
- integre une vraie section cartes responsive inspiree de la maquette fournie
- integre une vraie section impact responsive inspiree de la maquette fournie
- integre une vraie section projets responsive inspiree de la maquette fournie
- integre une vraie section parrainage responsive inspiree de la maquette fournie
- integre un vrai footer responsive inspire de la maquette fournie
- utilise le logo fourni `src/logo/ICON.png` comme icone par defaut dans le header et le footer
- ajoute des animations professionnelles au scroll sur toutes les sections avec GSAP + ScrollTrigger
- relie le header a une source de donnees partagee avec persistance locale
- relie le hero a une source de donnees partagee avec persistance locale
- relie la section cartes a une source de donnees partagee avec persistance locale
- relie la section impact a une source de donnees partagee avec persistance locale
- relie la section projets a une source de donnees partagee avec persistance locale
- relie la section parrainage a une source de donnees partagee avec persistance locale
- ajoute une premiere page `dashboardglobal.html` capable de faire le CRUD du header
- transforme `dashboardglobal.html` en vrai dashboard global avec sidebar de navigation entre sections
- affiche dynamiquement a droite les options de modification de la section selectionnee
- permet de previsualiser le header dans le dashboard avant de revenir sur la page publique
- permet de previsualiser aussi le hero dans le dashboard
- permet de previsualiser aussi la section cartes dans le dashboard
- permet de previsualiser aussi la section impact dans le dashboard
- permet de previsualiser aussi la section projets dans le dashboard
- permet de previsualiser aussi la section parrainage dans le dashboard
- applique maintenant une logique full width sur le header, le hero et les autres sections publiques
- intègre Tailwind via CDN (config couleurs/typos) sur `index.html` et `dashboardglobal.html` pour entamer la migration vers des utilitaires (CSS conservé pour l’instant pour ne rien casser)
- fond global basculé sur Tailwind (`body` en utilitaires bg-cover bg-fixed avec `./PHOTOS/pexels-justebuka-20407104.jpg` sur la page publique), retrait du background CSS historique ; le dashboard reste en fond neutre
- suppression de la couche blanche (`page-shell`) et allègement des coques de section pour laisser voir l’image de fond
- `page-shell` repasse transparent pour que la section après impact (bridge) reste totalement transparente et laisse voir le fond, tandis que les autres sections gardent leur fond blanc
- sections rendues opaques (dégradés pâles bleus/roses) pour éviter la transparence générale
- ajout d'une page dédiée aux liens `liens.html` qui réutilise header/footer et liste tous les liens/actions sous forme de cartes illustrées (Tailwind + photos), via `src/js/linksPage.js` et bootstrap `src/js/linksMain.js`
- création d'un gabarit de pages statiques (`src/js/staticPage.js`) et d'un ensemble de pages dédiées pour chaque lien (nav, actions, footer) dans `pages/*.html`, toutes pointant vers de vraies pages (plus de `#`) avec header/footer communs
- mise à jour des liens par défaut du header et du footer pour cibler ces nouvelles pages (`/pages/...`) et non plus des ancres internes
- enrichissement du gabarit `staticPage.js` : chaque page secondaire a maintenant 5 sections (intro + points clés + méthode + galerie + appel à action) avec Tailwind et visuels du dossier PHOTOS
- ajout d'une config Tailwind partagée (`src/js/tw-config.js`) avec safelist pour générer toutes les classes utilisées dans les pages dynamiques, et inclusion avant le CDN Tailwind dans toutes les pages
- correction robustesse pages secondaires : les fonds des 5 sections sont désormais appliqués en gradients inline (`style`) dans `staticPage.js` (100vh garanti) pour éviter les pages blanches si des classes Tailwind dynamiques ne sont pas compilées
- mise à jour navigation : retrait du lien `POLITIQUES` du header et ajout explicite du lien `Politiques` dans le footer ; correction des chemins logo en absolu (`/src/logo/ICON.png`) + normalisation en store pour corriger l’affichage sur toutes les pages
- audit complet des pages secondaires : la cause du ressenti "tout se ressemble" venait du moteur `staticPage.js` qui rejouait partout la meme sequence (hero + points cles + methode + galerie + CTA) avec seulement du texte change
- refonte profonde des pages secondaires : `staticPage.js` genere maintenant des compositions editoriales distinctes selon la page (studio de presentation, page programme, mini centre de preuves, bibliotheque documentaire, page manifeste, hub d engagement, page conversion, page confidentialite, etc.)
- enrichissement des contenus secondaires avec une direction plus "ONG institutionnelle" inspiree de references officielles du secteur (UNICEF, charity: water, Plan International) pour melanger narration, preuves, reperes et parcours de lecture
- deuxieme passe editoriale sur `staticPage.js` : les textes ont ete reecrits pour coller au sujet reel de chaque page (mission, programmes, don, benevolat, politiques, confidentialite, parrainage, etc.) et pour supprimer les formulations meta qui parlaient encore du design au lieu du contenu
- harmonisation visuelle des pages secondaires avec la home : titres passes sur la typo `Nunito` (`font-display`), accents textes bleu/rose, degradés sur les titres principaux et hierarchie typographique renforcee dans `staticPage.js` + `tw-config.js`
- anti-cache mis a jour pour les scripts des pages secondaires et la config Tailwind (`tw-config.js?v=20260318-2`, `staticPage.js?v=20260318-4`) afin de forcer le navigateur a charger la nouvelle identite visuelle
- animations partagees etendues : les CTA importants des pages secondaires utilisent maintenant la meme animation intermittente `btn-shake` que sur l accueil ; les CTA projets et le CTA principal de la section parrainage sur la home utilisent aussi cette logique
- animation count-up mutualisee : creation de `src/js/utils/countAnimation.js` pour animer tous les elements portant `data-count-target`; la home continue d animer les chiffres impact et anime maintenant aussi les montants des projets, tandis que les pages secondaires animent leurs chiffres/statistiques/metrics automatiquement
- anti-cache remis a jour pour charger les nouvelles animations (`index.html` -> `main.js?v=20260318-25`, pages secondaires -> `staticPage.js?v=20260318-5`)
- ajout d un effet flash blanc recurrent sur les boutons du header (`.header-action`) : une bande lumineuse traverse les CTA de droite vers la gauche toutes les 5 secondes via `main.css`
- ajustement du flash header : l effet alterne maintenant gauche -> droite puis droite -> gauche, avec un passage toutes les 7 secondes (cycle complet 14s)
- anti-cache CSS mis a jour sur tout le site pour charger ce nouvel effet (`main.css?v=20260318-45`)
- correction de l etat actif du header desktop/mobile : le soulignement du lien de navigation est maintenant calcule depuis l URL courante dans `src/js/components/layout/header.js` au lieu de rester fige sur l etat sauvegarde du store
- anti-cache JS mis a jour pour charger le nouveau header (`header.js?v=20260318-7`, `index.html` -> `main.js?v=20260318-26`, `liens.html` -> `linksMain.js?v=20260318-3`, pages secondaires -> `staticPage.js?v=20260318-6`, `dashboardglobal.html` -> `dashboardglobal.js?v=20260318-7`)
- menu mobile enrichi : ajout d une entree `ACCUEIL` en premiere position dans la navigation mobile, sans toucher a l ordre du menu desktop
- anti-cache JS remis a jour pour charger cette variation du header (`header.js?v=20260318-8`, `index.html` -> `main.js?v=20260318-27`, `liens.html` -> `linksMain.js?v=20260318-4`, pages secondaires -> `staticPage.js?v=20260318-7`, `dashboardglobal.html` -> `dashboardglobal.js?v=20260318-8`)
- passe d harmonisation typo/couleurs complementaire : correction des derniers textes/chiffres qui utilisaient encore des classes trop generiques (`text-slate-*`, graisse/typo non alignee) surtout dans `linksPage.js` et dans certains labels/meta de `staticPage.js`
- cache remis a jour pour cette passe (`linksPage.js?v=20260318-3`, `liens.html` -> `linksMain.js?v=20260318-5`, pages secondaires -> `staticPage.js?v=20260318-8`)
- correction du bloc avant footer (parrainage) : `Jackson, 7` devient `Jackson, 7 ans` et la photo par defaut est remplacee par `PHOTOS/pexels-director-muuh-321947994-20101037.jpg`
- migration defensive du sponsor store : si une ancienne valeur sauvegardee contient encore `7` ou `PHOTOS/5.jpg`, elle est automatiquement normalisee vers les nouvelles valeurs
- anti-cache homepage/dashboard mis a jour pour recharger ce correctif (`index.html` -> `main.js?v=20260318-28`, `dashboardglobal.html` -> `dashboardglobal.js?v=20260318-9`)
- correction des assets casses : suppression des references inexistantes `PHOTOS/6.jpg` et `PHOTOS/7.jpg` dans les pages statiques et dans `linksPage.js`, remplacees par de vraies images disponibles du dossier `PHOTOS`
- renforcement de la robustesse Tailwind CDN pour les pages generees en JS : `tw-config.js` safelist maintenant les classes utilitaires et arbitraires utilisees par le nouveau moteur de pages afin d eviter des sections non stylées
- anti-cache des pages secondaires et de la page `liens.html` mis a jour pour charger la nouvelle version du moteur (`staticPage.js?v=20260318-3`, `linksMain.js?v=20260318-2`)

---

## Verification actuelle

- aucune dependance npm requise a cette etape
- structure des fichiers verifiee localement
- les modules JavaScript ont ete verifies localement en mode ESM
- le projet est maintenant compatible avec un serveur simple de type `Live Preview`
- `index.html` et `dashboardglobal.html` utilisent maintenant un anti-cache simple pour mieux refleter les derniers changements en `Live Preview`
- le dashboard du header utilise `localStorage` pour simuler l'administration en phase prototype
- la page d'accueil ecoute maintenant les mises a jour du header pour se rerendre automatiquement
- la page d'accueil utilise maintenant des conteneurs pleine largeur sur l'appareil
- la page d'accueil ecoute aussi les mises a jour du hero pour se rerendre automatiquement
- la page d'accueil ecoute aussi les mises a jour de la section cartes pour se rerendre automatiquement
- la page d'accueil ecoute aussi les mises a jour de la section impact pour se rerendre automatiquement
- la page d'accueil ecoute aussi les mises a jour de la section projets pour se rerendre automatiquement
- la page d'accueil ecoute aussi les mises a jour de la section parrainage pour se rerendre automatiquement

---

## Ce que le squelette ne fait pas encore

- aucun design final
- aucune authentification admin
- aucune connexion reelle a Firestore
- aucun upload media
- aucune logique CMS complete
- aucun contenu final
- aucun systeme de roles ou permissions
- le reste du design du site n'est pas encore integre
- le dashboard ne couvre pour l'instant que le header, le hero, la section cartes, la section impact, la section projets et la section parrainage
- aucune synchronisation Firebase n'est encore branchee sur le dashboard
- les icones / visuels reels de la section impact ne sont pas encore fournis, donc des illustrations SVG temporaires sont utilisees

---

## Routage actuellement prevu

- `index.html` : accueil public actuel
- `dashboardglobal.html` : dashboard global actuel avec navigation sidebar entre `Header`, `Hero Section`, `About Section`, `Impact Section`, `Projects Section`, `Sponsor Section` et `Footer`

Le projet fonctionne pour l'instant comme une page principale simple. Les pages internes et le dashboard seront ajoutes ensuite avec la meme logique modulaire.

---

## Etape en cours

Nous avons corrige la base technique, integre le `Header`, construit le `HeroSection`, construit la section cartes, construit la section impact, construit la section projets, construit la section parrainage, pose un vrai dashboard global avec navigation entre sections et commence a remplacer les illustrations par des photos reelles.

Prochaine etape logique :

1. valider ou ajuster le header, le hero, la section cartes, la section impact, la section projets, la section parrainage et leur dashboard
2. etendre le dashboard aux autres sections importantes
3. continuer les sections publiques principales
4. brancher progressivement la structure dynamique Firebase sur les composants
5. integrer les assets finaux quand ils seront disponibles

---

## Prochaine priorite recommandee

Comme nous avons choisi d'avancer composant par composant, la meilleure suite immediate est :

- finaliser les composants visibles structurants du front public
- garder une approche mobile first sur chaque bloc
- garder le meme pattern `composant public + section CRUD dans le dashboard`
- apres le `Header`, le `HeroSection`, la section cartes, la section impact, la section projets et la section parrainage, continuer avec `ProgramsSection`
- une fois 2 ou 3 blocs cles poses, definir precisement leur schema de contenu Firebase
- conserver le dashboard global avec sidebar comme point d'entree unique pour l'administration

Cette approche permet d'avancer visuellement sans perdre la logique CMS du projet.

---

## Questions encore ouvertes

- confirme-t-on definitivement la base simple `HTML + CSS + JavaScript modulaire` ?
- veut-on un seul dashboard central ou des modules distincts par type de contenu ?
- veut-on preparer des pages internes des maintenant ou d'abord finaliser la home + dashboard ?
- faut-il prevoir des roles admin plus tard ou un seul super administrateur suffit au debut ?
- le lien `POLICIES` du header reste-t-il temporairement ancre au footer en attendant les vraies pages de politiques ?
- veut-on que le dashboard du header gere plus tard aussi le logo image reel au lieu du SVG temporaire code ?
- veut-on un dashboard CRUD pour le hero tout de suite ou seulement apres 2 ou 3 sections front finalisees ?
- souhaite-t-on ajouter l'upload/selection d'images (hero, projets, parrainage) directement depuis le dashboard via Firebase Storage ?
- veut-on garder la section cartes juste apres le hero comme bloc d'introduction principal ou l'ajuster plus tard dans l'ordre des sections ?
- veut-on garder le bloc impact avant la section projets dans l'ordre actuel de la home ?
- veut-on garder la section projets dans cette forme de cartes de campagne ou prevoir plus tard des images televersees depuis le dashboard ?
- veut-on ajouter un vrai champ image / video pour la section parrainage dans le dashboard ?

---

## Journal des avancees

### 2026-03-16 - Etape 1

Travail realise :

- creation du document de reference initial `CONTEXTE_PROJET.md`
- creation du squelette complet du projet
- separation de la partie publique et de la partie dashboard
- creation des composants de section principaux
- creation des pages admin de base
- preparation des fichiers de configuration du projet
- creation de ce fichier `contexte.md` pour le suivi permanent

Resultat :

- le projet dispose maintenant d'une base claire, propre et extensible

### 2026-03-16 - Etape 2

Travail realise :

- transformation du `Header` placeholder en vrai composant UI
- integration d'une version responsive mobile first
- ajout d'un menu mobile avec ouverture / fermeture
- ajout des boutons `Donate` et `Sponsor a Child`
- adaptation de la navigation desktop pour se rapprocher de la maquette fournie
- creation de `src/components/layout/BrandLogo.jsx` pour reproduire temporairement le logo en SVG code
- ajout d'un ancrage `#footer` temporaire pour le lien `POLICIES`

Resultat :

- le projet a maintenant son premier composant visuel reel, exploitable sur mobile et desktop

### 2026-03-16 - Etape 3

Travail realise :

- diagnostic du probleme d'affichage dans `Live Preview`
- identification d'une mauvaise interpretation du besoin technique
- abandon de la base `React + Vite`
- reconstruction du projet sur une base simple `HTML + CSS + JavaScript modulaire`
- remplacement du point d'entree par `index.html` + `src/js/main.js`
- reconstruction du `Header` pour qu'il fonctionne sans framework
- nettoyage des anciens fichiers React / Vite
- mise a jour de `README.md`

Resultat :

- le projet est maintenant compatible avec `Live Preview` et respecte mieux le besoin de simplicite exprime

### 2026-03-16 - Etape 4

Travail realise :

- creation de `dashboardglobal.html`
- creation de `src/js/dashboardglobal.js` pour administrer le header
- creation d'une source de donnees partagee du header avec `src/js/data/headerContent.js`
- creation d'un stockage local avec `src/js/store/headerStore.js`
- liaison du header public aux donnees sauvegardees en `localStorage`
- ajout d'un CRUD pour les liens de navigation
- ajout d'un CRUD pour les boutons d'action
- ajout d'un formulaire de mise a jour de l'identite du header
- ajout d'un apercu direct du header public dans le dashboard
- ajout des styles de dashboard dans `src/styles/dashboard.css`

Resultat :

- le projet dispose maintenant d'une premiere administration concrete, simple et utilisable pour piloter le header

### 2026-03-16 - Etape 5

Travail realise :

- diagnostic du manque de synchronisation entre `dashboardglobal.html` et `index.html`
- ajout d'un systeme d'abonnement aux changements du header dans `src/js/store/headerStore.js`
- ajout d'une emission d'evenement apres sauvegarde ou reset du header
- mise a jour de `src/js/main.js` pour rerendre la page publique quand le header change
- mise a jour de `src/js/app.js` pour nettoyer et reconstruire proprement le header a chaque rerender

Resultat :

- les modifications faites dans le dashboard se repercutent maintenant correctement sur la page d'accueil

### 2026-03-16 - Etape 6

Travail realise :

- remplacement du placeholder du hero par une vraie `HeroSection`
- integration d'une structure responsive mobile first basee sur la maquette fournie
- ajout des deux CTA `Get Involved` et `Donate Now`
- creation d'un visuel hero en illustration SVG integree pour approcher la photo de reference
- ajout des styles dedies au hero dans `src/styles/main.css`

Resultat :

- la page d'accueil dispose maintenant d'un bloc hero visuel coherent avec le header et adapte au mobile comme au desktop

### 2026-03-16 - Etape 7

Travail realise :

- correction de la largeur du `Header`
- correction de la largeur du `HeroSection`
- correction de la largeur des sections publiques et du footer
- suppression des limites de largeur et des marges laterales sur les conteneurs publics

Resultat :

- la page d'accueil suit maintenant une logique `full width device` sur l'ensemble des blocs publics

### 2026-03-16 - Etape 8

Travail realise :

- refonte de `dashboardglobal.html` en veritable dashboard global
- ajout d'une sidebar pour naviguer entre les sections administrables
- affichage dynamique a droite des options CRUD selon la section selectionnee
- ajout d'une source de donnees du hero avec `src/js/data/heroContent.js`
- ajout d'un stockage du hero avec `src/js/store/heroStore.js`
- liaison du hero public aux donnees sauvegardees
- ajout d'une vue dashboard pour le `Header`
- ajout d'une vue dashboard pour le `HeroSection`
- mise a jour de `src/js/main.js` pour ecouter aussi les changements du hero

Resultat :

- `dashboardglobal.html` joue maintenant bien son role de dashboard global et permet de naviguer entre `Header` et `Hero Section` pour modifier leurs donnees

### 2026-03-16 - Etape 9

Travail realise :

- remplacement du placeholder `AboutSection` par une vraie section cartes inspiree de la maquette fournie
- creation de `src/js/data/aboutContent.js`
- creation de `src/js/store/aboutStore.js`
- ajout d'une persistance locale pour la section cartes
- mise a jour de `src/js/main.js` pour ecouter aussi les changements de cette section
- ajout d'une vue `About Section` dans la sidebar du dashboard global
- ajout d'un CRUD pour les cartes de cette section
- ajout d'un apercu dynamique de cette section dans le dashboard
- ajout des styles publics de cette section dans `src/styles/main.css`

Resultat :

- la page d'accueil dispose maintenant de la section cartes demandee et `dashboardglobal.html` permet aussi de la piloter

### 2026-03-16 - Etape 10

Travail realise :

- verification que la troisieme section `About Section` etait bien deja presente dans `src/js/dashboardglobal.js`
- ajout de balises meta anti-cache dans `dashboardglobal.html`
- ajout de balises meta anti-cache dans `index.html`
- ajout de suffixes de version sur les fichiers CSS et JavaScript charges par `dashboardglobal.html`
- ajout de suffixes de version sur les fichiers CSS et JavaScript charges par `index.html`

Resultat :

- le dashboard et la page publique rafraichissent plus proprement leurs assets dans `Live Preview`
- la sidebar du dashboard doit maintenant afficher plus fiablement les trois sections `Header`, `Hero Section` et `About Section`

### 2026-03-16 - Etape 11

Travail realise :

- remplacement du placeholder `ProjectsSection` par une vraie section projets inspiree de la maquette fournie
- creation de `src/js/data/projectsContent.js`
- creation de `src/js/store/projectsStore.js`
- ajout d'une persistance locale pour la section projets
- mise a jour de `src/js/main.js` pour ecouter aussi les changements de cette section
- ajout d'une vue `Projects Section` dans la sidebar du dashboard global
- ajout d'un CRUD pour le contenu principal de cette section
- ajout d'un CRUD pour les cartes projets avec progression, montants et CTA
- ajout d'un apercu dynamique de cette section dans le dashboard
- ajout des styles publics de cette section dans `src/styles/main.css`
- ajout d'un ajustement de preview dans `src/styles/dashboard.css`
- mise a jour des suffixes de version dans `index.html` et `dashboardglobal.html` pour forcer le rechargement des nouveaux assets

Resultat :

- la page d'accueil affiche maintenant une vraie section projets responsive
- `dashboardglobal.html` permet maintenant aussi de piloter la section projets avec son CRUD complet

### 2026-03-16 - Etape 12

Travail realise :

- retrait des sections `ProgramsSection`, `ImpactSection`, `SponsorSection` et `NewsSection` du rendu de `index.html`
- nettoyage des imports inutiles dans `src/js/app.js`
- mise a jour du chargement de `src/js/main.js` et de `src/js/app.js` avec une nouvelle version pour eviter un ancien cache en `Live Preview`

Resultat :

- la page d'accueil n'affiche maintenant plus que les sections actuellement validees : `Header`, `Hero`, `About` et `Projects`

### 2026-03-16 - Etape 13

Travail realise :

- remplacement du placeholder `ImpactSection` par une vraie section impact inspiree de la maquette fournie
- creation de `src/js/data/impactContent.js`
- creation de `src/js/store/impactStore.js`
- ajout d'une persistance locale pour la section impact
- reintegration de la section impact dans `src/js/app.js`
- mise a jour de `src/js/main.js` pour ecouter aussi les changements de cette section
- ajout d'une vue `Impact Section` dans la sidebar du dashboard global
- ajout d'un CRUD pour le contenu principal de cette section
- ajout d'un CRUD pour les cartes statistiques de cette section
- ajout d'un apercu dynamique de cette section dans le dashboard
- ajout des styles publics de cette section dans `src/styles/main.css`
- ajout d'un ajustement de preview dans `src/styles/dashboard.css`
- mise a jour des suffixes de version dans `index.html`, `dashboardglobal.html`, `src/js/main.js` et `src/js/app.js` pour eviter le cache en `Live Preview`

Resultat :

- la page d'accueil affiche maintenant une vraie section impact responsive
- `dashboardglobal.html` permet maintenant aussi de piloter la section impact avec son CRUD complet

### 2026-03-16 - Etape 14

Travail realise :

- remplacement du placeholder `SponsorSection` par une vraie section parrainage inspiree de la maquette fournie
- creation de `src/js/data/sponsorContent.js`
- creation de `src/js/store/sponsorStore.js`
- ajout d'une persistance locale pour la section parrainage
- reintegration de la section parrainage dans `src/js/app.js`
- mise a jour de `src/js/main.js` pour ecouter aussi les changements de cette section
- ajout d'une vue `Sponsor Section` dans la sidebar du dashboard global
- ajout d'un CRUD pour le contenu principal, le profil enfant et la carte video
- ajout d'un apercu dynamique de cette section dans le dashboard
- ajout des styles publics de cette section dans `src/styles/main.css`
- ajout d'un ajustement de preview dans `src/styles/dashboard.css`
- mise a jour des suffixes de version dans `index.html`, `dashboardglobal.html`, `src/js/main.js` et `src/js/app.js` pour eviter le cache en `Live Preview`

Resultat :

- la page d'accueil affiche maintenant une vraie section parrainage responsive
- `dashboardglobal.html` permet maintenant aussi de piloter la section parrainage avec son CRUD complet

### 2026-03-16 - Etape 15

Travail realise :

- remplacement du footer placeholder par un vrai footer inspire de la maquette fournie
- ajout d'une structure footer avec logo, contacts, colonnes de liens et newsletter dans `src/js/components/layout/footer.js`
- ajout des styles responsive du footer dans `src/styles/main.css`
- mise a jour des suffixes de version dans `index.html`, `src/js/main.js` et `src/js/app.js` pour eviter le cache en `Live Preview`

Resultat :

- la page d'accueil affiche maintenant un footer visuel coherent avec le reste du site

### 2026-03-17 - Etape 16

Travail realise :

- creation de `src/js/data/footerContent.js`
- creation de `src/js/store/footerStore.js`
- branchement du footer public sur une source de donnees partagee
- ajout d'une ecoute des changements du footer dans `src/js/main.js`
- ajout d'une vue `Footer` dans la sidebar de `dashboardglobal.html`
- ajout d'un apercu dynamique du footer dans le dashboard
- ajout d'un formulaire de modification pour le branding, les contacts, la newsletter et les colonnes de liens
- renforcement du fond bleu du footer public et de son apercu dashboard
- mise a jour des suffixes de version dans `index.html`, `dashboardglobal.html`, `src/js/app.js` et `src/js/main.js`

Resultat :

- le footer est maintenant visible et modifiable depuis le dashboard global
- le fond du footer est maintenant clairement bleu sur la page publique

### 2026-03-17 - Etape 17

Travail realise :

- suppression de l'espace superieur du header en retirant son `padding-top`
- ajout d'un comportement de header intelligent dans `src/js/components/layout/header.js`
- le header se masque maintenant au scroll vers le bas
- le header reapparait immediatement au scroll vers le haut
- mise a jour des suffixes de version dans `index.html`, `dashboardglobal.html`, `src/js/app.js` et `src/js/main.js` pour eviter le cache en `Live Preview`

Resultat :

- le header colle maintenant bien tout en haut de la page
- le comportement hide on scroll down / show on scroll up est maintenant actif

### 2026-03-17 - Etape 18

Travail realise :

- suppression de l'espacement externe en haut du `Hero`
- suppression de l'espacement externe entre le `Hero` et la section `About`
- ajustement du `padding` de `about-section__shell` pour eviter une bande vide visuelle sous le hero
- mise a jour du suffixe de version CSS/JS dans `index.html` et `dashboardglobal.html` pour forcer le rechargement en `Live Preview`

Resultat :

- le `Hero` colle maintenant directement au header
- il n'y a plus de marge vide visible au-dessus et au-dessous du hero

### 2026-03-17 - Etape 19

Travail realise :

- ajout d'un champ image au hero et remplacement de l'illustration SVG par une photo issue du dossier `PHOTOS`
- ajout d'images reelles pour chaque carte de la section projets (dossier `PHOTOS`)
- ajout d'une photo reelle pour la carte parrainage (profil enfant) dans la section `Sponsor`
- mise a jour des styles pour supporter les nouveaux visuels (hero, projets, sponsor)
- mise a jour des suffixes de version CSS/JS pour forcer le rechargement des assets

Resultat :

- la home affiche maintenant des photos reelles a la place des illustrations pour le hero, les projets et le parrainage
- les composants et previews dashboard utilisent les nouveaux visuels sans rupture de mise en page

### 2026-03-17 - Etape 20

Travail realise :

- remplacement de tous les icones custom par des icones Lucide (menu, about, impact, CTA, bouton video, etc.)
- ajout du chargement Lucide global via CDN et application automatique apres chaque rendu (site + dashboard)
- ajustement des styles pour les nouveaux icones
- mise a jour des versions d'assets pour casser le cache

Resultat :

- les icones du site et du dashboard sont coherents, vectoriels et faciles a maintenir via Lucide
- aucune regression de mise en page observee apres remplacement

### 2026-03-17 - Etape 21

Travail realise :

- traduction de tous les contenus par defaut visibles sur le site public en francais (hero, navigation, sections About/Impact/Projects/Sponsor, footer)

Resultat :

- l’experience front est maintenant entierement en francais pour les visiteurs

### 2026-03-17 - Etape 22

Travail realise :

- utilisation de `src/logo/ICON.png` comme icone par defaut dans le header et le footer, avec prise en compte dans les donnees partagees

### 2026-03-17 - Etape 23

Travail realise :

- ajout d’animations au scroll pour toutes les sections et cartes (GSAP + ScrollTrigger), incluant des apparitions progressives et des stagger
- chargement de GSAP/ScrollTrigger en CDN et initialisation apres chaque rendu

Resultat :

- l’experience de scrolling est plus dynamique et professionnelle sans impacter la structure

### 2026-03-17 - Etape 24

Travail realise :

- ajout de photos issues du dossier `PHOTOS` sur les cartes de la section impact

Resultat :

- la section impact affiche maintenant des visuels coherents avec le reste des sections illustrées

### 2026-03-17 - Etape 25

Travail realise :

- ajout de photos issues du dossier `PHOTOS` sur les cartes de la section about

Resultat :

- la section about affiche maintenant des visuels illustrés cohérents

### 2026-03-17 - Etape 26

Travail realise :

- suppression des animations GSAP sur les sections pour un rendu statique (prefers-reduced-motion et simplification)

Resultat :

- plus d’animation au scroll, chargement direct des sections

Resultat :

- le logo fourni apparait par defaut sur le site public et dans les apercus dashboard

---

## Regle de mise a jour future

A chaque prochaine etape, il faudra mettre a jour au minimum :

- `Etat actuel`
- `Ce qui a deja ete cree`
- `Etape en cours`
- `Prochaine priorite recommandee`
- `Journal des avancees`

Ce document doit toujours refleter la realite exacte du projet.
