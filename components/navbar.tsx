"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-2xl font-bold text-blue-500">
            OvyCode
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <ThemeToggle />

            <Button asChild>
              <a href="" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="flex justify-end">
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium py-2 hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Button asChild className="w-full">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

