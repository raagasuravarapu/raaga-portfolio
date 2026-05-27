import React, { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section tracking
      const sections = navLinks.map(l => l.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-navy-950/95 backdrop-blur-md border-b border-white/5 shadow-2xl'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-lg font-semibold text-white hover:text-gold-400 transition-colors">
          RS<span className="text-gold-400">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`font-body text-sm font-medium tracking-wide transition-all duration-200 relative group ${
                active === link.href.slice(1)
                  ? 'text-gold-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-gold-400 transition-all duration-300 ${
                active === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          ))}
          <a
            href="Raaga_Suravarapu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 font-mono text-xs px-4 py-2 border border-gold-500/60 text-gold-400 hover:bg-gold-500/10 transition-all duration-200 rounded-sm tracking-wider"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-navy-900/98 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm text-slate-300 hover:text-gold-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="Raaga_Suravarapu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-gold-400 border border-gold-500/40 px-4 py-2 w-fit rounded-sm"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </nav>
  )
}
