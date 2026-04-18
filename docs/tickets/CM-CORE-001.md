# CM-CORE-001 - Cadrage + architecture propre

Priorite: P0  
Statut: Termine  
Estimation: 20 min  
Dependances: Aucune

## Description

Lancer le sprint 5h avec un cadrage clair, une Definition of Done commune et une structure clean code separant Presentation, Application, Domaine et Infrastructure.

## Criteres d acceptation

- Roles des 5 membres assignes.
- Definition of Done documentee et validee.
- Structure des couches definie.
- Regles de branchement et merge rapide actives.

## Taches

- [x] Aligner l equipe sur priorite F1/F2/F3 puis F4.
- [x] Definir la DoD MVP (fonctionnelle + technique + demo).
- [x] Poser le squelette de couches (presentation/application/domaine/infrastructure).
- [x] Creer checklist de validation rapide (fonctionnel/mobile/demo).

## Avancement implementation

- Cadrage sprint formalise dans `docs/core/CM-CORE-001-kickoff.md`.
- Priorites F1/F2/F3/F4, perimetre MVP, roles, DoD et regles de merge documentes.
- Squelette clean architecture cree dans `src/` avec 4 couches (`presentation`, `application`, `domain`, `infrastructure`).
- Regles de separation de couches documentees dans `src/README.md`.

## Verification

- Verification documentaire: cadrage present et complet dans `docs/core/CM-CORE-001-kickoff.md`.
- Verification structure: dossiers `src/presentation`, `src/application`, `src/domain`, `src/infrastructure` crees.
- Le ticket est pret pour l execution de `CM-DATA-002`.
