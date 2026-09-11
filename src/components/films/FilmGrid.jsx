import FilmCard from './FilmCard.jsx'
import AnimatedSection from '../shared/AnimatedSection.jsx'

/**
 * FilmGrid — responsive grid of FilmCard components.
 */
export default function FilmGrid({ films, emptyMessage = 'No films found.' }) {
  if (!films || films.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-text-muted font-body">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      role="list"
      aria-label="Films grid"
    >
      {films.map((film, i) => (
        <AnimatedSection key={film.slug} delay={i * 0.08} role="listitem">
          <FilmCard film={film} />
        </AnimatedSection>
      ))}
    </div>
  )
}
