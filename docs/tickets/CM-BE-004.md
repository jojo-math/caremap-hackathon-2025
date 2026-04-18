# CM-BE-004 - API detail structure

Priorite: P0  
Statut: A faire  
Estimation: 25 min  
Dependances: CM-DATA-002

## Description

Implementer l endpoint de detail structure par identifiant pour alimenter la fiche d informations au clic sur marqueur.

## Criteres d acceptation

- Endpoint GET /api/facilities/:id operationnel.
- Retour complet des champs communs et specifiques categorie.
- Code 404 gere si id absent.
- Format reponse stable pour la fiche frontend.

## Taches

- [ ] Implementer le route handler par id.
- [ ] Mapper les champs specifiques categorie.
- [ ] Gerer les erreurs (id invalide, not found, erreur DB).
- [ ] Documenter rapidement la forme de reponse.

## Avancement implementation

- Ticket non demarre.
- Depend directement du modele de donnees unifie.

## Verification

- Appel avec id existant et non existant.
- Controle de completude des champs affiches en fiche.
