'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-light mb-6">Jake Ku</h1>
        <p className="text-lg md:text-xl mb-8">Software Engineer & Developer</p>
        <p className="text-sm mb-16">Seattle, Washington</p>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center mb-16">
          <Link href="/projects" className="hover-underline text-lg">
            Works
          </Link>
          <Link href="/about" className="hover-underline text-lg">
            About
          </Link>
          <Link href="/contact" className="hover-underline text-lg">
            Contact
          </Link>
        </div>

        <div className="text-sm space-y-2">
          <p>jkmku10@gmail.com</p>
          <p>253-457-9847</p>
          <a href="https://linkedin.com/in/jake-ku" target="_blank" rel="noopener noreferrer" className="hover-underline">
            linkedin.com/in/jake-ku
          </a>
        </div>
      </motion.div>
    </main>
  )
} 