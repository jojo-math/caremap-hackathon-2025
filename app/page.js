import CareMapApp from "../components/caremap-app";

const CATEGORIES = [
  { label: "Dialyse", color: "var(--cat-dialyse)" },
  { label: "Imagerie", color: "var(--cat-imagerie)" },
  { label: "Laboratoires", color: "var(--cat-laboratoires)" },
  { label: "Médecine Traditionnelle", color: "var(--cat-medecine-trad)" },
  { label: "Ophtalmologie", color: "var(--cat-ophtalmologie)" },
  { label: "Rééducation / Kiné", color: "var(--cat-reeducation)" },
];

export default function HomePage() {
  return (
    <main className="page-root">
      <header className="site-header">
        <div className="site-header__inner">
          <a className="site-header__brand" href="#top" aria-label="Accueil CareMap Cameroun">
            <img src="/assets/caremap-logo.svg" alt="Logo CareMap Cameroun" loading="eager" />
            <span>CareMap Cameroun</span>
          </a>
          <nav className="site-header__nav">
            <a className="site-header__nav-link" href="#map">Carte</a>
            <a className="site-header__nav-link" href="#categories">Catégories</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero__bg-shape hero__bg-shape--left" />
        <div className="hero__bg-shape hero__bg-shape--right" />

        <div className="hero__content">
          <div className="hero__badge" aria-hidden="true">
            <span className="hero__pharma-icon">+</span>
            <span>Santé Accessible</span>
          </div>

          <h1 className="hero__title">
            Trouvez les soins
            <span className="hero__title-accent">près de chez vous</span>
          </h1>

          <p className="hero__subtitle">
            Localisez rapidement hôpitaux, pharmacies, laboratoires et centres
            spécialisés à Yaoundé et Douala. Une application pensée pour votre
            bien-être.
          </p>

          <div className="hero__cta-row">
            <a className="hero__cta-button hero__cta-button--primary" href="#map">
              Explorer la carte
            </a>
          </div>

          <div className="hero__meta">
            <div>
              <strong>Accès libre</strong>
              <span>Sans inscription</span>
            </div>
            <div>
              <strong>Mobile optimisé</strong>
              <span>Responsive design</span>
            </div>
            <div>
              <strong>En temps réel</strong>
              <span>Données actualisées</span>
            </div>
          </div>

          <div className="hero__categories" id="categories">
            {CATEGORIES.map((cat) => (
              <span
                key={cat.label}
                className="hero__cat-pill"
                style={{ backgroundColor: cat.color }}
              >
                <span className="hero__cat-pill-dot" />
                {cat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="map-section" id="map">
        <CareMapApp />
      </section>
    </main>
  );
}
