'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'InnovaTech Solutions',
    period: '2021 - Present',
    description: 'Lead developer for enterprise-level web applications, managing a team of 5 developers and implementing modern development practices.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB'],
  },
  {
    title: 'Software Engineer',
    company: 'Digital Dynamics',
    period: '2019 - 2021',
    description: 'Developed and maintained multiple client-facing applications, improving performance and implementing new features.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'],
  },
  {
    title: 'Junior Developer',
    company: 'WebTech Innovations',
    period: '2018 - 2019',
    description: 'Collaborated on various web development projects, focusing on front-end development and UI/UX improvements.',
    technologies: ['JavaScript', 'HTML/CSS', 'React', 'Bootstrap', 'Git'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey so far
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  {exp.period}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 