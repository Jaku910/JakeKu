'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full p-6 z-50">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-light">
          Jake Ku
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="#works" className="text-sm hover:opacity-50 transition-opacity">
            Works
          </Link>
          <Link href="#about" className="text-sm hover:opacity-50 transition-opacity">
            About
          </Link>
          <Link href="#projects" className="text-sm hover:opacity-50 transition-opacity">
            Projects
          </Link>
          <Link href="#contact" className="text-sm hover:opacity-50 transition-opacity">
            Contact
          </Link>
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
            <Link href="#works" className="text-sm hover:opacity-50 transition-opacity">
              Works
            </Link>
            <Link href="#about" className="text-sm hover:opacity-50 transition-opacity">
              About
            </Link>
            <Link href="#projects" className="text-sm hover:opacity-50 transition-opacity">
              Projects
            </Link>
            <Link href="#contact" className="text-sm hover:opacity-50 transition-opacity">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 