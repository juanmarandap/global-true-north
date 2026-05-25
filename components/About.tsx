"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeUp } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const T = {
  es: {
    label: "Acerca de nosotros",
    desc1: "Un espacio global dedicado al intercambio de ideas y experiencias entre líderes, emprendedores, empresarios y creadores que promueven la integración y el desarrollo a través de la innovación, la cultura y las artes.",
    desc2Founded: "Fundada en 2015 por",
    desc2Rest: ", una emprendedora y líder comprometida con la creación de un mundo mejor y más equitativo.",
    missionTitle: "Misión",
    missionBody: "Capacitar e inspirar a personas de todos los ámbitos de la vida para que alcancen su máximo potencial. Desde nuestra sede en México, impulsamos programas e iniciativas que fomentan la inclusión en diversos sectores, creando un impacto positivo y duradero en nuestras comunidades.",
    expTitle: "Experiencias y conexiones",
    expBody1: "En Global True North, no solo organizamos eventos, creamos experiencias que inspiran. Somos expertos en la gestión de eventos, encargándonos de la logística y el ecosistema necesario para que cada encuentro sea un éxito.",
    expBody2: "Nuestra experiencia y dedicación nos permiten ofrecer oportunidades donde las ideas florecen y las conexiones se fortalecen.",
    commitTitle: "Compromiso con la Innovación y el Desarrollo Sostenible en México",
    commitBody: "Creemos que la colaboración y la innovación son claves para un desarrollo sostenible y trabajamos incansablemente para ser la voz líder en México. Nos apasiona crear experiencias únicas y memorables que conecten a las personas, generen ideas innovadoras y promuevan un cambio positivo.",
    teamLabel: "Equipo",
    teamTitle: "Nuestro Equipo",
  },
  en: {
    label: "About us",
    desc1: "A global space dedicated to the exchange of ideas and experiences among leaders, entrepreneurs, businesspeople and creators who promote integration and development through innovation, culture and the arts.",
    desc2Founded: "Founded in 2015 by",
    desc2Rest: ", an entrepreneur and leader committed to creating a better and more equitable world.",
    missionTitle: "Mission",
    missionBody: "To empower and inspire people from all walks of life to reach their full potential. From our headquarters in Mexico, we drive programs and initiatives that promote inclusion across various sectors, creating a positive and lasting impact in our communities.",
    expTitle: "Experiences and connections",
    expBody1: "At Global True North, we don't just organize events, we create experiences that inspire. We are experts in event management, handling the logistics and ecosystem necessary for each gathering to be a success.",
    expBody2: "Our experience and dedication allow us to offer opportunities where ideas flourish and connections strengthen.",
    commitTitle: "Commitment to Innovation and Sustainable Development in Mexico",
    commitBody: "We believe that collaboration and innovation are key to sustainable development and we work tirelessly to be the leading voice in Mexico. We are passionate about creating unique and memorable experiences that connect people, generate innovative ideas and promote positive change.",
    teamLabel: "Team",
    teamTitle: "Our Team",
  },
};

const team = [
  { name: "Lucila Padilla", role: "CEO & Founder", photo: "/images/team/lucila-padilla.jpg" },
  { name: "Lucila Laborde Padilla", role: "Community Manager", photo: "/images/team/lucila-laborde.jpg" },
  { name: "Krytzia Dabdoub", role: "Co-founder Silicon Valley Experience", photo: "/images/team/krytzia.jpg" },
];

function useSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return { ref, inView };
}

