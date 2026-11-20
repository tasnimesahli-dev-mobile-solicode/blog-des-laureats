# Sous-dossier des Chapitres (`rapport/chapitres/`)

Ce sous-dossier contient les chapitres unitaires qui composent le rapport du projet Blog des Lauréats.

## 1. Rôle du sous-dossier

- Découper la rédaction du rapport en modules indépendants et clairs.
- Permettre à l'apprenant de se concentrer sur un chapitre spécifique à la fois.
- Faciliter le travail collaboratif et les revues de documentation.

## 2. Chapitres inclus

- `3 - Introduction.md` : introduction (contexte, objectifs et démarche méthodologique).
- `19 - Conclusion.md` : conclusion (synthèse des acquis, bilan technique et perspectives d'évolution).

Entre ces deux chapitres, le rapport couvre le cadrage du projet, la méthodologie (Scrum et Design Thinking), la planification, l'analyse fonctionnelle avec les cas d'utilisation, la conception, puis la réalisation avec le stack technologique et l'architecture du système (Laravel, MVC, architecture 3-tiers, MySQL).

## 3. Règle de nommage et compilation

- Chaque fichier est nommé avec son numéro d'ordre et son titre (`1 - Remerciement.md`, `2 - Table des matières.md`, ..., `19 - Conclusion.md`), ce qui fixe sa position sans aucune liste écrite dans le script. Le tiret remplace les deux-points, interdits dans les noms de fichiers Windows.
- Chaque fichier commence par un titre Markdown de niveau 1 ; le script le reprend tel quel, sans ajouter de numéro. Avec un nom numérique, ce titre est indispensable.
- `2 - Table des matières.md` contient le titre « Table des matières » et le marqueur `<!-- SOMMAIRE -->` : le script y insère la liste des titres des chapitres.
- Le script `../concat-chapitres.js` assemble automatiquement tous les fichiers `.md` du dossier et génère le rapport consolidé `rapport.md`.