'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={`min-h-screen flex items-center justify-center px-6 ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-light mb-6 interactive">
          Hello, I'm Jake Ku
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto interactive">
          A passionate Informatics & Data Science student at UW, dedicated to creating meaningful impact through technology
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="mailto:jkmku10@gmail.com" 
            className="text-sm interactive"
          >
            jkmku10@gmail.com
          </a>
          <a 
            href="tel:2534579847" 
            className="text-sm interactive"
          >
            253-457-9847
          </a>
          <a 
            href="https://linkedin.com/in/jake-ku" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm interactive"
          >
            linkedin.com/in/jake-ku
          </a>
        </div>
      </div>
    </section>
  )
} 