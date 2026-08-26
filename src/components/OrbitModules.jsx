import { motion } from "motion/react";
import {
  Fuel,
  Truck,
  Container,
  BarChart3,
  FileSignature,
  Wallet,
  Users,
  ShoppingCart,
  Flame,
  Sparkles,
} from "lucide-react";
/* حلقه بیرونی — ۶ ماژول رنگی */
const OUTER = [
  { icon: Fuel, bg: "bg-brand-500/12", text: "text-brand-500", ring: "ring-brand-500/25", label: "مخازن" },
  { icon: Truck, bg: "bg-sky-500/12", text: "text-sky-500", ring: "ring-sky-500/25", label: "حمل و نقل" },
  { icon: BarChart3, bg: "bg-violet-500/12", text: "text-violet-500", ring: "ring-violet-500/25", label: "گزارش‌ها" },
  { icon: FileSignature, bg: "bg-amber-500/12", text: "text-amber-500", ring: "ring-amber-500/25", label: "قراردادها" },
  { icon: Wallet, bg: "bg-emerald-500/12", text: "text-emerald-500", ring: "ring-emerald-500/25", label: "مالی" },
  { icon: ShoppingCart, bg: "bg-rose-500/12", text: "text-rose-500", ring: "ring-rose-500/25", label: "فروش" },
];
/* حلقه داخلی — ۳ آیکون کوچک */
const INNER = [
  { icon: Container, text: "text-brand-600" },
  { icon: Users, text: "text-sky-600" },
  { icon: Sparkles, text: "text-amber-500" },
];
const R_OUT = 150;
const R_IN = 84;
/**
 * حلقه چرخان ماژول‌ها — نسخه بزرگ و حرفه‌ای:
 * دو مدار با چرخش معکوس، آیکون‌های رنگی با لیبل فارسی،
 * هاله گرادیانی، نقاط مداری و مرکز درخشان با دو حلقه ضربان.
 */
export default function OrbitModules({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 1.35, ease: [0.34, 1.56, 0.64, 1] }}
      className={`relative h-[380px] w-[380px] ${className}`}
    >
      {/* هاله پس‌زمینه رنگی */}
      <div className="absolute inset-8 rounded-full bg-[conic-gradient(from_0deg,rgba(5,161,143,0.14),rgba(56,189,248,0.12),rgba(139,92,246,0.12),rgba(245,158,11,0.12),rgba(244,63,94,0.10),rgba(5,161,143,0.14))] blur-2xl" />
      {/* مدار بیرونی */}
      <div className="absolute inset-[40px] rounded-full border-2 border-dashed border-brand-400/35" />
      {/* مدار داخلی */}
      <div className="absolute inset-[106px] rounded-full border border-brand-400/25" />
      {/* نقاط ثابت روی مدار بیرونی */}
      {[30, 90, 150, 210, 270, 330].map((a) => (
        <div
          key={a}
          className="absolute left-1/2 top-1/2 h-0 w-0"
          style={{ transform: `rotate(${a}deg) translateY(-${R_OUT}px)` }}
        >
          <span className="block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400/50" />
        </div>
      ))}
      {/* ═══ حلقه بیرونی چرخان — ۶ ماژول با لیبل ═══ */}
      <div className="absolute inset-0 animate-orbit">
        {OUTER.map((m, i) => {
          const angle = i * (360 / OUTER.length);
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              style={{ transform: `rotate(${angle}deg) translateY(-${R_OUT}px)` }}
            >
              <div className="animate-orbit-rev">
                <div style={{ transform: `rotate(${-angle}deg)` }}>
                  <div className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5">
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-xl shadow-brand-900/10 ring-2 ${m.ring} transition-transform hover:scale-110`}
                    >
                      <span className={`grid h-10 w-10 place-items-center rounded-xl ${m.bg}`}>
                        <m.icon className={`h-5.5 w-5.5 ${m.text}`} strokeWidth={1.9} />
                      </span>
                    </span>
                    <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold text-brand-900/70 shadow-sm ring-1 ring-brand-900/8 backdrop-blur">
                      {m.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* ═══ حلقه داخلی — چرخش معکوس ═══ */}
      <div className="absolute inset-0 animate-orbit-rev">
        {INNER.map((m, i) => {
          const angle = i * (360 / INNER.length) + 60;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              style={{ transform: `rotate(${angle}deg) translateY(-${R_IN}px)` }}
            >
              <div className="animate-orbit">
                <div style={{ transform: `rotate(${-angle}deg)` }}>
                  <span className="grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-md ring-1 ring-brand-900/10">
                    <m.icon className={`h-4 w-4 ${m.text}`} strokeWidth={2} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* ═══ مرکز ═══ */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <span className="relative grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 shadow-2xl shadow-brand-500/40 ring-4 ring-white">
          <span className="absolute inset-0 rounded-full bg-brand-500/40 animate-pulse-ring" />
          <span className="absolute inset-0 rounded-full bg-brand-400/30 animate-pulse-ring [animation-delay:1.3s]" />
          <Flame className="h-9 w-9 text-white drop-shadow" strokeWidth={2.1} />
        </span>
      </div>
    </motion.div>
  );
}