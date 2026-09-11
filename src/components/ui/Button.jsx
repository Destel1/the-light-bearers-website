import { Link } from 'react-router-dom'

/**
 * Button — unified button/link component.
 * variant: 'primary' | 'secondary' | 'ghost'
 * If `to` prop is provided, renders as a React Router Link.
 * If `href` prop is provided, renders as an <a> tag.
 * Otherwise renders as a <button>.
 */
export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  className = '',
  icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  ...props
}) {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  }[variant] || 'btn-primary'

  const content = (
    <>
      {icon && iconPosition === 'left' && <span aria-hidden="true">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span aria-hidden="true">{icon}</span>}
    </>
  )

  const classes = `${variantClass} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  )
}
