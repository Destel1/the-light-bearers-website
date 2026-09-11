import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'The Light Bearers Film Production'
const DEFAULT_DESCRIPTION =
  'The Light Bearers Film Production — a creative film production company of young, vibrant storytellers. Focused on filmmaking, youth empowerment, and cultural expression.'
const DEFAULT_OG_IMAGE = '/images/og-default.jpg' // Replace with actual OG image

export default function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  canonicalPath = '',
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  // Replace with your actual domain when deployed
  const canonicalUrl = `https://thelightbearers.com${canonicalPath}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
