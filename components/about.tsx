"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Code2, Sparkles, Target, Users, Mail, MapPin, CheckCircle2 } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const highlights = [
    { icon: Code2, text: "Clean & Modern Code" },
    { icon: Target, text: "User-Focused Design" },
    { icon: Sparkles, text: "Pixel Perfect Results" },
    { icon: Users, text: "Collaborative Approach" },
  ]

  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image Section - Enhanced */}
          <motion.div variants={imageVariants} className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Main image container with gradient border */}
              <div className="relative h-[450px] md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="relative h-full w-full rounded-2xl overflow-hidden bg-background">
                  <Image 
                    src="/images/ovy-Photoroom.png" 
                    alt="Ovie Usman - Fullstack Developer" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />

              {/* Floating card - Years of Experience */}
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-lg border border-border rounded-2xl px-6 py-4 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">3+</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Years of</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      Experience
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative dots */}
              <div className="absolute top-8 left-8 grid grid-cols-3 gap-2 opacity-30">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Get To Know Me
              </span>
            </motion.div>

            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
            >
              About Me
              <motion.span 
                className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "30%" } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4 mb-8">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Hello! I'm a passionate web developer with a strong focus on creating beautiful, functional, and user-friendly websites and applications.
              </p>

              <div className="relative pl-6 border-l-4 border-gradient-to-b from-blue-500 via-purple-500 to-pink-500">
                <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Your vision, My code... Bringing ideas to Life
                </p>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Info Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Mail className="h-4 w-4 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-sm">Email</h3>
                </div>
                <p className="text-sm text-muted-foreground break-all">Ovieanthony85@gmail.com</p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-sm">Location</h3>
                </div>
                <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 hover:border-primary/50 transition-colors sm:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  </div>
                  <h3 className="font-semibold text-sm">Availability</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Available for freelance work
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}