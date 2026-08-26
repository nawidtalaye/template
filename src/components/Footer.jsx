import { Flame, Phone, Mail, MapPin } from "lucide-react";
import { faNum } from "../lib/utils";

const productLinks = [
  { label: "ماژول‌های سیستم", href: "#modules" },
  { label: "مسیر کار", href: "#workflow" },
  { label: "نمای سیستم", href: "#showcase" },
  { label: "چرا نفت‌یار", href: "#features" },
];

const companyLinks = [
  { label: "مشتریان ما", href: "#testimonials" },
  { label: "درخواست دمو", href: "#contact" },
  { label: "تماس با ما", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-flame-500 to-flame-600 shadow-lg shadow-flame-500/25">
                <Flame className="h-5.5 w-5.5 text-white" strokeWidth={2.4} />
              </span>
              <span>
                <span className="block text-xl font-extrabold text-white">نفت‌یار</span>
                <span className="block text-xs text-slate-400">سامانه مدیریت نفت و گاز</span>
              </span>
            </a>
            <p className="mt-5 max-w-md leading-8 text-slate-400">
              نرم‌افزار اختصاصی مدیریت عملیات شرکت‌های واردکننده و توزیع‌کننده مواد نفتی؛
              از قرارداد و بارگیری تا مخزن، فروش، مصارف و گزارش سود و زیان هر محموله.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-extrabold text-white">محصول</h4>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-slate-400 transition hover:text-flame-400">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-extrabold text-white">ارتباط با ما</h4>
            <ul className="space-y-3 text-slate-400">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition hover:text-flame-400">
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2 pt-1">
                <Phone className="h-4 w-4 text-flame-500" />
                <span className="fa-num" style={{ direction: "ltr" }}>+۹۳ ۷۰ ۰۰۰ ۰۰۰۰</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-flame-500" />
                <span style={{ direction: "ltr" }}>info@naftyar.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-flame-500" />
                هرات، افغانستان
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-sm text-slate-500 sm:flex-row">
          <p className="fa-num">© {faNum(1404)} نفت‌یار — تمامی حقوق محفوظ است.</p>
          <p>ساخته‌شده با دقت برای صنعت نفت و گاز</p>
        </div>
      </div>
    </footer>
  );
}
