import { motion } from "framer-motion";
import { siteData } from "../data/siteData";
import NeonMarker from "./NeonMarker";

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-[500px] left-36 md:right-12"
        >
          <img src={siteData.hero.logo} width={750} alt="Hero Logo" />
        </motion.div>
      </div>

      {/* ── Tagline & Quote Block ── */}
      <div
        className="bg-[var(--color-brand-white)] text-center px-6 md:px-16 py-12"
        style={{ maxWidth: "60rem", margin: "0 auto" }}
      >
        <div>
          {/* Tagline mit Highlighter-Markierung */}
          <div className="mt-36 mb-8 text-center">
            <div className="relative inline-block max-w-full px-2 py-1">
              <NeonMarker />

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 font-heading text-3xl font-bold leading-tight md:text-5xl"
              >
                {hero.tagline}
              </motion.h1>
            </div>
          </div>

          {/* Zitat */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg max-w-2xl italic leading-relaxed mx-auto opacity-70"
            style={{ color: "var(--color-brand-text)" }}
          >
            {hero.quote}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
