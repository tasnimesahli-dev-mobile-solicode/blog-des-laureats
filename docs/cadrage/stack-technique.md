#  — Stack technique et outils du projet Blog des Lauréats

## Introduction

Pour développer le projet **Blog des Lauréats**, nous avons choisi des technologies pour créer un site web et une application Android.

Ces outils nous aident à organiser le code, gérer les données, créer les interfaces et tester les fonctionnalités.

## 1. Besoins techniques

Notre projet doit répondre à plusieurs besoins :

- Afficher les articles rapidement.
- Organiser le code du projet.
- Protéger les comptes et les données.
- Créer un site adapté aux différents écrans.
- Permettre la lecture des articles sur Android.
- Faciliter les tests et les modifications.

## 2. Backend et base de données

### Laravel

Laravel est un framework PHP utilisé pour développer le backend.

Nous l'avons choisi pour :

- Organiser le code avec l'architecture MVC.
- Gérer les articles, les auteurs et les catégories avec Eloquent.
- Créer les pages web avec Blade.
- Protéger les pages avec les middleware.
- Vérifier les données avec la validation.
- Gérer les utilisateurs et leurs accès.

**Choix retenu :** Laravel permet de développer un backend organisé et de gérer les fonctionnalités du projet.

### MySQL

MySQL est un système de gestion de base de données.

Nous l'avons choisi pour :

- Enregistrer les utilisateurs et les articles.
- Organiser les catégories et les relations.
- Protéger la cohérence des données avec les clés étrangères.
- Utiliser les transactions avec InnoDB.
- Travailler facilement avec Laravel.

**Choix retenu :** MySQL permet de stocker et gérer les données du Blog des Lauréats.

## 3. Frontend et interface utilisateur

### Tailwind CSS

Tailwind CSS est un outil pour créer le design des pages.

Nous l'avons choisi pour :

- Créer des interfaces simples.
- Adapter les pages aux téléphones, tablettes et ordinateurs.
- Utiliser des classes CSS directement dans les vues.
- Garder un design cohérent.

### Preline UI

Preline UI propose des composants prêts à utiliser.

Nous l'avons choisi pour :

- Créer des menus et des formulaires.
- Ajouter des cartes et des fenêtres.
- Gagner du temps dans la création des interfaces.
- Travailler avec Tailwind CSS et Blade.

### Alpine.js

Alpine.js est une bibliothèque JavaScript légère.

Nous l'avons choisi pour :

- Ouvrir et fermer les menus.
- Afficher les fenêtres et les notifications.
- Ajouter des filtres simples.
- Créer des interactions sans utiliser un framework frontend complexe.

**Choix retenu :** Tailwind CSS, Preline UI et Alpine.js permettent de créer une interface simple, responsive et interactive.

## 4. Développement mobile — NativePHP

NativePHP permet de créer une application mobile avec PHP et Laravel.

Nous l'avons choisi pour proposer une application Android destinée à la lecture des articles.

Ses avantages :

- Utiliser une partie du code Laravel.
- Garder les mêmes règles métier compatibles.
- Créer des interfaces mobiles avec les composants EDGE.
- Réduire le travail de développement d'une deuxième application.

L'application mobile sera limitée à la consultation des articles. Elle communiquera avec le backend Laravel de manière sécurisée.

Les interfaces mobiles doivent être adaptées. La réutilisation de tout le code web n'est pas automatique.

**Choix retenu :** NativePHP permet de créer une version Android en gardant une partie du travail réalisé avec Laravel.

## 5. Qualité et tests

### TDD — Test Driven Development

TDD est une méthode basée sur les tests.

Elle contient trois étapes :

1. **Red :** écrire un test qui échoue.
2. **Green :** écrire le code pour réussir le test.
3. **Refactor :** améliorer le code.

Nous pouvons utiliser PHPUnit ou Pest pour tester :

- L'affichage des articles.
- La création d'un article.
- Le filtre par catégorie.
- La protection des pages d'administration.
- La consultation des articles sur mobile.

**Choix retenu :** TDD nous aide à vérifier les fonctionnalités et à limiter les erreurs.

## 6. Outils d'assistance avec l'IA

### GitHub Copilot

GitHub Copilot est un outil d'aide au développement.

Il peut nous aider à :

- Proposer du code PHP et Laravel.
- Préparer des tests.
- Créer des migrations.
- Expliquer les erreurs.

### Antigravity

Antigravity est un environnement de travail avec un agent IA.

Nous l'utilisons pour :

- Organiser les tâches du projet.
- Travailler sur plusieurs fichiers.
- Préparer la documentation.
- Vérifier le travail avec les règles du projet.

L'IA aide le développeur, mais le développeur doit toujours vérifier le code et les résultats.

## 7. Environnement de développement

Pour réaliser le projet, nous utilisons :

| Outil          | Utilisation                              |
| -------------- | ---------------------------------------- |
| Windows        | Système de travail                       |
| PowerShell     | Exécuter les commandes                   |
| PHP            | Développer le backend                    |
| Composer       | Installer les packages PHP               |
| MySQL          | Gérer les données                        |
| Node.js et npm | Préparer les ressources frontend         |
| Android Studio | Préparer et tester l'application Android |
| Git et GitHub  | Gérer les versions du code               |

## Conclusion

La stack choisie répond aux besoins du Blog des Lauréats.

Laravel et MySQL gèrent le backend et les données. Tailwind CSS, Preline UI et Alpine.js permettent de créer les interfaces. NativePHP prépare l'application Android.

Enfin, TDD, GitHub Copilot et Antigravity nous aident à améliorer le développement et la qualité du projet.