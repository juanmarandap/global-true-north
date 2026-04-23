"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" ref={ref} className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#7c3aed]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <motion.p custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-[#7c3aed] text-xs font-bold tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            Contáctanos
          </motion.p>
          <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-3xl sm:text-4xl font-bold text-[#1e293b] leading-tight mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            ¿Tienes preguntas?
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-[#64748b] text-base leading-relaxed">
            Estamos aquí para orientarte sobre nuestros eventos y experiencias.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="space-y-4">
            <a href="mailto:contacto@globaltruenorth.com.mx"
              className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm hover:border-[#2563eb]/30 hover:shadow-md transition-all group">
              <div className="p-3 rounded-xl bg-[#2563eb]/8 border border-[#2563eb]/15 group-hover:bg-[#2563eb]/15 transition-colors">
                <Mail size={20} className="text-[#2563eb]" />
              </div>
              <div>
                <p className="text-[#94a3b8] text-xs uppercase tracking-widest mb-0.5">Email</p>
                <p className="text-[#1e293b] font-semibold text-sm group-hover:text-[#2563eb] transition-colors">
                  contacto@globaltruenorth.com.mx
                </p>
              </div>
            </a>
            <a href="tel:+524775819608"
              className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm hover:border-[#d946ef]/30 hover:shadow-md transition-all group">
              <div className="p-3 rounded-xl bg-[#d946ef]/8 border border-[#d946ef]/15 group-hover:bg-[#d946ef]/15 transition-colors">
                <Phone size={20} className="text-[#d946ef]" />
              </div>
              <div>
                <p className="text-[#94a3b8] text-xs uppercase tracking-widest mb-0.5">Teléfono</p>
                <p className="text-[#1e293b] font-semibold text-sm group-hover:text-[#d946ef] transition-colors">
                  +52 (477) 581 9608
                </p>
              </div>
            </a>
          </motion.div>

          <motion.div custom={4} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
            {sent ? (
              <div className="bg-white rounded-2xl p-12 text-center flex flex-col items-center gap-4 border border-[#e2e8f0] shadow-sm">
                <CheckCircle size={48} className="text-[#2563eb]" />
                <h3 className="text-[#1e293b] font-bold text-xl">¡Mensaje enviado!</h3>
                <p className="text-[#64748b]">Nos pondremos en contacto contigo muy pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 space-y-5 border border-[#e2e8f0] shadow-sm">
                <div>
                  <label className="block text-[#64748b] text-sm mb-2 font-medium">Nombre</label>
                  <input type="text" required value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-[#1e293b] placeholder:text-[#cbd5e1] text-sm focus:outline-none focus:border-[#2563eb]/40 focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-[#64748b] text-sm mb-2 font-medium">Email</label>
                  <input type="email" required value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-[#1e293b] placeholder:text-[#cbd5e1] text-sm focus:outline-none focus:border-[#2563eb]/40 focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-[#64748b] text-sm mb-2 font-medium">Mensaje</label>
                  <textarea required rows={5} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 text-[#1e293b] placeholder:text-[#cbd5e1] text-sm focus:outline-none focus:border-[#2563eb]/40 focus:bg-white transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#2563eb] text-white font-bold text-sm hover:bg-[#1d4ed8] transition-all duration-300 shadow-sm hover:shadow-md"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  Enviar mensaje
                  <Send size={15} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
