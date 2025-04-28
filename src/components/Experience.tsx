'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'IT Student Consultant',
    company: 'University of Washington Information Technology',
    location: 'Seattle, WA',
    period: 'June 2024 – Present',
    description: 'Provided Tier 1 technical support to over 80,000 UW students, staff, faculty, and affiliates. Developing and utilizing skills in observation and analysis to diagnose and resolve 90% of technical issues.',
    technologies: ['Technical Support', 'Windows', 'Mac', 'Unix'],
  },
  {
    title: 'Research Assistant',
    company: 'University of Washington, Linguistics Department',
    location: 'Seattle, WA',
    period: 'June 2024 – Present',
    description: 'Recruiting, scheduling, and running over 45+ participants through experimental protocols. Utilized R and Excel for data analysis and visualization, improving report accuracy by 20%.',
    technologies: ['R', 'Excel', 'Data Analysis', 'Research'],
  },
  {
    title: 'Graphic Design Lead',
    company: 'University of Washington (Korean Student Association)',
    location: 'Seattle, WA',
    period: 'November 2023 - Present',
    description: 'Led and initiated team members to create graphic content through Figma for marketing to over 1,000 members. Fostered a positive, collaborative community as a KSA officer.',
    technologies: ['Figma', 'Graphic Design', 'Leadership'],
  },
  {
    title: 'IT Intern',
    company: 'Federal Way Public Schools: Information Technology',
    location: 'Federal Way, WA',
    period: 'June 2019 – August 2023',
    description: 'Collaborated with others interns to image, break fix, and operate technological systems for over 20,000 students. Improved technical skills and professionalism through teamwork.',
    technologies: ['Technical Support', 'System Administration', 'Teamwork'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-light mb-16"
        >
          Experience
        </motion.h2>
        
        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-light mb-2">{exp.title}</h3>
                <p className="text-lg mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.location} • {exp.period}</p>
                <p className="text-lg mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-sm border px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 