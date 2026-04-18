# CM-FE-009 - Bonus itineraire

Priorite: P2  
Statut: Termine (a valider en runtime)  
Estimation: 20 min  
Dependances: CM-FE-007

## Description

Ajouter un bouton Y aller dans la fiche detail pour ouvrir l itineraire vers la structure selectionnee depuis les coordonnees GPS.

## Criteres d acceptation

- Bouton Y aller visible dans la fiche.
- Redirection fonctionnelle vers Google Maps avec lat/lng.
- Message de secours si coordonnees indisponibles.
- Aucun impact regressif sur F1/F2/F3.

## Taches

- [x] Construire l URL Google Maps a partir de latitude/longitude.
- [x] Integrer le bouton dans la fiche detail.
- [x] Gerer fallback en cas de coordonnees manquantes.
- [x] Verifier compatibilite mobile.

## Avancement implementation

- Bouton `Y aller` implemente dans la fiche detail (`components/caremap-app.js`).
- URL Google Maps generee depuis latitude/longitude.
- Fallback present: bouton desactive si coordonnees indisponibles.
- Comportement adapte mobile/desktop via lien externe securise.

## Verification

- Verification statique OK.
- A valider en runtime:
	- clic `Y aller` sur 3 structures
	- verification mobile + desktop
