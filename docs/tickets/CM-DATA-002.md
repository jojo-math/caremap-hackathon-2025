# CM-DATA-002 - Modele Supabase + import consolide

Priorite: P0  
Statut: A faire  
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

- [ ] Creer le schema cible (colonnes communes + champs specifiques).
- [ ] Importer le dataset consolide valide.
- [ ] Ajouter index city et type.
- [ ] Executer un controle qualite sur echantillon (nom, ville, contact, coords).

## Avancement implementation

- Ticket non demarre.
- Les CSV de reference sont deja disponibles dans le dossier data pour controle croise.

## Verification

- Requete SQL de comptage et verification de presence des colonnes cles.
- Spot-check manuel d au moins 10 enregistrements.
