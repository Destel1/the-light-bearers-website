/**
 * Truncate a string to a maximum length and append ellipsis.
 */
export function truncate(str, maxLength = 120) {
  if (!str || str.length <= maxLength) return str
  return str.slice(0, maxLength).trim() + '…'
}

/**
 * Format a film duration string for display.
 */
export function formatDuration(duration) {
  return duration || 'Runtime TBA'
}

/**
 * Returns a placeholder gradient background style for missing images.
 */
export function placeholderGradient(seed = 0) {
  const gradients = [
    'from-zinc-900 via-stone-800 to-zinc-900',
    'from-neutral-900 via-zinc-800 to-neutral-900',
    'from-stone-900 via-neutral-800 to-stone-900',
  ]
  return gradients[seed % gradients.length]
}

/**
 * Slugify a string for URL use.
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}
