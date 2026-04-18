import { getFacilityById } from "../../../../src/application/use-cases/get-facility-by-id";

export async function GET(_request, context) {
  const id = context?.params?.id;

  if (!id) {
    return Response.json(
      {
        error: "BAD_REQUEST",
        message: "Parametre id manquant.",
      },
      { status: 400 }
    );
  }

  try {
    const facility = await getFacilityById(id);

    if (!facility) {
      return Response.json(
        {
          error: "NOT_FOUND",
          message: "Structure de sante introuvable.",
        },
        { status: 404 }
      );
    }

    return Response.json({ data: facility });
  } catch (error) {
    console.error(`[GET /api/facilities/${id}]`, error);
    return Response.json(
      {
        error: "FAILED_TO_FETCH_FACILITY",
        message: "Impossible de charger le detail de la structure.",
      },
      { status: 500 }
    );
  }
}
