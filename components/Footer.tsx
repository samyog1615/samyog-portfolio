export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-16 py-8 flex justify-between items-center relative z-10">
      <p className="text-[0.7rem] text-white/45 tracking-[0.05em]">
        &copy; {new Date().getFullYear()} Samyog Sanjel. All rights reserved.
      </p>
      <p className="font-syne font-extrabold text-[0.9rem] text-white/20">SS</p>
    </footer>
  )
}
