import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LayoutDashboard, FileBarChart2, CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import dashboard from "../assets/dashboard-main.png";
import report from "../assets/report-view.png";

const tabs = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "داشبورد مدیریتی",
    image: dashboard,
    points: [
      "نمای لحظه‌ای موجودی هر مخزن به تفکیک محصول",
      "پیگیری وضعیت تانکرها و محموله‌های در مسیر",
      "نمودار سود و زیان ماهانه با یک نگاه",
      "شاخص‌های کلیدی عملیات در بالای صفحه",
    ],
  },
  {
    id: "report",
    icon: FileBarChart2,
    label: "گزارش سود و زیان",
    image: report,
    points: [
      "سود و زیان به تفکیک هر محموله و ناوگان",
      "مقایسه درآمد و هزینه در بازه زمانی دلخواه",
      "خروجی اکسل و چاپ مستقیم گزارش‌ها",
      "فیلتر بر اساس ناوگان، محصول و مسیر",
    ],
  },
];

export default function Showcase() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section id="showcase" className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-lagoon-500/40 to-transparent" />
      <div className="absolute -bottom-32 right-1/4 h-[400px] w-[400px] rounded-full bg-flame-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="نمای سیستم"
          title="سیستم را از"
          highlight="نزدیک ببینید"
          desc="رابط کاربری مدرن و فارسی، طراحی‌شده برای کار روزمره تیم مالی و عملیاتی شما."
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t)}
              className={`relative inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold transition-all duration-300 ${
                active.id === t.id
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {active.id === t.id && (
                <motion.span
                  layoutId="showcase-tab"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-l from-flame-500 to-flame-600 shadow-lg shadow-flame-500/25"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.55 }}
                />
              )}
              <t.icon className="relative z-10 h-4.5 w-4.5" />
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 26, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-l from-lagoon-500/20 to-flame-500/20 blur-2xl" />
              <img
                src={active.image}
                alt={active.label}
                className="relative w-full rounded-2xl border border-white/12 shadow-2xl shadow-black/50"
              />
            </motion.div>
          </AnimatePresence>

          <div>
            <AnimatePresence mode="wait">
              <motion.ul
                key={active.id}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {active.points.map((p, i) => (
                  <motion.li
                    key={p}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.15 + i * 0.1, duration: 0.55 },
                      },
                    }}
                    className="glass flex items-center gap-3 rounded-2xl p-4"
                  >
                    <CheckCircle2 className="h-5.5 w-5.5 shrink-0 text-lagoon-400" />
                    <span className="text-[15px] font-medium leading-7 text-slate-200">{p}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
