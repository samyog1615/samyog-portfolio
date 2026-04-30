'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)
  const rafRef = useRef<number>(0)
  const ringPos = useRef({ x: -100, y: -100 })
  const mouse = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      setPos({ x: e.clientX, y: e.clientY })
    }

    const animateRing = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12
      setRing({ x: ringPos.current.x, y: ringPos.current.y })
      rafRef.current = requestAnimationFrame(animateRing)
    }

    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (el.matches('a, button, input, [data-cursor-hover]')) setHovered(true)
    }
    const onLeave = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (el.matches('a, button, input, [data-cursor-hover]')) setHovered(false)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onEnter)
    window.addEventListener('mouseout', onLeave)
    rafRef.current = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{ left: pos.x, top: pos.y }}
        animate={{ width: hovered ? 6 : 12, height: hovered ? 6 : 12 }}
        transition={{ duration: 0.2 }}
        className="fixed z-[9999] pointer-events-none bg-white rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      {/* Ring */}
      <motion.div
        style={{ left: ring.x, top: ring.y }}
        animate={{ width: hovered ? 60 : 40, height: hovered ? 60 : 40 }}
        transition={{ duration: 0.3 }}
        className="fixed z-[9998] pointer-events-none rounded-full border border-white/40 -translate-x-1/2 -translate-y-1/2"
      />
    </>
  )
}
