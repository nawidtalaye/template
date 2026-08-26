import { motion } from "motion/react";
import {
  FileSignature,
  Truck,
  Container,
  Fuel,
  ShoppingCart,
  Receipt,
  Users,
  Handshake,
  Banknote,
  TrendingDown,
  PieChart,
  LayoutDashboard,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import { faNum } from "../lib/utils";

const modules = [
  { icon: FileSignature, title: "قرارداد و خرید", desc: "ثبت قرارداد با تحویل‌دهنده، مقدار، نرخ و پیگیری میزان اجرای هر قرارداد" },
  { icon: Truck, title: "حمل و بارنامه", desc: "تخصیص تانکر و راننده، صدور اسناد حمل (CMR) و پیگیری محموله در مسیر" },
  { icon: Container, title: "مخزن و ذخیره‌سازی", desc: "موجودی لحظه‌ای هر مخزن به تفکیک محصول، ثبت تخلیه و ورود محموله" },
  { icon: Fuel, title: "کسری و افت", desc: "ثبت اختلاف بارگیری و تخلیه، پیگیری کسری در هر نقطه از زنجیره" },
  { icon: ShoppingCart, title: "فروش و قیمت‌گذاری", desc: "فروش نقدی و اعتباری از موجودی مخزن با قیمت‌گذاری منعطف" },
  { icon: Receipt, title: "مصارف محموله", desc: "کرایه، گمرک و مصارف مسیر روی همان محموله برای بهای تمام‌شده واقعی" },
  { icon: Users, title: "حساب مشتریان", desc: "مانده حساب، اعتبار و صورت‌حساب هر مشتری و تحویل‌دهنده در لحظه" },
  { icon: Handshake, title: "حساب شرکا", desc: "تعریف شراکت، محاسبه خودکار سهم هر شریک از سود هر محموله" },
  { icon: Banknote, title: "دریافت و پرداخت", desc: "ثبت تراکنش‌ها با چند ارز و نرخ تبدیل متغیر، صندوق و بانک" },
  { icon: TrendingDown, title: "بهای تمام‌شده", desc: "محاسبه خودکار بهای تمام‌شده هر محموله از روی اسناد واقعی" },
  { icon: PieChart, title: "سود و زیان", desc: "گزارش سود و زیان به تفکیک محموله، بدون انتظار برای پایان دوره" },
  { icon: LayoutDashboard, title: "داشبورد مدیریتی", desc: "نمای کلی عملیات، شاخص‌های کلیدی و گزارش‌های تحلیلی برای مدیر" },
];

export default function Modules() {
  return (
    <section id="modules" className="relative bg-ink-900 py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-flame-500/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="ماژول‌های سیستم"
          title="تمام زنجیره عملیات،"
          highlight="در یک بستر"
          desc="هر رویداد — از امضای قرارداد تا فروش — به همان محموله وصل می‌شود تا زنجیره از ابتدا تا گزارش نهایی قابل ردیابی بماند."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.09 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-ink-800/60 p-6 transition-colors duration-300 hover:border-flame-500/35"
            >
              <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-flame-500/0 blur-2xl transition-all duration-500 group-hover:bg-flame-500/15" />
              <span className="absolute left-4 top-4 text-xs font-bold text-slate-600 fa-num transition-colors group-hover:text-flame-500/60">
                {faNum(String(i + 1).padStart(2, "0"))}
              </span>
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-flame-500/15 to-lagoon-500/15 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <m.icon className="h-6 w-6 text-flame-400 transition-colors group-hover:text-flame-300" strokeWidth={1.8} />
              </span>
              <h3 className="text-lg font-bold text-white">{m.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
