import React, { useEffect, useState } from 'react'

const roles = [
  'NLP Researcher',
  'ML Engineer',
  'Full-Stack Developer',
  'Data Scientist',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((roleIndex + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Background elements */}
      <div className="absolute inset-0 bg-navy-950">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #d4a827 1px, transparent 1px),
              linear-gradient(to bottom, #d4a827 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        {/* Glow orb */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #d4a827 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-1/3 left-1/5 w-64 h-64 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #4a7ab5 0%, transparent 70%)' }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-24 left-6 md:left-16 opacity-30">
        <div className="w-16 h-16 border-t border-l border-gold-500/50" />
      </div>
      <div className="absolute bottom-16 right-6 md:right-16 opacity-30">
        <div className="w-16 h-16 border-b border-r border-gold-500/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 rounded-full mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
          <span className="font-mono text-xs text-gold-300 tracking-widest">OPEN TO INTERNSHIPS & RESEARCH</span>
        </div>

        {/* Name */}
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 animate-fade-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          Raaga <span className="text-gradient">Suravarapu</span>
        </h1>

        {/* Dynamic role */}
        <div className="font-mono text-xl md:text-2xl text-gold-400 mb-6 h-8"
          style={{ animationDelay: '0.3s' }}>
          {displayed}<span className="animate-pulse">|</span>
        </div>

        {/* Tagline */}
        <p className="font-body text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          Computer Science Student at Virginia Tech
        </p>
        <p className="font-body text-slate-500 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          Building human-centered AI, NLP, and data-driven software systems for real-world impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <a
            href="Raaga_Suravarapu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Resume ↗
          </a>
          <a
            href="https://www.linkedin.com/in/raaga-suravarapu/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/raagasuravarapu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="btn-outline"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
          <span className="font-mono text-xs text-slate-500 tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold-500 to-transparent" />
        </div>
      </div>

      {/* Floating stat pills */}
      <div className="absolute top-1/3 left-4 md:left-8 hidden lg:flex flex-col gap-3 opacity-0 animate-fade-in"
        style={{ animationDelay: '1s', animationFillMode: 'both' }}>
        {[
          { num: '5+', label: 'Models Benchmarked' },
          { num: '92%', label: 'Query Relevance' },
          { num: '15%', label: 'ML Accuracy Gain' },
        ].map(({ num, label }) => (
          <div key={label} className="border border-white/10 bg-white/[0.03] backdrop-blur px-4 py-3 rounded text-center">
            <div className="font-display text-gold-400 text-lg font-semibold">{num}</div>
            <div className="font-mono text-xs text-slate-500 mt-0.5 whitespace-nowrap">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
