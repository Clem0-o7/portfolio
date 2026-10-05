# clemo.in - Digital Garden Portfolio

A visually stunning, retro-inspired developer portfolio and digital garden for Clement Andrew A. Built with Next.js (App Router), Tailwind CSS, Framer Motion, and a custom CSS variable-based design system.

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Theme System

The design system relies on CSS Custom Properties defined entirely in `src/app/globals.css`. 
The `ThemeProvider` injects `data-theme="light"` or `data-theme="dark"` directly on the `html` tag to toggle the rich colors, scanlines, and timber-borders perfectly without any flickering.

## 📂 Digital Garden

The `/garden` route serves as an interactive masonry gallery of SVG animations. New SVG assets can be dropped into `public/animations/` and quickly added to the layout inside `src/app/garden/GardenClient.tsx`.

---
