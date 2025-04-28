'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl space-y-12"
      >
        <section>
          <h2 className="text-2xl font-light mb-6">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Bachelor of Arts in Informatics, Concentration: Data Science</h3>
              <p className="text-sm">University of Washington, Minor: Data Science</p>
              <p className="text-sm">June 2026, Seattle, Washington</p>
              <p className="text-sm mt-2">Coursework: Core & Advanced Data Science Methods, Databases and Data Modeling, Product & Systems Management, Statistics</p>
            </div>
            <div>
              <h3 className="font-medium">Associates of Arts in Computer Science</h3>
              <p className="text-sm">Highline College</p>
              <p className="text-sm">June 2023, Des Moines, Washington</p>
              <p className="text-sm mt-2">Coursework: Introduction to Computer Programming III, Computer Programming II, Object-Oriented Programming</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-light mb-6">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium">IT Student Consultant</h3>
              <p className="text-sm">University of Washington Information Technology</p>
              <p className="text-sm">June 2024 – Present, Seattle, WA</p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li>Provided Tier 1 technical support to over 80,000 UW students, staff, faculty, and affiliates</li>
                <li>Developing and utilizing skills in observation and analysis to diagnose and resolve 90% of technical issues</li>
                <li>Providing support for Microsoft Windows, Mac, and Unix-based operating systems</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Research Assistant</h3>
              <p className="text-sm">University of Washington, Linguistics Department</p>
              <p className="text-sm">June 2024 – Present, Seattle, WA</p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li>Recruiting, scheduling, and running over 45+ participants through experimental protocols</li>
                <li>Utilized R and Excel for data analysis and visualization, improving report accuracy by 20%</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Graphic Design Lead</h3>
              <p className="text-sm">University of Washington (Korean Student Association)</p>
              <p className="text-sm">November 2023 - Present, Seattle, WA</p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li>Led and initiated team members to create graphic content through Figma</li>
                <li>Fostered a positive, collaborative community as a KSA officer</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-light mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-2">Programming Languages</h3>
              <p className="text-sm">SQL, R, Python, HTML, CSS, Java, JavaScript</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Data Analytics Software</h3>
              <p className="text-sm">Tableau, Microsoft Excel, Power BI, RStudio</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-light mb-6">Certifications</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>AT&T 2024 Technology Academy Certification (June 2024)</li>
            <li>Harvard CS50 Completion Certificate (June 2020)</li>
            <li>HP Hardware Diagnostics Qualification Exam (April 2019)</li>
          </ul>
        </section>
      </motion.div>
    </main>
  );
} 