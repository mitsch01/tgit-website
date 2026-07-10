import { motion, useReducedMotion } from "framer-motion";
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
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto grid w-full max-w-[46rem] grid-cols-1 items-start gap-8 md:border-b md:border-gray-200 md:grid-cols-2 md:gap-16 py-14"
    >
      {/* Text-Seite */}
      <div
        className={`order-2 flex w-full max-w-80 flex-col gap-4 mx-auto ${imageLeft
            ? "md:order-2 md:ml-auto md:mr-0"
            : "md:order-1 md:ml-0 md:mr-auto"
          }`}
      >
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
                  className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-[#1a1a1a]/90"
                />
                <span>{example}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </div>

      {/* Bild-Seite */}
      <div
        className={`order-1 w-full ${imageLeft ? "md:order-1" : "md:order-2"}`}
      >
        <motion.div
          whileHover={
            prefersReducedMotion
              ? undefined
              : {
                x: 12,
                y: -8,
                rotate: imageLeft ? 3 : -3,
                transition: { duration: 0.18, ease: "easeOut" },
              }
          }
          className={`relative w-full max-w-80 mx-auto ${imageLeft ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
            } ${titleAlt === "Leadership Sparring" ? "rotate-3" : ""}`}
          style={{ transformOrigin: "50% 10%" }}
        >
          {/* // Notizzettel */}
          <img
            src={assetSrc}
            alt={assetAlt}
            className="object-contain relative z-20 opacity-60 mix-blend-multiply"
          />
          {/* // Heading */}
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
        </motion.div>
      </div>
    </motion.div>
  );
}
