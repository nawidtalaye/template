import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, highlight, desc, center = true }) {
  return (
    <div className={`mb-14 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-bold tracking-wide text-brand-600 ring-1 ring-brand-500/25">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
          </span>
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 text-3xl font-extrabold leading-[1.4] text-brand-900 sm:text-4xl lg:text-[2.5rem]">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-lg leading-8 text-brand-900/60">{desc}</p>
        </Reveal>
      )}
    </div>
  );
}