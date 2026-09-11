import AnimatedSection from '../shared/AnimatedSection.jsx'

const pillars = [
  {
    number: '01',
    title: 'Storytelling',
    description:
      'Every frame tells a story. We craft narratives that move, challenge, and inspire — rooted in the richness of African culture and the universal human experience.',
  },
  {
    number: '02',
    title: 'Youth Empowerment',
    description:
      'Young people are not the future — they are the present. We build platforms, skills, and opportunities for the next generation of African storytellers.',
  },
  {
    number: '03',
    title: 'Cultural Expression',
    description:
      'Our films are a celebration of identity. We honour tradition while embracing the bold, contemporary voices that are reshaping African cinema on the world stage.',
  },
]

export default function MissionStatement() {
  return (
    <section className="section-padding bg-dark-surface" aria-labelledby="mission-heading">
      <div className="container-site">
        {/* Central quote */}
        <AnimatedSection className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-3 font-heading text-gold text-xs tracking-[0.3em] uppercase mb-6">
            <span className="gold-line" aria-hidden="true" />
            Our Mission
            <span className="gold-line" aria-hidden="true" />
          </span>
          <h2
            id="mission-heading"
            className="font-display font-bold text-display-lg text-text-primary leading-tight mb-6"
          >
            Meaningful stories that{' '}
            <span className="text-gold-gradient">illuminate</span> the human spirit.
          </h2>
          <p className="text-text-muted text-base md:text-lg leading-relaxed">
            The Light Bearers Film Production is a creative company made up of young, vibrant
            youths dedicated to producing visual stories that matter — stories of faith, identity,
            resilience, and hope that resonate across cultures and across borders.
          </p>
        </AnimatedSection>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.number} delay={i * 0.15} className="relative">
              {/* Number */}
              <p
                className="font-display font-black text-6xl text-gold/8 leading-none mb-4 select-none"
                aria-hidden="true"
              >
                {pillar.number}
              </p>
              {/* Gold accent bar */}
              <div className="gold-line mb-4" aria-hidden="true" />
              <h3 className="font-heading font-bold text-text-primary text-lg mb-3">
                {pillar.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{pillar.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
