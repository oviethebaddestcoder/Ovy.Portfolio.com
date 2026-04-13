"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, MapPin, Phone, Github, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Ovieanthony85@gmail.com",
      href: "mailto:Ovieanthony85@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 806 415 0544",
      href: "tel:+2348064150544",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/oviethebaddestcoder/",
    },
    {
      name: "X",
      label: "X (Twitter)",
      href: "https://x.com/OvyTechConsult",
      customIcon: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Faint grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top label bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 border-b border-white/[0.07] mt-[52px] sm:mt-[56px]"
      >
        <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-white/30">
          Get In Touch
        </span>
        <span className="flex items-center gap-2">
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-mono tracking-wide text-white/40">
            Available for Work
          </span>
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 lg:mb-24"
        >
          <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/30 mb-6">
            Contact
          </p>
          <h2 className="text-[clamp(36px,6vw,80px)] font-black tracking-tighter leading-[0.9] uppercase">
            <span className="block">Let's</span>
            <span className="block text-white/20">Connect.</span>
          </h2>
          <p className="text-[13px] text-white/40 max-w-md leading-relaxed mt-6">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl"
        >
          {/* Contact Info Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.07]">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-[#0a0a0a] group p-6 sm:p-8"
                >
                  {/* Corner decorations */}
                  <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-white/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-8 h-px bg-gradient-to-r from-white/10 to-transparent" />

                  <div className="flex flex-col items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="p-2 border border-white/[0.1] rounded-lg group-hover:border-emerald-400/30 transition-colors duration-300"
                    >
                      <item.icon className="h-4 w-4 text-white/40 group-hover:text-emerald-400 transition-colors duration-300" />
                    </motion.div>
                    
                    <div>
                      <p className="text-[10px] font-mono tracking-wider text-white/20 mb-1 uppercase">
                        {item.label}
                      </p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-sm font-medium text-white/60 hover:text-emerald-400 transition-colors duration-200"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-sm font-medium text-white/60">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div variants={itemVariants} className="mb-16">
            <Link
              href="https://wa.me/2348064150544?text=Hi%20Ovie,%20I'd%20like%20to%20discuss%20a%20project%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-8 py-5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="text-[12px] font-black tracking-[0.12em] uppercase">
                Message on WhatsApp
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/30 mb-6">
              Connect
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-5 py-3 border border-white/[0.1] hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300"
                  >
                    <div className="p-1.5 border border-white/[0.1] rounded group-hover:border-emerald-400/30 transition-colors duration-300">
                      {social.customIcon ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 text-white/40 group-hover:text-emerald-400 transition-colors fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      ) : (
                        <social.icon className="h-3.5 w-3.5 text-white/40 group-hover:text-emerald-400 transition-colors duration-300" />
                      )}
                    </div>
                    <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/50 group-hover:text-white/70 transition-colors duration-300">
                      {social.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Availability Status */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-12 border-t border-white/[0.07]"
          >
            <div className="flex items-center gap-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
              </span>
              <div>
                <p className="text-sm font-bold text-emerald-400 mb-0.5">Available for Work</p>
                <p className="text-[11px] font-mono text-white/30">
                  Currently accepting new projects and collaborations
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div className="border-t border-white/[0.07]" />
    </section>
  )
}