"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const words = ["Descubre", "eventos", "y", "experiencias", "únicas"];

const dots = [
  { top: "15%", left: "5%",   size: 5, delay: 0   },
  { top: "70%", left: "3%",   size: 3, delay: 1.2 },
  { top: "30%", right: "4%",  size: 4, delay: 0.6 },
  { bottom: "20%", right: "6%", size: 6, delay: 1.8 },
];

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <section id="inicio" ref={ref} className="relative pt-[100px] overflow-hidden">
      <div
        className="relative min-h-[500px] sm:min-h-[560px] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f5f0ff 0%, #ede9fe 55%, #faf5ff 100%)" }}
      >
        {/* Fade inferior para transición suave */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f8fafc] to-transparent z-10" />

        {/* Orbs morados difuminados */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.38, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] -translate-y-1/4 translate-x-1/4 rounded-full bg-[#a78bfa]/25 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="pointer-events-none absolute left-0 bottom-0 h-[380px] w-[380px] translate-y-1/3 -translate-x-1/4 rounded-full bg-[#c4b5fd]/20 blur-3xl"
        />

        {/* Floating dots */}
        {dots.map((d, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0], opacity: [0.25, 0.6, 0.25] }}
            transition={{ duration: 4 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: d.delay }}
            className="absolute rounded-full bg-[#7c3aed] pointer-events-none"
            style={{ width: d.size, height: d.size, top: (d as any).top, left: (d as any).left, right: (d as any).right, bottom: (d as any).bottom }}
          />
        ))}

        {/* Two-column layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — text */}
          <div className="flex flex-col items-start">
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-[#1e293b] leading-tight mb-5 flex flex-wrap gap-x-3 gap-y-1"
              style={{ fontFamily: "var(--font-montserrat)", letterSpacing: "-0.01em" }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 44 }}
                  transition={{ duration: 0.55, delay: i * 0.11, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="text-[#64748b] text-base sm:text-lg mb-9 max-w-md leading-relaxed font-normal"
            >
              Compra boletos para los mejores eventos de viajes y experiencias en un solo lugar
            </motion.p>

            <motion.a
              href="/events"
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.6, delay: 0.88, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center px-8 py-3 rounded-lg bg-[#7c3aed] text-white font-semibold text-sm hover:bg-[#6d28d9] transition-colors shadow-lg shadow-[#7c3aed]/30"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Explorar eventos
            </motion.a>
          </div>

          {/* Right — image */}
          <motion.div
            animate={inView
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 60, scale: 0.96 }
            }
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#e2e8f0]"
          >
            <Image
              src="/images/hero-event.jpg"
              alt="Global True North World Forum"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
