import { siteData } from "../data/siteData";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="leistungen" className="bg-[var(--color-brand-white)] py-20 mb-24">
      <div className="px-6 md:px-16" style={{ maxWidth: '60rem', margin: '0 auto' }}>
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
