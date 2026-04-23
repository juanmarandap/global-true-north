"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "20+",  label: "Viajes empresariales\na Silicon Valley" },
  { value: "9+",   label: "Años conectando\nlíderes con Silicon Valley" },
  { value: "400+", label: "Empresarios que han\nvivido la experiencia" },
];

export default function HomeIntro() {
  const refA = useRef(null);
  const refC = useRef(null);
  const inA = useInView(refA, { once: false, margin: "-60px" });
  const inC = useInView(refC, { once: false, margin: "-60px" });

  return (
    <>
      {/* ── 1. STATEMENT — texto real del sitio GTN ── */}
      <section ref={refA} className="bg-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[560px] h-[560px] opacity-[0.045] pointer-events-none select-none">
          <Image src="/images/gtn-circle2.png" alt="" fill className="object-contain spin-slow" />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 relative z-10">
          <motion.p
            animate={inA ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[#4c1d95] text-xs font-bold tracking-[0.25em] uppercase mb-8"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Global True North
          </motion.p>

          <div className="max-w-4xl">
            {[
              "Creamos experiencias inmersivas",
              "que transforman la manera en la que",
              "las personas piensan, lideran y construyen el futuro.",
            ].map((line, i) => (
              <motion.h2
                key={i}
                animate={inA ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
                transition={{ duration: 0.7, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                className={`block text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-1 ${
                  i === 2 ? "text-primary-gradient" : "text-[#1e293b]"
                }`}
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {line}
              </motion.h2>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-end gap-8">
            <motion.p
              animate={inA ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="text-[#64748b] text-base leading-relaxed max-w-xl"
            >
              Fundada en 2015 por Lucila Padilla Padilla, una emprendedora y líder comprometida con la creación de un mundo mejor y más equitativo.
            </motion.p>
            <motion.div
              animate={inA ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
              className="shrink-0"
            >
              <Link href="/acerca-de"
                className="group inline-flex items-center gap-2 text-[#4c1d95] font-bold text-sm hover:gap-3 transition-all"
                style={{ fontFamily: "var(--font-montserrat)" }}>
                Conoce más
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS reales del sitio GTN ── */}
      <section ref={refC} className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f1f6e 0%, #2d1b8e 45%, #4c1d95 100%)" }}>
        <div className="absolute -left-40 -bottom-40 w-[520px] h-[520px] opacity-[0.06] pointer-events-none select-none">
          <Image src="/images/gtn-circle2.png" alt="" fill className="object-contain spin-slow" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                animate={inC ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{ duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-center py-10 sm:py-0 px-6"
              >
                <p className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  {s.value}
                </p>
                <p className="text-white/50 text-sm uppercase tracking-widest whitespace-pre-line leading-relaxed">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
