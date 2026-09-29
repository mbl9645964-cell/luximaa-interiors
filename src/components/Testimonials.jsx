import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../data/content'
import { Reveal, EASE } from './primitives'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]

  return (
    <section className="bg-ivory py-24 sm:py-36">
      <div className="shell">
        <Reveal>
          <p className="eyebrow mb-14">( In their words )</p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <p className="display text-charcoal text-3xl leading-[1.15] sm:text-4xl lg:text-[3.4rem] lg:leading-[1.12]">
                  “{t.quote}”
                </p>
                <footer className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-serif text-xl text-charcoal">{t.name}</span>
                  <span className="text-[11px] uppercase tracking-label text-umber">
                    {t.project} · {t.location}
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-end gap-8 lg:col-span-3 lg:flex-col lg:items-start lg:justify-end">
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-px w-10 transition-all duration-500 ${
                    idx === i ? 'bg-charcoal' : 'bg-charcoal/25 hover:bg-charcoal/50'
                  }`}
                />
              ))}
            </div>
            <span className="font-serif text-lg text-clay">
              {String(i + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
