import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileSpreadsheet,
  Truck,
  Container,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  ArrowDown,
  Sparkles,
  Quote,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { faNum } from "../lib/utils";

// ۴ گام داستانی تحول نفت‌یار مشابه ساختار «داستان نواتیک» در novatechsoft.com/about
const storySteps = [
  {
    step: "۰۱",
    year: "سال ۱۳۹۹",
    title: "بحران دفاتر کاغذی و خطاهای اکسل",
    subtitle: "شروع نیاز به تحول و ثبت داده‌های مطمئن",
    icon: FileSpreadsheet,
    accent: "from-amber-400 to-orange-500",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    glowColor: "shadow-amber-500/20",
    problem:
      "بارنامه‌ها به صورت دستی و پراکنده ثبت می‌شد؛ محاسبه نرخ تبدیل ارزها با خطای انسانی همراه بود و بستن حساب یک محموله هفته‌ها طول می‌کشید.",
    solution:
      "ایجاد ساختار داده دیجیتال و یکپارچه، ثبت بارنامه و قرارداد در بستر ابری و حذف کامل کاغذبازی و خطاهای دفتری.",
    metric: "کاهش ۹۵٪ اسناد مفقودی",
  },
  {
    step: "۰۲",
    year: "سال ۱۴۰۱",
    title: "تولد هسته یکپارچه ردیابی محموله",
    subtitle: "شناسه یکتا برای هر قطره سوخت از مبدا تا مقصد",
    icon: Truck,
    accent: "from-sky-400 to-blue-600",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/30",
    glowColor: "shadow-sky-500/20",
    problem:
      "افت و کسری بار در طول مسیر از مرزهای ترکمنستان و ایران مشخص نبود و همیشه بین راننده‌ها، گمرک و صاحبان بار تنش و اختلاف ایجاد می‌شد.",
    solution:
      "تعریف هر محموله به عنوان یک رکورد واحد؛ پیوند باسکول مبدا، مرز، بارنامه CMR و تخلیه به یک شناسه برای محاسبه شفاف افت مجاز.",
    metric: "صفر شدن اختلافات مسیر",
  },
  {
    step: "۰۳",
    year: "سال ۱۴۰۲",
    title: "مانیتورینگ زنده مخازن و تسویه چند ارزی",
    subtitle: "کنترل مخازن و محاسبه سهم شرکا در لحظه",
    icon: Container,
    accent: "from-violet-400 to-indigo-600",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    glowColor: "shadow-violet-500/20",
    problem:
      "نوسان شدید نرخ دالر، تومان و افغانی باعث ضرر در قیمت‌گذاری می‌شد و محاسبه سهم شرکا به دلیل تعدد هزینه‌های مسیر پر از ابهام بود.",
    solution:
      "طراحی نشانگر دیجیتال سطح مخازن و سیستم چند ارزی خودکار؛ تسویه حساب مکانیزه هر شریک دقیقاً بر مبنای سود خالص محموله.",
    metric: "تسویه ۳ ارز همزمان بدون خطا",
  },
  {
    step: "۰۴",
    year: "سال ۱۴۰۴",
    title: "اکوسیستم جامع هوش تجاری و سود قطعی",
    subtitle: "سامانه پیشرفته تصمیم‌گیری مدیران نفت و گاز",
    icon: BarChart3,
    accent: "from-emerald-400 to-teal-600",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-emerald-500/20",
    problem:
      "مدیران برای دانستن سود و زیان واقعی باید تا پایان سال مالی منتظر می‌ماندند و نمی‌توانستند برای خریدهای بعدی سریع تصمیم بگیرند.",
    solution:
      "داشبورد تحلیلی با گزارش سود و زیان لحظه‌ای هر تانکر بلافاصله پس از تخلیه، به همراه پیش‌بینی هوشمند هزینه‌ها و مارجین سود.",
    metric: "محاسبه سود قطعی در همان روز",
  },
];

