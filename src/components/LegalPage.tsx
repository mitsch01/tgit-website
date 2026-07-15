import { siteData } from "../data/siteData";

type LegalPageKey = keyof typeof siteData.legalPages;

type LegalPageProps = {
  pageKey: LegalPageKey;
};

function renderTextWithLinks(text: string) {
  const tokenRegex =
    /(https?:\/\/[^\s]+|www\.[^\s]+|\b(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}(?:\/[^\s]*)?|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g;
  const parts = text.split(tokenRegex);

  const trimTrailingPunctuation = (value: string) => {
    const match = value.match(/^(.+?)([.,;:!?)]*)$/);
    if (!match) {
      return { core: value, trailing: "" };
    }

    return { core: match[1], trailing: match[2] };
  };

  return parts.map((part, idx) => {
    if (!part) {
      return null;
    }

    const { core, trailing } = trimTrailingPunctuation(part);

    if (/^https?:\/\//.test(core)) {
      return (
        <span key={`${part}-${idx}`}>
          <a
            href={core}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            {core}
          </a>
          {trailing}
        </span>
      );
    }

    if (/^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(core)) {
      return (
        <span key={`${part}-${idx}`}>
          <a href={`mailto:${core}`} className="underline underline-offset-4">
            {core}
          </a>
          {trailing}
        </span>
      );
    }

    if (/^www\./.test(core) || /^(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}(?:\/\S*)?$/.test(core)) {
      const href = /^https?:\/\//.test(core) ? core : `https://${core}`;
      return (
        <span key={`${part}-${idx}`}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            {core}
          </a>
          {trailing}
        </span>
      );
    }

    return <span key={`${part}-${idx}`}>{part}</span>;
  });
}

export default function LegalPage({ pageKey }: LegalPageProps) {
  const page = siteData.legalPages[pageKey];

  return (
    <main className="bg-[var(--color-brand-white)] pb-24 pt-48 sm:pt-56">
      <div className="mx-auto max-w-[50rem] px-6 md:px-16">
        <div className="relative mb-6 text-center">
          <img
            src="/assets/elements/highlighter3.webp"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-10 sm:top-12 w-64 sm:w-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
          />
          <h1 className="relative font-heading text-4xl font-bold md:text-5xl">
            {page.heading}
          </h1>
        </div>

        {"lastUpdated" in page && page.lastUpdated ? (
          <p className="mt-8 text-center text-sm opacity-70">
            {page.lastUpdated}
          </p>
        ) : null}

        <div className="space-y-4 mt-20">
          {page.sections.map((section) => (
            <section
              key={section.title}
              className="py-8 border-b border-gray-200"
            >
              <h2 className="mb-4 text-base font-bold uppercase tracking-[0.04em]">
                {section.title}
              </h2>

              {"paragraphs" in section && section.paragraphs
                ? (Array.isArray(section.paragraphs)
                  ? section.paragraphs
                  : [section.paragraphs]
                ).map((paragraph: string, idx: number) => {
                  if (paragraph.trim() === "") {
                    return (
                      <div
                        key={`${section.title}-space-${idx}`}
                        className="h-3"
                      />
                    );
                  }

                  return (
                    <p
                      key={`${section.title}-p-${idx}`}
                      className="mt-1 leading-relaxed"
                    >
                      {renderTextWithLinks(paragraph)}
                    </p>
                  );
                })
                : null}

              {"bullets" in section &&
                section.bullets &&
                section.bullets.length > 0 ? (
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{renderTextWithLinks(bullet)}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
