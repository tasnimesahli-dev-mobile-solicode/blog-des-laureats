
# Comprendre l'approche Agile et le cadre Scrum

*Assimiler la rupture Agile vs Cascade, les 3 rôles Scrum, les 5 événements et préparer sa soutenance avec l'exemple d'un Blog de publication d'articles*

## 1. Objectif de l'atelier

L'objectif est de comprendre la différence entre une gestion de projet en cascade et une démarche Agile, puis de découvrir comment Scrum organise le travail d'une équipe. Les notions sont illustrées avec un Blog de publication d'articles.

Le modèle de données présenté dans cet exemple reste limité aux trois tables principales du projet :

- **Rédacteur**
- **Article** (table principale)
- **Catégorie** (classification)

Aucune autre table n'est ajoutée dans cet exemple.

## 2. Approche Cascade et approche Agile

### 2.1. Approche Cascade (cycle en V)

L'approche Cascade organise le projet en étapes successives. Une étape est généralement terminée avant de passer à la suivante : analyse, conception, développement, tests et livraison.

**Avantages :**
- Les étapes et les documents sont planifiés à l'avance.
- Le déroulement est facile à suivre lorsque les besoins sont stables.

**Limites :**
- Un changement tardif peut coûter cher.
- L'utilisateur voit souvent le résultat complet assez tard.
- Une erreur de compréhension au début peut avoir des conséquences sur la suite.

### 2.2. Approche Agile

L'approche Agile avance par cycles courts. L'équipe réalise une petite partie du produit, la présente, recueille des retours et adapte la suite du travail.

**Avantages :**
- Le produit devient visible progressivement.
- Les retours permettent de mieux répondre aux besoins.
- L'équipe peut adapter les priorités lorsque le contexte évolue.

**Exemple :** l'équipe commence par afficher les articles publiés, puis ajoute la fonctionnalité d'ajout d'article et améliore ensuite la gestion des catégories.

### 2.3. Différence essentielle

| Cascade | Agile |
|---|---|
| Planification détaillée au début | Planification ajustée régulièrement |
| Étapes successives | Cycles courts et itératifs |
| Validation souvent tardive | Retours fréquents |
| Changements plus difficiles | Changements accueillis et évalués |

Agile ne signifie pas travailler sans plan. L'équipe garde un objectif, mais elle peut adapter le chemin pour l'atteindre.

## 3. Les quatre valeurs du Manifeste Agile

Les valeurs Agile indiquent ce que l'équipe privilégie dans sa manière de travailler. Les éléments de droite gardent de la valeur ; ceux de gauche sont simplement privilégiés.

1. **Les individus et leurs interactions** plutôt que les processus et les outils.  
   La communication et la collaboration entre les personnes sont essentielles.

2. **Un logiciel opérationnel** plutôt qu'une documentation exhaustive.  
   Le résultat fonctionnel est prioritaire, tout en gardant une documentation utile.

3. **La collaboration avec le client** plutôt que la négociation contractuelle.  
   L'équipe échange régulièrement avec le client pour vérifier que le produit répond à son besoin.

4. **L'adaptation au changement** plutôt que le suivi d'un plan.  
   L'équipe peut revoir ses priorités lorsque de nouvelles informations apparaissent.

**Exemple pour le Blog :** si les utilisateurs indiquent que la catégorie d'un article doit être plus visible, l'équipe peut ajuster les priorités du prochain Sprint.

## 4. Les trois piliers empiriques de Scrum

Scrum s'appuie sur l'expérience, l'observation et l'adaptation. Ses trois piliers sont :

| Pilier | Définition simple | Exemple dans le projet |
|---|---|---|
| **Transparence** | Le travail et son état sont compréhensibles par tous. | Le Product Backlog et l'avancement des fonctionnalités du Blog sont visibles par l'équipe. |
| **Inspection** | Le produit et la manière de travailler sont vérifiés régulièrement. | Pendant la Sprint Review, l'équipe montre les articles affichés et recueille les retours. |
| **Adaptation** | L'équipe ajuste le travail lorsqu'un problème ou une amélioration est identifié. | Après les retours, l'équipe améliore l'affichage ou la gestion des articles dans un Sprint suivant. |

