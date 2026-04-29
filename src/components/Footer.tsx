import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";

const { footer } = siteData;

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-black)] text-white px-6 md:px-16 py-16">
      <div className="flex flex-col items-center gap-10">
        {/* Brand-Schriftzug */}
        <img src={footer.logo} width={200} alt="Footer Logo" className="mb-4" />

        {/* Social Icon */}
        <div className="flex gap-4">
          {footer.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <img src={link.logo} alt={link.label} className="h-10" />
            </a>
          ))}
        </div>

        {/* Legal Links */}
        <div className="flex gap-6 text-xs text-white/70">
          {footer.legal.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="hover:text-white/90 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Credit */}
        <p className="text-xs text-white/40">{footer.credit}</p>
      </div>
    </footer>
  );
}
