"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle,
  Download,
  Mail,
  X,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const technologies = [
  {
    image: "/images/tech-ai.png",
    label: "Artificial Intelligence",
    sublabel: "is transforming decision-making",
    desc: "Machine learning, generative AI & autonomous systems reshaping every industry.",
  },
  {
    image: "/images/tech-biotech.png",
    label: "Biotechnology",
    sublabel: "is redefining medicine",
    desc: "Genomics, synthetic biology & longevity science extending human capability.",
  },
  {
    image: "/images/tech-robotics.png",
    label: "Robotics",
    sublabel: "is reshaping industries",
    desc: "Autonomous systems, humanoid robots & industrial automation redefining labor.",
  },
  {
    image: "/images/tech-quantum.png",
    label: "Quantum Computing",
    sublabel: "is approaching real-world applications",
    desc: "Post-classical computation unlocking problems impossible for today's machines.",
  },
];

const whatYouGet = [
  {
    image: "/images/whatget-access-nobg.png",
    num: "01",
    title: "Curated Access",
    desc: "Private sessions with Silicon Valley founders, investors, and researchers you cannot meet anywhere else.",
  },
  {
    image: "/images/whatget-exposure-nobg.png",
    num: "02",
    title: "Frontier Exposure",
    desc: "Hands-on visits to the labs, companies, and institutions actively building the next decade.",
  },
  {
    image: "/images/whatget-clarity-nobg.png",
    num: "03",
    title: "Strategic Clarity",
    desc: "Leave with the perspective and frameworks to make better, faster decisions in an exponential world.",
  },
];

const audiences = [
  { icon: Users, label: "Executives", desc: "C-suite & senior leaders navigating exponential change" },
  { icon: Target, label: "Founders", desc: "Entrepreneurs building companies for the next decade" },
  { icon: TrendingUp, label: "Investors", desc: "VCs & family offices seeking frontier opportunities" },
  { icon: Lightbulb, label: "Innovators", desc: "Intrapreneurs driving transformation from within" },
];

const experts = [
  {
    name: "Hod Lipson",
    role: "AI & Robotics Pioneer",
    org: "Columbia University",
    image: "/images/experts/hod-lipson.webp",
    desc: "Director of Columbia's Creative Machines Lab. Pioneer of self-aware robots. His TED Talk on AI has over 3M views.",
    initials: "HL",
  },
  {
    name: "Paul D. Roberts",
    role: "Exponential Thinker",
    org: "Singularity University",
    image: "/images/experts/paul-roberts.webp",
    desc: "Former Sr. Director of Innovation at Singularity University. Has guided thousands of executives across 80+ global programs.",
    initials: "PR",
  },
  {
    name: "Ja-Naé Duane",
    role: "Behavioral Scientist",
    org: "Brown University",
    image: "/images/experts/ja-nae-duane-hd.jpg",
    desc: "Lecturer at Brown University and author of 'The Startup Equation.' Expert in future systems dynamics and emerging tech.",
    initials: "JD",
  },
  {
    name: "Andrew Ramm",
    role: "Digital Transformation",
    org: "Former Amazon Executive",
    image: null,
    desc: "Former President & GM at Amazon Guided Shopping and Alexa Internet. Expert in AI-powered commerce and digital strategy.",
    initials: "AR",
  },
  {
    name: "Shuo Chen",
    role: "Venture Capitalist",
    org: "IOVC · UC Berkeley",
    image: "/images/experts/shuo-chen-hd.jpg",
    desc: "General Partner at IOVC with 60+ seed investments. Faculty at UC Berkeley and Stanford on entrepreneurship and innovation.",
    initials: "SC",
  },
  {
    name: "Tiffany Vora",
    role: "Vice Chair, Digital Biology",
    org: "Singularity University",
    image: "/images/experts/tiffany-vora.jpg",
    desc: "Faculty Director at Singularity University. PhD from Princeton. Expertise in genomics, synthetic biology, and longevity science.",
    initials: "TV",
  },
  {
    name: "Divya Chander",
    role: "Neuroscientist & Futurist",
    org: "Singularity University",
    image: "/images/experts/divya-chander.png",
    desc: "Chair of Neuroscience at Singularity University. Harvard/Stanford-trained anesthesiologist and NASA-affiliated researcher.",
    initials: "DC",
  },
  {
    name: "Mark Jackson",
    role: "Quantum Computing Lead",
    org: "Cambridge Quantum",
    image: "/images/experts/mark-jackson.png",
    desc: "Scientific Lead at Cambridge Quantum (Quantinuum). PhD in Theoretical Physics from Columbia. Lectures in 19 countries.",
    initials: "MJ",
  },
  {
    name: "Chris Cowart",
    role: "Managing Director",
    org: "Nomura-SRI Innovation Center",
    image: "/images/experts/chris-cowart.png",
    desc: "25+ years in executive leadership. 14 years at IDEO pioneering human-centered design. Now leading the Nomura-SRI Innovation Center.",
    initials: "CC",
  },
  {
    name: "Stanford Faculty",
    role: "HAI Institute",
    org: "Stanford University",
    image: null,
    desc: "Faculty from Stanford's Human-Centered AI Institute — the world's leading research center at the intersection of AI and humanity.",
    initials: "SU",
  },
];

