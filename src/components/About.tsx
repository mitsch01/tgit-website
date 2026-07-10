import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteData } from "../data/siteData";

const { about } = siteData;

export default function About() {
  const [isMobile, setIsMobile] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 639px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const updateBreakpoint = () => setIsMobile(mediaQuery.matches);

    updateBreakpoint();
    mediaQuery.addEventListener("change", updateBreakpoint);

    return () => {
      mediaQuery.removeEventListener("change", updateBreakpoint);
    };
  }, []);

  return (
    <section id="ueber-mich" className="bg-[var(--color-brand-gray)] pt-36 pb-64">
      <div className="px-12" style={{ maxWidth: "56rem", margin: "0 auto" }}>
        {/* Section Label */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative font-heading text-4xl font-bold text-center md:text-5xl mb-28"
        >
          <img
            src="/assets/elements/highlighter3.png"
            alt=""
            className="absolute left-1/2 top-12 w-2/3 sm:w-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
          />
          {about.heading}
        </motion.h2>

        <div >
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-6 md:gap-12 items-stretch">
            <motion.div
              key={isMobile ? "about-image-mobile" : "about-image-desktop"}
              initial={isMobile ? { opacity: 0, y: 32 } : { opacity: 0, x: -30 }}
              whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="relative w-full sm:w-1/2 shrink-0 min-h-[600px] overflow-hidden"
            >
              <img
                src={about.imageSrc}
                alt={about.imageAlt}
                className="absolute inset-0 w-full  object-cover"
              />
            </motion.div>
            {/* Text */}
            <motion.div
              key={isMobile ? "about-text-mobile" : "about-text-desktop"}
              initial={isMobile ? { opacity: 0, y: 32 } : { opacity: 0, x: 30 }}
              whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: isMobile ? 0.2 : 0.1 }}
              className="flex flex-col gap-5"
            >
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="leading-relaxed text-base opacity-80"
                  style={{ color: "var(--color-brand-text)" }}
                >
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
            <motion.img
              src="/assets/doodles/doodle-yoga.png"
              alt=""
              className="w-44 justify-self-center absolute z-20 pt-8"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 280, damping: 16 }}
            />
        </div>
            
      </div>
    </section>
  );
}
