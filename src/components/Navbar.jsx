import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Flame, PhoneCall } from "lucide-react";

const links = [
  { href: "#home", label: "خانه" },
  { href: "#modules", label: "ماژول‌ها" },
  { href: "#workflow", label: "مسیر کار" },
  { href: "#showcase", label: "نمای سیستم" },
  { href: "#features", label: "چرا نفت‌یار" },
  { href: "#testimonials", label: "مشتریان" },
  { href: "#contact", label: "تماس" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "glass shadow-2xl shadow-black/30"
              : "border border-transparent bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5">
            <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-flame-500 to-flame-600 shadow-lg shadow-flame-500/30">
              <Flame className="h-5 w-5 text-white" strokeWidth={2.4} />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold text-white">نفت‌یار</span>
              <span className="block text-[11px] font-medium text-slate-400">
                سامانه مدیریت نفت و گاز
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-[15px] font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-flame-400"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-l from-flame-500 to-flame-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-flame-500/25 transition-transform hover:scale-[1.03] active:scale-95"
            >
              <PhoneCall className="h-4 w-4" />
              درخواست دمو
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-xl text-slate-200 transition hover:bg-white/10 lg:hidden"
            aria-label="منو"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass mt-2 overflow-hidden rounded-2xl lg:hidden"
            >
              <div className="flex flex-col p-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 font-medium text-slate-200 transition hover:bg-white/5 hover:text-flame-400"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl bg-gradient-to-l from-flame-500 to-flame-600 px-4 py-3 text-center font-bold text-white"
                >
                  درخواست دمو
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
