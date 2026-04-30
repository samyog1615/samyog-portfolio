'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    num: 'Project 01',
    name: 'Welfare Realty',
    narrative:
      'A sophisticated real estate solution tailored for the Nepalese market. Architected to solve complex property listing logic while maintaining a seamless, high-end user journey.',
    challenge: 'Complex listing logic at scale',
    stack: 'Next.js & Real-time DB',
    highlight:
      'Clean code architecture meets intuitive search functionality — real estate, redefined for a market that demanded more.',
    tag: 'Real Estate Platform',
    image: '/welfare-realty.png',
    reverse: false,
  },
  {
    num: 'Project 02',
    name: 'Compass Tradelink',
    narrative:
      'A B2B wholesale marketplace connecting verified manufacturers and distributors. Engineered for high-volume transactions, bulk pricing logic, and streamlined supply chain flows.',
    challenge: 'B2B complexity, simple UX',
    stack: 'Full-stack & UX Audit',
    highlight:
      "A wholesale operation's entire sourcing complexity — rendered frictionless for the retailer who simply needed to order and move.",
    tag: 'B2B Wholesale Marketplace',
    image: '/compass-tradelink.png',
    reverse: true,
  },
]

function ProjectItem({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/10 py-20 items-center ${
        project.reverse ? 'md:[direction:rtl]' : ''
      }`}
    >
      <div
        className={`[direction:ltr] ${
          project.reverse ? 'md:pl-16' : 'md:pr-16'
        }`}
      >
        <p className="text-[0.65rem] tracking-[0.25em] text-white/45 mb-6">
          {project.num}
        </p>
        <h3
          className="font-syne font-extrabold leading-[1.1] mb-4"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
        >
          {project.name}
        </h3>
        <p className="text-[0.82rem] text-white/70 leading-[1.9] mb-6">
          {project.narrative}
        </p>
        <div className="grid grid-cols-2 gap-6 mb-10">
          <div>
            <label className="block text-[0.6rem] tracking-[0.2em] uppercase text-white/45 mb-1">
              Challenge
            </label>
            <span className="text-[0.8rem] text-white">{project.challenge}</span>
          </div>
          <div>
            <label className="block text-[0.6rem] tracking-[0.2em] uppercase text-white/45 mb-1">
              Stack
            </label>
            <span className="text-[0.8rem] text-white">{project.stack}</span>
          </div>
        </div>
        <p className="text-[0.78rem] text-white/70 border-l border-white/30 pl-5 leading-[1.7]">
          {project.highlight}
        </p>
      </div>

      <div className="[direction:ltr] project-visual relative aspect-[4/3] overflow-hidden bg-noir-slate group">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505]/50 to-transparent pointer-events-none" />
        <span className="absolute bottom-6 left-6 text-[0.65rem] tracking-[0.15em] uppercase px-3 py-1.5 border border-white/30 text-white bg-[#050505]/60 backdrop-blur-sm">
          {project.tag}
        </span>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
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
            03 &mdash; Selected Work
          </p>
          <h2
            className="font-syne font-extrabold leading-[1.1]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            The Proof
          </h2>
        </motion.div>

        {projects.map((project, i) => (
          <ProjectItem key={project.num} project={project} index={i} />
        ))}

        <div className="border-b border-white/10" />
      </div>
    </section>
  )
}