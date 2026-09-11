import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '../shared/AnimatedSection.jsx'

export default function AboutTeaser() {
  return (
    <section
      className="section-padding bg-dark-surface relative overflow-hidden"
      aria-labelledby="about-teaser-heading"
    >
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at right, #C8A96E 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <AnimatedSection>
              <span className="inline-flex items-center gap-3 font-heading text-gold text-xs tracking-[0.3em] uppercase mb-4">
                <span className="gold-line" aria-hidden="true" />
                The Company
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2
                id="about-teaser-heading"
                className="font-heading font-bold text-display-md text-text-primary mb-6 leading-tight"
              >
                Building beyond{' '}
                <span className="text-gold-gradient">individual productions.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-text-muted text-base leading-relaxed mb-4">
                We believe film is more than entertainment. It is a language, a vessel, and a
                meeting place — a way to carry truth into spaces where people live, think,
                question, struggle and dream.
              </p>
              <p className="text-text-muted text-base leading-relaxed mb-8">
                As a creative production company, we develop and produce films while creating
                opportunities to train, equip and raise a generation of Christian filmmakers
                who can use their craft with excellence and purpose.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Link to="/about" className="btn-primary">
                Read Our Story <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </AnimatedSection>
          </div>

          {/* Scripture card */}
          <AnimatedSection delay={0.2} direction="right">
            {/* Decorative quote card */}
            <div className="bg-dark rounded-lg border border-dark-border p-8 mb-8 relative">
              <div
                className="absolute top-6 left-6 font-display text-6xl text-gold/20 leading-none select-none"
                aria-hidden="true"
              >
                "
              </div>
              <blockquote className="relative z-10">
                <p className="font-display italic text-text-primary text-lg leading-relaxed mb-4 pt-4">
                  You are the light of the world. A city that is set on a hill cannot be
                  hidden.
                </p>
                <footer className="flex items-center gap-3">
                  <div className="gold-line" aria-hidden="true" />
                  <cite className="font-heading font-semibold text-gold text-xs tracking-wide uppercase not-italic">
                    Matthew 5:14
                  </cite>
                </footer>
              </blockquote>
            </div>

            {/* The Name */}
            <div className="bg-dark rounded-lg border border-dark-border p-6">
              <h3 className="font-heading font-bold text-text-primary text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
                <span className="w-4 h-px bg-gold" aria-hidden="true" /> The Meaning
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                <strong className="text-text-primary">The Light Bearers</strong> are those who carry
                and proclaim the Light to the ends of the world — so that darkness shall not
                comprehend it.
              </p>
              <p className="text-gold/70 text-xs italic leading-relaxed">
                "You cannot shine what you don't have."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