## 5. Les trois rôles (responsabilités) Scrum

Scrum définit trois responsabilités principales au sein de la Scrum Team.

### 5.1. Product Owner

Il maximise la valeur du produit et s'occupe de la gestion efficace du Product Backlog. Il clarifie le besoin et ordonne les éléments selon leur priorité.

**Exemple :** il donne la priorité à la consultation des articles publiés avant des améliorations moins urgentes.

### 5.2. Scrum Master

Il aide l'équipe à comprendre et à appliquer Scrum. Il favorise son efficacité et aide à traiter les obstacles qui empêchent son avancement.

**Exemple :** il facilite les échanges et aide l'équipe à résoudre un blocage qui retarde l'affichage des articles.

### 5.3. Développeurs

Ils créent l'incrément utilisable à chaque Sprint. Ils organisent leur travail et choisissent comment réaliser les éléments sélectionnés.

**Exemple :** ils développent l'interface du Blog, l'affichage des articles et le formulaire d'ajout.

> Les rôles ne sont pas trois niveaux hiérarchiques. Ils ont des responsabilités différentes et travaillent ensemble dans une seule Scrum Team.

## 6. Les cinq événements Scrum

Le **Sprint** est l'événement conteneur. Il regroupe les quatre autres événements et toutes les activités nécessaires pour atteindre l'objectif du Sprint.

| Événement | Quand ? | Objectif |
|---|---|---|
| **1. Sprint** | Période fixe d'un mois maximum | Créer un incrément de valeur et atteindre un objectif de Sprint. |
| **2. Sprint Planning** | Au début du Sprint | Définir pourquoi le Sprint est utile, ce qui sera réalisé et comment le travail sera organisé. |
| **3. Daily Scrum** | Chaque jour ouvré du Sprint, 15 minutes maximum | Inspecter l'avancement vers l'objectif et adapter le plan de travail. |
| **4. Sprint Review** | Vers la fin du Sprint | Examiner le résultat avec les parties prenantes et discuter des adaptations à venir. |
| **5. Sprint Retrospective** | Après la Sprint Review et avant le Sprint suivant | Définir des améliorations pour la qualité et l'efficacité de l'équipe. |

**À retenir :** le Daily Scrum n'est pas une réunion de compte rendu destinée au Scrum Master. Les Développeurs l'utilisent pour organiser leur travail et progresser vers l'objectif du Sprint.

## 7. Incrément et Definition of Done (DoD)

### 7.1. Incrément

Un incrément est une partie du produit qui fonctionne, respecte la Definition of Done et peut être utilisée. Il s'ajoute aux incréments précédents.

**Exemple :** à la fin du premier Sprint, un visiteur peut consulter les articles publiés et voir leurs informations, notamment le titre, le contenu, le rédacteur et la catégorie lorsque les relations sont définies dans le modèle.

### 7.2. Definition of Done

La **Definition of Done (DoD)** est une description commune du niveau de qualité exigé pour qu'un élément soit considéré comme terminé.

Pour le premier incrément du Blog, une DoD possible est :

- Les articles publiés s'affichent sans erreur.
- Les informations affichées proviennent des données du projet.
- Les associations Article–Rédacteur et Article–Catégorie sont affichées correctement, selon le modèle défini.
- L'affichage reste utilisable sur ordinateur et sur mobile.
- Les critères d'acceptation définis pour l'élément sont respectés.
- Les vérifications prévues par l'équipe sont réussies.
- Le code est intégré au produit et vérifié par l'équipe.

La DoD est un standard de qualité partagé. Elle doit être connue de toute l'équipe et appliquée à chaque incrément.

## 8. Application de Scrum au Blog de publication d'articles

