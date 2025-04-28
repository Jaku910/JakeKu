import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jake Ku',
  description: 'Software Engineer & Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 w-full z-50 bg-white">
          <div className="max-w-6xl mx-auto px-8 py-6">
            <div className="flex justify-between items-center">
              <a href="/" className="text-xl hover-underline">Jake Ku</a>
              <div className="flex space-x-8">
                <a href="#works" className="hover-underline">Works</a>
                <a href="#about" className="hover-underline">About</a>
                <a href="#contact" className="hover-underline">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-24">
          {children}
        </main>
        <footer className="fixed bottom-0 left-0 w-full bg-white py-6">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex justify-between items-center">
              <span>©2024</span>
              <div className="flex space-x-8">
                <a href="https://linkedin.com/in/jake-ku" target="_blank" rel="noopener noreferrer" className="hover-underline">LinkedIn</a>
                <a href="https://github.com/Jaku910" target="_blank" rel="noopener noreferrer" className="hover-underline">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 