import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const FuturisticGrid = () => {
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

    // Create a grid of nodes
    const nodes: { x: number; y: number; baseX: number; baseY: number; phase: number; speed: number }[] = [];

    const initNodes = () => {
      nodes.length = 0;
      const spacing = 60;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          nodes.push({
            x: i * spacing,
            y: j * spacing,
            baseX: i * spacing,
            baseY: j * spacing,
            phase: Math.random() * Math.PI * 2,
            speed: 0.3 + Math.random() * 0.7,
          });
        }
      }
    };
    initNodes();

    const draw = () => {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions with organic floating
      for (const node of nodes) {
        node.x = node.baseX + Math.sin(time * node.speed + node.phase) * 12;
        node.y = node.baseY + Math.cos(time * node.speed * 0.7 + node.phase) * 8;
      }

      // Draw connections between nearby nodes
      const maxDist = 90;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            // Gradient line from blue to purple
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `rgba(43, 102, 255, ${alpha})`);
            grad.addColorStop(1, `rgba(139, 60, 242, ${alpha})`);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw flowing pulse waves
      const pulseCount = 3;
      for (let p = 0; p < pulseCount; p++) {
        const pulseTime = (time * 0.4 + p * 2.1) % 6;
        const pulseX = (pulseTime / 6) * canvas.width;
        const pulseRadius = 200;

        for (const node of nodes) {
          const dx = node.x - pulseX;
          const dy = node.y - canvas.height * 0.5;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < pulseRadius) {
            const intensity = (1 - dist / pulseRadius) * 0.3;
            const wave = Math.sin(dist * 0.03 - time * 3) * 0.5 + 0.5;
            const alpha = intensity * wave;
            const radius = 2 + intensity * 3;
            ctx.beginPath();
            ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.fill();
          }
        }
      }

      // Draw nodes as small dots
      for (const node of nodes) {
        const centerDist = Math.sqrt(
          Math.pow((node.x - canvas.width * 0.5) / canvas.width, 2) +
          Math.pow((node.y - canvas.height * 0.5) / canvas.height, 2)
        );
        const fadeFromCenter = Math.max(0, 1 - centerDist * 1.5);
        const pulse = Math.sin(time * 2 + node.phase) * 0.3 + 0.7;
        const alpha = 0.08 + fadeFromCenter * 0.15 * pulse;
        const r = 1.5 + fadeFromCenter * 1.5;

        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(43, 102, 255, ${alpha})`;
        ctx.fill();
      }

      // Draw hex-style accent shapes
      const hexCount = 5;
      for (let h = 0; h < hexCount; h++) {
        const hx = canvas.width * (0.15 + h * 0.18);
        const hy = canvas.height * (0.3 + Math.sin(time * 0.5 + h * 1.2) * 0.2);
        const size = 30 + Math.sin(time + h) * 10;
        const alpha = 0.03 + Math.sin(time * 0.8 + h * 0.7) * 0.02;

        ctx.beginPath();
        for (let s = 0; s < 6; s++) {
          const angle = (Math.PI / 3) * s - Math.PI / 6 + time * 0.1;
          const px = hx + Math.cos(angle) * size;
          const py = hy + Math.sin(angle) * size;
          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(139, 60, 242, ${alpha})`;
        ctx.lineWidth = 1.5;
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
    />
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-muted/30">
      <FuturisticGrid />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />

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
