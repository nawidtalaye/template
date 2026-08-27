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
  Sparkles,
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
  {
    icon: FileSignature,
    title: "قرارداد و خرید",
    desc: "ثبت قرارداد با تحویل‌دهنده، مقدار، نرخ و پیگیری میزان اجرای هر قرارداد بدون فوت وقت",
    color: "from-rose-500/15 to-red-500/10",
    text: "text-rose-600",
    ring: "ring-rose-500/20",
    badge: "بازرگانی",
  },
  {
    icon: Truck,
    title: "حمل و بارنامه",
    desc: "تخصیص تانکر و راننده، صدور اسناد بین‌المللی حمل (CMR) و پیگیری محموله در مسیر",
    color: "from-sky-500/15 to-blue-500/10",
    text: "text-sky-600",
    ring: "ring-sky-500/20",
    badge: "ناوگان",
  },
  {
    icon: Container,
    title: "مخزن و ذخیره‌سازی",
    desc: "موجودی لحظه‌ای هر مخزن به تفکیک محصول، ثبت تخلیه و ورود با اتصال به باسکول",
    color: "from-amber-500/15 to-orange-500/10",
    text: "text-amber-600",
    ring: "ring-amber-500/20",
    badge: "انبارداری",
  },
  {
    icon: Fuel,
    title: "کسری و افت سوخت",
    desc: "ثبت تفاوت بارگیری و تخلیه، تفکیک افت استاندارد از کسری بار در طول مسیر",
    color: "from-violet-500/15 to-purple-500/10",
    text: "text-violet-600",
    ring: "ring-violet-500/20",
    badge: "کنترل کیفیت",
  },
  {
    icon: ShoppingCart,
    title: "فروش و قیمت‌گذاری",
    desc: "فروش نقدی و اعتباری از موجودی مخازن، با نرخ‌گذاری منعطف و سقف اعتبار مشتری",
    color: "from-emerald-500/15 to-teal-500/10",
    text: "text-emerald-600",
    ring: "ring-emerald-500/20",
    badge: "فروش",
  },
  {
    icon: Receipt,
    title: "مصارف محموله",
    desc: "کرایه تانکر، گمرک، باسکول و دموراژ مسیر روی همان محموله برای بهای تمام‌شده واقعی",
    color: "from-orange-500/15 to-amber-500/10",
    text: "text-orange-600",
    ring: "ring-orange-500/20",
    badge: "هزینه‌یابی",
  },
  {
    icon: Users,
    title: "حساب مشتریان",
    desc: "مانده حساب، کنترل بدهی، سقف اعتبار و صورت‌حساب هر خریدار و تحویل‌دهنده در لحظه",
    color: "from-indigo-500/15 to-blue-500/10",
    text: "text-indigo-600",
    ring: "ring-indigo-500/20",
    badge: "ارتباطات",
  },
  {
    icon: Handshake,
    title: "حساب شرکا",
    desc: "تعریف درصد شراکت، محاسبه خودکار سهم هر شریک از سود خالص هر محموله بدون اختلاف",
    color: "from-purple-500/15 to-pink-500/10",
    text: "text-purple-600",
    ring: "ring-purple-500/20",
    badge: "شراکت",
  },
  {
    icon: Banknote,
    title: "دریافت، پرداخت و چند ارزی",
    desc: "ثبت تراکنش‌ها با دالر، افغانی و تومان با نرخ تبدیل روز، مدیریت صندوق، صرافی و بانک",
    color: "from-teal-500/15 to-emerald-500/10",
    text: "text-teal-600",
    ring: "ring-teal-500/20",
    badge: "خزانه‌داری",
  },
  {
    icon: TrendingDown,
    title: "بهای تمام‌شده واقعی",
    desc: "محاسبه کامپیوتری بهای تمام‌شده هر لیتر و تن از روی اسناد و بارنامه‌های واقعی",
    color: "from-amber-500/15 to-yellow-500/10",
    text: "text-amber-600",
    ring: "ring-amber-500/20",
    badge: "حسابداری صنعتی",
  },
  {
    icon: PieChart,
    title: "سود و زیان محموله",
    desc: "گزارش سود و زیان بلافاصله پس از تخلیه هر محموله، بدون معطلی تا پایان دوره مالی",
    color: "from-emerald-500/15 to-green-500/10",
    text: "text-emerald-600",
    ring: "ring-emerald-500/20",
    badge: "سودآوری",
  },
  {
    icon: LayoutDashboard,
    title: "داشبورد تصمیم‌گیری",
    desc: "نمای جامع شاخص‌های حیاتی شرکت، تراز لحظه‌ای و هشدارهای سررسید برای مدیران",
    color: "from-cyan-500/15 to-sky-500/10",
    text: "text-cyan-600",
    ring: "ring-cyan-500/20",
    badge: "هوش تجاری",
  },
];

export default function Modules() {
  return (
    <section id="modules" className="relative bg-white py-24 lg:py-32">
      {/* هاله‌های رنگی لطیف */}
      <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-amber-400/10 blur-[120px]" />
      <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-sky-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="ماژول‌های تخصصی"
          title="تمام زنجیره عملیات نفتی،"
          highlight="در یک بستر رنگین و یکپارچه"
          desc="هر رویداد — از امضای قرارداد در کابل یا هرات تا تحویل در پمپ‌استیشن — به همان شناسه محموله متصل است تا حساب‌ها صددرصد شفاف بماند."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -7 }}
              className="group card-soft relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10"
            >
              <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/15" />

              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-brand-900/20 fa-num transition-colors group-hover:text-brand-500/60">
                  {faNum(String(i + 1).padStart(2, "0"))}
                </span>
                <span className="rounded-md bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-900/60 ring-1 ring-brand-900/10">
                  {m.badge}
                </span>
              </div>

              <span
                className={`my-4 grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br ${m.color} ring-1 ${m.ring} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}
              >
                <m.icon className={`h-6 w-6 ${m.text}`} strokeWidth={1.9} />
              </span>

              <h3 className="text-lg font-black text-brand-900 group-hover:text-brand-700">
                {m.title}
              </h3>
              <p className="mt-2 text-xs leading-6 text-brand-900/65">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
