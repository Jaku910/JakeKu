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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About Me
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            I'm an Informatics & Data Science student at the University of Washington with a passion for using technology to solve real-world problems. My journey in tech started with an interest in how data can be used to improve lives and make better decisions. I combine my technical skills in programming and data analysis with a strong understanding of human-computer interaction to create meaningful solutions.
          </p>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            When I'm not coding or analyzing data, you can find me exploring new technologies, contributing to open-source projects, or working on personal projects that aim to make a positive impact in my community.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 