import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'noir-black': '#050505',
        'noir-slate': '#1A1A1B',
        'noir-white': '#FFFFFF',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        archivo: ['var(--font-archivo)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
