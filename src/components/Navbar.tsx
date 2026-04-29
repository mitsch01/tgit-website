import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { siteData } from "../data/siteData";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const isHome = location.pathname === "/";
  const isLight = !isHome || scrolled || menuOpen;
  const menuBarColor = isLight ? "bg-[var(--color-brand-black)]" : "bg-white";
  const menuBarBaseClass =
    "block h-1 w-8 transition-all duration-300 sm:h-[5px] sm:w-9";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY < 80) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY + 4) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);

    if (!isHome) {
      navigate(`/${href}`);
      return;
    }

    setTimeout(() => {
      const target = document.querySelector(href);
      if (!target) return;
      if (href === "#leistungen") {
        const top = target.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 320);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible || menuOpen ? "translate-y-0" : "-translate-y-full"
      } ${scrolled || isLight ? "bg-[var(--color-brand-white)] shadow-sm" : "bg-transparent"}`}
    >
      <nav className="relative min-w-0 px-2 pr-12 sm:px-6 sm:pr-16 md:px-10 md:pr-20">
        {/* Logo */}
        <img
          src={
            isLight ? siteData.nav["logo-black"] : siteData.nav["logo-white"]
          }
          className={`h-auto object-contain transition-opacity duration-300 w-36 lg:w-48 ${isLight ? "opacity-100" : "opacity-20"}`}
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        ></img>

        {/* Menu Closed */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute right-8 top-12 md:top-14 lg:top-20 flex -translate-y-1/2 flex-col cursor-pointer gap-1.5 px-2"
          aria-label="Menü öffnen"
        >
          <span
            className={`${menuBarBaseClass} ${menuBarColor} ${menuOpen ? "rotate-45 translate-y-[11px]" : ""}`}
          />
          <span
            className={`${menuBarBaseClass} ${menuBarColor} ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`${menuBarBaseClass} ${menuBarColor} ${menuOpen ? "-rotate-45 -translate-y-[11px]" : ""}`}
          />
        </button>
      </nav>

      {/* Menu Open */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[var(--color-brand-black)]"
          >
            <ul className="px-6 py-6 flex flex-col gap-6 items-end">
              {siteData.nav.links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-heading text-2xl text-[var(--color-brand-white)] cursor-pointer"
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
