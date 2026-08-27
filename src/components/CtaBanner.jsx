import { motion } from "motion/react";
import { ArrowLeft, PhoneCall } from "lucide-react";
import agent from "../assets/support-agent.png";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-16 lg:py-0">
      <div className="grid-lines absolute inset-0 opacity-15" />
      <div className="absolute -left-16 top-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[320px_1fr_auto] lg:gap-14">
        {/* کارشناس پشتیبانی */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden self-end lg:block"
        >
          <div className="relative h-80 w-72 overflow-hidden rounded-t-[9rem] bg-gradient-to-t from-brand-100 to-white shadow-2xl shadow-black/20 ring-4 ring-brand-500/20">
            <img
              src={agent}
              alt="کارشناس پشتیبانی نفت‌یار نواتیک"
              className="absolute inset-x-0 top-6 mx-auto w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="py-4 text-center lg:py-16 lg:text-right"
        >
          <p className="text-lg font-bold text-amber-400">
            آماده‌اید؟ <span className="font-black text-white">برای شروع</span>
          </p>
          <h2 className="mt-3 text-2xl font-black leading-relaxed text-white sm:text-3xl">
            کارشناسان ما به صورت رایگان شما را به
            <span className="text-amber-400"> بهترین راهکار </span>
            هدایت خواهند کرد
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-brand-100/80 lg:justify-start">
            <PhoneCall className="h-4.5 w-4.5 text-amber-400" />
            <span className="font-bold fa-num" style={{ direction: "ltr" }}>+۹۳ ۷۰ ۲ ۰۰ ۸۴ ۵۴</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="pb-6 text-center lg:pb-0"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-amber-400 px-9 py-4.5 text-base font-black text-brand-950 shadow-2xl shadow-amber-500/25 transition-all hover:bg-amber-300 active:scale-95"
          >
            همین حالا اقدام کنید
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
