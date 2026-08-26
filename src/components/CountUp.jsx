import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { faNum } from "../lib/utils";

export default function CountUp({ to, duration = 2, suffix = "", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={`fa-num ${className}`}>
      {faNum(val.toLocaleString("en-US").replace(/,/g, "،"))}
      {suffix}
    </span>
  );
}