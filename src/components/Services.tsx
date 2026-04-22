import { siteData } from "../data/siteData";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="leistungen"
      className="bg-[var(--color-brand-white)] py-20 mb-24"
    >
      <div
        className="px-6 md:px-16"
        style={{ maxWidth: "60rem", margin: "0 auto" }}
      >
        <h2 className="font-heading text-4xl font-bold text-center md:text-5xl mx-auto">
          {siteData.services.heading}
        </h2>
        {siteData.services.services.map((service) => (
          <ServiceCard
            key={service.id}
            titleSrc={service.titleSrc}
            titleAlt={service.titleAlt}
            description={service.description}
            cta={service.cta}
            assetSrc={service.assetSrc}
            assetAlt={service.assetAlt}
            imageLeft={service.imageLeft}
          />
        ))}
      </div>
    </section>
  );
}
