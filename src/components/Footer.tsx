import { siteData } from '../data/siteData'

const { footer } = siteData

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-black)] text-white px-6 md:px-16 py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

        {/* Brand-Schriftzug */}
        <p className="font-brand text-4xl md:text-5xl leading-tight text-center whitespace-pre-line">
          {footer.logo}
        </p>

        {/* Social Icons ─────────────────────────────────────────────────────
            TODO: Ersetze die schwarzen Kreise durch echte Social-Icons (z.B.
            react-icons oder SVG-Assets). Aktuell als Platzhalter-Kreise.
        ──────────────────────────────────────────────────────────────────── */}
        <div className="flex gap-4">
          {footer.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-xs hover:bg-white/10 transition-colors"
            >
              {/* Platzhaler-Initiale – ersetzen durch echtes Icon */}
              {link.label[0]}
            </a>
          ))}
        </div>

        {/* Legal Links */}
        <div className="flex gap-6 text-xs text-white/40">
          {footer.legal.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white/70 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Credit */}
        <p className="text-xs text-white/25">{footer.credit}</p>
      </div>
    </footer>
  )
}
