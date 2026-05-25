"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const T = {
  es: {
    title: "Nuestro blog",
    subtitle: "Somos un equipo de personas apasionadas cuyo objetivo es mejorar la vida de todos.",
    comingSoon: "Próximamente.",
  },
  en: {
    title: "Our blog",
    subtitle: "We are a team of passionate people whose goal is to improve everyone's lives.",
    comingSoon: "Coming soon.",
  },
};

const posts: { slug: string; title: string; excerpt: string; date: string; image?: string }[] = [
  // Ejemplo — descomenta y edita cuando tengas un post:
  // {
  //   slug: "primer-post",
  //   title: "Título del artículo",
  //   excerpt: "Descripción breve del artículo...",
  //   date: "12 mayo 2026",
  //   image: "/images/blog/primer-post.jpg",
  // },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section id="blog" ref={ref} className="relative overflow-hidden" style={{ minHeight: "420px" }}>

      {/* Video background — Earth from space, full opacity */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/globe.mp4" type="video/mp4" />
      </video>

      {/* Overlay ligero para legibilidad del texto */}
      <div className="absolute inset-0 bg-[#050d1f]/30" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 flex flex-col min-h-[420px]">

        {/* Top */}
        <div>
          <motion.h2
            custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {t.title}
          </motion.h2>
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-white/65 text-base max-w-xl"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Blog posts grid — add post objects here when ready */}
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.length === 0 && (
            <p className="text-white/45 text-sm col-span-full">{t.comingSoon}</p>
          )}
          {posts.map((post) => (
            <div key={post.slug} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-3 hover:bg-white/15 transition-colors">
              {post.image && (
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-xl" />
              )}
              <span className="text-white/50 text-xs">{post.date}</span>
              <h3 className="text-white font-semibold text-base leading-snug">{post.title}</h3>
              <p className="text-white/65 text-sm leading-relaxed flex-1">{post.excerpt}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
