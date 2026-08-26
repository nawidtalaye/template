import { Building2 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const clients = [
  "شرکت واردات نفتیار غرب",
  "گروه انرژی آریانا",
  "تانک تیل هرات",
  "پترو تجارت خراسان",
  "شرکت لجستیک ابریشم",
  "گاز و انرژی پامیر",
  "نفت گستر باختر",
  "ترمینال سوخت آمو",
  "پمپ استیشن صداقت",
  "شرکت توزیع سوخت اتحاد",
];

export default function Clients() {
  return (
    <section className="tint relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="مشتریان ما"
          title="شرکت‌هایی که به"
          highlight="نفت‌یار اعتماد کرده‌اند"
        />
      </div>

      {/* مارکی — دقیقاً مثل ردیف لوگوهای مشتریان نواتیک */}
      <div className="relative space-y-5 overflow-hidden [mask-image:linear-gradient(to_left,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-5" style={{ direction: "ltr" }}>
          {[...clients, ...clients].map((c, i) => (
            <div
              key={i}
              className="card-soft flex items-center gap-3 rounded-2xl px-8 py-4 whitespace-nowrap"
              style={{ direction: "rtl" }}
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500/10">
                <img src="logos/image1.png" alt="Logo" />
              </span>
              <span className="font-bold text-brand-900/80">{c}</span>
            </div>
          ))}
        </div>
        <div
          className="flex w-max animate-marquee gap-5 [animation-direction:reverse]"
          style={{ direction: "ltr" }}
        >
          {[...clients].reverse().concat([...clients].reverse()).map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl border border-brand-500/15 bg-white/70 px-8 py-4 whitespace-nowrap"
              style={{ direction: "rtl" }}
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500/10">
                <img src="logos/image1.png" alt="" />
              </span>
              <span className="font-bold text-brand-900/60">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}