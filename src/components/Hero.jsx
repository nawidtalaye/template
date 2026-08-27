import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Phone,
  Fuel,
  Truck,
  Wallet,
  Play,
  X,
  Volume2,
  VolumeX,
  Flame,
} from "lucide-react";
import Typewriter from "./Typewriter";
import CountUp from "./CountUp";
import OrbitShowcase from "./OrbitShowcase";
import { faNum } from "../lib/utils";
import dashboard from "../assets/dashboard-light.png";

/* آمار کلیدی — تک‌رنگ و منسجم */
const stats = [
  { value: 40, suffix: "+", label: "شرکت نفتی و بازرگانی فعال" },
  { value: 12, suffix: "", label: "ماژول یکپارچه عملیات" },
  { value: 99, suffix: "٪", label: "دقت محاسبه سود و افت مخازن" },
  { value: 24, suffix: "/۷", label: "پشتیبانی دائمی متخصصان هرات" },
];

export default function Hero() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isModalMuted, setIsModalMuted] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef(null);

  /* اطمینان از پخش خودکار بدون صدا در همه مرورگرها */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, []);

  /* ویدیوی پس‌زمینه — از فایل خود سایت: videos/back-video.mp4 */
  const heroVideoUrl = "/videos/back-video.mp4";

  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 lg:pt-44">
      {/* ویدیو پس‌زمینه: پخش دائمی (حلقه‌ای)، بدون صدا، بدون کنترل */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {videoFailed ? (
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoFailed(true)}
            className="h-full w-full object-cover object-center"
          >
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
        )}

        {/* لایه سفید ملایم برای خوانایی متون بدون محو شدن ویدیو */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/70" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_60%_50%_at_50%_35%,rgba(255,255,255,0.55),transparent_70%)]" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* نشانگر بالای تیتر — ساده و یکپارچه */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-600/15 bg-white/85 px-4 py-1.5 text-xs font-bold text-brand-800 shadow-sm backdrop-blur-md sm:text-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span>سامانه جامع ابری</span>
            <span className="text-brand-900/30">•</span>
            <span>مدیریت و حسابداری نفت و گاز</span>
          </motion.div>

          {/* تیتر اصلی — تک‌رنگ، آرام و حرفه‌ای */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-4xl font-black leading-[1.35] text-brand-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.3]"
          >
            نرم‌افزار اختصاصی برای
            <br />
            <span className="text-gradient">رشد و تسلط بر کسب و کار نفتی شما</span>
          </motion.h1>

          {/* تایپ‌رایتر پویا */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 text-xl font-extrabold text-brand-900/75 sm:text-2xl"
          >
            نفت‌یار{" "}
            <Typewriter
              words={["دستیار هوشمند", "حسابدار دقیق", "مدیر مخازن", "ردیاب محموله‌ها"]}
              className="text-brand-600"
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
              className="flex w-full flex-1 flex-col gap-3 rounded-2xl border border-brand-900/10 bg-white/95 p-2 shadow-xl shadow-brand-950/8 backdrop-blur-md sm:flex-row"
            >
              <div className="relative flex-1">
                <Phone className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-500/60" />
                <input
                  type="tel"
                  required
                  placeholder="شماره تماس شما…"
                  className="w-full rounded-xl bg-brand-50/60 py-3.5 pr-12 pl-4 text-brand-900 placeholder:text-brand-900/40 outline-none ring-brand-500/25 transition focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 active:scale-95"
              >
                ثبت سفارش
                <ArrowLeft className="h-4.5 w-4.5 transition-transform group-hover:-translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </form>

            {/* دکمه پلی ویدیو — ساده و منسجم */}
            <button
              type="button"
              onClick={() => setShowVideoModal(true)}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-brand-900/10 bg-white/95 px-5 py-3 shadow-xl shadow-brand-950/8 backdrop-blur-md transition-all hover:scale-[1.02] hover:border-brand-500/40 sm:w-auto"
              title="مشاهده ویدیوی معرفی"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-600/25 transition-transform group-hover:scale-105">
                <Play className="h-5 w-5 fill-white pr-0.5" />
              </span>
              <div className="text-right">
                <span className="block text-sm font-black text-brand-900">مشاهده ویدیو</span>
                <span className="block text-[11px] font-semibold text-brand-500">پیش‌نمایش سامانه</span>
              </div>
            </button>
          </motion.div>

          <p className="mt-3 text-xs text-brand-900/50 sm:text-sm">
            شماره خود را ثبت کنید تا کارشناسان ما با شما تماس بگیرند یا ویدیو را مشاهده کنید.
          </p>
        </div>

        {/* بخش مدار و ۵ آیکون چرخان */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-12"
        >
          <OrbitShowcase />
        </motion.div>

        {/* پیش‌نمایش داشبورد با فریم تمیز */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          {/* هاله نرم تک‌رنگ پشت پیش‌نمایش */}
          <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-400/15 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-2xl shadow-brand-950/15 lg:rounded-[1.5rem]">
            <div className="flex items-center justify-between border-b border-brand-900/8 bg-brand-50/80 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400/80" />
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

          {/* کارت‌های آماری شناور گوشه‌ها — سه آکنت محدود و منسجم */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute right-[-1rem] top-[14%] hidden sm:block lg:right-[-2.5rem]"
          >
            <div className="animate-float card-soft flex items-center gap-3 rounded-2xl px-4 py-3 backdrop-blur-md">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500/10 text-amber-600">
                <Fuel className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] text-brand-900/60">موجودی مخازن</span>
                <span className="block text-base font-extrabold text-brand-950 fa-num">۸۶٪ فعال</span>
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
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/10 text-brand-600">
                <Truck className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] text-brand-900/60">محموله در مسیر</span>
                <span className="block text-base font-extrabold text-brand-950 fa-num">۱۲ تانکر</span>
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
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600">
                <Wallet className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] text-brand-900/60">سود خالص این ماه</span>
                <span className="block text-base font-extrabold text-emerald-600 fa-num">+۲۴٫۵٪ رشد</span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ۴ آمار کلیدی — منسجم و تک‌رنگ */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="card-soft group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10"
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-brand-500 transition-all duration-500 group-hover:h-1.5" />
              <div className="text-3xl font-black text-brand-950 lg:text-4xl">
                <CountUp to={s.value} />
                <span className="text-brand-600">{faNum(s.suffix)}</span>
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
                <span>ویدیو از مسیر videos/back-video.mp4 سایت بارگذاری می‌شود.</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
