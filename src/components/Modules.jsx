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

/* سه آکنت محدود و تکرارشونده: آبی (اصلی) + کهربایی + دریاچه‌ای */
const accents = [
  { chip: "bg-brand-500/10 text-brand-600", bar: "bg-brand-500" },
  { chip: "bg-brand-500/10 text-brand-600", bar: "bg-brand-500" },
  { chip: "bg-brand-500/10 text-brand-600", bar: "bg-brand-500" },
  { chip: "bg-amber-500/10 text-amber-600", bar: "bg-amber-500" },
  { chip: "bg-brand-500/10 text-brand-600", bar: "bg-brand-500" },
  { chip: "bg-teal-500/10 text-teal-600", bar: "bg-teal-500" },
  { chip: "bg-brand-500/10 text-brand-600", bar: "bg-brand-500" },
  { chip: "bg-brand-500/10 text-brand-600", bar: "bg-brand-500" },
  { chip: "bg-brand-500/10 text-brand-600", bar: "bg-brand-500" },
  { chip: "bg-amber-500/10 text-amber-600", bar: "bg-amber-500" },
  { chip: "bg-teal-500/10 text-teal-600", bar: "bg-teal-500" },
  { chip: "bg-brand-500/10 text-brand-600", bar: "bg-brand-500" },
];

const modules = [
  {
    icon: FileSignature,
    title: "قرارداد و خرید",
    desc: "ثبت قرارداد با تحویل‌دهنده، مقدار، نرخ و پیگیری میزان اجرای هر قرارداد بدون فوت وقت",
    badge: "بازرگانی",
  },
  {
    icon: Truck,
    title: "حمل و بارنامه",
    desc: "تخصیص تانکر و راننده، صدور اسناد بین‌المللی حمل (CMR) و پیگیری محموله در مسیر",
    badge: "ناوگان",
  },
  {
    icon: Container,
    title: "مخزن و ذخیره‌سازی",
    desc: "موجودی لحظه‌ای هر مخزن به تفکیک محصول، ثبت تخلیه و ورود با اتصال به باسکول",
    badge: "انبارداری",
  },
  {
    icon: Fuel,
    title: "کسری و افت سوخت",
    desc: "ثبت تفاوت بارگیری و تخلیه، تفکیک افت استاندارد از کسری بار در طول مسیر",
    badge: "کنترل کیفیت",
  },
  {
    icon: ShoppingCart,
    title: "فروش و قیمت‌گذاری",
    desc: "فروش نقدی و اعتباری از موجودی مخازن، با نرخ‌گذاری منعطف و سقف اعتبار مشتری",
    badge: "فروش",
  },
  {
    icon: Receipt,
    title: "مصارف محموله",
    desc: "کرایه تانکر، گمرک، باسکول و دموراژ مسیر روی همان محموله برای بهای تمام‌شده واقعی",
    badge: "هزینه‌یابی",
  },
  {
    icon: Users,
    title: "حساب مشتریان",
    desc: "مانده حساب، کنترل بدهی، سقف اعتبار و صورت‌حساب هر خریدار و تحویل‌دهنده در لحظه",
    badge: "ارتباطات",
  },
  {
    icon: Handshake,
    title: "حساب شرکا",
    desc: "تعریف درصد شراکت، محاسبه خودکار سهم هر شریک از سود خالص هر محموله بدون اختلاف",
    badge: "شراکت",
  },
  {
    icon: Banknote,
    title: "دریافت، پرداخت و چند ارزی",
    desc: "ثبت تراکنش‌ها با دالر، افغانی و تومان با نرخ تبدیل روز، مدیریت صندوق، صرافی و بانک",
    badge: "خزانه‌داری",
  },
  {
    icon: TrendingDown,
    title: "بهای تمام‌شده واقعی",
    desc: "محاسبه کامپیوتری بهای تمام‌شده هر لیتر و تن از روی اسناد و بارنامه‌های واقعی",
    badge: "حسابداری صنعتی",
  },
  {
    icon: PieChart,
    title: "سود و زیان محموله",
    desc: "گزارش سود و زیان بلافاصله پس از تخلیه هر محموله، بدون معطلی تا پایان دوره مالی",
    badge: "سودآوری",
  },
  {
    icon: LayoutDashboard,
    title: "داشبورد تصمیم‌گیری",
    desc: "نمای جامع شاخص‌های حیاتی شرکت، تراز لحظه‌ای و هشدارهای سررسید برای مدیران",
    badge: "هوش تجاری",
  },
];

export default function Modules() {
  return (
    <section id="modules" className="relative bg-white py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="ماژول‌های تخصصی"
          title="تمام زنجیره عملیات نفتی،"
          highlight="در یک بستر یکپارچه"
          desc="هر رویداد — از امضای قرارداد در کابل یا هرات تا تحویل در پمپ‌استیشن — به همان شناسه محموله متصل است تا حساب‌ها صددرصد شفاف بماند."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {modules.map((m, i) => {
            const a = accents[i % accents.length];
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -7 }}
                className="group card-soft relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-brand-900/20 fa-num transition-colors group-hover:text-brand-500/70">
                    {faNum(String(i + 1).padStart(2, "0"))}
                  </span>
                  <span className="rounded-md bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-800/70 ring-1 ring-brand-900/10">
                    {m.badge}
                  </span>
                </div>

                <span
                  className={`my-4 grid h-13 w-13 place-items-center rounded-2xl ${a.chip} transition-transform duration-300 group-hover:scale-110`}
                >
                  <m.icon className="h-6 w-6" strokeWidth={1.9} />
                </span>

                <h3 className="text-lg font-black text-brand-950 group-hover:text-brand-600">
                  {m.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-brand-900/65">{m.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
