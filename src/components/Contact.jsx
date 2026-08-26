import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, CheckCircle2, User, Building2, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const contactInfo = [
  { icon: Phone, label: "شماره تماس و مشاوره", value: "+۹۳ ۷۰ ۲ ۰۰ ۸۴ ۵۴", dir: "ltr" },
  { icon: Mail, label: "ایمیل پشتیبانی", value: "info@novatechsoft.com", dir: "ltr" },
  { icon: MapPin, label: "آدرس دفتر مرکزی", value: "هرات، افغانستان — شرکت نواتیک", dir: "rtl" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="tint relative overflow-hidden py-24 lg:py-32">
      <div className="grid-dots absolute inset-0 opacity-40" />
      <div className="absolute -top-24 left-1/3 h-[380px] w-[380px] rounded-full bg-amber-400/15 blur-[140px]" />
      <div className="absolute -bottom-24 right-1/4 h-[350px] w-[350px] rounded-full bg-brand-400/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="شروع همکاری و دمو"
          title="آماده‌اید عملیات شرکت‌تان را"
          highlight="یکپارچه و شفاف کنید؟"
          desc="شماره خود را ثبت کنید تا کارشناسان فنی نواتیک در هرات با شما تماس بگیرند و یک دموی اختصاصی با داده‌های صنعت نفت برای شما اجرا کنند."
        />

        <div className="grid gap-8 lg:grid-cols-[400px_1fr]">
          <div className="space-y-4">
            {contactInfo.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.1}>
                <div className="card-soft flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-brand-500/15 ring-1 ring-amber-500/20">
                    <c.icon className="h-5.5 w-5.5 text-amber-600" />
                  </span>
                  <div>
                    <span className="block text-xs font-semibold text-brand-900/50">{c.label}</span>
                    <span className="block font-black text-brand-900 fa-num text-sm sm:text-base" style={{ direction: c.dir }}>
                      {c.value}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-brand-800 to-amber-900 p-7 text-white shadow-xl shadow-brand-900/20">
                <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-amber-400/20 blur-xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-amber-400" />
                    <h4 className="text-lg font-black text-white">مشاوره و ارزیابی رایگان</h4>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm leading-7 text-brand-100/85">
                    پیش از هر تعهدی، ساختار فرایندها، انبارها، تانکرها و نیازهای مالی شرکت شما توسط مهندسان نواتیک تحلیل شده و بهترین نسخه بدون هزینه پنهان پیشنهاد می‌شود.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="card-soft rounded-3xl p-8 lg:p-10 border border-brand-900/8 shadow-xl">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[320px] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", bounce: 0.5 }}
                  >
                    <CheckCircle2 className="h-20 w-20 text-emerald-500" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-black text-brand-900">درخواست دموی شما ثبت شد!</h3>
                  <p className="mt-3 text-sm text-brand-900/60 leading-7">
                    کارشناسان نواتیک در هرات به زودی با شما تماس می‌گیرند تا هماهنگی جلسه دمو انجام شود.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold text-brand-900/70">
                      نام و نام خانوادگی
                    </label>
                    <div className="relative">
                      <User className="pointer-events-none absolute right-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-amber-500/60" />
                      <input
                        required
                        placeholder="مثلاً حاجی محمد رحیمی"
                        className="w-full rounded-xl border border-brand-900/10 bg-brand-50/50 py-3.5 pr-11 pl-4 text-brand-900 placeholder:text-brand-900/35 outline-none transition focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/15"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold text-brand-900/70">
                      نام شرکت یا ترمینال
                    </label>
                    <div className="relative">
                      <Building2 className="pointer-events-none absolute right-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-amber-500/60" />
                      <input
                        placeholder="شرکت واردات و توزیع مواد نفتی…"
                        className="w-full rounded-xl border border-brand-900/10 bg-brand-50/50 py-3.5 pr-11 pl-4 text-brand-900 placeholder:text-brand-900/35 outline-none transition focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/15"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-xs font-bold text-brand-900/70">
                      شماره تماس همراه (واتساپ / تماس)
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute right-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-amber-500/60" />
                      <input
                        required
                        type="tel"
                        placeholder="+۹۳ ۷۰ ..."
                        className="w-full rounded-xl border border-brand-900/10 bg-brand-50/50 py-3.5 pr-11 pl-4 text-brand-900 placeholder:text-brand-900/35 outline-none transition focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/15"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-xs font-bold text-brand-900/70">
                      توضیحات یا نیازهای خاص (اختیاری)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="تعداد مخازن، تعداد تانکرها، ارزهای کاری و شعبات خود را بنویسید…"
                      className="w-full resize-none rounded-xl border border-brand-900/10 bg-brand-50/50 px-4 py-3.5 text-brand-900 placeholder:text-brand-900/35 outline-none transition focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/15"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-l from-amber-500 via-orange-500 to-brand-600 px-8 py-4 text-base font-black text-white shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-95 sm:w-auto"
                    >
                      <Send className="h-4.5 w-4.5" />
                      ثبت درخواست و دریافت دمو
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
