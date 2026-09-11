import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getFeaturedFilms } from '../../data/films.js'
import FilmCard from '../films/FilmCard.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import AnimatedSection from '../shared/AnimatedSection.jsx'

export default function FeaturedFilms() {
  const featured = getFeaturedFilms()

  return (
    <section className="section-padding bg-dark" aria-labelledby="featured-films-heading">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Our Work"
            title="Featured"
            titleAccent="Productions"
            subtitle="A selection of films from The Light Bearers — each one a story told with purpose."
            headingLevel={2}
          />
          <AnimatedSection delay={0.2} className="flex-shrink-0">
            <Link
              to="/films"
              className="btn-ghost flex items-center gap-2 text-gold hover:text-gold-light whitespace-nowrap"
            >
              View all films <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Featured film grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((film, i) => (
            <AnimatedSection key={film.slug} delay={i * 0.1}>
              <FilmCard film={film} featured />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
