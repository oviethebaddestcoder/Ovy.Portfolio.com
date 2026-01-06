"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Layout, Database, Smartphone, Server, GitBranch, Box, Layers } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
      icon: <Layout className="h-8 w-8" />,
      gradient: "from-blue-500 to-cyan-500",
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
      description: "Creating robust server-side applications with scalable architectures and RESTful APIs.",
      icon: <Server className="h-8 w-8" />,
      gradient: "from-emerald-500 to-teal-500",
      technologies: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ],
    },
    {
      title: "Database Management",
      description: "Working with both SQL and NoSQL databases for optimal data storage and retrieval.",
      icon: <Database className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-500",
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
      icon: <Smartphone className="h-8 w-8" />,
      gradient: "from-orange-500 to-red-500",
      technologies: [
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      ],
    },
    {
      title: "DevOps & Cloud",
      description: "Implementing CI/CD pipelines and managing cloud infrastructure for seamless deployment.",
      icon: <GitBranch className="h-8 w-8" />,
      gradient: "from-indigo-500 to-blue-500",
      technologies: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ],
    },
    {
      title: "System Design & Architecture",
      description: "Designing scalable, maintainable systems following best practices and design patterns.",
      icon: <Layers className="h-8 w-8" />,
      gradient: "from-yellow-500 to-orange-500",
      technologies: [
        { name: "Microservices", icon: <Box className="h-6 w-6" /> },
        { name: "REST APIs", icon: <Server className="h-6 w-6" /> },
        { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        { name: "Clean Code", icon: <Code className="h-6 w-6" /> },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build exceptional digital solutions
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-card rounded-2xl shadow-lg border border-border hover:border-transparent overflow-hidden transition-all duration-300"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              <div className="absolute inset-[1px] bg-card rounded-2xl z-0" />
              
              <div className="relative z-10 p-6">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {skill.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {skill.description}
                </p>

                {/* Technology logos/icons */}
                <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-border/50">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="group/tech relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech.logo ? (
                        <div className="relative w-8 h-8 rounded-lg bg-muted/50 p-1.5 hover:bg-muted transition-colors">
                          <img 
                            src={tech.logo} 
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${skill.gradient} p-1.5 flex items-center justify-center text-white`}>
                          {tech.icon}
                        </div>
                      )}
                      {/* Tooltip */}
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "200% 200%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* All Technologies Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
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
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-card border border-border p-3 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}