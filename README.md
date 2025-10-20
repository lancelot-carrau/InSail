# InSail - Regenerative Ocean Mobility
## Site Web Institutionnel

### Description
Site web professionnel pour InSail, entreprise spécialisée dans la mobilité maritime régénératrice. Le site présente la technologie hybride vent-électrique de l'entreprise, ses services et son projet pilote aux Canaries.

### Structure du Site

```
InSail V1/
├── index.html                  # Page d'accueil
├── css/
│   └── style.css              # Feuilles de style principales
├── pages/
│   ├── vision.html            # Notre Vision & Mission
│   ├── services.html          # Vue d'ensemble des services
│   ├── consultoria.html       # Service Consultoria
│   ├── resorts.html           # Offre Resorts
│   ├── navires.html           # Vente de Navires
│   ├── projet-canaries.html   # Projet Pilote aux Canaries
│   ├── equipe.html            # Présentation de l'équipe
│   └── contact.html           # Formulaire de contact
├── assets/
│   ├── images/                # Images (à ajouter)
│   └── audio/                 # Fichiers audio pour comparaison sonore
└── README.md                  # Documentation du projet
```

### Pages Principales

#### 1. **Accueil (index.html)**
- Slogan : "Regenerative Ocean Mobility"
- Accroche : "De nos lignes pilotes à votre flotte sur mesure"
- Aperçu des 4 services
- Statistiques de performance
- Matériaux circulaires (Nova Carbon, Gravity Wave)

#### 2. **Notre Vision (vision.html)**
- Mission de régénération maritime
- Constat sur les systèmes actuels vs solutions InSail
- Trois piliers : Économie circulaire, Biomimétisme, Impact positif
- Vision 2030

#### 3. **Services (services.html)**
- Approche 360° de la transition maritime
- 4 piliers de services intégrés
- Secteurs d'application
- Processus de collaboration

#### 4. **Consultoria (consultoria.html)**
- Conseil stratégique pour acteurs publics
- Audit territorial, stratégie énergétique
- Cas d'étude : Gouvernement des Canaries
- Formation et accompagnement

#### 5. **Offre Resorts (resorts.html)**
- "Luxe qui régénère"
- Navettes premium, excursions éco-responsables
- Packages et tarifications
- Partenariats avec établissements haut de gamme

#### 6. **Vente de Navires (navires.html)**
- Co-développement sur mesure
- Types : ferries, navettes, workboats, solutions insulaires
- Technologies intégrables
- ROI et avantages économiques

#### 7. **Projet Pilote Canaries (projet-canaries.html)**
- InSail80 : catamaran hybride 24,4m
- Route Tenerife-La Gomera
- Performances : 80% voile, 99% réduction CO₂, 92% réduction bruit
- **Section audio comparative** (ferry conventionnel vs InSail)

#### 8. **L'Équipe (equipe.html)**
- Portraits des co-fondateurs :
  - **Tanguy** (CEO) : Entrepreneur, athlète, skipper Vendée Globe
  - **Mercedes** (Territorial Strategy) : Ingénieure, économie circulaire
  - **Jordi** (Environmental Strategy) : Scientifique environnement
  - **Florian** (Engineering) : Ingénieur innovation, skipper Vendée Globe

#### 9. **Contact (contact.html)**
- Formulaire avec menu déroulant obligatoire :
  - Je suis un investisseur
  - Je suis un opérateur maritime
  - Je suis un journaliste
  - Je veux collaborer (Autre)
- Champs dynamiques selon le profil sélectionné
- Informations de contact direct

### Technologies Utilisées

- **HTML5** sémantique et accessible
- **CSS3** avec variables CSS et Grid/Flexbox
- **JavaScript vanilla** pour interactivité
- **Design responsive** mobile-first
- **Optimisations SEO** intégrées

### Fonctionnalités

#### Design & UX
- Thème océanique : bleu océan, turquoise, vert menthe
- Navigation fixe avec menu mobile
- Animations au scroll
- Cards avec effets hover
- Typographie claire et professionnelle

#### Interactivité
- Menu mobile responsive
- Formulaire de contact dynamique
- Lecteurs audio comparatifs (projet Canaries)
- Animations d'entrée progressives
- Statistiques animées

#### Accessibilité
- Structure HTML sémantique
- Contraste de couleurs respecté
- Navigation au clavier
- Attributs alt et labels appropriés

### Préparation Multilingue

Le site est structuré pour supporter facilement la traduction :
- Attribut `lang="fr"` sur toutes les pages
- Structure de dossiers prête pour `/en/`, `/es/` etc.
- Contenus séparés du code
- Navigation adaptable aux URLs multilingues

### Fichiers Audio à Ajouter

Dans le dossier `assets/audio/`, prévoir :
- `ferry-conventionnel.mp3` - Bruit moteur diesel + agitation
- `ferry-conventionnel.wav` - Version alternative
- `insail-voile.mp3` - Murmure du vent et des vagues
- `insail-voile.wav` - Version alternative

### Performance & SEO

#### Optimisations incluses :
- Métadonnées complètes sur chaque page
- Descriptions et mots-clés pertinents
- Structure heading hiérarchisée
- URLs descriptives
- Images optimisées (prévu)
- Chargement progressif du contenu

### Maintenance

#### Pour ajouter du contenu :
1. **Nouvelle page** : Créer dans `/pages/` avec la même structure header/footer
2. **Images** : Ajouter dans `/assets/images/` et référencer dans le HTML
3. **Styles** : Modifier `/css/style.css` en respectant les variables CSS
4. **Navigation** : Mettre à jour le menu dans tous les fichiers HTML

#### Liens internes à vérifier :
- Tous les liens relatifs fonctionnent depuis n'importe quelle page
- Navigation cohérente sur toutes les pages
- Formulaire de contact fonctionnel (backend à implémenter)

### Prochaines Étapes

1. **Contenu multimédia** : Ajouter images et fichiers audio
2. **Backend** : Implémenter traitement du formulaire de contact
3. **Traductions** : Créer versions anglaise et espagnole
4. **CMS** : Optionnel, pour gestion de contenu facilitée
5. **Analytics** : Intégrer Google Analytics ou alternative
6. **Hosting** : Déployer sur serveur de production

### Contact Technique

Pour toute question sur l'architecture ou la maintenance du site, se référer à cette documentation ou contacter l'équipe technique InSail.

---

*Dernière mise à jour : Octobre 2025*
*Version : 1.0*