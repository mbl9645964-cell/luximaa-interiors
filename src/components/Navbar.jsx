import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, studio } from '../data/content'
import { EASE } from './primitives'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  const solid = scrolled || open
  const go = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
          solid ? 'bg-canvas/90 backdrop-blur-md border-b border-charcoal/10' : 'bg-transparent'
        }`}
      >
        <nav className="shell flex h-[76px] items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => go('#top')}
            className={`group flex items-baseline gap-2 transition-colors duration-500 ${
              solid ? 'text-charcoal' : 'text-ivory'
            }`}
            aria-label={`${studio.name} — home`}
          >
            <span className="font-serif text-2xl leading-none tracking-tight">{studio.logoMain}</span>
            <span
              className={`hidden text-[10px] uppercase tracking-label sm:inline ${
                solid ? 'text-umber' : 'text-ivory/70'
              }`}
            >
              {studio.logoSub}
            </span>
          </button>

          {/* Desktop nav */}
          <ul
            className={`hidden items-center gap-9 text-[12px] uppercase tracking-widest lg:flex ${
              solid ? 'text-cocoa' : 'text-ivory/90'
            }`}
          >
            {nav.map((item) => (
              <li key={item.href}>
                <button onClick={() => go(item.href)} className="link-underline py-1">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => go('#contact')}
              className={`hidden border px-6 py-3 text-[11px] uppercase tracking-widest transition-all duration-500 sm:inline-block ${
                solid
                  ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory'
                  : 'border-ivory/60 text-ivory hover:bg-ivory hover:text-charcoal'
              }`}
            >
              Book Consultation
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span
                className={`h-px w-6 transition-all duration-500 ${
                  open ? 'translate-y-[3.5px] rotate-45 bg-charcoal' : solid ? 'bg-charcoal' : 'bg-ivory'
                }`}
              />
              <span
                className={`h-px w-6 transition-all duration-500 ${
                  open ? '-translate-y-[3.5px] -rotate-45 bg-charcoal' : solid ? 'bg-charcoal' : 'bg-ivory'
                }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-40 bg-canvas lg:hidden"
          >
            <div className="shell flex h-full flex-col justify-center">
              <ul className="space-y-1">
                {nav.map((item, i) => (
                  <li key={item.href} className="overflow-hidden">
                    <motion.button
                      initial={{ y: '110%' }}
                      animate={{ y: '0%' }}
                      transition={{ duration: 0.7, ease: EASE, delay: 0.1 + i * 0.06 }}
                      onClick={() => go(item.href)}
                      className="block py-2 font-serif text-5xl font-light text-charcoal sm:text-6xl"
                    >
                      {item.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
              <div className="mt-14 space-y-1 border-t border-charcoal/10 pt-8 text-sm text-cocoa">
                <a href={`tel:${studio.phoneHref}`} className="block link-underline w-fit">
                  {studio.phoneDisplay}
                </a>
                <a href={`mailto:${studio.email}`} className="block link-underline w-fit">
                  {studio.email}
                </a>
                <p className="pt-3 text-umber">{studio.address}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
