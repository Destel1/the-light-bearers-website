/**
 * DEMO DATA — All film entries below are fictional/placeholder samples.
 * Replace with actual company productions when available.
 * Poster images should be placed in /public/images/films/
 */

export const films = [
  {
    slug: 'the-narrow-path',
    title: 'The Narrow Path',
    tagline: 'Some roads lead home through darkness.',
    type: 'Short Film',
    genre: ['Drama', 'Faith'],
    year: 2024,
    duration: '28 min',
    director: '[Director Name — Placeholder]',
    producer: '[Producer Name — Placeholder]',
    cast: ['[Lead Actor — Placeholder]', '[Supporting Actor — Placeholder]'],
    synopsis:
      'A young man torn between the expectations of his community and a calling he cannot explain embarks on a journey that will test everything he believes. Set against the vivid landscapes of West Africa, The Narrow Path is a meditation on faith, identity, and the courage it takes to walk your own road.',
    poster: '/images/films/placeholder-poster-1.jpg',
    posterAlt: 'The Narrow Path — film poster placeholder',
    trailer: null, // Replace with: 'https://www.youtube.com/embed/VIDEO_ID'
    gallery: [],
    awards: [],
    featured: true,
    status: 'completed',
  },
  {
    slug: 'embers-of-tomorrow',
    title: 'Embers of Tomorrow',
    tagline: 'The fire in us cannot be extinguished.',
    type: 'Short Film',
    genre: ['Drama', 'Youth'],
    year: 2024,
    duration: '22 min',
    director: '[Director Name — Placeholder]',
    producer: '[Producer Name — Placeholder]',
    cast: ['[Lead Actor — Placeholder]', '[Supporting Actor — Placeholder]'],
    synopsis:
      'In a city where young voices are silenced by circumstance, a group of students discover that storytelling is the most powerful form of resistance. Embers of Tomorrow celebrates the unbreakable spirit of African youth and the art they create against all odds.',
    poster: '/images/films/placeholder-poster-2.jpg',
    posterAlt: 'Embers of Tomorrow — film poster placeholder',
    trailer: null,
    gallery: [],
    awards: [],
    featured: true,
    status: 'completed',
  },
  {
    slug: 'voices-in-the-dust',
    title: 'Voices in the Dust',
    tagline: 'The ancestors still speak — if you listen.',
    type: 'Documentary',
    genre: ['Documentary', 'Culture'],
    year: 2023,
    duration: '45 min',
    director: '[Director Name — Placeholder]',
    producer: '[Producer Name — Placeholder]',
    cast: [],
    synopsis:
      "A documentary exploration of oral tradition and cultural memory across three generations of storytellers. Voices in the Dust asks what we owe to the past and what we leave for the future — and whether a culture's soul can survive the pressures of modernity.",
    poster: '/images/films/placeholder-poster-3.jpg',
    posterAlt: 'Voices in the Dust — film poster placeholder',
    trailer: null,
    gallery: [],
    awards: [],
    featured: true,
    status: 'completed',
  },
  {
    slug: 'still-waters',
    title: 'Still Waters',
    tagline: 'Peace is not the absence of storms.',
    type: 'Short Film',
    genre: ['Drama', 'Faith'],
    year: 2023,
    duration: '19 min',
    director: '[Director Name — Placeholder]',
    producer: '[Producer Name — Placeholder]',
    cast: ['[Lead Actor — Placeholder]'],
    synopsis:
      'A grieving mother finds unexpected grace in the kindness of a stranger during the most difficult week of her life. Still Waters is a quiet, intimate story about the spaces where faith breathes when words run out.',
    poster: '/images/films/placeholder-poster-4.jpg',
    posterAlt: 'Still Waters — film poster placeholder',
    trailer: null,
    gallery: [],
    awards: [],
    featured: false,
    status: 'completed',
  },
  {
    slug: 'new-dawn',
    title: 'New Dawn',
    tagline: 'Every sunrise is a second chance.',
    type: 'Music Video',
    genre: ['Music Video'],
    year: 2024,
    duration: '4 min',
    director: '[Director Name — Placeholder]',
    producer: '[Producer Name — Placeholder]',
    cast: [],
    synopsis:
      'A cinematic music video for a contemporary gospel artist, weaving together imagery of renewal, community, and hope. Shot across multiple locations, New Dawn blends visual poetry with a powerful soundtrack.',
    poster: '/images/films/placeholder-poster-5.jpg',
    posterAlt: 'New Dawn — music video poster placeholder',
    trailer: null,
    gallery: [],
    awards: [],
    featured: false,
    status: 'completed',
  },
  {
    slug: 'the-inheritance',
    title: 'The Inheritance',
    tagline: 'What we receive. What we pass on.',
    type: 'Feature',
    genre: ['Drama', 'Culture', 'Family'],
    year: 2025,
    duration: '94 min',
    director: '[Director Name — Placeholder]',
    producer: '[Producer Name — Placeholder]',
    cast: ['[Lead Actor — Placeholder]', '[Supporting Actor — Placeholder]', '[Supporting Actor — Placeholder]'],
    synopsis:
      "When a family patriarch passes away, three adult children return to their ancestral home only to discover that the real inheritance is not land or money — but the unspoken truths, old wounds, and enduring love their father left behind. The Inheritance is The Light Bearers' most ambitious production to date.",
    poster: '/images/films/placeholder-poster-6.jpg',
    posterAlt: 'The Inheritance — film poster placeholder',
    trailer: null,
    gallery: [],
    awards: [],
    featured: false,
    status: 'in-production',
  },
]

export const filmTypes = ['All', 'Short Film', 'Feature', 'Documentary', 'Music Video']

export function getFilmBySlug(slug) {
  return films.find((f) => f.slug === slug) || null
}

export function getFeaturedFilms() {
  return films.filter((f) => f.featured)
}
