/**
 * PageWrapper — adds consistent top padding to account for the fixed Navbar.
 * Wrap every page's outermost element with this component.
 */
export default function PageWrapper({ children, className = '' }) {
  return (
    <div className={`pt-16 md:pt-20 ${className}`}>
      {children}
    </div>
  )
}
