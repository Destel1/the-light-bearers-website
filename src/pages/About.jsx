import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead.jsx'
import PageWrapper from '../components/layout/PageWrapper.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import AnimatedSection from '../components/shared/AnimatedSection.jsx'
import { team, milestones } from '../data/team.js'

const values = [
  {
    title: 'Faith',
    description:
      'Our work is anchored in the belief that we are called to something greater than ourselves. Every film we make is an act of faith — faith in the power of story, in our team, and in the audience who will receive it.',
  },
  {
    title: 'Authenticity',
    description:
      'We tell stories that are true — not just factually, but emotionally and culturally. We resist the temptation to sanitise or exoticise the African experience. We tell it as it is, with all its complexity and beauty.',
  },
  {
    title: 'Excellence',
    description:
      'Being young and independent is not an excuse for low standards. We hold ourselves to an international benchmark of craft — in cinematography, in writing, in performance, and in everything we put our name on.',
  },
  {
    title: 'Community',
    description:
      'Film is a collaborative art. We invest in the people around us — our team, our collaborators, and the communities whose stories we tell. The Light Bearers is not a company; it is a family.',
  },
]

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Meet the team behind The Light Bearers Film Production — young, vibrant creatives united by faith and a passion for authentic African storytelling."
        canonicalPath="/about"
      />
      <PageWrapper>

        {/* ── Page Hero ── */}
        <section
          className="relative py-24 md:py-36 overflow-hidden"
          aria-labelledby="about-hero-heading"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 30% 50%, rgba(200,169,110,0.06) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />
          <div className="container-site relative z-10">
            <AnimatedSection className="max-w-3xl">
              <span className="inline-flex items-center gap-3 font-heading text-gold text-xs tracking-[0.3em] uppercase mb-4">
                <span className="gold-line" aria-hidden="true" />
                Our Story
              </span>
              <h1
                id="about-hero-heading"
                className="font-display font-black text-display-xl text-white mb-6 leading-none"
              >
                Born from{' '}
                <span className="text-gold-gradient">faith.</span>
                <br />
                Built on{' '}
                <span className="text-gold-gradient">story.</span>
              </h1>
              <p className="text-text-muted text-lg leading-relaxed">
                The Light Bearers Film Production is a creative film production company made up of
                young, vibrant youths who believe that storytelling is one of the most powerful
                forces for change in the world.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Our Story ── */}
        <section className="section-padding bg-dark-surface" aria-labelledby="story-heading">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <div>
                <SectionHeading
                  eyebrow="The Beginning"
                  title="Where we"
                  titleAccent="come from"
                  headingLevel={2}
                  className="mb-8"
                />
                <AnimatedSection delay={0.15}>
                  <div className="space-y-4 text-text-muted text-base leading-relaxed">
                    <p>
                      The Light Bearers Film Production was founded by a group of passionate young
                      creatives who saw a gap: African stories being told without African voices,
                      youth narratives filtered through the lens of outsiders, and a generation of
                      talented storytellers with no platform to amplify their work.
                    </p>
                    <p>
                      We set out to change that. Armed with cameras, conviction, and an
                      unshakeable belief in our calling, we began making films — small at first,
                      but always ambitious, always intentional, always rooted in something real.
                    </p>
                    <p>
                      Today, The Light Bearers is a growing creative force producing films that
                      travel across screens and across borders, carrying stories of faith, identity,
                      resilience, and hope to audiences around the world.
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              {/* Quote card */}
              <AnimatedSection delay={0.2} direction="right">
                <div className="relative bg-dark rounded-lg border border-dark-border p-10">
                  <div
                    className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-gold/50"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-gold/50"
                    aria-hidden="true"
                  />
                  <p className="font-display italic text-white text-xl leading-relaxed mb-6">
                    "We don't just tell stories. We carry light into dark places — and we do it by
                    faith, not by what we can see."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="gold-line" aria-hidden="true" />
                    <span className="font-heading font-semibold text-gold text-xs tracking-widest uppercase">
                      The Light Bearers
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="section-padding bg-dark" aria-labelledby="values-heading">
          <div className="container-site">
            <SectionHeading
              eyebrow="What Drives Us"
              title="Core"
              titleAccent="Values"
              subtitle="Four principles that shape every decision we make, every story we tell."
              align="center"
              headingLevel={2}
              className="mb-16"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map(({ title, description }, i) => (
                <AnimatedSection key={title} delay={i * 0.1}>
                  <div className="p-8 bg-dark-surface rounded border border-dark-border hover:border-gold/20 transition-colors duration-300 h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <span
                        className="font-display font-black text-4xl text-gold/15 leading-none select-none mt-1"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="gold-line mb-3" aria-hidden="true" />
                        <h3 className="font-heading font-bold text-text-primary text-lg">
                          {title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">{description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Team ── */}
        <section className="section-padding bg-dark-surface" aria-labelledby="team-heading">
          <div className="container-site">
            <SectionHeading
              eyebrow="The People"
              title="Meet the"
              titleAccent="Team"
              subtitle="The Light Bearers is powered by talented, passionate young creatives. Names and photos are placeholders — update with actual team bios."
              align="center"
              headingLevel={2}
              className="mb-16"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <AnimatedSection key={member.id} delay={i * 0.1}>
                  <div className="group text-center">
                    {/* Photo */}
                    <div className="relative w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden border-2 border-dark-border group-hover:border-gold/40 transition-colors duration-300">
                      <img
                        src={member.photo}
                        alt={member.photoAlt}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                      />
                      {/* Fallback avatar */}
                      <div className="absolute inset-0 bg-gradient-to-br from-dark-alt to-dark flex items-center justify-center">
                        <span className="font-display font-bold text-2xl text-gold/40">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-heading font-semibold text-text-primary text-sm mb-1">
                      {member.name}
                    </h3>
                    <p className="font-heading text-gold text-xs tracking-wide uppercase mb-3">
                      {member.role}
                    </p>
                    <p className="text-text-subtle text-xs leading-relaxed max-w-xs mx-auto">
                      {member.bio}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Milestones ── */}
        <section className="section-padding bg-dark" aria-labelledby="milestones-heading">
          <div className="container-site">
            <SectionHeading
              eyebrow="Our Journey"
              title="Milestones &"
              titleAccent="History"
              subtitle="Key moments in the story of The Light Bearers. Replace placeholder years and events with actual company history."
              headingLevel={2}
              className="mb-16"
            />
            <div className="relative max-w-2xl">
              {/* Vertical line */}
              <div
                className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent"
                aria-hidden="true"
              />
              <ol className="space-y-10 pl-8" aria-label="Company milestones timeline">
                {milestones.map((m, i) => (
                  <AnimatedSection key={i} delay={i * 0.1} direction="left">
                    <li className="relative">
                      {/* Dot */}
                      <div
                        className="absolute -left-8 top-1 w-3 h-3 rounded-full border-2 border-gold bg-dark"
                        aria-hidden="true"
                      />
                      <p className="font-heading font-semibold text-gold text-xs tracking-widest uppercase mb-1">
                        {m.year}
                      </p>
                      <h3 className="font-heading font-bold text-text-primary text-base mb-1">
                        {m.event}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">{m.detail}</p>
                    </li>
                  </AnimatedSection>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding bg-dark-surface border-t border-dark-border">
          <div className="container-site text-center">
            <AnimatedSection>
              <h2 className="font-display font-bold text-display-md text-white mb-4">
                Ready to create something{' '}
                <span className="text-gold-gradient">extraordinary?</span>
              </h2>
              <p className="text-text-muted mb-8 max-w-xl mx-auto">
                Whether you have a project in mind or simply want to connect, we're always open to
                conversations with fellow storytellers.
              </p>
              <Link to="/contact" className="btn-primary">
                Get in Touch <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

      </PageWrapper>
    </>
  )
}
