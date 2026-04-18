-- CM-DATA-002
-- Unified data model for CareMap health facilities.

create table if not exists public.health_facilities (
  id text primary key,
  name text not null,
  type text not null,
  city text not null,
  district text,
  neighborhood text,
  address text,
  latitude double precision not null,
  longitude double precision not null,
  services jsonb not null default '[]'::jsonb,
  opening_hours text,
  is_open_24h boolean not null default false,
  contact text,
  email text,
  source_category text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint health_facilities_latitude_range check (latitude between -90 and 90),
  constraint health_facilities_longitude_range check (longitude between -180 and 180)
);

create index if not exists idx_health_facilities_city on public.health_facilities(city);
create index if not exists idx_health_facilities_type on public.health_facilities(type);
create index if not exists idx_health_facilities_city_type on public.health_facilities(city, type);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_health_facilities_updated_at on public.health_facilities;
create trigger trg_health_facilities_updated_at
before update on public.health_facilities
for each row
execute function public.set_updated_at();
