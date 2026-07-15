import { Link, useNavigate } from "react-router-dom";
import { siteData } from "../data/siteData";


const { footer } = siteData;

export default function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  return (
    <footer className="relative bg-[var(--color-brand-black)] text-white px-6 md:px-16 py-16">
      <div className="flex flex-col items-center gap-10">
        {/* Brand-Schriftzug */}
        <img
          src={footer.logo}
          width={200}
          alt="Footer Logo"
          className="mb-4 cursor-pointer"
          onClick={handleLogoClick}
        />

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
        <div className="flex gap-6 text-xs text-white/90">
          {footer.legal.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Credit */}
        <p className="text-xs text-white/60">{footer.credit}</p>
      </div>
      <img
        src="/assets/doodles/doodle-lightbulb.png"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute right-1 top-20 w-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none invert"
      />
    </footer>
  );
}
