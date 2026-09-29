# Antara Concepts — Interior Design Studio

An ultra-premium, editorial website for **Antara Concepts**, an interior design studio based in
Sector 28, Faridabad (Delhi NCR). Designed to feel like an award-winning architecture/interior
studio: minimal, cinematic and material-rich.

**Tagline:** _Designing Spaces That Feel Like Home._

## Highlights

- Full-screen cinematic hero with parallax and animated scroll indicator
- Transparent navbar that transitions to a solid bar on scroll, with a full-screen mobile menu
- Editorial featured-projects grid with a cinematic project detail modal + gallery
- Services as an interactive editorial list (not generic cards)
- Split design-philosophy section with parallax imagery
- Scroll-triggered animated statistics (count-up on view)
- Scroll-driven vertical process timeline
- Rotating editorial testimonials
- Immersive materials / craftsmanship section
- Full-width cinematic CTA band
- Premium consultation form (Name, Phone, Email, Project Type, Budget, Message) with success state
- Fully responsive, accessible, SEO-friendly (meta + JSON-LD `InteriorDesignBusiness`)

## Tech

- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion 11
- Google Fonts: Cormorant Garamond (display) + Inter (body)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5178
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Design direction

Warm-neutral palette — ivory, off-white, charcoal, warm beige and muted brown — with elegant serif
headings, clean sans-serif body text, generous whitespace, thin hairline borders and restrained,
fast animations throughout.

## Notes

The consultation form is a front-end prototype (no backend); submissions surface a graceful
confirmation state. Wire it to an email service or CRM before going live. Imagery is served
responsively from Unsplash for the prototype and should be replaced with the studio's own
photography for production.
