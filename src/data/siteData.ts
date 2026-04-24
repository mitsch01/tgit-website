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

  services: {
    heading: "LEISTUNGEN",
    services: [
      {
        id: "interim",
        // title: "Interim & Fractional Management",
        titleSrc: "src/assets/interim-kurz.png",
        titleAlt: "Interim & Fractional Management",
        titleSize: { width: "210px" },
        titlePosition: { top: "50%", left: "50%" },
        description:
          "Ich übernehme punktuell oder über einen definierten Zeitraum operative Verantwortung im People & HR-Bereich. Dabei spiele ich immer mit dem Ziel, gemeinsam mit dir und deinen Kolleg:innen etwas aufzubauen.",
        cta: "BEISPIELE",
        assetSrc: "src/assets/notizzettel1.png",
        assetAlt: "Interim & Fractional Management",
        tapeSrc: "src/assets/tape-white-1.png",
        imageLeft: false, // Text links, Bild rechts
      },
      {
        id: "projekte",
        titleSrc: "src/assets/projekte2.png",
        titleAlt: "Projekt-Mandate",
        titleSize: { width: "170px" },
        titlePosition: { top: "50%", left: "50%" },
        description:
          "Du brauchst projektbasierte Unterstützung? Ich arbeite fokussiert und Ergebnis-orientiert daran, dein People-Projekt voranzutreiben – von Strategieentwicklung bis zur Umsetzung.",
        cta: "BEISPIELE",
        assetSrc: "/src/assets/notizzettel3.png",
        assetAlt: "Projekt-Mandate",
        tapeSrc: "src/assets/tape-white-2.png",
        imageLeft: true, // Bild links, Text rechts
      },
      {
        id: "sparring",
        titleSrc: "src/assets/l-sparring.png",
        titleAlt: "Leadership Sparring",
        titleSize: { width: "220px" },
        titlePosition: { top: "50%", left: "50%" },
        description:
          "Ich biete dir Sparring-Partnerschaft für Führungskräfte und Founder:innen in Wachstumsphasen und Veränderungen. Ich arbeite methodisch und nutze meine Erfahrung aus Startups und Scale-ups, um gemeinsam Lösungen zu entwickeln.",
        cta: "BEISPIELE",
        assetSrc: "src/assets/notizzettel2.png",
        assetAlt: "Leadership Sparring",
        tapeSrc: "src/assets/tape-white-3.png",
        imageLeft: false,
      },
      {
        id: "workshops",
        titleSrc: "src/assets/workshops.png",
        titleAlt: "Workshops & Training",
        titleSize: { width: "220px" },
        titlePosition: { top: "50%", left: "48%" },
        description:
          "Ich konzipiere und leite Workshops und Trainings für Teams und Führungskräfte. Ob Leadership-Development, Teambuilding oder spezifische HR-Themen – ich bringe Energie und Expertise.",
        cta: "BEISPIELE",
        assetSrc: "src/assets/notizzettel4.png",
        assetAlt: "Workshops & Training",
        tapeSrc: "src/assets/tape-white-4.png",
        imageLeft: true,
      },
    ],
  },

  // ── ÜBER MICH ───────────────────────────────────────────────────────────────
  about: {
    imageSrc: "src/assets/contact3.jpg",
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
    imageSrc: "src/assets/tear-off-3.png",
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
    logo: "src/assets/logo-white-max.png",
    // TODO: Links zu echten Profilen ersetzen
    socialLinks: [
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
    legal: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
    credit: "© 2026 Katrin Schwerdtner. All rights reserved.",
  },
};
