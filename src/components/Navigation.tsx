'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={scrollToTop}
            className="text-xl font-light hover:opacity-50 transition-opacity"
          >
            Jake Ku
          </button>
          <div className="flex space-x-8">
            <button
              onClick={() => scrollToSection('resume')}
              className="text-sm hover:opacity-50 transition-opacity"
            >
              Works
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm hover:opacity-50 transition-opacity"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm hover:opacity-50 transition-opacity"
            >
              About
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 