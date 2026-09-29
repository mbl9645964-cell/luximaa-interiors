import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { img, responsive, studio } from '../data/content'
import { EASE } from './primitives'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])
  const poster = responsive(img.hero).src
  const video = `${import.meta.env.BASE_URL}film-0325.mp4`

  return (
    <section ref={ref} id="top" className="relative h-[100svh] w-full overflow-hidden bg-ink">
      {/* Parallax video background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 h-[112%] w-full">
        <video
          className="h-full w-full object-cover"
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </motion.div>

      {/* Cinematic gradient overlays */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/25 to-ink/75"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="shell flex flex-1 flex-col justify-center pt-20">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            className="mb-8 text-[11px] uppercase tracking-label text-ivory/70"
          >
            {studio.heroEyebrow}
          </motion.p>

          <h1 className="display max-w-[15ch] text-ivory text-[15vw] leading-[0.92] sm:text-[11vw] lg:text-[7.6vw]">
            {studio.heroLines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.1, ease: EASE, delay: 0.35 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.9 }}
            className="mt-8 max-w-md text-base font-light leading-relaxed text-ivory/80"
          >
            Thoughtful interiors. Timeless materials. Spaces with character.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.05 }}
            className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-3 bg-ivory px-9 py-4 text-[12px] uppercase tracking-widest text-charcoal transition-colors duration-500 hover:bg-beige"
            >
              Explore Our Work
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-ivory/50 px-9 py-4 text-[12px] uppercase tracking-widest text-ivory transition-colors duration-500 hover:bg-ivory/10"
            >
              Book a Consultation
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="shell flex items-center justify-between pb-8 text-ivory/60"
        >
          <span className="hidden text-[10px] uppercase tracking-label sm:block">
            {studio.heroFoot}
          </span>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-label">
            <span>Scroll</span>
            <span className="relative block h-10 w-px overflow-hidden bg-ivory/25">
              <motion.span
                className="absolute inset-x-0 top-0 h-4 bg-ivory"
                animate={{ y: ['-100%', '250%'] }}
                transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
              />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
