import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw, TrendingUp } from "lucide-react";
import autoblogImg from "@/assets/autoblog-feature.png";

const features = [
  {
    icon: Sparkles,
    title: "AI Content",
    desc: "Original articles generated automatically, SEO-optimized for your niche.",
  },
  {
    icon: RefreshCw,
    title: "Monthly Updates",
    desc: "Fresh content published every month with zero manual effort.",
  },
  {
    icon: TrendingUp,
    title: "Organic Growth",
    desc: "Steadily increasing traffic thanks to fresh, relevant content.",
  },
];

const WhiteDotPattern = () => {
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
          dots.push({ x, y, baseAlpha: 0.06 + Math.random() * 0.08, phase: Math.random() * Math.PI * 2 });
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = (time: number) => {
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.offsetWidth, h);
      dots.forEach((dot) => {
        const alpha = dot.baseAlpha + Math.sin(time * 0.001 + dot.phase) * 0.04;
        const radius = 1.2 + Math.sin(time * 0.0015 + dot.phase) * 0.3;
        // Fade out as we go down (only visible in top ~40%)
        const fadeOut = Math.max(0, 1 - dot.y / (h * 0.4));
        const finalAlpha = alpha * fadeOut;
        if (finalAlpha < 0.005) return;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(0, 0%, 100%, ${finalAlpha})`;
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
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      style={{ opacity: 0.7 }}
    />
  );
};

const AutoBlogSection = () => {
  return (
    <section id="autoblog" className="py-28 relative">
      {/* Brand gradient background */}
      <div className="absolute inset-0 brand-gradient" />
      <WhiteDotPattern />
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/70 text-sm font-medium tracking-[0.2em] uppercase mb-3">New Feature</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white" style={{ fontFamily: "var(--font-heading)" }}>
              AutoBlog: The Blog That
              <br />
              <span className="text-white/90">Writes Itself</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 max-w-lg">
              Launch a blog in any niche and let content generate automatically every month.
              No effort, just results.
            </p>

            <div className="space-y-5 mb-10">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1 text-white" style={{ fontFamily: "var(--font-heading)" }}>{f.title}</h4>
                    <p className="text-white/65 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90 font-semibold tracking-wide shadow-lg"
            >
              <a href="https://aiblogs.earningsites.net/portal" target="_blank" rel="noopener noreferrer">Site Owner Portal</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-white/5 rounded-3xl blur-3xl" />
              <img
                src={autoblogImg}
                alt="AutoBlog feature preview"
                width={500}
                height={500}
                loading="lazy"
                className="relative z-10 drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutoBlogSection;
