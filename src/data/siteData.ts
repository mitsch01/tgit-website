// ─── SITE DATA ────────────────────────────────────────────────────────────────
// Alle Inhalte der Website zentral hier pflegen.
// Später kann diese Datei durch Sanity CMS-Abfragen ersetzt werden.
// ──────────────────────────────────────────────────────────────────────────────

export const siteData = {
  // ── NAVIGATION ──────────────────────────────────────────────────────────────
  nav: {
    logo: "src/assets/tgit-black.png",
    links: [
      { label: "Leistungen", href: "#leistungen" },
      { label: "Über mich", href: "#ueber-mich" },
      { label: "Kontakt", href: "#kontakt" },
    ],
  },

  // ── HERO ────────────────────────────────────────────────────────────────────
  hero: {
    logo: "src/assets/logo-white-max.png",
    imageSrc: "src/assets/hero2_web.jpg",
    imageAlt: "Katrin Schwerdtner – Interim & Fractional People Lead",
    tagline: "Better work starts now.",
    quote:
      '"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et."',
  },

  // ── LEISTUNGEN ──────────────────────────────────────────────────────────────

  services: [
    {
      id: "interim",
      titleSrc: "src/assets/heading_interim.png",
      titleAlt: "Interim &\nFractional\nManagement",
      description:
        "Ich übernehme punktuell oder über einen definierten Zeitraum operative Verantwortung im People & HR-Bereich. Dabei spiele ich immer mit dem Ziel, gemeinsam mit dir und deinen Kolleg:innen etwas aufzubauen.",
      cta: "BEISPIELE",
      assetSrc: "src/assets/note20.svg",
      assetAlt: "Interim & Fractional Management",
      imageLeft: false, // Text links, Bild rechts
    },
    {
      id: "projekte",
      titleSrc: "src/assets/heading_projekte.png",
      titleAlt: "Projekt-\nMandate",
      description:
        "Du brauchst projektbasierte Unterstützung? Ich arbeite fokussiert und Ergebnis-orientiert daran, dein People-Projekt voranzutreiben – von Strategieentwicklung bis zur Umsetzung.",
      cta: "BEISPIELE",
      assetSrc: "src/assets/note4.svg",
      assetAlt: "Projekt-Mandate",
      imageLeft: true, // Bild links, Text rechts
    },
    {
      id: "sparring",
      titleSrc: "src/assets/heading_sparring.png",
      titleAlt: "Executive &\nLeadership\nSparring",
      description:
        "Ich biete dir Sparring-Partnerschaft für Führungskräfte und Founder:innen in Wachstumsphasen und Veränderungen. Ich arbeite methodisch und nutze meine Erfahrung aus Startups und Scale-ups, um gemeinsam Lösungen zu entwickeln.",
      cta: "BEISPIELE",
      assetSrc: "src/assets/note8.svg",
      assetAlt: "Executive & Leadership Sparring",
      imageLeft: false,
    },
    {
      id: "workshops",
      titleSrc: "src/assets/heading_workshops.png",
      titleAlt: "Workshops\n&\nTraining",
      description:
        "Ich konzipiere und leite Workshops und Trainings für Teams und Führungskräfte. Ob Leadership-Development, Teambuilding oder spezifische HR-Themen – ich bringe Energie und Expertise.",
      cta: "BEISPIELE",
      assetSrc: "src/assets/note20.svg",
      assetAlt: "Workshops & Training",
      imageLeft: true,
    },
  ],

  // ── ÜBER MICH ───────────────────────────────────────────────────────────────
  about: {
    imageSrc: "src/assets/contact2_web.png",
    imageAlt: "Katrin Schwerdtner",
    heading: "ÜBER MICH",
    paragraphs: [
      "Als Interim & Fractional People Lead arbeite ich seit Jahren in einer Vielzahl von Startups und Scale-ups. Ich habe Führungspositionen im People Management übernommen, Teams aufgebaut und entwickelt, Transformationsprojekte geleitet und Unternehmen in kritischen Phasen begleitet.",
      "Mein Schwerpunkt liegt auf der strategischen und operativen Arbeit an der Schnittstelle von People, Culture und Business. Ich bin überzeugt, dass gute Arbeitsbedingungen und starke Performance kein Widerspruch sind – und lebe das in jedem Mandat.",
      "Es ist mir wichtig, nachhaltig und persönlich zu arbeiten – als vollwertiges Teammitglied auf Zeit, nicht als externe Beraterin auf Abstand.",
    ],
  },

  // ── KONTAKT ─────────────────────────────────────────────────────────────────
  contact: {
    imageSrc: "src/assets/notizzettel.png",
    imageAlt: "",
    heading: "KONTAKT",
    intro:
      "Ob Interim-Mandat, projektbasierte Unterstützung oder Sparring – ich freue mich über deine Nachricht und melde mich schnell bei dir zurück.",
    // Visitenkarten-Daten
    name: "Katrin Schwerdtner",
    role: "Interim & Fractional\nPeople Lead",
    location: "Hamburg & Fehmarn",
    email: "katrin@tgit.team",
    mobile: "+49 177 3477326",
    // mailto-Link (kein Formular)
    mailtoHref: "mailto:katrin@tgit.team",
  },

  // ── FOOTER ──────────────────────────────────────────────────────────────────
  footer: {
    logo: "src/assets/smiley-white.png",
    // TODO: Links zu echten Profilen ersetzen
    socialLinks: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
    legal: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
    credit: "Proudly built by the World's Best Company",
  },
};
