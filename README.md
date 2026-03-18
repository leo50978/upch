# LHUPC / AED

Base simple du projet web institutionnel, sans React ni Vite.

## Stack actuelle

- `HTML`
- `CSS`
- `JavaScript` modulaire natif
- composants organises en fonctions JavaScript qui retournent du HTML

## Lancement

Le projet peut etre ouvert avec un serveur simple de type `Live Preview`, car il n'y a plus de compilation a faire.

Point d'entree :

- `index.html`

## Structure

- `src/js/main.js` : point d'entree navigateur
- `src/js/app.js` : assemblage de la page
- `dashboardglobal.html` : dashboard global avec sidebar pour administrer les sections
- `src/js/components/layout` : header, footer, logo
- `src/js/components/sections` : sections publiques de la home
- `src/js/data/headerContent.js` : donnees par defaut du header
- `src/js/data/heroContent.js` : donnees par defaut du hero
- `src/js/data/aboutContent.js` : donnees par defaut de la section cartes
- `src/js/store/headerStore.js` : persistance locale du header
- `src/js/store/heroStore.js` : persistance locale du hero
- `src/js/store/aboutStore.js` : persistance locale de la section cartes
- `src/js/config/firebase.example.js` : exemple de configuration Firebase pour plus tard
- `src/styles/main.css` : styles globaux et responsive
- `src/styles/dashboard.css` : styles du dashboard global
- `contexte.md` : journal de bord du projet a mettre a jour a chaque etape

## Note

Le header, le hero et la section cartes ont deja ete reconstruits en version responsive mobile first sur cette nouvelle base simple.
Le fichier `dashboardglobal.html` permet deja de naviguer entre les sections `Header`, `Hero Section`, `About Section`, `Impact Section`, `Projects Section`, `Sponsor Section` et `Footer` pour modifier leurs donnees via `localStorage`.
