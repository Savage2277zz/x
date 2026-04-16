"use client";

import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

const stack = [
  {
    label: "LANGUAGES",
    color: "var(--accent-gold)",
    items: "Python, TypeScript, Rust, JavaScript",
  },
  {
    label: "BLOCKCHAIN & TOOLS",
    color: "var(--accent-ice)",
    items: "Solana, Web3.js, Anchor, DeFi Protocols",
  },
  {
    label: "FRAMEWORKS",
    color: "var(--accent-gold)",
    items: "Next.js, React, Tailwind CSS, Framer Motion",
  },
  {
    label: "INFRASTRUCTURE",
    color: "var(--accent-ice)",
    items: "Vercel, Docker, GitHub Actions, PostgreSQL, Redis",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-tertiary mb-12">
            {"// 02 — ABOUT"}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <p
                  className="font-mono text-[18px] leading-[1.8]"
                  style={{ color: "var(--text-primary)" }}
                >
                  I don&apos;t manage infrastructure. I build weapons.
                </p>
                <p
                  className="font-mono text-[15px] leading-[1.8]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Python and TypeScript by day, Rust and Solana by night.
                  <br />
                  The bots run. The market moves. I ship.
                </p>
                <p
                  className="font-mono text-[15px] leading-[1.8]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Crypto doesn&apos;t sleep. Neither does the code.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/avatar.jpg"
                    alt="SAVAGE✰"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-display text-text-primary text-[18px]">
                    SAVAGE✰
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="space-y-0">
                {stack.map((category, i) => (
                  <div
                    key={category.label}
                    className={`py-5 ${i > 0 ? "border-t" : ""}`}
                    style={i > 0 ? { borderColor: "var(--border-subtle)" } : undefined}
                  >
                    <span
                      className="font-mono text-[11px] uppercase tracking-[0.15em]"
                      style={{ color: category.color }}
                    >
                      {category.label}
                    </span>
                    <p className="font-mono text-[14px] text-text-secondary mt-2">
                      {category.items}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
