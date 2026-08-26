import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Flame, PhoneCall, Headset } from "lucide-react";

const links = [
  { href: "#home", label: "صفحه اصلی" },
  { href: "#modules", label: "ماژول‌ها" },
  { href: "#workflow", label: "مسیر کار" },
  { href: "#showcase", label: "نمای سیستم" },
  { href: "#features", label: "چرا نفت‌یار" },
  { href: "#testimonials", label: "مشتریان" },
  { href: "#contact", label: "تماس با ما" },
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
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* top support bar — مثل نواتیک */}
      <div
        className={`overflow-hidden bg-brand-900 text-white transition-all duration-500 ${
          scrolled ? "max-h-0" : "max-h-12"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[13px] sm:px-6">
          <span className="hidden text-brand-100/80 sm:block">
            سامانه مدیریت و حسابداری شرکت‌های نفت و گاز
          </span>
          <a
            href="tel:+93700000000"
            className="inline-flex items-center gap-2 font-bold text-brand-300 transition hover:text-white"
          >
            <Headset className="h-4 w-4" />
            ارتباط با پشتیبانی
            <span className="fa-num" style={{ direction: "ltr" }}>+۹۳ ۷۰ ۰۰۰ ۰۰۰۰</span>
          </a>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-brand-900/8 bg-white/90 shadow-lg shadow-brand-900/5 backdrop-blur-xl"
            : "bg-white/60 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/30">
              <Flame className="h-5.5 w-5.5 text-white" strokeWidth={2.3} />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-black text-brand-900">نفت‌یار</span>
              <span className="block text-[11px] font-medium text-brand-900/50">
                سامانه مدیریت نفت و گاز
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-lg px-3.5 py-2 text-[15px] font-semibold text-brand-900/70 transition-colors hover:text-brand-600 after:absolute after:bottom-0.5 after:right-3.5 after:left-3.5 after:h-0.5 after:origin-right after:scale-x-0 after:rounded-full after:bg-brand-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-[1.03] active:scale-95"
            >
              <PhoneCall className="h-4 w-4" />
              ثبت سفارش
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-xl text-brand-900 transition hover:bg-brand-500/10 lg:hidden"
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
              className="overflow-hidden border-t border-brand-900/8 bg-white lg:hidden"
            >
              <div className="flex flex-col p-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 font-semibold text-brand-900/75 transition hover:bg-brand-50 hover:text-brand-600"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 px-4 py-3 text-center font-bold text-white"
                >
                  ثبت سفارش
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}