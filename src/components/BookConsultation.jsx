import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { studio } from '../data/content'
import { Reveal, EASE } from './primitives'

// NOTE: replace with LuxiMaa's live Razorpay Key ID (from the Razorpay dashboard).
// For production, create the order server-side and verify the signature via webhook.
const RAZORPAY_KEY = 'rzp_test_1DP5mmOlF5G5ag'
const RZP_SRC = 'https://checkout.razorpay.com/v1/checkout.js'

const options = [
  { id: 'consult', label: 'Design Consultation', amount: 1000, note: 'A focused sit-down about your space' },
  { id: 'visit', label: 'On-site Visit', amount: 2500, note: 'We visit and measure your site' },
  { id: 'advance', label: 'Project Booking Advance', amount: 25000, note: 'Reserve your project slot' },
]

function useRazorpay() {
  const [ready, setReady] = useState(!!window.Razorpay)
  useEffect(() => {
    if (window.Razorpay) return setReady(true)
    const s = document.createElement('script')
    s.src = RZP_SRC
    s.async = true
    s.onload = () => setReady(true)
    document.body.appendChild(s)
  }, [])
  return ready
}

const inputBase =
  'w-full border-0 border-b border-charcoal/20 bg-transparent pb-3 text-charcoal placeholder:text-cocoa/40 focus:border-charcoal focus:outline-none transition-colors'

export default function BookConsultation() {
  const ready = useRazorpay()
  const [sel, setSel] = useState(options[0])
  const [custom, setCustom] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', email: '' })
  const [paidId, setPaidId] = useState('')
  const [error, setError] = useState('')
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const amount = sel.id === 'custom' ? Math.max(0, parseInt(custom || '0', 10)) : sel.amount

  const pay = () => {
    setError('')
    if (!form.name || !form.phone) return setError('Please add your name and phone number.')
    if (!amount || amount < 1) return setError('Please enter a valid amount.')
    if (!ready || !window.Razorpay) return setError('Payment is loading — please try again in a moment.')
    const rzp = new window.Razorpay({
      key: RAZORPAY_KEY,
      amount: amount * 100, // paise
      currency: 'INR',
      name: studio.name,
      description: `${sel.label}${sel.id === 'custom' ? '' : ''}`,
      prefill: { name: form.name, email: form.email, contact: form.phone },
      notes: { purpose: sel.label },
      theme: { color: '#B08A3E' },
      handler: (resp) => setPaidId(resp.razorpay_payment_id),
      modal: { ondismiss: () => {} },
    })
    rzp.on('payment.failed', (r) => setError(r.error?.description || 'Payment failed. Please try again.'))
    rzp.open()
  }

  return (
    <section id="book" className="bg-ivory py-24 sm:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-6">( Book &amp; pay online )</p>
            <h2 className="display text-charcoal text-[11vw] leading-[0.98] sm:text-5xl lg:text-[3.6rem]">
              Book your<br /><span className="italic text-umber">consultation.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-sm leading-relaxed text-cocoa">
              Reserve a consultation, site visit or your project slot in a few taps. Secure online
              payment via UPI, cards, net-banking and wallets — your booking is confirmed instantly.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10 flex items-center gap-3 border-t border-charcoal/10 pt-8 text-[11px] uppercase tracking-label text-umber">
              <span>Secured by Razorpay</span>
              <span className="text-clay">·</span>
              <span>UPI · Cards · Net-banking</span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <AnimatePresence mode="wait">
            {paidId ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex min-h-[360px] flex-col justify-center border-t border-charcoal/15 pt-12"
              >
                <p className="font-serif text-4xl font-light text-charcoal sm:text-5xl">Payment received.</p>
                <p className="mt-5 max-w-sm leading-relaxed text-cocoa">
                  Thank you, {form.name.split(' ')[0] || 'there'}. Your {sel.label.toLowerCase()} is booked. Our
                  team will reach out shortly to confirm the details.
                </p>
                <p className="mt-4 text-[11px] uppercase tracking-label text-umber">Payment ID · {paidId}</p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
                className="border-t border-charcoal/15 pt-12"
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {options.map((o) => (
                    <button
                      key={o.id}
                      onClick={() => setSel(o)}
                      className={`border p-4 text-left transition-colors duration-300 ${
                        sel.id === o.id ? 'border-charcoal bg-charcoal text-ivory' : 'border-charcoal/20 hover:border-charcoal/50'
                      }`}
                    >
                      <span className="block font-serif text-2xl">₹{o.amount.toLocaleString('en-IN')}</span>
                      <span className={`mt-1 block text-[12px] ${sel.id === o.id ? 'text-ivory/80' : 'text-cocoa'}`}>{o.label}</span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setSel({ id: 'custom', label: 'Custom Amount' })}
                  className={`mt-3 text-[12px] uppercase tracking-widest ${sel.id === 'custom' ? 'text-charcoal' : 'text-umber'} link-underline`}
                >
                  Or enter a custom amount
                </button>
                {sel.id === 'custom' && (
                  <input
                    type="number"
                    min="1"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    placeholder="Amount in ₹"
                    className={`${inputBase} mt-4`}
                  />
                )}

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-3 block text-[11px] uppercase tracking-label text-umber">Name</span>
                    <input required value={form.name} onChange={update('name')} placeholder="Your full name" className={inputBase} />
                  </label>
                  <label className="block">
                    <span className="mb-3 block text-[11px] uppercase tracking-label text-umber">Phone</span>
                    <input required type="tel" value={form.phone} onChange={update('phone')} placeholder="+91 …" className={inputBase} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-3 block text-[11px] uppercase tracking-label text-umber">Email</span>
                    <input type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" className={inputBase} />
                  </label>
                </div>

                {error && <p className="mt-6 text-sm text-red-700">{error}</p>}

                <button
                  onClick={pay}
                  className="group mt-10 inline-flex w-full items-center justify-center gap-3 bg-charcoal px-10 py-5 text-[12px] uppercase tracking-widest text-ivory transition-colors duration-500 hover:bg-ink sm:w-auto"
                >
                  Pay ₹{amount.toLocaleString('en-IN')} &amp; Book
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
