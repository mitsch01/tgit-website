import { siteData } from "../data/siteData";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="leistungen"
      className=" bg-[var(--color-brand-white)] py-20 mb-24"
    >
      <div
        className="relative px-12 md:px-16"
        style={{ maxWidth: "60rem", margin: "0 auto" }}
      >
        <img
          src="src/assets/highlighter3.svg"
          alt=""
          className="absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <h2 className="font-heading text-4xl font-bold text-center md:text-5xl mx-auto mb-24 mix-blend-multiply">
          {siteData.services.heading}
        </h2>
        {siteData.services.services.map((service) => (
          <ServiceCard
            key={service.id}
            // title={service.title}
            titleSrc={service.titleSrc}
            titleAlt={service.titleAlt}
            titleSize={service.titleSize}
            titlePosition={service.titlePosition}
            description={service.description}
            cta={service.cta}
            examples={service.examples}
            assetSrc={service.assetSrc}
            assetAlt={service.assetAlt}
            tapeSrc={service.tapeSrc}
            imageLeft={service.imageLeft}
          />
        ))}
      </div>
    </section>
  );
}
