import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '../shared/AnimatedSection.jsx'

const stats = [
  { value: '6+', label: 'Productions' },
  { value: '2+', label: 'Years Active' },
  { value: '∞', label: 'Stories to Tell' },
]

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
                Who We Are
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2
                id="about-teaser-heading"
                className="font-heading font-bold text-display-md text-text-primary mb-6 leading-tight"
              >
                Young voices.{' '}
                <span className="text-gold-gradient">Timeless stories.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-text-muted text-base leading-relaxed mb-4">
                The Light Bearers Film Production is built on a simple but powerful conviction:
                that young Africans have stories worth telling to the world. We are a team of
                passionate creatives — directors, writers, cinematographers, and producers — united
                by faith and driven by a love for the craft.
              </p>
              <p className="text-text-muted text-base leading-relaxed mb-8">
                We don't just make films. We build a movement — one story at a time.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Link to="/about" className="btn-primary">
                Meet the Team <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </AnimatedSection>
          </div>

          {/* Stats + quote */}
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
                  We Walk by Faith not by Sight. That's not just our slogan — it's how we
                  approach every single frame we put on screen.
                </p>
                <footer className="flex items-center gap-3">
                  <div className="gold-line" aria-hidden="true" />
                  <cite className="font-heading font-semibold text-gold text-xs tracking-wide uppercase not-italic">
                    The Light Bearers
                  </cite>
                </footer>
              </blockquote>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center p-4 bg-dark rounded border border-dark-border"
                >
                  <p className="font-display font-black text-3xl text-gold mb-1">{value}</p>
                  <p className="font-heading text-text-subtle text-xs tracking-wide uppercase">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
