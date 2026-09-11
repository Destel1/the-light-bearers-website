import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/films', label: 'Films' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md border-b border-dark-border shadow-lg'
          : 'bg-gradient-to-b from-dark/80 to-transparent'
      }`}
      role="banner"
    >
      <nav
        className="container-site flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
          aria-label="The Light Bearers Film Production — Home"
        >
          <img
            src="/images/logo.jpg"
            alt="The Light Bearers Film Production"
            className="h-12 sm:h-14 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link to="/contact" className="btn-primary hidden md:inline-flex text-xs py-2 px-5">
          Work With Us
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-text-muted hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-dark-surface border-t border-dark-border"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <ul className="container-site py-6 flex flex-col gap-1" role="list">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `block py-3 px-2 font-heading font-medium text-sm tracking-wide border-b border-dark-border transition-colors ${
                        isActive ? 'text-gold' : 'text-text-muted hover:text-text-primary'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  to="/contact"
                  className="btn-primary w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Work With Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
