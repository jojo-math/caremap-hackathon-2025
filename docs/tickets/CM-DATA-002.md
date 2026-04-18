# CM-DATA-002 - Modele Supabase + import consolide

Priorite: P0  
Statut: En attente import Supabase  
Estimation: 55 min  
Dependances: CM-CORE-001

## Description

Construire le modele de donnees unifie pour les structures de sante, importer le dataset consolide dans Supabase et preparer les index necessaires aux filtres.

## Criteres d acceptation

- Table health_facilities creee et accessible.
- Import consolide termine sans erreur bloquante.
- Index ville et type en place.
- Donnees latitude/longitude exploitables pour la carte.

## Taches

- [x] Creer le schema cible (colonnes communes + champs specifiques).
- [ ] Importer le dataset consolide valide.
- [x] Ajouter index city et type.
- [x] Executer un controle qualite sur echantillon (nom, ville, contact, coords).

## Avancement implementation

- Migration Supabase creee: `supabase/migrations/20260418123000_create_health_facilities.sql`.
- Table `health_facilities` definie avec contraintes de plages geographiques lat/lng.
- Index ajoutes: `city`, `type`, `city+type`.
- Script de controle qualite ajoute: `scripts/validate_consolidated.py`.
- Runbook d import documente: `docs/core/CM-DATA-002-import-runbook.md`.
- Blocage environnement: commande `supabase` indisponible localement, import a executer via dashboard/CI.

## Verification

- Controle CSV execute (4150 lignes):
	- `duplicate_ids=0`
	- `missing_coords=0`
	- `out_of_range_coords=0`
	- `bad_services_json=0`
	- `cities=['Douala', 'Yaoundé']`
	- `types_count=9`
- Verification SQL post-import preparee dans le runbook.
