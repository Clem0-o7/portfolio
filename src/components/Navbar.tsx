"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/garden", label: "Garden" },
  { href: "/#publications", label: "Publications" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl border-b shadow-sm"
            : "bg-transparent"
        }`}
        style={{
          backgroundColor: scrolled ? "var(--bg-overlay)" : "transparent",
          borderColor: "var(--border-primary)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span
                className="text-xl font-bold tracking-tight transition-colors duration-200"
                style={{ color: "var(--accent-primary)" }}
              >
                ✦
              </span>
              <span
                className="text-lg font-bold tracking-tight transition-colors duration-200 group-hover:opacity-80"
                style={{ color: "var(--text-primary)" }}
              >
                CLEMO.IN
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              ))}

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="relative w-9 h-9 flex items-center justify-center rounded-md transition-colors duration-200 hover:opacity-80"
                style={{
                  border: "1px solid var(--border-primary)",
                  background: "var(--bg-card)",
                  color: "var(--text-secondary)",
                }}
                aria-label="Toggle theme"
              >
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm"
                >
                  {theme === "dark" ? "☀" : "☾"}
                </motion.span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-md transition-colors duration-200"
                style={{
                  border: "1px solid var(--border-primary)",
                  background: "var(--bg-card)",
                  color: "var(--text-secondary)",
                }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? "☀" : "☾"}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-md transition-colors duration-200"
                style={{
                  border: "1px solid var(--border-primary)",
                  background: "var(--bg-card)",
                  color: "var(--text-secondary)",
                }}
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={{ rotate: mobileOpen ? 45 : 0 }}
                  className="text-lg leading-none"
                >
                  {mobileOpen ? "✕" : "☰"}
                </motion.span>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 pt-16 md:hidden"
            style={{ backgroundColor: "var(--bg-overlay)", backdropFilter: "blur(16px)" }}
          >
            <div className="flex flex-col items-center gap-1 p-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className="block py-3 px-6 text-center text-lg transition-colors duration-200 rounded-md"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--text-primary)",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
