import { motion } from "motion/react";
import {
  FileSignature,
  PackageOpen,
  Truck,
  ArrowDownToLine,
  Container,
  ShoppingCart,
  Receipt,
  BarChart3,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import { faNum } from "../lib/utils";

const steps = [
  {
    icon: FileSignature,
    title: "قرارداد",
    desc: "ثبت قرارداد خرید با تحویل‌دهنده؛ مقدار، نرخ و شرایط. از این نقطه هر رویداد به همین قرارداد وصل می‌ماند.",
    color: "from-rose-500 to-red-500",
    text: "text-rose-600",
    bg: "bg-rose-500/10",
  },
  {
    icon: PackageOpen,
    title: "بارگیری",
    desc: "ثبت مقدار بارگیری‌شده در مبدا و اسناد مربوطه به عنوان اولین نقطه اندازه‌گیری محموله.",
    color: "from-amber-500 to-orange-500",
    text: "text-amber-600",
    bg: "bg-amber-500/10",
  },
  {
    icon: Truck,
    title: "حمل",
    desc: "تخصیص تانکر و راننده، صدور اسناد حمل و بارنامه و پیگیری محموله در مسیر.",
    color: "from-sky-500 to-blue-600",
    text: "text-sky-600",
    bg: "bg-sky-500/10",
  },
  {
    icon: ArrowDownToLine,
    title: "تخلیه",
    desc: "ثبت مقدار تخلیه‌شده در مقصد و نگهداری اختلاف آن با بارگیری به عنوان داده مستقل.",
    color: "from-violet-500 to-purple-600",
    text: "text-violet-600",
    bg: "bg-violet-500/10",
  },
  {
    icon: Container,
    title: "مخزن",
    desc: "ورود محموله به مخزن و به‌روز شدن موجودی ذخیره‌سازی به تفکیک نوع محصول.",
    color: "from-amber-500 to-yellow-600",
    text: "text-amber-600",
    bg: "bg-amber-500/10",
  },
  {
    icon: ShoppingCart,
    title: "فروش",
    desc: "فروش نقدی یا اعتباری از موجودی مخزن، با ثبت اثر آن روی حساب مشتری.",
    color: "from-emerald-500 to-teal-600",
    text: "text-emerald-600",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Receipt,
    title: "مصارف",
    desc: "ثبت کرایه، گمرک و سایر مصارف مسیر روی همان محموله تا بهای تمام‌شده واقعی ساخته شود.",
    color: "from-orange-500 to-amber-600",
    text: "text-orange-600",
    bg: "bg-orange-500/10",
  },
  {
    icon: BarChart3,
    title: "گزارش سود",
    desc: "محاسبه سود و زیان محموله از اختلاف فروش و بهای تمام‌شده، همراه گزارش مدیریتی.",
    color: "from-emerald-600 to-green-600",
    text: "text-emerald-600",
    bg: "bg-emerald-500/10",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="tint relative overflow-hidden py-24 lg:py-32">
      <div className="grid-lines absolute inset-0 opacity-50" />
      <div className="absolute top-1/4 left-1/4 h-[380px] w-[380px] rounded-full bg-amber-400/10 blur-[130px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[380px] w-[380px] rounded-full bg-brand-400/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="مسیر کار در سیستم"
          title="از قرارداد تا"
          highlight="گزارش سود"
          desc="هشت مرحله عملیاتی که هر کدام به همان محموله وصل است؛ زنجیره کامل و قابل ردیابی."
        />

        <div className="relative">
          <div className="absolute right-[27px] top-0 bottom-0 hidden w-px bg-gradient-to-b from-amber-500/50 via-brand-400/40 to-emerald-500/50 lg:right-1/2 lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={s.title}
                  className={`relative flex lg:min-h-[128px] ${
                    isEven ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                    className="absolute right-0 top-6 z-10 hidden lg:right-1/2 lg:block lg:translate-x-1/2"
                  >
                    <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white ring-1 ring-brand-500/30 shadow-lg shadow-brand-500/15">
                      <span className="absolute inset-0 rounded-2xl bg-amber-400/20 animate-pulse-ring" />
                      <span className="text-lg font-black text-brand-900 fa-num">{faNum(i + 1)}</span>
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="card-soft group w-full rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/12 lg:w-[calc(50%-3.5rem)]"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${s.bg} ring-1 ring-brand-900/10 transition-transform duration-300 group-hover:scale-110`}
                      >
                        <s.icon className={`h-6 w-6 ${s.text}`} strokeWidth={1.9} />
                      </span>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-black text-brand-500 fa-num lg:hidden">
                            {faNum(String(i + 1).padStart(2, "0"))}
                          </span>
                          <h3 className="text-lg font-black text-brand-900">{s.title}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-brand-900/60">{s.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
