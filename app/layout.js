import "./globals.css";

export const metadata = {
  title: "CareMap Cameroun",
  description: "Carte interactive des structures de sante a Yaounde et Douala.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