### 8.1. Vision du produit

Permettre aux visiteurs de consulter les articles publiés et de découvrir leur contenu, tout en permettant aux rédacteurs d'ajouter des articles et de les organiser par catégorie.

### 8.2. Les trois entités principales

| Table | Rôle dans le projet |
|---|---|
| **Article** | Entité principale : représente les articles du Blog. |
| **Rédacteur** | Contient les informations relatives aux rédacteurs. |
| **Catégorie** | Sert à classer les articles par thème. |

Les associations précises entre ces tables doivent suivre le modèle de données réellement défini dans le projet.

### 8.3. Exemple de Product Backlog

Le Product Backlog est une liste ordonnée et évolutive des besoins du produit. Voici des exemples d'éléments possibles :

| Priorité indicative | Besoin utilisateur |
|---|---|
| 1 | En tant que visiteur, je veux consulter les articles publiés afin de lire leur contenu. |
| 2 | En tant que rédacteur, je veux ajouter un article afin de partager une information. |
| 3 | En tant que visiteur, je veux identifier la catégorie d'un article afin de trouver les sujets qui m'intéressent. |

Ces éléments sont des exemples à confirmer et à détailler avec le Product Owner.

### 8.4. Exemple du premier Sprint

**Durée proposée pour l'exemple :** une semaine. La durée réelle doit être choisie par l'équipe et rester fixe pendant le Sprint.

**Objectif du Sprint :** permettre au visiteur de consulter les articles publiés.

| Étape | Application au projet |
|---|---|
| Sprint Planning | L'équipe choisit le besoin prioritaire : consulter les articles publiés. Elle définit l'objectif et le plan de travail. |
| Daily Scrum | Les Développeurs inspectent chaque jour leur avancement et adaptent leur plan. |
| Travail des Développeurs | Ils réalisent l'affichage des articles publiés et vérifient les informations associées. |
| Sprint Review | Ils présentent l'affichage des articles et recueillent les retours. |
| Sprint Retrospective | L'équipe identifie ce qui a bien fonctionné et ce qu'elle doit améliorer. |

**Incrément attendu :** une première version fonctionnelle du Blog. Le visiteur peut consulter les articles publiés et leurs informations disponibles.

**Limite volontaire du premier Sprint :** cet exemple porte sur la consultation des articles. Il ne prétend pas livrer toutes les fonctionnalités du Blog, comme l'ajout d'articles ou la gestion complète des catégories.

## 9. Préparation de la soutenance (5 à 10 minutes)

| Partie | Temps indicatif | À expliquer |
|---|---:|---|
| Introduction | 30 secondes | Présenter Agile, Scrum et le projet Blog. |
| Cascade et Agile | 1 minute | Expliquer les différences et l'intérêt des cycles courts. |
| Valeurs et piliers | 1 minute 30 | Présenter les quatre valeurs et les trois piliers avec un exemple. |
| Rôles Scrum | 1 minute | Expliquer les responsabilités du Product Owner, du Scrum Master et des Développeurs. |
| Événements Scrum | 1 minute 30 | Présenter les cinq événements dans le déroulement d'un Sprint. |
| Exemple du premier Sprint | 2 minutes | Expliquer l'objectif, le travail et l'incrément du Blog. |
| Conclusion | 30 secondes | Rappeler l'intérêt du feedback et de l'amélioration continue. |

### Exemple de conclusion orale

« Pour notre Blog de publication d'articles, Scrum nous permet d'avancer progressivement. Au premier Sprint, nous pouvons livrer une fonctionnalité permettant de consulter les articles publiés. Nous montrons le résultat, nous recueillons les retours, puis nous adaptons le travail du Sprint suivant. »

## 10. Sources de référence

- [Manifeste pour le développement Agile de logiciels](https://agilemanifesto.org/iso/fr/manifesto.html)
- [Le Guide Scrum — version officielle en français](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-French.pdf)
