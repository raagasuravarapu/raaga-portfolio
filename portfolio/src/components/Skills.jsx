import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    color: '#d4a827',
    skills: ['Python', 'Java', 'JavaScript', 'C', 'SQL'],
  },
  {
    category: 'AI / Data Science',
    icon: '⧖',
    color: '#7c6bdb',
    skills: [
      'Machine Learning',
      'NLP',
      'RAG',
      'Embeddings',
      'Pandas',
      'NumPy',
      'scikit-learn',
      'Model Benchmarking',
      'Bias & Fairness Evaluation',
    ],
  },
  {
    category: 'Frontend',
    icon: '◈',
    color: '#4a7ab5',
    skills: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Streamlit', 'Figma'],
  },
  {
    category: 'Backend & Tools',
    icon: '⚙',
    color: '#2eb886',
    skills: ['Spring Boot', 'REST APIs', 'FastAPI', 'Git', 'GitHub', 'PostgreSQL', 'VS Code'],
  },
]

export default function Skills() {
  const ref = useScrollAnimation()

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="animate-on-scroll mb-14">
          <div className="section-label">// Skills</div>
          <h2 className="section-title">
            Tools of the <span className="text-gradient italic">trade</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => {
            const cardRef = useScrollAnimation()
            return (
              <div
                key={group.category}
                ref={cardRef}
                className="animate-on-scroll border border-white/[0.07] bg-white/[0.02] rounded p-6"
                style={{ transitionDelay: `${gi * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-lg" style={{ color: group.color }}>{group.icon}</span>
                  <span className="font-body font-semibold text-white text-sm">{group.category}</span>
                  <div className="h-px flex-1" style={{ background: `linear-gradient(to right, ${group.color}30, transparent)` }} />
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded border transition-all duration-200 cursor-default"
                      style={{
                        borderColor: `${group.color}25`,
                        color: '#94a3b8',
                        background: `${group.color}06`,
                      }}
                      onMouseEnter={e => {
                        e.target.style.borderColor = `${group.color}60`
                        e.target.style.color = group.color
                        e.target.style.background = `${group.color}12`
                      }}
                      onMouseLeave={e => {
                        e.target.style.borderColor = `${group.color}25`
                        e.target.style.color = '#94a3b8'
                        e.target.style.background = `${group.color}06`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
