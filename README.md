# Blog des Lauréats - Projet d'Imitation Niveau 3

## 1. Description du projet
Le Blog des Lauréats est une application web conçue pour la communauté de Solicode Tanger.
Les lauréats peuvent rédiger, publier et administrer leurs articles professionnels.
Les apprenants actuels de Solicode peuvent consulter et lire ces retours d'expérience. L'application est déployée et accessible en ligne sur Internet.

---

## 2. Contexte et Objectifs

### Contexte général
- **Établissement** : Solicode Tanger.
- **Promotion** :  2026/2027 DevCave.
- **Formateur référent** : ES-SARRAJ Fouad.

### Démarche pédagogique : Méthode par imitation
Ce projet s'appuie sur la méthode par imitation pour guider l'apprenant pas à pas de A à Z :
- **Tutoriels** : Guides complets détaillant les étapes et les résultats attendus.
- **UA-Lab** : Laboratoires d'apprentissage guidés pour maîtriser les bases théoriques et pratiques.
- **Lab** : Recherche autonome d'une solution technique validée par le formateur.
- **Veille technologique** : Découverte et intégration de nouveaux outils ou composants.
- **Tâches** : Actions pratiques d'ingénierie et d'organisation Scrum.

### Composants pédagogiques (Approche Par Compétences - APC)
- **Domaine de compétence** : Regroupement thématique des compétences du référentiel.
- **Unité d'apprentissage (UA)** :
  - **UA-Tuto** : Unité basée sur des tutoriels pas-à-pas.
  - **UA-Lab** : Unité pratique guidée par le formateur.
  - **UA-tâche** : Unité regroupant les tâches récurrentes de gestion Scrum à chaque sprint.

---

## 3. Stack technique et Architecture
- **Framework Backend** : Laravel 13 (PHP).
- **Architecture logicielle** : Architecture 3tier ,MVC .
- **Frontend & Vues** : Gabarits Blade responsives, HTML5, CSS3, JavaScript ,Alpinejs,Tailwaind ,Preline .
- **Base de données** : MySQL.
- **Modélisation** : Diagramme de contexte et cas d'utilisation avec Mermaid.
- **Gestion de versions & Outils** : Git et GitHub CLI (`gh`).
- **Intelligence Artificielle & Automatisation** : Agent Antigravity (Skills natifs et règles Always-On) Github(Skills natifs et règles Always-On).
- **Documentation et Présentations** : Markdown standard et Marp.
- **Sécurite** : autorisation alpine,authentication laravel.

---

## 4. Organisation des dossiers
- [.agents/](./.agents/) : Configuration native de l'Agent IA (règles permanentes et skills outillés avec leurs missions).
- [docs/](./docs/) : Documentation libre, recherches et veilles technologiques personnelles.
- [flux-travail/](./flux-travail/) : Référentiel méthodologique et suivi des étapes de réalisation du projet.
- [issues/](./issues/) : Gestion et suivi des tâches et user stories du projet.
- [tutoriels/](./tutoriels/) : Restitution des tutoriels et ateliers pratiques organisés par domaine.
- [presentations/](./presentations/) : Diaporamas Marp du projet et des restitutions de sprints.
- [rapport/](./rapport/) : Rapport modulaire du projet, chapitres et script de compilation Node.js.
- [sprints/](./sprints/) : Planification Scrum des sprints et suivi de la branche active.

---

## 5. Méthodologie de développement
Le projet intègre les meilleures pratiques de l'ingénierie logicielle :
- **Agile / Scrum** : Découpage par sprints, réunions quotidiennes et revues de sprint.
- **Processus 2TUP** : Séparation claire entre la branche fonctionnelle et la branche technique.
- **Design Thinking** : Conception centrée sur les besoins réels des utilisateurs.
- **Modélisation UML** : Schémas de cas d'utilisation, diagrammes de classes et de séquences.

---

## 6. Démarrage rapide

### Prérequis
- Git installé sur votre machine.
- GitHub CLI (`gh`) configuré et authentifié.

### Cloner le projet
```bash
git clone https://github.com/[votre-compte-github]/blog-des-laureats.git
cd blog-des-laureats
git checkout sprint1
```