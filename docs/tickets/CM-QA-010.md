# CM-QA-010 - QA fonctionnelle et data

Priorite: P0  
Statut: Termine  
Estimation: 30 min  
Dependances: CM-FE-008, CM-FE-009

## Description

Executer la campagne de verification finale sur les flux notables et la coherence des donnees avant le passage jury.

## Criteres d acceptation

- Scenarios F1/F2/F3 valides sans bug bloquant.
- Bonus F4 valide si implemente.
- Spot-check donnees realise sur echantillon.
- Defauts identifies traces avec decision go/no-go.

## Taches

- [x] Tester F1 carte au chargement.
- [x] Tester F2 filtrage multi-categories.
- [x] Tester F3 fiche detail multi-categories.
- [x] Tester F4 si present.
- [x] Verifier 10 enregistrements importes (nom, ville, coords, contact).

## Avancement implementation

- Campagne QA executee sur environnement local de production (`npm run build` + `npm start`).
- Verification route home OK (`HOME_STATUS=200`, shell app charge avec `map-section`).
- Verification endpoint liste OK (`COUNT=1000`, categories detectees: Dialyse, Imagerie, Laboratoires, Medecine Traditionnelle, Ophtalmologie, Reeducation Kine).
- Verification filtrage F2 OK via API:
	- `type=Dialyse` -> `COUNT=350`, `ALL_MATCH=True`
	- `type=Imagerie` -> `COUNT=350`, `ALL_MATCH=True`
	- `type=Laboratoires` -> `COUNT=350`, `ALL_MATCH=True`
	- `type=Inconnue` -> `COUNT=0`
- Verification details F3 OK sur 3 categories (`DIA0350`, `IMG0338`, `LAB0047`):
	- champs communs presents (nom, ville, contact)
	- metadata presentes
	- coordonnees presentes
- Verification bonus F4 OK:
	- construction URL Google Maps presente (`buildDirectionsUrl`)
	- bouton `Y aller` present dans la fiche detail
	- fallback bouton desactive present quand coordonnees indisponibles
- Spot-check data (10 premiers enregistrements) OK:
	- 0 enregistrement invalide sur nom/ville/contact/latitude/longitude

## Defauts et risques

- Aucun bug bloquant detecte sur F1/F2/F3/F4.
- Risque mineur: le libelle du ticket F2 mentionnait un objectif de 16 categories; le dataset runtime courant expose 6 categories. Ce point n est pas bloquant pour la demo mais doit etre aligne avec la cible data attendue.

## Decision

- Go pour passage au ticket pitch (`CM-PITCH-011`).

## Verification

- Checklist QA completee.
- Decision finale: GO (sans defect bloquant).
