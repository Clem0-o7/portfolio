"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

// Data matching the digital_garden.html file
const gardenData = [
  {
    category: "Flowers & Garden",
    items: [
      { name: "Sunflower", file: "sunflower.svg", quote: '"Always looking for the light."', tags: [{ label: "Nature", cls: "tag-gold" }, { label: "Garden", cls: "tag-emerald" }] },
      { name: "Night Rose", file: "rose.svg", quote: '"Blooming quietly in the dark."', tags: [{ label: "Flower", cls: "tag-rose" }, { label: "Magic", cls: "tag-purple" }] },
      { name: "Lotus", file: "lotus.svg", quote: '"Resting gently on still waters."', tags: [{ label: "Water", cls: "tag-blue" }, { label: "Serene", cls: "tag-rose" }] },
      { name: "Tulip", file: "tulip.svg", quote: '"A gentle spark of crimson."', tags: [{ label: "Spring", cls: "tag-rose" }, { label: "Flora", cls: "tag-emerald" }] },
      { name: "Wisteria", file: "wisteria.svg", quote: '"Cascading amethyst dreams."', tags: [{ label: "Hanging", cls: "tag-purple" }, { label: "Tree", cls: "tag-emerald" }] },
      { name: "Flower Patch", file: "flower-patch.svg", quote: '"Little joys growing together."', tags: [{ label: "Grass", cls: "tag-emerald" }, { label: "Wild", cls: "tag-gold" }] },
      { name: "Floating Petals", file: "floating-petals.svg", quote: '"Carried by a phantom breeze."', tags: [{ label: "Air", cls: "tag-rose" }, { label: "Motion", cls: "tag-purple" }] },
    ]
  },
  {
    category: "Night & Magic",
    items: [
      { name: "Firefly", file: "firefly.svg", quote: '"A tiny lantern in the dark."', tags: [{ label: "Bug", cls: "tag-emerald" }, { label: "Glow", cls: "tag-gold" }] },
      { name: "Firefly Swarm", file: "firefly-swarm.svg", quote: '"A constellation brought to earth."', tags: [{ label: "Swarm", cls: "tag-emerald" }, { label: "Night", cls: "tag-purple" }] },
      { name: "Twinkling Star", file: "twinkling-star.svg", quote: '"Always watching from afar."', tags: [{ label: "Cosmos", cls: "tag-gold" }, { label: "Sky", cls: "tag-purple" }] },
      { name: "Pixel Sparkle", file: "pixel-sparkle.svg", quote: '"A glitch in the magical matrix."', tags: [{ label: "Effect", cls: "tag-rose" }, { label: "Retro", cls: "tag-sky" }] },
      { name: "Shooting Star", file: "shooting-star.svg", quote: '"Make a wish, quick."', tags: [{ label: "Space", cls: "tag-blue" }, { label: "Wish", cls: "tag-gold" }] },
      { name: "Particle Cluster", file: "magic-particle-cluster.svg", quote: '"Raw energy taking form."', tags: [{ label: "Energy", cls: "tag-purple" }, { label: "Chaos", cls: "tag-rose" }] },
    ]
  },
  {
    category: "Water & Nature",
    items: [
      { name: "Water Ripple", file: "water-ripple.svg", quote: '"A pebble breaks the silence."', tags: [{ label: "River", cls: "tag-blue" }, { label: "Zen", cls: "tag-emerald" }] },
      { name: "Floating Leaf", file: "floating-leaf.svg", quote: '"Navigating the unseen currents."', tags: [{ label: "Flora", cls: "tag-emerald" }, { label: "Surface", cls: "tag-blue" }] },
      { name: "Falling Leaf", file: "falling-leaf.svg", quote: '"Gravity\'s gentle autumn pull."', tags: [{ label: "Autumn", cls: "tag-orange" }, { label: "Wind", cls: "tag-gold" }] },
      { name: "Mist Cloud", file: "mist-cloud.svg", quote: '"Shrouding the sleepy forest."', tags: [{ label: "Fog", cls: "tag-purple" }, { label: "Sky", cls: "tag-blue" }] },
      { name: "Gentle Rain", file: "gentle-rain.svg", quote: '"Washing the world clean."', tags: [{ label: "Weather", cls: "tag-blue" }, { label: "Life", cls: "tag-emerald" }] },
    ]
  },
  {
    category: "Forest",
    items: [
      { name: "Mushroom", file: "mushroom.svg", quote: '"A neon umbrella in the woods."', tags: [{ label: "Fungi", cls: "tag-emerald" }, { label: "Toxic", cls: "tag-purple" }] },
      { name: "Mushroom Cluster", file: "mushroom-cluster.svg", quote: '"A quiet neighborhood on a log."', tags: [{ label: "Spore", cls: "tag-purple" }, { label: "Moss", cls: "tag-gold" }] },
      { name: "Floating Spores", file: "floating-spores.svg", quote: '"Life searching for new soil."', tags: [{ label: "Wind", cls: "tag-emerald" }, { label: "Life", cls: "tag-purple" }] },
      { name: "Magic Grass", file: "small-magic-grass.svg", quote: '"Whispering secrets to the wind."', tags: [{ label: "Flora", cls: "tag-emerald" }, { label: "Glow", cls: "tag-gold" }] },
    ]
  },
  {
    category: "Digital Garden",
    items: [
      { name: "Magic Terminal", file: "magic-terminal.svg", quote: '"A window into the system."', tags: [{ label: "Tech", cls: "tag-sky" }, { label: "Code", cls: "tag-emerald" }] },
      { name: "Floating Code", file: "floating-code.svg", quote: '"Syntax escaping the compiler."', tags: [{ label: "Dev", cls: "tag-emerald" }, { label: "Matrix", cls: "tag-sky" }] },
      { name: "AI Orb", file: "ai-orb.svg", quote: '"Thinking... computing... dreaming."', tags: [{ label: "Brain", cls: "tag-blue" }, { label: "Core", cls: "tag-purple" }] },
      { name: "Magic Book", file: "magic-book.svg", quote: '"The documentation is alive."', tags: [{ label: "Lore", cls: "tag-gold" }, { label: "Docs", cls: "tag-rose" }] },
      { name: "Tiny Robot", file: "tiny-robot.svg", quote: '"Always ready to assist."', tags: [{ label: "Bot", cls: "tag-sky" }, { label: "Helper", cls: "tag-emerald" }] },
    ]
  }
];

