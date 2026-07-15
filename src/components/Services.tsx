import { motion } from "framer-motion";
import { siteData } from "../data/siteData";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="relative">
      <section
        id="leistungen"
        className=" bg-[var(--color-brand-white)] py-20 mb-24"
      >
        <div
          className="relative px-12 md:px-16"
          style={{ maxWidth: "60rem", margin: "0 auto" }}
        >
          <img
            src="/assets/elements/highlighter3.webp"
            alt=""
            className="absolute left-1/2 top-12 lg:top-14 w-2/3 sm:w-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
          />
          <h2 className="font-heading text-4xl font-bold text-center md:text-5xl mb-8 sm:mb-12 mix-blend-multiply mx-auto ">
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
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-36 left-1/2 z-10 w-24 -translate-x-1/2 sm:w-24"
        style={{
          aspectRatio: "1 / 1",
          backgroundImage: "url('/assets/doodles/doodle-sparkle.webp')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}
