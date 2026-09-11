import { useState } from 'react'
import SEOHead from '../components/shared/SEOHead.jsx'
import PageWrapper from '../components/layout/PageWrapper.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import FilmGrid from '../components/films/FilmGrid.jsx'
import AnimatedSection from '../components/shared/AnimatedSection.jsx'
import { films, filmTypes } from '../data/films.js'

export default function Films() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All' ? films : films.filter((f) => f.type === activeFilter)

  return (
    <>
      <SEOHead
        title="Films"
        description="Browse the complete catalogue of productions from The Light Bearers Film Production — short films, documentaries, music videos, and features."
        canonicalPath="/films"
      />
      <PageWrapper>

        {/* ── Page Hero ── */}
        <section
          className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden"
          aria-labelledby="films-hero-heading"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 70% 40%, rgba(200,169,110,0.06) 0%, transparent 55%)',
            }}
            aria-hidden="true"
          />
          <div className="container-site relative z-10">
            <AnimatedSection>
              <span className="inline-flex items-center gap-3 font-heading text-gold text-xs tracking-[0.3em] uppercase mb-4">
                <span className="gold-line" aria-hidden="true" />
                The Catalogue
              </span>
              <h1
                id="films-hero-heading"
                className="font-display font-black text-display-xl text-white mb-4 leading-none"
              >
                Our <span className="text-gold-gradient">Films</span>
              </h1>
              <p className="text-text-muted text-lg max-w-2xl leading-relaxed">
                Every production is a story told with intention. Browse our growing catalogue of
                short films, documentaries, music videos, and feature films.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Filter tabs ── */}
        <section className="sticky top-16 md:top-20 z-30 bg-dark/95 backdrop-blur-md border-b border-dark-border">
          <div className="container-site py-3">
            <div
              className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide"
              role="tablist"
              aria-label="Filter films by type"
            >
              {filmTypes.map((type) => (
                <button
                  key={type}
                  role="tab"
                  aria-selected={activeFilter === type}
                  aria-controls="films-grid"
                  onClick={() => setActiveFilter(type)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded font-heading font-semibold text-xs tracking-wide uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    activeFilter === type
                      ? 'bg-gold text-dark'
                      : 'text-text-muted hover:text-text-primary border border-dark-border hover:border-gold/30'
                  }`}
                >
                  {type}
                  <span className="ml-1.5 opacity-60">
                    ({type === 'All' ? films.length : films.filter((f) => f.type === type).length})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Film grid ── */}
        <section
          id="films-grid"
          className="section-padding bg-dark"
          role="tabpanel"
          aria-label={`Films: ${activeFilter}`}
        >
          <div className="container-site">
            <FilmGrid
              films={filtered}
              emptyMessage={`No ${activeFilter} productions found yet.`}
            />

            {/* Disclaimer note */}
            <AnimatedSection delay={0.2}>
              <div className="mt-16 p-6 bg-dark-surface rounded border border-dark-border/50">
                <p className="text-text-subtle text-xs font-body italic text-center">
                  <strong className="text-text-muted not-italic">Demo Content:</strong> All film
                  entries above are fictional placeholder samples used to demonstrate the website
                  structure. They will be replaced with actual productions from The Light Bearers
                  Film Production.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </PageWrapper>
    </>
  )
}
