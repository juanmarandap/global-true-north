"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

type Speaker = {
  name: string;
  category: string;
  bio: string;
  bioEn: string;
  photo: string;
};

const CAT_LABEL_EN: Record<string, string> = {
  "Ciberseguridad":                 "Cybersecurity",
  "Economía":                       "Economy",
  "El Futuro del Aprendizaje":      "The Future of Learning",
  "El Futuro del Trabajo":          "The Future of Work",
  "IA":                             "AI",
  "Innovación Disruptiva":          "Disruptive Innovation",
  "Manufactura Digital":            "Digital Manufacturing",
  "Mentalidad de Éxito":            "Success Mindset",
  "Modelos de Negocio Exponencial": "Exponential Business Models",
  "Salud y Medicina":               "Health & Medicine",
  "Wellness":                       "Wellness",
};

const CATEGORIES = [
  "Ciberseguridad",
  "Economía",
  "El Futuro del Aprendizaje",
  "El Futuro del Trabajo",
  "IA",
  "Innovación Disruptiva",
  "Manufactura Digital",
  "Mentalidad de Éxito",
  "Modelos de Negocio Exponencial",
  "Salud y Medicina",
  "Wellness",
] as const;

const CAT_COLOR: Record<string, string> = {
  "Ciberseguridad":                 "#ef4444",
  "Economía":                       "#f59e0b",
  "El Futuro del Aprendizaje":      "#10b981",
  "El Futuro del Trabajo":          "#3b82f6",
  "IA":                             "#8b5cf6",
  "Innovación Disruptiva":          "#ec4899",
  "Manufactura Digital":            "#06b6d4",
  "Mentalidad de Éxito":            "#f97316",
  "Modelos de Negocio Exponencial": "#6366f1",
  "Salud y Medicina":               "#14b8a6",
  "Wellness":                       "#a855f7",
};

