import { studio } from '../data/content'
import { Reveal, RevealLines } from './primitives'

export default function Intro() {
  return (
    <section className="bg-canvas py-28 sm:py-36 lg:py-44">
      <div className="shell">
        <Reveal>
          <p className="eyebrow mb-12">( Our belief )</p>
        </Reveal>

        <h2 className="display max-w-[18ch] text-charcoal text-[8.5vw] leading-[1.02] sm:text-5xl lg:text-[4.4rem]">
          <RevealLines
            lines={[
              'We create spaces that are',
              'not just beautiful —',
              <span key="em" className="italic text-umber">
                they are experienced.
              </span>,
            ]}
          />
        </h2>

        <div className="mt-16 grid gap-10 border-t border-charcoal/10 pt-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-3" delay={0.05}>
            <p className="text-[11px] uppercase tracking-label text-umber">
              Residential
              <br />& Commercial
            </p>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-6" delay={0.12}>
            <p className="text-lg font-light leading-relaxed text-cocoa sm:text-xl">
              {studio.introLead}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
