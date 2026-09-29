import { nav, studio } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  const go = (href) => (e) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-charcoal/10 bg-ivory">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#top" onClick={go('#top')} className="flex items-baseline gap-2">
              <span className="font-serif text-3xl text-charcoal">{studio.logoMain}</span>
              <span className="text-[10px] uppercase tracking-label text-umber">{studio.logoSub}</span>
            </a>
            <p className="mt-6 max-w-xs font-serif text-2xl font-light leading-snug text-charcoal">
              {studio.tagline}
            </p>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="mb-6 text-[11px] uppercase tracking-label text-umber">Explore</p>
            <ul className="space-y-3 text-sm text-cocoa">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={go(n.href)} className="link-underline">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="mb-6 text-[11px] uppercase tracking-label text-umber">Studio</p>
            <ul className="space-y-3 text-sm text-cocoa">
              <li className="max-w-[22ch] leading-relaxed">{studio.address}</li>
              <li>
                <a href={`tel:${studio.phoneHref}`} className="link-underline">
                  {studio.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${studio.email}`} className="link-underline">
                  {studio.email}
                </a>
              </li>
              <li>
                <a
                  href={studio.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-charcoal/10 pt-8 text-[11px] uppercase tracking-widest text-umber sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {studio.name}. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="link-underline">
              Privacy Policy
            </a>
            <span className="text-clay">Faridabad · Delhi NCR</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
