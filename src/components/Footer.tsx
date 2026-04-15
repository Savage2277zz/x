"use client";

import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-text-secondary/50">
            <p className="font-mono text-[10px] sm:text-xs tracking-wider text-center sm:text-left">
              &copy; 2025 SAVAGE✰. All rights reserved.
            </p>
            <p className="font-mono text-[10px] sm:text-xs tracking-wider">
              Built with passion
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
