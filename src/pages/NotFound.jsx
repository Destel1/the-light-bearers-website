import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead.jsx'
import PageWrapper from '../components/layout/PageWrapper.jsx'

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found" />
      <PageWrapper>
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="text-center px-4">
            <p
              className="font-display font-black text-[8rem] md:text-[12rem] leading-none text-gold/8 select-none mb-4"
              aria-hidden="true"
            >
              404
            </p>
            <div className="gold-line mx-auto mb-6" aria-hidden="true" />
            <h1 className="font-heading font-bold text-text-primary text-2xl mb-4">
              Scene Not Found
            </h1>
            <p className="text-text-muted text-base mb-8 max-w-sm mx-auto">
              The page you're looking for doesn't exist. It may have been moved or the URL
              might be incorrect.
            </p>
            <Link to="/" className="btn-primary">
              <ArrowLeft size={15} aria-hidden="true" />
              Back to Home
            </Link>
          </div>
        </div>
      </PageWrapper>
    </>
  )
}
