import { motion } from "framer-motion";
interface ServiceCardProps {
  // title: string;
  titleSrc: string;
  titleAlt: string;
  titleSize: { width: string };
  titlePosition: { top: string; left: string };
  description: string;
  cta: string;
  assetSrc: string;
  assetAlt: string;
  tapeSrc: string;
  imageLeft: boolean;
}

export default function ServiceCard({
  // title,
  titleSrc,
  titleAlt,
  titleSize,
  titlePosition,
  description,
  cta,
  assetSrc,
  assetAlt,
  tapeSrc,
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
        <div
          className={`relative w-full max-w-sm md:max-w-md ${
            titleAlt === "Leadership Sparring" ? "rotate-3" : ""
          }`}
        >
          {/* // Notizzettel */}
          <img
            src={assetSrc}
            alt={assetAlt}
            className="object-contain relative z-20 opacity-60 mix-blend-multiply"
          />
          {/* // Heading */}
          {/* <h1 className="font-brand font-extrabold text-2xl absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">{title}</h1> */}
          <img
            src={titleSrc}
            alt={titleAlt}
            style={{ ...titleSize, ...titlePosition }}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
          />
          {/* // Tape */}
          <img
            src={tapeSrc}
            className="absolute top-3 left-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none object-contain z-10"
          />
        </div>
      </div>
    </motion.div>
  );
}
