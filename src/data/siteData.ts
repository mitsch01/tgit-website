// ─── SITE DATA ────────────────────────────────────────────────────────────────
// Alle Inhalte der Website zentral hier pflegen.
// Später kann diese Datei durch Sanity CMS-Abfragen ersetzt werden.
// ──────────────────────────────────────────────────────────────────────────────

export const siteData = {
  // ── NAVIGATION ──────────────────────────────────────────────────────────────
  nav: {
    "logo-black": "/assets/brand/tgit-black.png",
    "logo-white": "/assets/brand/tgit-white.png",
    links: [
      { label: "Leistungen", href: "#leistungen" },
      { label: "Über mich", href: "#ueber-mich" },
      { label: "Kontakt", href: "#kontakt" },
    ],
  },

  // ── HERO ────────────────────────────────────────────────────────────────────
  hero: {
    imageSrcLaptop: "/assets/photos/hero-desktop.jpg",
    imageSrcTablet: "/assets/photos/hero-tablet.jpg",
    imageSrcMobile: "/assets/photos/hero-mobile.webp",
    imageAlt: "Katrin Schwerdtner – Interim & Fractional People Lead",
    tagline: "Better work starts now.",
    quote:
      '"Als Fractional People Lead unterstütze ich Startups und Scaleups dabei, People & Organisation auf stabile, skalierbare Beine zu stellen. Ich bringe Struktur in wachsende Organisationen und setze um, statt nur zu konzipieren – fokussiert, pragmatisch und mit großem People Heart."',
  },

  // ── LEISTUNGEN ──────────────────────────────────────────────────────────────

  services: {
    heading: "LEISTUNGEN",
    services: [
      {
        id: "interim",
        // title: "Interim & Fractional Management",
        titleSrc: "/assets/notes/interim.png",
        titleAlt: "Interim & Fractional Management",
        titleSize: { width: "250px" },
        titlePosition: { top: "50%", left: "50%" },
        description:
          "Ich übernehme Verantwortung in Phasen von Wachstum, Transformation oder Neuaufstellung (stundenweise bis fulltime) – integriert in eure Organisation und im engen Austausch mit dem Team.",
        cta: "BEISPIELE",
        examples: [
          "Vakanz-Überbrückung von People Rollen",
          "Neuaufbau / Neuausrichtung von People & Org Setups",
          "Change- und Transformationsbegleitung",
        ],
        assetSrc: "/assets/elements/notizzettel1.webp",
        assetAlt: "Interim & Fractional Management",
        tapeSrc: "/assets/elements/tape-white-1.png",
        imageLeft: false, // Text links, Bild rechts
      },
      {
        id: "projekte",
        titleSrc: "/assets/notes/projekt.png",
        titleAlt: "Projekt-Mandate",
        titleSize: { width: "270px" },
        titlePosition: { top: "55%", left: "60%" },
        description:
          "Ich arbeite an klar abgegrenzten Projekten rund um People & Organisation – von der Strategieentwicklung über Pilotierung und Iteration bis zur nachhaltigen Verankerung.",
        cta: "BEISPIELE",
        examples: [
          "Organisationsdesign & HR Operating Model",
          "Compensation & Incentive Frameworks",
          "Purpose, Values & Ways of Working",
          "HR Audit & Process Design",
        ],
        assetSrc: "/assets/elements/notizzettel3.webp",
        assetAlt: "Projekt-Mandate",
        tapeSrc: "/assets/elements/tape-white-2.png",
        imageLeft: true, // Bild links, Text rechts
      },
      {
        id: "sparring",
        titleSrc: "/assets/notes/sparring.png",
        titleAlt: "Leadership Sparring",
        titleSize: { width: "250px" },
        titlePosition: { top: "60%", left: "60%" },
        description:
          "Ich begleite Founders, People Leads und Führungsteams als Sparringspartnerin in komplexen Wachstums- und Entscheidungssituationen – ohne Blaupause, erfahrungsbasiert und mit konkreten Ideen.",
        cta: "BEISPIELE",
        examples: [
          "HR-Strategieberatung",
          "Sparring zu Leadership- & Organisationsfragen",
          "Restrukturierung von Organisationen & Teams",
          "Mentoring von HR Professionals",
        ],
        assetSrc: "/assets/elements/notizzettel2.webp",
        assetAlt: "Leadership Sparring",
        tapeSrc: "/assets/elements/tape-white-3.png",
        imageLeft: false,
      },
      {
        id: "workshops",
        titleSrc: "/assets/notes/workshops.png",
        titleAlt: "Workshops & Training",
        titleSize: { width: "260px" },
        titlePosition: { top: "53%", left: "60%" },
        description:
          "Ich gestalte und moderiere Formate rund um Führung, Kultur und Zusammenarbeit – von punktuellen Sessions bis hin zu mehrteiligen Programmen. Inhalte und Ablauf entwickeln wir passend zu eurer Situation.",
        cta: "BEISPIELE",
        examples: [
          "Leadership Development Journeys",
          "High Performance & Team Dynamics",
          "Candid Feedback & Gesprächsführung",
          "Hiring Excellence Training"
        ],
        assetSrc: "/assets/elements/notizzettel4.webp",
        assetAlt: "Workshops & Training",
        tapeSrc: "/assets/elements/tape-white-4.png",
        imageLeft: true,
      },
    ],
  },

  // ── ÜBER MICH ───────────────────────────────────────────────────────────────
  about: {
    imageSrc: "/assets/photos/contact.webp",
    imageAlt: "Katrin Schwerdtner",
    heading: "ÜBER MICH",
    paragraphs: [
      "Hi! Ich bin Katrin.",
      "Im Konzern habe ich gelernt, in großen Systemen zu denken und zu agieren. In Startups und Scale-ups, schnell, pragmatisch und hands-on Wirkung zu erzeugen. Beides prägt meine Arbeit.",
      "Als erfahrene HR-Führungskraft begleite ich Unternehmen in Wachstums- und Veränderungsphasen. Dabei verbinde ich strategischen Weitblick mit der Fähigkeit, im richtigen Moment operativ einzutauchen. Ich schaffe Orientierung im Chaos und entwickle tragfähige, skalierbare Strukturen – immer an der Schnittstelle von Businesszielen und People Needs. Zahlen und Dashboards geben mir Orientierung. Die feinen Zwischentöne im System auch.",
      "Ich arbeite fokussiert, mit Tempo – und verliere auch in anspruchsvollen Momenten nicht meinen Humor. Noch nie. Bisher. Challenge me. ;)",
    ],
  },

  // ── KONTAKT ─────────────────────────────────────────────────────────────────
  contact: {
    imageSrc: "/assets/elements/note-contact.webp",
    imageAlt: "",
    heading: "KONTAKT",
    intro:
      "Ich freue mich über deine Nachricht und melde mich schnell bei dir zurück. Schau dich auch gern auf meinem",
    introAfterLinkedIn:
      "um. Oder du buchst dir einfach direkt ein kurzes Intro. Unverbindlich natürlich.",
    name: "/assets/notes/katrin-schwerdtner.png",
    nameAlt: "Katrin Schwerdtner",
    role: "Fractional People Lead & HR Advisor",
    location: "Hamburg & Fehmarn",
    email: "katrin@tgit.team",
    mobile: "+49 177 3477326",
    mailtoHref: "mailto:katrin@tgit.team",
    bookingText: "Click to book intro",
    bookingLink: "https://calendar.app.google/iKfqRNGzyc6TccKeA",
  },

  // ── FOOTER ──────────────────────────────────────────────────────────────────
  footer: {
    logo: "/assets/brand/logo-white-max.png",
    socialLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/katrin-schwerdtner",
        logo: "/assets/logos/linkedin.png",
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
            "Thank God It's Tuesday",
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
            "Thank God It's Tuesday",
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
          title: "Fotos",
          paragraphs: ["Christoph Niemann", "Businessfotograf", "businessportraits-hamburg.de"],
        },
        {
          title: "Web-Development und Design",
          paragraphs: ["Miriam Schwartz", "Software Developer", "studio-mitsch.de"],
        },
        {
          title: "Steuerliche Angaben",
          paragraphs: "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE460226275",
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
