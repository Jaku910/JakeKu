import Hero from '@/components/Hero'
import About from '@/components/About'
import Resume from '@/components/Resume'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import LoadingAnimation from '@/components/LoadingAnimation'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Experience />
      <LoadingAnimation />
    </main>
  )
} 