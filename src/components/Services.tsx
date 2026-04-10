import { siteData } from "../data/siteData";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="leistungen" className="bg-(--color-brand-white) py-20">
      <div className="max-w-3xl mx-auto px-6 md:px-16">
        {siteData.services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
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
