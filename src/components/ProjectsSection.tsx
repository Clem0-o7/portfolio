"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tags: { label: string; variant: string }[];
  icon: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "ShardSearch",
    description:
      "A distributed search engine with partitioned document storage, sharded inverted indexes, and concurrent scatter-gather query execution. Features BM25 retrieval and an MS MARCO-trained reranker.",
    tags: [
      { label: "Java & Spring", variant: "tag-emerald" },
      { label: "Distributed", variant: "tag-purple" },
      { label: "Search Engine", variant: "tag-sky" },
    ],
    icon: "/animations/floating-code.svg",
    link: "https://github.com/Clem0-o7/shard-search",
  },
  {
    title: "TechUtsav Event Platform",
    description:
      "Full-stack platform managing a symposium for 850+ registrations. Supports participant workflows, QR-based check-in, secure document uploads to Azure, and a centralized admin dashboard.",
    tags: [
      { label: "Next.js", variant: "tag-blue" },
      { label: "MongoDB", variant: "tag-gold" },
      { label: "Azure", variant: "tag-sky" },
    ],
    icon: "/animations/magic-book.svg",
    link: "https://techutsav.clemo.in",
  },
  {
    title: "IE-CTF Web Fundamentals",
    description:
      "A gamified web-security platform used by 150+ students. Features server-side challenge verification, persistent progress tracking, and hands-on HTTP tasks.",
    tags: [
      { label: "TypeScript", variant: "tag-blue" },
      { label: "PostgreSQL", variant: "tag-emerald" },
      { label: "Security", variant: "tag-rose" },
    ],
    icon: "/animations/magic-terminal.svg",
    link: "https://ctf.clemo.in",
  },
  {
    title: "AI Interview Mocker",
    description:
      "Interview-preparation application integrating Google Gemini for AI-driven feedback. Features speech-to-text recording, webcam support, and persistent interview sessions.",
    tags: [
      { label: "Generative AI", variant: "tag-purple" },
      { label: "Next.js", variant: "tag-blue" },
      { label: "Speech-to-Text", variant: "tag-orange" },
    ],
    icon: "/animations/ai-orb.svg",
    link: "https://github.com/Clem0-o7/ai_interview_mocker",
  },
  {
    title: "Document Intelligence Pipeline",
    description:
      "An offline PDF heading/title extraction and RAG pipeline using PyMuPDF and relative formatting cues. Containerized for deterministic CPU-only execution.",
    tags: [
      { label: "Python", variant: "tag-emerald" },
      { label: "RAG", variant: "tag-purple" },
      { label: "Docker", variant: "tag-sky" },
    ],
    icon: "/animations/magic-particle-cluster.svg",
    link: "https://github.com/Clem0-o7/adobe-round1a",
  },
  {
    title: "Google Drive Upload Service",
    description:
      "An isolated Express.js microservice for media uploads. Supported a disposable-camera workflow that processed 2000+ photos for a live event.",
    tags: [
      { label: "Node.js", variant: "tag-gold" },
      { label: "Express", variant: "tag-emerald" },
      { label: "Microservices", variant: "tag-rose" },
    ],
    icon: "/animations/flower-patch.svg",
    link: "https://github.com/Clem0-o7/GdriveUploadBackend",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="section-ribbon">Featured Projects</div>
          <p
            className="mt-6 text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            A curated selection of projects spanning AI, creative coding, and developer tools.
          </p>
        </div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <div className="pixel-card flex flex-col h-full group">
                {/* Icon */}
                <div
                  className="h-48 w-full relative overflow-hidden flex items-center justify-center p-4"
                  style={{ background: "var(--bg-secondary)" }}
                >
                  <img
                    src={project.icon}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3
                    className="text-lg font-bold uppercase mb-2 tracking-wide"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm flex-1 leading-relaxed"
                    style={{
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag.label} className={`tag ${tag.variant}`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.link && (
                    <Link
                      href={project.link}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--accent-primary)",
                      }}
                    >
                      Explore →
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Link to garden page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="/garden"
            className="inline-flex items-center gap-3 px-8 py-4 rounded transition-all duration-300 hover:translate-y-[-2px] group"
            style={{
              fontFamily: "var(--font-heading)",
              border: "2px solid var(--border-accent)",
              color: "var(--accent-primary)",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <span>🌻</span>
            <span>Explore The Digital Garden</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
          <p
            className="mt-3 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            27 pixel art animations — flowers, forests, magic & more
          </p>
        </motion.div>
      </div>
    </section>
  );
}
