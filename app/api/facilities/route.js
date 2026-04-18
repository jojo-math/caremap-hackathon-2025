import { getFacilities } from "../../../src/application/use-cases/get-facilities";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const city = searchParams.get("city");
    const type = searchParams.get("type") || searchParams.get("category");
    const service = searchParams.get("service") || searchParams.get("services");

    const facilities = await getFacilities({ city, type, service });

    return Response.json({
      data: facilities,
      count: facilities.length,
      filters: {
        city: city || null,
        type: type || null,
        service: service || null,
      },
    });
  } catch (error) {
    console.error("[GET /api/facilities]", error);
    return Response.json(
      {
        error: "FAILED_TO_LIST_FACILITIES",
        message: "Impossible de charger les structures de sante.",
      },
      { status: 500 }
    );
  }
}
