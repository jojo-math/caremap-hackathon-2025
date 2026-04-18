import CareMapApp from "../components/caremap-app";

export default function HomePage() {
  return (
    <main className="page-root">
      <section className="hero">
        <div className="hero__bg-shape hero__bg-shape--left" />
        <div className="hero__bg-shape hero__bg-shape--right" />

        <div className="hero__content">
          <div className="hero__badge" aria-hidden="true">
            <span className="hero__pharma-icon">+</span>
            <span>Pharmacie & Sante</span>
          </div>

          <h1 className="hero__title">
            CareMap Cameroun
            <span className="hero__title-accent">Localisez les soins en un clic</span>
          </h1>

          <p className="hero__subtitle">
            Trouvez hopitaux, pharmacies, laboratoires et centres de soins a Yaounde et Douala.
          </p>

          <div className="hero__meta">
            <div>
              <strong>Public</strong>
              <span>Sans compte</span>
            </div>
            <div>
              <strong>Mobile-first</strong>
              <span>Optimise smartphone</span>
            </div>
            <div>
              <strong>Donnees</strong>
              <span>Fictives pour demo</span>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <CareMapApp />
      </section>
    </main>
  );
}
