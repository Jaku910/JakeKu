'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Edu4All',
    description: 'Online College Resource website targeted towards underprivileged and unrepresented communities.',
    tech: ['Figma', 'Research'],
    period: 'September 2023 – December 2023',
    link: '#',
  },
  {
    title: 'Michelin-Starred Restaurants Analysis',
    description: 'Data analysis project investigating disparities between countries with and without Michelin-starred establishments.',
    tech: ['RStudio', 'Data Mining'],
    period: 'September 2023 – December 2023',
    link: '#',
  },
  {
    title: 'Keepsake',
    description: 'A virtual journal app for capturing memories with text and images, featuring mood tracking and timeline functionality.',
    tech: ['HTML', 'CSS', 'Figma'],
    period: 'September 2024 – December 2024',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-light mb-16"
        >
          Projects
        </motion.h2>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-light mb-4">{project.title}</h3>
                <p className="text-lg mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-sm border px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{project.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 