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
        description="The Light Bearers Film Production — We Walk by Faith not by Sight. A creative film production company of young, vibrant storytellers focused on filmmaking, youth empowerment, and cultural expression."
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
