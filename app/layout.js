import "./globals.css";

export const metadata = {
  title: "CareMap Cameroun — Trouvez les soins près de vous",
  description:
    "Localisez rapidement hôpitaux, pharmacies, laboratoires et centres spécialisés à Yaoundé et Douala. Carte interactive des structures de santé au Cameroun.",
  icons: {
    icon: "/assets/caremap-logo.svg",
    shortcut: "/assets/caremap-logo.svg",
    apple: "/assets/caremap-logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/svg+xml" href="/assets/caremap-logo.svg" />
        <link rel="shortcut icon" href="/assets/caremap-logo.svg" />
        <link rel="apple-touch-icon" href="/assets/caremap-logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
