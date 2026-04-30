'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '#arsenal', label: 'Arsenal' },
  { href: '#projects', label: 'Work' },
  { href: '#services', label: 'Craft' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-6 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-[#050505]/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <Link
        href="#"
        className="font-syne font-extrabold text-lg tracking-wide text-white"
      >
        SS
      </Link>

      <ul className="hidden md:flex gap-10 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-[0.7rem] tracking-[0.15em] uppercase text-white/45 hover:text-white transition-colors duration-300"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
