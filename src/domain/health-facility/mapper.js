function parseJsonField(value, fallback) {
  if (value == null) return fallback;
  if (typeof value === "object") return value;

  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

export function toFacilityDTO(row) {
  if (!row) return null;

  return {
    id: row.id,
    name: row.name,
    type: row.type,
    city: row.city,
    district: row.district,
    neighborhood: row.neighborhood,
    address: row.address,
    latitude: row.latitude,
    longitude: row.longitude,
    services: parseJsonField(row.services, []),
    opening_hours: row.opening_hours,
    is_open_24h: row.is_open_24h,
    contact: row.contact,
    email: row.email,
    source_category: row.source_category,
    metadata: parseJsonField(row.metadata, {}),
  };
}
