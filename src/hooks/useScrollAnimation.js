import { useRef } from 'react'
import { useInView } from 'framer-motion'

/**
 * useScrollAnimation — returns a ref and boolean indicating if the element is in view.
 * @param {object} options - useInView options (once, margin, amount)
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px', ...options })
  return { ref, isInView }
}
