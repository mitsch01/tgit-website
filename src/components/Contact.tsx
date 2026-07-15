import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

const { contact } = siteData;
const linkedIn = siteData.footer.socialLinks.find(
  (socialLink) => socialLink.label === "LinkedIn",
);

export default function Contact() {
  return (
    <div className="relative">
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <filter id="paperplane-dilate">
          <feMorphology in="SourceGraphic" operator="dilate" radius="0.7" />
        </filter>
      </svg>

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
            className="relative font-heading text-4xl font-bold text-center md:text-5xl mx-auto"
          >
            <img
              src="/assets/elements/highlighter3.webp"
              alt=""
              className="left-1/2 top-12 w-2/3 sm:w-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply absolute"
            />

            {/* Heading Text */}
            {contact.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-xl leading-relaxed mt-24 opacity-70 text-base md:text-lg text-center mx-auto"
            style={{ color: "var(--color-brand-text)" }}
          >

            {/* Intro Text */}
            {contact.intro}{" "}
            <a
              href={linkedIn!.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              LinkedIn-Profil
            </a>{" "}
            {contact.introAfterLinkedIn}
          </motion.p>

          {/* Kontaktzettel */}
          <div className="relative mt-20  bg-transparent max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="relative mx-auto block w-full max-w-[18rem] overflow-visible text-left"
              >
                <motion.img
                  src="/assets/doodles/doodle-papierflieger.png"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-44 lg:-right-64 -top-32 lg:-top-40 hidden w-40 lg:w-48 -translate-y-1/2 md:block  "
                  style={{ filter: "url(#paperplane-dilate)" }}
                  animate={{
                    x: [-3, 3, -3],
                    y: [6, -4, 6],
                    rotate: [9, 12, 9],
                    // opacity: [0, 1, 1, 1],
                  }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.15, 0.85, 1],
                  }}
                />

                <div className="absolute -top-6 left-1/2 z-20 -translate-x-1/2 -rotate-[24deg]">
                  <img
                    src="/assets/doodles/doodle-paperclip.webp"
                    alt=""
                    className="w-16 object-contain opacity-95"
                    aria-hidden="true"
                  />
                </div>

                {/* Notizzettel-Image */}
                <img
                  src={contact.imageSrc}
                  alt={contact.imageAlt || ""}
                  className="block h-auto w-full object-contain pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-[13%] bottom-[11%] top-[13%] z-10 flex flex-col gap-2">
                  <img className="my-7" src={contact.name} alt={contact.nameAlt || ""} />
                  <p
                    className="text-sm font-medium uppercase tracking-[0.1em] whitespace-pre-line opacity-60"
                    style={{ color: "var(--color-brand-text)" }}
                  >
                    {contact.role}
                  </p>
                  <div className="mt-[18.7px] h-px w-full " />
                  <div className="opacity-70">
                    <p>
                      {contact.location}
                    </p>
                    <p>
                      {contact.email}
                    </p>
                    <p>
                      {contact.mobile}
                    </p>
                  </div>
                  <a href={contact.bookingLink} target="_blank" rel="noopener noreferrer"
                    className="mt-[50px] opacity-70 text-right underline underline-offset-4"
                  >
                    {contact.bookingText}
                  </a>
                  <img src="/assets/doodles/doodle-smiley.png" rel="noopener noreferrer" alt="hidden" className="w-8 self-end" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Nachricht-Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-24 mx-auto text-center"
          >
            <a
              href={contact.mailtoHref}
              className="inline-block bg-[var(--color-brand-yellow)] text-[var(--color-brand-black)] font-medium px-8 py-4 tracking-wide hover:brightness-110 transition-all"
            >
              Nachricht schreiben
            </a>
          </motion.div>
        </div>
      </section>
      <video
        src="/assets/doodles/doodle-coffee.mp4"
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 left-1/2 z-50 w-44 -translate-x-1/2"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
}
