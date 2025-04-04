"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="block">Hello, I'm</span>
          <span className=" block mt-2 text-blue-500">Ovie Usman</span>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Fullstack Web Developer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Link href="#about">
          <ArrowDown className="h-8 w-8 text-primary" />
        </Link>
      </motion.div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.3 + Math.random() * 0.4,
              scale: 1,
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  )
}

