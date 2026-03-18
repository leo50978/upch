# Proposition technique de développement du site web LHUPC / AED

## Vue d’ensemble

Le site web de **LHUPC / AED** sera développé comme une plateforme moderne, responsive, performante et administrable, avec pour objectif de renforcer la crédibilité de l’organisation, présenter ses actions, faciliter les dons, mettre en avant les programmes, et permettre une gestion simple de l’ensemble du contenu via un **dashboard d’administration professionnel**.

Le site ne sera pas conçu comme un simple site vitrine, mais comme une plateforme institutionnelle évolutive, orientée vers la transparence, l’impact social, l’engagement des visiteurs, les dons et les partenariats.

---

## Objectif du projet

Le projet consiste à créer un site web :

- moderne et professionnel
- responsive avec une approche **mobile first**
- administrable via un dashboard complet
- optimisé pour la clarté, l’expérience utilisateur et la performance
- structuré par composants réutilisables
- sécurisé au niveau des accès, des données et de l’administration

L’objectif est que **chaque élément visible sur le site puisse être modifié sans toucher directement au code**, grâce à un système de gestion centralisé.

---

## Stack technique utilisée

Le site sera développé avec les technologies suivantes :

- **HTML**
- **CSS**
- **Tailwind CSS**
- **JavaScript vanilla**
- **JSX** pour structurer l’interface sous forme de composants réutilisables
- **GSAP** pour les animations avancées
- **Lucide Icons** pour les icônes
- **Google Fonts** pour la typographie
- **Firebase** pour la base de données, l’authentification, le stockage et la gestion du dashboard
- **Firebase Storage** pour les images et médias

---

## Architecture front-end

L’interface du site sera organisée selon une logique de **composants réutilisables**.

Par exemple :

- `index` ou page d’accueil comme point d’entrée principal
- `Header`
- `HeroSection`
- `AboutSection`
- `ProgramsSection`
- `ImpactSection`
- `ProjectsSection`
- `SponsorSection`
- `NewsSection`
- `Footer`

Chaque section sera développée comme un composant indépendant en **JSX**, puis importée dans la page principale.

Cette approche permettra :

- une meilleure organisation du code
- une maintenance plus simple
- une réutilisation rapide des blocs
- une évolution plus facile du site
- une connexion plus propre entre le front-end et le dashboard

---

## Structure générale du site

Le site comprendra notamment :

- une page d’accueil complète
- des pages institutionnelles
- des pages programmes
- des pages d’impact et de transparence
- des pages de politiques
- des pages d’engagement
- des sections de dons
- des sections de parrainage
- des galeries médias
- des actualités
- un footer enrichi
- un système de contenu dynamique piloté par le dashboard

---

## Dashboard d’administration

Le projet inclura un **dashboard professionnel** permettant de gérer l’ensemble du site.

### Objectif du dashboard

Le dashboard devra permettre à l’administrateur de :

- modifier les textes
- modifier les titres
- modifier les boutons
- modifier les liens
- modifier les images
- ajouter de nouvelles sections
- supprimer des sections
- réorganiser l’ordre des composants
- mettre à jour les statistiques
- publier ou masquer certains contenus
- gérer les programmes
- gérer les projets
- gérer les actualités
- gérer les enfants à parrainer
- gérer les médias
- gérer les informations du footer
- gérer certains paramètres globaux du site

### Gestion par composant

Chaque composant du site pourra être relié à une collection ou une structure de données dans Firebase afin que son contenu soit modifiable depuis le dashboard.

Exemples :

- `header`
- `hero`
- `about`
- `programs`
- `impactStats`
- `projects`
- `sponsorship`
- `news`
- `footer`
- `siteSettings`

Cela signifie que le dashboard ne servira pas seulement à gérer des pages entières, mais aussi à gérer **chaque bloc de contenu individuellement**.

---

## Fonctionnement du contenu dynamique

Le site sera pensé pour que les composants chargent leurs données depuis Firebase.

Exemple de logique :

- le composant Hero récupère son titre, son texte, ses CTA et son image depuis la base
- le composant Programs récupère une liste de programmes depuis Firebase
- le composant Impact récupère ses statistiques depuis la base
- le composant Footer récupère les informations de contact et les liens depuis la base

Cette approche permet de transformer le site en système semi-CMS personnalisé.

---

## Utilisation de Firebase

Firebase sera utilisé comme base principale pour plusieurs besoins :

### 1. Authentification

Pour sécuriser l’accès au dashboard.

### 2. Base de données

Pour stocker les contenus dynamiques du site.

### 3. Storage

Pour stocker les images, médias, documents et ressources téléversées via l’administration.

### 4. Hébergement éventuel

Si besoin, le projet pourra aussi être déployé via Firebase Hosting.

---

## Configuration Firebase

La configuration prévue est la suivante :

```js
const firebaseConfig = {
  apiKey: "AIzaSyAk3TYeyALujTKQbcW7wpmBmcoud6Gv06s",
  authDomain: "urh2-aaa13.firebaseapp.com",
  projectId: "urh2-aaa13",
  storageBucket: "urh2-aaa13.firebasestorage.app",
  messagingSenderId: "23035313137",
  appId: "1:23035313137:web:b4600526c3cfe37fea2250"
};
```
