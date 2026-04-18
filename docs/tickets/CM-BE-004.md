# CM-BE-004 - API detail structure

Priorite: P0  
Statut: Termine (a valider en runtime)  
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

- [x] Implementer le route handler par id.
- [x] Mapper les champs specifiques categorie.
- [x] Gerer les erreurs (id invalide, not found, erreur DB).
- [x] Documenter rapidement la forme de reponse.

## Avancement implementation

- Endpoint implemente: `app/api/facilities/[id]/route.js`.
- Use case implemente: `src/application/use-cases/get-facility-by-id.js`.
- Reutilisation du repository unifie et du mapper DTO pour garantir la coherence des champs.
- Gestion erreurs implementee:
	- `400` si parametre `id` manquant
	- `404` si structure absente
	- `500` en erreur infrastructure
- Contrat API documente dans `docs/core/CM-BE-api-contract.md`.

## Verification

- A executer en runtime Next.js:
	- `GET /api/facilities/DIA0001` (attendu 200)
	- `GET /api/facilities/UNKNOWN_ID` (attendu 404)
- Verifier presence des champs communs et du bloc `metadata` pour les infos specifiques categorie.
