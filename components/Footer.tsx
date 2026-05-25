"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowRight, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const T = {
  es: {
    navLinks: [
      { label: "Inicio",         href: "/"               },
      { label: "Events",         href: "/events"         },
      { label: "Silicon Valley", href: "/silicon-valley" },
      { label: "Blog",           href: "/blog"           },
      { label: "Acerca de",      href: "/acerca-de"      },
    ],
    tagline: "Un espacio global donde líderes, emprendedores y creadores se conectan para intercambiar ideas y generar impacto.",
    contact: "Contáctanos",
    navigation: "Navegación",
    contactSection: "Contacto",
    rights: "Todos los derechos reservados.",
    langLabel: "Español (América Latina)",
    modalTitle: "¿Cómo prefieres contactarnos?",
    modalSub: "Elige tu canal preferido",
  },
  en: {
    navLinks: [
      { label: "Home",           href: "/"               },
      { label: "Events",         href: "/events"         },
      { label: "Silicon Valley", href: "/silicon-valley" },
      { label: "Blog",           href: "/blog"           },
      { label: "About",          href: "/acerca-de"      },
    ],
    tagline: "A global space where leaders, entrepreneurs and creators connect to exchange ideas and generate impact.",
    contact: "Contact us",
    navigation: "Navigation",
    contactSection: "Contact",
    rights: "All rights reserved.",
    langLabel: "English (US)",
    modalTitle: "How would you prefer to contact us?",
    modalSub: "Choose your preferred channel",
  },
};

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
  const [showContact, setShowContact] = useState(false);
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <>
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
                  {t.tagline}
                </p>
                <button
                  onClick={() => setShowContact(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563eb] text-white font-bold text-sm hover:bg-[#1d4ed8] transition-all shadow-sm hover:shadow-md mb-6"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {t.contact}
                </button>
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
                  {t.navigation}
                </h4>
                <ul className="space-y-3">
                  {t.navLinks.map((l) => (
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
                  {t.contactSection}
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
              © {new Date().getFullYear()} Global True North. {t.rights}
            </p>
            <div className="flex items-center gap-3 text-[#94a3b8] text-xs">
              <span>{t.langLabel}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContact && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(15,31,110,0.45)", backdropFilter: "blur(4px)" }}
          onClick={() => setShowContact(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl"
          >
            <button
              onClick={() => setShowContact(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[#94a3b8] hover:bg-[#f1f5f9] hover:text-[#1e293b] transition-colors"
            >
              <X size={16} />
            </button>

            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#7c3aed]"
              style={{ fontFamily: "var(--font-montserrat)" }}>
              {t.contactSection}
            </p>
            <h3 className="mb-1 text-xl font-bold text-[#1e293b]"
              style={{ fontFamily: "var(--font-montserrat)" }}>
              {t.modalTitle}
            </h3>
            <p className="mb-6 text-sm text-[#94a3b8]">{t.modalSub}</p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:contacto@globaltruenorth.com.mx"
                className="group flex items-center gap-4 rounded-xl border border-[#e2e8f0] p-4 transition-all hover:border-[#7c3aed]/40 hover:bg-[#f8f4ff]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0eaff]">
                  <Mail size={18} className="text-[#7c3aed]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1e293b]">Email</p>
                  <p className="text-xs text-[#94a3b8]">contacto@globaltruenorth.com.mx</p>
                </div>
                <ArrowRight size={14} className="ml-auto text-[#cbd5e1] group-hover:text-[#7c3aed] transition-colors" />
              </a>

              <a
                href="https://wa.me/524775819608?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Global%20True%20North"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-[#e2e8f0] p-4 transition-all hover:border-[#25d366]/50 hover:bg-[#f0fdf4]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dcfce7]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25d366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1e293b]">WhatsApp</p>
                  <p className="text-xs text-[#94a3b8]">+52 (477) 581 9608</p>
                </div>
                <ArrowRight size={14} className="ml-auto text-[#cbd5e1] group-hover:text-[#25d366] transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
