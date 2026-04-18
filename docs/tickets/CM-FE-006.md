# CM-FE-006 - Filtrage dynamique categories

Priorite: P0  
Statut: Termine (a valider en runtime)  
Estimation: 50 min  
Dependances: CM-FE-005, CM-BE-003

## Description

Ajouter le panneau de filtrage des categories pour afficher dynamiquement les structures choisies sans rechargement complet de la page.

## Criteres d acceptation

- Liste categories disponible (objectif 16 categories).
- Changement de filtre applique instantanement.
- Option Tout afficher disponible.
- Aucune recharge de page complete lors du filtrage.

## Taches

- [x] Construire composant UI de filtrage categories.
- [x] Connecter les filtres a l endpoint liste.
- [x] Mettre a jour les marqueurs en temps reel.
- [x] Gerer cas filtre sans resultat.

## Avancement implementation

- UI filtre implantee (desktop sidebar + mobile drawer) dans `components/caremap-app.js`.
- Categories derivees dynamiquement des donnees chargees.
- Filtrage applique en temps reel sans rechargement de page.
- Option `Tout afficher` disponible et etat vide gere.

## Verification

- Verification statique OK: filtrage client instantane.
- A valider en runtime:
	- test sur 3 categories
	- verification absence de reload complet
	- comportement drawer mobile
