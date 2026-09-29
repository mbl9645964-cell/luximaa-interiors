import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { img, responsive } from '../data/content'
import { EASE } from './primitives'

export default function CTASection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const r = responsive(img.cta)

  return (
    <section ref={ref} className="relative flex min-h-[85vh] items-center overflow-hidden bg-ink">
      <motion.img
        {...r}
        style={{ y, scale: 1.18 }}
        sizes="100vw"
        alt="A serene, light-filled luxury interior at dusk"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />

      <div className="shell relative z-10 py-28 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1, ease: EASE }}
          className="display mx-auto max-w-[16ch] text-ivory text-[9vw] leading-[1.02] sm:text-6xl lg:text-[5rem]"
        >
          Let’s create a space worth coming home to.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="mt-12"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-ivory px-10 py-5 text-[12px] uppercase tracking-widest text-charcoal transition-colors duration-500 hover:bg-beige"
          >
            Start Your Project
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
