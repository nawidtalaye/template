import { motion } from "motion/react";
import {
  SearchCheck,
  DatabaseZap,
  Coins,
  ShieldCheck,
  Puzzle,
  Headset,
  Quote,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { faNum } from "../lib/utils";

const features = [
  {
    icon: SearchCheck,
    title: "تحلیل قبل از استقرار",
    desc: "پیش از راه‌اندازی، فرایند مالی و عملیاتی شرکت شما بررسی و ساختار داده متناسب با آن تنظیم می‌شود.",
  },
  {
    icon: DatabaseZap,
    title: "محموله؛ یک واحد قابل ردیابی",
    desc: "هر محموله یک رکورد واحد است؛ قرارداد، حمل، تخلیه، فروش و مصارف همه به همان محموله وصل می‌شوند.",
  },
  {
    icon: Coins,
    title: "چند ارز و نرخ متغیر",
    desc: "کار هم‌زمان با دالر، افغانی، تومان و سایر ارزها با نرخ تبدیل متغیر؛ حساب‌ها همیشه دقیق می‌مانند.",
  },
  {
    icon: ShieldCheck,
    title: "امنیت و سطح دسترسی",
    desc: "هر کاربر فقط بخش مربوط به خودش را می‌بیند؛ ثبت‌ها قابل پیگیری و اطلاعات مالی محفوظ می‌ماند.",
  },
  {
    icon: Puzzle,
    title: "قابل توسعه در آینده",
    desc: "افزودن شعبه، مخزن یا ماژول جدید نیاز به بازنویسی سیستم ندارد؛ معماری از ابتدا برای رشد طراحی شده.",
  },
  {
    icon: Headset,
    title: "آموزش و پشتیبانی دائمی",
    desc: "استقرار، انتقال اطلاعات از اکسل، آموزش تیم و پشتیبانی مستمر را یک تیم واحد انجام می‌دهد.",
  },
];

export default function Features() {
  return (
    <section id="features" className="tint relative py-24 lg:py-32">
      <div className="grid-dots absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="چرا نفت‌یار؟"
          title="ساخته‌شده برای"
          highlight="واقعیت کار شما"
          desc="جمع‌بندی اطلاعات نباید به پایان ماه موکول شود؛ تصمیم مدیر باید بر پایه عدد امروز باشد، نه عدد قدیمی."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
              whileHover={{ y: -6 }}
              className="group card-soft relative overflow-hidden rounded-3xl p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-500/12"
            >
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-l from-brand-500 to-brand-400 transition-all duration-500 group-hover:w-full" />
              <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/12 to-brand-400/8 ring-1 ring-brand-500/15 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <f.icon className="h-7 w-7 text-brand-500" strokeWidth={1.7} />
              </span>
              <h3 className="text-xl font-extrabold text-brand-900">{f.title}</h3>
              <p className="mt-3 leading-8 text-brand-900/60">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* سخن مدیر عامل — مثل بخش quote نواتیک */}
        <Reveal delay={0.15} className="mt-16">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-brand-900 p-10 text-center shadow-2xl shadow-brand-900/25">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-brand-400/15 blur-3xl" />
            <Quote className="mx-auto h-10 w-10 text-brand-400" />
            <p className="mt-5 text-xl font-bold leading-10 text-white sm:text-2xl sm:leading-11">
              «ما نرم‌افزار را برای ساده‌تر شدن تصمیم‌های مالی و اجرایی می‌سازیم؛
              کنار مشتری می‌مانیم تا راهکار واقعاً در کسب و کارش جواب بدهد.»
            </p>
            <p className="mt-5 text-sm font-semibold text-brand-300">سخن مدیر عامل</p>
          </div>
        </Reveal>

        {/* شمارنده‌های بزرگ — مثل «۶ حوزه تخصصی / ۹ پروژه» نواتیک */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6">
          {[
            { value: 12, label: "ماژول تخصصی نفت و گاز" },
            { value: 40, label: "شرکت در حال استفاده", suffix: "+" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12}>
              <div className="text-center">
                <div className="text-5xl font-black text-gradient sm:text-6xl">
                  <CountUp to={s.value} />
                  {s.suffix && faNum(s.suffix)}
                </div>
                <div className="mt-3 font-semibold text-brand-900/60">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}