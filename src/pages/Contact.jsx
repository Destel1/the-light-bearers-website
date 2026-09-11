import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead.jsx'
import PageWrapper from '../components/layout/PageWrapper.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import AnimatedSection from '../components/shared/AnimatedSection.jsx'

/**
 * Contact form is ready for Formspree integration.
 * To activate:
 * 1. Create a free account at https://formspree.io
 * 2. Create a new form and copy the form endpoint URL
 * 3. Replace the FORM_ENDPOINT placeholder below with your actual endpoint
 * 4. The form will then submit to Formspree and forward emails to your address
 */
const FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID'

const subjects = [
  'Film Production Enquiry',
  'Drama Ministry Enquiry',
  'Music Video Production',
  'Creative Training / Workshops',
  'Story Development / Scriptwriting',
  'Collaboration / Partnership',
  'General Enquiry',
]

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim()) e.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (!form.subject) e.subject = 'Please select a subject.'
    if (!form.message.trim()) e.message = 'Please enter your message.'
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters.'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      // Focus the first error field
      const firstErrorField = Object.keys(validationErrors)[0]
      document.getElementById(`field-${firstErrorField}`)?.focus()
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const fieldClass = (name) =>
    `w-full bg-dark border rounded px-4 py-3 text-text-primary text-sm font-body placeholder:text-text-subtle transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold ${
      errors[name] ? 'border-red-500/60 focus:ring-red-500/50' : 'border-dark-border focus:border-gold/40'
    }`

  return (
    <>
      <SEOHead
        title="Contact"
        description="Get in touch with The Light Bearers Film Production. Enquire about film production, drama ministry, creative training, collaborations and more."
        canonicalPath="/contact"
      />
      <PageWrapper>

        {/* ── Page Hero ── */}
        <section
          className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden"
          aria-labelledby="contact-hero-heading"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 80% 30%, rgba(252,163,17,0.06) 0%, transparent 55%)',
            }}
            aria-hidden="true"
          />
          <div className="container-site relative z-10">
            <AnimatedSection className="max-w-2xl">
              <span className="inline-flex items-center gap-3 font-heading text-gold text-xs tracking-[0.3em] uppercase mb-4">
                <span className="gold-line" aria-hidden="true" />
                Let's Talk
              </span>
              <h1
                id="contact-hero-heading"
                className="font-display font-black text-display-xl text-white mb-6 leading-none"
              >
                Get in{' '}
                <span className="text-gold-gradient">Touch</span>
              </h1>
              <p className="text-text-muted text-lg leading-relaxed">
                Have a project, a story, or a question? We'd love to hear from you. Fill in the
                form and we'll get back to you as soon as possible.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Main content ── */}
        <section className="section-padding bg-dark" aria-label="Contact form and information">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Contact info */}
              <AnimatedSection direction="left" className="lg:col-span-1">
                <div className="space-y-8">
                  <div>
                    <h2 className="font-heading font-bold text-text-primary text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
                      <span className="gold-line" aria-hidden="true" />
                      Contact Details
                    </h2>
                    <div className="space-y-5">
                      {/* Email placeholder */}
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Mail size={15} className="text-gold" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-text-primary text-xs uppercase tracking-wide mb-0.5">
                            Email
                          </p>
                          <p className="text-text-muted text-sm italic">
                            [email@placeholder.com]
                          </p>
                          <p className="text-text-subtle text-xs mt-0.5">
                            Replace with actual email address
                          </p>
                        </div>
                      </div>

                      {/* Location placeholder */}
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <MapPin size={15} className="text-gold" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-text-primary text-xs uppercase tracking-wide mb-0.5">
                            Location
                          </p>
                          <p className="text-text-muted text-sm italic">
                            [City, Country — Placeholder]
                          </p>
                          <p className="text-text-subtle text-xs mt-0.5">
                            Replace with actual location
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enquiry types */}
                  <div className="p-6 bg-dark-surface rounded border border-dark-border">
                    <h3 className="font-heading font-semibold text-text-primary text-xs uppercase tracking-widest mb-4">
                      We Handle
                    </h3>
                    <ul className="space-y-2">
                      {[
                        'Film & drama production enquiries',
                        'Collaboration proposals',
                        'Creative training & workshops',
                        'Music video production',
                        'Story development',
                        'Partnership opportunities',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-text-muted text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/50 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Formspree note */}
                  <div className="p-4 bg-dark-surface rounded border border-dark-border/50">
                    <p className="text-text-subtle text-xs leading-relaxed italic">
                      <strong className="text-text-muted not-italic">Developer note:</strong> This
                      form is wired for Formspree. Replace the endpoint in{' '}
                      <code className="text-gold/60">Contact.jsx</code> with your actual Formspree
                      form ID to activate email delivery.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Form */}
              <AnimatedSection delay={0.15} direction="right" className="lg:col-span-2">
                {status === 'success' ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center p-12 bg-dark-surface rounded border border-dark-border max-w-md mx-auto">
                      <CheckCircle size={48} className="text-gold mx-auto mb-4" aria-hidden="true" />
                      <h2 className="font-heading font-bold text-text-primary text-xl mb-2">
                        Message Sent!
                      </h2>
                      <p className="text-text-muted text-sm mb-6">
                        Thank you for reaching out. We'll be in touch with you shortly.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="btn-secondary text-sm"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Contact form"
                    className="bg-dark-surface rounded border border-dark-border p-8 space-y-6"
                  >
                    <h2 className="font-heading font-bold text-text-primary text-sm tracking-widest uppercase flex items-center gap-3">
                      <span className="gold-line" aria-hidden="true" />
                      Send Us a Message
                    </h2>

                    {status === 'error' && (
                      <div
                        role="alert"
                        className="flex items-start gap-3 p-4 bg-red-950/40 border border-red-800/40 rounded"
                      >
                        <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <p className="text-red-300 text-sm">
                          Something went wrong. Please try again or contact us directly via email.
                        </p>
                      </div>
                    )}

                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="field-name"
                          className="block font-heading font-semibold text-text-muted text-xs uppercase tracking-wide mb-2"
                        >
                          Full Name <span className="text-gold" aria-label="required">*</span>
                        </label>
                        <input
                          id="field-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={fieldClass('name')}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'err-name' : undefined}
                        />
                        {errors.name && (
                          <p id="err-name" role="alert" className="mt-1.5 text-red-400 text-xs">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="field-email"
                          className="block font-heading font-semibold text-text-muted text-xs uppercase tracking-wide mb-2"
                        >
                          Email Address <span className="text-gold" aria-label="required">*</span>
                        </label>
                        <input
                          id="field-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={fieldClass('email')}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'err-email' : undefined}
                        />
                        {errors.email && (
                          <p id="err-email" role="alert" className="mt-1.5 text-red-400 text-xs">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="field-subject"
                        className="block font-heading font-semibold text-text-muted text-xs uppercase tracking-wide mb-2"
                      >
                        Subject <span className="text-gold" aria-label="required">*</span>
                      </label>
                      <select
                        id="field-subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className={`${fieldClass('subject')} appearance-none cursor-pointer`}
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? 'err-subject' : undefined}
                      >
                        <option value="" disabled>Select an enquiry type…</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p id="err-subject" role="alert" className="mt-1.5 text-red-400 text-xs">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="field-message"
                        className="block font-heading font-semibold text-text-muted text-xs uppercase tracking-wide mb-2"
                      >
                        Message <span className="text-gold" aria-label="required">*</span>
                      </label>
                      <textarea
                        id="field-message"
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, idea, or enquiry…"
                        className={`${fieldClass('message')} resize-y min-h-[120px]`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'err-message' : undefined}
                      />
                      {errors.message && (
                        <p id="err-message" role="alert" className="mt-1.5 text-red-400 text-xs">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <div className="flex items-center justify-between gap-4 pt-2">
                      <p className="text-text-subtle text-xs">
                        <span className="text-gold">*</span> Required fields
                      </p>
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                        aria-busy={status === 'loading'}
                      >
                        {status === 'loading' ? (
                          <>
                            <span className="inline-block w-3 h-3 border-2 border-dark/30 border-t-dark rounded-full animate-spin" aria-hidden="true" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={14} aria-hidden="true" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </section>

      </PageWrapper>
    </>
  )
}
