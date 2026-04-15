"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { skills } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <ScrollReveal>
            <h2 className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-text-secondary mb-4">
              About
            </h2>
          </ScrollReveal>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="h-px bg-gradient-to-r from-accent/60 via-accent/20 to-transparent origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-3 space-y-5 sm:space-y-6">
            <ScrollReveal>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed">
                I&apos;m <span className="text-text-primary font-semibold">SAVAGE✰</span> — a
                developer and builder shipping from the edge of Web3. I write Python, TypeScript,
                and Rust to construct the tools that others rely on — trading bots, DeFi protocols,
                NFT snipers, prediction market engines, and whatever automation the moment demands.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed">
                My days are spent deep in Solana programs and Next.js dashboards, wiring up
                on-chain data to real-time interfaces. I build things that move fast, execute
                precisely, and survive in adversarial environments. If there&apos;s alpha to be
                extracted or a system to be outpaced, I&apos;m writing the code.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed">
                I believe in building relentlessly and shipping ruthlessly. The craft demands nothing
                less. But between the sprints and the deploys, I explore the other side — atmospheric
                visuals, cinematic motion pieces, creative experiments where technology meets art.
                Projects like Serene Drift are the exhale between builds.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed">
                A true warrior has no enemies — only problems left unsolved. Each repo is a new
                frontier, each smart contract a new puzzle, each deploy a small victory in the
                longer war of building something that matters.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <blockquote className="mt-8 sm:mt-10 pl-4 sm:pl-6 border-l-2 border-accent/40">
                <p className="text-sm sm:text-base md:text-lg italic text-text-secondary/80 leading-relaxed">
                  &ldquo;You have no enemies. No one in this world is your enemy.&rdquo;
                </p>
                <cite className="block mt-2 font-mono text-[10px] sm:text-xs tracking-wider text-text-secondary/50 not-italic">
                  — Thors Snorresson
                </cite>
              </blockquote>
            </ScrollReveal>
          </div>

          <div className="md:col-span-2">
            <ScrollReveal delay={0.2}>
              <h3 className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-text-secondary/60 mb-6">
                Skills & Tools
              </h3>
            </ScrollReveal>
            <div className="space-y-1">
              {skills.map((skill, i) => (
                <ScrollReveal key={skill} delay={0.25 + i * 0.08}>
                  <div className="group flex items-center gap-3 py-3 border-b border-white/[0.04] hover:border-accent/20 transition-colors duration-300">
                    <div className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-300" />
                    <span className="text-sm sm:text-base text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
