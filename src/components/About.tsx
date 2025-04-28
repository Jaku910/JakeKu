'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12">
            Contact
          </h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-medium mb-2">Email</h2>
              <a 
                href="mailto:jkmku10@gmail.com" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                jkmku10@gmail.com
              </a>
            </div>
            <div>
              <h2 className="text-xl font-medium mb-2">Phone</h2>
              <a 
                href="tel:2534579847" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                253-457-9847
              </a>
            </div>
            <div>
              <h2 className="text-xl font-medium mb-2">LinkedIn</h2>
              <a 
                href="https://linkedin.com/in/jake-ku" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                linkedin.com/in/jake-ku
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 