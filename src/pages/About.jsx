import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead.jsx'
import PageWrapper from '../components/layout/PageWrapper.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import AnimatedSection from '../components/shared/AnimatedSection.jsx'
import { founder, team, coreValues, milestones } from '../data/team.js'

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="The Light Bearers Film Production is a Christian film and creative production company committed to using storytelling to transform hearts and minds for Kingdom expansion."
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
                Carrying the{' '}
                <span className="text-gold-gradient">Light.</span>
              </h1>
              <p className="text-text-muted text-lg leading-relaxed">
                The Light Bearers Film Production is a Christian film and creative production
                company committed to using the power of storytelling to transform hearts and
                minds for Kingdom expansion.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Who We Are ── */}
        <section className="section-padding bg-dark-surface" aria-labelledby="who-we-are-heading">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <div>
                <SectionHeading
                  eyebrow="The Company"
                  title="Who We"
                  titleAccent="Are"
                  headingLevel={2}
                  className="mb-8"
                />
                <AnimatedSection delay={0.15}>
                  <div className="space-y-4 text-text-muted text-base leading-relaxed">
                    <p>
                      We create films and visual stories that reflect God's love, truth and
                      redemption, bringing faith into meaningful conversations about life,
                      identity, struggle, relationships, culture and the human experience.
                    </p>
                    <p>
                      We believe film is more than entertainment. It is a language, a vessel, and
                      a meeting place — a way to carry truth into spaces where people live, think,
                      question, struggle and dream.
                    </p>
                    <p>
                      As a creative production company, we develop and produce films and other
                      visual works while creating opportunities to train, equip and raise a
                      generation of Christian filmmakers and storytellers who can use their craft
                      with excellence and purpose.
                    </p>
                    <p>
                      We are building beyond individual productions. Our vision is to grow into a
                      creative ecosystem where film production, training, cinema, editing, music
                      and other creative disciplines can come together to raise storytellers who
                      carry the Light into their generation.
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              {/* Vision & Mission cards */}
              <AnimatedSection delay={0.2} direction="right" className="space-y-6">
                <div className="bg-dark rounded-lg border border-dark-border p-8">
                  <h3 className="font-heading font-bold text-gold text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-gold" aria-hidden="true" /> Vision
                  </h3>
                  <p className="font-display text-text-primary text-xl leading-relaxed">
                    To be a beacon of Light, transforming lives for better communities.
                  </p>
                </div>

                <div className="bg-dark rounded-lg border border-dark-border p-8">
                  <h3 className="font-heading font-bold text-gold text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-gold" aria-hidden="true" /> Mission
                  </h3>
                  <p className="font-display text-text-primary text-xl leading-relaxed">
                    Transforming hearts and minds, reflecting on God's love, truth and redemption
                    for Kingdom expansion.
                  </p>
                </div>

                <div className="bg-dark rounded-lg border border-dark-border p-8">
                  <h3 className="font-heading font-bold text-gold text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-gold" aria-hidden="true" /> The Name
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-3">
                    <strong className="text-text-primary">The Light Bearers</strong> refers to
                    people who carry and proclaim the Light to the ends of the world — so that
                    darkness shall not comprehend it.
                  </p>
                  <p className="text-gold/70 text-xs italic">
                    "You cannot shine what you don't have."
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Our Story (Founder Journey) ── */}
        <section className="section-padding bg-dark" aria-labelledby="our-story-heading">
          <div className="container-site">
            <SectionHeading
              eyebrow="The Beginning"
              title="How It"
              titleAccent="Started"
              subtitle="From school drama to a calling that would become The Light Bearers Film Production."
              headingLevel={2}
              className="mb-12"
            />
            <div className="max-w-3xl mx-auto space-y-6 text-text-muted text-base leading-relaxed">
              <AnimatedSection delay={0.1}>
                <p>
                  It began through school drama. In 2016, during a youth camp at GTHS Canada in
                  Bamenda, Destel encountered Beautiful Feet Films and Drama Missions and watched
                  a drama titled <em>"TOO LATE TO CRY."</em> That encounter set something in
                  motion.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <p>
                  At first, the motivation was simple — to be seen, to act, to become a star, to
                  be recognized on stage. It was performance for recognition.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p>
                  Through several trainings and experiences — including church drama training, an
                  Ordinary Course in Church Drama, and Advanced training in Church Drama in 2021 —
                  his understanding began to shift.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <p>
                  In 2019, during a youth camp at FGBI, three questions turned everything upside
                  down:
                </p>
                <blockquote className="my-6 pl-6 border-l-2 border-gold/40">
                  <p className="text-text-primary italic mb-2">"What best can you do in my house?"</p>
                  <p className="text-text-primary italic mb-2">"How can you serve me?"</p>
                  <p className="text-text-primary italic">"What do I have?"</p>
                </blockquote>
                <p>
                  Those questions led him to seriously reconsider his purpose. Acting and
                  filmmaking were no longer about being seen — they were about service, calling
                  and ministry.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p>
                  He also noticed something that stayed with him: people could remember a film, a
                  drama or a piece of music long after experiencing them, while they might
                  struggle to remember a sermon heard the week before. What people <em>see</em>{' '}
                  can stay with them. And what stays can change.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.35}>
                <p>
                  In 2022, another encounter brought the vision back strongly. The prompting
                  eventually connected with Matthew 5:14 — <em>"You are the light of the world."</em>
                </p>
                <p className="mt-4">
                  That scripture became the foundation. The Light Bearers Film Production was
                  born.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="section-padding bg-dark-surface" aria-labelledby="values-heading">
          <div className="container-site">
            <SectionHeading
              eyebrow="What Drives Us"
              title="Core"
              titleAccent="Values"
              subtitle="Six principles that shape every decision we make and every story we tell."
              align="center"
              headingLevel={2}
              className="mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, i) => (
                <AnimatedSection key={value.number} delay={i * 0.08}>
                  <div className="p-8 bg-dark rounded border border-dark-border hover:border-gold/20 transition-colors duration-300 h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <span
                        className="font-display font-black text-4xl text-gold/15 leading-none select-none mt-1"
                        aria-hidden="true"
                      >
                        {value.number}
                      </span>
                      <div>
                        <div className="gold-line mb-3" aria-hidden="true" />
                        <h3 className="font-heading font-bold text-text-primary text-lg mb-2">
                          {value.title}
                        </h3>
                        {value.principle && (
                          <p className="text-gold/70 text-xs italic mb-3">{value.principle}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Founder ── */}
        <section className="section-padding bg-dark" aria-labelledby="founder-heading">
          <div className="container-site">
            <SectionHeading
              eyebrow="Leadership"
              title="The"
              titleAccent="Founder"
              subtitle="Pefoufe Destel — the creative vision behind The Light Bearers Film Production."
              headingLevel={2}
              className="mb-12"
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Photo */}
              <AnimatedSection direction="left">
                <div className="relative w-64 h-64 mx-auto rounded-lg overflow-hidden border-2 border-dark-border">
                  <img
                    src={founder.photo}
                    alt={founder.photoAlt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  {/* Fallback */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-alt to-dark flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full border-2 border-gold/30 flex items-center justify-center mx-auto mb-3">
                        <span className="text-gold/50 text-2xl font-display font-bold">PD</span>
                      </div>
                      <p className="text-text-subtle text-xs">Photo Coming Soon</p>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h3 className="font-heading font-bold text-text-primary text-xl mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-gold text-xs tracking-widest uppercase">{founder.role}</p>
                </div>
              </AnimatedSection>

              {/* Bio */}
              <AnimatedSection delay={0.15} direction="right" className="lg:col-span-2">
                <div className="space-y-4 text-text-muted text-base leading-relaxed">
                  {founder.bio.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Milestones ── */}
        <section className="section-padding bg-dark-surface" aria-labelledby="milestones-heading">
          <div className="container-site">
            <SectionHeading
              eyebrow="Our Journey"
              title="Key"
              titleAccent="Milestones"
              subtitle="The moments that shaped The Light Bearers Film Production."
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

        {/* ── The Future ── */}
        <section className="section-padding bg-dark border-t border-dark-border" aria-labelledby="future-heading">
          <div className="container-site">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <span className="inline-flex items-center gap-3 font-heading text-gold text-xs tracking-[0.3em] uppercase mb-6">
                  <span className="gold-line" aria-hidden="true" />
                  The Vision Ahead
                  <span className="gold-line" aria-hidden="true" />
                </span>
                <h2
                  id="future-heading"
                  className="font-display font-bold text-display-md text-white mb-6"
                >
                  Building a creative{' '}
                  <span className="text-gold-gradient">ecosystem.</span>
                </h2>
                <p className="text-text-muted text-base leading-relaxed mb-4">
                  The goal is not merely to produce individual films. The larger vision is to
                  build a creative ecosystem where filmmakers and creatives can be trained,
                  equipped, discipled and given the infrastructure needed to create work that
                  carries the Light.
                </p>
                <p className="text-text-muted text-base leading-relaxed mb-8">
                  Future development may include a cinema hall, editing sector, music production
                  and other creative infrastructure — all working together to raise a generation
                  of storytellers who walk by faith.
                </p>
                <Link to="/services" className="btn-primary">
                  See Our Services <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding bg-dark-surface border-t border-dark-border">
          <div className="container-site text-center">
            <AnimatedSection>
              <h2 className="font-display font-bold text-display-md text-white mb-4">
                Want to be part of{' '}
                <span className="text-gold-gradient">the story?</span>
              </h2>
              <p className="text-text-muted mb-8 max-w-xl mx-auto">
                Whether you have a project in mind or simply want to connect, we're always open
                to conversations with fellow storytellers and Kingdom builders.
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
