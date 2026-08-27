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
      {/* نوار پشتیبانی بالا */}
      <div
        className={`overflow-hidden bg-brand-950 text-white transition-all duration-500 ${
          scrolled ? "max-h-0" : "max-h-12"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[13px] sm:px-6">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="hidden font-medium text-brand-100/85 sm:block">
              سامانه ابری مدیریت و حسابداری شرکت‌های نفت و گاز نواتیک
            </span>
          </div>
          <a
            href="tel:+93702008454"
            className="inline-flex items-center gap-2 font-black text-amber-300 transition hover:text-white"
          >
            <Headset className="h-4 w-4 text-amber-400" />
            <span>ارتباط با پشتیبانی:</span>
            <span className="fa-num" style={{ direction: "ltr" }}>+۹۳ ۷۰ ۲ ۰۰ ۸۴ ۵۴</span>
          </a>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-brand-900/10 bg-white/95 shadow-lg shadow-brand-950/5 backdrop-blur-xl"
            : "bg-white/85 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
          {/* لوگو نفت‌یار — آکنت واحد گرم روی آبی برند */}
          <a href="#home" className="flex items-center gap-2.5">
            <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-brand-600 shadow-lg shadow-brand-600/25">
              <Flame className="h-6 w-6 text-amber-400 drop-shadow-sm" strokeWidth={2.3} />
            </span>
            <span className="leading-tight">
              <span className="block text-xl font-black text-brand-950">
                نفت<span className="text-brand-500">یار</span>
              </span>
              <span className="block text-[11px] font-bold text-brand-900/55">
                سامانه هوشمند نفت و گاز
              </span>
            </span>
          </a>

          {/* منوی ناوبری دسکتاپ */}
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-xl px-3.5 py-2 text-[14px] font-bold text-brand-900/75 transition-colors hover:text-brand-600 after:absolute after:bottom-0.5 after:right-3.5 after:left-3.5 after:h-0.5 after:origin-right after:scale-x-0 after:rounded-full after:bg-brand-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* دکمه اکشن ثبت سفارش */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 active:scale-95"
            >
              <PhoneCall className="h-4 w-4" />
              ثبت سفارش دمو
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
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

        {/* منوی موبایل بازشونده */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-brand-900/8 bg-white lg:hidden"
            >
              <div className="flex flex-col p-3 space-y-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-bold text-brand-900/80 transition hover:bg-brand-50 hover:text-brand-600"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl bg-brand-600 px-4 py-3 text-center font-black text-white shadow-lg"
                >
                  ثبت سفارش دمو
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
