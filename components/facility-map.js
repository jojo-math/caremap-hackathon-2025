"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const YAOUNDE_DOULA_CENTER = [4.02, 10.63];

const CATEGORY_COLORS = {
  dialyse: "#c0392b",
  dialyses: "#c0392b",
  imagerie: "#2471a3",
  laboratoires: "#1b5e20",
  laboratoire: "#1b5e20",
  medecine_traditionnelle: "#66bb6a",
  "medecine traditionnelle": "#66bb6a",
  medecine: "#66bb6a",
  ophtalmologie: "#6d4c41",
  reeducation_kine: "#7b1fa2",
  reeducation: "#7b1fa2",
  "reeducation / kine": "#7b1fa2",
  vaccination_pmi: "#66bb6a",
  vaccination: "#66bb6a",
  pharmacies: "#16a085",
  pharmacie: "#16a085",
  hopitaux: "#2980b9",
  hopital: "#2980b9",
  hospitals: "#2980b9",
  hospital: "#2980b9",
};

function colorByType(type) {
  const normalized = String(type || "").toLowerCase().trim();
  return CATEGORY_COLORS[normalized] || "#6b7280";
}

function makePharmacyMarker(type) {
  const markerColor = colorByType(type);
  const html = `
    <div style="position:relative;width:30px;height:42px;display:flex;align-items:flex-start;justify-content:center;">
      <div style="width:26px;height:26px;border-radius:999px;background:${markerColor};border:2px solid #fff;box-shadow:0 4px 10px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:16px;line-height:1;">+</div>
      <div style="position:absolute;bottom:0;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid ${markerColor};"></div>
    </div>
  `;

  return L.divIcon({
    html,
    className: "",
    iconSize: [30, 42],
    iconAnchor: [15, 41],
    popupAnchor: [0, -34],
  });
}

function FitToFacilities({ facilities }) {
  const map = useMap();

  useEffect(() => {
    if (!facilities.length) {
      map.setView(YAOUNDE_DOULA_CENTER, 10);
      return;
    }

    const bounds = L.latLngBounds(
      facilities.map((facility) => [facility.latitude, facility.longitude])
    );

    map.fitBounds(bounds.pad(0.14), { maxZoom: 13 });
  }, [facilities, map]);

  return null;
}

export default function FacilityMap({ facilities, onSelectFacility }) {
  const validFacilities = useMemo(() => {
    return facilities.filter((facility) => {
      const lat = Number(facility.latitude);
      const lng = Number(facility.longitude);
      return Number.isFinite(lat) && Number.isFinite(lng);
    });
  }, [facilities]);

  return (
    <MapContainer
      center={YAOUNDE_DOULA_CENTER}
      zoom={10}
      className="caremap__map"
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FitToFacilities facilities={validFacilities} />

      {validFacilities.map((facility) => (
        <Marker
          key={facility.id}
          position={[Number(facility.latitude), Number(facility.longitude)]}
          icon={makePharmacyMarker(facility.type || facility.source_category)}
          eventHandlers={{
            click: () => onSelectFacility(facility),
          }}
        >
          <Popup>
            <div className="map-popup">
              <h4>{facility.name}</h4>
              <p>{facility.type || facility.source_category}</p>
              <p>
                {facility.city}
                {facility.neighborhood ? ` - ${facility.neighborhood}` : ""}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
