import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

const { about } = siteData;

export default function About() {
  return (
    <section id="ueber-mich" className="bg-[var(--color-brand-gray)] py-36">
      <div
        className="px-6 md:px-8"
        style={{ maxWidth: "56rem", margin: "0 auto" }}
      >
        {/* Section Label */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl font-bold text-center md:text-5xl mb-12"
        >
          {about.heading}
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full md:w-1/2 shrink-0 min-h-64 overflow-hidden rounded-sm"
          >
            <img
              src={about.imageSrc}
              alt={about.imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="leading-relaxed text-base md:text-lg opacity-80"
                style={{ color: "var(--color-brand-text)" }}
              >
                {p}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
