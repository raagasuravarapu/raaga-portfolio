import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const highlights = [
  { icon: '🧠', label: 'NLP Research', sub: 'Transformer models & embeddings' },
  { icon: '📊', label: 'Data Science', sub: 'Analytics, modeling, insights' },
  { icon: '⚙️', label: 'Full-Stack Dev', sub: 'React, APIs, databases' },
  { icon: '⚖️', label: 'Responsible AI', sub: 'Bias evaluation & fairness' },
]

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 50%, #d4a827 0%, transparent 60%)`
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="animate-on-scroll grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="section-label">// About</div>
            <h2 className="section-title mb-6">
              Turning complex data<br />
              into <span className="text-gradient italic">clear answers</span>.
            </h2>
            <p className="font-body text-slate-400 text-base leading-relaxed mb-4">
              I'm a Computer Science undergraduate at Virginia Tech, building at the intersection of machine learning, natural language processing, and responsible software engineering. What draws me to this field isn't just the technical depth — it's the chance to make systems that are genuinely useful for people.
            </p>
            <p className="font-body text-slate-400 text-base leading-relaxed mb-8">
              From benchmarking transformer embedding models to shipping a payment integration for a nonprofit, my work spans research and production. I care deeply about how AI systems behave across diverse populations, not just how well they perform on benchmarks.
            </p>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-500">Virginia Tech · Class of 2029</span>
              <span className="w-1 h-1 rounded-full bg-gold-500" />
              <span className="font-mono text-xs text-slate-500">US Citizen</span>
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon, label, sub }) => (
              <div
                key={label}
                className="card-hover border border-white/[0.07] bg-white/[0.02] rounded p-5"
              >
                <div className="text-2xl mb-3">{icon}</div>
                <div className="font-body text-white font-medium text-sm mb-1">{label}</div>
                <div className="font-mono text-xs text-slate-500 leading-relaxed">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
