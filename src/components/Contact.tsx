'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-black"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-16">Contact</h2>
          
          <div className="space-y-12 max-w-2xl mx-auto">
            <div className="text-lg space-y-4">
              <p className="hover-underline cursor-pointer">Jake Ku</p>
              <p className="hover-underline cursor-pointer">jkmku10@gmail.com</p>
              <p className="hover-underline cursor-pointer">253-457-9847</p>
            </div>
            
            <div className="flex justify-center space-x-12">
              <a
                href="https://linkedin.com/in/jake-ku"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline text-black"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Jaku910"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline text-black"
              >
                GitHub
              </a>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-light mb-8">Certifications</h3>
              <ul className="space-y-4 text-lg">
                <li className="hover-underline cursor-pointer">AT&T 2024 Technology Academy Certification (June 2024)</li>
                <li className="hover-underline cursor-pointer">Harvard CS50 Completion Certificate (June 2020)</li>
                <li className="hover-underline cursor-pointer">HP Hardware Diagnostics Qualification Exam (April 2019)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 