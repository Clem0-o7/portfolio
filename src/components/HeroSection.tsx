"use client";

import { motion } from "framer-motion";
import ASCIIEffect from "./ASCIIEffect";
import { useTheme } from "./ThemeProvider";

const LINKS = [
  { label: "GITHUB", url: "https://github.com/Clem0-o7", icon: "👾" },
  { label: "LINKEDIN", url: "https://linkedin.com/in/clement-andrew-", icon: "💼" },
  { label: "EMAIL", url: "mailto:clementandrewoff@gmail.com", icon: "📧" },
  { label: "CLEMO.IN", url: "https://clemo.in", icon: "🌐" },
  { label: "TECHUTSAV", url: "https://techutsav.clemo.in", icon: "🎟️" },
  { label: "TUS-ADMIN", url: "https://tus-admin.clemo.in", icon: "⚙️" },
  { label: "CTF", url: "https://ctf.clemo.in", icon: "🚩" },
];

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(ellipse at top, rgba(30, 58, 138, 0.08), var(--bg-primary) 70%)"
              : "radial-gradient(ellipse at top, rgba(254, 243, 199, 0.4), var(--bg-primary) 70%)",
        }}
      />

      {/* Decorative floating SVGs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5">
        <motion.img
          src="/animations/firefly.svg"
          alt=""
          className="absolute w-12 h-12 opacity-40"
          style={{ top: "15%", left: "8%" }}
          animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src="/animations/twinkling-star.svg"
          alt=""
          className="absolute w-10 h-10 opacity-30"
          style={{ top: "25%", right: "12%" }}
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.img
          src="/animations/floating-petals.svg"
          alt=""
          className="absolute w-16 h-16 opacity-25"
          style={{ bottom: "20%", left: "15%" }}
          animate={{ y: [0, -15, 0], x: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.img
          src="/animations/pixel-sparkle.svg"
          alt=""
          className="absolute w-8 h-8 opacity-35"
          style={{ top: "60%", right: "8%" }}
          animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.img
          src="/animations/shooting-star.svg"
          alt=""
          className="absolute w-14 h-14 opacity-20 hidden sm:block"
          style={{ top: "10%", right: "30%" }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* ASCII Art Hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <ASCIIEffect
          className="h-[220px] sm:h-[260px] md:h-[300px]"
          fontSize={11}
          color={theme === "dark" ? "#f59e0b" : "#b45309"}
          glowColor={theme === "dark" ? "#fbbf24" : "#f59e0b"}
        />
      </motion.div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center px-4 mt-6"
      >
        <p
          className="text-lg sm:text-xl md:text-2xl font-light tracking-wide"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
        >
          Full-Stack Developer{" "}
          <span style={{ color: "var(--accent-primary)" }}>·</span>{" "}
          AI Enthusiast{" "}
          <span style={{ color: "var(--accent-primary)" }}>·</span>{" "}
          Irregul@r
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-4 text-sm max-w-xl mx-auto"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          <span className="animate-blink" style={{ color: "var(--accent-glow)" }}>
            █
          </span>{" "}
          crafting digital experiences with code, creativity & a touch of magic
        </motion.p>
      </motion.div>

      {/* Marquee Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="w-full max-w-5xl mx-auto mt-10 overflow-hidden relative"
      >
        {/* Gradient fades for the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-marquee gap-4 py-2 hover:[animation-play-state:paused]">
          {/* Duplicate the array 4 times for seamless scrolling even on ultrawides */}
          {[...LINKS, ...LINKS, ...LINKS, ...LINKS].map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-secondary)] rounded-md hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:scale-105 transition-all shadow-sm"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-secondary)" }}
            >
              <span className="opacity-80">{link.icon}</span>
              <span className="font-bold tracking-wider">{link.label}</span>
            </a>
          ))}
        </div>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex flex-wrap gap-4 mt-8 px-4 justify-center"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm uppercase tracking-wider rounded transition-all duration-300 hover:translate-y-[-2px]"
          style={{
            fontFamily: "var(--font-heading)",
            background: "var(--accent-primary)",
            color: "var(--text-inverse)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          View Projects ↓
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm uppercase tracking-wider rounded transition-all duration-300 hover:translate-y-[-2px]"
          style={{
            fontFamily: "var(--font-heading)",
            border: "2px solid var(--border-accent)",
            color: "var(--accent-primary)",
            background: "transparent",
          }}
        >
          Get In Touch
        </a>
      </motion.div>

      {/* Scroll indicator
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ color: "var(--text-muted)" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div> */}
    </section>
  );
}
