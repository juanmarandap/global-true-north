"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { fadeUp } from "@/lib/animations";

export default function Events() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="events" ref={ref} className="relative py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-2xl sm:text-3xl font-bold text-[#1e293b] mb-2"
              style={{ fontFamily: "var(--font-montserrat)" }}>
              Próximos Eventos
            </motion.h2>
            <motion.p custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-[#64748b] text-sm">
              Descubre lo que viene y únete a los momentos que importan.
            </motion.p>
          </div>
          <motion.a custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            href="https://www.globaltruenorth.com.mx/en/event"
            target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-[#2563eb] font-semibold text-sm hover:gap-2.5 transition-all shrink-0">
            Ver todo
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Event card — The Moonshot Experience */}
        <motion.a custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          href="https://www.globaltruenorth.com.mx/en/event/the-moonshot-experience-3"
          target="_blank" rel="noopener noreferrer"
          className="block group w-full max-w-sm">
          <div className="rounded-2xl overflow-hidden shadow-md border border-[#e2e8f0] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Banner image */}
            <div className="relative h-52 overflow-hidden bg-[#1e1b4b]">
              <Image
                src="/images/moonshot-logo.png"
                alt="The Moonshot Experience"
                fill
                className="object-cover object-center"
              />
              {/* Date badge */}
              <div className="absolute top-3 left-3 bg-white rounded-lg overflow-hidden text-center w-12 shadow-md z-10">
                <div className="bg-[#2563eb] text-white text-[10px] font-bold uppercase py-0.5 px-1">AUG</div>
                <div className="text-[#1e293b] text-xl font-extrabold leading-none py-1.5" style={{ fontFamily: "var(--font-montserrat)" }}>31</div>
              </div>
              {/* Nuevo badge */}
              <div className="absolute top-3 right-3 bg-[#2563eb] text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
                Nuevo
              </div>
              {/* Subtle yellow dot */}
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[#f59e0b] opacity-70 z-10" />
            </div>

            {/* Card body */}
            <div className="bg-white p-4">
              <div className="flex items-center gap-1.5 text-[#64748b] text-sm mb-1.5">
                <Clock size={13} className="text-[#7c3aed]" />
                <span>8:00 AM (America/Los Angeles)</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#64748b] text-sm">
                <MapPin size={13} className="text-[#d946ef]" />
                <span>Stanford, Silicon Valley</span>
              </div>
              <p className="text-[#1e293b] font-bold text-base mt-3" style={{ fontFamily: "var(--font-montserrat)" }}>
                The Moonshot Experience
              </p>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
