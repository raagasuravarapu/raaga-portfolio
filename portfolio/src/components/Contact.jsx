import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const contactLinks = [
  {
    label: 'Email',
    value: 'suravarapu.raaga@gmail.com',
    href: 'mailto:suravarapu.raaga@gmail.com',
    icon: '✉',
  },
  {
    label: 'Phone',
    value: '+1 804-244-0327',
    href: 'tel:+18042440327',
    icon: '☎',
  },
  {
    label: 'LinkedIn',
    value: 'raaga-suravarapu',
    href: 'https://www.linkedin.com/in/raaga-suravarapu/',
    icon: 'in',
  },
  {
    label: 'Location',
    value: 'Livingston, NJ',
    href: null,
    icon: '◉',
  },
]

export default function Contact() {
  const ref = useScrollAnimation()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('suravarapu.raaga@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/[0.05] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #d4a827 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="animate-on-scroll text-center mb-16">
          <div className="section-label justify-center flex">// Contact</div>
          <h2 className="section-title mb-4">
            Let's <span className="text-gradient italic">connect</span>.
          </h2>
          <p className="font-body text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Interested in collaborating, discussing research, or reaching out about internships?
            I'm always happy to talk — feel free to get in touch.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactLinks.map(link => (
            <div
              key={link.label}
              className="card-hover border border-white/[0.07] bg-white/[0.02] rounded p-5 text-center group"
            >
              <div className="font-mono text-lg text-gold-500 mb-3 group-hover:scale-110 transition-transform duration-200">
                {link.icon}
              </div>
              <div className="font-body text-xs text-slate-600 mb-1 uppercase tracking-widest">{link.label}</div>
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-slate-300 hover:text-gold-400 transition-colors break-all"
                >
                  {link.value}
                </a>
              ) : (
                <span className="font-mono text-xs text-slate-400">{link.value}</span>
              )}
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="border border-gold-500/20 bg-gold-500/[0.03] rounded p-8 md:p-12 text-center">
          <p className="font-display text-2xl md:text-3xl text-white mb-6 italic">
            "The best way to reach me is always email."
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={copyEmail}
              className="btn-primary"
            >
              {copied ? '✓ Copied!' : 'Copy Email Address'}
            </button>
            <a
              href="https://www.linkedin.com/in/raaga-suravarapu/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