export default function About() {
  const { lang } = useLanguage();
  const t = T[lang];
  const refHero   = useSection();
  const refMision = useSection();
  const refExp    = useSection();
  const refComp   = useSection();
  const refTeam   = useSection();

  return (
    <section id="acerca-de" className="relative bg-[#f8fafc] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent" />

      {/* ── INTRO ── */}
      <div
        ref={refHero.ref}
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f5f0ff 0%, #ede9fe 55%, #faf5ff 100%)" }}
      >
        {/* Fades de transición */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#f8fafc] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f8fafc] to-transparent z-10" />
        {/* Orb morado */}
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 lg:pt-32 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={refHero.inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#7c3aed] text-xs font-bold tracking-[0.2em] uppercase mb-4"
          style={{ fontFamily: "var(--font-montserrat)" }}>
          {t.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} animate={refHero.inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl font-bold text-[#1e293b] leading-tight mb-6 max-w-2xl"
          style={{ fontFamily: "var(--font-montserrat)" }}>
          Global True North
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={refHero.inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="text-[#64748b] text-lg leading-relaxed max-w-2xl mb-2">
          {t.desc1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={refHero.inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="text-[#64748b] text-base leading-relaxed max-w-2xl">
          {t.desc2Founded} <span className="text-[#1e293b] font-semibold">Lucila Padilla</span>{t.desc2Rest}
        </motion.p>
      </div>
      </div>

      {/* ── MISIÓN — texto izq | imagen der ── */}
      <div ref={refMision.ref} className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -60 }} animate={refMision.inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="w-10 h-1 bg-[#2563eb] rounded mb-6" />
            <h3 className="text-3xl font-bold text-[#1e293b] mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
              {t.missionTitle}
            </h3>
            <p className="text-[#64748b] text-base leading-relaxed">
              {t.missionBody}
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 60 }} animate={refMision.inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            className="relative h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/about/about-1.jpg" alt="Global True North World Forum" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2e]/30 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* ── EXPERIENCIAS — imagen izq | texto der ── */}
      <div ref={refExp.ref} className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -60 }} animate={refExp.inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            className="relative h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image src="/images/about/about-2.jpg" alt="Ponente en evento GTN" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2e]/30 to-transparent" />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 60 }} animate={refExp.inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2">
            <div className="w-10 h-1 bg-[#d946ef] rounded mb-6" />
            <h3 className="text-3xl font-bold text-[#1e293b] mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
              {t.expTitle}
            </h3>
            <p className="text-[#64748b] text-base leading-relaxed mb-4">
              {t.expBody1}
            </p>
            <p className="text-[#64748b] text-base leading-relaxed">
              {t.expBody2}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── COMPROMISO — texto izq | imagen der ── */}
      <div ref={refComp.ref} className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -60 }} animate={refComp.inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="w-10 h-1 bg-[#f59e0b] rounded mb-6" />
            <h3 className="text-3xl font-bold text-[#1e293b] mb-5" style={{ fontFamily: "var(--font-montserrat)" }}>
              {t.commitTitle}
            </h3>
            <p className="text-[#64748b] text-base leading-relaxed">
              {t.commitBody}
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 60 }} animate={refComp.inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            className="relative h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/about/about-3.jpg" alt="Comunidad GTN" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2e]/30 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* ── EQUIPO — fondo azul-lavanda full width ── */}
      <div
        ref={refTeam.ref}
        className="relative overflow-hidden py-24 lg:py-32"
        style={{ background: "linear-gradient(135deg, #eef4ff 0%, #eaf0fe 50%, #f0eeff 100%)" }}
      >
        {/* Fades de transición */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f8fafc] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f8fafc] to-transparent z-10" />

        {/* Orb animado */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.38, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c7d2fe]/30 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={refTeam.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center text-xs font-bold tracking-[0.28em] uppercase text-[#3b6fd4]/60 mb-3"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            {t.teamLabel}
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 24 }} animate={refTeam.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl font-bold text-[#1e293b] mb-16 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
            {t.teamTitle}
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {team.map(({ name, role, photo }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 50 }}
                animate={refTeam.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-white/80 shadow-lg mb-6 flex-shrink-0">
                  <Image src={photo} alt={name} fill className="object-cover object-top" sizes="224px" />
                </motion.div>
                <h4 className="text-[#1e293b] font-bold text-base mb-1">{name}</h4>
                <p className="text-[#64748b] text-sm">{role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
