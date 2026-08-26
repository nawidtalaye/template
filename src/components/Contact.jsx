import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, CheckCircle2, User, Building2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const contactInfo = [
  { icon: Phone, label: "شماره تماس", value: "+۹۳ ۷۰ ۰۰۰ ۰۰۰۰", dir: "ltr" },
  { icon: Mail, label: "ایمیل", value: "info@naftyar.com", dir: "ltr" },
  { icon: MapPin, label: "آدرس", value: "هرات، افغانستان", dir: "rtl" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-flame-500/40 to-transparent" />
      <div className="absolute -top-24 left-1/3 h-[380px] w-[380px] rounded-full bg-flame-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="شروع همکاری"
          title="آماده‌اید عملیات شرکت‌تان را"
          highlight="یکپارچه کنید؟"
          desc="شماره خود را ثبت کنید تا کارشناسان ما تماس بگیرند و یک دموی اختصاصی با داده‌های نمونه صنعت نفت برای شما اجرا کنند."
        />

        <div className="grid gap-8 lg:grid-cols-[400px_1fr]">
          {/* info cards */}
          <div className="space-y-4">
            {contactInfo.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.1}>
                <div className="glass flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-lagoon-400/30">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-flame-500/20 to-lagoon-500/15">
                    <c.icon className="h-5.5 w-5.5 text-flame-400" />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-400">{c.label}</span>
                    <span className="block font-bold text-white fa-num" style={{ direction: c.dir }}>
                      {c.value}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-flame-500 to-flame-600 p-6 text-white shadow-xl shadow-flame-500/20">
                <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-white/15 blur-xl" />
                <h4 className="text-lg font-extrabold">مشاوره رایگان</h4>
                <p className="mt-2 text-sm leading-7 text-white/85">
                  پیش از هر تعهدی، برای انتخاب نسخه و دامنه کار مشاوره رایگان دریافت می‌کنید؛
                  بدون هزینه پنهان.
                </p>
              </div>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={0.15}>
            <div className="glass rounded-3xl p-8 lg:p-10">
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
                    <CheckCircle2 className="h-20 w-20 text-lagoon-400" strokeWidth={1.4} />
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-extrabold text-white">درخواست شما ثبت شد!</h3>
                  <p className="mt-3 text-slate-400">
                    کارشناسان ما در اولین فرصت با شما تماس خواهند گرفت.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-300">
                      نام و تخلص
                    </label>
                    <div className="relative">
                      <User className="pointer-events-none absolute right-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-500" />
                      <input
                        required
                        placeholder="مثلاً احمد احمدی"
                        className="w-full rounded-xl border border-white/10 bg-ink-800/80 py-3.5 pr-11 pl-4 text-white placeholder:text-slate-500 outline-none transition focus:border-flame-500/60 focus:ring-2 focus:ring-flame-500/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-300">
                      نام شرکت
                    </label>
                    <div className="relative">
                      <Building2 className="pointer-events-none absolute right-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-500" />
                      <input
                        placeholder="شرکت واردات مواد نفتی…"
                        className="w-full rounded-xl border border-white/10 bg-ink-800/80 py-3.5 pr-11 pl-4 text-white placeholder:text-slate-500 outline-none transition focus:border-flame-500/60 focus:ring-2 focus:ring-flame-500/20"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-slate-300">
                      شماره تماس
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute right-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-500" />
                      <input
                        required
                        type="tel"
                        placeholder="+۹۳ ۷۰ ..."
                        className="w-full rounded-xl border border-white/10 bg-ink-800/80 py-3.5 pr-11 pl-4 text-white placeholder:text-slate-500 outline-none transition focus:border-flame-500/60 focus:ring-2 focus:ring-flame-500/20"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-slate-300">
                      توضیحات (اختیاری)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="درباره نیاز شرکت خود بنویسید؛ تعداد مخازن، شعبه‌ها، ارزها و..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-ink-800/80 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition focus:border-flame-500/60 focus:ring-2 focus:ring-flame-500/20"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-l from-flame-500 to-flame-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-flame-500/25 transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto"
                    >
                      <Send className="h-4.5 w-4.5" />
                      ثبت درخواست دمو
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
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
