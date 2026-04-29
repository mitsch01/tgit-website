// ─── SITE DATA ────────────────────────────────────────────────────────────────
// Alle Inhalte der Website zentral hier pflegen.
// Später kann diese Datei durch Sanity CMS-Abfragen ersetzt werden.
// ──────────────────────────────────────────────────────────────────────────────

export const siteData = {
  // ── NAVIGATION ──────────────────────────────────────────────────────────────
  nav: {
    "logo-black": "/assets/tgit-black.png",
    "logo-white": "/assets/tgit-white.png",
    links: [
      { label: "Leistungen", href: "#leistungen" },
      { label: "Über mich", href: "#ueber-mich" },
      { label: "Kontakt", href: "#kontakt" },
    ],
  },

  // ── HERO ────────────────────────────────────────────────────────────────────
  hero: {
    imageSrcLaptop: "/assets/Hero.jpg",
    imageSrcTablet: "/assets/hero-tablet.jpg",
    imageSrcMobile: "/assets/hero-mobile.jpg",
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
        titleSrc: "/assets/interim.png",
        titleAlt: "Interim & Fractional Management",
        titleSize: { width: "250px" },
        titlePosition: { top: "50%", left: "50%" },
        description:
          "Ich übernehme punktuell oder über einen definierten Zeitraum operative Verantwortung im People & HR-Bereich. Dabei spiele ich immer mit dem Ziel, gemeinsam mit dir und deinen Kolleg:innen etwas aufzubauen.",
        cta: "BEISPIELE",
        examples: [
          "Überbrückung von Vakanzen in People-/HR-Leadership-Rollen",
          "Aufbau oder Neuausrichtung von People & Culture Strukturen",
          "Change- und Transformationsbegleitung",
        ],
        assetSrc: "/assets/notizzettel1.png",
        assetAlt: "Interim & Fractional Management",
        tapeSrc: "/assets/tape-white-1.png",
        imageLeft: false, // Text links, Bild rechts
      },
      {
        id: "projekte",
        titleSrc: "/assets/projekt.png",
        titleAlt: "Projekt-Mandate",
        titleSize: { width: "270px" },
        titlePosition: { top: "55%", left: "60%" },
        description:
          "Du brauchst projektbasierte Unterstützung? Ich arbeite fokussiert und Ergebnis-orientiert daran, dein People-Projekt voranzutreiben – von Strategieentwicklung bis zur Umsetzung.",
        cta: "BEISPIELE",
        examples: [
          "Organisationsdesign und Strukturaufbau",
          "Kultur, Leadership und Zusammenarbeit",
          "HR-Modelle, Prozesse und Operating Principles",
        ],
        assetSrc: "/assets/notizzettel3.png",
        assetAlt: "Projekt-Mandate",
        tapeSrc: "/assets/tape-white-2.png",
        imageLeft: true, // Bild links, Text rechts
      },
      {
        id: "sparring",
        titleSrc: "/assets/sparring.png",
        titleAlt: "Leadership Sparring",
        titleSize: { width: "250px" },
        titlePosition: { top: "60%", left: "60%" },
        description:
          "Ich biete dir Sparring-Partnerschaft für Führungskräfte und Founder:innen in Wachstumsphasen und Veränderungen. Ich arbeite methodisch und nutze meine Erfahrung aus Startups und Scale-ups, um gemeinsam Lösungen zu entwickeln.",
        cta: "BEISPIELE",
        examples: [
          "Sparring zu People-, Organisations- und Leadership-Themen",
          "Reflexion von Führungsrollen, Strukturen und Entscheidungen",
          "Begleitung von Führungsteams in Veränderungs- und Wachstumsphasen",
        ],
        assetSrc: "/assets/notizzettel2.png",
        assetAlt: "Leadership Sparring",
        tapeSrc: "/assets/tape-white-3.png",
        imageLeft: false,
      },
      {
        id: "workshops",
        titleSrc: "/assets/workshops.png",
        titleAlt: "Workshops & Training",
        titleSize: { width: "260px" },
        titlePosition: { top: "53%", left: "60%" },
        description:
          "Ich konzipiere und leite Workshops und Trainings für Teams und Führungskräfte. Ob Leadership-Development, Teambuilding oder spezifische HR-Themen – ich bringe Energie und Expertise.",
        cta: "BEISPIELE",
        examples: [
          "New Leadership und New Work",
          "Kulturdynamiken und Wertearbeit",
          "High Performance und Ways of Working",
          "Strategie- und Teamworkshops",
        ],
        assetSrc: "/assets/notizzettel4.png",
        assetAlt: "Workshops & Training",
        tapeSrc: "/assets/tape-white-4.png",
        imageLeft: true,
      },
    ],
  },

  // ── ÜBER MICH ───────────────────────────────────────────────────────────────
  about: {
    imageSrc: "/assets/contact3.jpg",
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
    imageSrc: "/assets/note-contact.png",
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
    logo: "/assets/logo-white-max.png",
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/katrin-schwerdtner",
        logo: "/assets/linkedin.png",
      },
    ],
    legal: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
    credit: "© 2026 Katrin Schwerdtner. All rights reserved.",
  },

  // ── LEGAL PAGES CONTENT ───────────────────────────────────────────────────
  legalPages: {
    datenschutz: {
      heading: "Datenschutz",
      lastUpdated: "Stand: 29.04.2026",
      sections: [
        {
          title: "Verantwortliche Stelle",
          paragraphs: [
            "TGIT - Thank God It's Tuesday",
            "Katrin Schwerdtner",
            "Sahrensdorf 31",
            "23769 Fehmarn",
            "",
            "E-Mail: katrin@tgit.team",
            "Telefon: +49 177 3477326",
          ],
        },
        {
          title: "Was wir auf dieser Website verarbeiten",
          paragraphs: [
            "Diese Website ist eine Informationsseite ohne Login, Shop oder eingebettete Tracking-Tools. Wir erheben keine personenbezogenen Daten direkt auf dieser Website, außer Sie kontaktieren uns aktiv per E-Mail.",
          ],
        },
        {
          title: "Hosting und Server-Logs",
          paragraphs: [
            "Die Website wird auf Vercel gehostet. Beim Aufruf der Seite werden technisch notwendige Server-Logdaten verarbeitet (z. B. IP-Adresse, Datum/Uhrzeit, angeforderte URL, Browser-/Systeminformationen), um die Website sicher und stabil bereitzustellen. Server-Logdaten werden nach spätestens 30 Tagen automatisch gelöscht.",
            "Die Datenübermittlung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO.",
          ],
          bullets: [
            "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)",
            "Anbieter: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA",
            "Weitere Informationen: https://vercel.com/legal/privacy-policy",
          ],
        },
        {
          title: "Kontakt per E-Mail",
          paragraphs: [
            "Wenn Sie uns per E-Mail schreiben, verarbeiten wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage. Die Daten werden nicht ohne Rechtsgrundlage an Dritte weitergegeben. Ihre Anfrage wird nach abschließender Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
          ],
          bullets: [
            "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)",
          ],
        },
        {
          title: "Cookies und Tracking",
          paragraphs: [
            "Es werden keine eigenen Tracking- oder Marketing-Cookies eingesetzt. Falls Ihr Browser oder der Hostinganbieter technisch notwendige Cookies setzt, geschieht dies ausschließlich zur sicheren Auslieferung der Seite.",
          ],
        },
        {
          title: "Ihre Rechte",
          paragraphs: [
            "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch nach Maßgabe der DSGVO (Art. 15–21 DSGVO). Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige Behörde für Schleswig-Holstein ist:",
            "",
            "Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein (ULD)",
            "Holstenstraße 98",
            "24103 Kiel",
            "www.datenschutzzentrum.de",
            "",
            "Für alle Datenschutzanfragen: katrin@tgit.team",
          ],
        },
      ],
    },
    impressum: {
      heading: "Impressum",
      sections: [
        {
          title: "Anbieterkennzeichnung",
          paragraphs: [
            "Katrin Schwerdtner",
            "Unternehmensberaterin (Deutschland)",
            "TGIT - Thank God It's Tuesday",
            "",
            "Sahrensdorf 31",
            "23769 Fehmarn",
          ],
        },
        {
          title: "Kontakt",
          paragraphs: ["Telefon: +49 177 3477326", "E-Mail: katrin@tgit.team"],
        },
        {
          title: "Steuerliche Angaben",
          options: [
            {
              label: "OPTION A - falls umsatzsteuerpflichtig",
              text: "Umsatzsteuer-Identifikationsnummer gemaess § 27a UStG: DE[XXXXXXXXX]",
            },
            {
              label: "OPTION B - falls Kleinunternehmerin nach § 19 UStG",
              text: "Gemaess § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).",
            },
          ],
        },
        {
          title: "Verantwortlich fuer den Inhalt nach § 18 Abs. 2 MStV",
          paragraphs: ["Katrin Schwerdtner", "Sahrensdorf 31", "23769 Fehmarn"],
        },
        {
          title: "Verbraucherstreitbeilegung / Universalschlichtungsstelle",
          paragraphs: [
            "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
          ],
        },
      ],
    },
  },
};
