"use client"

import { motion } from "framer-motion"
import { ArrowDown, Code, Sparkles, Rocket, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 mb-6"
            >
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Available for Freelance Projects
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block text-foreground">Hello, I'm</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ovie Usman
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/90 mb-3">
                Fullstack Web Developer
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Transforming Ideas Into{" "}
                <span className="font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Digital Experiences
                </span>{" "}
                That Drive Results
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto lg:mx-0"
            >
              {[
                { number: "50+", label: "Projects" },
                { number: "30+", label: "Clients" },
                { number: "3+", label: "Years Exp" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                asChild
                className="relative overflow-hidden group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              >
                <Link href="#projects" className="flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  <span>View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-2 hover:bg-primary/10 transition-all duration-300"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  <span>Let's Talk</span>
                </Link>
              </Button>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap gap-2 mt-8 justify-center lg:justify-start"
            >
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Developer Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
              
              {/* Developer SVG Illustration */}
              <svg
                viewBox="0 0 500 500"
                className="w-full h-auto relative z-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Desk */}
                <motion.rect
                  x="50"
                  y="350"
                  width="400"
                  height="20"
                  fill="currentColor"
                  className="text-primary/20"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
                
                {/* Monitor */}
                <motion.g
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <rect x="150" y="180" width="200" height="140" rx="8" fill="currentColor" className="text-primary/30" />
                  <rect x="160" y="190" width="180" height="110" fill="currentColor" className="text-background" />
                  
                  {/* Code lines */}
                  <motion.line
                    x1="170"
                    y1="210"
                    x2="280"
                    y2="210"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-blue-500"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <motion.line
                    x1="170"
                    y1="230"
                    x2="320"
                    y2="230"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-purple-500"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.7, duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <motion.line
                    x1="170"
                    y1="250"
                    x2="250"
                    y2="250"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-pink-500"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.9, duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <motion.line
                    x1="170"
                    y1="270"
                    x2="300"
                    y2="270"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-emerald-500"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2.1, duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  />
                  
                  {/* Monitor stand */}
                  <rect x="230" y="320" width="40" height="30" fill="currentColor" className="text-primary/30" />
                </motion.g>

                {/* Developer character */}
                <motion.g
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  {/* Head */}
                  <circle cx="100" cy="250" r="30" fill="currentColor" className="text-primary/40" />
                  
                  {/* Body */}
                  <rect x="75" y="280" width="50" height="70" rx="10" fill="currentColor" className="text-primary/30" />
                  
                  {/* Arm typing */}
                  <motion.path
                    d="M 125 300 L 160 280"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="text-primary/30"
                    animate={{ d: ["M 125 300 L 160 280", "M 125 300 L 160 285", "M 125 300 L 160 280"] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.g>

                {/* Coffee cup */}
                <motion.g
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <rect x="380" y="320" width="40" height="30" rx="4" fill="currentColor" className="text-amber-500/30" />
                  <path d="M 420 335 Q 430 335 430 325" stroke="currentColor" strokeWidth="2" fill="none" className="text-amber-500/50" />
                  
                  {/* Steam */}
                  {[0, 1, 2].map((i) => (
                    <motion.path
                      key={i}
                      d={`M ${390 + i * 10} 310 Q ${392 + i * 10} 300 ${390 + i * 10} 290`}
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-amber-500/30"
                      animate={{ opacity: [0, 1, 0], y: [-5, -15, -25] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </motion.g>

                {/* Floating icons */}
                <motion.g
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <circle cx="80" cy="120" r="20" fill="currentColor" className="text-blue-500/20" />
                  <text x="73" y="128" fontSize="20">💻</text>
                </motion.g>
                
                <motion.g
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  <circle cx="420" cy="150" r="20" fill="currentColor" className="text-purple-500/20" />
                  <text x="413" y="158" fontSize="20">🚀</text>
                </motion.g>
                
                <motion.g
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                >
                  <circle cx="400" cy="80" r="20" fill="currentColor" className="text-pink-500/20" />
                  <text x="393" y="88" fontSize="20">✨</text>
                </motion.g>
              </svg>

              {/* Floating code snippets */}
              <motion.div
                className="absolute top-10 left-0 bg-primary/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <code className="text-xs text-primary font-mono">{'<code />'}</code>
              </motion.div>
              
              <motion.div
                className="absolute bottom-20 right-0 bg-emerald-500/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-emerald-500/20"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <code className="text-xs text-emerald-500 font-mono">{'{ }'}</code>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <Link href="#about">
          <ArrowDown className="h-6 w-6 text-primary" />
        </Link>
      </motion.div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0
                  ? "rgba(59, 130, 246, 0.05)"
                  : i % 3 === 1
                  ? "rgba(168, 85, 247, 0.05)"
                  : "rgba(236, 72, 153, 0.05)"
              } 0%, transparent 70%)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </section>
  )
}