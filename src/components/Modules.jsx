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

/* پالت رنگی متنوع برای کارت‌ها */
const tones = [
  { bg: "bg-brand-500/12", text: "text-brand-500", glow: "group-hover:bg-brand-500/15", bar: "from-brand-500 to-brand-400" },
  { bg: "bg-sky-500/12", text: "text-sky-500", glow: "group-hover:bg-sky-500/15", bar: "from-sky-500 to-sky-400" },
  { bg: "bg-violet-500/12", text: "text-violet-500", glow: "group-hover:bg-violet-500/15", bar: "from-violet-500 to-violet-400" },
  { bg: "bg-amber-500/12", text: "text-amber-500", glow: "group-hover:bg-amber-500/15", bar: "from-amber-500 to-amber-400" },
  { bg: "bg-rose-500/12", text: "text-rose-500", glow: "group-hover:bg-rose-500/15", bar: "from-rose-500 to-rose-400" },
  { bg: "bg-emerald-500/12", text: "text-emerald-500", glow: "group-hover:bg-emerald-500/15", bar: "from-emerald-500 to-emerald-400" },
];

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
    <section id="modules" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="آنچه می‌سازیم"
          title="تمام زنجیره عملیات،"
          highlight="در یک بستر"
          desc="هر رویداد — از امضای قرارداد تا فروش — به همان محموله وصل می‌شود تا زنجیره از ابتدا تا گزارش نهایی قابل ردیابی بماند."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {modules.map((m, i) => {
            const t = tones[i % tones.length];
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.09 }}
                whileHover={{ y: -7 }}
                className="group card-soft relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-brand-900/10"
              >
                <div className={`absolute inset-x-0 top-0 h-1 w-0 bg-gradient-to-l ${t.bar} transition-all duration-500 group-hover:w-full`} />
                <div className={`absolute -left-10 -top-10 h-28 w-28 rounded-full blur-2xl transition-all duration-500 ${t.glow}`} />
                <span className={`absolute left-4 top-4 text-xs font-black text-brand-900/15 fa-num transition-colors ${t.text.replace("text-", "group-hover:text-")}`}>
                  {faNum(String(i + 1).padStart(2, "0"))}
                </span>
                <span className={`mb-4 grid h-12 w-12 place-items-center rounded-xl ${t.bg} ring-1 ring-brand-900/5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <m.icon className={`h-6 w-6 ${t.text}`} strokeWidth={1.8} />
                </span>
                <h3 className="text-lg font-extrabold text-brand-900">{m.title}</h3>
                <p className="mt-2 text-sm leading-7 text-brand-900/55">{m.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}