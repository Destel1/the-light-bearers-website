import { Link } from 'react-router-dom'
import { Clapperboard, Users, PenLine, Theater, ArrowRight } from 'lucide-react'
import AnimatedSection from '../shared/AnimatedSection.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const highlights = [
  {
    icon: Clapperboard,
    title: 'Film Production',
    desc: "Developing and producing films that reflect God's love, truth and redemption for Kingdom expansion.",
  },
  {
    icon: Theater,
    title: 'Drama Ministry',
    desc: 'Creating dramatic works that communicate truth with impact — for church events, outreach and live presentations.',
  },
  {
    icon: Users,
    title: 'Creative Training',
    desc: 'Equipping the next generation of Christian creatives to use their craft with excellence and Kingdom purpose.',
  },
  {
    icon: PenLine,
    title: 'Story Development',
    desc: 'Developing stories with purpose — original screenplays, adaptations and narratives grounded in truth.',
  },
]

export default function ServicesSnapshot() {
  return (
    <section className="section-padding bg-dark" aria-labelledby="services-snapshot-heading">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="What We Do"
            title="Our"
            titleAccent="Work"
            subtitle="From film production to creative training — we serve through every dimension of visual storytelling."
            headingLevel={2}
          />
          <AnimatedSection delay={0.2} className="flex-shrink-0">
            <Link
              to="/services"
              className="btn-ghost flex items-center gap-2 text-gold hover:text-gold-light whitespace-nowrap"
            >
              All services <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.1}>
              <div className="group p-6 bg-dark-surface rounded border border-dark-border hover:border-gold/30 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon size={18} className="text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-text-primary text-sm mb-2">{title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
