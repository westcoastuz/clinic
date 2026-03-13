import "./globals.css";

const SITE_URL = "https://smileavenue.uz";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Smile Avenue — Стоматология нового поколения в Ташкенте",
    template: "%s | Smile Avenue — Стоматология в Ташкенте",
  },
  description:
    "Стоматологическая клиника Smile Avenue в Ташкенте — виниры, имплантация, отбеливание, брекеты, коронки, лечение кариеса. Работаем 24/7. Запишитесь на бесплатную консультацию!",
  keywords: [
    "стоматология Ташкент",
    "стоматологическая клиника Ташкент",
    "стоматолог Ташкент",
    "зубной врач Ташкент",
    "Smile Avenue",
    "Смайл Авеню",
    "виниры Ташкент",
    "виниры E-max Ташкент",
    "имплантация зубов Ташкент",
    "отбеливание зубов Ташкент",
    "брекеты Ташкент",
    "коронки Ташкент",
    "циркониевые коронки Ташкент",
    "лечение кариеса Ташкент",
    "удаление зубов Ташкент",
    "профессиональная гигиена зубов",
    "стоматология 24/7 Ташкент",
    "стоматология Узбекистан",
    "лучшая стоматология Ташкент",
    "дантист Ташкент",
  ],
  authors: [{ name: "Smile Avenue" }],
  creator: "Smile Avenue",
  publisher: "Smile Avenue",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "Smile Avenue",
    title: "Smile Avenue — Стоматология нового поколения в Ташкенте",
    description:
      "Стоматологическая клиника Smile Avenue в Ташкенте — виниры, имплантация, отбеливание, брекеты, коронки. Работаем 24/7. Запишитесь на бесплатную консультацию!",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Smile Avenue — стоматологическая клиника в Ташкенте",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Avenue — Стоматология нового поколения в Ташкенте",
    description:
      "Виниры, имплантация, отбеливание, брекеты, коронки. Работаем 24/7 в Ташкенте.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Smile Avenue",
  description:
    "Стоматологическая клиника нового поколения в Ташкенте. Виниры, имплантация, отбеливание, брекеты, коронки, лечение кариеса, удаление зубов. Работаем 24/7.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.jpg`,
  image: `${SITE_URL}/images/hero.jpg`,
  telephone: ["+998908226655", "+998909329111"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Пахлавона Махмуда 23",
    addressLocality: "Ташкент",
    addressCountry: "UZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.311081,
    longitude: 69.279737,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  currenciesAccepted: "USD, UZS",
  paymentAccepted: "Cash, Credit Card",
  areaServed: {
    "@type": "City",
    name: "Ташкент",
  },
  sameAs: ["https://instagram.com/smile_avenue_uz"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Стоматологические услуги",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Виниры E-max",
          description: "Ультратонкие керамические накладки премиального уровня",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Профессиональное отбеливание",
          description: "Зубы белее на 4-5 тонов за один сеанс",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Брекет-система",
          description: "Ровные зубы уже на 3-м месяце",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Имплантация зубов",
          description: "Без боли и с пожизненной гарантией",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Профессиональная гигиена",
          description:
            "3-этапная профессиональная чистка зубов за 48 минут",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Циркониевая коронка",
          description: "Эстетика и прочность в одном решении",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Лечение кариеса",
          description: "Своевременное лечение — залог здоровья зубов",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Удаление зубов",
          description: "Удаление без боли",
        },
      },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
