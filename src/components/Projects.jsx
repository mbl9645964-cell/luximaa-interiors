import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, responsive } from '../data/content'
import { Reveal, EASE } from './primitives'

// Editorial layout weights — deliberately asymmetric rhythm.
const layout = [
  'lg:col-span-7 aspect-[4/3]',
  'lg:col-span-5 lg:mt-24 aspect-[3/4]',
  'lg:col-span-5 aspect-[3/4]',
  'lg:col-span-7 lg:mt-16 aspect-[4/3]',
  'lg:col-span-6 aspect-[4/3]',
  'lg:col-span-6 lg:mt-20 aspect-[4/3]',
]

function ProjectCard({ project, onOpen, index }) {
  const r = responsive(project.image)
  return (
    <Reveal className={`col-span-1 ${layout[index]}`} delay={(index % 2) * 0.08}>
      <button
        onClick={() => onOpen(project)}
        className="group relative block h-full w-full overflow-hidden bg-sand text-left"
      >
        <img
          {...r}
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt={`${project.title}, ${project.location}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-90" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-8">
          <div className="text-ivory">
            <p className="text-[10px] uppercase tracking-label text-ivory/70">
              {project.category} · {project.year}
            </p>
            <h3 className="mt-2 font-serif text-2xl font-light leading-tight sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-ivory/75">{project.location}</p>
          </div>
          <span className="mb-1 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/50 text-ivory transition-all duration-500 group-hover:bg-ivory group-hover:text-charcoal sm:flex">
            ↗
          </span>
        </div>
      </button>
    </Reveal>
  )
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const cover = responsive(project.image)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="fixed inset-0 z-[70] overflow-y-auto bg-ink/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto my-6 w-[94%] max-w-5xl bg-canvas sm:my-12"
      >
        <button
          onClick={onClose}
          className="sticky top-0 z-10 ml-auto flex h-14 w-14 items-center justify-center bg-canvas text-charcoal transition-colors hover:text-umber"
          aria-label="Close project"
        >
          <span className="text-2xl font-light">×</span>
        </button>

        <div className="-mt-14">
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img
              {...cover}
              sizes="90vw"
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-8 sm:p-14">
            <p className="eyebrow">
              {project.category} · {project.year}
            </p>
            <h3 className="mt-4 font-serif text-4xl font-light leading-tight text-charcoal sm:text-5xl">
              {project.title}
            </h3>
            <p className="mt-2 text-umber">{project.location}</p>

            <div className="mt-10 grid gap-10 border-t border-charcoal/10 pt-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-lg font-light leading-relaxed text-cocoa">{project.summary}</p>
                <blockquote className="mt-8 border-l border-clay pl-6 font-serif text-2xl font-light italic leading-snug text-charcoal">
                  “{project.quote}”
                </blockquote>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <p className="text-[11px] uppercase tracking-label text-umber">Scope of work</p>
                <ul className="mt-5 space-y-3">
                  {project.scope.map((s) => (
                    <li key={s} className="flex items-baseline gap-3 text-cocoa">
                      <span className="text-clay">—</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {project.gallery.map((g) => {
                const gr = responsive(g)
                return (
                  <div key={g} className="aspect-[3/4] overflow-hidden bg-sand">
                    <img
                      {...gr}
                      sizes="(max-width: 640px) 90vw, 30vw"
                      alt={`${project.title} detail`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                    />
                  </div>
                )
              })}
            </div>

            <div className="mt-12 border-t border-charcoal/10 pt-8">
              <a
                href="#contact"
                onClick={onClose}
                className="link-underline text-[12px] uppercase tracking-widest text-charcoal"
              >
                Start a project like this →
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="work" className="bg-canvas py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 border-b border-charcoal/10 pb-10 sm:flex-row sm:items-end">
          <Reveal>
            <p className="eyebrow mb-5">( Selected work )</p>
            <h2 className="display text-charcoal text-[10vw] leading-none sm:text-6xl lg:text-7xl">
              Featured Projects
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-cocoa">
              A selection of residential, commercial and hospitality interiors — each shaped by its
              site, its light and the people who live in it.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
