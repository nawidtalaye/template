import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import SectionTitle from "./SectionTitle";

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
    <section id="testimonials" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute top-0 left-1/4 h-[320px] w-[320px] rounded-full bg-brand-400/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="نظر مشتریان"
          title="مدیرانی که با نفت‌یار"
          highlight="کار می‌کنند"
          desc="از واردکنندگان بزرگ تا شرکت‌های توزیع منطقه‌ای؛ نفت‌یار در قلب عملیات روزانه آن‌هاست."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.14 }}
              whileHover={{ y: -6 }}
              className="card-soft relative flex flex-col rounded-3xl p-8 transition-shadow hover:shadow-xl hover:shadow-brand-500/12"
            >
              <Quote className="absolute left-6 top-6 h-9 w-9 text-brand-500/15" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="flex-1 leading-8 text-brand-900/70">«{t.quote}»</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-brand-900/8 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-base font-black text-white">
                  {t.name.split(" ").slice(-1)[0][0]}
                </span>
                <span>
                  <span className="block font-extrabold text-brand-900">{t.name}</span>
                  <span className="block text-sm text-brand-900/50">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}