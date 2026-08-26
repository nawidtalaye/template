import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Phone,
  Fuel,
  Truck,
  Wallet,
  BarChart3,
  Play,
  X,
  Volume2,
  VolumeX,
  Sparkles,
  Flame,
} from "lucide-react";
import Typewriter from "./Typewriter";
import CountUp from "./CountUp";
import OrbitShowcase from "./OrbitShowcase";
import { faNum } from "../lib/utils";
import dashboard from "../assets/dashboard-light.png";

const stats = [
  { value: 40, suffix: "+", label: "شرکت نفتی و بازرگانی فعال", color: "from-amber-500 to-orange-500" },
  { value: 12, suffix: "", label: "ماژول یکپارچه عملیات", color: "from-brand-500 to-teal-600" },
  { value: 99, suffix: "٪", label: "دقت محاسبه سود و افت مخازن", color: "from-emerald-500 to-green-600" },
  { value: 24, suffix: "/۷", label: "پشتیبانی دائمی متخصصان هرات", color: "from-sky-500 to-blue-600" },
];

export default function Hero() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isModalMuted, setIsModalMuted] = useState(false);

  // لینک ویدیوی پس‌زمینه با کیفیت بالا (صنعت پالایشگاه و انرژی نفت و گاز)
  const heroVideoUrl =
    "https://assets.mixkit.co/videos/preview/mixkit-refinery-and-petroleum-industry-at-night-42407-large.mp4";

  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 lg:pt-44">
      {/* ویدیو پس‌زمینه به‌صورت اتومات پلی، بدون صدا و در حلقه تکرار */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-center opacity-35"
        >
          <source src={heroVideoUrl} type="video/mp4" />
          <source
            src="https://cdn.coverr.co/videos/coverr-oil-refinery-at-night-5431/1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* لایه‌های گرادیان و بلور برای خوانایی کامل متون و دکمه‌ها */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/85 to-white" />
        <div className="grid-dots absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />

        {/* هاله‌های نوری چند رنگ گرم و خنک — رفع رنگ‌آمیزی تلخ و خسته‌کننده */}
        <div className="absolute -top-32 left-1/2 h-[540px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-500/15 via-amber-400/20 to-sky-400/15 blur-[140px]" />
        <div className="absolute top-44 -right-24 h-80 w-80 rounded-full bg-amber-400/20 blur-[110px]" />
        <div className="absolute top-72 -left-24 h-80 w-80 rounded-full bg-brand-400/20 blur-[110px]" />
      </div>

      {/* اشکال شناور گوشه‌ها با حاشیه‌های گرادیانی و رنگ‌های گرم */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute right-[6%] top-36 hidden lg:block"
      >
        <div className="animate-float rounded-2xl border border-amber-500/25 bg-white/90 p-3.5 shadow-xl shadow-amber-500/15 backdrop-blur-md">
          <Flame className="h-7 w-7 text-amber-500" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute left-[7%] top-44 hidden lg:block"
      >
        <div className="animate-float-slow rounded-2xl border border-sky-500/25 bg-white/90 p-3.5 shadow-xl shadow-sky-500/15 backdrop-blur-md">
          <Truck className="h-7 w-7 text-sky-500" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute right-[12%] top-[430px] hidden xl:block"
      >
        <div className="animate-float-slow rounded-2xl border border-emerald-500/25 bg-white/90 p-3.5 shadow-xl shadow-emerald-500/15 backdrop-blur-md">
          <Wallet className="h-7 w-7 text-emerald-500" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute left-[11%] top-[460px] hidden xl:block"
      >
        <div className="animate-float rounded-2xl border border-brand-500/25 bg-white/90 p-3.5 shadow-xl shadow-brand-500/15 backdrop-blur-md">
          <BarChart3 className="h-7 w-7 text-brand-500" />
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* نشانگر بالای تیتر */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-brand-500/10 to-amber-500/10 px-4 py-1.5 text-xs font-black text-brand-900 shadow-sm backdrop-blur-md sm:text-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-amber-700">سامانه جامع ابری</span>
            <span className="text-brand-900/40">•</span>
            <span className="text-brand-800">مدیریت و حسابداری نفت و گاز</span>
          </motion.div>

          {/* تیتر اصلی با رنگ‌آمیزی چشم‌نواز و گرم */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-4xl font-black leading-[1.35] text-brand-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.3]"
          >
            نرم‌افزار اختصاصی برای
            <br />
            <span className="bg-gradient-to-l from-amber-500 via-brand-500 to-brand-700 bg-clip-text text-transparent">
              رشد و تسلط بر کسب و کار نفتی شما
            </span>
          </motion.h1>

          {/* تایپ‌رایتر پویا با متن رنگی */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 text-xl font-extrabold text-brand-900/80 sm:text-2xl"
          >
            نفت‌یار{" "}
            <Typewriter
              words={["دستیار هوشمند", "حسابدار دقیق", "مدیر مخازن", "ردیاب محموله‌ها"]}
              className="bg-gradient-to-l from-amber-500 to-orange-500 bg-clip-text text-transparent"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-brand-900/70"
          >
            از قرارداد و بارگیری تا مخزن، فروش، مصارف و گزارش سود و زیان هر محموله؛
            تمام کار شما در یک سیستم، تصمیم شما بر پایه داده درست.
          </motion.p>

          {/* فرم ثبت شماره تماس + دکمه پلی ویدیو */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mx-auto mt-9 flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row sm:items-stretch"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex w-full flex-1 flex-col gap-3 rounded-2xl border border-brand-900/10 bg-white/95 p-2 shadow-xl shadow-brand-900/8 backdrop-blur-md sm:flex-row"
            >
              <div className="relative flex-1">
                <Phone className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-500/60" />
                <input
                  type="tel"
                  required
                  placeholder="شماره تماس شما…"
                  className="w-full rounded-xl bg-brand-50/60 py-3.5 pr-12 pl-4 text-brand-900 placeholder:text-brand-900/40 outline-none ring-amber-500/30 transition focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-l from-brand-500 via-brand-600 to-amber-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                ثبت سفارش
                <ArrowLeft className="h-4.5 w-4.5 transition-transform group-hover:-translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </form>

            {/* دکمه اختصاصی پلی ویدیو با انیمیشن پالس */}
            <button
              type="button"
              onClick={() => setShowVideoModal(true)}
              className="group relative inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-amber-500/35 bg-white/95 px-5 py-3 shadow-xl shadow-amber-500/10 backdrop-blur-md transition-all hover:scale-[1.03] hover:border-amber-500 hover:bg-amber-50/50 sm:w-auto"
              title="مشاهده ویدیوی معرفی"
            >
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/30 transition-transform group-hover:scale-110">
                <Play className="h-5 w-5 fill-white pr-0.5" />
                <span className="absolute inset-0 rounded-xl bg-amber-400/40 animate-ping opacity-70" />
              </span>
              <div className="text-right">
                <span className="block text-sm font-black text-brand-900">مشاهده ویدیو</span>
                <span className="block text-[11px] font-semibold text-amber-600">پیش‌نمایش سامانه</span>
              </div>
            </button>
          </motion.div>

          <p className="mt-3 text-xs text-brand-900/50 sm:text-sm">
            شماره خود را ثبت کنید تا کارشناسان ما با شما تماس بگیرند یا ویدیو را مشاهده کنید.
          </p>
        </div>

        {/* بخش مدار و ۵ آیکون چرخان — مرتب‌شده، فراگیر، بدون هیچ‌گونه تداخل با بخش دیگر */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-12"
        >
          <OrbitShowcase />
        </motion.div>

        {/* پیش‌نمایش داشبورد با فریم تمیز، نورپردازی مدرن و بدون تداخل */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          {/* هاله پشت پیش‌نمایش */}
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-l from-amber-400/15 via-brand-400/20 to-sky-400/15 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-2xl shadow-brand-900/15 lg:rounded-[1.5rem]">
            <div className="flex items-center justify-between border-b border-brand-900/8 bg-brand-50/80 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="mr-3 hidden rounded-md bg-white px-3 py-1 text-xs font-medium text-brand-900/60 sm:block fa-num">
                  https://app.naftyar.com/dashboard
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                سرور متصل
              </span>
            </div>

            <img
              src={dashboard}
              alt="داشبورد مدیریتی نفت‌یار"
              className="w-full"
              loading="eager"
            />
          </div>

          {/* کارت‌های آماری شناور گوشه‌ها با استایل زنده */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute right-[-1rem] top-[14%] hidden sm:block lg:right-[-2.5rem]"
          >
            <div className="animate-float card-warm flex items-center gap-3 rounded-2xl px-4 py-3 backdrop-blur-md">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md shadow-amber-500/30">
                <Fuel className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] text-brand-900/60">موجودی مخازن</span>
                <span className="block text-base font-extrabold text-amber-600 fa-num">۸۶٪ فعال</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute left-[-1rem] top-[40%] hidden sm:block lg:left-[-3rem]"
          >
            <div className="animate-float-slow card-soft flex items-center gap-3 rounded-2xl px-4 py-3 backdrop-blur-md">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-md shadow-sky-500/30">
                <Truck className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] text-brand-900/60">محموله در مسیر</span>
                <span className="block text-base font-extrabold text-sky-600 fa-num">۱۲ تانکر</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute bottom-[-1.5rem] right-[8%] hidden sm:block"
          >
            <div className="animate-float card-soft flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl shadow-emerald-500/10 backdrop-blur-md">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-md shadow-emerald-500/30">
                <Wallet className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] text-brand-900/60">سود خالص این ماه</span>
                <span className="block text-base font-extrabold text-emerald-600 fa-num">+۲۴٫۵٪ رشد</span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ۴ آمار کلیدی با اعداد و رنگ‌های انرژی‌بخش */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="card-soft group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div
                className={`absolute top-0 right-0 left-0 h-1 bg-gradient-to-l ${s.color} transition-all duration-500 group-hover:h-1.5`}
              />
              <div className="text-3xl font-black text-brand-900 lg:text-4xl">
                <CountUp to={s.value} />
                <span className={`bg-gradient-to-l ${s.color} bg-clip-text text-transparent`}>
                  {faNum(s.suffix)}
                </span>
              </div>
              <div className="mt-2 text-sm font-semibold text-brand-900/65">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* مدال پخش ویدیوی معرفی */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-brand-950 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-amber-400" />
                  <span className="font-black text-white">ویدیوی معرفی و کارکرد سامانه نفت‌یار</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalMuted(!isModalMuted)}
                    className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                    title={isModalMuted ? "وصل صدا" : "قطع صدا"}
                  >
                    {isModalMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowVideoModal(false)}
                    className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="relative aspect-video w-full bg-black">
                <video
                  autoPlay
                  controls
                  muted={isModalMuted}
                  playsInline
                  className="h-full w-full object-cover"
                >
                  <source src={heroVideoUrl} type="video/mp4" />
                </video>
              </div>

              <div className="border-t border-white/10 bg-brand-900/90 p-4 text-center text-xs text-brand-200">
                <span>💡 بعداً می‌توانید آدرس ویدیوی دلخواه خود را در این پلیر یا مودال قرار دهید.</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
