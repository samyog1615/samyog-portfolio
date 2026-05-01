export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-16 py-8 flex justify-between items-center relative z-10">
      <p className="text-[0.7rem] text-white/45 tracking-[0.05em]">
        &copy; {new Date().getFullYear()} Samyog Sanjel. All rights reserved.
      </p>
    <img src="/ss-logo.svg" alt="SS" className="w-6 h-6 opacity-20" />    </footer>
  )
}
