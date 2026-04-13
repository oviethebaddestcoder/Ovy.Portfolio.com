"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ArrowUpRight, MapPin, Mail } from "lucide-react"

const stats = [
  { value: "12+",  label: "Projects Shipped",    sub: "end-to-end" },
  { value: "2",    label: "Companies Worked At",  sub: "as product engineer" },
  { value: "100%", label: "Client Satisfaction",  sub: "always" },
]

const stack = ["React", "TypeScript", "Node.js", "Express", "MySQL", "Tailwind"]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  const fade = (delay = 0) => ({
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
  })

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Faint grid texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top rule */}
      <div className="border-t border-white/[0.07]" />

      {/* ── Section label row ── */}
      <motion.div
        variants={fade(0)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 border-b border-white/[0.07]"
      >
      
        <span className="text-[10px] font-mono text-white/20 tracking-wide">
          Lagos, Nigeria · GMT+1
        </span>
      </motion.div>

      {/* ── Main grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] min-h-[680px]">

        {/* LEFT — copy column */}
        <div className="flex flex-col justify-between px-6 sm:px-10 lg:px-16 py-14 lg:py-16 border-b lg:border-b-0 lg:border-r border-white/[0.07]">

          {/* Headline */}
          <div>
            <motion.p
              variants={fade(0.05)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/30 mb-6"
            >
              Full Stack Developer
            </motion.p>

            <motion.h2
              variants={fade(0.1)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[clamp(2.6rem,6vw,5rem)] font-black leading-[0.92] tracking-tight mb-8 uppercase"
            >
              I don't just{" "}
              <span className="relative inline-block">
                write code.
                <motion.span
                  className="absolute bottom-1 left-0 h-[3px] bg-emerald-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.55, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
              <br />
              <span className="text-white/20">I ship</span> products.
            </motion.h2>

            <motion.p
              variants={fade(0.18)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[15px] sm:text-base leading-[1.8] text-white/50 max-w-[520px] mb-4"
            >
              I'm Ovie — a full stack developer from Lagos with a reputation for turning
              complex requirements into clean, fast, scalable products. I've worked
              across two companies as a Product Engineer, shipping real software
              that real users depend on.
            </motion.p>

            <motion.p
              variants={fade(0.24)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[15px] sm:text-base leading-[1.8] text-white/50 max-w-[520px] mb-10"
            >
              Whether it's architecting a Node/Express backend, building a pixel-perfect
              React UI, or designing a MySQL schema from scratch — I own it end to end.
              No hand-holding. No half-baked deliverables.
            </motion.p>

            {/* Stack pills */}
            <motion.div
              variants={fade(0.3)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap gap-2 mb-12"
            >
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] font-mono tracking-wide border border-white/[0.12] rounded-full text-white/50 hover:text-white hover:border-white/30 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Contact strip */}
            <motion.div
              variants={fade(0.36)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="mailto:Ovieanthony85@gmail.com"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#0a0a0a] text-[13px] font-bold tracking-wide hover:bg-emerald-400 transition-colors duration-200"
              >
                <Mail className="h-3.5 w-3.5" />
                Hire Me
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/[0.1] text-[13px] text-white/40">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                Lagos, Nigeria · Open to Remote
              </div>
            </motion.div>
          </div>

          {/* Stat strip — bottom of left col */}
          <motion.div
            variants={fade(0.42)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="hidden lg:grid grid-cols-3 gap-0 mt-16 pt-8 border-t border-white/[0.07]"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className={`pr-6 ${i !== 0 ? "pl-6 border-l border-white/[0.07]" : ""}`}
              >
                <p className="text-[2.2rem] font-black leading-none text-white mb-1">{s.value}</p>
                <p className="text-[11px] font-semibold text-white/60 mb-0.5">{s.label}</p>
                <p className="text-[10px] font-mono text-white/25 uppercase tracking-wide">{s.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — image column */}
        <motion.div
          variants={fade(0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative flex flex-col"
        >
          {/* Image fills the column */}
          <div className="relative flex-1 min-h-[420px] lg:min-h-0 overflow-hidden">
            <Image
              src="/images/ovy-Photoroom.png"
              alt="Ovie Usman — Fullstack Developer"
              fill
              className="object-cover object-top"
              priority
            />

            {/* Dark gradient overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

            {/* Availability badge — pinned bottom-left inside the image */}
            <motion.div
              className="absolute bottom-6 left-5 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0f0f0f]/90 backdrop-blur-sm border border-white/[0.1]"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-mono text-white/60 tracking-wide">
                Available for work
              </span>
            </motion.div>

            {/* Exp badge — top-right */}
            <motion.div
              className="absolute top-5 right-5 flex flex-col items-center justify-center w-[72px] h-[72px] rounded-full bg-[#0f0f0f]/90 backdrop-blur-sm border border-white/[0.12]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.45 }}
            >
              <span className="text-[22px] font-black text-white leading-none">3+</span>
              <span className="text-[9px] font-mono text-white/40 tracking-wide uppercase text-center leading-tight mt-0.5">yrs exp</span>
            </motion.div>
          </div>

          {/* Mobile stat strip below image */}
          <div className="lg:hidden grid grid-cols-3 gap-0 border-t border-white/[0.07] px-6 py-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`${i !== 0 ? "pl-4 border-l border-white/[0.07]" : "pr-4"}`}
              >
                <p className="text-[1.6rem] font-black leading-none text-white mb-1">{s.value}</p>
                <p className="text-[10px] font-semibold text-white/50 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div className="border-t border-white/[0.07]" />
    </section>
  )
}