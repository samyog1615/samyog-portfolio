'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!email || !email.includes('@')) {
      setError(true)
      setTimeout(() => setError(false), 1500)
      return
    }
    setLoading(true)
    try {
      await emailjs.send(
        'portfolio_service',
        'template_4ccziw7',
        { from_email: email },
        '2iyEyLfDBJyPoT7pK'
      )
      setEmail('')
      setSent(true)
      setTimeout(() => setSent(false), 4000)
    } catch (err) {
      console.error(err)
      setError(true)
      setTimeout(() => setError(false), 2000)
    } finally {
      setLoading(false)
    }
  }

  const links = [
    { label: 'GitHub', href: 'https://github.com/samyog1615' },
    { label: 'Instagram', href: 'https://instagram.com/enlighten_samyog' },
    { label: 'Email', href: 'mailto:samyogsanjel@gmail.com' },
  ]

  return (
    <section
      id="contact"
      className="py-48 border-t border-white/10 text-center relative overflow-hidden z-10"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none font-archivo whitespace-nowrap"
        aria-hidden="true"
        style={{
          fontSize: 'clamp(8rem, 20vw, 18rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.03)',
          letterSpacing: '-0.05em',
          zIndex: 0,
        }}
      >
        CONTACT
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-syne font-extrabold leading-[1.0] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Ready to build
            <br />
            something resolute?
          </h2>

          <p className="text-[0.82rem] text-white/70 mb-16 tracking-[0.05em]">
            Currently accepting select freelance partnerships.
          </p>

          <div className="relative inline-block">
            <div className="contact-pulse absolute inset-[-1px] border border-white/20 pointer-events-none" />
            <div
              className={`flex border transition-colors duration-300 ${
                error ? 'border-red-500/60' : 'border-white/12'
              }`}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={sent ? 'Message received.' : 'your@email.com'}
                className="flex-1 bg-transparent px-6 py-5 text-white font-mono text-[0.82rem] outline-none placeholder:text-white/45 min-w-[260px]"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-white text-noir-black px-8 py-5 font-mono text-[0.7rem] tracking-[0.15em] uppercase hover:bg-white/88 transition-colors duration-300 whitespace-nowrap disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="text-[0.7rem] tracking-[0.15em] uppercase text-white/45 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
