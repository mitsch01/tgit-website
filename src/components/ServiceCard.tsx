import { motion } from "framer-motion";
import { useState } from "react";
interface ServiceCardProps {
  // title: string;
  titleSrc: string;
  titleAlt: string;
  titleSize: { width: string };
  titlePosition: { top: string; left: string };
  description: string;
  cta: string;
  examples: string[];
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
  examples,
  assetSrc,
  assetAlt,
  tapeSrc,
  imageLeft,
}: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col-reverse ${
        imageLeft ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 md:gap-16 items-center py-24 md:py-14 border-b border-gray-200`}
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
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="mt-2 border-b border-black transition-all cursor-pointer flex justify-between items-center gap-2"
          type="button"
          aria-expanded={isOpen}
        >
          <p className="text-sm font-semibold">{cta}</p>{" "}
          <p className="text-xl">{isOpen ? "–" : "+"}</p>
        </button>

        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="space-y-2"
          >
            {examples.map((example) => (
              <li
                key={example}
                className="flex items-start gap-3 text-sm md:text-base opacity-80 text-[#1a1a1a]/90"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1a1a1a]/90"
                />
                <span>{example}</span>
              </li>
            ))}
          </motion.ul>
        )}
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
