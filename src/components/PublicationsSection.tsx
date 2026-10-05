"use client";

import { motion, Variants } from "framer-motion";

const publications = [
  {
    title: "AI-Driven Resume Matching & Recommendation System",
    conference: "MIT-AU ICETE 2026 (DOI: 10.25397/ff1m-m244)",
    description: "Fine-tuned small LLMs to normalize resume data before semantic retrieval using FAISS and ChromaDB. Evaluated retrieval pipeline using ranking metrics.",
    date: "2026",
    link: "https://mit.intersearch.com.au/entities/publication/bb5ea6d4-527f-4214-841f-7649414e8d99"
  },
  {
    title: "Real-Time Traffic Light Timing Optimisation Using Reinforcement Learning",
    conference: "IEEE SCEECS 2025 (DOI: 10.1109/SCEECS64059.2025.10940668)",
    description: "Built a PyTorch RL agent interacting with SUMO via TraCI to optimize traffic-signal timing based on simulated traffic state, reducing vehicle waiting time.",
    date: "2025",
    link: "https://ieeexplore.ieee.org/document/10940668"
  },
  {
    title: "Plastic Type Classification for Edge Devices Without Internet",
    conference: "IEEE SCEECS 2025 (DOI: 10.1109/SCEECS64059.2025.10940435)",
    description: "Trained an image classifier for plastic categories and converted the model to TensorFlow Lite for offline edge inference without connectivity.",
    date: "2025",
    link: "https://ieeexplore.ieee.org/document/10940435"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)] scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-ribbon">Publications & Writing</div>
          <p className="mt-6 text-base sm:text-lg" style={{ color: "var(--text-secondary)" }}>
            Research papers, technical articles, and conference talks.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {publications.map((pub, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <a
                href={pub.link}
                className="block p-6 transition-all duration-300 rounded-md group hover:bg-[var(--bg-card)] border-l-2 border-transparent hover:border-[var(--accent-primary)] hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors duration-200" style={{ fontFamily: "var(--font-heading)" }}>
                    {pub.title}
                  </h3>
                  <span className="text-sm font-mono text-[var(--text-muted)] shrink-0">
                    {pub.date}
                  </span>
                </div>
                <div className="mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-secondary)]">
                    {pub.conference}
                  </span>
                </div>
                <p className="text-sm md:text-base text-[var(--text-secondary)]">
                  {pub.description}
                </p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
