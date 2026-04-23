"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";

const team = [
  { name: "Lucila Padilla", role: "CEO & Founder" },
  { name: "Lucila Laborde Padilla", role: "Community manager" },
  { name: "Krytzia Dabdoub", role: "Co-founder Silicon Valley Experience" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="acerca-de" ref={ref} className="relative py-20 lg:py-28 bg-[#f8fafc]">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
        {/* Intro */}
        <div className="max-w-3xl">
          <motion.p custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-[#7c3aed] text-xs font-bold tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            Acerca de
          </motion.p>
          <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-3xl sm:text-4xl font-bold text-[#1e293b] leading-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            Global True North
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-[#64748b] text-base leading-relaxed mb-3">
            Un espacio global dedicado al intercambio de ideas y experiencias entre líderes, emprendedores, empresarios y creadores que promueven la integración y el desarrollo a través de la innovación, la cultura y las artes.
          </motion.p>
          <motion.p custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-[#64748b] text-base leading-relaxed">
            Fundada en 2015 por <span className="text-[#1e293b] font-semibold">Lucila Padilla Padilla</span>, una emprendedora y líder comprometida con la creación de un mundo mejor y más equitativo.
          </motion.p>
        </div>

        {/* Misión + Experiencias */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="bg-white rounded-2xl p-7 border border-[#e2e8f0] shadow-sm">
            <div className="w-8 h-1 bg-[#2563eb] rounded mb-4" />
            <h3 className="text-[#1e293b] font-bold text-lg mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Misión</h3>
            <p className="text-[#64748b] text-sm leading-relaxed">
              Capacitar e inspirar a personas de todos los ámbitos de la vida para que alcancen su máximo potencial. Desde nuestra sede en México, impulsamos programas e iniciativas que fomentan la inclusión en diversos sectores, creando un impacto positivo y duradero en nuestras comunidades.
            </p>
          </motion.div>
          <motion.div custom={5} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="bg-white rounded-2xl p-7 border border-[#e2e8f0] shadow-sm">
            <div className="w-8 h-1 bg-[#d946ef] rounded mb-4" />
            <h3 className="text-[#1e293b] font-bold text-lg mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Experiencias y conexiones</h3>
            <p className="text-[#64748b] text-sm leading-relaxed mb-3">
              En Global True North, no solo organizamos eventos, creamos experiencias que inspiran. Somos expertos en la gestión de eventos, encargándonos de la logística y el ecosistema necesario para que cada encuentro sea un éxito.
            </p>
            <p className="text-[#64748b] text-sm leading-relaxed">
              Nuestra experiencia y dedicación nos permiten ofrecer oportunidades donde las ideas florecen y las conexiones se fortalecen.
            </p>
          </motion.div>
        </div>

        {/* Compromiso */}
        <motion.div custom={6} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="bg-white rounded-2xl p-7 border border-[#e2e8f0] border-l-4 border-l-[#f59e0b] shadow-sm">
          <h3 className="text-[#1e293b] font-bold text-lg mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
            Compromiso con la Innovación y el Desarrollo Sostenible en México
          </h3>
          <p className="text-[#64748b] text-sm leading-relaxed">
            Creemos que la colaboración y la innovación son claves para un desarrollo sostenible y trabajamos incansablemente para ser la voz líder en México. Nos apasiona crear experiencias únicas y memorables que conecten a las personas, generen ideas innovadoras y promuevan un cambio positivo.
          </p>
        </motion.div>

        {/* Equipo */}
        <div>
          <motion.h3 custom={7} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-2xl font-bold text-[#1e293b] mb-8" style={{ fontFamily: "var(--font-montserrat)" }}>
            Nuestro Equipo
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {team.map(({ name, role }, i) => (
              <motion.div key={name} custom={i + 8} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="bg-white rounded-2xl p-6 text-center border border-[#e2e8f0] shadow-sm hover:-translate-y-1 hover:border-[#7c3aed]/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2563eb]/15 to-[#d946ef]/15 border-2 border-[#e2e8f0] flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-gradient text-lg font-bold">
                    {name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <h4 className="text-[#1e293b] font-bold text-sm mb-1">{name}</h4>
                <p className="text-[#94a3b8] text-xs">{role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
