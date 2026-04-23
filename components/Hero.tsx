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
      <div className="hero-gradient relative min-h-[500px] sm:min-h-[560px] flex items-center overflow-hidden">

        {/* Orbs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 -right-20 w-[360px] h-[360px] rounded-full bg-[#d946ef]/20 blur-3xl pointer-events-none"
        />

        {/* Floating dots */}
        {dots.map((d, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0], opacity: [0.4, 0.85, 0.4] }}
            transition={{ duration: 4 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: d.delay }}
            className="absolute rounded-full bg-[#f59e0b] pointer-events-none"
            style={{ width: d.size, height: d.size, top: d.top, left: d.left, right: d.right, bottom: d.bottom }}
          />
        ))}

        {/* Two-column layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — text */}
          <div className="flex flex-col items-start">
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-white leading-tight mb-5 flex flex-wrap gap-x-3 gap-y-1"
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
              className="text-white/75 text-base sm:text-lg mb-9 max-w-md leading-relaxed font-normal"
            >
              Compra boletos para los mejores eventos de viajes y experiencias en un solo lugar
            </motion.p>

            <motion.a
              href="/events"
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.6, delay: 0.88, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-[#4c1d95] font-semibold text-sm hover:bg-gray-50 transition-colors shadow-lg"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Explorar eventos
            </motion.a>
          </div>

          {/* Right — video clip */}
          <motion.div
            animate={inView
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 60, scale: 0.96 }
            }
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20"
          >
            <Image
              src="/images/hero-event.jpg"
              alt="Global True North World Forum"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#2d1b8e]/30 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
