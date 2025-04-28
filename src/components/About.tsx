'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-light mb-8">
            Jake Ku
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            A Data Science student at University of Washington, passionate about creating impactful solutions through technology and data analysis.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-lg">
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 