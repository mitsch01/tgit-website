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
      className={`flex flex-col ${imageLeft ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 items-center py-14 border-b border-gray-200`}
    >
      {/* Text-Seite */}
      <div className="flex-1 flex flex-col gap-4">
        <p className="text-(--color-brand-text)/70 leading-relaxed text-base md:text-lg">
          {description}
        </p>
        {/* CTA-Link mit Pfeil */}
        <button className="self-start mt-2 text-sm font-medium underline underline-offset-4 decoration-(--color-brand-yellow) hover:decoration-2 transition-all cursor-pointer">
          {cta} →
        </button>
      </div>
      
      {/* Bild-Seite */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-sm md:max-w-md">
          <img
            src={assetSrc}
            alt={assetAlt}
            className="w-full object-contain"
          />
          <h3 className="absolute inset-0 flex items-center justify-center font-brand text-3xl md:text-4xl leading-tight whitespace-pre-line text-center">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
