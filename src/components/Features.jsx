import { motion } from "motion/react";
import {
  SearchCheck,
  DatabaseZap,
  Coins,
  ShieldCheck,
  Puzzle,
  Headset,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const features = [
  {
    icon: SearchCheck,
    title: "تحلیل قبل از استقرار",
    desc: "پیش از راه‌اندازی، فرایند مالی و عملیاتی شرکت شما بررسی و ساختار داده متناسب با آن تنظیم می‌شود؛ چون روش کار دو شرکت نفتی به‌ندرت شبیه هم است.",
  },
  {
    icon: DatabaseZap,
    title: "محموله؛ یک واحد قابل ردیابی",
    desc: "هر محموله یک رکورد واحد است؛ نه چند رکورد پراکنده در چند فایل. قرارداد، حمل، تخلیه، فروش و مصارف همه به همان محموله وصل می‌شوند.",
  },
  {
    icon: Coins,
    title: "چند ارز و نرخ متغیر",
    desc: "کار هم‌زمان با دالر، افغانی، تومان و سایر ارزها با نرخ تبدیل متغیر؛ حساب‌ها همیشه دقیق و قابل تطبیق می‌مانند.",
  },
  {
    icon: ShieldCheck,
    title: "امنیت و سطح دسترسی",
    desc: "هر کاربر فقط بخش مربوط به خودش را می‌بیند؛ ثبت‌ها قابل پیگیری است و اطلاعات مالی شرکت محفوظ می‌ماند.",
  },
  {
    icon: Puzzle,
    title: "قابل توسعه در آینده",
    desc: "افزودن شعبه، مخزن یا ماژول جدید نیاز به بازنویسی سیستم ندارد؛ معماری از ابتدا برای رشد طراحی شده است.",
  },
  {
    icon: Headset,
    title: "آموزش و پشتیبانی دائمی",
    desc: "استقرار، انتقال اطلاعات از اکسل، آموزش تیم و پشتیبانی مستمر را یک تیم واحد انجام می‌دهد.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-50 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          dark={false}
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
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/80"
            >
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-l from-flame-500 to-lagoon-500 transition-all duration-500 group-hover:w-full" />
              <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-flame-500/12 to-lagoon-500/12 ring-1 ring-slate-200 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <f.icon className="h-7 w-7 text-flame-600" strokeWidth={1.7} />
              </span>
              <h3 className="text-xl font-extrabold text-ink-900">{f.title}</h3>
              <p className="mt-3 leading-8 text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
