'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl space-y-12"
      >
        <section>
          <h2 className="text-2xl font-light mb-6">Projects</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-medium">Edu4All</h3>
              <p className="text-sm">September 2023 – December 2023</p>
              <p className="text-sm mt-2">Online College Resource website targeted towards underprivileged and unrepresented communities, to provide resources and opportunities to students who may lack these resources.</p>
              <p className="text-sm mt-2">Technologies: Figma, Research</p>
            </div>

            <div>
              <h3 className="font-medium">Michelin-Starred Restaurants Analysis</h3>
              <p className="text-sm">September 2023 – December 2023</p>
              <p className="text-sm mt-2">Project which involved analyzing information from various sources, including media and literature, and data analytics to investigate discerned significant disparities between countries with and without Michelin-starred establishments.</p>
              <p className="text-sm mt-2">Technologies: RStudio, Data Mining</p>
            </div>

            <div>
              <h3 className="font-medium">Keepsake</h3>
              <p className="text-sm">September 2024 – December 2024</p>
              <p className="text-sm mt-2">Keepsake is a virtual journal app for capturing memories with text and images. Features mood tracking and a timeline for easy daily reflection.</p>
              <p className="text-sm mt-2">Technologies: HTML, CSS, Figma</p>
            </div>
          </div>
        </section>
      </motion.div>
    </main>
  );
} 