const SPEAKERS: Speaker[] = [
  // — Ciberseguridad —
  { name: "Karen Elazari",          category: "Ciberseguridad",             photo: "/images/speakers/karen-elazari.jpg",     bio: "Investigadora de seguridad reconocida a nivel global y TED speaker. Ayuda a organizaciones a entender el ecosistema de hackers y construir estrategias de ciberseguridad efectivas para un mundo hiperconectado.",                                                                                                                                          bioEn: "Globally recognized security researcher and TED speaker. She helps organizations understand the hacker ecosystem and build effective cybersecurity strategies for a hyperconnected world." },
  { name: "Marc Goodman",           category: "Ciberseguridad",             photo: "/images/speakers/marc-goodman.jpg",      bio: 'Autor de "Future Crimes" y experto en ciberseguridad global. Trabaja con gobiernos y empresas para anticipar y combatir las amenazas del crimen tecnológico del siglo XXI.',                                                                                                                                                        bioEn: 'Author of "Future Crimes" and global cybersecurity expert. He works with governments and companies to anticipate and combat 21st-century technological crime threats.' },
  { name: "Nathana O'Brien Sharma", category: "Ciberseguridad",             photo: "/images/speakers/nathana-obrien.jpg",    bio: "Experta en gobernanza de IA y ciberseguridad. Trabaja en la intersección de tecnología, política y seguridad digital para crear marcos responsables en el mundo de la inteligencia artificial.",                                                                                                                                   bioEn: "Expert in AI governance and cybersecurity. She works at the intersection of technology, policy and digital security to create responsible frameworks in the world of artificial intelligence." },
  { name: "Pablo Breuer",           category: "Ciberseguridad",             photo: "/images/speakers/pablo-breuer.jpg",      bio: "Experto en ciberseguridad y seguridad nacional con amplia experiencia en el sector de defensa de EE.UU. Ayuda a organizaciones a comprender y gestionar las amenazas cibernéticas modernas.",                                                                                                                                     bioEn: "Cybersecurity and national security expert with extensive experience in the U.S. defense sector. He helps organizations understand and manage modern cyber threats." },

  // — Economía —
  { name: "Amin Toufani",           category: "Economía",                   photo: "/images/speakers/amin-toufani.jpg",      bio: "Economista y futurista que analiza cómo las tecnologías exponenciales transforman los mercados globales. Faculty en Singularity University, ayuda a líderes a anticipar y capitalizar las disrupciones económicas.",                                                                                                                             bioEn: "Economist and futurist who analyzes how exponential technologies transform global markets. Faculty at Singularity University, he helps leaders anticipate and capitalize on economic disruptions." },
  { name: "Edward Deleon Hickman",  category: "Economía",                   photo: "/images/speakers/edward-deleon.jpg",     bio: "Experto en economía y emprendimiento que conecta innovación con desarrollo económico. Trabaja para cerrar la brecha entre el potencial tecnológico y el impacto social en comunidades de todo el mundo.",                                                                                                                          bioEn: "Expert in economics and entrepreneurship who connects innovation with economic development. He works to bridge the gap between technological potential and social impact in communities around the world." },
  { name: "Adriana Marais",         category: "Economía",                   photo: "/images/speakers/adriana-marais.jpg",    bio: "Física teórica y experta en innovación que explora el futuro de la humanidad más allá de la Tierra. Lidera iniciativas en tecnología, ciencia y exploración espacial para construir un futuro sostenible.",                                                                                                                          bioEn: "Theoretical physicist and innovation expert who explores the future of humanity beyond Earth. She leads initiatives in technology, science and space exploration to build a sustainable future." },

  // — El Futuro del Aprendizaje —
  { name: "Brett Schilke",          category: "El Futuro del Aprendizaje",  photo: "/images/speakers/brett-schilke.jpg",     bio: "Experto en educación exponencial y director de impacto en Singularity University. Ayuda a instituciones y líderes a reimaginar el aprendizaje para un mundo en constante transformación tecnológica.",                                                                                                                                  bioEn: "Expert in exponential education and Director of Impact at Singularity University. He helps institutions and leaders reimagine learning for a world in constant technological transformation." },
  { name: "Denis Rivin",            category: "El Futuro del Aprendizaje",  photo: "/images/speakers/denis-rivin.jpg",       bio: "Educador e innovador que transforma la manera en que las organizaciones aprenden y crecen. Desarrolla metodologías que combinan tecnología, creatividad y propósito para generar impacto real.",                                                                                                                                   bioEn: "Educator and innovator who transforms the way organizations learn and grow. He develops methodologies that combine technology, creativity and purpose to generate real impact." },
  { name: "Esther Wjocicki",        category: "El Futuro del Aprendizaje",  photo: "/images/speakers/esther-wjocicki.jpg",   bio: "Pionera en educación progresiva conocida como la madrina de Silicon Valley. Mentora de innovadores y emprendedores globales, incluyendo cofundadores de Google y YouTube.",                                                                                                                                                   bioEn: "Pioneer in progressive education known as the godmother of Silicon Valley. Mentor of global innovators and entrepreneurs, including co-founders of Google and YouTube." },

  // — El Futuro del Trabajo —
  { name: "Taddy Blecher",          category: "El Futuro del Trabajo",      photo: "/images/speakers/taddy-blecher.jpg",     bio: "Líder en educación que transforma vidas a gran escala. Ha impulsado iniciativas que convierten el acceso al aprendizaje en oportunidades reales de crecimiento y movilidad social.",                                                                                                                                             bioEn: "Education leader who transforms lives at scale. He has driven initiatives that turn access to learning into real opportunities for growth and social mobility." },
  { name: "Renu Kulkarni",          category: "El Futuro del Trabajo",      photo: "/images/speakers/renu-kulkarni.jpg",     bio: "Líder en innovación y tecnología que ayuda a organizaciones a utilizar herramientas emergentes para generar impacto real en las personas y la sociedad.",                                                                                                                                                          bioEn: "Innovation and technology leader who helps organizations use emerging tools to generate real impact on people and society." },
  { name: "Yuri Van Geest",         category: "El Futuro del Trabajo",      photo: "/images/speakers/yuri-van-geest.jpg",    bio: 'Referente global en mentalidad exponencial y transformación. Coautor de "Exponential Organizations", impulsa a líderes y organizaciones a reinventarse en un mundo acelerado.',                                                                                                                                    bioEn: 'Global reference in exponential mindset and transformation. Co-author of "Exponential Organizations", he drives leaders and organizations to reinvent themselves in an accelerated world.' },

  // — IA —
  { name: "Adrian Villaseñor",      category: "IA",                         photo: "/images/speakers/adrian-villasenor.jpg", bio: "Emprendedor serial en inteligencia artificial y MBA por Harvard. Ha liderado empresas tecnológicas escaladas a cientos de millones de dólares y ayuda a organizaciones a desarrollar una mentalidad AI-First.",                                                                                                                bioEn: "Serial entrepreneur in artificial intelligence and Harvard MBA. He has led tech companies scaled to hundreds of millions of dollars and helps organizations develop an AI-First mindset." },
  { name: "Juan Carlos Sánchez",    category: "IA",                         photo: "/images/speakers/juan-carlos-sanchez.jpg",bio: "Empresario tecnológico, conferencista y autor enfocado en liderazgo, innovación y fortaleza mental en la era de la inteligencia artificial.",                                                                                                                                                                      bioEn: "Tech entrepreneur, speaker and author focused on leadership, innovation and mental strength in the age of artificial intelligence." },
  { name: "Rebeca Hwang",           category: "IA",                         photo: "/images/speakers/rebeca-hwang.jpg",      bio: "Inversionista y líder en ecosistemas de innovación que impulsa startups y emprendedores a nivel global. Conecta capital, tecnología y talento para crear el futuro.",                                                                                                                                              bioEn: "Investor and innovation ecosystem leader who drives startups and entrepreneurs globally. She connects capital, technology and talent to create the future." },

  // — Innovación Disruptiva —
  { name: "Salim Ismail",           category: "Innovación Disruptiva",      photo: "/images/speakers/salim-ismail.jpg",      bio: 'Estratega global y referente en innovación exponencial. Fundador de Singularity University y autor de "Exponential Organizations", ayuda a líderes a transformar sus empresas con modelos 10X.',                                                                                                                                   bioEn: 'Global strategist and reference in exponential innovation. Founder of Singularity University and author of "Exponential Organizations", he helps leaders transform their companies with 10X models.' },
  { name: "Anders Hvid",            category: "Innovación Disruptiva",      photo: "/images/speakers/anders-hvid.jpg",       bio: "Experto en disrupción y futuro de los negocios. Ayuda a líderes a transformar sus organizaciones frente al cambio tecnológico acelerado. Cofundador de Dare Disrupt.",                                                                                                                                              bioEn: "Expert in disruption and the future of business. He helps leaders transform their organizations in the face of accelerated technological change. Co-founder of Dare Disrupt." },
  { name: "Adriana Marais",         category: "Innovación Disruptiva",      photo: "/images/speakers/adriana-marais.jpg",    bio: "Física teórica y experta en innovación que explora el futuro de la humanidad más allá de la Tierra. Lidera iniciativas en tecnología, ciencia y exploración espacial para construir un futuro sostenible.",                                                                                                                          bioEn: "Theoretical physicist and innovation expert who explores the future of humanity beyond Earth. She leads initiatives in technology, science and space exploration to build a sustainable future." },

  // — Manufactura Digital —
  { name: "Martha Rehnberg",        category: "Manufactura Digital",        photo: "/images/speakers/martha-rehnberg.jpg",   bio: "Experta en tecnología que desafía cómo entendemos el futuro. Combina innovación, pensamiento crítico y estrategia para ayudar a organizaciones a adoptar tecnología de forma inteligente y responsable.",                                                                                                                        bioEn: "Technology expert who challenges how we understand the future. She combines innovation, critical thinking and strategy to help organizations adopt technology intelligently and responsibly." },
  { name: "Andre Wegner",           category: "Manufactura Digital",        photo: "/images/speakers/andre-wegner.jpg",      bio: "Experto en cómo la tecnología está redefiniendo la manufactura. Desde 3D printing hasta automatización inteligente, ayuda a empresas a reinventar cómo producen y operan.",                                                                                                                                     bioEn: "Expert in how technology is redefining manufacturing. From 3D printing to intelligent automation, he helps companies reinvent how they produce and operate." },
  { name: "Hod Lipson",             category: "Manufactura Digital",        photo: "/images/speakers/hod-lipson.jpg",        bio: "Experto en robótica e inteligencia artificial que explora cómo las máquinas pueden aprender, adaptarse y crear. Profesor en Columbia University y referente global en el futuro de la interacción humano-máquina.",                                                                                                         bioEn: "Robotics and artificial intelligence expert who explores how machines can learn, adapt and create. Professor at Columbia University and global reference in the future of human-machine interaction." },
  { name: "Jason Dunn",             category: "Manufactura Digital",        photo: "/images/speakers/jason-dunn.jpg",        bio: "Pionero en manufactura espacial y tecnologías disruptivas. Cofundador de Made In Space, la primera empresa en fabricar fuera de la Tierra, llevando la innovación más allá de los límites del planeta.",                                                                                                               bioEn: "Pioneer in space manufacturing and disruptive technologies. Co-founder of Made In Space, the first company to manufacture outside Earth, taking innovation beyond the limits of our planet." },
  { name: "Melba Kurman",           category: "Manufactura Digital",        photo: "/images/speakers/melba-kurman.jpg",      bio: "Experta en tecnologías exponenciales que explica cómo innovaciones como el 3D printing y los vehículos autónomos están redefiniendo nuestra vida y el futuro.",                                                                                                                                                      bioEn: "Expert in exponential technologies who explains how innovations like 3D printing and autonomous vehicles are redefining our lives and the future." },

  // — Mentalidad de Éxito —
  { name: "Marc Porat",             category: "Mentalidad de Éxito",        photo: "/images/speakers/marc-porat.jpg",        bio: "Pionero detrás de la tecnología que dio origen a los smartphones. Hoy guía a líderes y empresas en la nueva era de la inteligencia artificial y sus grandes disrupciones.",                                                                                                                                          bioEn: "Pioneer behind the technology that gave birth to smartphones. Today he guides leaders and companies in the new era of artificial intelligence and its great disruptions." },
  { name: "Klaus",                  category: "Mentalidad de Éxito",        photo: "/images/speakers/klaus.jpg",             bio: "Autor bestseller y experto en expansión internacional y crecimiento empresarial. Ha asesorado a líderes y empresas en más de 50 países sobre cómo escalar organizaciones desde Silicon Valley.",                                                                                                                   bioEn: "Bestselling author and expert in international expansion and business growth. He has advised leaders and companies in more than 50 countries on how to scale organizations from Silicon Valley." },

  // — Modelos de Negocio Exponencial —
  { name: "Mic Mam",                category: "Modelos de Negocio Exponencial", photo: "/images/speakers/mic-mam.jpg",        bio: "Futurista que trabaja en cómo las tecnologías exponenciales pueden transformar economías y generar nuevas oportunidades. Ayuda a organizaciones a prepararse estratégicamente para el futuro.",                                                                                                                           bioEn: "Futurist working on how exponential technologies can transform economies and generate new opportunities. He helps organizations strategically prepare for the future." },
  { name: "Tiago Mattos",           category: "Modelos de Negocio Exponencial", photo: "/images/speakers/tiago-mattos.jpg",   bio: "Uno de los futuristas más reconocidos de Brasil con Faculty en Singularity University. Explora cómo la tecnología redefine el trabajo, la cultura y los modelos de negocio en un mundo exponencial.",                                                                                                               bioEn: "One of Brazil's most recognized futurists with Faculty at Singularity University. He explores how technology redefines work, culture and business models in an exponential world." },
  { name: "Peter Diamandis",        category: "Modelos de Negocio Exponencial", photo: "/images/speakers/peter-diamandis.jpg",bio: "Uno de los mayores referentes en innovación global. Fundador de XPRIZE y Singularity University, impulsa tecnologías que están transformando el futuro de la humanidad.",                                                                                                                                          bioEn: "One of the greatest references in global innovation. Founder of XPRIZE and Singularity University, he drives technologies that are transforming the future of humanity." },

  // — Salud y Medicina —
  { name: "Daniel Kraft",           category: "Salud y Medicina",           photo: "/images/speakers/daniel-kraft.jpg",      bio: "Médico-científico y líder en innovación en salud. Chair en Singularity University y fundador de Exponential Medicine, explora cómo las tecnologías emergentes están transformando la medicina del futuro.",                                                                                                                    bioEn: "Physician-scientist and healthcare innovation leader. Chair at Singularity University and founder of Exponential Medicine, he explores how emerging technologies are transforming the medicine of the future." },
  { name: "Divya Chande",           category: "Salud y Medicina",           photo: "/images/speakers/divya-chande.jpg",      bio: "Neurocientífica y médica que explora la conciencia humana y el futuro de la salud. Faculty en Singularity University, trabaja en la intersección de tecnología y medicina para transformar el cuidado de la salud.",                                                                                                   bioEn: "Neuroscientist and physician who explores human consciousness and the future of health. Faculty at Singularity University, she works at the intersection of technology and medicine to transform healthcare." },
  { name: "Jaime Metzl",            category: "Salud y Medicina",           photo: "/images/speakers/jaime-metzl.jpg",       bio: "Experto en el futuro de la humanidad que combina tecnología, genética y geopolítica. Asesora a organismos globales como la OMS sobre los cambios que están redefiniendo nuestro mundo.",                                                                                                                              bioEn: "Expert on the future of humanity who combines technology, genetics and geopolitics. He advises global organizations like the WHO on the changes redefining our world." },
  { name: "Kim Hullet",             category: "Salud y Medicina",           photo: "/images/speakers/kim-hullet.jpg",        bio: "Experta en biotecnología que acerca el futuro de la salud a las personas. Desde genética hasta longevidad, explica cómo la tecnología está redefiniendo cómo vivimos y cuidamos nuestro cuerpo.",                                                                                                                   bioEn: "Biotechnology expert who brings the future of health closer to people. From genetics to longevity, she explains how technology is redefining how we live and care for our bodies." },

  // — Wellness —
  { name: "Lucila Padilla",         category: "Wellness",                   photo: "/images/speakers/lucila-padilla-wellness.jpg", bio: "A lo largo de su trayectoria ha trabajado con empresas, universidades y organizaciones que buscan fortalecer la mentalidad, el bienestar y la capacidad de adaptación de sus equipos.",                                                                                                                          bioEn: "Throughout her career she has worked with companies, universities and organizations seeking to strengthen the mindset, well-being and adaptability of their teams." },
  { name: "Tesh Jefferies",         category: "Wellness",                   photo: "/images/speakers/tesh-jefferies.jpg",    bio: "Experta en estrategia digital y crecimiento en el mundo online. Speaker internacional y autora bestseller que ayuda a líderes y empresas a destacar en la era digital.",                                                                                                                                          bioEn: "Expert in digital strategy and growth in the online world. International speaker and bestselling author who helps leaders and companies stand out in the digital age." },
];

