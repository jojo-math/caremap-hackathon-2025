# CM-BE-003 - API liste structures + filtres

Priorite: P0  
Statut: A faire  
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

- [ ] Creer le route handler de listing.
- [ ] Brancher le repository Supabase avec filtres optionnels.
- [ ] Definir le format de sortie DTO coherents.
- [ ] Ajouter logs minimaux en cas d erreur backend.

## Avancement implementation

- Ticket non demarre.
- Endpoint prioritaire car prerequis direct de la carte et du filtre.

## Verification

- Tests manuels: sans filtre, filtre par categorie, filtre par ville, filtres combines.
- Verification du temps de reponse acceptable pour la demo.
