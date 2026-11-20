# Réalisation

## Stack technologique

Les technologies et outils suivants ont été sélectionnés pour garantir la performance, la maintenabilité et la rapidité de la plateforme de publication des lauréats de Solicode Tanger.

### Technologies backend

- **PHP et Laravel 13** : framework backend en architecture MVC, fournissant les routes, la validation, la gestion des erreurs (dont la page 404) et le rendu des gabarits Blade.
- **Architecture 3-tiers / MVC** : séparation entre la présentation, la logique métier et l’accès aux données, avec un **contrôleur mince** qui délègue le traitement à une **classe Service**.

### Technologies frontend

- **Gabarits Blade** : moteur de rendu natif de Laravel, utilisé pour structurer l’interface en composants réutilisables et responsives.
- **HTML5 et CSS3/Tailwind** : mise en page moderne, responsive et adaptée aux différents écrans.
- **JavaScript** : interactions légères côté navigateur (navigation, menus, confirmations).

### Base de données

- **MySQL** : système de gestion de base de données relationnelle fiable, utilisé pour stocker les articles, les catégories et les comptes des lauréats.

### Outils et utilitaires externes

- **Mermaid** : génération des diagrammes de contexte, de cas d’utilisation et de classes à partir d’une syntaxe textuelle.
- **Git et GitHub CLI (`gh`)** : gestion des versions, branches dédiées par sprint et publication du dépôt.
- **Agent IA (Antigravity / Copilot)** : skills natifs et règles Always-On pour assister la rédaction et le développement.
- **Markdown et Marp** : rédaction de la documentation et des diaporamas de restitution.
- **Node.js** : compilation automatique du rapport modulaire (`concat-chapitres.js`).

## Architecture du système

### Architecture MVC

Le modèle MVC répartit l'application en trois rôles :

- **Modèle** : représente les données et les règles qui leur sont liées (articles, catégories, comptes des lauréats).
- **Vue** : affiche les informations et reçoit les actions de l'utilisateur, au moyen des gabarits Blade.
- **Contrôleur** : reçoit une action, sollicite la logique métier et transmet le résultat à la vue.

```mermaid
flowchart LR
    U[Utilisateur] -->|action| V[Vue Blade]
    V -->|requête HTTP| C[Contrôleur]
    C -->|appel| S[Classe Service]
    S -->|lecture ou modification| M[Modèle Eloquent]
    M -->|données| S
    S -->|résultat| C
    C -->|données à afficher| V
    V -->|affichage HTML| U
```

_Figure 1 — Échange MVC : le contrôleur coordonne la vue, le service et le modèle lors d’une requête._

Dans le projet, MVC est fourni par Laravel : les routes associent une URL à un contrôleur. Le contrôleur reste **mince** : il valide l’entrée, appelle une classe Service qui porte le traitement métier, puis retourne une vue Blade ou une réponse d’erreur. Les modèles Eloquent représentent les tables MySQL et les vues Blade produisent le HTML envoyé au navigateur.

### Architecture 3-tiers

Cette architecture sépare l’application en couches qui communiquent de proche en proche :

- **Présentation** : gabarits Blade responsives (HTML5, CSS3/Tailwind, JavaScript) ; envoie les requêtes et affiche les réponses.
- **Logique métier** : contrôleurs minces et classes Service qui appliquent les règles du projet.
- **Accès aux données** : modèles Eloquent qui lisent et écrivent dans la base MySQL.

```mermaid
flowchart TB
    U[Utilisateur] --> P[Présentation<br/>Blade, HTML5, CSS3/Tailwind, JavaScript]
    P -->|requête HTTP| C[Contrôleur mince]
    C --> S[Logique métier<br/>Classe Service]
    S --> M[Accès aux données<br/>Modèles Eloquent]
    M <--> D[(Base MySQL)]
    M -->|résultat| S
    S -->|résultat| C
    C -->|vue Blade| P
    P -->|affichage| U
```

_Figure 2 — Les trois tiers séparent l’interface, le traitement des opérations et le stockage._

### Architecture globale

Le Blog des Lauréats permet à un lauréat de Solicode Tanger de rédiger, publier et administrer ses articles, et aux apprenants de consulter ces retours d’expérience. L’application est déployée en ligne et repose sur Laravel, Blade et MySQL.

```mermaid
flowchart LR
    U[Utilisateur<br/>lauréat ou apprenant] <-->|interface| UI[Navigateur<br/>gabarits Blade]
    UI -->|requête HTTP| R[Routes Laravel<br/>routes/web.php]
    R --> C[Contrôleur mince<br/>ArticleController]
    C --> S[Classe Service<br/>ArticleService]
    S --> M[Modèle Eloquent<br/>Article, Catégorie, Lauréat]
    M <--> D[(Base MySQL)]
    S -->|résultat ou erreur 404| C
    C -->|vue Blade| UI
```

_Figure 3 — Architecture globale du Blog des Lauréats._

Le parcours d’une requête est le suivant :

1. Le navigateur demande l’URL d’un article (`/articles/{slug}`).
2. La route Laravel transmet la requête à `ArticleController`, qui reste mince et délègue le travail à `ArticleService`.
3. Le service lit l’article via le modèle Eloquent, puis déclenche une erreur 404 si l’article n’existe pas ou n’est pas publié.
4. Le contrôleur transmet les données à la vue Blade, qui renvoie la page HTML consultable.