
# Dossier des Sprints (`sprints/`)

Ce dossier centralise la planification et le suivi des Sprints selon la méthodologie Agile/Scrum.

---

## 1. Rôle du dossier

- Il contient le calendrier et les objectifs de chaque sprint du projet.
- Il sert de source de vérité unique (SSOT) pour identifier le sprint actif et sa branche Git associée.
- L'Agent IA consulte ce dossier pour vérifier sur quelle branche de travail il doit opérer.

---

## 2. Règle de gouvernance des Sprints

- Seul le concepteur (ou chef de projet) ajoute de nouveaux sprints dans la planification.
- L'Agent IA ne doit jamais inventer de futurs sprints non validés.
- Chaque sprint actif doit posséder sa branche Git dédiée au format `sprint[N]`.

---

## 3. Contenu du dossier

- [sprints.md](./sprints.md) : Fichier de suivi de la planification des sprints.