'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function LoadingAnimation() {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.to('.loading-screen', {
      duration: 1,
      y: '-100%',
      ease: 'power4.inOut',
      delay: 2,
    })
  }, [])

  return (
    <motion.div
      className="loading-screen fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ y: 0 }}
    >
      <motion.div
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome
      </motion.div>
    </motion.div>
  )
} 