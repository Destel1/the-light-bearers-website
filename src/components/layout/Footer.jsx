import { Link } from 'react-router-dom'
import { Instagram, Youtube, Facebook, Twitter, Mail } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Films', to: '/films' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ],
  Productions: [
    { label: 'Short Films', to: '/films' },
    { label: 'Documentaries', to: '/films' },
    { label: 'Music Videos', to: '/films' },
    { label: 'Features', to: '/films' },
  ],
}

// PLACEHOLDER — Replace href values with actual social media URLs when available
const socials = [
  {
    label: 'Instagram',
    href: '#placeholder-instagram',
    icon: Instagram,
    placeholder: true,
  },
  {
    label: 'YouTube',
    href: '#placeholder-youtube',
    icon: Youtube,
    placeholder: true,
  },
  {
    label: 'Facebook',
    href: '#placeholder-facebook',
    icon: Facebook,
    placeholder: true,
  },
  {
    label: 'Twitter / X',
    href: '#placeholder-twitter',
    icon: Twitter,
    placeholder: true,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-surface border-t border-dark-border" role="contentinfo">
      {/* Main footer */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">
              <img
                src="/images/logo.jpg"
                alt="The Light Bearers Film Production"
                className="h-16 w-auto"
              />
            </Link>
            <p className="font-display italic text-gold/70 text-sm mb-4 leading-relaxed">
              "For we walk by faith, not by sight."
            </p>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              A Christian film and creative production company committed to using the power of
              storytelling to transform hearts and minds for Kingdom expansion.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-6" aria-label="Social media links">
              {socials.map(({ label, href, icon: Icon, placeholder }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`${label}${placeholder ? ' (link placeholder — not yet active)' : ''}`}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-dark-border text-text-subtle hover:border-gold hover:text-gold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  {...(!placeholder && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-heading font-semibold text-text-primary text-sm tracking-widest uppercase mb-5">
                {heading}
              </h3>
              <ul className="space-y-3" role="list">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-text-muted text-sm hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-border">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-subtle text-xs font-body">
            © {year} The Light Bearers Film Production. All rights reserved.
          </p>
          <p className="text-text-subtle text-xs font-body italic">
            "For we walk by faith, not by sight."
          </p>
        </div>
      </div>
    </footer>
  )
}
