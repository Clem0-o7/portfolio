"use client";

import { useRef, useEffect, useCallback } from "react";

interface ASCIIEffectProps {
  text?: string;
  fontSize?: number;
  color?: string;
  glowColor?: string;
  className?: string;
}

const ASCII_ART = `
  ██████╗ ██╗     ███████╗███╗   ███╗███████╗███╗   ██╗████████╗         █████╗ ███╗   ██╗██████╗ ██████╗ ███████╗██╗    ██╗
 ██╔════╝ ██║     ██╔════╝████╗ ████║██╔════╝████╗  ██║╚══██╔══╝        ██╔══██╗████╗  ██║██╔══██╗██╔══██╗██╔════╝██║    ██║
 ██║      ██║     █████╗  ██╔████╔██║█████╗  ██╔██╗ ██║   ██║           ███████║██╔██╗ ██║██║  ██║██████╔╝█████╗  ██║ █╗ ██║
 ██║      ██║     ██╔══╝  ██║╚██╔╝██║██╔══╝  ██║╚██╗██║   ██║           ██╔══██║██║╚██╗██║██║  ██║██╔══██╗██╔══╝  ██║███╗██║
 ╚██████╗ ███████╗███████╗██║ ╚═╝ ██║███████╗██║ ╚████║   ██║           ██║  ██║██║ ╚████║██████╔╝██║  ██║███████╗╚███╔███╔╝
  ╚═════╝ ╚══════╝╚══════╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝           ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝ 
`;

const ASCII_ART_MOBILE = `
  ██████╗ ██╗     ███████╗███╗   ███╗███████╗███╗   ██╗████████╗
 ██╔════╝ ██║     ██╔════╝████╗ ████║██╔════╝████╗  ██║╚══██╔══╝
 ██║      ██║     █████╗  ██╔████╔██║█████╗  ██╔██╗ ██║   ██║   
 ██║      ██║     ██╔══╝  ██║╚██╔╝██║██╔══╝  ██║╚██╗██║   ██║   
 ╚██████╗ ███████╗███████╗██║ ╚═╝ ██║███████╗██║ ╚████║   ██║   
  ╚═════╝ ╚══════╝╚══════╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝   
                                                                
  █████╗ ███╗   ██╗██████╗ ██████╗ ███████╗██╗    ██╗           
 ██╔══██╗████╗  ██║██╔══██╗██╔══██╗██╔════╝██║    ██║           
 ███████║██╔██╗ ██║██║  ██║██████╔╝█████╗  ██║ █╗ ██║           
 ██╔══██║██║╚██╗██║██║  ██║██╔══██╗██╔══╝  ██║███╗██║           
 ██║  ██║██║ ╚████║██████╔╝██║  ██║███████╗╚███╔███╔╝           
 ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝            
`;

export default function ASCIIEffect({
  fontSize = 10,
  color,
  glowColor,
  className = "",
}: ASCIIEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);
  const isMobileRef = useRef(false);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;
      
      const asciiLines = (isMobileRef.current ? ASCII_ART_MOBILE : ASCII_ART)
        .split("\n")
        .filter((line) => line.length > 0);

      const maxLineLen = Math.max(...asciiLines.map((l) => l.length));
      
      // Ensure the font scales down on smaller screens
      const containerWidth = width * dpr;
      const maxFontSizeToFit = (containerWidth * 0.95) / (maxLineLen * 0.6);
      const actualFontSize = Math.min(fontSize * dpr, maxFontSizeToFit);
      
      const charWidth = actualFontSize * 0.6;
      const lineHeight = actualFontSize * 1.2;

      ctx.clearRect(0, 0, width * dpr, height * dpr);

      const totalWidth = maxLineLen * charWidth;
      const totalHeight = asciiLines.length * lineHeight;

      const offsetX = (width * dpr - totalWidth) / 2;
      const offsetY = (height * dpr - totalHeight) / 2;

      const time = Date.now() * 0.001;

      ctx.font = `${actualFontSize}px "JetBrains Mono", "Courier New", monospace`;
      ctx.textBaseline = "top";

      for (let row = 0; row < asciiLines.length; row++) {
        const line = asciiLines[row];
        for (let col = 0; col < line.length; col++) {
          const char = line[col];
          if (char === " ") continue;

          const x = offsetX + col * charWidth;
          const y = offsetY + row * lineHeight;

          // Distance from mouse
          const mx = mouseRef.current.x * dpr;
          const my = mouseRef.current.y * dpr;
          const dist = Math.sqrt((x - mx) ** 2 + (y - my) ** 2);
          const mouseRadius = 120 * dpr;

          // Ripple wave
          const wave = Math.sin(time * 2 + col * 0.15 + row * 0.2) * 0.15;
          let alpha = 0.6 + wave;

          // Glow near mouse
          if (dist < mouseRadius) {
            const intensity = 1 - dist / mouseRadius;
            alpha = Math.min(1, alpha + intensity * 0.6);

            if (glowColor) {
              ctx.shadowColor = glowColor;
              ctx.shadowBlur = 12 * intensity;
            }
          } else {
            ctx.shadowColor = "transparent";
            ctx.shadowBlur = 0;
          }

          // Random flicker on some chars
          if (Math.random() > 0.997) {
            alpha *= 0.3;
          }

          const baseColor = color || "#f59e0b";
          ctx.fillStyle = baseColor;
          ctx.globalAlpha = Math.max(0.15, Math.min(1, alpha));
          ctx.fillText(char, x, y);
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    },
    [fontSize, color, glowColor]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      isMobileRef.current = rect.width < 640;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });

    const animate = () => {
      draw(ctx, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove", onTouchMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [draw]);

  return (
    <div ref={containerRef} className={`ascii-container ${className}`}>
      <canvas ref={canvasRef} className="cursor-crosshair" />
    </div>
  );
}
