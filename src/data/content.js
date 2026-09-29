// Centralized content for Antara Concepts.
// Imagery: high-end editorial interior photography served responsively.

const U = (id, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`

export const img = {
  hero: '1600585154340-be6161a56a0c',
  heroAlt: '1600210492486-724fe5c67fb0',
  philosophy: '1615875605825-5eb9bb5d52ac',
  materials: '1618219908412-a29a1bb7b86e',
  cta: '1616137466211-f939a420be84',
  intro: '1618221195710-dd6b41faaea6',
}

export const src = (id, w, q) => U(id, w, q)

// Responsive srcset helper — elegant crops at consistent ratios.
export const responsive = (id) => ({
  src: U(id, 1400),
  srcSet: [640, 960, 1400, 2000].map((w) => `${U(id, w)} ${w}w`).join(', '),
})

export const projects = [
  {
    id: 'meridian-residence',
    title: 'Modern Luxury Residence',
    location: 'Greater Kailash, New Delhi',
    category: 'Residential',
    year: '2024',
    image: '1600585154340-be6161a56a0c',
    gallery: ['1600607687939-ce8a6c25118c', '1616486338812-3dadae4b4ace', '1615529182904-14819c35db37'],
    summary:
      'A 5,200 sq. ft. residence composed around light, stone and long sightlines — quiet luxury for a family that entertains often.',
    scope: ['Full interior architecture', 'Custom joinery', 'Lighting design', 'Art & styling'],
    quote: 'We wanted the house to feel calm the moment you step in. It does.',
  },
  {
    id: 'linden-apartment',
    title: 'Contemporary Apartment',
    location: 'Sector 15-A, Faridabad',
    category: 'Residential',
    year: '2024',
    image: '1522708323590-d24dbb6b0267',
    gallery: ['1560448204-e02f11c3d0e2', '1616137466211-f939a420be84', '1631679706909-1844bbd07221'],
    summary:
      'A compact three-bedroom home reworked into an open, warm-neutral sanctuary with concealed storage and layered lighting.',
    scope: ['Space planning', 'Custom furniture', 'Material selection', 'Turnkey execution'],
    quote: 'Every inch works harder now, and it still feels generous.',
  },
  {
    id: 'clairmont-villa',
    title: 'Minimalist Villa',
    location: 'Chattarpur, New Delhi',
    category: 'Residential',
    year: '2023',
    image: '1600607687939-ce8a6c25118c',
    gallery: ['1600585154340-be6161a56a0c', '1618221195710-dd6b41faaea6', '1615529182904-14819c35db37'],
    summary:
      'Pared-back architecture in travertine and oak — a villa where restraint becomes the defining gesture of luxury.',
    scope: ['Interior architecture', 'Bespoke stonework', 'Landscape interface', 'Lighting'],
    quote: 'They designed the silence between things. That is the whole point.',
  },
  {
    id: 'atrium-bedroom',
    title: 'Luxury Bedroom',
    location: 'Sector 28, Faridabad',
    category: 'Residential',
    year: '2024',
    image: '1616137466211-f939a420be84',
    gallery: ['1616486338812-3dadae4b4ace', '1560448204-e02f11c3d0e2', '1522708323590-d24dbb6b0267'],
    summary:
      'A primary suite wrapped in warm textiles, fluted timber and a single, deliberate accent of brushed brass.',
    scope: ['Bedroom suite', 'Custom headboard wall', 'Wardrobe design', 'Ambient lighting'],
    quote: 'It feels like a very good hotel that happens to be home.',
  },
  {
    id: 'senna-office',
    title: 'Premium Office',
    location: 'Nehru Place, New Delhi',
    category: 'Commercial',
    year: '2023',
    image: '1567016432779-094069958ea5',
    gallery: ['1604014237800-1c9102c219da', '1600607687939-ce8a6c25118c', '1616486338812-3dadae4b4ace'],
    summary:
      'A workspace for a legal practice — grounded, discreet and material-rich, designed to reassure clients within seconds.',
    scope: ['Workplace strategy', 'Reception & cabins', 'Acoustic design', 'Turnkey fit-out'],
    quote: 'Clients trust us faster in this room. That was the brief, exactly.',
  },
  {
    id: 'noor-hospitality',
    title: 'Boutique Hospitality Space',
    location: 'MG Road, Gurugram',
    category: 'Hospitality',
    year: '2023',
    image: '1616594039964-ae9021a400a0',
    gallery: ['1618219908412-a29a1bb7b86e', '1631679706909-1844bbd07221', '1560448204-e02f11c3d0e2'],
    summary:
      'A twelve-key boutique stay where every surface tells a tactile story — a study in atmosphere over ornament.',
    scope: ['Concept & narrative', 'FF&E', 'Custom lighting', 'Signage & details'],
    quote: 'Guests photograph the corners we agonised over. Worth every hour.',
  },
]

export const services = [
  {
    n: '01',
    title: 'Residential Interior Design',
    text: 'Homes composed around how you actually live — light, flow, and the small rituals of everyday life.',
  },
  {
    n: '02',
    title: 'Commercial Interiors',
    text: 'Offices, clinics and retail environments that carry your brand quietly and perform under daily use.',
  },
  {
    n: '03',
    title: 'Turnkey Interior Solutions',
    text: 'A single point of accountability from first sketch to the day you receive the keys.',
  },
  {
    n: '04',
    title: 'Space Planning',
    text: 'Intelligent layouts that resolve circulation, storage and proportion before a single wall moves.',
  },
  {
    n: '05',
    title: 'Custom Furniture',
    text: 'Bespoke pieces detailed and fabricated to the millimetre for your space and your body.',
  },
  {
    n: '06',
    title: 'Lighting Design',
    text: 'Layered schemes — ambient, task and accent — that shape mood as the day turns.',
  },
  {
    n: '07',
    title: 'Material & Finish Selection',
    text: 'Curated palettes of stone, timber, metal and textile chosen to age with grace.',
  },
  {
    n: '08',
    title: '3D Visualization',
    text: 'Photoreal previews so you experience the space, and sign off with certainty, before we build.',
  },
]

export const stats = [
  { value: 10, suffix: '+', label: 'Years of practice' },
  { value: 150, suffix: '+', label: 'Projects delivered' },
  { value: 25, suffix: '+', label: 'Cities served' },
  { value: 98, suffix: '%', label: 'Client satisfaction' },
]

export const process = [
  {
    n: '01',
    title: 'Discovery',
    text: 'We listen first. Site, lifestyle, budget and the way you want a space to feel — everything begins here.',
  },
  {
    n: '02',
    title: 'Concept',
    text: 'A clear design direction: spatial narrative, mood, palette and the ideas that will carry the project.',
  },
  {
    n: '03',
    title: 'Design Development',
    text: 'Drawings, layouts and 3D visualisation refined together until the design is precise and resolved.',
  },
  {
    n: '04',
    title: 'Material Selection',
    text: 'Hand-picked stone, timber, finishes and fixtures — sampled, compared and confirmed in person.',
  },
  {
    n: '05',
    title: 'Execution',
    text: 'Skilled craftsmen and rigorous site supervision turn the drawings into built reality, on schedule.',
  },
  {
    n: '06',
    title: 'Handover',
    text: 'Styled, cleaned and photographed — we hand you a space that is ready to be lived in from day one.',
  },
]

export const testimonials = [
  {
    quote:
      'Antara understood our home before we could describe it. The result is calm, warm and unmistakably ours — we notice something considered every single day.',
    name: 'Ritika & Aman Sethi',
    project: 'Private Residence',
    location: 'New Delhi',
  },
  {
    quote:
      'They managed design, vendors and site so completely that we simply arrived to a finished office. The space has changed how our clients see the firm.',
    name: 'Vikram Nanda',
    project: 'Commercial Office',
    location: 'Gurugram',
  },
  {
    quote:
      'The attention to material and light is extraordinary. It is the difference between a room that is decorated and one that is genuinely designed.',
    name: 'Priya Malhotra',
    project: 'Apartment Interior',
    location: 'Faridabad',
  },
]

export const materials = [
  { id: '1618219908412-a29a1bb7b86e', label: 'Natural Stone' },
  { id: '1615875605825-5eb9bb5d52ac', label: 'Warm Timber' },
  { id: '1631679706909-1844bbd07221', label: 'Considered Detail' },
  { id: '1604014237800-1c9102c219da', label: 'Architectural Light' },
]

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#philosophy' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const studio = {
  name: "LuxiMaa Interiors",
  logoMain: "LuxiMaa",
  logoSub: "Interiors",
  tagline: "Luxury Crafted For You.",
  heroEyebrow: "Interior Design Studio · Greater Faridabad",
  heroLines: ["Interiors,", "designed", "around you."],
  heroFoot: "Designing Spaces · Creating Experiences",
  introLead:
    "LuxiMaa Interiors is a Greater Faridabad interior design studio led by designer LuxiMaa, creating personalized residential and commercial interiors across Delhi NCR. Luxury, crafted for you — thoughtful spaces built around how you live, in warm, timeless materials and considered detail.",
  address: "Bansa Vega Street 41, First Floor, Sector 82, Greater Faridabad, Haryana 121002",
  phoneDisplay: "+91 99112 53371 · +91 99914 56100",
  phoneHref: "+919911253371",
  email: "luximainteriors@gmail.com",
  instagram: "luximainteriors",
  instagramUrl: "https://instagram.com/luximainteriors",
}
