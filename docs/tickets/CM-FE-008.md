# CM-FE-008 - UX mobile + etats interface

Priorite: P1  
Statut: Termine (a valider en runtime)  
Estimation: 35 min  
Dependances: CM-FE-006, CM-FE-007

## Description

Optimiser l experience mobile-first de l application avec navigation tactile confortable et etats d interface explicites (loading, empty, erreur, retry).

## Criteres d acceptation

- Filtres utilisables au pouce sur smartphone.
- Fiche detail lisible sans debordement.
- Etats loading/empty/error clairs.
- Aucun blocage UX majeur sur viewport mobile standard.

## Taches

- [x] Adapter le panneau filtres en mode drawer mobile.
- [x] Ajuster tailles de cibles tactiles et typographie.
- [x] Uniformiser les etats d interface critiques.
- [x] Ajouter action de retry sur erreur reseau.

## Avancement implementation

- Drawer mobile de filtres implemente avec bouton flottant.
- Targets tactiles et lisibilite optimises via `app/globals.css` (mobile-first).
- Etats critiques harmonises: loading, erreur, vide.
- Bouton `Reessayer` implemente pour les erreurs reseau de chargement.

## Verification

- Verification statique OK.
- A valider en runtime:
	- viewport mobile 390x844
	- parcours complet F1/F2/F3
