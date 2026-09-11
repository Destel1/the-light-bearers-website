/**
 * Badge — small label chip for genre, film type, status, year.
 * variant: 'gold' | 'outline' | 'muted' | 'status'
 */
export default function Badge({ children, variant = 'outline', className = '' }) {
  const variants = {
    gold: 'bg-gold/20 text-gold border border-gold/30',
    outline: 'border border-dark-border text-text-muted',
    muted: 'bg-dark-alt text-text-subtle',
    status: 'bg-gold/10 text-gold-light border border-gold/20',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-heading font-semibold tracking-wide uppercase ${
        variants[variant] || variants.outline
      } ${className}`}
    >
      {children}
    </span>
  )
}
