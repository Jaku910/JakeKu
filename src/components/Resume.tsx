'use client'

import { useEffect, useState } from 'react'

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.querySelector('section')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section className={`max-w-4xl mx-auto px-6 py-12 ${isVisible ? 'visible' : ''}`}>
      <div className="space-y-16">
        {/* Education */}
        <div className="interactive">
          <h2 className="text-2xl font-light mb-8">EDUCATION</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium">Bachelor of Arts in Informatics, Concentration: Data Science</h3>
              <p className="text-gray-600">University of Washington, Minor: Data Science</p>
              <p className="text-gray-600">Seattle, Washington • June 2026</p>
              <p className="mt-2 text-gray-600">Coursework: Core & Advanced Data Science Methods, Databases and Data Modeling, Product & Systems Management, Statistics</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Associates of Arts in Computer Science</h3>
              <p className="text-gray-600">Highline College</p>
              <p className="text-gray-600">Des Moines, Washington • June 2023</p>
              <p className="mt-2 text-gray-600">Coursework: Introduction to Computer Programming III, Computer Programming II, Object-Oriented Programming</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="interactive">
          <h2 className="text-2xl font-light mb-8">SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Programming Languages:</h3>
              <p className="text-gray-600">SQL, R, Python, HTML, CSS, Java, JavaScript</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Data Analytics Software:</h3>
              <p className="text-gray-600">Tableau, Microsoft Excel, Power BI, RStudio</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="interactive">
          <h2 className="text-2xl font-light mb-8">EXPERIENCE</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-medium">IT Student Consultant</h3>
              <p className="text-gray-600">University of Washington Information Technology</p>
              <p className="text-gray-600">Seattle, WA • June 2024 – Present</p>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li>Provided Tier 1 technical support to over 80,000 UW students, staff, faculty, and affiliates.</li>
                <li>Developing and utilizing skills in observation and analysis to diagnose and resolve 90% of technical issues.</li>
                <li>Providing support for Microsoft Windows, Mac, and Unix-based operating systems.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium">Research Assistant</h3>
              <p className="text-gray-600">University of Washington, Linguistics Department</p>
              <p className="text-gray-600">Seattle, WA • June 2024 – Present</p>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li>Recruiting, scheduling, and running over 45+ participants through experimental protocols to ensure reliable data collection to investigate eye movement patterns in Korean Language readers.</li>
                <li>Utilized R and Excel for data analysis and visualization, enabling insights that improved report accuracy by 20% and streamlined decision-making processes.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium">Graphic Design Lead</h3>
              <p className="text-gray-600">University of Washington (Korean Student Association)</p>
              <p className="text-gray-600">Seattle, WA • November 2023 - Present</p>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li>Led and initiated team members to create graphic content through Figma that could be conveyed towards marketing the Korean Student Association (KSA) to over 1,000 members.</li>
                <li>Fostered a positive, collaborative community as a KSA officer through Korean culture.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium">IT Intern</h3>
              <p className="text-gray-600">Federal Way Public Schools: Information Technology</p>
              <p className="text-gray-600">Federal Way, WA • June 2019 – August 2023</p>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li>Collaborated with others interns to image, break fix, and operate technological systems, needed for over 20,000 students in the Federal Way Public School districts.</li>
                <li>Improved technical skills and professionalism through teamwork and self-projects.</li>
                <li>Strengthened my communication abilities and learned how to collaborate and work.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="interactive">
          <h2 className="text-2xl font-light mb-8">PROJECTS</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-medium">Edu4All</h3>
              <p className="text-gray-600">Figma, Research • September 2023 – December 2023</p>
              <p className="mt-2 text-gray-600">Online College Resource website targeted towards underprivileged and unrepresented communities, to provide resources and opportunities to students who may lack these resources.</p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Michelin-Starred Restaurants</h3>
              <p className="text-gray-600">RStudio, Data Mining • September 2023 – December 2023</p>
              <p className="mt-2 text-gray-600">Project which involved analyzing information from various sources, including media and literature, and data analytics. Investigate discerned significant disparities between countries with and without Michelin-starred establishments.</p>
            </div>

            <div>
              <h3 className="text-lg font-medium">Keepsake</h3>
              <p className="text-gray-600">HTML, CSS, Figma • September 2024 – December 2024</p>
              <p className="mt-2 text-gray-600">Keepsake is a virtual journal app for capturing memories with text and images. Features mood tracking and a timeline for easy daily reflection.</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="interactive">
          <h2 className="text-2xl font-light mb-8">CERTIFICATIONS</h2>
          <ul className="text-gray-600 space-y-2">
            <li>AT&T 2024 Technology Academy Certification (June 2024)</li>
            <li>Harvard CS50 Completion Certificate (June 2020)</li>
            <li>HP Hardware Diagnostics Qualification Exam (April 2019)</li>
          </ul>
        </div>
      </div>
    </section>
  )
} 