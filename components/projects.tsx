"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code2, Rocket, ShoppingCart, CheckSquare, Scissors, Pill } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "Hybrid Coaching Accountability Platform",
      description:
        "A comprehensive coaching platform that bridges the gap between trainers and clients, featuring real-time progress tracking, personalized workout plans, and accountability tools to help users achieve their fitness goals.",
      image: "/images/placeholder1.png",
      tags: ["Next.js", "TypeScript", "MongoDB", "Real-time Updates"],
      liveUrl: "https://www.creneura.com",
      githubUrl: null,
      icon: Rocket,
      gradient: "from-blue-500 to-cyan-500",
      category: "Web Application",
    },
    {
      title: "Food Marketplace Platform",
      description: "A modern food delivery and marketplace application connecting local restaurants with customers. Features include real-time order tracking, secure payments, and an intuitive browsing experience.",
      image: "/images/food.png",
      tags: ["React", "Node.js", "Express", "Stripe API"],
      liveUrl: "https://kittchenns-frontend.vercel.app/",
      githubUrl: null,
      icon: ShoppingCart,
      gradient: "from-emerald-500 to-teal-500",
      category: "E-Commerce",
    },
    {
      title: "Task Management System",
      description: "A powerful productivity tool for managing tasks, projects, and team collaboration. Built with a focus on simplicity and efficiency, featuring drag-and-drop functionality and team workspaces.",
      image: "/images/SA.png",
      tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      liveUrl: null,
      githubUrl: null,
      icon: CheckSquare,
      gradient: "from-purple-500 to-pink-500",
      category: "Productivity",
    },
    {
      title: "Treazy - Hair & Beauty Platform",
      description: "An elegant booking and showcase platform for hair and beauty services. Features appointment scheduling, service catalog, portfolio galleries, and seamless client management.",
      image: "/images/save.png",
      tags: ["Next.js", "Tailwind CSS", "Vercel", "Responsive Design"],
      liveUrl: "https://treazy-psi.vercel.app/",
      githubUrl: null,
      icon: Scissors,
      gradient: "from-pink-500 to-rose-500",
      category: "Service Platform",
    },
    {
      title: "AI-Powered Drug Adherence Monitor",
      description: "An innovative healthcare solution leveraging AI to monitor and improve medication adherence. Features intelligent reminders, health tracking, and personalized insights for better patient outcomes.",
      image: "/images/well.png",
      tags: ["TypeScript", "AI/ML", "Healthcare", "Real-time Analytics"],
      liveUrl: "https://lih-wellcare-companion-pyk8q.sevalla.app/",
      githubUrl: null,
      icon: Pill,
      gradient: "from-indigo-500 to-blue-500",
      category: "Healthcare Tech",
    },
  
  {
      title: "Health Store",
      description: "An innovative healthcare solution leveraging AI to monitor and improve medication adherence. Features intelligent reminders, health tracking, and personalized insights for better patient outcomes.",
      image: "/images/health.png",
      tags: ["React", "Subase", "Healthcare", "E-Commerce"],
      liveUrl: "https://healthexcellence.shop/",
      githubUrl: null,
      icon: Pill,
      gradient: "from-indigo-500 to-blue-500",
      category: "Healthcare Tech",
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
            Portfolio Showcase
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore a selection of projects that showcase my ability to build scalable, user-centric solutions across various industries
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16 lg:space-y-32"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center group`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Gradient border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-500`} />
                  
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-border/50">
                    <div className="aspect-video bg-muted relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    </div>

                    {/* Floating category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-background/90 backdrop-blur-md rounded-full text-xs font-medium border border-border/50">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <motion.div
                    className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-24 h-24 bg-gradient-to-br ${project.gradient} rounded-full opacity-20 blur-2xl -z-10`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}
                >
                  <project.icon className="h-6 w-6 text-white" />
                </motion.div>

                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  {project.liveUrl ? (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        asChild
                        className={`relative overflow-hidden bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-primary/50 transition-all duration-300`}
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          <span>View Live Project</span>
                        </a>
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        disabled
                        variant="secondary"
                        className="relative overflow-hidden cursor-not-allowed"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Coming Soon
                      </Button>
                    </motion.div>
                  )}
                  
                  {project.githubUrl ? (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline" 
                        asChild
                        className="border-2 hover:bg-primary/10 transition-all duration-300"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github className="h-4 w-4" />
                          <span>Source Code</span>
                        </a>
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline" 
                        disabled
                        className="cursor-not-allowed border-2"
                      >
                        <Code2 className="mr-2 h-4 w-4" />
                        Private Repository
                      </Button>
                    </motion.div>
                  )}
                </div>

                {/* Project Stats/Highlights */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Status</p>
                    <p className="text-sm font-semibold flex items-center gap-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Active
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Type</p>
                    <p className="text-sm font-semibold">Full Stack</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Year</p>
                    <p className="text-sm font-semibold">2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-border/50"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              <a href="#contact" className="flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                <span>Let's Build Something Amazing</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}