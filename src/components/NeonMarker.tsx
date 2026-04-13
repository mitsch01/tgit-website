import { motion } from "framer-motion";

type NeonMarkerProps = {
  className?: string;
  delay?: number;
  duration?: number;
  colorClassName?: string;
};

export default function NeonMarker({
  className = "",
  delay = 0.2,
  duration = 0.55,
  colorClassName = "bg-[var(--color-brand-yellow)]",
}: NeonMarkerProps) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={`pointer-events-none absolute left-1 -right-4 top-[54%] h-[1.18em] origin-left md:left-2 md:h-[1.28em] ${className}`}
      aria-hidden="true"
    >
      <div
        className={`absolute inset-0 -rotate-[1.9deg] opacity-90 ${colorClassName}`}
        style={{
          clipPath:
            "polygon(0% 32%, 6% 18%, 14% 27%, 23% 15%, 34% 24%, 45% 12%, 56% 23%, 67% 17%, 78% 29%, 88% 21%, 100% 26%, 100% 82%, 92% 92%, 83% 84%, 72% 97%, 60% 86%, 49% 100%, 37% 88%, 26% 95%, 15% 85%, 7% 91%, 0% 80%)",
          borderRadius: "26px 18px 24px 16px / 14px 15px 22px 18px",
        }}
      />
      <div
        className={`absolute left-1 right-2 top-[12%] h-[78%] rotate-[1.4deg] opacity-68 mix-blend-multiply ${colorClassName}`}
        style={{
          clipPath:
            "polygon(0% 39%, 9% 24%, 18% 34%, 29% 20%, 40% 31%, 51% 19%, 62% 29%, 73% 23%, 84% 36%, 93% 28%, 100% 33%, 100% 76%, 91% 84%, 81% 77%, 70% 90%, 59% 80%, 48% 93%, 37% 82%, 27% 89%, 17% 78%, 8% 85%, 0% 74%)",
          borderRadius: "20px 14px 18px 16px / 11px 10px 16px 14px",
        }}
      />
      <div
        className={`absolute left-0 right-4 top-[4%] h-[86%] -rotate-[3.2deg] opacity-35 mix-blend-multiply ${colorClassName}`}
        style={{
          clipPath:
            "polygon(0% 29%, 5% 12%, 12% 24%, 20% 8%, 30% 22%, 40% 10%, 51% 21%, 62% 13%, 73% 27%, 84% 17%, 94% 24%, 100% 19%, 100% 70%, 95% 88%, 88% 76%, 79% 94%, 68% 79%, 57% 98%, 45% 82%, 33% 92%, 22% 79%, 12% 87%, 0% 73%)",
          borderRadius: "14px 10px 18px 12px / 8px 8px 18px 10px",
        }}
      />
    </motion.div>
  );
}
