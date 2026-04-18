import { HealthFacilitiesRepository } from "../../infrastructure/repositories/health-facilities-repository";

export async function getFacilityById(id) {
  const cleanId = String(id || "").trim();

  if (!cleanId) {
    return null;
  }

  const repository = new HealthFacilitiesRepository();
  return repository.getById(cleanId);
}
