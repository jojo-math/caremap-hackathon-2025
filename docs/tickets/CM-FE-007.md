# CM-FE-007 - Fiche detail au clic

Priorite: P0  
Statut: Termine (a valider en runtime)  
Estimation: 50 min  
Dependances: CM-FE-005, CM-BE-004

## Description

Implementer la fiche d informations au clic sur marqueur avec champs communs (nom, categorie, ville/quartier, telephone) et informations specifiques categorie.

## Criteres d acceptation

- Clic sur marqueur ouvre une fiche detail.
- Champs communs toujours affiches.
- Champs specifiques categorie affiches uniquement si presents.
- Mention Donnees fictives visible dans l interface.

## Taches

- [x] Ajouter interaction clic marqueur -> ouverture panel/modal.
- [x] Brancher endpoint detail par id.
- [x] Construire rendu conditionnel des champs specifiques.
- [x] Ajouter message permanent sur caractere fictif des donnees.

## Avancement implementation

- Clic marqueur ouvre une fiche detail (sheet) dans `components/caremap-app.js`.
- Fiche detail branchee sur `GET /api/facilities/:id` pour recuperer les donnees completes.
- Champs communs + metadata specifiques affiches de maniere conditionnelle.
- Mention `Donnees fictives` visible dans la fiche et dans l interface globale.

## Verification

- Verification statique OK: flux clic -> fetch detail -> affichage.
- A valider en runtime:
	- 5 structures/categories differentes
	- lisibilite mobile de la fiche
