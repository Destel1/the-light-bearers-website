import { Link } from 'react-router-dom'
import { Clock, Calendar, ArrowRight } from 'lucide-react'
import Badge from '../ui/Badge.jsx'

/**
 * FilmCard — poster-based card used in film grid and featured sections.
 */
export default function FilmCard({ film, featured = false }) {
  const { slug, title, tagline, type, genre, year, duration, poster, posterAlt, status } = film

  return (
    <Link
      to={`/films/${slug}`}
      className={`group block bg-dark-surface rounded overflow-hidden film-card-hover border border-dark-border hover:border-gold/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
        featured ? 'ring-1 ring-gold/20' : ''
      }`}
      aria-label={`View film: ${title}`}
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-dark-alt">
        <img
          src={poster}
          alt={posterAlt || `${title} poster`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105 relative z-10"
        />

        {/* Status badge for in-production */}
        {status === 'in-production' && (
          <div className="absolute top-3 left-3 z-20">
            <Badge variant="status">In Production</Badge>
          </div>
        )}

        {/* Type badge */}
        <div className={`absolute top-3 right-3 z-20`}>
          <Badge variant="gold">{type}</Badge>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 z-20">
          <span className="flex items-center gap-1.5 text-gold text-xs font-heading font-semibold tracking-wide">
            View Film <ArrowRight size={13} />
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-heading font-bold text-text-primary text-base leading-snug mb-1 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        {tagline && (
          <p className="text-text-subtle text-xs italic font-display mb-3 line-clamp-1">
            {tagline}
          </p>
        )}
        <div className="flex items-center gap-3 text-text-subtle text-xs font-body">
          <span className="flex items-center gap-1">
            <Calendar size={11} aria-hidden="true" />
            {year}
          </span>
          <span className="text-dark-border" aria-hidden="true">|</span>
          <span className="flex items-center gap-1">
            <Clock size={11} aria-hidden="true" />
            {duration}
          </span>
        </div>
        {genre.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {genre.slice(0, 2).map((g) => (
              <Badge key={g} variant="muted">{g}</Badge>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
