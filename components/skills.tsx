"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Layout, Database, Smartphone, Server, GitBranch, Box, Layers, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks.",
      icon: Layout,
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ],
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications with scalable architectures.",
      icon: Server,
      technologies: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
    },
    {
      title: "Database Management",
      description: "Working with SQL and NoSQL databases for optimal data storage.",
      icon: Database,
      technologies: [
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      ],
    },
    {
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with native performance.",
      icon: Smartphone,
      technologies: [
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      ],
    },
    {
      title: "DevOps & Cloud",
      description: "Implementing CI/CD pipelines and managing cloud infrastructure.",
      icon: GitBranch,
      technologies: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ],
    },
    {
      title: "System Design",
      description: "Designing scalable, maintainable systems following best practices.",
      icon: Layers,
      technologies: [
        { name: "Microservices", icon: Box },
        { name: "REST APIs", icon: Server },
        { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        { name: "Clean Code", icon: Code },
      ],
    },
  ]

  const allTechnologies = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  ]

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

  return (
    <section id="skills" className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
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
          Technical Stack
        </span>
        <span className="flex items-center gap-2">
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-mono tracking-wide text-white/40">
            {allTechnologies.length}+ Technologies
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
            Expertise
          </p>
          <h2 className="text-[clamp(36px,6vw,80px)] font-black tracking-tighter leading-[0.9] uppercase">
            <span className="block">My</span>
            <span className="block text-white/20">Skills.</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07]"
        >
          {skillCategories.map((skill, index) => {
            const Icon = skill.icon
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-[#0a0a0a] group p-6 sm:p-8"
              >
                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-white/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-8 h-px bg-gradient-to-r from-white/10 to-transparent" />

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[10px] font-mono text-white/20 tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-2 border border-white/[0.1] rounded-lg group-hover:border-emerald-400/30 transition-colors duration-300"
                  >
                    <Icon className="h-4 w-4 text-white/40 group-hover:text-emerald-400 transition-colors duration-300" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-[13px] text-white/40 leading-relaxed mb-6">
                  {skill.description}
                </p>

                {/* Technology Stack */}
                <div className="border-t border-white/[0.07] pt-6">
                  <p className="text-[10px] font-mono tracking-wider text-white/20 mb-4 uppercase">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className="group/tech relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tech.logo ? (
                          <div className="relative w-8 h-8 rounded border border-white/[0.1] bg-white/[0.03] p-1.5 hover:border-white/20 transition-colors">
                            <img 
                              src={tech.logo} 
                              alt={tech.name}
                              className="w-full h-full object-contain opacity-60 group-hover/tech:opacity-100 transition-opacity"
                            />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded border border-white/[0.1] bg-white/[0.03] p-1.5 flex items-center justify-center text-white/40 group-hover/tech:text-emerald-400 transition-colors">
                            {tech.icon && <tech.icon className="h-4 w-4" />}
                          </div>
                        )}
                        {/* Tooltip */}
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-white text-[#0a0a0a] text-[10px] font-mono rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* All Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-white/[0.07]"
        >
          <div className="flex items-center justify-between mb-8">
            <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/30">
              Tech Stack
            </p>
            <span className="text-[10px] font-mono text-white/20">
              {allTechnologies.length} Technologies
            </span>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-px bg-white/[0.07]">
            {allTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="group relative bg-[#0a0a0a] aspect-square flex items-center justify-center p-4 hover:bg-white/[0.02] transition-colors duration-300"
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="w-full h-full object-contain opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-emerald-400 text-[#0a0a0a] text-[10px] font-mono font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-white/[0.07]"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/30 mb-3">
                Collaboration
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Need a specific skill set?
              </h3>
            </div>
            
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0a0a0a] text-[12px] font-black tracking-[0.12em] uppercase hover:bg-emerald-400 transition-colors duration-200 shrink-0"
            >
              Discuss Project
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