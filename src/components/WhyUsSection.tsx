import { motion } from "framer-motion";
import { Lightbulb, Smartphone, TrendingUp, Award } from "lucide-react";
import { useEffect, useRef } from "react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Attention to detail and unique solutions to give you a significant competitive edge.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Our websites deliver an exceptional visual experience on every device — desktop, tablet, and mobile.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Scalability",
    description: "Post-launch support that keeps your site updated and growing with your business.",
  },
  {
    icon: Award,
    title: "Proven Success Formula",
    description: "The result is a highly professional, elegant, polished, and fully customized product.",
  },
];

const DotPattern = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const dots: { x: number; y: number; baseAlpha: number; phase: number }[] = [];
    const spacing = 32;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
      dots.length = 0;
      for (let x = 0; x < canvas.offsetWidth; x += spacing) {
        for (let y = 0; y < canvas.offsetHeight; y += spacing) {
          dots.push({ x, y, baseAlpha: 0.08 + Math.random() * 0.1, phase: Math.random() * Math.PI * 2 });
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = (time: number) => {
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.offsetWidth, h);
      dots.forEach((dot) => {
        const alpha = dot.baseAlpha + Math.sin(time * 0.001 + dot.phase) * 0.06;
        const radius = 1.2 + Math.sin(time * 0.0015 + dot.phase) * 0.4;
        const progress = dot.y / h; // 0 at top, 1 at bottom
        // Interpolate hue from blue (226) to violet (270) toward bottom
        const hue = 226 + progress * 44;
        // Increase saturation and lightness shift toward bottom
        const sat = 100;
        const light = 58 + progress * 8;
        // Increase alpha toward bottom for a more vivid transition
        const finalAlpha = alpha + progress * 0.12;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, ${sat}%, ${light}%, ${finalAlpha})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

const WhyUsSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-[1]" />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent z-[1]" />
      <DotPattern />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Why EarningSites?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              We Design Websites
              <br />
              <span className="text-gradient">That Deliver Results</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Accredited among the top web agencies and active since 2009, EarningSites has helped companies of all sizes build their professional online presence and grow their digital image over 15+ years.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors duration-300">
                  <r.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="font-semibold text-sm mb-2 text-foreground group-hover:text-primary transition-colors duration-300" style={{ fontFamily: "var(--font-heading)" }}>
                  {r.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
