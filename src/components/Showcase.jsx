import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard,
  Container,
  FileBarChart2,
  CheckCircle2,
  Maximize2,
  X,
  ChevronLeft,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import dashboard from "../assets/dashboard-light.png";
import report from "../assets/report-view.png";
import tanks from "../assets/tanks-view.png";

/* سه آکنت خنک و هماهنگ: آبی برند، آسمانی، دریاچه‌ای */
const showcaseItems = [
  {
    id: "dashboard",
    index: "۰۱ / ۰۳",
    icon: LayoutDashboard,
    title: "داشبورد هوشمند مدیریتی",
    category: "هوش تجاری و عملیات",
    image: dashboard,
    accentColor: "from-brand-500 to-brand-600",
    badgeColor: "bg-brand-500/10 text-brand-700 border-brand-500/20",
    glowColor: "shadow-brand-500/15",
    tagline: "تمام شاخص‌های حیاتی شرکت در یک صفحه، بدون نیاز به پیگیری دستی",
    points: [
      "نمای لحظه‌ای موجودی هر مخزن به تفکیک محصول (دیزل، پترول، گاز)",
      "پیگیری وضعیت تانکرها و محموله‌های در مسیر با شماره بارنامه و CMR",
      "نمودار روند سود و زیان ماهانه و روزانه با یک نگاه",
      "هشدارهای هوشمند برای افت‌های غیرعادی و سررسید پرداخت‌ها",
    ],
    metrics: [
      { label: "دقت ثبت", val: "۹۹.۹٪" },
      { label: "سرعت گزارش", val: "لحظه‌ای" },
    ],
  },
  {
    id: "tanks",
    index: "۰۲ / ۰۳",
    icon: Container,
    title: "پایش زنده مخازن و افت سوخت",
    category: "مدیریت تأسیسات و ذخیره‌سازی",
    image: tanks,
    accentColor: "from-sky-500 to-sky-600",
    badgeColor: "bg-sky-500/10 text-sky-700 border-sky-500/20",
    glowColor: "shadow-sky-500/15",
    tagline: "کنترل میلی‌متری موجودی مخازن و بستن راه‌های هدررفت و اختلاف",
    points: [
      "نشانگر گرافیکی و درصد پر بودن هر مخزن با رنگ‌های هشدار",
      "ثبت تخلیه و ورود تانکر با اتصال به باسکول و اسناد ورودی",
      "تفکیک افت مجاز طبیعی از کسری بار در طول مسیر",
      "محاسبه میانگین بهای تمام‌شده موجودی بر اساس روش‌های استاندارد",
    ],
    metrics: [
      { label: "کاهش افت", val: "۴۰٪" },
      { label: "پایش ۲۴ ساعته", val: "فعال" },
    ],
  },
  {
    id: "report",
    index: "۰۳ / ۰۳",
    icon: FileBarChart2,
    title: "گزارش سود و زیان و حسابداری",
    category: "مدیریت مالی و تسویه شرکا",
    image: report,
    accentColor: "from-teal-500 to-teal-600",
    badgeColor: "bg-teal-500/10 text-teal-700 border-teal-500/20",
    glowColor: "shadow-teal-500/15",
    tagline: "سود واقعی هر قطره سوخت را بدانید، پیش از آنکه پایان ماه برسد",
    points: [
      "محاسبه خودکار سود و زیان هر محموله با کسر تمام کرایه‌ها و عوارض",
      "کار همزمان با ارزهای دالر، افغانی و تومان با نرخ تبدیل روز",
      "محاسبه شفاف و مکانیزه سهم سود شرکا بدون ایجاد کوچک‌ترین اختلاف",
      "خروجی رسمی در قالب اکسل و PDF آماده برای جلسات هیئت مدیره",
    ],
    metrics: [
      { label: "ارزهای فعال", val: "۳ ارز" },
      { label: "تراز مالی", val: "۱۰۰٪ متصل" },
    ],
  },
];

