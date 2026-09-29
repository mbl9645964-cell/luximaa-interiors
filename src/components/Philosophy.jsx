import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { img, responsive } from '../data/content'
import { Reveal, RevealLines } from './primitives'

export default function Philosophy() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const r = responsive(img.philosophy)

  return (
    <section id="philosophy" ref={ref} className="bg-canvas py-24 sm:py-32">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Image */}
        <div className="lg:col-span-6">
          <div className="aspect-[4/5] w-full overflow-hidden bg-sand">
            <motion.img
              {...r}
              style={{ y, scale: 1.12 }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt="A warm, minimalist interior detail — timber, stone and soft natural light"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="eyebrow mb-8">( Design philosophy )</p>
          </Reveal>
          <h2 className="display text-charcoal text-[13vw] leading-[0.95] sm:text-6xl lg:text-[4.6rem]">
            <RevealLines
              lines={[
                'Form.',
                'Function.',
                <span key="f" className="italic text-umber">
                  Feeling.
                </span>,
              ]}
            />
          </h2>

          <Reveal delay={0.15}>
            <p className="mt-10 text-lg font-light leading-relaxed text-cocoa">
              Good design is not decoration — it is the quiet resolution of how a space looks, how it
              works, and how it makes you feel. We hold those three in balance on every project.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-5 leading-relaxed text-cocoa/90">
              We design for permanence over novelty: honest materials, generous proportion and details
              that reward a second look. The result is interiors with personality — spaces that settle
              into your life and only grow more beautiful with time.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-charcoal/10 pt-8 text-[11px] uppercase tracking-label text-umber">
              <span>Timeless over trend</span>
              <span>Material honesty</span>
              <span>Considered restraint</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
