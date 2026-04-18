# CM-CORE-001 - Cadrage Sprint 5h

## Priorisation officielle
1. F1 Carte au chargement
2. F2 Filtrage dynamique par categorie
3. F3 Fiche detail au clic
4. F4 Itineraire (bonus, seulement si F1/F2/F3 stables)

## Perimetre MVP gele
- Application publique (sans authentification).
- Stack cible: Next.js 15 + Supabase + Vercel.
- Mention explicite Donnees fictives visible dans l interface.
- Objectif demo: parcours complet en 5 minutes.

## Repartition des roles (5 personnes)
1. Lead technique: architecture, arbitrages, integration finale.
2. Data: schema Supabase, import consolide, controle qualite.
3. Backend: endpoints API et logique metier.
4. Frontend map: Leaflet, marqueurs, interactions utilisateur.
5. QA/Pitch: tests finaux, validation mobile, script demo.

## Definition of Done (DoD) MVP
### Fonctionnel
- F1, F2 et F3 operationnels bout en bout.
- F4 active uniquement si aucun blocage sur F1/F2/F3.

### Qualite technique
- Separation claire des couches: presentation/application/domain/infrastructure.
- Aucun couplage direct UI -> Supabase.
- Erreurs geres avec etats utilisateur explicites (loading/empty/error).

### Demo
- Pitch 5 min + demo 5 min realisables sans interruption majeure.
- Script de secours prevu en cas d alea reseau.

## Regles de branchement et merge rapide
- Travailler sur la branche de feature active.
- PR petites et frequentes (objectif < 150 lignes nettes quand possible).
- 1 ticket = 1 lot coherent = 1 validation explicite.
- Le lead arbitre et merge des que le ticket passe ses criteres d acceptation.
- Pas de bonus tant que F1/F2/F3 ne sont pas validates.

## Checklist de lancement
- [x] Priorites F1/F2/F3/F4 alignees equipe.
- [x] Perimetre MVP confirme.
- [x] Roles assignes.
- [x] DoD definie et partagee.
- [x] Regles de merge activees.
- [x] Couches d architecture posees dans le repo.
