import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteData } from "../data/siteData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--color-brand-white)] shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <img
          src={siteData.nav.logo}
          width={240}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
        ></img>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {siteData.nav.links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="font-body text-xl font-semibold tracking-wide text-[var(--color-brand-text)] hover:text-[var(--color-brand-white)] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="md:invisible md:w-60 md:h-10" />

        {/* Mobile Burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Menü öffnen"
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--color-brand-black)] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-brand-black)] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-brand-black)] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--color-brand-white)] border-t border-gray-100"
          >
            <ul className="px-6 py-6 flex flex-col gap-6">
              {siteData.nav.links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-heading text-2xl text-[var(--color-brand-text)] cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
