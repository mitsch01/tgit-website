import { motion } from "framer-motion";
import { siteData } from "../data/siteData";
// import NeonMarker from "./NeonMarker";

const { hero } = siteData;

export default function Hero() {
  return (
    <div className="relative">
      {/* ── SECTION 1: Bild, immer 100vh ── */}
      <section id="hero" className="relative h-screen overflow-hidden">
        <picture>
          <source
            media="(max-width: 640px) and (orientation: portrait)"
            srcSet={hero.imageSrcMobile}
          />
          <source media="(max-width: 1024px)" srcSet={hero.imageSrcTablet} />
          <img
            src={hero.imageSrcLaptop}
            alt={hero.imageAlt}
            className="w-full h-full object-cover object-top"
          />
        </picture>

        {/* ── Titel + Doodle-Rock: mittig unten im Foto ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute inset-x-0 bottom-[16%] sm:bottom-[14%] md:bottom-[12%] flex justify-center"
        >
          <div className="relative">
            {/* Doodle-Rock: farbig via CSS-Maske, sitzt hinter/über dem Titel */}
            <motion.div
              aria-hidden="true"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute bottom-2 md:bottom-10 lg:bottom-44 left-1/3 lg:-left-1/3 -translate-x-1/2 w-36 sm:w-48 md:w-56 lg:w-72 z-0"
              style={{
                aspectRatio: "4419 / 6250",
                backgroundColor: "var(--color-brand-yellow)",
                WebkitMaskImage: "url('/assets/doodles/doodle-rock.png')",
                maskImage: "url('/assets/doodles/doodle-rock.png')",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />

            {/* Titel-Schriftzug */}
            <img
              src="/assets/thank-god-its-tuesday_white.png"
              alt="Thank god it's Tuesday"
              className="relative z-10 lg:right-1/2 -bottom-12 md:top-8 w-72 sm:w-96 md:w-[28rem] lg:w-[48rem] object-contain"
            />
          </div>
        </motion.div>
      </section>

      {/* ── Tagline & Quote Block ── */}
      <section
        className="bg-[var(--color-brand-white)] text-center px-6 md:px-16 md:py-12"
        style={{ maxWidth: "60rem", margin: "0 auto" }}
      >
        <div>
          {/* Tagline */}
          <div className="mt-36 mb-4 md:mb-8 text-center">
            <div className="relative inline-block max-w-full px-2 py-1">
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
            className="text-base px-6 lg:px-0 md:text-lg max-w-2xl italic leading-relaxed mx-auto opacity-70"
            style={{ color: "var(--color-brand-text)" }}
          >
            {hero.quote}
          </motion.p>
        </div>
      </section>

      {/* Scroll-Pfeil: mittig unten, immer sichtbar, zeigt nach unten */}
      <img
        src="/assets/pfeil.gif"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-1 md:right-8 lg:right-1/4 -translate-x-1/2 w-24 md:w-32 object-contain scale-x-[-1] -rotate-[60deg] md:-rotate-[40deg]"
        style={{ filter: "brightness(0)" }}
      />
    </div>
  );
}
