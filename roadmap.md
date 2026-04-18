# Roadmap Projet CareMap Cameroun (Equipe de 5, format 5h)

## 1) Vision et cible de livraison
- Livrer un MVP web public, mobile-first, demonstrable en jury.
- Couvrir en priorite les fonctionnalites notees :
1. Carte interactive au chargement (F1)
2. Filtrage dynamique par categorie (F2)
3. Fiche d informations au clic (F3)
- Ajouter le bonus itineraire (F4) si le socle est stable.
- Respecter une architecture propre : separation claire UI, logique metier, acces donnees.

## 2) Objectifs operationnels
1. Mettre en production une app fonctionnelle sur Next.js + Supabase + Vercel.
2. Garantir un parcours utilisateur fluide sur smartphone.
3. Assurer la coherence des donnees sante (villes, quartiers, coordonnees, contacts).
4. Preparer un pitch clair de 5 min + demo de 5 min.

## 3) Repartition des roles (5 personnes)
1. Lead technique / integration finale
- Arbitrage, coherence architecture, gestion dependances, merge final.

2. Data engineer
- Schema Supabase, import dataset consolide, controles qualite des donnees.

3. Frontend map
- Carte Leaflet, marqueurs, interactions visuelles, responsive mobile.

4. Backend / logique metier
- Endpoints API, filtres, service de recuperation des structures, gestion erreurs.

5. QA / UX / Pitch
- Tests fonctionnels, tests mobile, script demo, storytelling jury.

## 4) Architecture clean code (a appliquer des le depart)
1. Couche Presentation
- Pages, composants UI, etat d interface, interactions utilisateur.

2. Couche Application
- Cas d usage : lister structures, filtrer, consulter detail, preparer itineraire.

3. Couche Domaine
- Entites metier, regles de validation, typage des categories et champs.

4. Couche Infrastructure
- Acces Supabase, requetes SQL, mapping donnees brutes vers objets metier.

Regle cle :
- La UI ne parle pas directement a Supabase.
- La UI passe par les cas d usage.
- Les cas d usage passent par des interfaces repository.

## 5) Planning detaille (5 heures)

### Phase 0 - Cadrage express (0h00 a 0h20)
Objectif :
- Aligner l equipe sur le perimetre note et verrouiller les priorites.

Actions :
1. Fixer la Definition of Done du MVP.
2. Valider roles et binomes.
3. Definir regles de branche et merge rapide.
4. Preparer checklist de validation F1, F2, F3, F4.

Livrable :
- Plan d execution valide + responsabilite claire par personne.

### Phase 1 - Donnees et backend socle (0h20 a 1h15)
Objectif :
- Rendre les donnees exploitables et requetables rapidement.

Actions :
1. Creer/valider table unifiee des structures.
2. Importer le dataset consolide dans Supabase.
3. Ajouter index essentiels (ville, type).
4. Implementer endpoint de listing avec filtres categorie/ville.
5. Implementer endpoint detail par id.

Livrable :
- API prete pour carte + filtres + details.

### Phase 2 - Carte et chargement initial (1h15 a 2h00)
Objectif :
- Valider F1 (carte interactive visible immediatement).

Actions :
1. Afficher carte centree Yaounde/Douala.
2. Charger toutes les structures au demarrage.
3. Afficher marqueurs par coordonnees.
4. Gerer etats loading, erreur, vide.

Livrable :
- Carte operationnelle avec tous les points.

### Phase 3 - Filtrage dynamique (2h00 a 2h50)
Objectif :
- Valider F2 sans rechargement de page.

Actions :
1. Construire panneau de filtres categories (16 types).
2. Declencher filtrage instantane cote UI + API.
3. Mettre a jour marqueurs dynamiquement.
4. Prevoir option Tout afficher.

Livrable :
- Filtre fluide et robuste sur desktop et mobile.

### Phase 4 - Fiche detail au clic (2h50 a 3h40)
Objectif :
- Valider F3 avec contenu utile et propre.

Actions :
1. Ouvrir modal ou panneau lateral au clic sur marqueur.
2. Afficher nom, categorie, ville/quartier, telephone.
3. Afficher les champs specifiques selon categorie.
4. Ajouter mention explicite donnees fictives.

Livrable :
- Fiche d information complete et lisible.

### Phase 5 - Bonus itineraire + UX mobile (3h40 a 4h20)
Objectif :
- Ajouter de la valeur jury sans fragiliser le MVP.

Actions :
1. Ajouter bouton Y aller (Google Maps base sur lat/lng).
2. Verifier ergonomie tactile (taille boutons, drawer filtres, lisibilite).
3. Optimiser performance percue (etats UI, transitions sobres).

Livrable :
- Bonus fonctionnel et experience mobile renforcee.

### Phase 6 - QA finale + repetition pitch (4h20 a 5h00)
Objectif :
- Securiser la demo et le discours.

Actions :
1. Executer checklist F1/F2/F3/F4.
2. Tester au moins 10 cas reels sur donnees importees.
3. Repeter pitch 5 min + demo 5 min (2 passages).
4. Preparer plan B en cas d alea reseau.

Livrable :
- Build stable pret jury + equipe synchronisee sur la narration.

## 6) Criteres de reussite
1. Fonctionnel :
- F1, F2, F3 valides sans bug bloquant.
- F4 pret si possible.

2. Technique :
- Architecture lisible et couches decouplees.
- API claire, code maintenable.

3. Produit :
- Experience mobile fluide.
- Interface intuitive et rapide.

4. Jury :
- Demo chronometree, narrative claire, valeur utilisateur evidente.

## 7) Risques majeurs et mitigation
1. Risque : perte de temps sur le bonus trop tot
- Mitigation : verrouiller F1/F2/F3 avant F4.

2. Risque : incoherences de donnees
- Mitigation : controle qualite rapide sur un echantillon avant demo.

3. Risque : blocage d integration
- Mitigation : merge frequent, lead technique arbitre en continu.

4. Risque : demo instable
- Mitigation : script strict, scenario court, plan B pret.

## 8) Script de pitch conseille (5 min)
1. Probleme terrain : trouver vite une structure de sante fiable.
2. Solution : carte interactive filtrable pour Yaounde et Douala.
3. Demonstration : chargement, filtre categorie, fiche detail, itineraire.
4. Qualite logicielle : architecture propre, separation des responsabilites.
5. Impact et suite : extension nationale, geospatial avance, enrichissement data.
