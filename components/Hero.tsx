'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 pt-32 pb-24 overflow-hidden"
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.p
          {...fadeUp(0.3)}
          className="section-label justify-center text-[0.7rem] tracking-[0.25em] uppercase text-white/45 mb-8"
        >
          Samyog Sanjel &mdash; Full-Stack Engineer &amp; UI/UX Designer
        </motion.p>

        <motion.h1
          {...fadeUp(0.5)}
          className="font-syne font-extrabold leading-[1.0] tracking-tight mb-8"
          style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
        >
          Logic in the Dark.
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}
          >
            Art in the Code.
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.7)}
          className="text-white/70 max-w-xl mx-auto leading-[1.9] mb-12 text-base"
        >
          Full-stack Developer and UI/UX Designer bridging the void between
          complex backend architecture and avant-garde digital experiences. I
          don&apos;t just build websites; I engineer digital legacies.
        </motion.p>

        <motion.div {...fadeUp(0.9)}>
          <a
            href="#projects"
            className="btn-ghost inline-block px-10 py-4 border border-white text-white text-[0.75rem] tracking-[0.2em] uppercase font-mono"
          >
            <span>View the Work</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(1.2)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="scroll-line w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/45">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
