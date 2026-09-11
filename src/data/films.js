/**
 * PRODUCTIONS — The Light Bearers Film Production
 *
 * Replace each entry with real production data as it becomes available.
 * Required for each film:
 *   slug         — URL-friendly identifier (e.g. 'film-title')
 *   title        — Official production title
 *   tagline      — One-line tagline
 *   type         — 'Short Film' | 'Feature' | 'Documentary' | 'Music Video' | 'Drama'
 *   genre        — Array of genre labels
 *   year         — Release or production year (number)
 *   duration     — Runtime string (e.g. '24 min')
 *   director     — Director name(s)
 *   producer     — Producer name(s)
 *   cast         — Array of cast names (empty array if not applicable)
 *   synopsis     — Full synopsis paragraph
 *   poster       — Path to poster image in /public/images/films/
 *   posterAlt    — Descriptive alt text for the poster image
 *   trailer      — YouTube embed URL, or null if not yet available
 *   gallery      — Array of still image paths, or empty array
 *   awards       — Array of award strings, or empty array
 *   featured     — true to show on the Home page featured section
 *   status       — 'completed' | 'in-production' | 'development'
 */

export const films = [
  {
    slug: 'the-last-rite',
    title: 'THE LAST RITE',
    tagline: 'When Christianity Meets Tradition',
    type: 'Feature',
    genre: ['Drama', 'Supernatural', 'Faith-Based Thriller'],
    year: 2026,
    duration: '46 min',
    director: 'Pefoufe Destel',
    producer: 'AZISEH BLESSING / THE LIGHT BEARERS FILM PRODUCTION',
    cast: [],
    synopsis: 'When Noah, a Christian returnee, refuses to participate in his family\'s ancestral rites, his decision ignites a dangerous conflict between Christian faith, cultural tradition, family loyalty, and spiritual forces. As ancient customs collide with the Gospel, Noah and his family are forced to confront the consequences of their beliefs, their heritage, and the choices that define their destiny.',
    poster: '/images/films/last_rite_poster.jpg',
    posterAlt: 'THE LAST RITE — official poster',
    trailer: null,
    gallery: [],
    awards: [],
    featured: true,
    status: 'completed',
  },
]

export const filmTypes = ['All', 'Short Film', 'Feature', 'Documentary', 'Music Video', 'Drama']

export function getFilmBySlug(slug) {
  return films.find((f) => f.slug === slug) || null
}

export function getFeaturedFilms() {
  return films.filter((f) => f.featured)
}
