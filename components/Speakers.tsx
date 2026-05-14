"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

type Speaker = {
  name: string;
  category: string;
  bio: string;
  photo: string;
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
  { name: "Karen Elazari",          category: "Ciberseguridad",             photo: "/images/speakers/karen-elazari.jpg",     bio: "Investigadora de seguridad reconocida a nivel global y TED speaker. Ayuda a organizaciones a entender el ecosistema de hackers y construir estrategias de ciberseguridad efectivas para un mundo hiperconectado." },
  { name: "Marc Goodman",           category: "Ciberseguridad",             photo: "/images/speakers/marc-goodman.jpg",      bio: 'Autor de "Future Crimes" y experto en ciberseguridad global. Trabaja con gobiernos y empresas para anticipar y combatir las amenazas del crimen tecnológico del siglo XXI.' },
  { name: "Nathana O'Brien Sharma", category: "Ciberseguridad",             photo: "/images/speakers/nathana-obrien.jpg",    bio: "Experta en gobernanza de IA y ciberseguridad. Trabaja en la intersección de tecnología, política y seguridad digital para crear marcos responsables en el mundo de la inteligencia artificial." },
  { name: "Pablo Breuer",           category: "Ciberseguridad",             photo: "/images/speakers/pablo-breuer.jpg",      bio: "Experto en ciberseguridad y seguridad nacional con amplia experiencia en el sector de defensa de EE.UU. Ayuda a organizaciones a comprender y gestionar las amenazas cibernéticas modernas." },

  // — Economía —
  { name: "Amin Toufani",           category: "Economía",                   photo: "/images/speakers/amin-toufani.jpg",      bio: "Economista y futurista que analiza cómo las tecnologías exponenciales transforman los mercados globales. Faculty en Singularity University, ayuda a líderes a anticipar y capitalizar las disrupciones económicas." },
  { name: "Edward Deleon Hickman",  category: "Economía",                   photo: "/images/speakers/edward-deleon.jpg",     bio: "Experto en economía y emprendimiento que conecta innovación con desarrollo económico. Trabaja para cerrar la brecha entre el potencial tecnológico y el impacto social en comunidades de todo el mundo." },
  { name: "Adriana Marais",         category: "Economía",                   photo: "/images/speakers/adriana-marais.jpg",    bio: "Física teórica y experta en innovación que explora el futuro de la humanidad más allá de la Tierra. Lidera iniciativas en tecnología, ciencia y exploración espacial para construir un futuro sostenible." },

  // — El Futuro del Aprendizaje —
  { name: "Brett Schilke",          category: "El Futuro del Aprendizaje",  photo: "/images/speakers/brett-schilke.jpg",     bio: "Experto en educación exponencial y director de impacto en Singularity University. Ayuda a instituciones y líderes a reimaginar el aprendizaje para un mundo en constante transformación tecnológica." },
  { name: "Denis Rivin",            category: "El Futuro del Aprendizaje",  photo: "/images/speakers/denis-rivin.jpg",       bio: "Educador e innovador que transforma la manera en que las organizaciones aprenden y crecen. Desarrolla metodologías que combinan tecnología, creatividad y propósito para generar impacto real." },
  { name: "Esther Wjocicki",        category: "El Futuro del Aprendizaje",  photo: "/images/speakers/esther-wjocicki.jpg",   bio: "Pionera en educación progresiva conocida como la madrina de Silicon Valley. Mentora de innovadores y emprendedores globales, incluyendo cofundadores de Google y YouTube." },

  // — El Futuro del Trabajo —
  { name: "Taddy Blecher",          category: "El Futuro del Trabajo",      photo: "/images/speakers/taddy-blecher.jpg",     bio: "Líder en educación que transforma vidas a gran escala. Ha impulsado iniciativas que convierten el acceso al aprendizaje en oportunidades reales de crecimiento y movilidad social." },
  { name: "Renu Kulkarni",          category: "El Futuro del Trabajo",      photo: "/images/speakers/renu-kulkarni.jpg",     bio: "Líder en innovación y tecnología que ayuda a organizaciones a utilizar herramientas emergentes para generar impacto real en las personas y la sociedad." },
  { name: "Yuri Van Geest",         category: "El Futuro del Trabajo",      photo: "/images/speakers/yuri-van-geest.jpg",    bio: 'Referente global en mentalidad exponencial y transformación. Coautor de "Exponential Organizations", impulsa a líderes y organizaciones a reinventarse en un mundo acelerado.' },

  // — IA —
  { name: "Adrian Villaseñor",      category: "IA",                         photo: "/images/speakers/adrian-villasenor.jpg", bio: "Emprendedor serial en inteligencia artificial y MBA por Harvard. Ha liderado empresas tecnológicas escaladas a cientos de millones de dólares y ayuda a organizaciones a desarrollar una mentalidad AI-First." },
  { name: "Juan Carlos Sánchez",    category: "IA",                         photo: "/images/speakers/juan-carlos-sanchez.jpg",bio: "Empresario tecnológico, conferencista y autor enfocado en liderazgo, innovación y fortaleza mental en la era de la inteligencia artificial." },
  { name: "Rebeca Hwang",           category: "IA",                         photo: "/images/speakers/rebeca-hwang.jpg",      bio: "Inversionista y líder en ecosistemas de innovación que impulsa startups y emprendedores a nivel global. Conecta capital, tecnología y talento para crear el futuro." },

  // — Innovación Disruptiva —
  { name: "Salim Ismail",           category: "Innovación Disruptiva",      photo: "/images/speakers/salim-ismail.jpg",      bio: 'Estratega global y referente en innovación exponencial. Fundador de Singularity University y autor de "Exponential Organizations", ayuda a líderes a transformar sus empresas con modelos 10X.' },
  { name: "Anders Hvid",            category: "Innovación Disruptiva",      photo: "/images/speakers/anders-hvid.jpg",       bio: "Experto en disrupción y futuro de los negocios. Ayuda a líderes a transformar sus organizaciones frente al cambio tecnológico acelerado. Cofundador de Dare Disrupt." },
  { name: "Adriana Marais",         category: "Innovación Disruptiva",      photo: "/images/speakers/adriana-marais.jpg",    bio: "Física teórica y experta en innovación que explora el futuro de la humanidad más allá de la Tierra. Lidera iniciativas en tecnología, ciencia y exploración espacial para construir un futuro sostenible." },

  // — Manufactura Digital —
  { name: "Martha Rehnberg",        category: "Manufactura Digital",        photo: "/images/speakers/martha-rehnberg.jpg",   bio: "Experta en tecnología que desafía cómo entendemos el futuro. Combina innovación, pensamiento crítico y estrategia para ayudar a organizaciones a adoptar tecnología de forma inteligente y responsable." },
  { name: "Andre Wegner",           category: "Manufactura Digital",        photo: "/images/speakers/andre-wegner.jpg",      bio: "Experto en cómo la tecnología está redefiniendo la manufactura. Desde 3D printing hasta automatización inteligente, ayuda a empresas a reinventar cómo producen y operan." },
  { name: "Hod Lipson",             category: "Manufactura Digital",        photo: "/images/speakers/hod-lipson.jpg",        bio: "Experto en robótica e inteligencia artificial que explora cómo las máquinas pueden aprender, adaptarse y crear. Profesor en Columbia University y referente global en el futuro de la interacción humano-máquina." },
  { name: "Jason Dunn",             category: "Manufactura Digital",        photo: "/images/speakers/jason-dunn.jpg",        bio: "Pionero en manufactura espacial y tecnologías disruptivas. Cofundador de Made In Space, la primera empresa en fabricar fuera de la Tierra, llevando la innovación más allá de los límites del planeta." },
  { name: "Melba Kurman",           category: "Manufactura Digital",        photo: "/images/speakers/melba-kurman.jpg",      bio: "Experta en tecnologías exponenciales que explica cómo innovaciones como el 3D printing y los vehículos autónomos están redefiniendo nuestra vida y el futuro." },

  // — Mentalidad de Éxito —
  { name: "Marc Porat",             category: "Mentalidad de Éxito",        photo: "/images/speakers/marc-porat.jpg",        bio: "Pionero detrás de la tecnología que dio origen a los smartphones. Hoy guía a líderes y empresas en la nueva era de la inteligencia artificial y sus grandes disrupciones." },
  { name: "Klaus",                  category: "Mentalidad de Éxito",        photo: "/images/speakers/klaus.jpg",             bio: "Autor bestseller y experto en expansión internacional y crecimiento empresarial. Ha asesorado a líderes y empresas en más de 50 países sobre cómo escalar organizaciones desde Silicon Valley." },

  // — Modelos de Negocio Exponencial —
  { name: "Mic Mam",                category: "Modelos de Negocio Exponencial", photo: "/images/speakers/mic-mam.jpg",        bio: "Futurista que trabaja en cómo las tecnologías exponenciales pueden transformar economías y generar nuevas oportunidades. Ayuda a organizaciones a prepararse estratégicamente para el futuro." },
  { name: "Tiago Mattos",           category: "Modelos de Negocio Exponencial", photo: "/images/speakers/tiago-mattos.jpg",   bio: "Uno de los futuristas más reconocidos de Brasil con Faculty en Singularity University. Explora cómo la tecnología redefine el trabajo, la cultura y los modelos de negocio en un mundo exponencial." },
  { name: "Peter Diamandis",        category: "Modelos de Negocio Exponencial", photo: "/images/speakers/peter-diamandis.jpg",bio: "Uno de los mayores referentes en innovación global. Fundador de XPRIZE y Singularity University, impulsa tecnologías que están transformando el futuro de la humanidad." },

  // — Salud y Medicina —
  { name: "Daniel Kraft",           category: "Salud y Medicina",           photo: "/images/speakers/daniel-kraft.jpg",      bio: "Médico-científico y líder en innovación en salud. Chair en Singularity University y fundador de Exponential Medicine, explora cómo las tecnologías emergentes están transformando la medicina del futuro." },
  { name: "Divya Chande",           category: "Salud y Medicina",           photo: "/images/speakers/divya-chande.jpg",      bio: "Neurocientífica y médica que explora la conciencia humana y el futuro de la salud. Faculty en Singularity University, trabaja en la intersección de tecnología y medicina para transformar el cuidado de la salud." },
  { name: "Jaime Metzl",            category: "Salud y Medicina",           photo: "/images/speakers/jaime-metzl.jpg",       bio: "Experto en el futuro de la humanidad que combina tecnología, genética y geopolítica. Asesora a organismos globales como la OMS sobre los cambios que están redefiniendo nuestro mundo." },
  { name: "Kim Hullet",             category: "Salud y Medicina",           photo: "/images/speakers/kim-hullet.jpg",        bio: "Experta en biotecnología que acerca el futuro de la salud a las personas. Desde genética hasta longevidad, explica cómo la tecnología está redefiniendo cómo vivimos y cuidamos nuestro cuerpo." },

  // — Wellness —
  { name: "Lucila Padilla",         category: "Wellness",                   photo: "/images/speakers/lucila-padilla-wellness.jpg", bio: "A lo largo de su trayectoria ha trabajado con empresas, universidades y organizaciones que buscan fortalecer la mentalidad, el bienestar y la capacidad de adaptación de sus equipos." },
  { name: "Tesh Jefferies",         category: "Wellness",                   photo: "/images/speakers/tesh-jefferies.jpg",    bio: "Experta en estrategia digital y crecimiento en el mundo online. Speaker internacional y autora bestseller que ayuda a líderes y empresas a destacar en la era digital." },
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
  const color = CAT_COLOR[speaker.category] ?? "#7c3aed";
  const photoLeft = index % 2 === 0;

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
        {speaker.category}
      </p>
      <p className="text-[#64748b] text-base leading-relaxed">{speaker.bio}</p>
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
  const color = CAT_COLOR[category] ?? "#7c3aed";

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
        {category}
      </h2>
      <div className="flex-1 h-px bg-[#e2e8f0]" />
    </motion.div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function Speakers() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const refHero = useRef(null);
  const inHero = useInView(refHero, { once: true, margin: "-80px" });

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
            Speakers que crean las empresas del futuro.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-[#64748b] text-lg leading-relaxed max-w-2xl"
          >
            Expertos internacionales en innovación, IA, crecimiento global y transformación empresarial.
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
            Todos
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
              {cat}
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
