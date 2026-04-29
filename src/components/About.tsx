import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

const { about } = siteData;

export default function About() {
  return (
    <section id="ueber-mich" className="bg-[var(--color-brand-gray)] py-36">
      <div
        className="px-12"
        style={{ maxWidth: "56rem", margin: "0 auto" }}
      >
        {/* Section Label */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative font-heading text-4xl font-bold text-center md:text-5xl mb-28"
        >
          <img
            src="/assets/highlighter3.png"
            alt=""
            className="absolute left-1/2 top-12 w-2/3 sm:w-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
          />
          {about.heading}
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-12 sm:gap-6 md:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full sm:w-1/2 shrink-0 min-h-[600px] overflow-hidden rounded-sm"
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
                className="leading-relaxed text-base opacity-80"
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
