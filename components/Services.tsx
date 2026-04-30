'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/useInView'

const services = [
  {
    name: 'Full-Stack Web Development',
    desc: 'End-to-end creation of scalable, secure, and high-performance web applications. From database schema to pixel-perfect UI — architected to endure.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="4" y="8" width="40" height="28" rx="2" strokeWidth="1" />
        <line x1="4" y1="20" x2="44" y2="20" strokeWidth="1" />
        <line x1="16" y1="8" x2="16" y2="36" strokeWidth="1" />
        <line x1="16" y1="42" x2="32" y2="42" strokeWidth="1" />
        <line x1="24" y1="36" x2="24" y2="42" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: 'UI/UX Auditing & Design',
    desc: 'Reimagining existing platforms through the lens of modern aesthetics and psychological user flows. I diagnose digital friction before users feel it.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="24" cy="24" r="10" strokeWidth="1" />
        <circle cx="24" cy="24" r="20" strokeWidth="1" />
        <line x1="24" y1="4" x2="24" y2="14" strokeWidth="1" />
        <line x1="24" y1="34" x2="24" y2="44" strokeWidth="1" />
        <line x1="4" y1="24" x2="14" y2="24" strokeWidth="1" />
        <line x1="34" y1="24" x2="44" y2="24" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: 'Custom App Solutions',
    desc: 'Tailored digital tools engineered to solve specific business bottlenecks. Not templates. Not shortcuts. Purpose-built systems for problems that matter.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="8" y="8" width="14" height="14" rx="1" strokeWidth="1" />
        <rect x="26" y="8" width="14" height="14" rx="1" strokeWidth="1" />
        <rect x="8" y="26" width="14" height="14" rx="1" strokeWidth="1" />
        <rect x="26" y="26" width="14" height="14" rx="1" strokeWidth="1" />
        <line x1="15" y1="15" x2="33" y2="33" strokeWidth="1" />
      </svg>
    ),
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  const { ref, inView } = useInView()

  return (
    <section
      id="services"
      className="py-32 border-t border-white/10 relative z-10"
    >
      <div className="max-w-[1200px] mx-auto px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="section-label text-[0.65rem] tracking-[0.25em] uppercase text-white/45 mb-4">
            04 &mdash; What I Do
          </p>
          <h2
            className="font-syne font-extrabold leading-[1.1]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            The Craft
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={item}
              className="bg-noir-black p-10 flex flex-col gap-6 group hover:bg-[#0d0d0d] transition-colors duration-400"
            >
              <div className="stroke-white/60 group-hover:stroke-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-syne font-bold text-[1.15rem] leading-[1.3]">
                {service.name}
              </h3>
              <p className="text-[0.8rem] text-white/70 leading-[1.9] flex-1">
                {service.desc}
              </p>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/45 group-hover:text-white flex items-center gap-3 transition-all duration-300 group-hover:gap-5">
                Explore <span>→</span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
