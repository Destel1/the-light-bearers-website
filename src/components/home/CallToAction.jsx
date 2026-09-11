import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import AnimatedSection from '../shared/AnimatedSection.jsx'

export default function CallToAction() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      aria-labelledby="cta-heading"
      style={{
        background: 'linear-gradient(135deg, #0A0A0A 0%, #111008 50%, #0A0A0A 100%)',
      }}
    >
      {/* Gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(252,163,17,0.08) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />
      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />

      <div className="container-site text-center relative z-10">
        <AnimatedSection>
          <span className="inline-flex items-center gap-3 font-heading text-gold text-xs tracking-[0.3em] uppercase mb-6">
            <span className="gold-line" aria-hidden="true" />
            Let's Create Together
            <span className="gold-line" aria-hidden="true" />
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            id="cta-heading"
            className="font-display font-black text-display-lg text-white mb-6 max-w-3xl mx-auto leading-tight"
          >
            Have a story to tell for{' '}
            <span className="text-gold-gradient">Kingdom impact?</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-text-muted text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're looking for a creative production partner, want to collaborate on a
            film, or are interested in our training programmes — we want to hear from you.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary px-10 py-4">
              Get In Touch <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link to="/services" className="btn-secondary px-10 py-4">
              <Mail size={15} aria-hidden="true" /> Our Services
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="mt-8 font-display italic text-gold/50 text-sm">
            "For we walk by faith, not by sight."
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
