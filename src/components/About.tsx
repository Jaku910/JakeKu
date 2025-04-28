'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-light mb-8">
            Jake Ku
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl">
            Data Science student at University of Washington, passionate about creating impactful solutions through technology and data analysis.
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-light mb-6">Education</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl">Bachelor of Arts in Informatics, Concentration: Data Science</h3>
                <p className="text-gray-600">University of Washington, Seattle, Washington</p>
                <p className="text-gray-600">Minor: Data Science | Expected June 2026</p>
                <p className="text-sm mt-2">Coursework: Core & Advanced Data Science Methods, Databases and Data Modeling, Product & Systems Management, Statistics</p>
              </div>
              <div>
                <h3 className="text-xl">Associates of Arts in Computer Science</h3>
                <p className="text-gray-600">Highline College, Des Moines, Washington</p>
                <p className="text-gray-600">June 2023</p>
                <p className="text-sm mt-2">Coursework: Introduction to Computer Programming III, Computer Programming II, Object-Oriented Programming</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light mb-6">Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg mb-2">Programming Languages</h3>
                <p className="text-gray-600">SQL, R, Python, HTML, CSS, Java, JavaScript</p>
              </div>
              <div>
                <h3 className="text-lg mb-2">Data Analytics Software</h3>
                <p className="text-gray-600">Tableau, Microsoft Excel, Power BI, RStudio</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 