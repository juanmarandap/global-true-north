"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const T = {
  es: {
    lines: [
      ["Conecta", "con", "el", "futuro"],
      ["desde", "donde", "se", "crea"],
    ],
    subtitle: "Una experiencia inmersiva de innovación, liderazgo y conexiones reales con el ecosistema de Silicon Valley que está transformando el mundo.",
    cta: "Quiero saber más",
  },
  en: {
    lines: [
      ["Connect", "with", "the", "future"],
      ["from", "where", "it's", "created"],
    ],
    subtitle: "An immersive experience of innovation, leadership and real connections with the Silicon Valley ecosystem that is transforming the world.",
    cta: "I want to know more",
  },
};

const dots = [
  { top: "15%",    left: "5%",   size: 5, delay: 0   },
  { top: "70%",    left: "3%",   size: 3, delay: 1.2 },
  { top: "30%",    right: "4%",  size: 4, delay: 0.6 },
  { bottom: "20%", right: "6%",  size: 6, delay: 1.8 },
];

export default function SiliconValleyHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section ref={ref} className="relative min-h-[600px] sm:min-h-[680px] flex items-center overflow-hidden">

      {/* Full-bleed image — snaps in */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15, delay: 0.05 }}
      >
        <Image
          src="/images/sv-microsoft.jpg"
          alt="Global True North en Microsoft Silicon Valley"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle dark scrim for text readability only */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </motion.div>

      {/* Floating dots */}
      {dots.map((d, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: d.delay }}
          className="absolute rounded-full bg-[#f59e0b] pointer-events-none z-10"
          style={{ width: d.size, height: d.size, top: d.top, left: d.left, right: d.right, bottom: d.bottom }}
        />
      ))}

      {/* Centered content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 w-full py-24 flex flex-col items-center text-center">

        {/* Title — line-by-line curtain reveal */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-7 leading-[1.08]"
          style={{ fontFamily: "var(--font-montserrat)", letterSpacing: "-0.02em" }}
        >
          {t.lines.map((line, li) => (
            <div key={li} className="overflow-hidden block">
              <motion.div
                initial={{ y: "110%" }}
                animate={inView ? { y: "0%" } : { y: "110%" }}
                transition={{ duration: 0.75, delay: li * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="flex justify-center gap-x-4 flex-wrap"
              >
                {line.map((word, wi) => (
                  <span key={wi}>{word}</span>
                ))}
              </motion.div>
            </div>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
          className="text-white/85 text-lg sm:text-xl mb-11 max-w-xl leading-relaxed font-light"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {t.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.a
          href="/en/contactus"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center px-10 py-4 rounded-lg bg-white text-[#4c1d95] font-semibold text-sm tracking-wide hover:bg-gray-50 transition-colors shadow-xl"
          style={{ fontFamily: "var(--font-montserrat)", letterSpacing: "0.04em" }}
        >
          {t.cta}
        </motion.a>

      </div>
    </section>
  );
}
