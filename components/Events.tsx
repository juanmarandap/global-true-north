"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, MapPin, Calendar, CalendarDays } from "lucide-react";
import Image from "next/image";

const dots = [
  { top: "18%",    left: "6%",    size: 4, delay: 0   },
  { top: "70%",    left: "4%",    size: 3, delay: 1.1 },
  { top: "35%",    right: "4%",   size: 5, delay: 0.5 },
  { bottom: "20%", right: "7%",   size: 3, delay: 1.6 },
];

export default function Events() {
  const refHero = useRef(null);
  const refGrid = useRef(null);

  const inHero = useInView(refHero, { once: false, margin: "-60px" });
  const inGrid = useInView(refGrid, { once: true,  margin: "-80px" });

  return (
    <>
      {/* ── HERO ── */}
      <section
        ref={refHero}
        className="relative overflow-hidden bg-white"
      >
        {/* Subtle radial background accents */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(124,58,237,0.07),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(37,99,235,0.05),_transparent_50%)]" />

        {/* Floating dots */}
        {dots.map((d, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -12, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4 + i * 0.9, repeat: Infinity, ease: "easeInOut", delay: d.delay }}
            className="absolute rounded-full bg-[#7c3aed] pointer-events-none"
            style={{ width: d.size, height: d.size, top: d.top, left: (d as any).left, right: (d as any).right, bottom: (d as any).bottom }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div className="flex flex-col items-start">

            {/* Label */}
            <motion.p
              animate={inHero ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-[#7c3aed] mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Próximos
            </motion.p>

            {/* Title */}
            <motion.h1
              animate={inHero ? { opacity: 1, y: 0 } : { opacity: 0, y: 44 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl sm:text-7xl lg:text-[6.5rem] font-bold text-[#0f172a] leading-[0.95] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Eventos
            </motion.h1>

            {/* Divider */}
            <motion.div
              animate={inHero ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left h-px w-12 bg-[#7c3aed]/40 mb-6"
            />

            <motion.p
              animate={inHero ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-[#64748b] text-base sm:text-lg max-w-sm leading-relaxed"
            >
              Descubre lo que viene y únete a los momentos que importan.
            </motion.p>
          </div>

          {/* Right — event photo */}
          <motion.div
            animate={inHero ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Subtle glow behind image */}
            <div className="absolute inset-6 rounded-3xl bg-[#7c3aed]/10 blur-2xl -z-10" />

            {/* Floating image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-[#e2e8f0]"
            >
              <Image
                src="/images/event-photo2.jpg"
                alt="Global True North — Evento"
                fill
                className="object-cover"
                priority
              />
              {/* Very light vignette only at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full border border-dashed border-[#7c3aed]/25 pointer-events-none"
            />
          </motion.div>
        </div>
      </section>

      {/* ── EVENTS GRID ── */}
      <section ref={refGrid} className="bg-white pt-4 pb-20 lg:pt-6 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Ver todos */}
          <div className="flex justify-end mb-8">
            <motion.a
              animate={inGrid ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="https://www.globaltruenorth.com.mx/en/event"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden sm:flex items-center gap-1.5 text-[#2563eb] font-semibold text-sm hover:gap-2.5 transition-all shrink-0"
            >
              Ver todos
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {/* The Moonshot Experience */}
            <motion.a
              animate={inGrid ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              href="/events/the-moonshot-experience"
              className="group block rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-sm hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-[#1e1b4b]">
                <Image
                  src="/images/moonshot-logo.png"
                  alt="The Moonshot Experience"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ objectPosition: "35% center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f6e]/80 via-[#0f1f6e]/10 to-transparent" />

                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 pointer-events-none" />

                <div className="absolute top-4 right-4 bg-[#7c3aed] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  Silicon Valley
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 z-10">
                  <p className="text-white font-bold text-lg leading-snug" style={{ fontFamily: "var(--font-montserrat)" }}>
                    The Moonshot Experience
                  </p>
                </div>
              </div>

              {/* Card body */}
              <div className="bg-white px-5 py-5">
                <div className="flex flex-col gap-2 mb-5">
                  <div className="flex items-center gap-2 text-[#64748b] text-sm">
                    <CalendarDays size={13} className="text-[#2563eb] shrink-0" />
                    <span>Agosto 31</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#64748b] text-sm">
                    <Clock size={13} className="text-[#7c3aed] shrink-0" />
                    <span>8:00 AM · America/Los Angeles</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#64748b] text-sm">
                    <MapPin size={13} className="text-[#d946ef] shrink-0" />
                    <span>Stanford, Silicon Valley</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[#2563eb] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Ver evento
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.a>

            {/* Placeholder cards */}
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                animate={inGrid ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.7, delay: 0.22 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-dashed border-[#e2e8f0] bg-[#f8fafc] flex flex-col items-center justify-center min-h-[340px] gap-4 relative overflow-hidden"
              >
                <motion.div
                  animate={{ scale: [1, 1.6, 1], opacity: [0.03, 0.08, 0.03] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.9 }}
                  className="absolute w-52 h-52 rounded-full bg-[#7c3aed] pointer-events-none"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10 + i * 4, repeat: Infinity, ease: "linear" }}
                  className="w-14 h-14 rounded-full border-2 border-dashed border-[#d1d5db] flex items-center justify-center relative z-10"
                >
                  <Calendar size={20} className="text-[#cbd5e1]" />
                </motion.div>
                <p className="text-[#94a3b8] text-sm font-medium tracking-wide relative z-10"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  Próximamente
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile ver todos */}
          <div className="sm:hidden mt-10 text-center">
            <a
              href="https://www.globaltruenorth.com.mx/en/event"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[#2563eb] font-semibold text-sm"
            >
              Ver todos los eventos
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
