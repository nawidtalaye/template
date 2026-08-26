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
  { icon: FileSignature, title: "قرارداد", desc: "ثبت قرارداد خرید با تحویل‌دهنده؛ مقدار، نرخ و شرایط. از این نقطه هر رویداد به همین قرارداد وصل می‌ماند." },
  { icon: PackageOpen, title: "بارگیری", desc: "ثبت مقدار بارگیری‌شده در مبدا و اسناد مربوطه به عنوان اولین نقطه اندازه‌گیری محموله." },
  { icon: Truck, title: "حمل", desc: "تخصیص تانکر و راننده، صدور اسناد حمل و بارنامه و پیگیری محموله در مسیر." },
  { icon: ArrowDownToLine, title: "تخلیه", desc: "ثبت مقدار تخلیه‌شده در مقصد و نگهداری اختلاف آن با بارگیری به عنوان داده مستقل." },
  { icon: Container, title: "مخزن", desc: "ورود محموله به مخزن و به‌روز شدن موجودی ذخیره‌سازی به تفکیک نوع محصول." },
  { icon: ShoppingCart, title: "فروش", desc: "فروش نقدی یا اعتباری از موجودی مخزن، با ثبت اثر آن روی حساب مشتری." },
  { icon: Receipt, title: "مصارف", desc: "ثبت کرایه، گمرک و سایر مصارف مسیر روی همان محموله تا بهای تمام‌شده واقعی ساخته شود." },
  { icon: BarChart3, title: "گزارش سود", desc: "محاسبه سود و زیان محموله از اختلاف فروش و بهای تمام‌شده، همراه گزارش مدیریتی." },
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div className="absolute top-1/4 left-1/3 h-[380px] w-[380px] rounded-full bg-lagoon-500/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="مسیر کار در سیستم"
          title="از قرارداد تا"
          highlight="گزارش سود"
          desc="هشت مرحله عملیاتی که هر کدام به همان محموله وصل است؛ زنجیره کامل و قابل ردیابی."
        />

        <div className="relative">
          {/* connecting line */}
          <div className="absolute right-[27px] top-0 bottom-0 hidden w-px bg-gradient-to-b from-flame-500/60 via-lagoon-500/40 to-transparent lg:right-1/2 lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((s, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={s.title}
                  className={`relative flex lg:min-h-[130px] ${
                    isEven ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                    className="absolute right-0 top-6 z-10 hidden lg:right-1/2 lg:block lg:translate-x-1/2"
                  >
                    <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-ink-800 ring-1 ring-flame-500/40 shadow-lg shadow-flame-500/10">
                      <span className="absolute inset-0 rounded-2xl bg-flame-500/20 animate-pulse-ring" />
                      <span className="text-lg font-black text-flame-400 fa-num">{faNum(i + 1)}</span>
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={`glass w-full rounded-2xl p-6 transition-colors hover:border-lagoon-400/30 lg:w-[calc(50%-3.5rem)] ${
                      isEven ? "" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-flame-500/20 to-lagoon-500/15 ring-1 ring-white/10">
                        <s.icon className="h-6 w-6 text-lagoon-400" strokeWidth={1.8} />
                      </span>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-black text-flame-500 fa-num lg:hidden">
                            {faNum(String(i + 1).padStart(2, "0"))}
                          </span>
                          <h3 className="text-lg font-bold text-white">{s.title}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-slate-400">{s.desc}</p>
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
