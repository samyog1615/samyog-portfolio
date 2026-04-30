'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/useInView'

const cards = [
  {
    num: '01',
    title: 'Frontend Mastery',
    desc: 'Responsive, motion-rich interfaces engineered for precision. Every interaction crafted with intent — no excess, no ambiguity.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    num: '02',
    title: 'Backend Integrity',
    desc: 'Invisible engines of modern web applications. Scalable architectures built to endure — not just to function.',
    tags: ['Node.js', 'PostgreSQL', 'REST APIs', 'GraphQL', 'Prisma'],
  },
  {
    num: '03',
    title: 'Design Philosophy',
    desc: 'UI/UX as a discipline, not an afterthought. User-centric flows forged through rigorous auditing and high-fidelity execution.',
    tags: ['Figma', 'UX Auditing', 'Wireframing', 'Prototyping'],
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

export default function Arsenal() {
  const { ref, inView } = useInView()

  return (
    <section
      id="arsenal"
      className="py-32 border-t border-white/10 relative z-10"
    >
      <div className="max-w-[1200px] mx-auto px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="section-label text-[0.65rem] tracking-[0.25em] uppercase text-white/45 mb-4">
            02 &mdash; Tech Stack
          </p>
          <h2
            className="font-syne font-extrabold leading-[1.1]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            The Arsenal
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10"
        >
          {cards.map((card) => (
            <motion.div
              key={card.num}
              variants={item}
              className="bg-noir-black p-12 group relative overflow-hidden hover:bg-[#0d0d0d] transition-colors duration-400"
            >
              <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              <p className="text-[0.65rem] tracking-[0.2em] text-white/45 mb-8">
                {card.num}
              </p>
              <h3 className="font-syne font-bold text-[1.2rem] mb-4 leading-[1.3]">
                {card.title}
              </h3>
              <p className="text-[0.82rem] text-white/70 leading-[1.8] mb-8">
                {card.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.65rem] tracking-[0.1em] px-3 py-1 border border-white/12 text-white/45 group-hover:border-white/40 group-hover:text-white transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
