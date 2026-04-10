import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

const { about } = siteData;

export default function About() {
  return (
    <section id="ueber-mich" className="bg-(--color-brand-gray) py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-16">
        {/* Section Label */}
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-(--color-brand-text)/50 mb-3">
          Über
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl mb-12"
        >
          {about.heading}
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/5 shrink-0"
          >
            <img
              src={about.imageSrc}
              alt={about.imageAlt}
              className="w-full object-cover rounded-sm"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5 pt-2"
          >
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-(--color-brand-text)/80 leading-relaxed text-base md:text-lg"
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
