import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "MaKoKo Bau",
  tagline: "Ihr Experte für Bau und Sanierung",
  description: "MaKoKo Bau ist Ihr zuverlässiger Partner für Holz- und Bautenschutz, Flachdachsanierung und professionelle Abrissarbeiten. Mit jahrelanger Erfahrung und qualifizierten Mitarbeitern garantieren wir höchste Qualität und Kundenzufriedenheit.",
  description_short: "Professionelle Bau- und Sanierungsarbeiten in München und Umgebung.",
  url: "https://makoko-bau.de",
  author: "MaKoKo Bau GmbH",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "de-DE",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "de_DE",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Holz- und Bautenschutz, Flachdachsanierung, Abrissarbeiten`,
  description: "MaKoKo Bau - Ihr kompetenter Partner für Holz- und Bautenschutz, Flachdachsanierung und professionelle Abrissarbeiten. Wir bieten erstklassige Qualität und zuverlässigen Service in München und Umgebung.",
  image: ogImageSrc,
};
