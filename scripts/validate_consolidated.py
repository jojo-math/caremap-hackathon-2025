import csv
import json
from collections import Counter
from pathlib import Path

CSV_PATH = Path("data/health_facilities_consolidated.csv")


def main() -> None:
    if not CSV_PATH.exists():
        raise SystemExit(f"Missing file: {CSV_PATH}")

    with CSV_PATH.open(encoding="utf-8") as handle:
        rows = list(csv.DictReader(handle))

    ids = [row["id"] for row in rows]
    duplicate_ids = [item for item, count in Counter(ids).items() if count > 1]

    missing_coords = [
        row["id"] for row in rows if not row.get("latitude") or not row.get("longitude")
    ]

    out_of_range_coords = []
    for row in rows:
        lat = row.get("latitude")
        lon = row.get("longitude")
        if not lat or not lon:
            continue

        lat_f = float(lat)
        lon_f = float(lon)
        if not (-90 <= lat_f <= 90 and -180 <= lon_f <= 180):
            out_of_range_coords.append(row["id"])

    bad_services_json = []
    for row in rows:
        raw_services = row.get("services") or "[]"
        try:
            parsed = json.loads(raw_services)
            if not isinstance(parsed, list):
                bad_services_json.append(row["id"])
        except json.JSONDecodeError:
            bad_services_json.append(row["id"])

    cities = sorted({row["city"] for row in rows})
    categories = sorted({row["type"] for row in rows})

    print(f"rows={len(rows)}")
    print(f"duplicate_ids={len(duplicate_ids)}")
    print(f"missing_coords={len(missing_coords)}")
    print(f"out_of_range_coords={len(out_of_range_coords)}")
    print(f"bad_services_json={len(bad_services_json)}")
    print(f"cities={cities}")
    print(f"types_count={len(categories)}")
    print(f"sample_10_ids={[row['id'] for row in rows[:10]]}")


if __name__ == "__main__":
    main()
