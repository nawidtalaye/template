import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, highlight, desc, dark = true }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide ${
            dark
              ? "bg-flame-500/10 text-flame-400 ring-1 ring-flame-500/25"
              : "bg-flame-500/10 text-flame-600 ring-1 ring-flame-500/30"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame-500 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-flame-500" />
          </span>
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={`mt-5 text-3xl font-extrabold leading-[1.35] sm:text-4xl lg:text-[2.6rem] ${
            dark ? "text-white" : "text-ink-900"
          }`}
        >
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.2}>
          <p className={`mt-5 text-lg leading-8 ${dark ? "text-slate-400" : "text-slate-600"}`}>
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  );
}