// ─── Avatar con fallback de iniciales ────────────────────────────────────────
function SpeakerAvatar({ name, photo, color }: { name: string; photo: string; color: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase();

  return (
    <div
      className="relative w-52 h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white flex-shrink-0"
      style={{ boxShadow: `0 24px 64px ${color}35` }}
    >
      {!failed ? (
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover"
          style={{ objectPosition: "center 15%" }}
          sizes="256px"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
        >
          <span
            className="text-white text-5xl font-bold select-none"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}

// ─── Fila de speaker con layout alternado ────────────────────────────────────
function SpeakerRow({ speaker, index }: { speaker: Speaker; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();
  const color = CAT_COLOR[speaker.category] ?? "#7c3aed";
  const photoLeft = index % 2 === 0;
  const catLabel = lang === "en" ? (CAT_LABEL_EN[speaker.category] ?? speaker.category) : speaker.category;
  const bio = lang === "en" ? speaker.bioEn : speaker.bio;

  const photoBlock = (
    <motion.div
      initial={{ opacity: 0, x: photoLeft ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="flex justify-center items-center"
    >
      <SpeakerAvatar name={speaker.name} photo={speaker.photo} color={color} />
    </motion.div>
  );

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, x: photoLeft ? 60 : -60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-center"
    >
      <div className="w-10 h-1 rounded mb-5" style={{ backgroundColor: color }} />
      <h3
        className="text-2xl lg:text-3xl font-bold text-[#1e293b] mb-1 leading-tight"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {speaker.name}
      </h3>
      <p className="text-sm font-semibold mb-4" style={{ color }}>
        {catLabel}
      </p>
      <p className="text-[#64748b] text-base leading-relaxed">{bio}</p>
    </motion.div>
  );

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center py-14 lg:py-20"
    >
      {photoLeft ? <>{photoBlock}{textBlock}</> : <>{textBlock}{photoBlock}</>}
    </div>
  );
}

// ─── Separador de categoría ───────────────────────────────────────────────────
function CategoryHeader({ category }: { category: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { lang } = useLanguage();
  const color = CAT_COLOR[category] ?? "#7c3aed";
  const label = lang === "en" ? (CAT_LABEL_EN[category] ?? category) : category;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 pt-10 pb-2"
    >
      <div className="w-12 h-1 rounded" style={{ backgroundColor: color }} />
      <h2
        className="text-sm font-bold tracking-[0.2em] uppercase whitespace-nowrap"
        style={{ fontFamily: "var(--font-montserrat)", color }}
      >
        {label}
      </h2>
      <div className="flex-1 h-px bg-[#e2e8f0]" />
    </motion.div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
const SPEAKERS_T = {
  es: {
    heroTitle: "Speakers que crean las empresas del futuro.",
    heroSub: "Expertos internacionales en innovación, IA, crecimiento global y transformación empresarial.",
    allBtn: "Todos",
  },
  en: {
    heroTitle: "Speakers who build the companies of the future.",
    heroSub: "International experts in innovation, AI, global growth and business transformation.",
    allBtn: "All",
  },
};

export default function Speakers() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const refHero = useRef(null);
  const inHero = useInView(refHero, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const st = SPEAKERS_T[lang];

  const displayData = useMemo(() => {
    let idx = 0;
    return CATEGORIES.map(cat => ({
      category: cat,
      speakers: SPEAKERS
        .filter(s => s.category === cat && (!activeCategory || s.category === activeCategory))
        .map(s => ({ speaker: s, idx: idx++ })),
    })).filter(g => g.speakers.length > 0);
  }, [activeCategory]);

  return (
    <section id="speakers" className="relative bg-[#f8fafc] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#7c3aed]/40 to-transparent" />

      {/* ── HERO ── */}
      <div
        ref={refHero}
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f5f0ff 0%, #ede9fe 55%, #faf5ff 100%)" }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#f8fafc] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f8fafc] to-transparent z-10" />
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 lg:pt-32 pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#7c3aed] text-xs font-bold tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Global True North
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e293b] leading-tight mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {st.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-[#64748b] text-lg leading-relaxed max-w-2xl"
          >
            {st.heroSub}
          </motion.p>
        </div>
      </div>

      {/* ── FILTROS DE CATEGORÍA ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2.5 justify-center"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeCategory === null
                ? "bg-[#7c3aed] text-white shadow-md shadow-[#7c3aed]/30"
                : "bg-white text-[#64748b] border border-[#e2e8f0] hover:border-[#7c3aed]/40 hover:text-[#7c3aed]"
            }`}
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {st.allBtn}
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "text-white shadow-md"
                  : "bg-white text-[#64748b] border border-[#e2e8f0] hover:border-[#64748b]/30"
              }`}
              style={
                activeCategory === cat
                  ? { backgroundColor: CAT_COLOR[cat], boxShadow: `0 4px 14px ${CAT_COLOR[cat]}40` }
                  : {}
              }
            >
              {lang === "en" ? (CAT_LABEL_EN[cat] ?? cat) : cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* ── LISTA DE SPEAKERS ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-28">
        {displayData.map(({ category, speakers }) => (
          <div key={category}>
            {!activeCategory && <CategoryHeader category={category} />}
            {speakers.map(({ speaker, idx }) => (
              <SpeakerRow key={`${speaker.name}-${category}`} speaker={speaker} index={idx} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
