import SEOHead from '../components/shared/SEOHead.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import MissionStatement from '../components/home/MissionStatement.jsx'
import FeaturedFilms from '../components/home/FeaturedFilms.jsx'
import AboutTeaser from '../components/home/AboutTeaser.jsx'
import ServicesSnapshot from '../components/home/ServicesSnapshot.jsx'
import CallToAction from '../components/home/CallToAction.jsx'

export default function Home() {
  return (
    <>
      <SEOHead
        description="The Light Bearers Film Production — A Christian film and creative production company committed to using storytelling to transform hearts and minds for Kingdom expansion. For we walk by faith, not by sight."
        canonicalPath="/"
      />
      {/* Hero has its own full-screen treatment — no PageWrapper needed */}
      <HeroSection />
      <MissionStatement />
      <FeaturedFilms />
      <AboutTeaser />
      <ServicesSnapshot />
      <CallToAction />
    </>
  )
}
