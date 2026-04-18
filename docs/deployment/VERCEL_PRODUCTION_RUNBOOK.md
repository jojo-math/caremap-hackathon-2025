# Runbook mise en production Vercel - CareMap Cameroun

## 1) Prerequis

- Le repository doit etre pousse sur GitHub/GitLab/Bitbucket.
- Le projet Supabase doit etre operationnel (tables et donnees importees).
- Les variables suivantes doivent etre disponibles:
  - NEXT_PUBLIC_SUPABASE_URL
  - SUPABASE_SERVICE_ROLE_KEY
  - NEXT_PUBLIC_APP_URL (recommande)

## 2) Verifications locales avant deploiement

Depuis la racine du projet:

- npm install
- npm run build

Attendu:

- Build Next.js termine sans erreur.

Note lint:

- Le lint est configure et passe sans erreur bloquante.
- Warning actuel non bloquant: usage de balises img (optimisation possible avec next/image).

## 3) Creation du projet sur Vercel (Dashboard)

1. Ouvrir Vercel Dashboard.
2. Cliquer sur Add New > Project.
3. Importer le repository du projet.
4. Dans la configuration du projet:
   - Framework Preset: Next.js (auto-detecte)
   - Root Directory: .
   - Build Command: npm run build
   - Install Command: npm install
   - Output Directory: laisser vide (valeur par defaut Next.js)
5. Cliquer sur Deploy (ne pas valider en production avant ajout des variables ci-dessous).

## 4) Variables d environnement dans Vercel

Dans Project Settings > Environment Variables, ajouter:

- NEXT_PUBLIC_SUPABASE_URL
  - Environnements: Production, Preview, Development
- SUPABASE_SERVICE_ROLE_KEY
  - Environnements: Production, Preview (Development si necessaire)
- NEXT_PUBLIC_APP_URL
  - Production: URL finale (ex: https://caremap-cameroun.vercel.app)
  - Preview: URL preview si vous souhaitez des liens absolus corrects

Important securite:

- SUPABASE_SERVICE_ROLE_KEY ne doit jamais etre prefixee NEXT_PUBLIC.
- Ne jamais commiter de fichier .env avec des secrets.

## 5) Redeploiement apres variables

1. Aller dans Deployments.
2. Selectionner le dernier deployment.
3. Cliquer Redeploy (ou pousser un nouveau commit).

## 6) Domaine production

Dans Project Settings > Domains:

1. Ajouter le domaine final (si domaine custom).
2. Configurer les DNS chez le registrar (CNAME/A selon les instructions Vercel).
3. Verifier que NEXT_PUBLIC_APP_URL pointe vers ce domaine.
4. Redeployer apres changement d URL.

## 7) Checklist smoke test post-deploiement

- Ouvrir la home production:
  - Hero visible
  - Carte visible
  - Marqueurs affiches
- Tester les API:
  - /api/facilities
  - /api/facilities/{id}
- Tester le filtrage categories depuis l UI.
- Ouvrir une fiche detail et verifier:
  - nom, ville/quartier, telephone
  - metadata si presente
  - bouton Y aller
- Verifier mobile (viewport type 390x844):
  - drawer de filtres
  - lisibilite fiche detail

## 8) Logs et observabilite

Dans Vercel:

- Functions: verifier les erreurs runtime des routes API.
- Runtime Logs: verifier les erreurs cote serveur (env manquante, Supabase indisponible).
- Analytics/Speed Insights (optionnel): activer pour suivi performance.

## 9) Procedure rollback

En cas de regression:

1. Ouvrir Deployments.
2. Selectionner un deployment precedent stable.
3. Cliquer Promote to Production.
4. Ouvrir incident interne avec cause et correctif.

## 10) Decision go-live

Le passage en production est GO si:

- Build vert
- Variables Vercel configurees
- Smoke test fonctionnel OK
- Aucune erreur bloquante dans les logs
