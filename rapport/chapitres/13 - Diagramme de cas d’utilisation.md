# Diagramme de cas d’utilisation

Le diagramme de cas d’utilisation présente les acteurs du Blog des Lauréats et les actions qu’ils peuvent réaliser.

## Acteurs

- **Apprenant** : consulte et lit les articles publiés par les lauréats.
- **Lauréat** : rédige, publie et administre ses propres articles.
- **Administrateur** : gère les catégories et modère l’ensemble des articles.

## Diagramme

```mermaid
flowchart LR
    Apprenant["👤<br/><b>Apprenant</b>"]
    Laureat["👤<br/><b>Lauréat</b>"]
    Admin["👤<br/><b>Administrateur</b>"]

    subgraph System ["Blog des Lauréats"]
        direction TB

        subgraph Consultation ["Consultation des articles"]
            UC_Liste(["Consulter la liste des articles"])
            UC_Detail(["Lire le détail d'un article"])
        end

        subgraph Redaction ["Rédaction des articles"]
            UC_Rediger(["Rédiger un article"])
            UC_Publier(["Publier ou dépublier un article"])
            UC_Modifier(["Modifier un article"])
            UC_Supprimer(["Supprimer un article"])
        end

        subgraph Administration ["Administration"]
            UC_Categories(["Gérer les catégories"])
            UC_Moderer(["Modérer les articles"])
        end
    end

    Apprenant --- UC_Liste
    Apprenant --- UC_Detail

    Laureat --- UC_Liste
    Laureat --- UC_Detail
    Laureat --- UC_Rediger
    Laureat --- UC_Publier
    Laureat --- UC_Modifier
    Laureat --- UC_Supprimer

    Admin --- UC_Categories
    Admin --- UC_Moderer

    UC_Detail -.->|«include»| UC_Liste
    UC_Publier -.->|«include»| UC_Rediger
```

_Figure : Cas d’utilisation du Blog des Lauréats._

## Lecture du diagramme

- La consultation est ouverte aux apprenants et aux lauréats : la liste des articles mène au détail de chaque article.
- La rédaction est réservée aux lauréats, qui ne gèrent que leurs propres articles.
- L’administrateur intervient sur les catégories et sur la modération de l’ensemble du contenu.

Le premier sprint couvre la consultation du détail d’un article tel que décrit dans `sprints/sprints.md`.