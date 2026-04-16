"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { projects } from "@/lib/constants";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-12 sm:mb-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-tertiary mb-4">
              {"// 01 — PROJECTS"}
            </p>
            <h2 className="font-display text-[32px] md:text-[48px] uppercase text-accent-gold">
              WHAT I BUILD
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1 + i * 0.1}>
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg overflow-hidden transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: "var(--bg-secondary)",
                  borderTop: "1px solid var(--accent-gold-dim)",
                  borderLeft: "1px solid var(--border-subtle)",
                  borderRight: "1px solid var(--border-subtle)",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
                whileHover={{
                  borderTopColor: "rgba(201, 168, 76, 0.6)",
                }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-[20px] text-text-primary">
                      {project.title}
                    </h3>
                    <ArrowRight
                      size={18}
                      className="text-text-tertiary opacity-0 group-hover:opacity-100 group-hover:text-accent-gold transition-all duration-200 mt-1 flex-shrink-0 ml-3"
                    />
                  </div>
                  <p className="font-mono text-[14px] text-text-secondary mt-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-5">
                    <span
                      className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-tertiary px-3 py-1 rounded-full"
                      style={{ border: "1px solid var(--border-subtle)" }}
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