export default function Features() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section id="features" className="tint relative overflow-hidden py-24 lg:py-32">
      <div className="grid-dots absolute inset-0 opacity-40" />

      {/* هاله‌های نوری پس‌زمینه با ترکیب رنگ‌های گرم و انرژی‌بخش */}
      <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-amber-400/15 blur-[140px]" />
      <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-brand-400/20 blur-[140px]" />
      <div className="absolute top-1/2 left-1/3 h-80 w-80 rounded-full bg-indigo-400/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* تیتر بخش با امضای معروف نواتیک */}
        <SectionTitle
          eyebrow="داستان نفت‌یار • چرا به این سامانه نیاز دارید؟"
          title="مسیر تحول شرکت‌های نفت و گاز،"
          highlight="از دفاتر سنتی تا هوشمندی کامل"
          desc="دقیقاً مانند مسیر توسعه نواتیک، نفت‌یار مرحله به مرحله از دل چالش‌های واقعی صنعت سوخت متولد شد تا هر قطره سرمایه شما را شفاف کند."
        />

        {/* خط سیر داستانی با انیمیشن خفن ذرات نوری و فلش‌های متصل‌کننده (مشابه arrow-dotted نواتیک) */}
        <div className="relative mt-16">
          {/* مسیر اتصال دسکتاپ: فلش‌های خط‌چینی متحرک با جریان پالس */}
          <div className="pointer-events-none absolute top-28 right-[12%] left-[12%] z-0 hidden lg:block">
            <svg className="h-10 w-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flow-line" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="33%" stopColor="#0ea5e9" />
                  <stop offset="66%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              {/* خط‌چین اصلی */}
              <line
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="url(#flow-line)"
                strokeWidth="3"
                strokeDasharray="8 8"
                className="opacity-45"
              />
            </svg>
          </div>

          {/* کارت‌های ۴ گانه داستان نواتیک */}
          <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {storySteps.map((s, i) => {
              const Icon = s.icon;
              const isSelected = selectedStep === i;

              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedStep(i)}
                  className={`group card-soft relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all duration-300 ${
                    isSelected
                      ? `border-2 ring-4 ring-white ${s.borderColor} shadow-2xl ${s.glowColor}`
                      : "hover:border-brand-500/30 hover:shadow-xl"
                  }`}
                >
                  {/* خط بالای کارت */}
                  <div
                    className={`absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-l ${s.accent}`}
                  />

                  <div>
                    {/* ردیف بالا: آیکون و نشانگر سال */}
                    <div className="flex items-center justify-between">
                      <div className="relative">
                        <span
                          className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.accent} text-white shadow-lg shadow-black/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                        >
                          <Icon className="h-7 w-7" />
                        </span>
                        {/* شماره گام به صورت پالس بر روی آیکون */}
                        <span className="absolute -bottom-2 -left-2 grid h-6 w-6 place-items-center rounded-full bg-brand-900 text-xs font-black text-white shadow fa-num">
                          {s.step}
                        </span>
                      </div>

                      <span
                        className={`rounded-xl px-3 py-1 text-xs font-black fa-num ${s.bgColor} ${s.color} ring-1 ring-inset ${s.borderColor}`}
                      >
                        {s.year}
                      </span>
                    </div>

                    {/* عنوان مرحله */}
                    <h3 className="mt-6 text-lg font-black text-brand-900 group-hover:text-brand-700">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-brand-900/50">{s.subtitle}</p>

                    <div className="my-4 border-t border-brand-900/8" />

                    {/* مقایسه چالش و راهکار */}
                    <div className="space-y-3">
                      <div className="rounded-xl bg-red-50/70 p-3 text-xs leading-6 text-red-900/80">
                        <div className="mb-1 flex items-center gap-1.5 font-black text-red-600">
                          <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                          <span>چالش پیش از نفت‌یار:</span>
                        </div>
                        {s.problem}
                      </div>

                      <div className="rounded-xl bg-emerald-50/80 p-3 text-xs leading-6 text-emerald-950">
                        <div className="mb-1 flex items-center gap-1.5 font-black text-emerald-600">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                          <span>راهکار نفت‌یار:</span>
                        </div>
                        {s.solution}
                      </div>
                    </div>
                  </div>

                  {/* نوار پایین: شاخص نتیجه و نشانگر انتخاب */}
                  <div className="mt-5 flex items-center justify-between border-t border-brand-900/8 pt-3">
                    <span className="text-[11px] font-black text-brand-900/70 fa-num">
                      ✨ {s.metric}
                    </span>
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isSelected ? "bg-amber-500 animate-ping" : "bg-brand-900/20"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* پنل جزئیات عمیق تحول انتخابی با انیمیشن مدرن */}
        <div className="mx-auto mt-12 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={storySteps[selectedStep].step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="card-soft relative overflow-hidden rounded-3xl border border-brand-900/10 p-6 sm:p-8"
            >
              <div
                className={`absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-l ${storySteps[selectedStep].accent}`}
              />

              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-900/8 pb-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${storySteps[selectedStep].accent} text-white shadow`}
                  >
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs font-black text-brand-500">
                      بررسی عمیق گام {storySteps[selectedStep].step} ({storySteps[selectedStep].year})
                    </span>
                    <h4 className="text-lg font-black text-brand-900">
                      {storySteps[selectedStep].title}
                    </h4>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-black text-emerald-600">
                  {storySteps[selectedStep].metric}
                </span>
              </div>

              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-red-500/20 bg-red-50/40 p-4">
                  <h5 className="flex items-center gap-2 font-black text-red-700">
                    <AlertTriangle className="h-4 w-4" />
                    وضعیت سنتی و خطرات آن
                  </h5>
                  <p className="mt-2 text-sm leading-7 text-brand-900/75">
                    {storySteps[selectedStep].problem}
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4">
                  <h5 className="flex items-center gap-2 font-black text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                    دست‌آورد سامانه هوشمند نفت‌یار
                  </h5>
                  <p className="mt-2 text-sm leading-7 text-brand-900/75">
                    {storySteps[selectedStep].solution}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* سخن مدیر عامل — اقتباس مستقیم از بخش quote نواتیک */}
        <Reveal delay={0.2} className="mt-20">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-brand-900 p-8 text-center text-white shadow-2xl shadow-brand-900/30 sm:p-12">
            <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-brand-500/25 blur-3xl" />

            <div className="relative z-10">
              <Quote className="mx-auto h-11 w-11 text-amber-400" />
              <p className="mt-6 text-xl font-black leading-10 text-white sm:text-2xl sm:leading-12">
                «ما نفت‌یار را برای ساده‌تر شدن تصمیم‌های مالی و اجرایی ساخته‌ایم؛
                کنار مدیران صنعت نفت می‌مانیم تا نرم‌افزار واقعاً در تار و پود تجارتشان جواب بدهد.»
              </p>
              <div className="mt-6">
                <span className="block font-black text-amber-400">سخن مدیرعامل</span>
                <span className="mt-1 block text-xs font-semibold text-brand-200">
                  توسعه‌یافته توسط تیم نواتیک، مستقر در هرات
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* شمارنده‌های بزرگ با رنگ‌های پرانرژی مشابه بخش آمار نواتیک */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-3">
          {[
            { value: 12, label: "ماژول یکپارچه عملیاتی", color: "from-amber-500 to-orange-500" },
            { value: 40, label: "شرکت فعال در صنعت نفت", suffix: "+", color: "from-brand-500 to-teal-500" },
            { value: 99, label: "دقت محاسبات و افت مخازن", suffix: "٪", color: "from-emerald-500 to-green-600" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12}>
              <div className="card-soft rounded-2xl p-6 text-center shadow-sm transition-all hover:shadow-md">
                <div className="text-4xl font-black text-brand-900 sm:text-5xl">
                  <CountUp to={s.value} />
                  <span className={`bg-gradient-to-l ${s.color} bg-clip-text text-transparent`}>
                    {s.suffix && faNum(s.suffix)}
                  </span>
                </div>
                <div className="mt-2 text-xs font-bold text-brand-900/60 sm:text-sm">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
