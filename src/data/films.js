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
  // ─────────────────────────────────────────────
  // ADD YOUR REAL PRODUCTIONS HERE.
  // Each production should follow the schema above.
  // Example structure (remove the comment markers and fill in real data):
  //
  // {
  //   slug: 'your-film-title',
  //   title: 'Your Film Title',
  //   tagline: 'Your tagline here.',
  //   type: 'Short Film',
  //   genre: ['Drama', 'Faith'],
  //   year: 2024,
  //   duration: '24 min',
  //   director: 'Pefoufe Destel',
  //   producer: 'Pefoufe Destel',
  //   cast: [],
  //   synopsis: 'Your synopsis here.',
  //   poster: '/images/films/your-film-poster.jpg',
  //   posterAlt: 'Your Film Title — official poster',
  //   trailer: null,
  //   gallery: [],
  //   awards: [],
  //   featured: true,
  //   status: 'completed',
  // },
  // ─────────────────────────────────────────────
]

export const filmTypes = ['All', 'Short Film', 'Feature', 'Documentary', 'Music Video', 'Drama']

export function getFilmBySlug(slug) {
  return films.find((f) => f.slug === slug) || null
}

export function getFeaturedFilms() {
  return films.filter((f) => f.featured)
}
