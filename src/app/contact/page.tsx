'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h2 className="text-2xl font-light mb-8">Contact</h2>
        <div className="space-y-4 text-sm">
          <p>jkmku10@gmail.com</p>
          <p>253-457-9847</p>
          <a href="https://linkedin.com/in/jake-ku" target="_blank" rel="noopener noreferrer" className="hover-underline block">
            linkedin.com/in/jake-ku
          </a>
        </div>
      </motion.div>
    </main>
  );
} 