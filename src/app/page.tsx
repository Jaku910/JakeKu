import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import LoadingAnimation from '@/components/LoadingAnimation'

export default function Home() {
  return (
    <>
      <LoadingAnimation />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
} 