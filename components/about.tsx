"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/ovy-Photoroom.png" alt="Profile" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-primary rounded-lg -z-10" />
          </motion.div>

          <div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary"></span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg mb-4">
              Hello! I'm a passionate web developer with a strong focus on creating beautiful, functional, and
              user-friendly websites and applications.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg mb-6 text-yellow-300 ">
             <h1>Your vision, My code...Bringing ideas to Life</h1>
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Name:</h3>
                <p className="text-muted-foreground">Ovie Usman</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Email:</h3>
                <p className="text-muted-foreground">Ovieanthony85@gmail.com</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Location:</h3>
                <p className="text-muted-foreground">Lagos,Nigeria</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Availability:</h3>
                <p className="text-muted-foreground">Available for work</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

