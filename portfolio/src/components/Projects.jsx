import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const projects = [
  {
    number: '01',
    title: 'RAG-Powered Educational AI',
    subtitle: 'Natural Language AI Prototype',
    description:
      'Designed and evaluated a Retrieval-Augmented Generation system that delivers personalized educational content. Benchmarked across multiple retrieval strategies and embedding models, achieving 92% query relevance in testing. The system adapts its responses to the semantic context of each learner query rather than returning generic results.',
    tags: ['Python', 'RAG', 'NLP', 'Embeddings', 'LLMs'],
    stat: { num: '92%', label: 'Query Relevance' },
    accent: '#d4a827',
  },
  {
    number: '02',
    title: 'Housing Price Prediction',
    subtitle: 'IB Extended Essay Research Project',
    description:
      'Conducted a rigorous comparative study of Random Forest Regression and Multiple Linear Regression for real-world housing price prediction. Preprocessed complex datasets and evaluated model performance using RMSE and R² metrics — demonstrating how ensemble methods capture non-linear patterns that linear models systematically miss.',
    tags: ['Python', 'Machine Learning', 'Random Forest', 'Regression', 'Data Analysis'],
    stat: { num: 'RMSE + R²', label: 'Evaluation Metrics' },
    accent: '#4a7ab5',
  },
  {
    number: '03',
    title: 'NLP Course Evaluation Dashboard',
    subtitle: 'Student Feedback Insights Tool',
    description:
      'Built during undergraduate NLP research to transform open-ended student course evaluations into structured insights. Uses TF-IDF and UMAP for topic modeling and dimensionality reduction, surfacing recurring themes, keyword clusters, and sentiment patterns — giving professors actionable intelligence from qualitative feedback at scale.',
    tags: ['Python', 'NLP', 'Streamlit', 'TF-IDF', 'UMAP', 'Dashboards'],
    stat: { num: 'Open-ended', label: 'Feedback → Insights' },
    accent: '#7c6bdb',
  },
  {
    number: '04',
    title: 'Secure Donation Payment Integration',
    subtitle: 'Amrutha Hastham Mobile App',
    description:
      'Engineered a production payment feature for a nonprofit mobile application using the Razorpay API. Implemented end-to-end transaction verification, backend validation hooks, and failure recovery — reliably supporting over $30,000 in charitable donations. Wrote deployment documentation that enabled the team to maintain and extend the system post-internship.',
    tags: ['Java', 'Razorpay API', 'Mobile App', 'Payment Verification'],
    stat: { num: '$30K+', label: 'Transactions Supported' },
    accent: '#2eb886',
  },
]

function ProjectCard({ project, index }) {
  const ref = useScrollAnimation()

  return (
    <div
      ref={ref}
      className="animate-on-scroll card-hover group border border-white/[0.07] bg-white/[0.02] rounded overflow-hidden"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Top accent bar */}
      <div className="h-px w-full" style={{ background: `linear-gradient(to right, ${project.accent}60, transparent)` }} />

      <div className="p-6 md:p-8">
        {/* Number and stat */}
        <div className="flex items-start justify-between mb-6">
          <span className="font-mono text-4xl font-bold opacity-10 text-white select-none">{project.number}</span>
          <div className="text-right">
            <div className="font-display text-lg font-semibold" style={{ color: project.accent }}>{project.stat.num}</div>
            <div className="font-mono text-xs text-slate-600 mt-0.5">{project.stat.label}</div>
          </div>
        </div>

        {/* Title */}
        <div className="font-mono text-xs text-slate-500 mb-1.5 tracking-wide uppercase">{project.subtitle}</div>
        <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-gold-300 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-on-scroll mb-14">
          <div className="section-label">// Projects</div>
          <h2 className="section-title">
            Things I've <span className="text-gradient italic">built & studied</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.number} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
