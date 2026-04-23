import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const navLinks = [
  { label: "Inicio",         href: "/"               },
  { label: "Events",         href: "/events"         },
  { label: "Silicon Valley", href: "/silicon-valley" },
  { label: "Blog",           href: "/blog"           },
  { label: "Acerca de",      href: "/acerca-de"      },
];

const social = [
  {
    label: "Facebook",
    href: "https://www.globaltruenorth.com.mx/en/website/social/facebook",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.globaltruenorth.com.mx/en/website/social/instagram",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.globaltruenorth.com.mx/en/website/social/linkedin",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative">
      {/* Main footer — light gray */}
      <div className="bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            {/* Brand */}
            <div>
              <div className="relative w-36 h-9 mb-5">
                <Image src="/images/logo.png" alt="Global True North" fill className="object-contain object-left" />
              </div>
              <p className="text-[#64748b] text-sm leading-relaxed max-w-xs mb-5">
                Un espacio global donde líderes, emprendedores y creadores se conectan para intercambiar ideas y generar impacto.
              </p>
              <a href="mailto:contacto@globaltruenorth.com.mx"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563eb] text-white font-bold text-sm hover:bg-[#1d4ed8] transition-all shadow-sm hover:shadow-md mb-6"
                style={{ fontFamily: "var(--font-montserrat)" }}>
                Contáctanos
              </a>
              <div className="flex items-center gap-2.5">
                {social.map(({ svg, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-8 h-8 rounded-full border border-[#e2e8f0] bg-white flex items-center justify-center text-[#64748b] hover:text-[#2563eb] hover:border-[#2563eb]/30 transition-all shadow-sm">
                    {svg}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div>
              <h4 className="text-[#1e293b] font-bold text-sm uppercase tracking-widest mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
                Navegación
              </h4>
              <ul className="space-y-3">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[#64748b] text-sm hover:text-[#2563eb] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#1e293b] font-bold text-sm uppercase tracking-widest mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
                Contacto
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:contacto@globaltruenorth.com.mx"
                    className="flex items-start gap-2.5 text-[#64748b] text-sm hover:text-[#2563eb] transition-colors">
                    <Mail size={14} className="text-[#2563eb] mt-0.5 shrink-0" />
                    contacto@globaltruenorth.com.mx
                  </a>
                </li>
                <li>
                  <a href="tel:+524775819608"
                    className="flex items-center gap-2.5 text-[#64748b] text-sm hover:text-[#d946ef] transition-colors">
                    <Phone size={14} className="text-[#d946ef] shrink-0" />
                    +52 (477) 581 9608
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar — dark */}
      <div className="bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#94a3b8] text-xs">
            © {new Date().getFullYear()} Global True North. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3 text-[#94a3b8] text-xs">
            <span>English (US)</span>
            <span className="opacity-40">|</span>
            <span>Español (América Latina)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
