import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

const { contact } = siteData;

export default function Contact() {
  return (
    <section id="kontakt" className="bg-[var(--color-brand-white)] py-36 mb-36">
      <div
        className="px-6 md:px-16"
        style={{ maxWidth: "60rem", margin: "0 auto" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl font-bold text-center md:text-5xl mx-auto"
        >
          {contact.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-xl leading-relaxed mt-16 opacity-70 text-base md:text-lg text-center mx-auto"
          style={{ color: "var(--color-brand-text)" }}
        >
          {contact.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-sm border border-gray-300 p-8 mt-24 mx-auto"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 27px, #e5e5dc 27px, #e5e5dc 28px), repeating-linear-gradient(90deg, transparent, transparent 27px, #e5e5dc 27px, #e5e5dc 28px)",
            backgroundColor: "#fafaf0",
          }}
        >
          {/* Klebe-Streifen oben (dekorativ) */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 -rotate-1"
            style={{
              backgroundColor: "var(--color-brand-yellow)",
              opacity: 0.8,
            }}
          />

          <div className="flex flex-col gap-2">
            <p className="font-heading text-2xl">{contact.name}</p>
            <p
              className="text-sm font-medium uppercase tracking-widest whitespace-pre-line opacity-60"
              style={{ color: "var(--color-brand-text)" }}
            >
              {contact.role}
            </p>
            <div className="h-px bg-gray-300 my-3" />
            <p
              className="text-sm opacity-70"
              style={{ color: "var(--color-brand-text)" }}
            >
              {contact.location}
            </p>
            <p className="text-sm">
              <span
                className="uppercase tracking-widest text-xs mr-2 opacity-50"
                style={{ color: "var(--color-brand-text)" }}
              >
                E-Mail
              </span>
              <a
                href={contact.mailtoHref}
                className="underline underline-offset-2 hover:text-[var(--color-brand-black)] transition-colors"
              >
                {contact.email}
              </a>
            </p>
            <p className="text-sm">
              <span
                className="uppercase tracking-widest text-xs mr-2 opacity-50"
                style={{ color: "var(--color-brand-text)" }}
              >
                Mobile
              </span>
              <a
                href={`tel:${contact.mobile.replace(/\s/g, "")}`}
                className="hover:text-[var(--color-brand-black)] transition-colors"
              >
                {contact.mobile}
              </a>
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-10 mx-auto text-center"
        >
          <a
            href={contact.mailtoHref}
            className="inline-block bg-[var(--color-brand-yellow)] text-[var(--color-brand-black)] font-medium px-8 py-4 text-sm tracking-wide hover:brightness-110 transition-all"
          >
            Nachricht schreiben →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
