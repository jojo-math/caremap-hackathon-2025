# Squelette architecture propre

Ce dossier pose la structure de reference pour l implementation:

- `src/presentation`: UI, pages, composants, interactions client.
- `src/application`: cas d usage et orchestration metier.
- `src/domain`: entites, types metier et regles de validation.
- `src/infrastructure`: acces donnees, clients externes, repositories.

## Regles de separation
- La presentation appelle l application.
- L application manipule le domaine.
- L infrastructure implemente les acces techniques.
- La presentation ne doit pas appeler Supabase directement.
