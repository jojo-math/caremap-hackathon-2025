# CM-FE-009 - Bonus itineraire

Priorite: P2  
Statut: A faire  
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

- [ ] Construire l URL Google Maps a partir de latitude/longitude.
- [ ] Integrer le bouton dans la fiche detail.
- [ ] Gerer fallback en cas de coordonnees manquantes.
- [ ] Verifier compatibilite mobile.

## Avancement implementation

- Ticket non demarre.
- Ticket bonus, a traiter uniquement apres stabilisation du socle note.

## Verification

- Clic bouton ouvre bien un itineraire sur mobile et desktop.
- Test sur au moins 3 structures.
