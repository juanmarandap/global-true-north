"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" ref={ref} className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-[#7c3aed] text-xs font-bold tracking-[0.2em] uppercase mb-3"
          style={{ fontFamily: "var(--font-montserrat)" }}>
          Blog
        </motion.p>
        <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-3xl font-bold text-[#1e293b] mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
          Our blog
        </motion.h2>
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="text-[#64748b] text-base mb-12 max-w-xl">
          We are a team of passionate people whose goal is to improve everyone&apos;s life.
        </motion.p>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="bg-[#f8fafc] rounded-2xl p-16 text-center border border-[#e2e8f0]">
          <p className="text-[#94a3b8] text-base mb-5">No blog post yet.</p>
          <a href="https://www.globaltruenorth.com.mx/en/blog" target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[#2563eb] font-semibold text-sm hover:gap-3 transition-all">
            Ver blog
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
