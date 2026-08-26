import { motion } from "motion/react";
import { ArrowLeft, PlayCircle, Fuel, Ship, BarChart3, Wallet } from "lucide-react";
import CountUp from "./CountUp";
import { faNum } from "../lib/utils";
import dashboard from "../assets/dashboard-main.png";

const stats = [
  { value: 40, suffix: "+", label: "شرکت نفتی فعال" },
  { value: 12, suffix: "", label: "ماژول یکپارچه" },
  { value: 99, suffix: "٪", label: "دقت گزارش‌ها" },
  { value: 24, suffix: "/۷", label: "پشتیبانی دائمی" },
];

const floatingCards = [
  {
    icon: Fuel,
    title: "موجودی مخزن",
    value: "۸۲٪",
    tone: "text-flame-400",
    pos: "right-[-1rem] top-[12%] lg:right-[-3rem]",
    delay: 1.2,
    anim: "animate-float",
  },
  {
    icon: Ship,
    title: "محموله در مسیر",
    value: "۱۲ تانکر",
    tone: "text-lagoon-400",
    pos: "left-[-1rem] top-[38%] lg:left-[-3.5rem]",
    delay: 1.5,
    anim: "animate-float-slow",
  },
  {
    icon: Wallet,
    title: "سود این ماه",
    value: "+۲۴٫۵٪",
    tone: "text-emerald-400",
    pos: "right-[8%] bottom-[-1.5rem]",
    delay: 1.8,
    anim: "animate-float",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink-950 pt-36 pb-24 lg:pt-44">
      {/* background */}
      <div className="grid-lines absolute inset-0" />
      <div className="absolute -top-40 right-1/4 h-[480px] w-[480px] rounded-full bg-flame-500/15 blur-[140px]" />
      <div className="absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-lagoon-500/12 blur-[140px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lagoon-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lagoon-400" />
            </span>
            سامانه اختصاصی مدیریت واردات و توزیع مواد نفتی
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-black leading-[1.4] text-white sm:text-5xl lg:text-[3.6rem] lg:leading-[1.35]"
          >
            مدیریت و حسابداری <span className="text-gradient">نفت و گاز</span>
            <br />
            در یک سیستم یکپارچه
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-slate-400"
          >
            از قرارداد و بارگیری تا مخزن، فروش، مصارف و گزارش سود و زیان هر محموله —
            همه عملیات شرکت شما در یک بستر واحد، با داده دقیق و لحظه‌ای.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-l from-flame-500 to-flame-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-flame-500/30 transition-transform hover:scale-[1.04] active:scale-95"
            >
              درخواست دموی رایگان
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur transition hover:border-lagoon-400/40 hover:bg-white/10"
            >
              <PlayCircle className="h-5 w-5 text-lagoon-400" />
              مشاهده سیستم
            </a>
          </motion.div>
        </div>

        {/* dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-l from-flame-500/25 via-transparent to-lagoon-500/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/12 shadow-2xl shadow-black/60 lg:rounded-[1.6rem]">
            <div className="flex items-center gap-2 border-b border-white/10 bg-ink-800/90 px-5 py-3 backdrop-blur">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-flame-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="mr-3 hidden rounded-md bg-white/5 px-3 py-1 text-xs text-slate-400 sm:block fa-num">
                app.naftyar.com/dashboard
              </span>
            </div>
            <img
              src={dashboard}
              alt="داشبورد مدیریتی نفت‌یار"
              className="w-full"
              loading="eager"
            />
          </div>

          {floatingCards.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: c.delay, ease: [0.34, 1.56, 0.64, 1] }}
              className={`absolute hidden sm:block ${c.pos}`}
            >
              <div className={`glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl shadow-black/40 ${c.anim}`}>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/8">
                  <c.icon className={`h-5 w-5 ${c.tone}`} />
                </span>
                <span>
                  <span className="block text-[11px] text-slate-400">{c.title}</span>
                  <span className={`block text-base font-extrabold fa-num ${c.tone}`}>
                    {c.value}
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* stats */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center transition-colors hover:border-flame-500/30"
            >
              <div className="text-3xl font-black text-white lg:text-4xl">
                <CountUp to={s.value} />
                <span className="text-gradient">{faNum(s.suffix)}</span>
              </div>
              <div className="mt-2 text-sm text-slate-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
