import { materials, responsive } from '../data/content'
import { Reveal, RevealImage, RevealLines } from './primitives'

export default function Materials() {
  return (
    <section className="bg-charcoal py-24 text-ivory sm:py-32">
      <div className="shell">
        <div className="grid items-end gap-6 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="mb-6 text-[11px] uppercase tracking-label text-ivory/45">
                ( Materials & craftsmanship )
              </p>
            </Reveal>
            <h2 className="display text-ivory text-[11vw] leading-[0.98] sm:text-6xl lg:text-[4.6rem]">
              <RevealLines lines={['Details make', <span key="s" className="italic text-clay">the space.</span>]} />
            </h2>
          </div>
          <Reveal className="lg:col-span-3 lg:col-start-10" delay={0.1}>
            <p className="text-sm leading-relaxed text-ivory/60">
              We obsess over the things you feel before you notice — the weight of a handle, the grain
              of a veneer, the fall of light on stone.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {materials.map((m, i) => (
            <div key={m.label} className={i % 2 === 1 ? 'lg:mt-12' : ''}>
              <RevealImage
                id={m.id}
                alt={m.label}
                className="aspect-[3/4] bg-cocoa"
                imgClass="transition-transform duration-[1400ms] ease-editorial hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <p className="mt-4 text-[11px] uppercase tracking-label text-ivory/55">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
