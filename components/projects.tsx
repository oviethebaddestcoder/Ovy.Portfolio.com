"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with product listings, cart functionality, and secure checkout process.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Firebase", "Framer Motion", "Styled Components"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills with a modern design.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new
            technologies.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-24"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

