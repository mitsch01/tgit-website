import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { siteData } from "../data/siteData";

const { contact } = siteData;

const DIALOG_WIDTH = 220;
const DIALOG_HEIGHT = 132;
const DIALOG_OFFSET = 18;

function clampDialogPosition(x: number, y: number) {
  const maxX = Math.max(16, window.innerWidth - DIALOG_WIDTH - 16);
  const maxY = Math.max(16, window.innerHeight - DIALOG_HEIGHT - 16);

  return {
    x: Math.min(Math.max(x, 16), maxX),
    y: Math.min(Math.max(y, 16), maxY),
  };
}

function escapeVCardValue(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

function createVCard() {
  const nameParts = contact.name.trim().split(/\s+/);
  const familyName =
    nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
  const givenName = nameParts.slice(0, -1).join(" ") || nameParts[0] || "";
  const website = "https://www.tgit.team";

  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escapeVCardValue(contact.name)}`,
    `N:${escapeVCardValue(familyName)};${escapeVCardValue(givenName)};;;`,
    `TITLE:${escapeVCardValue(contact.role.replace(/\n/g, " "))}`,
    `EMAIL;TYPE=INTERNET,WORK:${escapeVCardValue(contact.email)}`,
    `TEL;TYPE=CELL,VOICE:${escapeVCardValue(contact.mobile.replace(/\s+/g, ""))}`,
    `ADR;TYPE=WORK:;;${escapeVCardValue(contact.location)};;;;`,
    `URL:${website}`,
    `NOTE:${escapeVCardValue(contact.role.replace(/\n/g, " "))}`,
    "END:VCARD",
  ].join("\n");
}

export default function Contact() {
  const controls = useAnimationControls();
  const prefersReducedMotion = useReducedMotion();
  const noteRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const saveButtonRef = useRef<HTMLButtonElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogPosition, setDialogPosition] = useState({ x: 32, y: 32 });
  const [isDownloading, setIsDownloading] = useState(false);

  const fileName = useMemo(
    () =>
      `${contact.name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z-]/g, "")}-tgit.vcf`,
    [],
  );

  useEffect(() => {
    controls.set({
      x: 0,
      y: 0,
      rotate: 7,
      scale: 1,
      boxShadow: "none",
    });
  }, [controls]);

  useEffect(() => {
    if (!isDialogOpen) {
      return undefined;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (
        dialogRef.current?.contains(target) ||
        noteRef.current?.contains(target)
      ) {
        return;
      }

      setIsDialogOpen(false);
      if (!prefersReducedMotion) {
        void controls.start({
          x: 0,
          y: 0,
          rotate: 7,
          scale: 1,
          boxShadow: "none",
          transition: { duration: 0.28, ease: "easeOut" },
        });
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setIsDialogOpen(false);
      if (!prefersReducedMotion) {
        void controls.start({
          x: 0,
          y: 0,
          rotate: 7,
          scale: 1,
          boxShadow: "none",
          transition: { duration: 0.28, ease: "easeOut" },
        });
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [controls, isDialogOpen, prefersReducedMotion]);

  useEffect(() => {
    if (!isDialogOpen) {
      return;
    }

    saveButtonRef.current?.focus();
  }, [isDialogOpen]);

  const closeDialog = () => {
    setIsDialogOpen(false);

    if (prefersReducedMotion) {
      return;
    }

    void controls.start({
      x: 0,
      y: 0,
      rotate: 7,
      scale: 1,
      boxShadow: "none",
      transition: { duration: 0.28, ease: "easeOut" },
    });
  };

  const openDialog = async (clientX?: number, clientY?: number) => {
    const rect = noteRef.current?.getBoundingClientRect();
    const originX =
      clientX && clientX > 0
        ? clientX
        : rect
          ? rect.left + rect.width * 0.68
          : 160;
    const originY =
      clientY && clientY > 0
        ? clientY
        : rect
          ? rect.top + rect.height * 0.28
          : 160;

    setDialogPosition(
      clampDialogPosition(originX + DIALOG_OFFSET, originY - DIALOG_HEIGHT / 2),
    );

    if (!prefersReducedMotion) {
      await controls.start({
        x: [0, -14, 18],
        y: [0, -12, -4],
        rotate: [7, 4, 5],
        scale: [1, 1.03, 1.02],
        boxShadow: ["none", "none", "none"],
        transition: {
          duration: 0.42,
          times: [0, 0.34, 1],
          ease: "easeOut",
        },
      });
    }

    setIsDialogOpen(true);
  };

  const handleSaveContact = async () => {
    setIsDownloading(true);

    const blob = new Blob([createVCard()], {
      type: "text/vcard;charset=utf-8",
    });
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(downloadUrl);

    if (!prefersReducedMotion) {
      await controls.start({
        x: [18, 26, 0],
        y: [-4, -18, 0],
        rotate: [5, 2, 7],
        scale: [1.02, 1.04, 1],
        boxShadow: ["none", "none", "none"],
        transition: {
          duration: 0.44,
          times: [0, 0.42, 1],
          ease: "easeOut",
        },
      });
    }

    setIsDownloading(false);
    setIsDialogOpen(false);
  };

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
          className="relative font-heading text-4xl font-bold text-center md:text-5xl mx-auto"
        >
          <img
            src="/assets/highlighter3.png"
            alt=""
            className="absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
          />
          {contact.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-xl leading-relaxed mt-32 opacity-70 text-base md:text-lg text-center mx-auto"
          style={{ color: "var(--color-brand-text)" }}
        >
          {contact.intro}
        </motion.p>

        <div className="relative mt-20 md:grid md:grid-cols-2 md:items-start bg-transparent">
          <div className="hidden md:block" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative  md:justify-self-end"
          >
            <motion.button
              ref={noteRef}
              type="button"
              animate={controls}
              initial={false}
              whileHover={
                isDialogOpen || prefersReducedMotion
                  ? undefined
                  : {
                      y: -6,
                      rotate: 5.8,
                      scale: 1.01,
                      boxShadow: "none",
                      transition: { duration: 0.1, ease: "easeOut" },
                    }
              }
              onHoverEnd={() => {
                if (isDialogOpen || prefersReducedMotion) {
                  return;
                }

                void controls.start({
                  x: 0,
                  y: 0,
                  rotate: 7,
                  scale: 1,
                  boxShadow: "none",
                  transition: { duration: 0.1, ease: "easeOut" },
                });
              }}
              onClick={(event) => {
                if (!isDialogOpen) {
                  void openDialog(event.clientX, event.clientY);
                }
              }}
              aria-expanded={isDialogOpen}
              aria-controls="contact-save-dialog"
              aria-label="Kontakt als vCard speichern"
              className="relative mx-auto block w-full max-w-[18rem] cursor-pointer overflow-visible text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-black)] focus-visible:ring-offset-4"
              style={{ transformOrigin: "18% 8%" }}
            >
              <div className="absolute -top-2 left-[52%] z-20 h-8 w-36 -translate-x-1/2 -rotate-2">
                <img
                  src="/assets/pin-black.png"
                  alt=""
                  className="h-full w-full object-contain opacity-95"
                  aria-hidden="true"
                />
              </div>

              <img
                src={contact.imageSrc}
                alt={contact.imageAlt || ""}
                className="block h-auto w-full object-contain pointer-events-none"
                aria-hidden="true"
              />

              <div className="absolute inset-x-[13%] bottom-[11%] top-[13.5%] z-10 flex flex-col gap-2">
                <p className="font-heading text-2xl mb-4">{contact.name}</p>
                <p
                  className="text-sm font-medium uppercase tracking-[0.24em] whitespace-pre-line opacity-60"
                  style={{ color: "var(--color-brand-text)" }}
                >
                  {contact.role}
                </p>
                <div className="my-[18.5px] h-px w-full" />
                <p
                  className="text-sm opacity-70"
                  style={{ color: "var(--color-brand-text)" }}
                >
                  {contact.location}
                </p>
                <p className="text-sm leading-[0.1em]">
                  <span
                    className="mr-2 text-xs uppercase tracking-[0.2em]  opacity-50"
                    style={{ color: "var(--color-brand-text)" }}
                  >
                    E-Mail
                  </span>
                  <span className="underline decoration-[rgba(15,15,15,0.26)] underline-offset-2">
                    {contact.email}
                  </span>
                </p>
                <p className="text-sm leading-[0.1em]">
                  <span
                    className="mr-2 text-xs uppercase tracking-[0.22em]  opacity-50"
                    style={{ color: "var(--color-brand-text)" }}
                  >
                    Mobile
                  </span>
                  <span>{contact.mobile}</span>
                </p>
                <p
                  className="mt-[50px] pt-5 text-xs uppercase tracking-[0.28em] opacity-55"
                  style={{ color: "var(--color-brand-text)" }}
                >
                  Klick to save contact
                </p>
              </div>
            </motion.button>

            <motion.div
              id="contact-save-dialog"
              ref={dialogRef}
              initial={false}
              animate={{
                opacity: isDialogOpen ? 1 : 0,
                scale: isDialogOpen ? 1 : 0.92,
                pointerEvents: isDialogOpen ? "auto" : "none",
              }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              role="dialog"
              aria-modal="false"
              aria-label="Kontakt speichern"
              className="fixed z-30 w-[220px] rounded-[1.25rem] border border-[rgba(15,15,15,0.1)] bg-[rgba(255,255,255,0.96)] p-4 shadow-[0_22px_50px_rgba(15,15,15,0.18)] backdrop-blur-sm"
              style={{ top: dialogPosition.y, left: dialogPosition.x }}
            >
              <button
                type="button"
                onClick={closeDialog}
                aria-label="Dialog schliessen"
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-base text-[var(--color-brand-text)]/70 transition-colors hover:bg-[rgba(15,15,15,0.06)] hover:text-[var(--color-brand-black)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-black)]"
              >
                x
              </button>

              <p className="pr-8 font-heading text-xl">Kontakt speichern</p>
              <p
                className="mt-2 text-sm leading-relaxed opacity-70"
                style={{ color: "var(--color-brand-text)" }}
              >
                Lade dir meine Kontaktdaten als vCard herunter.
              </p>

              <button
                ref={saveButtonRef}
                type="button"
                onClick={() => {
                  void handleSaveContact();
                }}
                disabled={isDownloading}
                className="mt-4 inline-flex items-center rounded-full bg-[var(--color-brand-yellow)] px-4 py-2 text-sm font-medium text-[var(--color-brand-black)] transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-black)] disabled:cursor-wait disabled:opacity-70"
              >
                {isDownloading ? "Speichert..." : "Speichern"}
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-24 mx-auto text-center"
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
