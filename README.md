# CareMap Cameroun

Application web interactive pour localiser rapidement des structures de sante a Yaounde et Douala.

## Objectif

CareMap permet de:
- visualiser les structures sur une carte interactive
- filtrer par categorie
- ouvrir une fiche detail au clic
- lancer un itineraire Google Maps via le bouton Y aller

Les donnees utilisees dans ce projet sont fictives (contexte hackathon).

## Stack technique

- Next.js 15 (App Router)
- React 19
- React-Leaflet + Leaflet
- Supabase (acces via routes API cote serveur)

## Prerequis

- Node.js 20+ recommande
- npm
- Un projet Supabase actif

## Installation

1. Installer les dependances:
   npm install

2. Creer le fichier de variables locales:
   - Copier le contenu de .env.example dans .env.local

3. Renseigner au minimum:
   - NEXT_PUBLIC_SUPABASE_URL
   - SUPABASE_SERVICE_ROLE_KEY

## Lancer le projet

Mode developpement:
- npm run dev

Build production local:
- npm run build

Serveur production local:
- npm start

Important: npm start exige un build deja genere. Si vous voyez une erreur sur le dossier .next, relancez npm run build avant npm start.

## Variables d environnement

Variables requises:
- NEXT_PUBLIC_SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY

Variable recommandee:
- NEXT_PUBLIC_APP_URL

Reference complete:
- .env.example

## API exposee

- GET /api/facilities
  - Liste des structures
  - Filtres supportes via query params: city, type (ou category), service (ou services)

- GET /api/facilities/:id
  - Detail d une structure

## Fonctionnalites principales

- Carte visible au chargement
- Filtrage dynamique des categories sans rechargement de page
- Fiche detail avec champs communs + metadata specifique
- Mention permanente de donnees fictives
- Lien tel: cliquable pour le contact
- Bouton Y aller vers Google Maps
- Experience mobile avec drawer de filtres

## Arborescence utile

- app: pages, layout, routes API Next.js
- components: UI et carte
- src/application: cas d usage metier
- src/domain: modeles et regles metier
- src/infrastructure: acces Supabase et repositories
- docs/tickets: suivi des tickets
- docs/deployment/VERCEL_PRODUCTION_RUNBOOK.md: procedure de mise en production

## Qualite et verification

- Build: npm run build
- Lint: npm run lint

Note: un warning ESLint peut apparaitre sur l usage de balises img dans la hero. Ce warning est non bloquant pour le deploiement.

## Deploiement Vercel

Le guide complet est disponible dans:
- docs/deployment/VERCEL_PRODUCTION_RUNBOOK.md

Resume rapide:
1. Importer le repo dans Vercel
2. Configurer les variables d environnement
3. Deployer
4. Executer la checklist smoke test (home, carte, filtres, detail, API)

## Securite

- Ne jamais exposer SUPABASE_SERVICE_ROLE_KEY au client
- Ne pas commiter de secrets dans Git

## Licence

Projet realise dans le cadre du hackathon Data4Change (CareMap Cameroun).
