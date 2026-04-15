"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Particles() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const count = isMobile ? 15 : 40;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.3 + 0.1;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-muted-sage"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              opacity,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [opacity, opacity * 1.5, opacity],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

function GlowOrbs() {
  const orbs = [
    { color: "#2E4535", x: "20%", y: "30%", size: 300 },
    { color: "#5D6C74", x: "70%", y: "60%", size: 250 },
    { color: "#4A3A2A", x: "50%", y: "80%", size: 200 },
    { color: "#6C8274", x: "80%", y: "20%", size: 180 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-[0.07]"
          style={{
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.07, 0.12, 0.07],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const headlineWords1 = ["Code.", "Create."];
const headlineWords2 = ["Disrupt."];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <GlowOrbs />
      <Particles />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 md:gap-x-5">
            {headlineWords1.map((word, i) => (
              <motion.span
                key={`l1-${i}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 md:gap-x-5 mt-1 sm:mt-2">
            {headlineWords2.map((word, i) => (
              <motion.span
                key={`l2-${i}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5 + i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="font-mono text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase text-text-secondary"
        >
          Developer & Builder
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-text-secondary/60">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-text-secondary/60"
          >
            <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
