import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  cta: string;
  assetSrc: string;
  assetAlt: string;
  imageLeft: boolean;
}

export default function ServiceCard({
  title,
  description,
  cta,
  assetSrc,
  assetAlt,
  imageLeft,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${
        imageLeft ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 md:gap-16 items-center py-14 border-b border-gray-200`}
    >
      {/* Text-Seite */}
      <div className="flex-1 flex flex-col gap-4">
        <p
          className="text-base md:text-lg leading-relaxed opacity-70"
          style={{ color: "var(--color-brand-text)" }}
        >
          {description}
        </p>
        {/* CTA-Link mit Pfeil */}
        <button
          className="self-start mt-2 text-sm font-medium underline underline-offset-4 transition-all cursor-pointer"
          style={{ textDecorationColor: "var(--color-brand-yellow)" }}
        >
          {cta} →
        </button>
      </div>

      {/* Bild-Seite */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-sm md:max-w-md">
          {assetSrc ? (
            <img
              src={assetSrc}
              alt={assetAlt}
              className="w-full object-contain"
            />
          ) : (
            <div
              className="w-full h-64 md:h-80"
              style={{ backgroundColor: "var(--color-brand-yellow)" }}
            />
          )}
          <h3 className="absolute inset-0 flex items-center justify-center font-brand text-3xl leading-tight whitespace-pre-line text-center">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
