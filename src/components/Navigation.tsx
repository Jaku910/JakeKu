'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Close mobile menu after clicking
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full p-6 z-50">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-light">
          Jake Ku
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('works')}
            className="text-sm hover:opacity-50 transition-opacity"
          >
            Works
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-sm hover:opacity-50 transition-opacity"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-sm hover:opacity-50 transition-opacity"
          >
            Projects
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white p-6">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('works')}
              className="text-sm hover:opacity-50 transition-opacity"
            >
              Works
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm hover:opacity-50 transition-opacity"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-sm hover:opacity-50 transition-opacity"
            >
              Projects
            </button>
          </div>
        </div>
      )}
    </nav>
  )
} 