// An array of links for navigation bar
const navBarLinks = [
  { name: "Startseite", url: "/makokobau/" },
  { name: "Leistungen", url: "/makokobau/services" },
  { name: "Referenzen", url: "/makokobau/blog" },
  { name: "Kontakt", url: "/makokobau/contact" },
];

// An array of links for footer
const footerLinks = [
  {
    section: "Leistungen",
    links: [
      { name: "Holz- und Bautenschutz", url: "/makokobau/services#holzschutz" },
      { name: "Flachdachsanierung", url: "/makokobau/services#flachdach" },
      { name: "Abrissarbeiten", url: "/makokobau/services#abriss" },
    ],
  },
  {
    section: "Unternehmen",
    links: [
      { name: "Über uns", url: "/makokobau/#" },
      { name: "Referenzen", url: "/makokobau/blog" },
      { name: "Karriere", url: "/makokobau/#" },
      { name: "Kontakt", url: "/makokobau/contact" },
    ],
  },
];

// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "#",
  google: "https://www.google.com/",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
