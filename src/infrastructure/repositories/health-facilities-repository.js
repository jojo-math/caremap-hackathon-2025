import { toFacilityDTO } from "../../domain/health-facility/mapper";
import { getSupabaseClient } from "../supabase/client";

export class HealthFacilitiesRepository {
  async list(filters = {}) {
    const supabase = getSupabaseClient();
    let query = supabase
      .from("health_facilities")
      .select(
        "id,name,type,city,district,neighborhood,address,latitude,longitude,services,opening_hours,is_open_24h,contact,email,source_category,metadata"
      )
      .order("name", { ascending: true });

    if (filters.city) {
      query = query.eq("city", filters.city);
    }

    if (filters.type) {
      query = query.eq("type", filters.type);
    }

    if (filters.service) {
      query = query.contains("services", [filters.service]);
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(`Failed to list facilities: ${error.message}`);
    }

    return (data || []).map(toFacilityDTO);
  }

  async getById(id) {
    const supabase = getSupabaseClient();

    const { data, error } = await supabase
      .from("health_facilities")
      .select(
        "id,name,type,city,district,neighborhood,address,latitude,longitude,services,opening_hours,is_open_24h,contact,email,source_category,metadata"
      )
      .eq("id", id)
      .maybeSingle();

    if (error) {
      throw new Error(`Failed to fetch facility by id: ${error.message}`);
    }

    return toFacilityDTO(data);
  }
}
