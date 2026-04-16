"use client";

import { useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(count, target, { duration, ease: "easeOut" });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, target, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <div ref={containerRef}>
      <span ref={ref}>0</span>
    </div>
  );
}

const stats = [
  { value: 3, suffix: "+", label: "Projects" },
  { value: 4, suffix: "", label: "Languages" },
  { value: 6, suffix: "+", label: "Tools" },
  { status: true, label: "Status" },
];

export default function StatsBar() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  i > 0 ? "md:border-l" : ""
                }`}
                style={i > 0 ? { borderColor: "var(--accent-gold-dim)" } : undefined}
              >
                {stat.status ? (
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse-gold"
                      style={{ background: "var(--accent-gold)" }}
                    />
                    <span
                      className="font-display text-[36px] md:text-[56px] leading-none"
                      style={{ color: "var(--accent-gold)" }}
                    >
                      AVAILABLE
                    </span>
                  </div>
                ) : (
                  <span
                    className="font-display text-[36px] md:text-[56px] leading-none"
                    style={{ color: "var(--accent-gold)" }}
                  >
                    <CountUp target={stat.value!} />
                    {stat.suffix}
                  </span>
                )}
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-tertiary mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
