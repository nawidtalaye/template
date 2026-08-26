import { motion } from "motion/react";
import {
  ArrowLeft,
  Phone,
  Fuel,
  Truck,
  Container,
  BarChart3,
  Wallet,
  FileSignature,
} from "lucide-react";
import Typewriter from "./Typewriter";
import CountUp from "./CountUp";
import { faNum } from "../lib/utils";
import dashboard from "../assets/dashboard-light.png";

const orbitIcons = [
  { icon: Fuel, angle: 0 },
  { icon: Truck, angle: 72 },
  { icon: Container, angle: 144 },
  { icon: BarChart3, angle: 216 },
  { icon: FileSignature, angle: 288 },
];

const stats = [
  { value: 40, suffix: "+", label: "شرکت نفتی فعال" },
  { value: 12, suffix: "", label: "ماژول یکپارچه" },
  { value: 99, suffix: "٪", label: "دقت گزارش‌ها" },
  { value: 24, suffix: "/۷", label: "پشتیبانی دائمی" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-40 pb-20 lg:pt-48">
      {/* پس‌زمینه — نقاط و هاله سبز مثل نواتیک */}
      <div className="grid-dots absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[130px]" />
      <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-brand-400/15 blur-[100px]" />
      <div className="absolute top-64 -left-24 h-72 w-72 rounded-full bg-brand-200/40 blur-[100px]" />

      {/* اشکال شناور گوشه‌ها — مثل چهار تصویر گوشه هیروی نواتیک */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute right-[6%] top-36 hidden lg:block"
      >
        <div className="animate-float rounded-2xl border border-brand-500/20 bg-white p-3.5 shadow-xl shadow-brand-500/10">
          <Fuel className="h-7 w-7 text-brand-500" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute left-[7%] top-44 hidden lg:block"
      >
        <div className="animate-float-slow rounded-2xl border border-brand-500/20 bg-white p-3.5 shadow-xl shadow-brand-500/10">
          <Truck className="h-7 w-7 text-brand-600" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute right-[14%] top-[430px] hidden xl:block"
      >
        <div className="animate-float-slow rounded-2xl border border-brand-500/20 bg-white p-3.5 shadow-xl shadow-brand-500/10">
          <Wallet className="h-7 w-7 text-brand-400" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute left-[13%] top-[460px] hidden xl:block"
      >
        <div className="animate-float rounded-2xl border border-brand-500/20 bg-white p-3.5 shadow-xl shadow-brand-500/10">
          <BarChart3 className="h-7 w-7 text-brand-500" />
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base font-bold text-brand-500 sm:text-lg"
          >
            سامانه مدیریت و حسابداری شرکت‌های نفت و گاز
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-4xl font-black leading-[1.4] text-brand-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.35]"
          >
            نرم‌افزار اختصاصی برای
            <br />
            <span className="text-gradient">رشد کسب و کار نفتی شما</span>
          </motion.h1>

          {/* تایپ‌رایتر — مثل «نواتیک دستیار هوشمند» */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-5 text-xl font-extrabold text-brand-900/80 sm:text-2xl"
          >
            نفت‌یار{" "}
            <Typewriter
              words={["دستیار هوشمند", "حسابدار دقیق", "مدیر مخازن", "ردیاب محموله‌ها"]}
              className="text-brand-500"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-brand-900/60"
          >
            از قرارداد و بارگیری تا مخزن، فروش، مصارف و گزارش سود و زیان هر محموله؛
            تمام کار شما در یک سیستم، تصمیم شما بر پایه داده درست.
          </motion.p>

          {/* فرم ثبت شماره — مثل CTA نواتیک */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mx-auto mt-9 max-w-xl"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex flex-col gap-3 rounded-2xl border border-brand-900/8 bg-white p-2.5 shadow-xl shadow-brand-900/8 sm:flex-row"
            >
              <div className="relative flex-1">
                <Phone className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-500/60" />
                <input
                  type="tel"
                  required
                  placeholder="شماره تماس شما…"
                  className="w-full rounded-xl bg-brand-50 py-3.5 pr-12 pl-4 text-brand-900 placeholder:text-brand-900/40 outline-none ring-brand-500/30 transition focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-500/25 transition-transform hover:scale-[1.02] active:scale-95"
              >
                ثبت سفارش
                <ArrowLeft className="h-4.5 w-4.5 transition-transform group-hover:-translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </form>
            <p className="mt-3 text-sm text-brand-900/50">
              شماره خود را ثبت کنید تا کارشناسان ما با شما تماس بگیرند.
            </p>
          </motion.div>
        </div>

        {/* پیش‌نمایش داشبورد + حلقه ماژول‌های چرخان (مثل spiner-logo های نواتیک) */}
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-24 max-w-5xl"
        >
          {/* حلقه چرخان */}
          <div className="pointer-events-none absolute -top-16 left-1/2 z-10 hidden h-36 w-36 -translate-x-1/2 lg:block">
            <div className="absolute inset-0 animate-orbit">
              {orbitIcons.map(({ icon: Icon, angle }) => (
                <div
                  key={angle}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `rotate(${angle}deg) translateY(-64px)` }}
                >
                  <div className="animate-orbit-rev -translate-x-1/2">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-brand-500/25 bg-white shadow-lg shadow-brand-500/15">
                      <Icon className="h-5 w-5 text-brand-500" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 shadow-xl shadow-brand-500/30">
                <span className="absolute inset-0 rounded-full bg-brand-500/40 animate-pulse-ring" />
                <Fuel className="h-6 w-6 text-white" />
              </span>
            </div>
          </div>

          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-l from-brand-400/20 via-brand-100/40 to-brand-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-2xl shadow-brand-900/15 lg:rounded-[1.5rem]">
            <div className="flex items-center gap-2 border-b border-brand-900/8 bg-brand-50 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-brand-400" />
              <span className="mr-3 hidden rounded-md bg-white px-3 py-1 text-xs text-brand-900/50 sm:block fa-num">
                app.naftyar.com/dashboard
              </span>
            </div>
            <img src={dashboard} alt="داشبورد مدیریتی نفت‌یار" className="w-full" loading="eager" />
          </div>

          {/* کارت‌های شناور */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute right-[-1rem] top-[16%] hidden sm:block lg:right-[-3rem]"
          >
            <div className="animate-float card-soft flex items-center gap-3 rounded-2xl px-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/10">
                <Fuel className="h-5 w-5 text-brand-500" />
              </span>
              <span>
                <span className="block text-[11px] text-brand-900/50">موجودی مخزن</span>
                <span className="block text-base font-extrabold text-brand-600 fa-num">۸۶٪</span>
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute left-[-1rem] top-[42%] hidden sm:block lg:left-[-3.5rem]"
          >
            <div className="animate-float-slow card-soft flex items-center gap-3 rounded-2xl px-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/10">
                <Truck className="h-5 w-5 text-brand-600" />
              </span>
              <span>
                <span className="block text-[11px] text-brand-900/50">محموله در مسیر</span>
                <span className="block text-base font-extrabold text-brand-600 fa-num">۱۲ تانکر</span>
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute bottom-[-1.5rem] right-[8%] hidden sm:block"
          >
            <div className="animate-float card-soft flex items-center gap-3 rounded-2xl px-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10">
                <Wallet className="h-5 w-5 text-emerald-600" />
              </span>
              <span>
                <span className="block text-[11px] text-brand-900/50">سود این ماه</span>
                <span className="block text-base font-extrabold text-emerald-600 fa-num">+۲۴٫۵٪</span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* آمار */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-soft rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10"
            >
              <div className="text-3xl font-black text-brand-900 lg:text-4xl">
                <CountUp to={s.value} />
                <span className="text-gradient">{faNum(s.suffix)}</span>
              </div>
              <div className="mt-2 text-sm text-brand-900/55">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}