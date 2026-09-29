import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { process } from '../data/content'
import { Reveal, EASE } from './primitives'

function Step({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20% 0px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative grid grid-cols-1 gap-4 py-10 sm:grid-cols-12 sm:gap-8 sm:py-12"
    >
      {/* Node */}
      <span className="absolute -left-[41px] top-[52px] hidden h-3 w-3 -translate-x-1/2 rounded-full border border-charcoal bg-canvas sm:block" />

      <div className="sm:col-span-3">
        <span className="font-serif text-5xl font-light text-clay sm:text-6xl">{step.n}</span>
      </div>
      <div className="sm:col-span-9 sm:pt-3">
        <h3 className="font-serif text-3xl font-light text-charcoal sm:text-4xl">{step.title}</h3>
        <p className="mt-4 max-w-xl leading-relaxed text-cocoa">{step.text}</p>
      </div>
    </motion.div>
  )
}

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="process" className="bg-canvas py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-6 pb-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow mb-5">( How we work )</p>
            <h2 className="display text-charcoal text-[10vw] leading-none sm:text-6xl lg:text-7xl">
              The Process
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-3 lg:col-start-10 lg:self-end" delay={0.1}>
            <p className="text-sm leading-relaxed text-cocoa">
              A calm, transparent path from first conversation to handover — six deliberate stages, no
              surprises.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative sm:pl-12">
          {/* Timeline track */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-charcoal/12 sm:block">
            <motion.div style={{ height }} className="absolute left-0 top-0 w-px bg-charcoal" />
          </div>

          <div className="divide-y divide-charcoal/10">
            {process.map((s, i) => (
              <Step key={s.n} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
