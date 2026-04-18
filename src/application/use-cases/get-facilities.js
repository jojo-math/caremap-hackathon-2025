import { HealthFacilitiesRepository } from "../../infrastructure/repositories/health-facilities-repository";

function normalizeFilter(value) {
  if (!value) return undefined;
  const trimmed = String(value).trim();
  return trimmed.length ? trimmed : undefined;
}

export async function getFacilities(rawFilters = {}) {
  const repository = new HealthFacilitiesRepository();

  const filters = {
    city: normalizeFilter(rawFilters.city),
    type: normalizeFilter(rawFilters.type),
    service: normalizeFilter(rawFilters.service),
  };

  return repository.list(filters);
}
