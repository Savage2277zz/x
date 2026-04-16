import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
      <span className="px-4 text-accent-gold-dim text-sm">◆</span>
      <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SectionDivider />
      <StatsBar />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Footer />
    </main>
  );
}
