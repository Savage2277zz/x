"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { socials } from "@/lib/constants";

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  x: <XIcon />,
  github: <GitHubIcon />,
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <ScrollReveal>
            <h2 className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-text-secondary mb-4">
              Get in Touch
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

        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-8 sm:mb-10">
              Got an idea? Let&apos;s build it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <a
              href="mailto:savage27zzz@gmail.com"
              className="group inline-block mb-10 sm:mb-12"
            >
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300 break-all sm:break-normal">
                savage27zzz@gmail.com
              </span>
              <motion.div
                className="h-px bg-accent/40 mt-2 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-300 min-h-[44px] min-w-[44px]"
                >
                  <span className="transition-colors duration-300">
                    {iconMap[social.icon]}
                  </span>
                  <span className="font-mono text-sm tracking-wider">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
