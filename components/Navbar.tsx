"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const LINKS = {
  es: [
    { label: "Inicio",         href: "/"               },
    { label: "Events",         href: "/events"         },
    { label: "Silicon Valley", href: "/silicon-valley" },
    { label: "Speakers",       href: "/speakers"       },
    { label: "Blog",           href: "/blog"           },
    { label: "Acerca de",      href: "/acerca-de"      },
  ],
  en: [
    { label: "Home",           href: "/"               },
    { label: "Events",         href: "/events"         },
    { label: "Silicon Valley", href: "/silicon-valley" },
    { label: "Speakers",       href: "/speakers"       },
    { label: "Blog",           href: "/blog"           },
    { label: "About",          href: "/acerca-de"      },
  ],
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, toggleLang } = useLanguage();
  const links = LINKS[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}>
      {/* Top bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-end h-9 gap-6">
          <a href="mailto:contacto@globaltruenorth.com.mx"
            className="flex items-center gap-1.5 text-xs text-[#64748b] hover:text-[#2563eb] transition-colors">
            <Mail size={12} />
            contacto@globaltruenorth.com.mx
          </a>
          <span className="text-gray-200">|</span>
          <a href="https://www.globaltruenorth.com.mx/web/login" target="_blank" rel="noopener noreferrer"
            className="text-xs text-[#64748b] hover:text-[#2563eb] transition-colors">
            Sign in
          </a>
          <span className="text-gray-200">|</span>
          <button
            onClick={toggleLang}
            className="text-xs text-[#64748b] hover:text-[#7c3aed] transition-colors cursor-pointer"
          >
            {lang === "es" ? "English (US)" : "Español"}
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          {/* Spinning circle */}
          <div className="relative w-10 h-10 shrink-0">
            <Image
              src="/images/gtn-circle2.png"
              alt=""
              fill
              className="object-contain spin-slow"
              priority
            />
          </div>
          {/* Text */}
          <div className="flex flex-col leading-none" style={{ fontFamily: "var(--font-montserrat)" }}>
            <span className="text-[15px] font-extrabold text-[#1e293b] tracking-wider uppercase">Global</span>
            <span className="text-[10px] font-semibold text-[#64748b] tracking-[0.18em] uppercase">True North</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href}
                className={`text-sm font-semibold transition-colors relative group ${active ? "text-[#4c1d95]" : "text-[#334155] hover:text-[#4c1d95]"}`}
                style={{ fontFamily: "var(--font-montserrat)" }}>
                {l.label}
                {/* Active underline */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#4c1d95] rounded transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            );
          })}
        </nav>


        <button className="lg:hidden text-[#334155] p-2" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <nav className="flex flex-col px-6 py-5 gap-4">
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className={`text-sm font-semibold transition-colors ${pathname === l.href ? "text-[#4c1d95]" : "text-[#334155] hover:text-[#4c1d95]"}`}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
