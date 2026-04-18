# CM-DATA-002 - Runbook import Supabase

## Preconditions
- Migration `supabase/migrations/20260418123000_create_health_facilities.sql` applied.
- CSV source ready: `data/health_facilities_consolidated.csv`.

## Step 1 - Validate CSV locally
Run:

```powershell
python scripts/validate_consolidated.py
```

Expected checks:
- `duplicate_ids=0`
- `missing_coords=0`
- `out_of_range_coords=0`
- `bad_services_json=0`

## Step 2 - Create table and indexes
Run SQL migration in Supabase SQL editor or CI migration pipeline.

## Step 3 - Import CSV from Supabase dashboard
- Open Table Editor -> `health_facilities`.
- Use `Import data from CSV`.
- Select `data/health_facilities_consolidated.csv`.
- Ensure column mapping is direct by header name.

## Step 4 - Post-import verification SQL

```sql
select count(*) as total_rows from public.health_facilities;

select city, count(*) as n
from public.health_facilities
group by city
order by city;

select type, count(*) as n
from public.health_facilities
group by type
order by n desc;

select count(*) as bad_coordinates
from public.health_facilities
where latitude not between -90 and 90
   or longitude not between -180 and 180;
```

## Notes
- In this workspace, Supabase CLI is not installed (`supabase` command unavailable), so import execution must be done from dashboard or another CI environment.
