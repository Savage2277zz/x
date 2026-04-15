"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { project, projectColors } from "@/lib/constants";

function SectionTitle() {
  return (
    <div className="mb-12 sm:mb-16 md:mb-20">
      <ScrollReveal>
        <h2 className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-text-secondary mb-4">
          Featured Project
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
  );
}

function VideoPlayer() {
  return (
    <ScrollReveal className="mb-8 sm:mb-10 md:mb-12">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl group"
      >
        <div className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: "0 0 60px rgba(108, 130, 116, 0.15), 0 0 120px rgba(108, 130, 116, 0.05)",
          }}
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full aspect-video object-cover"
        >
          <source src={project.videoSrc} type="video/mp4" />
        </video>
      </motion.div>
    </ScrollReveal>
  );
}

function Tags() {
  return (
    <ScrollReveal delay={0.1}>
      <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
        {project.tags.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            className="font-mono text-[10px] sm:text-xs tracking-wider uppercase px-3 py-1.5 rounded-full border border-accent/30 text-text-secondary hover:border-accent/60 hover:text-accent transition-colors duration-300"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </ScrollReveal>
  );
}

function TechniqueGrid() {
  return (
    <ScrollReveal delay={0.2} className="mb-8 sm:mb-10">
      <h3 className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-text-secondary/60 mb-4">
        Techniques
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
        {project.techniques.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            className="flex items-center gap-3 px-3 sm:px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-accent/20 transition-colors duration-300"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
            <span className="text-sm text-text-secondary">{tech}</span>
          </motion.div>
        ))}
      </div>
    </ScrollReveal>
  );
}

function ColorPalette() {
  return (
    <ScrollReveal delay={0.3} className="mb-8 sm:mb-10">
      <h3 className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-text-secondary/60 mb-4">
        Color Palette
      </h3>
      <div className="flex flex-wrap gap-4 sm:gap-6">
        {projectColors.map((color, i) => (
          <motion.div
            key={color.hex}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            className="flex flex-col items-center gap-2"
          >
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 shadow-lg"
              style={{ backgroundColor: color.hex }}
            />
            <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-text-secondary/60 text-center">
              {color.name}
            </span>
          </motion.div>
        ))}
      </div>
    </ScrollReveal>
  );
}

function MoodDisplay() {
  return (
    <ScrollReveal delay={0.4}>
      <h3 className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-text-secondary/60 mb-3">
        Mood
      </h3>
      <p className="text-sm sm:text-base text-text-secondary italic tracking-wide">
        {project.mood}
      </p>
    </ScrollReveal>
  );
}

export default function ProjectShowcase() {
  return (
    <section id="work" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle />

        <VideoPlayer />

        <div className="space-y-2">
          <ScrollReveal>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3">
              {project.title}
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-3xl mb-8 sm:mb-10">
              {project.description}
            </p>
          </ScrollReveal>

          <Tags />
          <TechniqueGrid />
          <ColorPalette />
          <MoodDisplay />
        </div>
      </div>
    </section>
  );
}
