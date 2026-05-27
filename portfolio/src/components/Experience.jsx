import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const experiences = [
  {
    title: 'NLP Undergraduate Research Fellow',
    org: 'Virginia Tech — w/ Dr. Gray',
    location: 'Blacksburg, VA',
    period: 'Aug 2025 – Present',
    type: 'Research',
    color: 'blue',
    bullets: [
      'Benchmarked 5+ transformer-based sentence embedding models, improving semantic similarity relevance by ~12%',
      'Designed visual analytics dashboards surfacing aspect coverage, keyword frequency, and model decision signals',
      'Built end-to-end NLP pipelines integrated with an interactive front-end for researcher workflows',
      'Conducted bias and fairness evaluations across demographic and thematic groups to assess model equity',
    ],
  },
  {
    title: 'IT / Prompt Engineering Intern',
    org: 'BeyondScale',
    location: 'Hyderabad, India',
    period: 'May 2023 – July 2023',
    type: 'Industry',
    color: 'gold',
    bullets: [
      'Contributed to an AI-driven personalized learning platform serving live customers',
      'Improved ML model accuracy by ~15% through Python-based data cleaning, feature engineering, and preprocessing',
      'Analyzed structured and semi-structured datasets with Pandas and NumPy to surface actionable patterns',
      'Collaborated with engineers across the test-debug-deploy cycle for ML model updates',
    ],
  },
  {
    title: 'Software Development Intern',
    org: 'Amrutha Hastham Charitable Trust',
    location: 'Hyderabad, India',
    period: 'May 2024 – June 2024',
    type: 'Industry',
    color: 'green',
    bullets: [
      'Integrated the Razorpay API into a mobile application for secure donation processing',
      'Supported $30,000+ in transactions through robust error handling and payment verification logic',
      'Authored technical documentation and deployment guides used by the engineering team',
      'Partnered with design and product leads to improve end-user experience across donation flows',
    ],
  },
  {
    title: 'Chief Human Resources Officer',
    org: 'Marise Foundation',
    location: 'Remote',
    period: 'July 2022 – Sep 2024',
    type: 'Leadership',
    color: 'purple',
    bullets: [
      'Led recruitment, onboarding, and coordination for a 40+ member volunteer organization',
      'Redesigned onboarding workflows to improve retention and reduce time-to-contribute for new volunteers',
      'Maintained structured operational records and provided data-backed insights to organizational leadership',
    ],
  },
]

const colorMap = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  gold: 'bg-gold-500/10 text-gold-400 border-gold-500/30',
  green: 'bg-green-500/10 text-green-400 border-green-500/30',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
}

const dotColorMap = {
  blue: 'bg-blue-400',
  gold: 'bg-gold-400',
  green: 'bg-green-400',
  purple: 'bg-purple-400',
}

export default function Experience() {
  const [active, setActive] = useState(0)
  const ref = useScrollAnimation()

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="animate-on-scroll mb-14">
          <div className="section-label">// Experience</div>
          <h2 className="section-title">
            Where I've <span className="text-gradient italic">worked & researched</span>.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab list */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:min-w-[220px] pb-2 lg:pb-0">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 text-left px-4 py-3 rounded transition-all duration-200 border ${
                  active === i
                    ? 'border-gold-500/40 bg-gold-500/8 text-white'
                    : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]'
                }`}
              >
                <div className="font-body text-sm font-medium leading-snug">{exp.org}</div>
                <div className="font-mono text-xs text-slate-600 mt-0.5">{exp.period.split('–')[0].trim()}</div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 border border-white/[0.07] bg-white/[0.02] rounded p-6 md:p-8">
            {(() => {
              const exp = experiences[active]
              return (
                <div key={active} className="animate-fade-in">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <div className="font-body text-slate-400 text-sm">{exp.org} · {exp.location}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-xs px-2.5 py-1 rounded border ${colorMap[exp.color]}`}>
                        {exp.type}
                      </span>
                      <span className="font-mono text-xs text-slate-500 whitespace-nowrap">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${dotColorMap[exp.color]}`} />
                        <span className="font-body text-slate-400 text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}
