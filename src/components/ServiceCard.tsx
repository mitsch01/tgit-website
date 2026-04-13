import { motion } from "framer-motion";
import tape1 from "../assets/tape1.png";
import tape2 from "../assets/tape2.png";
import tape3 from "../assets/tape3.png";
import tape4 from "../assets/tape4.png";

interface ServiceCardProps {
  title: string;
  description: string;
  cta: string;
  assetSrc: string;
  assetAlt: string;
  imageLeft: boolean;
}

const tapeImages = [tape1, tape2, tape3, tape4] as const;
const tapeRotations = [
  "-rotate-3",
  "rotate-2",
  "-rotate-2",
  "rotate-3",
] as const;

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export default function ServiceCard({
  title,
  description,
  cta,
  assetSrc,
  assetAlt,
  imageLeft,
}: ServiceCardProps) {
  const tapeIndex = hashString(title) % tapeImages.length;

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
        {/* CTA-Link mit Plus */}
        <button
          className="mt-2 border-b border-black transition-all cursor-pointer flex justify-between items-center gap-2"
        >
          <p className="text-sm font-semibold">{cta}</p> <p className="text-xl">+</p>
        </button>
      </div>

      {/* Bild-Seite */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-sm md:max-w-md">
          <div
            className={`pointer-events-none absolute -top-5 left-1/2 z-20 h-10 w-24 -translate-x-1/2 ${tapeRotations[tapeIndex]}`}
            aria-hidden="true"
          >
            <img
              src={tapeImages[tapeIndex]}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>

          {assetSrc ? (
            <img
              src={assetSrc}
              alt={assetAlt}
              className="w-full object-contain"
            />
          ) : (
            <div className="w-full h-64 md:h-80">
              <img src="src/assets/note_yellow.png" alt="" />
            </div>
          )}
          <h3 className="absolute inset-0 flex items-center justify-center font-brand text-3xl leading-tight whitespace-pre-line text-center">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
