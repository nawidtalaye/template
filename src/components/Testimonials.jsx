import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Quote,
  Star,
  ChevronRight,
  ChevronLeft,
  Pause,
  Play,
  CheckCircle2,
  Building2,
  Sparkles,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import { faNum } from "../lib/utils";

const testimonials = [
  {
    id: 1,
    name: "حاجی عبدالرحیم رحیمی",
    role: "مدیرعامل",
    company: "شرکت بازرگانی نفتیار غرب (کابل - هرات)",
    quote:
      "قبلاً بستن حساب یک محموله دو هفته وقت می‌گرفت و بهای تمام‌شده با حدس حساب می‌شد؛ حالا با نفت‌یار سود و زیان هر محموله را همان روز با چند کلیک می‌بینیم. تصمیم‌گیری برای خریدهای بعدی از ترکمنستان و ایران کاملاً عوض شده است.",
    stars: 5,
    tag: "واردات سوخت",
  },
  {
    id: 2,
    name: "انجنیر شفیق احمدی",
    role: "مدیر عملیات ترمینال",
    company: "گروه انرژی آریانا",
    quote:
      "کسری و افت سوخت در مسیر همیشه نقطه اختلاف شدید ما با راننده‌ها و شرکا بود. نفت‌یار مقدار بارگیری مبدا، باسکول مرز و تخلیه مخزن را جداگانه ثبت می‌کند و حالا تمام بحث‌ها با عدد و مدرک قطعی تمام می‌شود، نه با حدس.",
    stars: 5,
    tag: "مدیریت مخازن",
  },
  {
    id: 3,
    name: "محمد یوسف نظری",
    role: "شریک و مدیر مالی",
    company: "شرکت پترو تجارت خراسان",
    quote:
      "حسابداری چند ارزی (دالر، افغانی و تومان) و محاسبه سهم چهار شریک بزرگ‌ترین چالش شرکت بود. سیستم سهم هر شریک را از سود واقعی هر محموله خودش محاسبه می‌کند و گزارشش کاملاً شفاف است؛ اعتماد بین شرکا صددرصد شده است.",
    stars: 5,
    tag: "تسویه چند ارزی",
  },
  {
    id: 4,
    name: "الحاج غلام‌سخی رسولی",
    role: "رئیس هیئت مدیره",
    company: "ترمینال سوخت و مخازن آمو",
    quote:
      "با مانیتورینگ زنده مخازن، دیگر هیچ‌وقت نگران کمبود سوخت یا سرریز شدن مخزن نبوده‌ایم. اتصال باسکول دیجیتال به نفت‌یار خطای اپراتور را به صفر رسانده و آمار موجودی هر لحظه روی تلفن همراه من است.",
    stars: 5,
    tag: "ترمینال و انبار",
  },
  {
    id: 5,
    name: "احمد ضیاء رضایی",
    role: "مدیر ناوگان و حمل‌ونقل",
    company: "لجستیک نفت ابریشم",
    quote:
      "صدور مکانیزه بارنامه و اسناد بین‌المللی CMR و ردیابی هم‌زمان ۵۰ تانکر، عملیات ترخیص ما را در گمرک سه برابر سریع‌تر کرده است. کنترل راننده‌ها و ثبت هزینه‌های راه هیچ‌گاه این‌قدر منظم نبوده است.",
    stars: 5,
    tag: "لجستیک و CMR",
  },
  {
    id: 6,
    name: "میرویس سعادت",
    role: "سرپرست فنی و عملیاتی",
    company: "تأسیسات گاز و انرژی پامیر",
    quote:
      "ثبت تمام مصارف مسیر — از کرایه تانکر تا مصارف گمرک، باسکول و تخلیه — روی همان محموله، بهای تمام‌شده واقعی را به ما نشان داد و فهمیدیم کدام مبادی و مسیرها برای تجارت ما بیشترین سودآوری را دارند.",
    stars: 5,
    tag: "بهای تمام‌شده",
  },
  {
    id: 7,
    name: "فهیم کاکر",
    role: "مدیر شبکه پمپ‌استیشن‌ها",
    company: "شرکت توزیع سوخت اتحاد",
    quote:
      "سیستم فروش اعتباری و نقدی نفت‌یار اجازه نداد حتی یک افغانی از مطالبات ما بسوزد. سیستم سقف اعتبار هر مشتری را خودکار کنترل می‌کند و صدور فاکتور در چند ثانیه انجام می‌شود.",
    stars: 5,
    tag: "فروش و توزیع",
  },
  {
    id: 8,
    name: "انجنیر حمیدالله صدیقی",
    role: "مشاور ارشد مالی و حسابرسی",
    company: "بازرگانی نفت و گاز آسیا",
    quote:
      "سرعت تهیه گزارش‌های تحلیلی و تراز مالی با نفت‌یار قابل مقایسه با سیستم‌های عمومی نیست. نرم‌افزاری کاملاً بومی و دقیق که دقیقاً متناسب با پیچیدگی‌های بازار سوخت افغانستان و منطقه ساخته شده است.",
    stars: 5,
    tag: "حسابرسی رسمی",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = testimonials.length;

  const nextSlide = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const currentCards = [];
  for (let i = 0; i < visibleCount; i++) {
    const idx = (startIndex + i) % total;
    currentCards.push(testimonials[idx]);
  }

  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute bottom-10 right-1/4 h-[350px] w-[350px] rounded-full bg-brand-400/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="نظر مشتریان"
          title="مدیرانی که با نفت‌یار"
          highlight="کسب‌وکارشان متحول شد"
          desc="از واردکنندگان بزرگ مرزی تا شرکت‌های توزیع و پمپ‌استیشن‌ها؛ نظرات واقعی فعالان صنعت سوخت را بخوانید."
        />

        {/* نوار کنترل */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-900/10 bg-brand-50/80 px-3.5 py-1.5 text-xs font-black text-brand-900 fa-num">
              <Sparkles className="h-3.5 w-3.5 text-brand-500" />
              نمایش {faNum(startIndex + 1)} تا {faNum(((startIndex + visibleCount - 1) % total) + 1)} از{" "}
              {faNum(total)} دیدگاه
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-brand-900/10 bg-white px-3 py-2 text-xs font-bold text-brand-900/70 shadow-sm transition hover:bg-brand-50"
              title={isPaused ? "ادامه حرکت خودکار" : "توقف موقت"}
            >
              {isPaused ? <Play className="h-3.5 w-3.5 text-brand-600" /> : <Pause className="h-3.5 w-3.5 text-amber-600" />}
              <span className="hidden sm:inline">{isPaused ? "پخش خودکار" : "توقف موقت"}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="group grid h-11 w-11 place-items-center rounded-2xl border border-brand-900/10 bg-white shadow-md transition-all hover:scale-105 hover:border-brand-400 hover:bg-brand-50 active:scale-95"
                aria-label="کارت قبلی (راست)"
                title="کارت قبلی"
              >
                <ChevronRight className="h-5 w-5 text-brand-900 transition-transform group-hover:scale-110" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="group grid h-11 w-11 place-items-center rounded-2xl border border-brand-900/10 bg-white shadow-md transition-all hover:scale-105 hover:border-brand-400 hover:bg-brand-50 active:scale-95"
                aria-label="کارت بعدی (چپ)"
                title="کارت بعدی"
              >
                <ChevronLeft className="h-5 w-5 text-brand-900 transition-transform group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>

        {/* کانتینر کارت‌ها */}
        <div
          className="relative min-h-[380px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {currentCards.map((t) => (
                <motion.figure
                  key={t.id}
                  layout
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? -60 : 60,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction > 0 ? 60 : -60,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="card-soft group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-brand-900/8 bg-white p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10"
                >
                  {/* خط بالای کارت */}
                  <div className="absolute top-0 right-0 left-0 h-1.5 bg-brand-500 transition-all duration-300 group-hover:h-2" />

                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex gap-1">
                        {Array.from({ length: t.stars }).map((_, s) => (
                          <Star
                            key={s}
                            className="h-4.5 w-4.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-bold text-brand-800/70 ring-1 ring-brand-900/10">
                        {t.tag}
                      </span>
                    </div>

                    <Quote className="mb-3 h-8 w-8 text-brand-500/20" />

                    <blockquote className="text-[14px] leading-7 font-medium text-brand-900/80">
                      «{t.quote}»
                    </blockquote>
                  </div>

                  <figcaption className="mt-6 border-t border-brand-900/8 pt-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-600 text-base font-black text-white shadow-md">
                        {t.name.split(" ").slice(-1)[0][0]}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="truncate font-black text-brand-950">{t.name}</span>
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-500" />
                        </div>
                        <span className="block truncate text-xs font-semibold text-brand-600">
                          {t.role}
                        </span>
                        <div className="mt-0.5 flex items-center gap-1 text-[11px] text-brand-900/50">
                          <Building2 className="h-3 w-3 shrink-0" />
                          <span className="truncate">{t.company}</span>
                        </div>
                      </div>
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* نشانگرهای نقطه‌ای */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setDirection(idx > startIndex ? 1 : -1);
                setStartIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                startIndex === idx
                  ? "w-8 bg-brand-500 shadow-md shadow-brand-500/30"
                  : "w-2.5 bg-brand-900/20 hover:bg-brand-900/40"
              }`}
              aria-label={`اسلاید ${faNum(idx + 1)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
