import { motion } from "framer-motion";
import { siteData } from "../data/siteData";
// import NeonMarker from "./NeonMarker";

const { hero } = siteData;

export default function Hero() {
  return (
    <>
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
              // animate={{
              //   x: [0, -4, 4, -4, 0],
              //   rotate: [0, -2, 2, -2, 0],
              //   scale: [1, 1.02, 1, 1.01, 1],
              // }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute bottom-2 md:bottom-10 lg:bottom-16 lg:-left-20 w-36 sm:w-48 md:w-56  z-0"
              style={{
                aspectRatio: "4419 / 6250",
                backgroundColor: "var(--color-brand-yellow)",
                transformOrigin: "50% 65%",
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
              src="/assets/brand/thank-god-its-tuesday_white.png"
              alt="Thank god it's Tuesday"
              className="relative z-10 -bottom-12 md:top-8 w-72 sm:w-96 md:w-[28rem] object-contain"
              style={{ filter: "drop-shadow(2px 12px 50px rgba(0,0,0,0.4))" }}
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
        <img
          src="/assets/doodles/doodle-ok.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none block mx-auto w-36 md:w-48 mt-8 scale-x-[-1] "
        />
      </section>
    </>
  );
}
