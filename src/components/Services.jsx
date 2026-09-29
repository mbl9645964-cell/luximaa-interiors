import { useState } from 'react'
import { motion } from 'framer-motion'
import { services } from '../data/content'
import { Reveal, EASE } from './primitives'

function ServiceRow({ service, index }) {
  const [hover, setHover] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.7, ease: EASE, delay: (index % 4) * 0.05 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative border-t border-charcoal/12"
    >
      {/* Wash fill on hover */}
      <motion.span
        className="absolute inset-0 bg-charcoal"
        initial={false}
        animate={{ scaleY: hover ? 1 : 0 }}
        style={{ originY: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      />
      <div className="relative grid grid-cols-12 items-baseline gap-4 px-1 py-8 sm:py-10">
        <span
          className={`col-span-2 font-serif text-lg transition-colors duration-500 sm:text-xl ${
            hover ? 'text-ivory/50' : 'text-clay'
          }`}
        >
          {service.n}
        </span>
        <h3
          className={`col-span-10 font-serif text-2xl font-light leading-tight transition-colors duration-500 sm:col-span-4 sm:text-3xl ${
            hover ? 'text-ivory' : 'text-charcoal'
          }`}
        >
          {service.title}
        </h3>
        <p
          className={`col-span-12 mt-3 max-w-md text-sm leading-relaxed transition-colors duration-500 sm:col-span-5 sm:col-start-7 sm:mt-0 ${
            hover ? 'text-ivory/75' : 'text-cocoa'
          }`}
        >
          {service.text}
        </p>
        <span
          className={`col-span-1 hidden justify-self-end text-lg transition-all duration-500 sm:block ${
            hover ? 'translate-x-0 text-ivory opacity-100' : '-translate-x-2 opacity-0'
          }`}
        >
          →
        </span>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-6 pb-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow mb-5">( What we do )</p>
            <h2 className="display text-charcoal text-[10vw] leading-none sm:text-6xl lg:text-7xl">
              Services
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-3 lg:col-start-10 lg:self-end" delay={0.1}>
            <p className="text-sm leading-relaxed text-cocoa">
              End-to-end design capability, held under one studio — so the vision stays intact from
              concept to the finished room.
            </p>
          </Reveal>
        </div>

        <div className="border-b border-charcoal/12">
          {services.map((s, i) => (
            <ServiceRow key={s.n} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
