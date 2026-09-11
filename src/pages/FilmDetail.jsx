import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, User, Video, Award, ChevronRight } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead.jsx'
import PageWrapper from '../components/layout/PageWrapper.jsx'
import Badge from '../components/ui/Badge.jsx'
import AnimatedSection from '../components/shared/AnimatedSection.jsx'
import FilmCard from '../components/films/FilmCard.jsx'
import { getFilmBySlug, films } from '../data/films.js'

export default function FilmDetail() {
  const { slug } = useParams()
  const film = getFilmBySlug(slug)

  if (!film) return <Navigate to="/films" replace />

  const related = films
    .filter((f) => f.slug !== slug && (f.type === film.type || f.genre.some((g) => film.genre.includes(g))))
    .slice(0, 3)

  return (
    <>
      <SEOHead
        title={film.title}
        description={film.synopsis?.slice(0, 155) || `${film.title} — a production by The Light Bearers Film Production.`}
        ogImage={film.poster}
        ogType="video.movie"
        canonicalPath={`/films/${film.slug}`}
      />
      <PageWrapper>

        {/* ── Film Hero ── */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden" aria-labelledby="film-title">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={film.poster}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover opacity-20 scale-105"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/80 to-dark/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
          </div>

          <div className="relative z-10 container-site pb-16 pt-32">
            {/* Back link */}
            <AnimatedSection className="mb-8">
              <Link
                to="/films"
                className="inline-flex items-center gap-2 text-text-muted text-sm font-heading hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
              >
                <ArrowLeft size={14} aria-hidden="true" /> Back to Films
              </Link>
            </AnimatedSection>

            <div className="flex flex-col lg:flex-row gap-12 items-end">
              {/* Poster */}
              <AnimatedSection delay={0.1} direction="right" className="flex-shrink-0 hidden lg:block">
                <div className="w-52 rounded overflow-hidden border border-dark-border shadow-card">
                  <div className="relative aspect-[2/3] bg-dark-alt">
                    <img
                      src={film.poster}
                      alt={film.posterAlt || `${film.title} poster`}
                      className="w-full h-full object-cover relative z-10"
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* Info */}
              <AnimatedSection delay={0.15} className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="gold">{film.type}</Badge>
                  {film.status === 'in-production' && (
                    <Badge variant="status">In Production</Badge>
                  )}
                  {film.genre.map((g) => (
                    <Badge key={g} variant="outline">{g}</Badge>
                  ))}
                </div>

                <h1
                  id="film-title"
                  className="font-display font-black text-display-lg text-white mb-3 leading-tight"
                >
                  {film.title}
                </h1>

                {film.tagline && (
                  <p className="font-display italic text-gold/70 text-lg mb-6">
                    "{film.tagline}"
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-6 text-text-muted text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-gold" aria-hidden="true" />
                    {film.year}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-gold" aria-hidden="true" />
                    {film.duration}
                  </span>
                  {film.director && (
                    <span className="flex items-center gap-1.5">
                      <User size={14} className="text-gold" aria-hidden="true" />
                      Dir. {film.director}
                    </span>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Main content ── */}
        <div className="bg-dark">
          <div className="container-site py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Synopsis + trailer */}
              <div className="lg:col-span-2 space-y-10">
                {/* Synopsis */}
                <AnimatedSection>
                  <h2 className="font-heading font-bold text-text-primary text-sm tracking-widest uppercase mb-4 flex items-center gap-3">
                    <span className="gold-line" aria-hidden="true" /> Synopsis
                  </h2>
                  <p className="text-text-muted text-base leading-relaxed">{film.synopsis}</p>
                </AnimatedSection>

                {/* Trailer */}
                {film.trailer ? (
                  <AnimatedSection delay={0.1}>
                    <h2 className="font-heading font-bold text-text-primary text-sm tracking-widest uppercase mb-4 flex items-center gap-3">
                      <span className="gold-line" aria-hidden="true" /> Trailer
                    </h2>
                    <div className="relative aspect-video rounded overflow-hidden border border-dark-border">
                      <iframe
                        src={film.trailer}
                        title={`${film.title} — Official Trailer`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </AnimatedSection>
                ) : (
                  <AnimatedSection delay={0.1}>
                    <div className="aspect-video rounded border border-dashed border-dark-border flex flex-col items-center justify-center gap-3 text-center p-8">
                      <Video size={28} className="text-gold/30" aria-hidden="true" />
                      <p className="text-text-subtle text-sm font-heading">
                        Trailer coming soon
                      </p>
                      <p className="text-text-subtle text-xs italic">
                        [Replace <code className="text-gold/50">trailer: null</code> with a YouTube embed URL in films.js]
                      </p>
                    </div>
                  </AnimatedSection>
                )}

                {/* Gallery placeholder */}
                {film.gallery && film.gallery.length > 0 ? (
                  <AnimatedSection delay={0.15}>
                    <h2 className="font-heading font-bold text-text-primary text-sm tracking-widest uppercase mb-4 flex items-center gap-3">
                      <span className="gold-line" aria-hidden="true" /> Gallery
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {film.gallery.map((img, i) => (
                        <div key={i} className="aspect-video rounded overflow-hidden bg-dark-alt">
                          <img
                            src={img}
                            alt={`${film.title} production still ${i + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>
                ) : null}
              </div>

              {/* Sidebar — credits, awards */}
              <aside aria-label="Film credits and details">
                <AnimatedSection delay={0.2} direction="right">
                  <div className="bg-dark-surface rounded border border-dark-border p-6 space-y-6 sticky top-28">

                    {/* Credits */}
                    <div>
                      <h2 className="font-heading font-bold text-text-primary text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                        <span className="w-4 h-px bg-gold" aria-hidden="true" /> Credits
                      </h2>
                      <dl className="space-y-3">
                        {[
                          { label: 'Director', value: film.director },
                          { label: 'Producer', value: film.producer },
                        ].map(({ label, value }) =>
                          value ? (
                            <div key={label}>
                              <dt className="text-text-subtle text-[11px] font-heading uppercase tracking-wide mb-0.5">
                                {label}
                              </dt>
                              <dd className="text-text-muted text-sm font-body">{value}</dd>
                            </div>
                          ) : null
                        )}
                        {film.cast && film.cast.length > 0 && (
                          <div>
                            <dt className="text-text-subtle text-[11px] font-heading uppercase tracking-wide mb-1">
                              Cast
                            </dt>
                            <dd>
                              <ul className="space-y-0.5">
                                {film.cast.map((c) => (
                                  <li key={c} className="text-text-muted text-sm">{c}</li>
                                ))}
                              </ul>
                            </dd>
                          </div>
                        )}
                      </dl>
                    </div>

                    {/* Awards */}
                    {film.awards && film.awards.length > 0 && (
                      <div>
                        <h2 className="font-heading font-bold text-text-primary text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
                          <Award size={12} className="text-gold" aria-hidden="true" /> Awards
                        </h2>
                        <ul className="space-y-2">
                          {film.awards.map((award) => (
                            <li key={award} className="flex items-start gap-2">
                              <ChevronRight size={12} className="text-gold mt-1 flex-shrink-0" aria-hidden="true" />
                              <span className="text-text-muted text-xs leading-relaxed">{award}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Placeholder note */}
                    <p className="text-text-subtle text-[10px] italic border-t border-dark-border pt-4">
                      Credits above are demo placeholders. Replace in <code className="text-gold/50">src/data/films.js</code>.
                    </p>
                  </div>
                </AnimatedSection>
              </aside>
            </div>
          </div>
        </div>

        {/* ── Related Films ── */}
        {related.length > 0 && (
          <section className="section-padding bg-dark-surface border-t border-dark-border" aria-labelledby="related-heading">
            <div className="container-site">
              <h2
                id="related-heading"
                className="font-heading font-bold text-text-primary text-sm tracking-widest uppercase mb-8 flex items-center gap-3"
              >
                <span className="gold-line" aria-hidden="true" /> More Films
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((f, i) => (
                  <AnimatedSection key={f.slug} delay={i * 0.1}>
                    <FilmCard film={f} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

      </PageWrapper>
    </>
  )
}
