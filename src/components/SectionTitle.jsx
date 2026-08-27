import Reveal from "./Reveal";
import SignatureDecoration from "./SignatureDecoration";

export default function SectionTitle({ eyebrow, title, highlight, desc, center = true, showSignature = true }) {
  return (
    <div className={`mb-14 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50/80 px-4 py-1.5 text-sm font-bold tracking-wide text-brand-700 ring-1 ring-brand-500/20">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 text-3xl font-black leading-[1.4] text-brand-950 sm:text-4xl lg:text-[2.5rem]">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {showSignature && (
        <Reveal delay={0.15}>
          <SignatureDecoration className={center ? "mx-auto my-3" : "my-3"} />
        </Reveal>
      )}
      {desc && (
        <Reveal delay={0.2}>
          <p className="mt-3 text-lg leading-8 text-brand-900/65">{desc}</p>
        </Reveal>
      )}
    </div>
  );
}
