import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { responsive } from '../data/content'

const EASE = [0.22, 1, 0.36, 1]

// Fade + slide reveal on scroll into view.
export function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </M>
  )
}

// Line-by-line text reveal for editorial headings.
// Observe the UN-clipped container (not each line): the lines start translated
// outside their own overflow-hidden clip, so an IntersectionObserver placed on a
// line would read it as 0% visible and never fire. The container is never clipped.
export function RevealLines({ lines, className = '', lineClass = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  return (
    <span ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClass}`}
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : { y: '110%' }}
            transition={{ duration: 1, ease: EASE, delay: delay + i * 0.09 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

// Image with clip-path reveal + subtle scale, lazy-loaded and responsive.
export function RevealImage({ id, alt, className = '', imgClass = '', sizes = '100vw', priority = false }) {
  const r = responsive(id)
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.img
        {...r}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchpriority={priority ? 'high' : 'auto'}
        className={`h-full w-full object-cover ${imgClass}`}
        initial={{ scale: 1.12, clipPath: 'inset(12% 12% 12% 12%)' }}
        whileInView={{ scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={{ once: true, margin: '-6% 0px' }}
        transition={{ duration: 1.3, ease: EASE }}
      />
    </div>
  )
}

export { EASE }
