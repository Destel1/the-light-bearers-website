import { Link } from 'react-router-dom'
import {
  Clapperboard, Film, Music, Briefcase, PenLine, Users, ArrowRight, CheckCircle2,
} from 'lucide-react'
import SEOHead from '../components/shared/SEOHead.jsx'
import PageWrapper from '../components/layout/PageWrapper.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import AnimatedSection from '../components/shared/AnimatedSection.jsx'
import { services } from '../data/services.js'

const iconMap = {
  Clapperboard,
  Film,
  Music,
  Briefcase,
  PenLine,
  Users,
}

export default function Services() {
  return (
    <>
      <SEOHead
        title="Services"
        description="The Light Bearers Film Production offers full-service film production, documentary production, music video production, scriptwriting, corporate video, and youth storytelling workshops."
        canonicalPath="/services"
      />
      <PageWrapper>

        {/* ── Page Hero ── */}
        <section
          className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden"
          aria-labelledby="services-hero-heading"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 20% 60%, rgba(200,169,110,0.06) 0%, transparent 55%)',
            }}
            aria-hidden="true"
          />
          <div className="container-site relative z-10">
            <AnimatedSection className="max-w-3xl">
              <span className="inline-flex items-center gap-3 font-heading text-gold text-xs tracking-[0.3em] uppercase mb-4">
                <span className="gold-line" aria-hidden="true" />
                What We Offer
              </span>
              <h1
                id="services-hero-heading"
                className="font-display font-black text-display-xl text-white mb-6 leading-none"
              >
                Production{' '}
                <span className="text-gold-gradient">Services</span>
              </h1>
              <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
                From full-length feature films to corporate brand stories and youth empowerment
                workshops — we bring cinematic quality and creative intentionality to every project
                we take on.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Services list ── */}
        <section className="section-padding bg-dark" aria-label="Services list">
          <div className="container-site space-y-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Film
              const isEven = i % 2 === 0

              return (
                <AnimatedSection key={service.id} delay={i * 0.08}>
                  <article
                    className="group bg-dark-surface rounded-lg border border-dark-border hover:border-gold/25 transition-all duration-300 overflow-hidden"
                    aria-labelledby={`service-${service.id}`}
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-5 gap-0`}>
                      {/* Icon panel */}
                      <div className="lg:col-span-1 bg-dark p-8 flex flex-row lg:flex-col items-center lg:items-start justify-start gap-4 border-b lg:border-b-0 lg:border-r border-dark-border group-hover:border-gold/15 transition-colors duration-300">
                        <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                          <Icon size={22} className="text-gold" aria-hidden="true" />
                        </div>
                        <span className="font-heading font-semibold text-gold text-[11px] tracking-widest uppercase">
                          Service
                        </span>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-4 p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Left: title + description */}
                          <div>
                            <h2
                              id={`service-${service.id}`}
                              className="font-heading font-bold text-text-primary text-xl mb-1"
                            >
                              {service.title}
                            </h2>
                            <p className="font-display italic text-gold/60 text-sm mb-4">
                              {service.tagline}
                            </p>
                            <p className="text-text-muted text-sm leading-relaxed">
                              {service.description}
                            </p>
                          </div>

                          {/* Right: deliverables + CTA */}
                          <div>
                            <h3 className="font-heading font-semibold text-text-primary text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
                              <span className="w-3 h-px bg-gold" aria-hidden="true" />
                              What's Included
                            </h3>
                            <ul className="space-y-2 mb-6" aria-label={`${service.title} deliverables`}>
                              {service.deliverables.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                  <CheckCircle2
                                    size={13}
                                    className="text-gold mt-0.5 flex-shrink-0"
                                    aria-hidden="true"
                                  />
                                  <span className="text-text-muted text-xs leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                            <Link
                              to="/contact"
                              className="btn-secondary text-xs py-2 px-5 inline-flex"
                            >
                              {service.cta}
                              <ArrowRight size={13} aria-hidden="true" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              )
            })}
          </div>
        </section>

        {/* ── Process section ── */}
        <section className="section-padding bg-dark-surface border-t border-dark-border" aria-labelledby="process-heading">
          <div className="container-site">
            <SectionHeading
              eyebrow="How We Work"
              title="Our Creative"
              titleAccent="Process"
              subtitle="Every project is different, but our approach is always the same — intentional, collaborative, and craft-led."
              align="center"
              headingLevel={2}
              className="mb-16"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'We listen. We ask questions. We understand your story, your goals, and your audience before anything else.' },
                { step: '02', title: 'Development', desc: 'Scripts, storyboards, locations, casting — we build the creative blueprint that will guide every day of production.' },
                { step: '03', title: 'Production', desc: 'Cameras roll. This is where the story comes to life — with precision, creativity, and a commitment to the vision.' },
                { step: '04', title: 'Delivery', desc: 'Edited, graded, mixed, and mastered. We deliver a finished product ready for its audience — wherever that may be.' },
              ].map(({ step, title, desc }, i) => (
                <AnimatedSection key={step} delay={i * 0.12}>
                  <div className="relative text-center">
                    <p className="font-display font-black text-7xl text-gold/6 leading-none mb-3 select-none" aria-hidden="true">
                      {step}
                    </p>
                    <div className="gold-line mx-auto mb-3" aria-hidden="true" />
                    <h3 className="font-heading font-bold text-text-primary mb-2">{title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding bg-dark border-t border-dark-border">
          <div className="container-site text-center">
            <AnimatedSection>
              <h2 className="font-display font-bold text-display-md text-white mb-4">
                Ready to start your{' '}
                <span className="text-gold-gradient">project?</span>
              </h2>
              <p className="text-text-muted mb-8 max-w-xl mx-auto">
                Reach out to discuss your production needs. We'll respond with ideas, questions,
                and genuine enthusiasm for your story.
              </p>
              <Link to="/contact" className="btn-primary px-10 py-4">
                Start a Conversation <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

      </PageWrapper>
    </>
  )
}
