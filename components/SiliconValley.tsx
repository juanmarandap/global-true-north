"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const stats = [
  { value: "20+", label: "Más de 20 viajes", sub: "Viajes empresariales exitosos a Silicon Valley" },
  { value: "9+", label: "9 años de experiencia", sub: "Conectando a líderes con Silicon Valley" },
  { value: "400+", label: "Más de 400 empresarios", sub: "Que han vivido la experiencia con nosotros" },
];

const includes = [
  { emoji: "✨", title: "Visitas privadas", description: "Acceso a gigantes tecnológicos, aceleradoras globales y centros de innovación de clase mundial" },
  { emoji: "🤝", title: "Encuentros estratégicos", description: "Conexiones con VCs, founders y líderes de innovación" },
  { emoji: "🧠", title: "Talleres 10X", description: "Aprende sobre Inteligencia Artificial, liderazgo consciente y mentalidad 10x" },
  { emoji: "🌟", title: "Networking transformador", description: "Espacios donde relaciones se convierten en alianzas estratégicas" },
];

const activities = [
  { emoji: "🏢", title: "Visitas privadas", description: "Accede a empresas líderes del ecosistema global de innovación" },
  { emoji: "🤝", title: "Encuentros estratégicos", description: "Conecta con VCs, fundadores y referentes de Silicon Valley" },
  { emoji: "🧠", title: "Talleres 10X", description: "Aprende de expertos de IA, liderazgo y pensamiento experiencial" },
  { emoji: "✨", title: "Reflexión transformadora", description: "Repiensa tu visión y estrategia en un entorno inspirador" },
];

export default function SiliconValley() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="silicon-valley" ref={ref} className="relative py-20 lg:py-28 bg-[#f8fafc]">
      {/* Yellow accent line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20">
        {/* Intro */}
        <div className="max-w-3xl">
          <motion.p custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-[#7c3aed] text-xs font-bold tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            Silicon Valley
          </motion.p>
          <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-3xl sm:text-4xl font-bold text-[#1e293b] leading-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            Conecta con el futuro desde donde se crea
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-[#64748b] text-lg leading-relaxed mb-7">
            Una experiencia inmersiva de innovación, liderazgo y conexiones reales con el ecosistema de Silicon Valley que está transformando el mundo.
          </motion.p>
          <motion.a custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            href="#contacto"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#7c3aed] text-white font-bold text-sm hover:bg-[#6d28d9] transition-all shadow-md hover:shadow-lg hover:scale-105"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            Quiero saber más
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* SV Experience + Stats */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-xl font-bold text-[#1e293b] mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
              The SV Experience
            </h3>
            <blockquote className="border-l-3 border-[#7c3aed] pl-5 mb-5">
              <p className="text-[#64748b] text-base leading-relaxed italic">
                "Una experiencia inmersiva diseñada para emprendedores, empresarios e inversionistas que buscan algo más que inspiración: buscan transformación."
              </p>
            </blockquote>
            <h4 className="text-[#1e293b] font-bold text-base mb-2">Conecta con el corazón de la innovación</h4>
            <p className="text-[#64748b] text-sm leading-relaxed">
              En Global True North conectamos a líderes con el corazón del ecosistema de Silicon Valley, brindándoles acceso exclusivo a empresas de vanguardia, mentes brillantes y tendencias que están redefiniendo el futuro.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} custom={i + 5} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="bg-white rounded-2xl p-5 text-center border border-[#e2e8f0] shadow-sm">
                <p className="text-3xl font-extrabold text-primary-gradient mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>{s.value}</p>
                <p className="text-[#1e293b] font-semibold text-xs mb-1">{s.label}</p>
                <p className="text-[#94a3b8] text-xs leading-snug">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lo que incluye */}
        <div>
          <motion.h3 custom={8} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-2xl font-bold text-[#1e293b] mb-8" style={{ fontFamily: "var(--font-montserrat)" }}>
            Lo que incluye la experiencia
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {includes.map((item, i) => (
              <motion.div key={item.title} custom={i + 9} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm hover:-translate-y-1 hover:border-[#7c3aed]/30 transition-all duration-300">
                <span className="text-2xl mb-3 block">{item.emoji}</span>
                <h4 className="text-[#1e293b] font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-[#64748b] text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Para quién + Qué hacemos */}
        <motion.div custom={13} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-xl font-bold text-[#1e293b] mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
              ¿Para quién es esta experiencia?
            </h3>
            <p className="text-[#64748b] leading-relaxed mb-5">
              Empresarios, fundadores, tomadores de decisiones y ejecutivos con visión global listos para su siguiente nivel.
            </p>
            <blockquote className="bg-white rounded-2xl p-5 border border-[#f59e0b]/30 border-l-4 border-l-[#f59e0b]">
              <p className="text-[#64748b] text-sm leading-relaxed italic">
                "Esta experiencia no está abierta al público en general. Cada edición es curada cuidadosamente para garantizar conversaciones, interacciones y networking de alto valor."
              </p>
            </blockquote>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1e293b] mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
              ¿Qué hacemos durante la experiencia?
            </h3>
            <div className="space-y-3">
              {activities.map((a, i) => (
                <motion.div key={a.title} custom={i + 14} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#e2e8f0]">
                  <span className="text-lg shrink-0">{a.emoji}</span>
                  <div>
                    <p className="text-[#1e293b] font-semibold text-sm mb-0.5">{a.title}</p>
                    <p className="text-[#64748b] text-xs leading-relaxed">{a.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div custom={18} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="bg-white rounded-2xl p-10 text-center max-w-2xl mx-auto border border-[#e2e8f0] shadow-sm">
          <div className="text-4xl text-[#7c3aed]/20 font-serif leading-none mb-3">&ldquo;</div>
          <p className="text-[#1e293b] text-lg font-semibold leading-relaxed">
            Aprendí más en este viaje que en años de universidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
