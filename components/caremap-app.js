"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

const FacilityMap = dynamic(() => import("./facility-map"), { ssr: false });

function normalizeCategory(value) {
  return String(value || "").trim();
}

function titleizeKey(key) {
  return String(key || "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function buildDirectionsUrl(latitude, longitude) {
  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
}

function FacilityDetails({ facility, detailLoading, detailError, onClose }) {
  const commonFields = [
    { label: "Ville", value: facility?.city },
    { label: "Quartier", value: facility?.neighborhood || facility?.district },
    { label: "Telephone", value: facility?.contact },
    { label: "Horaires", value: facility?.opening_hours },
  ].filter((item) => item.value);

  const metadataEntries = Object.entries(facility?.metadata || {}).filter(([, value]) => {
    if (value == null) return false;
    const asText = String(value).trim().toLowerCase();
    return asText.length > 0 && asText !== "non" && asText !== "false";
  });

  const hasCoords = Number.isFinite(Number(facility?.latitude)) && Number.isFinite(Number(facility?.longitude));

  return (
    <aside className="detail-sheet" aria-live="polite">
      <div className="detail-sheet__header">
        <div className="detail-sheet__title-wrap">
          <h3>{facility?.name || "Detail structure"}</h3>
          {facility?.type ? <span className="detail-sheet__type">{facility.type}</span> : null}
        </div>

        <button className="icon-button" onClick={onClose} aria-label="Fermer la fiche">
          ×
        </button>
      </div>

      <div className="detail-sheet__content">
        <div className="caremap__notice">Donnees fictives utilisees pour demonstration.</div>

        {detailLoading ? (
          <p className="caremap-state__text">Chargement des informations...</p>
        ) : detailError ? (
          <p className="caremap-state__text">{detailError}</p>
        ) : (
          <>
            <div className="detail-sheet__grid">
              {commonFields.map((field) => (
                <article className="detail-card" key={field.label}>
                  <p className="detail-card__label">{field.label}</p>
                  <p className="detail-card__value">{field.value}</p>
                </article>
              ))}
            </div>

            {Array.isArray(facility?.services) && facility.services.length ? (
              <article className="detail-card">
                <p className="detail-card__label">Services</p>
                <p className="detail-card__value">{facility.services.join(", ")}</p>
              </article>
            ) : null}

            {metadataEntries.length ? (
              <section className="metadata">
                <h4>Informations specifiques</h4>
                {metadataEntries.map(([key, value]) => (
                  <p className="metadata__row" key={key}>
                    <strong>{titleizeKey(key)}:</strong> {String(value)}
                  </p>
                ))}
              </section>
            ) : null}

            {hasCoords ? (
              <a
                href={buildDirectionsUrl(facility.latitude, facility.longitude)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button button--primary" type="button">
                  Y aller
                </button>
              </a>
            ) : (
              <button className="button button--primary" type="button" disabled>
                Coordonnees indisponibles
              </button>
            )}
          </>
        )}
      </div>
    </aside>
  );
}

export default function CareMapApp() {
  const [facilities, setFacilities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [selectedFacility, setSelectedFacility] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState("");

  const fetchFacilities = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/facilities", { cache: "no-store" });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.message || "Erreur serveur.");
      }

      const data = Array.isArray(payload?.data) ? payload.data : [];
      setFacilities(data);

      const uniqueCategories = Array.from(
        new Set(data.map((item) => normalizeCategory(item.type || item.source_category)).filter(Boolean))
      ).sort((a, b) => a.localeCompare(b));

      setCategories(uniqueCategories);
    } catch (err) {
      setError(err.message || "Impossible de charger les structures.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFacilities();
  }, [fetchFacilities]);

  const filteredFacilities = useMemo(() => {
    if (selectedCategory === "ALL") return facilities;

    return facilities.filter((facility) => {
      const category = normalizeCategory(facility.type || facility.source_category);
      return category === selectedCategory;
    });
  }, [facilities, selectedCategory]);

  const selectFacility = useCallback(async (facility) => {
    setSelectedFacility(facility);
    setDetailLoading(true);
    setDetailError("");

    try {
      const response = await fetch(`/api/facilities/${facility.id}`, { cache: "no-store" });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.message || "Impossible de charger le detail.");
      }

      if (payload?.data) {
        setSelectedFacility(payload.data);
      }
    } catch (err) {
      setDetailError(err.message || "Erreur detail structure.");
    } finally {
      setDetailLoading(false);
    }
  }, []);

  const renderState = () => {
    if (isLoading) {
      return (
        <div className="caremap-state">
          <div className="caremap-state__card">
            <h3 className="caremap-state__title">Chargement...</h3>
            <p className="caremap-state__text">Recuperation des marqueurs de sante.</p>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="caremap-state">
          <div className="caremap-state__card">
            <h3 className="caremap-state__title">Erreur de chargement</h3>
            <p className="caremap-state__text">{error}</p>
            <div style={{ marginTop: "0.8rem" }}>
              <button className="button button--ghost" onClick={fetchFacilities} type="button">
                Reessayer
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (!filteredFacilities.length) {
      return (
        <div className="caremap-state">
          <div className="caremap-state__card">
            <h3 className="caremap-state__title">Aucun resultat</h3>
            <p className="caremap-state__text">Aucune structure ne correspond au filtre actuel.</p>
            <div style={{ marginTop: "0.8rem" }}>
              <button
                className="button button--ghost"
                onClick={() => setSelectedCategory("ALL")}
                type="button"
              >
                Tout afficher
              </button>
            </div>
          </div>
        </div>
      );
    }

    return <FacilityMap facilities={filteredFacilities} onSelectFacility={selectFacility} />;
  };

  return (
    <div className="caremap">
      <div className="caremap__notice">
        Application publique: localisation des structures de sante de Yaounde et Douala.
      </div>

      <div className="caremap__surface">
        <aside className="caremap__desktop-sidebar">
          <div className="filters">
            <h3 style={{ marginTop: 0, marginBottom: "0.75rem", color: "#4f3a2a" }}>Filtrer par categorie</h3>
            <FilterList
              categories={categories}
              selectedCategory={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
        </aside>

        {renderState()}

        {!isLoading && !error ? (
          <button
            className="caremap__mobile-filter-button"
            onClick={() => setDrawerOpen(true)}
            type="button"
            aria-label="Ouvrir les filtres"
          >
            ≡
          </button>
        ) : null}

        {drawerOpen ? (
          <div className="filter-drawer">
            <div className="filter-drawer__header">
              <h3>Filtrer par categorie</h3>
              <button
                className="icon-button"
                onClick={() => setDrawerOpen(false)}
                type="button"
                aria-label="Fermer les filtres"
              >
                ×
              </button>
            </div>
            <div className="filters">
              <FilterList
                categories={categories}
                selectedCategory={selectedCategory}
                onChange={(value) => {
                  setSelectedCategory(value);
                  setDrawerOpen(false);
                }}
              />
            </div>
          </div>
        ) : null}

        {selectedFacility ? (
          <FacilityDetails
            facility={selectedFacility}
            detailLoading={detailLoading}
            detailError={detailError}
            onClose={() => {
              setSelectedFacility(null);
              setDetailError("");
              setDetailLoading(false);
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

function FilterList({ categories, selectedCategory, onChange }) {
  return (
    <div className="filters__list">
      <label className="filters__item">
        <input
          type="radio"
          name="facility-category"
          checked={selectedCategory === "ALL"}
          onChange={() => onChange("ALL")}
        />
        <span>Tout afficher</span>
      </label>

      {categories.map((category) => (
        <label className="filters__item" key={category}>
          <input
            type="radio"
            name="facility-category"
            checked={selectedCategory === category}
            onChange={() => onChange(category)}
          />
          <span>{category}</span>
        </label>
      ))}
    </div>
  );
}
