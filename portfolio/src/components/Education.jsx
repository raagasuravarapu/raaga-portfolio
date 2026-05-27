import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const education = [
  {
    school: 'Virginia Tech',
    degree: 'B.S. in Computer Science, General Engineering',
    location: 'Blacksburg, VA',
    period: 'Aug 2025 – May 2029',
    status: 'In Progress',
    statusColor: '#d4a827',
    details: [
      'Focus areas: Machine Learning, NLP, and Software Engineering',
      'Undergraduate Research Fellow in NLP with Dr. Gray',
    ],
    logo: 'VT',
    accentColor: '#861f41',
  },
  {
    school: 'Oakridge International School',
    degree: 'International Baccalaureate Diploma Programme',
    location: 'Hyderabad, India',
    period: '2023 – May 2025',
    status: 'Graduated',
    statusColor: '#2eb886',
    details: [
      'Higher Level: Mathematics, Computer Science, Economics',
      'Extended Essay in Computer Science: ML-based housing price prediction',
    ],
    logo: 'OIS',
    accentColor: '#2563eb',
  },
]

export default function Education() {
  const ref = useScrollAnimation()

  return (
    <section id="education" className="py-24 md:py-32 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="animate-on-scroll mb-14">
          <div className="section-label">// Education</div>
          <h2 className="section-title">
            Academic <span className="text-gradient italic">foundation</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed, i) => {
            const cardRef = useScrollAnimation()
            return (
              <div
                key={ed.school}
                ref={cardRef}
                className="animate-on-scroll card-hover border border-white/[0.07] bg-white/[0.02] rounded p-6 md:p-8"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* School logo placeholder + name */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded flex items-center justify-center font-display font-bold text-sm"
                    style={{ background: `${ed.accentColor}20`, color: ed.accentColor }}
                  >
                    {ed.logo}
                  </div>
                  <span
                    className="font-mono text-xs px-2.5 py-1 rounded border"
                    style={{ borderColor: `${ed.statusColor}40`, color: ed.statusColor, background: `${ed.statusColor}08` }}
                  >
                    {ed.status}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-white mb-1">{ed.school}</h3>
                <p className="font-body text-slate-400 text-sm mb-1">{ed.degree}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-xs text-slate-600">{ed.location}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-700" />
                  <span className="font-mono text-xs text-slate-600">{ed.period}</span>
                </div>

                <div className="h-px bg-white/[0.05] mb-4" />

                <ul className="space-y-2">
                  {ed.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-gold-500/60" />
                      <span className="font-body text-xs text-slate-500 leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
