import type { Metadata } from 'next'
import { Syne, JetBrains_Mono, Archivo_Black } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const archivo = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Samyog Sanjel — Full-Stack Developer & UI/UX Designer',
  description:
    'Full-stack developer and UI/UX designer bridging complex backend architecture and avant-garde digital experiences.',
  openGraph: {
    title: 'Samyog Sanjel',
    description: 'Logic in the Dark. Art in the Code.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${jetbrains.variable} ${archivo.variable} bg-noir-black text-noir-white font-mono antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
