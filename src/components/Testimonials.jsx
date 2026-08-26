import { motion } from "motion/react";
import { Quote, Star, Building2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const clients = [
  "شرکت واردات نفتیار غرب",
  "گروه انرژی آریانا",
  "تانک تیل هرات",
  "پترو تجارت خراسان",
  "شرکت لجستیک ابریشم",
  "گاز و انرژی پامیر",
  "نفت گستر باختر",
  "ترمینال سوخت آمو",
];

const testimonials = [
  {
    quote:
      "قبلاً بستن حساب یک محموله دو هفته وقت می‌گرفت؛ حالا سود و زیان هر محموله را همان روز می‌بینیم. تصمیم‌گیری برای قراردادهای بعدی کاملاً عوض شده است.",
    name: "حاجی عبدالرحیم رحیمی",
    role: "مدیرعامل، شرکت واردات مواد نفتی",
    stars: 5,
  },
  {
    quote:
      "کسری و افت همیشه نقطه اختلاف ما با راننده‌ها و شرکا بود. حالا مشخص است اختلاف در کدام نقطه ایجاد شده و بحث‌ها با عدد تمام می‌شود، نه با حدس.",
    name: "انجنیر شفیق احمدی",
    role: "مدیر عملیات، گروه انرژی",
    stars: 5,
  },
  {
    quote:
      "حساب شرکا با چند ارز واقعاً پیچیده بود. سیستم سهم هر شریک را خودش محاسبه می‌کند و گزارشش شفاف است؛ اعتماد بین شرکا بیشتر شده.",
    name: "محمد یوسف نظری",
    role: "شریک و مدیر مالی، شرکت توزیع سوخت",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="grid-lines absolute inset-0 opacity-50" />
      <div className="absolute top-0 left-1/4 h-[360px] w-[360px] rounded-full bg-lagoon-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="اعتماد مشتریان"
          title="شرکت‌هایی که با نفت‌یار"
          highlight="کار می‌کنند"
          desc="از واردکنندگان بزرگ تا شرکت‌های توزیع منطقه‌ای؛ نفت‌یار در قلب عملیات روزانه آن‌هاست."
        />

        {/* marquee */}
        <div className="relative mb-16 overflow-hidden py-2 [mask-image:linear-gradient(to_left,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-4" style={{ direction: "ltr" }}>
            {[...clients, ...clients].map((c, i) => (
              <div
                key={i}
                className="glass flex items-center gap-3 rounded-2xl px-7 py-4 whitespace-nowrap"
                style={{ direction: "rtl" }}
              >
                <Building2 className="h-5 w-5 text-flame-400" />
                <span className="font-bold text-slate-200">{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.14 }}
              whileHover={{ y: -6 }}
              className="glass relative flex flex-col rounded-3xl p-8 transition-colors hover:border-flame-500/30"
            >
              <Quote className="absolute left-6 top-6 h-9 w-9 text-flame-500/20" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="h-4.5 w-4.5 fill-flame-400 text-flame-400" />
                ))}
              </div>
              <blockquote className="flex-1 leading-8 text-slate-300">«{t.quote}»</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-flame-500 to-lagoon-600 text-base font-black text-white">
                  {t.name.split(" ").slice(-1)[0][0]}
                </span>
                <span>
                  <span className="block font-bold text-white">{t.name}</span>
                  <span className="block text-sm text-slate-400">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
