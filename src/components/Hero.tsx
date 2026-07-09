import { motion } from "framer-motion";
import { siteData } from "../data/siteData";
// import NeonMarker from "./NeonMarker";

const { hero } = siteData;

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative h-screen overflow-hidden"
      >
        {/* ── Full-bleed Hero Bild ── */}
        <picture>
          <source
            media="(max-width: 640px) and (orientation: portrait)"
            srcSet={hero.imageSrcMobile}
          />
          <source media="(max-width: 1024px)" srcSet={hero.imageSrcTablet} />
          <img
            src={hero.imageSrcLaptop}
            alt={hero.imageAlt}
            className="w-full h-full object-cover object-top" />
        </picture>

       
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
    </>
  );
}
