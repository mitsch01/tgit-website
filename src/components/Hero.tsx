import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

const { hero } = siteData;

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      {/* ── Full-bleed Hero Bild ── */}
      <div className="relative flex-1 overflow-hidden">
        <img
          src={hero.imageSrc}
          alt={hero.imageAlt}
          className="w-full h-full object-cover object-top min-h-[75vh]"
        />

        {/* Overlay: dunkler Gradient von unten für Lesbarkeit des Textes */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-140 left-6 md:right-12"
        >
          <img src={siteData.hero.logo} width={1024}></img>
        </motion.div>
      </div>

      {/* ── Tagline & Quote Block ── */}
      <div className="bg-(--color-brand-white) px-6 md:px-16 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Tagline mit Neon-Gelb-Unterstrich */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl mb-2 leading-tight"
          >
            {hero.tagline}
          </motion.h1>

          {/* Neon-Unterstrich */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1.5 w-48 bg-(--color-brand-yellow) mb-8 origin-left"
          />

          {/* Zitat */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-(--color-brand-text)/70 text-base md:text-lg max-w-2xl italic leading-relaxed"
          >
            {hero.quote}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
