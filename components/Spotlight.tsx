'use client'

import { useEffect, useRef } from 'react'

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return
      ref.current.style.background = `radial-gradient(circle 380px at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.045) 0%, transparent 70%)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-0 transition-[background] duration-[50ms]"
    />
  )
}
