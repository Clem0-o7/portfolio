"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-[var(--border-primary)] bg-[var(--bg-card)] pt-16 pb-8 overflow-hidden">
      {/* Decorative scanline overlay specifically for footer to give it that retro vibe */}
      <div className="absolute inset-0 pointer-events-none opacity-20 scanlines" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight text-[var(--text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Let's Connect
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-md">
              I'm currently available for freelance work, open source collaboration, and interesting technical challenges. Drop me a line if you'd like to build something great together.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:clementandrewoff@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--accent-primary)] text-[var(--text-inverse)] font-bold text-sm uppercase tracking-wider rounded transition-all hover:bg-[var(--accent-glow)] hover:scale-105 hover:shadow-[var(--shadow-glow)]"
              >
                Send Message
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end justify-center gap-4">
            <a href="https://github.com/Clem0-o7" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] font-mono text-sm uppercase transition-colors">
              [ GitHub ]
            </a>
            <a href="https://www.linkedin.com/in/clement-andrew-" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] font-mono text-sm uppercase transition-colors">
              [ LinkedIn ]
            </a>
            <a href="https://clemo.in" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] font-mono text-sm uppercase transition-colors">
              [ Personal Site ]
            </a>
            <a href="/garden" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] font-mono text-sm uppercase transition-colors">
              [ Digital Garden ]
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--border-secondary)]">
          <p className="text-[var(--text-muted)] text-sm font-mono mb-4 md:mb-0">
            © {new Date().getFullYear()} Clement Andrew A. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm font-mono">
            Crafted with <span className="text-[var(--accent-primary)]">♥</span> and <span className="text-[var(--accent-primary)]">Retro Vibes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