const takeaways = [
  { num: "01", label: "New Perspectives", desc: "On where the world is going and what it means for your industry and organization." },
  { num: "02", label: "Real Connections", desc: "With the founders, investors, and researchers actively shaping the future." },
  { num: "03", label: "Strategic Clarity", desc: "To make better decisions, faster, in an exponential world." },
];

const testimonials = [
  { quote: "It was like opening windows to the future. Every conversation shifted something in me.", name: "Carlos Gomez Espana", role: "Board Member, ATCO" },
  { quote: "I learned more on this trip than in years of university. The access is extraordinary.", name: "Fernando Amescua", role: "CEO, KIVA" },
  { quote: "The level of access and perspective is unlike anything else available to business leaders.", name: "William Siekman", role: "Founder, Get Green" },
];

const included = [
  "Full access to the 5-day program",
  "Visits to leading companies and institutions",
  "Ground transportation during all activities",
  "Coffee breaks and lunch throughout the program",
  "Welcome cocktail and closing dinner",
  "Certificate of Participation — Stanford University HAI Institute",
];

const notIncluded = [
  "International or domestic flights",
  "Accommodation in Silicon Valley",
  "Airport transfers",
  "Breakfasts and unspecified dinners",
];

export default function MoonshotPage() {
  const refHero = useRef(null);
  const refHow = useRef(null);
  const refAbout = useRef(null);
  const refWho = useRef(null);
  const refExperts = useRef(null);
  const refTakeaways = useRef(null);
  const refTestimonials = useRef(null);
  const refInvestment = useRef(null);

  const [showContact, setShowContact] = useState(false);

  const inHero = useInView(refHero, { once: true, margin: "-40px" });
  const inHow = useInView(refHow, { once: true, margin: "-80px" });
  const inAbout = useInView(refAbout, { once: true, margin: "-80px" });
  const inWho = useInView(refWho, { once: true, margin: "-80px" });
  const inExperts = useInView(refExperts, { once: true, margin: "-80px" });
  const inTakeaways = useInView(refTakeaways, { once: true, margin: "-80px" });
  const inTestimonials = useInView(refTestimonials, { once: true, margin: "-80px" });
  const inInvestment = useInView(refInvestment, { once: true, margin: "-80px" });

  return (
    <>
      {/* ── HERO ── */}
      <section ref={refHero} className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.10),_transparent_28%),radial-gradient(circle_at_left_center,_rgba(37,99,235,0.05),_transparent_24%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8]/60 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-6 sm:pb-12 sm:pt-8 lg:px-10 lg:pb-14 lg:pt-10">
          <div className="mb-8">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm text-[#475569] transition-colors hover:text-[#0f172a]"
            >
              <ArrowLeft size={14} /> Volver a Eventos
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={inHero ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                <Image
                  src="/images/moonshot-title.png"
                  alt="The Moonshot Experience"
                  width={1559}
                  height={209}
                  priority
                  className="w-full max-w-3xl h-auto"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={inHero ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
                className="mt-6 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[minmax(300px,0.82fr)_minmax(0,1.18fr)] lg:items-center"
              >
                <div className="max-w-[640px]">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[#475569] sm:text-xs">
                    Powered by
                  </p>
                  <div className="relative h-24 sm:h-28 lg:h-32">
                    <Image
                      src="/images/wtc-loscabos.png"
                      alt="Powered by World Trade Center Los Cabos"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  animate={inHero ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.25 } }}
                  className="relative overflow-hidden rounded-2xl border border-[#8b9cff]/20 bg-[linear-gradient(90deg,#38428f_0%,#353f95_38%,#2f2d9d_100%)] p-5 shadow-[0_12px_36px_rgba(49,46,129,0.18)] backdrop-blur-sm sm:p-6"
                >
                  <motion.div
                    animate={{ x: [0, 14, 0], y: [0, -8, 0], opacity: [0.08, 0.16, 0.08] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#60a5fa]/12 blur-3xl"
                  />

                  <div className="relative z-10 flex flex-col items-start gap-4">
                    <p className="text-left text-sm font-medium leading-relaxed text-white sm:text-base">
                      A Silicon Valley immersion for leaders who refuse to learn about the future too late.
                    </p>

                    <div className="flex flex-col gap-2 text-xs text-white/80 sm:text-sm">
                      <p className="flex items-center gap-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                        <CalendarDays size={13} className="text-[#93c5fd]" />
                        Aug 31 – Sep 4, 2026
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin size={13} className="text-[#d8b4fe]" />
                        Stanford · Silicon Valley, California
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle size={13} className="text-[#38bdf8]" />
                        Includes Stanford University Certificate
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowContact(true)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#7c3aed] bg-white px-5 py-2 text-xs font-bold text-[#4c1d95] shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-colors hover:bg-[#f8f4ff] sm:text-sm"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Secure your spot
                      <ArrowRight size={12} />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IS THE FUTURE BEING BUILT? ── */}
      <section ref={refHow} className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">

          {/* Title */}
          <div className="mb-14 text-center">
            <motion.h2
              animate={inHow ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl font-light text-[#1e293b] sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              How is the future actually being built?
            </motion.h2>
            <motion.div
              animate={inHow ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-6 h-px w-full max-w-3xl bg-[#e2e8f0] origin-center"
            />
          </div>

          {/* Grid — imagen arriba, texto abajo, sin tarjeta */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:gap-x-10">
            {technologies.map(({ image, label, sublabel, desc }, i) => (
              <motion.div
                key={label}
                animate={inHow ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
                transition={{ duration: 0.7, delay: 0.25 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="flex flex-col items-center text-center"
              >
                {/* Imagen */}
                <div className="relative mb-5 w-full aspect-square max-w-[200px]">
                  <Image
                    src={image!}
                    alt={label}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Texto agrupado — sin tarjeta */}
                <p
                  className="mb-1 text-base font-bold text-[#0f1f6e] leading-snug"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {label}
                </p>
                <p className="mb-3 text-sm font-medium text-[#4c1d95] leading-snug">{sublabel}</p>
                <p className="text-xs leading-relaxed text-[#64748b]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #4c1d95 0%, #5b21b6 40%, #ffffff 100%)" }}
      >
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center lg:px-10 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            <p
              className="text-xl font-light text-white sm:text-2xl lg:text-[1.75rem] lg:leading-[1.5]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              These technologies are accelerating at the same time.
            </p>
            <p
              className="text-xl font-light text-white/80 sm:text-2xl lg:text-[1.75rem] lg:leading-[1.5]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              When they converge, entire industries change.
            </p>
            <p
              className="pt-4 text-xl font-light italic text-white/50 sm:text-2xl lg:text-[1.75rem] lg:leading-[1.5]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              By the time change becomes obvious, it&apos;s already too late.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT THE EXPERIENCE ── */}
      <section ref={refAbout} className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">

            {/* Left text */}
            <div>
              {["This is not a conference.", "This is not a lecture series.", "It is access."].map((line, i) => (
                <motion.p
                  key={line}
                  animate={inAbout ? { opacity: 1, x: 0 } : { opacity: 0, x: -32 }}
                  transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                  className={`text-3xl font-bold leading-tight sm:text-4xl ${i === 2 ? "text-[#4c1d95]" : "text-[#1e293b]"}`}
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {line}
                </motion.p>
              ))}

              <motion.p
                animate={inAbout ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.6, delay: 0.44, ease: "easeOut" }}
                className="mt-6 text-base leading-relaxed text-[#64748b]"
              >
                A curated 5-day immersion in Silicon Valley designed to give leaders direct access to the people, technologies, and environments shaping the next decade.
              </motion.p>

              {/* PDF download */}
              <motion.a
                animate={inAbout ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/the-moonshot-experience.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-6 py-4 text-sm font-bold text-[#1e293b] shadow-sm transition-all hover:border-[#7c3aed]/40 hover:shadow-md"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg">
                  <Image src="/images/rocket-icon.png" alt="Rocket" fill className="object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-[#1e293b]">Download Program Brochure</p>
                  <p className="text-xs font-normal text-[#94a3b8]">The Moonshot Experience · PDF</p>
                </div>
                <Download size={14} className="ml-auto text-[#94a3b8]" />
              </motion.a>
            </div>

            {/* Right — detail card */}
            <motion.div
              animate={inAbout ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="relative"
            >
              <div className="rounded-xl border border-[#e8edf3] bg-[#f0f3f7] p-6 sm:p-8 shadow-sm backdrop-blur-sm">
                {[
                  { label: "Dates", value: "Aug 31 – Sep 4, 2026", delay: 0.28 },
                  { label: "Location", value: "Stanford · Silicon Valley, CA", delay: 0.38 },
                  { label: "Duration", value: "5 full immersion days", delay: 0.48 },
                  { label: "Certificate", value: "Stanford University HAI Institute — Certificate of Participation", delay: 0.58 },
                ].map(({ label, value, delay }, i) => (
                  <motion.div
                    key={label}
                    animate={inAbout ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
                    className={i < 3 ? "mb-5" : ""}
                  >
                    <p className="mb-0.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7c3aed]">{label}</p>
                    <p className="text-sm font-semibold text-[#1e293b]" style={{ fontFamily: "var(--font-montserrat)" }}>{value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ── WHO THIS IS FOR ── */}
      <section
        ref={refWho}
        className="relative overflow-hidden py-24 lg:py-32"
        style={{ background: "linear-gradient(135deg, #eef4ff 0%, #eaf0fe 50%, #f0eeff 100%)" }}
      >
        {/* White fade top & bottom */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent z-10" />

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c7d2fe]/30 blur-3xl"
        />
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">

          {/* Header */}
          <div className="mb-20 text-center">
            <motion.p
              animate={inWho ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-[#3b6fd4]/60"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Audience
            </motion.p>
            <motion.h2
              animate={inWho ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl font-light text-[#1e293b] sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-montserrat)", letterSpacing: "0.02em" }}
            >
              Who this experience is for
            </motion.h2>
          </div>

          {/* 2×2 grid — no cards, pure text */}
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2">
            {audiences.map(({ label, desc }, i) => {
              const directions = [
                { x: -30, y: 0 },
                { x: 30,  y: 0 },
                { x: -30, y: 0 },
                { x: 30,  y: 0 },
              ];
              return (
                <motion.div
                  key={label}
                  animate={inWho ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[i] }}
                  transition={{ duration: 0.7, delay: 0.14 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col ${i % 2 === 1 ? "sm:text-right" : ""}`}
                >
                  <motion.p
                    animate={inWho ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.55, delay: 0.22 + i * 0.12 }}
                    className="mb-2 text-2xl font-semibold text-[#1e293b] sm:text-3xl"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {label}
                  </motion.p>
                  <motion.p
                    animate={inWho ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.55, delay: 0.3 + i * 0.12 }}
                    className="text-base font-light leading-relaxed text-[#64748b]"
                  >
                    {desc}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>

          {/* Curation note */}
          <motion.div
            animate={inWho ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.65, delay: 0.65 }}
            className="mt-20 text-center"
          >
            <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-[#7c3aed]/30 to-transparent" />
            <p className="mx-auto max-w-xl text-sm italic font-light leading-relaxed text-[#94a3b8]">
              This experience is not open to the general public. Each edition is carefully curated to ensure high-value conversations at every level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── THE EXPERTS (hidden — uncomment to restore) ── */}
      {/* <section
        ref={refExperts}
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(135deg, #0a0f2e 0%, #0f1f6e 45%, #1e1060 100%)" }}
      >
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#7c3aed]/20 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <motion.p
            animate={inExperts ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-center text-xs font-bold uppercase tracking-[0.28em] text-[#93c5fd]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Faculty
          </motion.p>
          <motion.h2
            animate={inExperts ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            The Experts
          </motion.h2>
          <motion.p
            animate={inExperts ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mx-auto mb-16 max-w-xl text-center text-base leading-relaxed text-white/55"
          >
            World-class faculty from Silicon Valley&apos;s most influential institutions.
          </motion.p>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {experts.map(({ name, role, org, image, desc, initials }, i) => (
              <motion.div
                key={name}
                animate={inExperts ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm transition-all hover:border-[#7c3aed]/40 hover:bg-white/10"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0d1a5e]">
                  {image ? (
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #0f1f6e, #2d1b8e)" }}>
                      <span
                        className="text-3xl font-bold text-white/40"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        {initials}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2e]/80 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col flex-1 p-4">
                  <p
                    className="text-sm font-bold text-white leading-snug"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {name}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-[#93c5fd] leading-snug">{role}</p>
                  <p className="text-[11px] text-white/40 leading-snug">{org}</p>
                  <p className="mt-3 text-[11px] leading-relaxed text-white/55">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── WHAT PARTICIPANTS LEAVE WITH ── */}
      <section ref={refTakeaways} className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <motion.p
            animate={inTakeaways ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-center text-xs font-bold uppercase tracking-[0.28em] text-[#7c3aed]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Outcomes
          </motion.p>
          <motion.h2
            animate={inTakeaways ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mb-16 text-center text-3xl font-bold text-[#1e293b] sm:text-4xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            What participants leave with
          </motion.h2>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-[#7c3aed]/40 via-[#2563eb]/30 to-transparent lg:block" />

            <div className="flex flex-col gap-10">
              {takeaways.map(({ num, label, desc }, i) => (
                <motion.div
                  key={num}
                  animate={inTakeaways ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  transition={{ duration: 0.65, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex items-center gap-8 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Content side */}
                  <div className={`flex-1 ${i % 2 !== 0 ? "lg:text-right" : ""}`}>
                    <div
                      className={`mb-2 flex items-center gap-3 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
                    >
                      <span className="text-xs font-bold text-[#7c3aed] tracking-widest">{num}</span>
                      <div className="h-px flex-1 bg-[#e2e8f0] lg:max-w-[80px]" />
                    </div>
                    <p
                      className="mb-2 text-xl font-bold text-[#1e293b]"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {label}
                    </p>
                    <p className="text-sm leading-relaxed text-[#64748b]">{desc}</p>
                  </div>

                  {/* Center dot */}
                  <div className="relative shrink-0">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                      className="h-5 w-5 rounded-full border-2 border-[#7c3aed] bg-white shadow-[0_0_16px_rgba(124,58,237,0.4)]"
                    />
                  </div>

                  {/* Spacer on alternate sides */}
                  <div className="hidden flex-1 lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        ref={refTestimonials}
        className="relative overflow-hidden py-24 lg:py-32"
        style={{ background: "linear-gradient(135deg, #fffbeb 0%, #fdf8f0 40%, #f5f0ff 100%)" }}
      >
        {/* White fade top & bottom to avoid hard cuts */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent z-10" />

        {/* Soft background orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-24 -right-24 h-[380px] w-[380px] rounded-full bg-[#fde68a]/40 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="pointer-events-none absolute -bottom-16 -left-16 h-[300px] w-[300px] rounded-full bg-[#c4b5fd]/30 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <motion.p
            animate={inTestimonials ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-center text-xs font-bold uppercase tracking-[0.28em] text-[#f59e0b]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Testimonials
          </motion.p>
          <motion.h2
            animate={inTestimonials ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mb-14 text-center text-3xl font-light text-[#1e293b] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            What participants say
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map(({ quote, name, role }, i) => (
              <motion.div
                key={name}
                animate={inTestimonials ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
                transition={{ duration: 0.65, delay: 0.12 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
                className="flex flex-col rounded-2xl border border-[#f1e8d0] bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              >
                <p className="mb-6 flex-1 text-base font-light italic leading-relaxed text-[#334155]">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0eaff] text-xs font-bold text-[#4c1d95]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1e293b]" style={{ fontFamily: "var(--font-montserrat)" }}>{name}</p>
                    <p className="text-xs text-[#94a3b8]">{role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTMENT ── */}
      <section ref={refInvestment} className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">

          {/* Header */}
          <div className="mb-16 text-center">
            <motion.p
              animate={inInvestment ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-[#94a3b8]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Investment
            </motion.p>
            <motion.h2
              animate={inInvestment ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl font-light text-[#1e293b] sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-montserrat)", letterSpacing: "0.02em" }}
            >
              Reserve Your Spot
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">

            {/* Left — price + inclusions */}
            <motion.div
              animate={inInvestment ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Price */}
              <p className="mb-1 text-xs uppercase tracking-[0.25em] text-[#94a3b8]"
                style={{ fontFamily: "var(--font-montserrat)" }}>
                Program fee
              </p>
              <div className="mb-8 flex items-baseline gap-3">
                <span className="text-6xl font-bold text-[#1e293b]"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  $8,999
                </span>
                <span className="text-base text-[#94a3b8]">USD / per person</span>
              </div>

              {/* Included */}
              <div className="mb-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">
                  Included
                </p>
                <div className="space-y-3">
                  {included.map((item, i) => (
                    <motion.div
                      key={item}
                      animate={inInvestment ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle size={14} className="mt-0.5 shrink-0 text-[#7c3aed]/60" />
                      <p className="text-sm leading-relaxed text-[#475569]">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Not included */}
              <div className="border-t border-[#f1f5f9] pt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#94a3b8]">
                  Not included
                </p>
                <div className="space-y-2.5">
                  {notIncluded.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#cbd5e1]" />
                      <p className="text-sm text-[#94a3b8]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — CTA */}
            <motion.div
              animate={inInvestment ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center"
            >
              {/* Availability note */}
              <div className="mb-8 border-l-2 border-[#e2e8f0] pl-5">
                <p className="mb-1 text-sm font-semibold text-[#1e293b]"
                  style={{ fontFamily: "var(--font-montserrat)" }}>
                  Limited seats available
                </p>
                <p className="text-sm font-light leading-relaxed text-[#64748b]">
                  Each edition is carefully curated to ensure high-quality conversations. Registration is handled directly with the GTN team.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]/60 animate-pulse" />
                  <p className="text-xs text-[#94a3b8]">Spots available for August 2026</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowContact(true)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e293b] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#0f172a]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Reserve My Spot
                  <ArrowRight size={15} />
                </motion.button>
                <a
                  href="/the-moonshot-experience.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#e2e8f0] px-8 py-3.5 text-sm font-medium text-[#64748b] transition-all hover:border-[#94a3b8] hover:text-[#1e293b]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  <Download size={14} />
                  Download Brochure
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT MODAL ── */}
      {showContact && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(15,31,110,0.45)", backdropFilter: "blur(4px)" }}
          onClick={() => setShowContact(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={() => setShowContact(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[#94a3b8] hover:bg-[#f1f5f9] hover:text-[#1e293b] transition-colors"
            >
              <X size={16} />
            </button>

            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#7c3aed]"
              style={{ fontFamily: "var(--font-montserrat)" }}>
              Contacto
            </p>
            <h3 className="mb-1 text-xl font-bold text-[#1e293b]"
              style={{ fontFamily: "var(--font-montserrat)" }}>
              ¿Cómo prefieres contactarnos?
            </h3>
            <p className="mb-6 text-sm text-[#94a3b8]">Elige tu canal preferido</p>

            <div className="flex flex-col gap-3">
              {/* Email */}
              <a
                href="mailto:contacto@globaltruenorth.com.mx"
                className="group flex items-center gap-4 rounded-xl border border-[#e2e8f0] p-4 transition-all hover:border-[#7c3aed]/40 hover:bg-[#f8f4ff]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0eaff]">
                  <Mail size={18} className="text-[#7c3aed]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1e293b]">Email</p>
                  <p className="text-xs text-[#94a3b8]">contacto@globaltruenorth.com.mx</p>
                </div>
                <ArrowRight size={14} className="ml-auto text-[#cbd5e1] group-hover:text-[#7c3aed] transition-colors" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/524775819608?text=Hola%2C%20me%20interesa%20The%20Moonshot%20Experience"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-[#e2e8f0] p-4 transition-all hover:border-[#25d366]/50 hover:bg-[#f0fdf4]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dcfce7]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25d366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1e293b]">WhatsApp</p>
                  <p className="text-xs text-[#94a3b8]">+52 (477) 581 9608</p>
                </div>
                <ArrowRight size={14} className="ml-auto text-[#cbd5e1] group-hover:text-[#25d366] transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
