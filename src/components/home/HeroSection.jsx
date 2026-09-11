import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const videoRef = useRef(null)

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero — The Light Bearers Film Production"
    >
      {/* Background — cinematic gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111008] to-[#0A0A0A]" />
        {/* Radial gold glow — top center */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-10"
          style={{
            background: 'radial-gradient(ellipse at center, #FCA311 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        {/* Radial ambient — bottom left */}
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-5"
          style={{
            background: 'radial-gradient(ellipse at bottom left, #FCA311 0%, transparent 65%)',
          }}
          aria-hidden="true"
        />
        {/* Film grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site text-center px-4">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="gold-line" aria-hidden="true" />
          <span className="font-heading text-gold text-xs tracking-[0.3em] uppercase">
            A Christian Film Production Company
          </span>
          <span className="gold-line" aria-hidden="true" />
        </motion.div>

        {/* Company name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-display font-black text-display-xl text-white mb-4 leading-none tracking-tight"
        >
          The Light{' '}
          <span className="text-gold-gradient">Bearers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-heading font-semibold text-text-muted text-sm tracking-[0.25em] uppercase mb-8"
        >
          Film Production
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-24 h-px bg-gold/50 mx-auto mb-8"
          aria-hidden="true"
        />

        {/* Motto — 2 Corinthians 5:7 */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="font-display italic text-gold/80 text-xl sm:text-2xl md:text-3xl mb-3 max-w-2xl mx-auto leading-snug"
        >
          "For we walk by faith, not by sight."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-text-subtle text-xs tracking-widest uppercase mb-12"
        >
          2 Corinthians 5:7
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/films" className="btn-primary text-sm px-8 py-3.5">
            Our Productions
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <Link to="/about" className="btn-secondary text-sm px-8 py-3.5">
            Our Story
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-text-subtle text-[10px] font-heading tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
