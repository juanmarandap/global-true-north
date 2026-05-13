"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeUp } from "@/lib/animations";

const stats = [
  { value: "20+", sub: "Viajes empresariales exitosos a Silicon Valley" },
  { value: "9+",  sub: "Años conectando líderes con Silicon Valley" },
  { value: "400+", sub: "Empresarios que han vivido la experiencia" },
];

const includes = [
  { title: "Visitas privadas", description: "Acceso a gigantes tecnológicos, aceleradoras globales y centros de innovación de clase mundial" },
  { title: "Encuentros estratégicos", description: "Conexiones con VCs, founders y líderes de innovación del ecosistema" },
  { title: "Talleres 10X", description: "Aprende sobre Inteligencia Artificial, liderazgo consciente y mentalidad 10x" },
  { title: "Networking transformador", description: "Espacios donde las relaciones se convierten en alianzas estratégicas" },
];


export default function SiliconValley() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="silicon-valley" ref={ref} className="relative py-20 lg:py-28 bg-[#f8fafc]">
      {/* Yellow accent line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* SV Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Image — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.97 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -60, scale: 0.97 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/sv-robot.jpg"
              alt="GTN Silicon Valley Experience"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f6e]/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Text — staggered from right */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : { y: "100%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-xs font-bold tracking-[0.2em] uppercase text-primary-gradient"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                The SV Experience
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.h3
                initial={{ y: "100%" }}
                animate={inView ? { y: "0%" } : { y: "100%" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-4xl font-bold text-[#1e293b] leading-tight"
                style={{ fontFamily: "var(--font-montserrat)", letterSpacing: "-0.01em" }}
              >
                Conecta con el corazón de la innovación
              </motion.h3>
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="border-l-4 border-[#7c3aed] pl-5"
            >
              <p className="text-[#64748b] text-base leading-relaxed italic">
                Una experiencia inmersiva diseñada para emprendedores, empresarios e inversionistas que buscan algo más que inspiración: buscan transformación.
              </p>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.38, ease: "easeOut" }}
              className="text-[#64748b] text-sm leading-relaxed"
            >
              En Global True North conectamos a líderes con el corazón del ecosistema de Silicon Valley, brindándoles acceso exclusivo a empresas de vanguardia, mentes brillantes y tendencias que están redefiniendo el futuro.
            </motion.p>

            {/* Stats */}
            <div className="flex divide-x divide-[#e2e8f0] mt-2">
              {stats.map((s, i) => (
                <motion.div
                  key={s.sub}
                  initial={{ opacity: 0, y: 32, scale: 0.92 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 32, scale: 0.92 }}
                  transition={{ duration: 0.65, delay: 0.52 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 px-5 first:pl-0 last:pr-0"
                >
                  <p className="text-4xl font-bold text-primary-gradient mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>{s.value}</p>
                  <p className="text-[#64748b] text-xs leading-snug">{s.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Lo que incluye — full width con gradiente */}
      <div className="relative py-16 mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2563eb]/10 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="overflow-hidden mb-10">
            <motion.h3
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : { y: "100%" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl font-bold text-[#7c3aed]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Lo que incluye la experiencia
            </motion.h3>
          </div>

          <div className="max-w-2xl space-y-8">
            {includes.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              >
                <h4
                  className="text-[#7c3aed] font-bold text-base mb-1"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {item.title}
                </h4>
                <p className="text-[#64748b] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-20 space-y-20">
        {/* Para quién */}
        <div>
          <div className="mb-3">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl font-bold text-[#1e293b] text-center"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ¿Para quién es esta experiencia?
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="text-[#64748b] text-sm text-center mb-10"
          >
            Empresarios, fundadores, tomadores de decisiones y ejecutivos con visión global listos para su siguiente nivel.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { src: "/images/sv-stanford.jpg",  title: "Empresarios y fundadores", desc: "Líderes con visión global que buscan conexiones reales y acceso exclusivo al ecosistema de innovación." },
              { src: "/images/sv-meeting.jpg",   title: "Encuentros exclusivos",    desc: "Sesiones íntimas con referentes, VCs y fundadores que están redefiniendo industrias enteras." },
              { src: "/images/sv-networking.jpg",title: "Networking de alto valor", desc: "Cada edición curada para garantizar conversaciones e interacciones que generan alianzas estratégicas." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-4 group"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </motion.div>
                <h4
                  className="text-[#7c3aed] font-bold text-sm mb-1"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {item.title}
                </h4>
                <p className="text-[#64748b] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="text-[#64748b] text-sm text-center mt-10 max-w-2xl mx-auto leading-relaxed"
          >
            Esta experiencia no está abierta al público en general. Cada edición es curada cuidadosamente para garantizar conversaciones, interacciones y networking de alto valor.
          </motion.p>
        </div>

        {/* Qué hacemos */}
        <div className="mt-20">
          <div className="overflow-hidden mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl font-bold text-[#1e293b] text-center"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ¿Qué hacemos durante la experiencia?
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { accent: "#2563eb", title: "Visitas privadas",         desc: "Accede a empresas líderes del ecosistema global de innovación" },
              { accent: "#7c3aed", title: "Encuentros estratégicos",  desc: "Conecta con VCs, fundadores y referentes de Silicon Valley" },
              { accent: "#d946ef", title: "Talleres 10X",             desc: "Aprende de expertos de IA, liderazgo y pensamiento experiencial" },
              { accent: "#f59e0b", title: "Reflexión transformadora", desc: "Repiensa tu visión y estrategia en un entorno inspirador" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col px-6 py-7 rounded-lg bg-white border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ borderTop: `3px solid ${item.accent}` }}
              >
                <h4
                  className="font-bold text-sm mb-2"
                  style={{ fontFamily: "var(--font-montserrat)", color: item.accent }}
                >
                  {item.title}
                </h4>
                <p className="text-[#64748b] text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Empresas que nos han recibido */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl font-semibold text-center mb-14"
            style={{
              fontFamily: "var(--font-montserrat)",
              background: "linear-gradient(90deg, #2563eb, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Algunas de las empresas que nos han recibido
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
            {[
              { name: "Tesla",                  file: "tesla" },
              { name: "Google",                 file: "google" },
              { name: "Salesforce",             file: "salesforce" },
              { name: "NVIDIA",                 file: "nvidia" },
              { name: "Airbnb",                 file: "airbnb" },
              { name: "Apple",                  file: "apple" },
              { name: "Yahoo!",                 file: "yahoo" },
              { name: "Lyft",                   file: "lyft" },
              { name: "DoorDash",               file: "doordash" },
              { name: "Fortinet",               file: "fortinet" },
              { name: "Synopsys",               file: "synopsys" },
              { name: "Bitso",                  file: "bitso" },
              { name: "Plug and Play",          file: "plugandplay" },
              { name: "Incode",                 file: "incode" },
              { name: "Innit",                  file: "innit" },
              { name: "Suggestic",              file: "suggestic" },
              { name: "Wilson Sonsini",         file: "wilson" },
              { name: "Enlightened",            file: "enlightened" },
              { name: "Circuit Launch",         file: "circuitlaunch" },
              { name: "Stanford",               file: "stanford" },
              { name: "UC Berkeley",            file: "berkeley" },
              { name: "Singularity University", file: "singularity" },
            ].map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center"
                style={{ width: "150px", height: "64px" }}
                title={company.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/logos/${company.file}.svg`}
                  alt={company.name}
                  style={{ maxHeight: "48px", maxWidth: "130px", width: "auto", height: "auto", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Organizaciones que han confiado */}
        <div className="mt-20">
          <h3
            className="text-xl font-semibold text-center mb-14"
            style={{
              fontFamily: "var(--font-montserrat)",
              background: "linear-gradient(90deg, #2563eb, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Algunas organizaciones, grupos y empresas que han confiado en nosotros
          </h3>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
            {[
              { name: "COPARMEX",             file: "coparmex.png" },
              { name: "IPADE",                file: "ipade.png" },
              { name: "TEC Beyond",           file: "tecbeyond.jpg" },
              { name: "APIMEX",               file: "apimex.png" },
              { name: "KIVA",                 file: "kiva.png" },
              { name: "GrupoVida",            file: "grupovida.svg" },
              { name: "Grupo La Norteñita",   file: "nortenita.jpg" },
              { name: "Flecha Amarilla",      file: "flechaamarilla.jpg" },
              { name: "PERCEPTO",             file: "percepto.png" },
              { name: "INNOVA",               file: "innova.png" },
              { name: "VICA",                 file: "vica.png" },
              { name: "TRACUSA",              file: "tracusa.png" },
              { name: "GPA",                  file: "gpa.png" },
              { name: "Mr. Lucky",            file: "lucky.png" },
              { name: "BLENDER",              file: "blender.png" },
              { name: "BIOFLEX",              file: "bioflex.png" },
            ].map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center"
                style={{ width: "150px", height: "64px" }}
                title={company.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/logos/${company.file}`}
                  alt={company.name}
                  style={{ maxHeight: "48px", maxWidth: "130px", width: "auto", height: "auto", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>

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
