import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Fuel,
  Truck,
  BarChart3,
  Handshake,
  FileSignature,
  Flame,
  CheckCircle2,
  Sparkles,
  Play,
  Pause,
} from "lucide-react";
import { faNum } from "../lib/utils";

/* نودها: همگی آبی برند؛ تنها «سود و زیان» کهربایی — یک آکنت گرم محدود */
const nodes = [
  {
    id: "tanks",
    angle: 0,
    icon: Fuel,
    title: "مخازن و ذخیره‌سازی",
    subtitle: "پایش لحظه‌ای موجودی و کنترل افت و کسری",
    badge: "موجودی: ۸۶٪",
    accent: "brand",
    details: [
      "نشانگر گرافیکی حجم دقیق مخازن",
      "ثبت تخلیه و ورود با باسکول دیجیتال",
      "هشدار سرریز و کمبود موجودی",
    ],
  },
  {
    id: "fleet",
    angle: 72,
    icon: Truck,
    title: "ناوگان و محموله‌ها",
    subtitle: "ردیابی زنده تانکرها، بارنامه و CMR",
    badge: "۱۲ تانکر در مسیر",
    accent: "brand",
    details: [
      "ثبت راننده، شماره پلیت و CMR",
      "کنترل زمان‌بندی ترخیص در گمرکات",
      "ثبت اختلاف وزن در باسکول‌ها",
    ],
  },
  {
    id: "profit",
    angle: 144,
    icon: BarChart3,
    title: "سود و زیان هر محموله",
    subtitle: "محاسبه بهای تمام‌شده قطعی و سود لحظه‌ای",
    badge: "+۲۴٫۵٪ رشد سود",
    accent: "amber",
    details: [
      "محاسبه اتوماتیک هزینه‌های مسیر",
      "گزارش سود و زیان هر تانکر مستقل",
      "پیش‌بینی مارجین سود معاملات بعدی",
    ],
  },
  {
    id: "partners",
    angle: 216,
    icon: Handshake,
    title: "شراکت و چند ارزی",
    subtitle: "محاسبه سهم هر شریک با دالر، افغانی و تومان",
    badge: "تسویه ۴ شریک",
    accent: "brand",
    details: [
      "تبدیل نرخ ارز با تغییرات لحظه‌ای",
      "گزارش شفاف سهم سود هر شریک",
      "تسویه حساب مطمئن بدون اختلاف",
    ],
  },
  {
    id: "contracts",
    angle: 288,
    icon: FileSignature,
    title: "قرارداد و بازرگانی",
    subtitle: "مدیریت تعهدات خرید خارجی، فروش و مشتریان",
    badge: "۹۹.۸٪ دقت اسناد",
    accent: "brand",
    details: [
      "ثبت شروط پرداخت و تحویل کالا",
      "سقف اعتبار و صورت‌حساب مشتریان",
      "صدور اتوماتیک فاکتورهای رسمی",
    ],
  },
];

const accentStyles = {
  brand: {
    chip: "bg-brand-500/10 text-brand-600",
    ring: "ring-brand-500/30",
    glow: "shadow-brand-500/20",
    text: "text-brand-600",
    bgLight: "bg-brand-500/10",
    bar: "from-brand-500 to-brand-600",
  },
  amber: {
    chip: "bg-amber-500/10 text-amber-600",
    ring: "ring-amber-500/30",
    glow: "shadow-amber-500/20",
    text: "text-amber-600",
    bgLight: "bg-amber-500/10",
    bar: "from-amber-400 to-amber-500",
  },
};

