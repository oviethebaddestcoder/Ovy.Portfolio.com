"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github, Rocket, ShoppingCart, CheckSquare, Scissors, Pill, Sparkles } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "Hybrid Coaching Accountability Platform",
      description: "A comprehensive coaching platform bridging trainers and clients with real-time progress tracking and personalized workout plans.",
      image: "/images/placeholder1.png",
      tags: ["Next.js", "TypeScript", "MongoDB"],
      liveUrl: "https://www.creneura.com",
      githubUrl: null,
      icon: Rocket,
      category: "Web Application",
      year: "2024",
    },
    {
      title: "Food Marketplace Platform",
      description: "Modern food delivery connecting local restaurants with customers. Real-time order tracking and secure payments.",
      image: "/images/food.png",
      tags: ["React", "Node.js", "Stripe API"],
      liveUrl: "https://kittchenns-frontend.vercel.app/",
      githubUrl: null,
      icon: ShoppingCart,
      category: "E-Commerce",
      year: "2024",
    },
    {
      title: "Task Management System",
      description: "Productivity tool for managing tasks and team collaboration. Drag-and-drop functionality with team workspaces.",
      image: "/images/SA.png",
      tags: ["React", "Firebase", "Framer Motion"],
      liveUrl: null,
      githubUrl: null,
      icon: CheckSquare,
      category: "Productivity",
      year: "2024",
    },
    {
      title: "Treazy - Hair & Beauty Platform",
      description: "Elegant booking platform for hair and beauty services with appointment scheduling and portfolio galleries.",
      image: "/images/save.png",
      tags: ["Next.js", "Tailwind CSS", "Vercel"],
      liveUrl: "https://treazy-psi.vercel.app/",
      githubUrl: null,
      icon: Scissors,
      category: "Service Platform",
      year: "2024",
    },
    {
      title: "AI-Powered Drug Adherence Monitor",
      description: "Healthcare solution leveraging AI for medication adherence with intelligent reminders and health tracking.",
      image: "/images/well.png",
      tags: ["TypeScript", "AI/ML", "Healthcare"],
      liveUrl: "https://lih-wellcare-companion-pyk8q.sevalla.app/",
      githubUrl: null,
      icon: Pill,
      category: "Healthcare Tech",
      year: "2024",
    },
    {
      title: "Health Store",
      description: "E-commerce platform for healthcare products with seamless checkout and inventory management.",
      image: "/images/health.png",
      tags: ["React", "Supabase", "E-Commerce"],
      liveUrl: "https://healthexcellence.shop/",
      githubUrl: null,
      icon: Sparkles,
      category: "Healthcare Tech",
      year: "2024",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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

  return (
    <section id="projects" className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
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
          Selected Work
        </span>
        <span className="flex items-center gap-2">
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-mono tracking-wide text-white/40">
            {projects.length} Projects
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
            Portfolio
          </p>
          <h2 className="text-[clamp(36px,6vw,80px)] font-black tracking-tighter leading-[0.9] uppercase">
            <span className="block">Featured</span>
            <span className="block text-white/20">Projects.</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.07]"
        >
          {projects.map((project, index) => {
            const Icon = project.icon
            const isHovered = hoveredIndex === index
            
            return (
              <motion.article
                key={index}
                variants={itemVariants}
                className="relative bg-[#0a0a0a] group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative p-6 sm:p-8 lg:p-10 border-b border-white/[0.07] lg:border-b-0">
                  {/* Project Number & Icon */}
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-[10px] font-mono text-white/20 tracking-wider">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <motion.div
                      animate={{ rotate: isHovered ? 5 : 0, scale: isHovered ? 1.1 : 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="p-2 border border-white/[0.1] rounded-lg"
                    >
                      <Icon className="h-4 w-4 text-white/40" />
                    </motion.div>
                  </div>

                  {/* Image */}
                  <div className="relative mb-8 overflow-hidden rounded-lg border border-white/[0.07]">
                    <div className="aspect-[16/10] bg-[#111] relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                      {/* Scanline effect */}
                      <div 
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)"
                        }}
                      />
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-[#0a0a0a]/90 backdrop-blur-md rounded text-[10px] font-mono text-white/50 border border-white/[0.1] tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    {/* Live indicator */}
                    {project.liveUrl && (
                      <div className="absolute top-4 right-4">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 backdrop-blur-md rounded text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                          </span>
                          LIVE
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-[13px] text-white/40 leading-relaxed max-w-md">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-[10px] font-mono px-2.5 py-1 border border-white/[0.1] text-white/30 tracking-wide hover:text-white/50 hover:border-white/20 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-6 border-t border-white/[0.07] mt-6">
                      {project.liveUrl ? (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-white/60 hover:text-emerald-400 transition-colors duration-200"
                        >
                          View Project
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </Link>
                      ) : (
                        <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/20">
                          Coming Soon
                        </span>
                      )}
                      
                      {project.githubUrl ? (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 hover:text-white/60 transition-colors duration-200"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Source
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-white/15">
                          <Github className="h-3.5 w-3.5" />
                          Private
                        </span>
                      )}

                      <span className="ml-auto text-[10px] font-mono text-white/20">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-white/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-8 h-px bg-gradient-to-r from-white/10 to-transparent" />
              </motion.article>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-white/[0.07]"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/30 mb-3">
                Next Steps
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Have a project in mind?
              </h3>
            </div>
            
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0a0a0a] text-[12px] font-black tracking-[0.12em] uppercase hover:bg-emerald-400 transition-colors duration-200 shrink-0"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div className="border-t border-white/[0.07]" />
    </section>
  )
}