export default function Showcase() {
  const [activeItem, setActiveItem] = useState(showcaseItems[0]);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <section id="showcase" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute top-10 right-1/4 h-[420px] w-[420px] rounded-full bg-brand-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="نمای سیستم"
          title="سیستم را از"
          highlight="نزدیک ببینید"
          desc="رابط کاربری مدرن، فارسی و استاندارد؛ طراحی‌شده بر اساس ساختار عملیات واقعی شرکت‌های نفت و گاز نواتیک."
        />

        {/* کارت‌های سه‌گانه با شماره‌گذاری (مثل نواتیک) */}
        <div className="mb-14 grid gap-6 md:grid-cols-3">
          {showcaseItems.map((item) => {
            const isSelected = activeItem.id === item.id;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => setActiveItem(item)}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl border p-6 transition-all duration-300 ${
                  isSelected
                    ? "border-brand-500/40 bg-gradient-to-b from-white to-brand-50/50 shadow-2xl " +
                      item.glowColor
                    : "border-brand-900/10 bg-white hover:border-brand-300 hover:shadow-xl"
                }`}
              >
                {/* خط نشانگر فعال بودن در بالا */}
                <div
                  className={`absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-l ${
                    item.accentColor
                  } transition-opacity duration-300 ${
                    isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`}
                />

                {/* ردیف بالا: شماره کارت و دسته‌بندی */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-black fa-num ${item.badgeColor}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {item.index}
                  </span>

                  <span className="text-xs font-bold text-brand-900/50">{item.category}</span>
                </div>

                {/* پیش‌نمایش تصویر */}
                <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-2xl border border-brand-900/8 bg-brand-50 shadow-inner">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="text-xs font-bold">برای بررسی کلیک کنید</span>
                    <ChevronLeft className="h-4 w-4" />
                  </div>
                </div>

                {/* تیتر و عنوان زیر تصویر */}
                <div className="mt-5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${item.accentColor} text-white shadow-md`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="text-lg font-black text-brand-950">{item.title}</h3>
                  </div>
                  <p className="mt-2.5 text-xs leading-6 text-brand-900/65 line-clamp-2">
                    {item.tagline}
                  </p>
                </div>

                {/* دکمه وضعیت انتخاب */}
                <div className="mt-4 flex items-center justify-between border-t border-brand-900/8 pt-3 text-xs font-bold">
                  <span className={isSelected ? "text-brand-600" : "text-brand-900/40"}>
                    {isSelected ? "در حال نمایش جزئیات" : "انتخاب برای مشاهده"}
                  </span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      isSelected ? "bg-brand-500 animate-pulse" : "bg-brand-900/20"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* نمای باز و تعاملی سیستم */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="card-soft relative overflow-hidden rounded-3xl border border-brand-900/10 p-6 shadow-2xl lg:p-10"
          >
            <div
              className={`absolute top-0 right-0 h-64 w-64 rounded-full bg-gradient-to-br ${activeItem.accentColor} opacity-10 blur-3xl`}
            />

            {/* نوار سربرگ نمای باز */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-brand-900/8 pb-6">
              <div className="flex items-center gap-3">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${activeItem.accentColor} text-white shadow-lg`}
                >
                  <activeItem.icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-brand-600 fa-num">
                      نمای {activeItem.index}
                    </span>
                    <span className="text-xs text-brand-900/40">•</span>
                    <span className="text-xs font-semibold text-brand-900/60">
                      {activeItem.category}
                    </span>
                  </div>
                  <h3 className="mt-0.5 text-2xl font-black text-brand-950">
                    {activeItem.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFullscreenImage(activeItem.image)}
                  className="inline-flex items-center gap-2 rounded-xl border border-brand-900/10 bg-white px-4 py-2.5 text-xs font-bold text-brand-900 shadow-sm transition hover:bg-brand-50 hover:text-brand-600"
                >
                  <Maximize2 className="h-4 w-4" />
                  مشاهده تمام صفحه
                </button>
              </div>
            </div>

            {/* محتوای گرید: تصویر + نکات کلیدی */}
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_380px]">
              <div className="group relative overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-xl shadow-brand-950/10">
                <div className="flex items-center justify-between border-b border-brand-900/8 bg-brand-50/90 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="mr-2 text-[11px] text-brand-900/50 fa-num">
                      app.naftyar.com/{activeItem.id}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-brand-600">نسخه ابری نفت‌وگاز</span>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden bg-slate-50">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="h-full w-full object-cover object-top"
                  />
                  <button
                    type="button"
                    onClick={() => setFullscreenImage(activeItem.image)}
                    className="absolute inset-0 flex items-center justify-center bg-brand-950/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <span className="inline-flex items-center gap-2 rounded-2xl bg-white/95 px-5 py-2.5 text-xs font-black text-brand-900 shadow-2xl">
                      <Maximize2 className="h-4 w-4 text-brand-500" />
                      بزرگ‌نمایی صفحه و جدول‌ها
                    </span>
                  </button>
                </div>
              </div>

              {/* پنل نکات و ویژگی‌ها */}
              <div className="space-y-4">
                <div className="rounded-2xl bg-brand-50/70 p-4">
                  <span className="text-xs font-bold text-brand-900/50">خلاصه کارکرد:</span>
                  <p className="mt-1 text-sm leading-7 font-medium text-brand-900/80">
                    {activeItem.tagline}
                  </p>
                </div>

                <div className="space-y-3">
                  {activeItem.points.map((point, idx) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.08 }}
                      className="card-soft flex items-start gap-3 rounded-2xl p-3.5"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                      <span className="text-sm font-semibold leading-6 text-brand-900/80">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* شاخص‌های آماری این نما */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {activeItem.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-brand-900/8 bg-white p-3 text-center"
                    >
                      <div className="text-xs font-medium text-brand-900/50">{m.label}</div>
                      <div className="mt-1 text-lg font-black text-brand-950 fa-num">{m.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* مدال فول‌اسکرین تصویر */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setFullscreenImage(null)}
          >
            <div className="relative max-h-[92vh] max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-brand-950 p-2 shadow-2xl">
              <button
                type="button"
                onClick={() => setFullscreenImage(null)}
                className="absolute top-4 left-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={fullscreenImage}
                alt="پیش‌نمایش تصویر سیستم"
                className="max-h-[85vh] w-auto rounded-2xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
