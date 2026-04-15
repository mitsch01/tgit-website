import { motion } from "framer-motion";
interface ServiceCardProps {
  titleSrc: string;
  titleAlt: string;
  description: string;
  cta: string;
  assetSrc: string;
  assetAlt: string;
  imageLeft: boolean;
}

export default function ServiceCard({
  titleSrc,
  titleAlt,
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

        {/* Beispiele mit Plus */}
        <button className="mt-2 border-b border-black transition-all cursor-pointer flex justify-between items-center gap-2">
          <p className="text-sm font-semibold">{cta}</p>{" "}
          <p className="text-xl">+</p>
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
          <img
            src={titleSrc}
            alt={titleAlt}
            className="absolute top-1/2 left-1/2 z-10 w-3/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}
