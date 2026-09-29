import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { img, responsive } from '../data/content'
import { Reveal, EASE } from './primitives'

const VIDEO = `${import.meta.env.BASE_URL}film-0325.mp4`

export default function Film() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)
  const poster = responsive(img.hero).src

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
    if (v.paused) v.play()
  }

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <section className="bg-ink py-24 text-ivory sm:py-32">
      <div className="shell">
        <div className="grid items-end gap-6 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="mb-6 text-[11px] uppercase tracking-label text-ivory/45">( Film )</p>
            </Reveal>
            <h2 className="display text-ivory text-[11vw] leading-[0.98] sm:text-6xl lg:text-[4.4rem]">
              <Reveal>
                <span>
                  See it <span className="italic text-clay">in motion.</span>
                </span>
              </Reveal>
            </h2>
          </div>
          <Reveal className="lg:col-span-3 lg:col-start-10" delay={0.1}>
            <p className="text-sm leading-relaxed text-ivory/60">
              A walk through our work — light, proportion and material, the way they are meant to be
              experienced.
            </p>
          </Reveal>
        </div>

        {/* Cinematic video frame */}
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(8% 8% 8% 8%)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 1.2, ease: EASE }}
          className="group relative aspect-video w-full overflow-hidden bg-cocoa"
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={VIDEO}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Banawat Architect's — project film"
          />

          {/* Controls */}
          <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-5 sm:p-7">
            <button
              onClick={togglePlay}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-ivory/50 bg-ink/30 text-ivory backdrop-blur-sm transition-colors duration-500 hover:bg-ivory hover:text-charcoal"
              aria-label={playing ? 'Pause film' : 'Play film'}
            >
              {playing ? '❚❚' : '▶'}
            </button>
            <button
              onClick={toggleMute}
              className="pointer-events-auto flex items-center gap-2 rounded-full border border-ivory/50 bg-ink/30 px-5 py-3 text-[10px] uppercase tracking-widest text-ivory backdrop-blur-sm transition-colors duration-500 hover:bg-ivory hover:text-charcoal"
              aria-label={muted ? 'Unmute film' : 'Mute film'}
            >
              {muted ? 'Sound off' : 'Sound on'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