export default function OrbitShowcase() {
  const [activeNode, setActiveNode] = useState(nodes[0]);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative my-16 w-full overflow-hidden px-4">
      {/* تیتر بخش حلقه */}
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50/80 px-4 py-1.5 text-xs font-bold text-brand-800 ring-1 ring-brand-500/20">
          <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          اکوسیستم ۵ ستون یکپارچه نفت‌وگاز
        </span>
        <h3 className="mt-3 text-2xl font-black text-brand-950 sm:text-3xl">
          هسته مرکزی نرم‌افزار، <span className="text-gradient">متصل به تمام عملیات</span>
        </h3>
        <p className="mt-2 text-sm text-brand-900/60 sm:text-base">
          روی هر کدام از شاخه‌ها هاور یا کلیک کنید تا جریان اطلاعات در سامانه را ببینید.
        </p>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center lg:flex-row lg:items-center lg:gap-12">
        {/* المان چرخان */}
        <div
          className="relative flex h-[380px] w-[380px] shrink-0 items-center justify-center sm:h-[450px] sm:w-[450px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* هاله نرم تک‌رنگ */}
          <div className="absolute inset-0 rounded-full bg-brand-400/10 blur-3xl" />

          {/* حلقه بیرونی محو */}
          <div className="absolute h-[340px] w-[340px] rounded-full border border-brand-500/15 sm:h-[410px] sm:w-[410px]" />

          {/* حلقه مدار با خط‌چین */}
          <div className="absolute h-[270px] w-[270px] rounded-full border-2 border-dashed border-brand-500/25 sm:h-[330px] sm:w-[330px]" />

          {/* حلقه داخلی */}
          <div className="absolute h-[180px] w-[180px] rounded-full border border-amber-500/25 sm:h-[220px] sm:w-[220px]" />

          {/* خطوط رادار متحرک */}
          <div className="pointer-events-none absolute inset-0 animate-radar opacity-15">
            <div className="h-1/2 w-1/2 border-r border-b border-brand-500" />
          </div>

          {/* دایره مرکزی هسته نفت‌یار */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            <div className="relative grid h-20 w-20 place-items-center rounded-3xl bg-brand-600 p-1 shadow-2xl shadow-brand-600/35 sm:h-24 sm:w-24">
              <span className="absolute inset-0 rounded-3xl bg-brand-400/25 animate-pulse-ring" />
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-[22px] bg-white/10 backdrop-blur-md">
                <Flame className="h-9 w-9 text-amber-400 drop-shadow-md" />
                <span className="mt-0.5 text-[10px] font-black text-white">نفت‌یار</span>
              </div>
            </div>
            <span className="mt-2 rounded-full bg-brand-950/85 px-2.5 py-0.5 text-[10px] font-bold text-brand-100 shadow backdrop-blur">
              هسته ابری
            </span>
          </div>

          {/* مدار ۵ آیکون در حال چرخش */}
          <div
            className={`absolute inset-0 z-10 transition-all ${
              isPaused ? "[animation-play-state:paused]" : ""
            } animate-orbit-slow`}
          >
            {nodes.map((node) => {
              const radius = 160; // شعاع مدار به پیکسل
              const rad = (node.angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;

              const isSelected = activeNode.id === node.id;
              const NodeIcon = node.icon;
              const a = accentStyles[node.accent];

              return (
                <div
                  key={node.id}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  {/* ضد چرخش برای عمودی ماندن آیکون */}
                  <div
                    className={`animate-orbit-rev-slow ${
                      isPaused ? "[animation-play-state:paused]" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveNode(node)}
                      onMouseEnter={() => setActiveNode(node)}
                      className={`group relative flex h-14 w-14 items-center justify-center rounded-2xl border bg-white shadow-xl transition-all duration-300 sm:h-16 sm:w-16 ${
                        isSelected
                          ? `scale-115 border-2 ${a.ring} ${a.glow} ring-4 ring-white`
                          : "border-brand-900/10 hover:scale-110 hover:border-brand-500/30"
                      }`}
                      aria-label={node.title}
                    >
                      <div className={`grid h-10 w-10 place-items-center rounded-xl ${a.chip} sm:h-11 sm:w-11`}>
                        <NodeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>

                      {/* نشانگر کوچک انتخاب */}
                      {isSelected && (
                        <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-[10px] text-white">
                          ✓
                        </span>
                      )}

                      {/* برچسب شناور روی هر نود */}
                      <span className="pointer-events-none absolute -bottom-7 right-1/2 translate-x-1/2 whitespace-nowrap rounded-md bg-brand-950/80 px-2 py-0.5 text-[10px] font-bold text-white opacity-0 shadow transition-opacity group-hover:opacity-100 sm:text-xs">
                        {node.title}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* دکمه کنترل توقف / ادامه چرخش */}
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="absolute bottom-1 left-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-brand-900/10 bg-white/90 px-3 py-1 text-[11px] font-bold text-brand-900/70 shadow-sm backdrop-blur hover:bg-brand-50"
          >
            {isPaused ? <Play className="h-3 w-3 text-brand-600" /> : <Pause className="h-3 w-3 text-amber-600" />}
            <span>{isPaused ? "ادامه چرخش" : "توقف مدار"}</span>
          </button>
        </div>

        {/* کارت توضیحات ستون انتخاب‌شده */}
        <div className="mt-8 w-full max-w-md lg:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="card-soft relative overflow-hidden rounded-3xl p-6 sm:p-8"
            >
              <div
                className={`absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-l ${accentStyles[activeNode.accent].bar}`}
              />

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${accentStyles[activeNode.accent].chip} shadow-sm`}>
                    <activeNode.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-brand-900/50">ستون عملیاتی</span>
                    <h4 className="text-lg font-black text-brand-950 sm:text-xl">
                      {activeNode.title}
                    </h4>
                  </div>
                </div>

                <span
                  className={`rounded-xl px-3 py-1 text-xs font-black fa-num ring-1 ring-inset ${accentStyles[activeNode.accent].bgLight} ${accentStyles[activeNode.accent].text} ${accentStyles[activeNode.accent].ring}`}
                >
                  {faNum(activeNode.badge)}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-brand-900/70">{activeNode.subtitle}</p>

              <div className="my-5 border-t border-brand-900/8" />

              <div className="space-y-2.5">
                <span className="text-xs font-black text-brand-900/50">ویژگی‌های این ستون:</span>
                {activeNode.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-brand-900/85">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-brand-50/80 px-4 py-3">
                <span className="text-xs font-bold text-brand-900/60">وضعیت در هسته نفت‌یار:</span>
                <span className="flex items-center gap-1.5 text-xs font-black text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  یکپارچه و متصل
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
