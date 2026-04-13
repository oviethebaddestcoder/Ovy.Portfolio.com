"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "#",         label: "Home",     num: "01" },
  { href: "#about",    label: "About",    num: "02" },
  { href: "#skills",   label: "Skills",   num: "03" },
  { href: "#projects", label: "Projects", num: "04" },
  { href: "#contact",  label: "Contact",  num: "05" },
]

export default function Navbar() {
  const [active, setActive]     = useState("Home")
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const threshold = window.innerHeight * 0.55
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const y = window.scrollY
      document.body.style.cssText = `
        overflow: hidden;
        position: fixed;
        top: -${y}px;
        left: 0; right: 0;
      `
    } else {
      const top = Math.abs(parseInt(document.body.style.top || "0"))
      document.body.style.cssText = ""
      window.scrollTo(0, top)
    }
  }, [open])

  const handleNav = useCallback((label: string) => {
    setActive(label)
    setOpen(false)
  }, [])

  // Scrolled state changes the navbar background; always dark
  const isTransparent = !scrolled && !open

  return (
    <>
      <header
        style={{ paddingTop: "env(safe-area-inset-top)" }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-in-out
          ${isTransparent
            ? "bg-transparent border-b border-white/10"
            : "bg-[#0a0a0a] border-b border-white/10 shadow-[0_2px_24px_0_rgba(0,0,0,0.5)]"
          }
        `}
      >
        <div className="flex items-stretch h-[52px] sm:h-[56px]">

          {/* ── Logo ── */}
          <Link
            href="/"
            onClick={() => handleNav("Home")}
            className="
              flex items-center shrink-0 px-4 sm:px-5 md:px-6
              text-[11px] font-black tracking-[0.22em] uppercase
              text-white/90 hover:text-white
              border-r border-white/10
              transition-colors duration-200
            "
          >
            Ovycodes
          </Link>

          {/* ── Desktop links ── */}
          <nav className="hidden md:flex items-stretch">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleNav(link.label)}
                className={`
                  relative flex items-center px-4 lg:px-5
                  text-[11px] font-mono tracking-[0.06em] uppercase
                  transition-all duration-200 border-r border-white/[0.08]
                  ${active === link.label
                    ? "text-white"
                    : "text-white/35 hover:text-white/70 hover:bg-white/[0.04]"
                  }
                `}
              >
                {link.label}
                {active === link.label && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* ── Right block ── */}
          <div className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 md:px-5 ml-auto border-l border-white/10">

            {/* Availability dot — hidden on small screens */}
            <span className="hidden lg:flex items-center gap-2">
              <span className="relative flex h-[7px] w-[7px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-emerald-400" />
              </span>
              <span className="text-[10px] font-mono tracking-wide text-white/40">
                Available
              </span>
            </span>

            {/* Hamburger — mobile/tablet only (hidden md+) */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="
                md:hidden
                relative flex items-center justify-center
                w-9 h-9 rounded-md
                bg-white/[0.08] hover:bg-white/[0.14]
                border border-white/[0.12]
                transition-colors duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
              "
            >
              <span className="flex flex-col gap-[5px] items-center">
                <motion.span
                  animate={open
                    ? { rotate: 45, y: 6.5, width: 18 }
                    : { rotate: 0,  y: 0,   width: 18 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="block h-[1.5px] bg-white/90 rounded-full origin-center"
                  style={{ width: 18 }}
                />
                <motion.span
                  animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.15 }}
                  className="block h-[1.5px] bg-white/90 rounded-full"
                  style={{ width: 12 }}
                />
                <motion.span
                  animate={open
                    ? { rotate: -45, y: -6.5, width: 18 }
                    : { rotate: 0,   y: 0,    width: 18 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="block h-[1.5px] bg-white/90 rounded-full origin-center"
                  style={{ width: 18 }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile fullscreen menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            style={{
              paddingTop: "calc(52px + env(safe-area-inset-top))",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col md:hidden"
          >
            {/* Nav items */}
            <nav className="flex-1 flex flex-col justify-center px-0">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.055, duration: 0.25, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => handleNav(link.label)}
                    className={`
                      group flex items-center justify-between
                      px-6 sm:px-8 py-[15px] sm:py-[18px]
                      border-b border-white/[0.05]
                      transition-colors duration-150
                      ${active === link.label ? "bg-white/[0.04]" : "hover:bg-white/[0.03]"}
                    `}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-[10px] font-mono text-white/20 tabular-nums w-5 shrink-0">
                        {link.num}
                      </span>
                      <span className={`
                        text-[28px] sm:text-[34px] font-black tracking-tight uppercase leading-none
                        transition-colors duration-150
                        ${active === link.label
                          ? "text-white"
                          : "text-white/45 group-hover:text-white/80"}
                      `}>
                        {link.label}
                      </span>
                    </div>
                    <span className={`
                      text-sm transition-all duration-200
                      ${active === link.label
                        ? "text-white/60 translate-x-0"
                        : "text-white/15 group-hover:text-white/40 group-hover:translate-x-1"}
                    `}>
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-between px-6 sm:px-8 py-5 border-t border-white/[0.06]"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-[6px] w-[6px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-emerald-400" />
                </span>
                <span className="text-[10px] font-mono tracking-wide text-white/35">
                  Open to work
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/20">
                Lagos · {new Date().getFullYear()}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}