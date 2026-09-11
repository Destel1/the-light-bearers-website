import AnimatedSection from '../shared/AnimatedSection.jsx'

const pillars = [
  {
    number: '01',
    title: 'Who We Are',
    description:
      'The Light Bearers Film Production is a Christian film and creative production company committed to using storytelling to transform hearts and minds for Kingdom expansion.',
  },
  {
    number: '02',
    title: 'Our Vision',
    description:
      'To be a beacon of Light, transforming lives for better communities.',
  },
  {
    number: '03',
    title: 'Our Mission',
    description:
      "Transforming hearts and minds, reflecting on God's love, truth and redemption for Kingdom expansion.",
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
            Our Foundation
            <span className="gold-line" aria-hidden="true" />
          </span>
          <h2
            id="mission-heading"
            className="font-display font-bold text-display-lg text-text-primary leading-tight mb-6"
          >
            Stories that carry{' '}
            <span className="text-gold-gradient">the Light.</span>
          </h2>
          <p className="text-text-muted text-base md:text-lg leading-relaxed">
            We create films and visual stories that reflect God's love, truth and redemption —
            bringing faith into meaningful conversations about life, identity, struggle,
            relationships, culture and the human experience.
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
