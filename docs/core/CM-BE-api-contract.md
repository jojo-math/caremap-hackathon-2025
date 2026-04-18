# CM-BE API contract

## GET /api/facilities

### Query params
- `city` (optional)
- `type` or `category` (optional)
- `service` or `services` (optional)

### Response 200

```json
{
  "data": [
    {
      "id": "DIA0001",
      "name": "Centre Renal Nkoa",
      "type": "Dialyse",
      "city": "Yaounde",
      "district": "Yaounde II",
      "neighborhood": "Nlongkak",
      "address": "",
      "latitude": 3.779823,
      "longitude": 11.515455,
      "services": ["hemodialyse"],
      "opening_hours": "Lun-Ven 07h00-19h00",
      "is_open_24h": false,
      "contact": "+237 650 140 896",
      "email": "renal@example.cm",
      "source_category": "Dialyse",
      "metadata": {}
    }
  ],
  "count": 1,
  "filters": {
    "city": "Yaounde",
    "type": "Dialyse",
    "service": null
  }
}
```

## GET /api/facilities/:id

### Response 200

```json
{
  "data": {
    "id": "DIA0001",
    "name": "Centre Renal Nkoa",
    "type": "Dialyse",
    "city": "Yaounde",
    "district": "Yaounde II",
    "neighborhood": "Nlongkak",
    "address": "",
    "latitude": 3.779823,
    "longitude": 11.515455,
    "services": ["hemodialyse"],
    "opening_hours": "Lun-Ven 07h00-19h00",
    "is_open_24h": false,
    "contact": "+237 650 140 896",
    "email": "renal@example.cm",
    "source_category": "Dialyse",
    "metadata": {}
  }
}
```

### Errors
- `400 BAD_REQUEST` if id is missing.
- `404 NOT_FOUND` if facility does not exist.
- `500` for infrastructure failure.
