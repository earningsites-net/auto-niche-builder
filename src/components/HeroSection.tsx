import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const AnimatedGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = 30;
      const rows = 20;
      const cellW = canvas.width / cols;
      const cellH = canvas.height / rows;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * cellW;
          const y = j * cellH;
          const dist = Math.sqrt(
            Math.pow((i - cols / 2) / cols, 2) +
            Math.pow((j - rows / 2) / rows, 2)
          );
          const wave = Math.sin(dist * 8 - time * 3) * 0.5 + 0.5;
          const alpha = wave * 0.12 + 0.03;
          const radius = wave * 2.5 + 1;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(43, 102, 255, ${alpha})`;
          ctx.fill();
        }
      }

      // Draw some flowing lines
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        for (let j = 0; j <= rows; j++) {
          const x = i * cellW;
          const y = j * cellH + Math.sin(i * 0.3 + time * 2) * 4;
          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "rgba(43, 102, 255, 0.04)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 1 }}
    />
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-muted/30">
      <AnimatedGrid />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Since 2009 — Over 15 Years of Experience
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            We Build Your
            <br />
            <span className="text-gradient">Digital Success</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Websites, e-commerce, and custom applications.
            <br className="hidden md:block" />
            Solutions that deliver real results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Request a Quote</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#autoblog">Discover AutoBlog</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
