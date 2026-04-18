# CM-FE-005 - Carte interactive au chargement

Priorite: P0  
Statut: Termine (a valider en runtime)  
Estimation: 45 min  
Dependances: CM-BE-003

## Description

Implementer la carte principale Leaflet au chargement de la page avec affichage immediat de tous les marqueurs disponibles.

## Criteres d acceptation

- Carte visible au premier rendu.
- Marqueurs charges depuis API liste sans action utilisateur.
- Centrage initial Yaounde/Douala coherent.
- Etats loading, empty, erreur visibles et comprensibles.

## Taches

- [x] Integrer composant carte (React-Leaflet).
- [x] Charger les donnees initiales via endpoint liste.
- [x] Afficher les marqueurs avec coordonnees valides.
- [x] Ajouter etats d interface de robustesse.

## Avancement implementation

- Carte Leaflet implementee dans `components/facility-map.js`.
- Chargement initial structures via `GET /api/facilities` dans `components/caremap-app.js`.
- Marqueurs pharmaceutiques personnalises (symbole `+`) avec couleur par categorie.
- Etats loading/empty/error/retry implementes dans `components/caremap-app.js`.

## Verification

- Verification statique OK: carte et flux de chargement relies.
- A valider en runtime:
	- ouverture `/` -> carte visible + marqueurs
	- simulation erreur API -> etat erreur + bouton reessayer
	- filtre sans resultat -> etat vide
