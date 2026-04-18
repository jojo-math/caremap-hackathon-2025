# CM-FE-005 - Carte interactive au chargement

Priorite: P0  
Statut: A faire  
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

- [ ] Integrer composant carte (React-Leaflet).
- [ ] Charger les donnees initiales via endpoint liste.
- [ ] Afficher les marqueurs avec coordonnees valides.
- [ ] Ajouter etats d interface de robustesse.

## Avancement implementation

- Ticket non demarre.
- Constitue la premiere fonctionnalite notee (F1).

## Verification

- Ouverture page accueil -> carte + marqueurs visibles.
- Test cas API vide et cas API en erreur.
