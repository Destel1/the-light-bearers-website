import AnimatedSection from '../shared/AnimatedSection.jsx'

/**
 * SectionHeading — consistent heading pattern used across all page sections.
 * eyebrow: small all-caps label above the heading
 * title: main heading text (supports a gold span via titleAccent)
 * subtitle: optional paragraph below
 * align: 'left' | 'center'
 */
export default function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = 'left',
  className = '',
  headingLevel = 2,
}) {
  const Tag = `h${headingLevel}`
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <AnimatedSection className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-3 font-heading font-semibold text-xs tracking-[0.25em] uppercase text-gold mb-3">
          <span className="gold-line" aria-hidden="true" />
          {eyebrow}
          {align === 'center' && <span className="gold-line" aria-hidden="true" />}
        </span>
      )}
      <Tag className="font-heading font-bold text-display-md text-text-primary">
        {title}
        {titleAccent && (
          <>
            {' '}
            <span className="text-gold-gradient">{titleAccent}</span>
          </>
        )}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-text-muted text-base leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