export default function GardenClient() {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 w-full mb-16 mt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="inline-block mb-8 text-[var(--text-muted)] hover:text-[var(--accent-primary)] font-mono text-sm uppercase transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 uppercase text-[var(--accent-glow)]" style={{ fontFamily: "var(--font-heading)" }}>
            ✦ THE DIGITAL GARDEN ✦
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Small things that make my world move.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8 font-mono text-sm">
            <span className="px-3 py-1 bg-[var(--bg-card)] border border-[var(--border-secondary)] rounded shadow-sm text-[var(--text-primary)]"><span className="text-yellow-500 mr-2">🌻</span>Garden</span>
            <span className="px-3 py-1 bg-[var(--bg-card)] border border-[var(--border-secondary)] rounded shadow-sm text-[var(--text-primary)]"><span className="text-pink-500 mr-2">🌸</span>Flowers</span>
            <span className="px-3 py-1 bg-[var(--bg-card)] border border-[var(--border-secondary)] rounded shadow-sm text-[var(--text-primary)]"><span className="text-blue-400 mr-2">🪷</span>Water</span>
            <span className="px-3 py-1 bg-[var(--bg-card)] border border-[var(--border-secondary)] rounded shadow-sm text-[var(--text-primary)]"><span className="text-purple-400 mr-2">✨</span>Magic</span>
            <span className="px-3 py-1 bg-[var(--bg-card)] border border-[var(--border-secondary)] rounded shadow-sm text-[var(--text-primary)]"><span className="text-green-500 mr-2">🤖</span>Digital</span>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-24 space-y-24 flex-grow">
        {gardenData.map((section, sIdx) => (
          <section key={section.category}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="section-ribbon">
                {section.category}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {section.items.map((item, iIdx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: iIdx * 0.1, duration: 0.5 }}
                  className="pixel-card flex flex-col h-full group"
                >
                  <div className="h-48 w-full relative bg-black/5 overflow-hidden flex items-center justify-center p-4">
                    {/* SVG Object Embed */}
                    <object
                      data={`/animations/${item.file}`}
                      type="image/svg+xml"
                      className="w-full h-full pointer-events-none transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold uppercase mb-2 text-[var(--text-primary)] tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                      {item.name}
                    </h3>
                    <p className="text-sm italic flex-1 text-[var(--text-muted)] leading-relaxed">
                      {item.quote}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag.label} className={`tag ${tag.cls}`}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
