# CM-BE-003 - API liste structures + filtres

Priorite: P0  
Statut: Termine (a valider en runtime)  
Estimation: 35 min  
Dependances: CM-DATA-002

## Description

Implementer l endpoint de liste des structures avec filtres dynamiques (categorie, ville) pour alimenter la carte et le panneau de filtres.

## Criteres d acceptation

- Endpoint GET /api/facilities operationnel.
- Filtres category/type et city appliques correctement.
- Reponse JSON stable et exploitable cote frontend.
- Gestion d erreur claire et non bloquante cote client.

## Taches

- [x] Creer le route handler de listing.
- [x] Brancher le repository Supabase avec filtres optionnels.
- [x] Definir le format de sortie DTO coherents.
- [x] Ajouter logs minimaux en cas d erreur backend.

## Avancement implementation

- Endpoint implemente: `app/api/facilities/route.js`.
- Use case implemente: `src/application/use-cases/get-facilities.js`.
- Repository implemente: `src/infrastructure/repositories/health-facilities-repository.js`.
- Mapping DTO stable: `src/domain/health-facility/mapper.js`.
- Client Supabase serveur: `src/infrastructure/supabase/client.js`.
- Contrat API documente: `docs/core/CM-BE-api-contract.md`.

## Verification

- Verification statique: parsing filtres `city`, `type`/`category`, `service`/`services` couvre les cas prevus.
- A executer en runtime Next.js:
	- `GET /api/facilities`
	- `GET /api/facilities?city=Douala`
	- `GET /api/facilities?type=Dialyse`
	- `GET /api/facilities?city=Yaoundé&type=Dialyse`
