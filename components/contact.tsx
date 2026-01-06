"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Github, Linkedin, MessageCircle, Sparkles } from "lucide-react"

export default function Contact() {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Ovieanthony85@gmail.com",
      href: "mailto:Ovieanthony85@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 806 415 0544",
      href: "tel:+2348064150544",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: null,
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/oviethebaddestcoder/",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      name: "X",
      label: "X (Twitter)",
      href: "https://x.com/OvyTechConsult",
      gradient: "from-gray-800 to-black",
      customIcon: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      gradient: "from-blue-600 to-blue-800",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
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
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Contact Cards */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                    >
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-medium text-sm">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-medium text-sm">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="h-16 px-8 text-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300"
              >
                <a
                  href="https://wa.me/2348064150544?text=Hi%20Ovie,%20I'd%20like%20to%20discuss%20a%20project%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span className="font-semibold">Message Me on WhatsApp</span>
                </a>
              </Button>
            </motion.div>
            <p className="text-sm text-muted-foreground mt-4">
              Click to start a conversation on WhatsApp
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative group"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow`}>
                    {social.customIcon ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-7 w-7 text-white fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ) : (
                      <social.icon className="h-7 w-7 text-white" />
                    )}
                  </div>
                  {/* Tooltip */}
                  <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Availability Badge */}
          <motion.div
            variants={itemVariants}
            className="mt-12 max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400">Available for Work</p>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              I'm currently accepting new projects and collaborations. Let's build something great!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}