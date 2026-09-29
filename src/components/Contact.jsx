import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { studio } from '../data/content'
import { Reveal, EASE } from './primitives'

const projectTypes = [
  'Residential — Full Home',
  'Residential — Single Space',
  'Commercial / Office',
  'Hospitality',
  'Turnkey Fit-out',
  'Consultation Only',
]
const budgets = ['Under ₹10 L', '₹10 L – ₹25 L', '₹25 L – ₹50 L', '₹50 L – ₹1 Cr', '₹1 Cr +']

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-3 block text-[11px] uppercase tracking-label text-umber">{label}</span>
      {children}
    </label>
  )
}

const inputBase =
  'w-full border-0 border-b border-charcoal/20 bg-transparent pb-3 text-charcoal placeholder:text-cocoa/40 focus:border-charcoal focus:outline-none focus:ring-0 transition-colors'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: projectTypes[0],
    budget: budgets[1],
    message: '',
  })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // No backend in this prototype — surface a graceful confirmation.
    setSent(true)
  }

  return (
    <section id="contact" className="bg-canvas py-24 sm:py-32">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Left — heading + details */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-6">( Start a conversation )</p>
            <h2 className="display text-charcoal text-[11vw] leading-[0.98] sm:text-5xl lg:text-[3.8rem]">
              Request a<br />
              <span className="italic text-umber">consultation.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-sm leading-relaxed text-cocoa">
              Tell us about your space and how you want it to feel. We’ll be in touch to arrange an
              initial conversation — no obligation.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-14 space-y-8 border-t border-charcoal/10 pt-10 text-sm">
              <div>
                <dt className="text-[11px] uppercase tracking-label text-umber">Studio</dt>
                <dd className="mt-2 max-w-xs leading-relaxed text-charcoal">{studio.address}</dd>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-[11px] uppercase tracking-label text-umber">Phone</dt>
                  <dd className="mt-2">
                    <a href={`tel:${studio.phoneHref}`} className="link-underline text-charcoal">
                      {studio.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-label text-umber">Email</dt>
                  <dd className="mt-2">
                    <a href={`mailto:${studio.email}`} className="link-underline text-charcoal">
                      {studio.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-label text-umber">Instagram</dt>
                <dd className="mt-2">
                  <a
                    href={studio.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-charcoal"
                  >
                    @{studio.instagram}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-6 lg:col-start-7">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="flex h-full min-h-[420px] flex-col justify-center border-t border-charcoal/15 pt-12"
              >
                <p className="font-serif text-4xl font-light text-charcoal sm:text-5xl">Thank you.</p>
                <p className="mt-5 max-w-sm leading-relaxed text-cocoa">
                  Your request has reached the studio. We typically respond within two working days —
                  we look forward to speaking with you, {form.name.split(' ')[0] || 'soon'}.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-10 w-fit link-underline text-[12px] uppercase tracking-widest text-charcoal"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE }}
                className="grid grid-cols-1 gap-9 border-t border-charcoal/15 pt-12 sm:grid-cols-2"
              >
                <Field label="Name">
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your full name"
                    className={inputBase}
                  />
                </Field>
                <Field label="Phone">
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+91 …"
                    className={inputBase}
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                    className={inputBase}
                  />
                </Field>
                <Field label="Project Type">
                  <select value={form.projectType} onChange={update('projectType')} className={inputBase}>
                    {projectTypes.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Budget Range">
                  <select value={form.budget} onChange={update('budget')} className={inputBase}>
                    {budgets.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </Field>
                <div className="hidden sm:block" aria-hidden />
                <div className="sm:col-span-2">
                  <Field label="Message">
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Tell us about your space, timeline and how you want it to feel…"
                      className={`${inputBase} resize-none`}
                    />
                  </Field>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 bg-charcoal px-10 py-5 text-[12px] uppercase tracking-widest text-ivory transition-colors duration-500 hover:bg-ink sm:w-auto"
                  >
                    Request a Consultation
                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
