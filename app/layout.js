import "./globals.css";

export const metadata = {
  title: "Smile Avenue — Стоматология нового поколения",
  description: "Smile Avenue dental clinic",
  icons: {
    icon: "/images/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
