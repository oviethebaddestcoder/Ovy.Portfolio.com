"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Layout, Database, Smartphone, Server, Palette } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React, Next.js, and modern CSS.",
      icon: <Layout className="h-10 w-10 text-primary" />,
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Express, and RESTful APIs.",
      icon: <Server className="h-10 w-10 text-primary" />,
    },
    {
      title: "Database Management",
      description: "Working with SQL and NoSQL databases like PostgreSQL, MongoDB, and Firebase.",
      icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with React Native.",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user experiences with Figma and Adobe XD.",
      icon: <Palette className="h-10 w-10 text-primary" />,
    },
    {
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following best practices.",
      icon: <Code className="h-10 w-10 text-primary" />,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the technologies and skills I've been working with
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card p-6 rounded-lg shadow-sm border border-border hover:border-primary/50 transition-colors duration-300"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <p>Skills include: &apos;JavaScript&apos;, &apos;React&apos;, and &apos;Node.js&apos;.</p>
      </div>
    </section>
  )
}

