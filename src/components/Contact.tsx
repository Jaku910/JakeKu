'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-16">Contact</h2>
          
          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="text-lg">
              <p>Jake Ku</p>
              <p>jkmku10@gmail.com</p>
              <p>253-457-9847</p>
            </div>
            
            <div className="flex justify-center space-x-8">
              <a
                href="https://linkedin.com/in/jake-ku"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Jaku910"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 