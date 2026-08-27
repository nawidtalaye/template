import { Flame, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { faNum } from "../lib/utils";

const productLinks = [
  { label: "ماژول‌های سیستم", href: "#modules" },
  { label: "مسیر کار", href: "#workflow" },
  { label: "نمای سیستم", href: "#showcase" },
  { label: "چرا نفت‌یار (داستان تحول)", href: "#features" },
];

const companyLinks = [
  { label: "مشتریان و نظرات", href: "#testimonials" },
  { label: "درخواست جلسه دمو", href: "#contact" },
  { label: "تماس با کارشناسان نواتیک", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-600 shadow-lg shadow-black/20">
                <Flame className="h-6 w-6 text-amber-400" strokeWidth={2.3} />
              </span>
              <span>
                <span className="block text-xl font-black text-white">
                  نفت<span className="text-amber-400">یار</span>
                </span>
                <span className="block text-xs font-semibold text-brand-100/60">
                  سامانه مدیریت و عملیات نفت و گاز
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-8 text-brand-100/70">
              نرم‌افزار اختصاصی مدیریت عملیات شرکت‌های واردکننده و توزیع‌کننده مواد نفتی؛
              از قرارداد و بارگیری تا مخزن، فروش، مصارف و گزارش سود و زیان هر محموله.
            </p>
            <div className="mt-4">
              <a
                href="https://novatechsoft.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 transition hover:text-amber-300"
              >
                <span>طراحی و توسعه توسط شرکت نرم‌افزاری نواتیک</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-base font-black text-white">ماژول‌ها و بخش‌ها</h4>
            <ul className="space-y-3 text-sm">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-brand-100/70 transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-black text-white">ارتباط و استقرار</h4>
            <ul className="space-y-3 text-sm text-brand-100/70">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2 pt-1 text-white">
                <Phone className="h-4 w-4 text-amber-400" />
                <span className="fa-num font-bold" style={{ direction: "ltr" }}>+۹۳ ۷۰ ۲ ۰۰ ۸۴ ۵۴</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-400" />
                <span style={{ direction: "ltr" }}>info@novatechsoft.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-400" />
                هرات، افغانستان — شرکت نواتیک
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-brand-100/50 sm:flex-row">
          <p className="fa-num">© {faNum(1404)} نفت‌یار • شرکت تکنالوژی و نرم‌افزاری نواتیک. تمامی حقوق محفوظ است.</p>
          <p>سیستم اختصاصی شرکت‌های واردات و توزیع سوخت</p>
        </div>
      </div>
    </footer>
  );
}
