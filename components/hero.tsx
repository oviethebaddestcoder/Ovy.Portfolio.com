"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const stack = ["React", "Next.js", "TypeScript", "Node.js", "Express", "MySQL", "Tailwind"]

/* ─── Animated SVG Illustration ─────────────────────────────────────── */
function DevIllustration() {
  return (
    <svg
      viewBox="0 0 480 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <style>{`
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseRing {
          0%   { r: 6;  opacity: 0.7; }
          100% { r: 20; opacity: 0; }
        }
        @keyframes orbitA {
          from { transform: rotate(0deg)   translateX(72px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(72px) rotate(-360deg); }
        }
        @keyframes orbitB {
          from { transform: rotate(120deg)  translateX(110px) rotate(-120deg); }
          to   { transform: rotate(480deg)  translateX(110px) rotate(-480deg); }
        }
        @keyframes orbitC {
          from { transform: rotate(240deg)  translateX(90px)  rotate(-240deg); }
          to   { transform: rotate(600deg)  translateX(90px)  rotate(-600deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.15; }
          50%       { opacity: 0.45; }
        }
        @keyframes scan {
          0%   { transform: translateY(0px); opacity: 0.5; }
          80%  { opacity: 0.5; }
          100% { transform: translateY(118px); opacity: 0; }
        }

        .line-draw {
          stroke-dasharray: 700;
          stroke-dashoffset: 700;
          animation: draw 2s ease forwards;
        }
        .line-draw-2 {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: draw 2.4s ease forwards;
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; opacity: 0; }
        .float   { animation: floatY 5.5s ease-in-out infinite; }
        .shimmer { animation: shimmer 3s ease-in-out infinite; }

        .node-a { transform-origin: 240px 222px; animation: orbitA  9s linear infinite; }
        .node-b { transform-origin: 240px 222px; animation: orbitB 14s linear infinite; }
        .node-c { transform-origin: 240px 222px; animation: orbitC 11s linear infinite; }
      `}</style>

      {/* ── Background geometry ── */}
      {/* Outer hex */}
      <polygon
        points="240,28 416,132 416,342 240,446 64,342 64,132"
        stroke="rgba(255,255,255,0.045)"
        strokeWidth="1" fill="none"
        className="line-draw"
        style={{ animationDelay: "0s" }}
      />
      {/* Inner hex */}
      <polygon
        points="240,72 388,156 388,320 240,404 92,320 92,156"
        stroke="rgba(255,255,255,0.03)"
        strokeWidth="1" fill="none"
        className="line-draw"
        style={{ animationDelay: "0.15s" }}
      />

      {/* Axis guides */}
      <line x1="240" y1="18" x2="240" y2="502" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
      <line x1="18"  y1="237" x2="462" y2="237" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />

      {/* Corner ticks */}
      {[[64,132],[416,132],[416,342],[64,342]].map(([x,y],i) => (
        <g key={i}>
          <line x1={x-9} y1={y} x2={x+9} y2={y} stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
          <line x1={x} y1={y-9} x2={x} y2={y+9} stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
        </g>
      ))}

      {/* ── Terminal window (floating center) ── */}
      <g className="float" style={{ animationDelay: "0s" }}>
        {/* Frame */}
        <rect
          x="126" y="146" width="228" height="152" rx="7"
          fill="rgba(8,8,8,0.96)"
          stroke="rgba(255,255,255,0.13)"
          strokeWidth="1"
          className="fade-up"
          style={{ animationDelay: "0.35s" }}
        />
        {/* Title bar */}
        <rect x="126" y="146" width="228" height="28" rx="7" fill="rgba(255,255,255,0.04)" />
        <rect x="126" y="160" width="228" height="14" fill="rgba(255,255,255,0.04)" />

        {/* Traffic lights */}
        <circle cx="146" cy="160" r="4.5" fill="rgba(255,95,86,0.75)" />
        <circle cx="161" cy="160" r="4.5" fill="rgba(255,189,46,0.75)" />
        <circle cx="176" cy="160" r="4.5" fill="rgba(39,201,63,0.75)" />

        {/* Window title */}
        <text x="240" y="164" textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="7.5" fontFamily="monospace" letterSpacing="1">
          ovycodes — zsh
        </text>

        {/* Code lines */}
        {[
          { y: 196, w: 130, col: "rgba(52,211,153,0.85)", delay: "0.6s" },
          { y: 212, w:  82, col: "rgba(255,255,255,0.22)", delay: "0.8s" },
          { y: 228, w: 105, col: "rgba(255,255,255,0.22)", delay: "1.0s" },
          { y: 244, w:  65, col: "rgba(96,165,250,0.55)",  delay: "1.2s" },
          { y: 260, w: 148, col: "rgba(255,255,255,0.14)", delay: "1.4s" },
          { y: 276, w:  95, col: "rgba(255,255,255,0.14)", delay: "1.6s" },
        ].map(({ y, w, col, delay }, i) => (
          <rect
            key={i} x="146" y={y} width={w} height="6.5" rx="2"
            fill={col}
            className="fade-up"
            style={{ animationDelay: delay }}
          />
        ))}

        {/* Blinking cursor */}
        <rect
          x="146" y="276" width="8" height="9" rx="1.5"
          fill="rgba(52,211,153,0.95)"
          style={{ animation: "blink 1s step-end infinite", animationDelay: "2s" }}
        />

        {/* Scanline */}
        <clipPath id="tc"><rect x="126" y="174" width="228" height="124" /></clipPath>
        <rect
          x="126" y="174" width="228" height="5"
          fill="rgba(52,211,153,0.07)"
          clipPath="url(#tc)"
          style={{ animation: "scan 3.5s linear infinite", animationDelay: "0.8s" }}
        />
      </g>

      {/* ── Orbit rings ── */}
      <circle cx="240" cy="222" r="72"  stroke="rgba(255,255,255,0.065)" strokeWidth="1" strokeDasharray="4 7"  fill="none" />
      <circle cx="240" cy="222" r="110" stroke="rgba(255,255,255,0.04)"  strokeWidth="1" strokeDasharray="3 9"  fill="none" />
      <circle cx="240" cy="222" r="90"  stroke="rgba(255,255,255,0.028)" strokeWidth="1" strokeDasharray="2 11" fill="none" />

      {/* Node A — React emerald */}
      <g className="node-a">
        <circle cx="240" cy="222" r="11" fill="rgba(8,8,8,1)" stroke="rgba(52,211,153,0.75)" strokeWidth="1.5" />
        <text x="240" y="226.5" textAnchor="middle" fill="rgba(52,211,153,0.95)" fontSize="7" fontFamily="monospace" fontWeight="bold">Re</text>
        <circle cx="240" cy="222" r="6" fill="none" stroke="rgba(52,211,153,0.35)" strokeWidth="1"
          style={{ animation: "pulseRing 2.2s ease-out infinite" }} />
      </g>

      {/* Node B — TypeScript blue */}
      <g className="node-b">
        <circle cx="240" cy="222" r="10" fill="rgba(8,8,8,1)" stroke="rgba(96,165,250,0.72)" strokeWidth="1.5" />
        <text x="240" y="226" textAnchor="middle" fill="rgba(96,165,250,0.95)" fontSize="6.5" fontFamily="monospace" fontWeight="bold">TS</text>
      </g>

      {/* Node C — Node white */}
      <g className="node-c">
        <circle cx="240" cy="222" r="10" fill="rgba(8,8,8,1)" stroke="rgba(255,255,255,0.38)" strokeWidth="1.5" />
        <text x="240" y="226" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="6" fontFamily="monospace" fontWeight="bold">JS</text>
      </g>

      {/* ── Corner data chips ── */}
      {/* Top-left */}
      <g className="fade-up" style={{ animationDelay: "0.8s" }}>
        <rect x="60" y="84" width="94" height="34" rx="5"
          fill="rgba(8,8,8,0.92)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="78" cy="101" r="5" fill="rgba(52,211,153,0.85)" />
        <rect x="90" y="95" width="44" height="5.5" rx="2" fill="rgba(255,255,255,0.22)" />
        <rect x="90" y="105" width="32" height="4"   rx="2" fill="rgba(255,255,255,0.09)" />
      </g>

      {/* Bottom-right */}
      <g className="fade-up" style={{ animationDelay: "1.05s" }}>
        <rect x="328" y="394" width="94" height="34" rx="5"
          fill="rgba(8,8,8,0.92)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="346" cy="411" r="5" fill="rgba(96,165,250,0.85)" />
        <rect x="358" y="405" width="48" height="5.5" rx="2" fill="rgba(255,255,255,0.22)" />
        <rect x="358" y="415" width="34" height="4"   rx="2" fill="rgba(255,255,255,0.09)" />
      </g>

      {/* ── Circuit traces ── */}
      <polyline
        points="154,118 154,146"
        stroke="rgba(52,211,153,0.22)" strokeWidth="1"
        className="line-draw-2" style={{ animationDelay: "0.9s" }}
      />
      <polyline
        points="374,394 374,362 352,298"
        stroke="rgba(96,165,250,0.16)" strokeWidth="1"
        className="line-draw-2" style={{ animationDelay: "1.1s" }}
      />
      <polyline
        points="60,268 98,268 98,298"
        stroke="rgba(255,255,255,0.07)" strokeWidth="1"
        className="line-draw-2" style={{ animationDelay: "0.75s" }}
      />

      {/* ── Dot grid ── */}
      {Array.from({ length: 4 }).flatMap((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <circle
            key={`d-${row}-${col}`}
            cx={66 + col * 10} cy={382 + row * 10}
            r="1.3" fill="rgba(255,255,255,0.15)"
          />
        ))
      )}

      {/* ── Central radial glow ── */}
      <defs>
        <radialGradient id="glow" cx="50%" cy="43%" r="28%">
          <stop offset="0%"   stopColor="rgba(52,211,153,0.13)" />
          <stop offset="100%" stopColor="rgba(52,211,153,0)" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="480" height="520" fill="url(#glow)" className="shimmer" />

      {/* ── Bottom label pill ── */}
      <g className="fade-up" style={{ animationDelay: "1.7s" }}>
        <rect x="172" y="446" width="136" height="24" rx="12"
          fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="240" y="462" textAnchor="middle"
          fill="rgba(255,255,255,0.28)" fontSize="8.5"
          fontFamily="monospace" letterSpacing="3.5">
          BUILDING · SHIPPING
        </text>
      </g>
    </svg>
  )
}

/* ─── Hero ───────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden flex flex-col">

      {/* Faint grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Top label bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 border-b border-white/[0.07] mt-[52px] sm:mt-[56px]"
      >
        
        <span className="flex items-center gap-2">
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-mono tracking-wide text-white/40">
            Open to work
          </span>
        </span>
      </motion.div>

      {/* ── Main split layout ── */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_520px]">

        {/* LEFT — copy */}
        <div className="flex flex-col justify-between px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 lg:pt-20 pb-10 lg:border-r border-white/[0.07]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/30 mb-8"
            >
              Fullstack Web Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(48px,9vw,112px)] font-black tracking-tighter leading-[0.88] uppercase mb-6"
            >
              <span className="block">Ovie</span>
              <span className="block text-white/20">Usman.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(14px,1.6vw,17px)] text-white/40 max-w-[500px] leading-[1.8] mb-10"
            >
              I build fast, scalable web products — clean frontends, solid backends,
              zero excuses. From Lagos to the world.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a0a0a] text-[12px] font-black tracking-[0.12em] uppercase hover:bg-emerald-400 transition-colors duration-200"
              >
                View My Work
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.15] text-[12px] font-semibold tracking-[0.12em] uppercase text-white/60 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                Let's Talk
              </Link>
            </motion.div>
          </div>

          {/* Stats + stack bottom strip */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="grid grid-cols-3 gap-0 pt-8 pb-8 border-t border-white/[0.07]"
            >
              {[
                { value: "12+", label: "Projects",  sub: "Shipped" },
                { value: "2",   label: "Companies", sub: "Product Eng." },
                { value: "3+",  label: "Years",     sub: "Experience" },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`${i !== 0 ? "pl-5 sm:pl-8 border-l border-white/[0.07]" : "pr-5 sm:pr-8"}`}
                >
                  <p className="text-[clamp(1.6rem,4vw,2.8rem)] font-black leading-none text-white mb-1 tracking-tight">
                    {s.value}
                  </p>
                  <p className="text-[11px] font-semibold text-white/50 mb-0.5">{s.label}</p>
                  <p className="text-[10px] font-mono text-white/25 uppercase tracking-wide hidden sm:block">{s.sub}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.62 }}
              className="flex items-center justify-between gap-4 border-t border-white/[0.07] pt-6"
            >
              <div className="flex items-center gap-1.5 flex-wrap">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2.5 py-1 border border-white/[0.1] text-white/30 tracking-wide hover:text-white/60 hover:border-white/20 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href="#about"
                className="hidden md:flex items-center gap-3 group shrink-0"
              >
                <div className="h-px w-5 bg-white/20 group-hover:w-9 group-hover:bg-white/40 transition-all duration-300" />
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/30 group-hover:text-white/60 transition-colors duration-200">
                  Scroll
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — SVG illustration */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex items-center justify-center px-8 xl:px-12 py-12 relative"
        >
          {/* Soft radial glow behind illustration */}
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <div
              className="w-[380px] h-[380px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(52,211,153,0.07) 0%, rgba(52,211,153,0.02) 40%, transparent 70%)",
              }}
            />
          </div>
          <div className="relative w-full max-w-[430px]">
            <DevIllustration />
          </div>
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div className="border-t border-white/[0.07]" />
    </section>
  )
}