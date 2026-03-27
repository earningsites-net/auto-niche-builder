import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-muted/20">
      {/* Animated geometric background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.04]" />

        {/* Animated floating orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(43,102,255,0.08) 0%, transparent 70%)",
            top: "10%",
            left: "5%",
          }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139,60,242,0.07) 0%, transparent 70%)",
            bottom: "5%",
            right: "0%",
          }}
          animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(43,102,255,0.06) 0%, transparent 70%)",
            top: "50%",
            right: "25%",
          }}
          animate={{ x: [0, 25, -15, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated grid lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2b66ff" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#8b3cf2" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2b66ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#2b66ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b3cf2" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Horizontal lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={`${12.5 * (i + 1)}%`}
              x2="100%"
              y2={`${12.5 * (i + 1)}%`}
              stroke="url(#lineGrad)"
              strokeWidth="1"
            />
          ))}
          {/* Vertical lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={`${8.33 * (i + 1)}%`}
              y1="0"
              x2={`${8.33 * (i + 1)}%`}
              y2="100%"
              stroke="url(#lineGrad)"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Animated pulse lines traveling across the grid */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`pulse-h-${i}`}
            className="absolute left-0 h-[2px] w-[200px]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(43,102,255,0.25), rgba(139,60,242,0.2), transparent)",
              top: `${25 + i * 25}%`,
            }}
            animate={{ x: ["-200px", "110vw"] }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "linear",
            }}
          />
        ))}
        {[0, 1].map((i) => (
          <motion.div
            key={`pulse-v-${i}`}
            className="absolute top-0 w-[2px] h-[150px]"
            style={{
              background: "linear-gradient(180deg, transparent, rgba(139,60,242,0.2), rgba(43,102,255,0.25), transparent)",
              left: `${33 + i * 33}%`,
            }}
            animate={{ y: ["-150px", "110vh"] }}
            transition={{
              duration: 8 + i * 3,
              repeat: Infinity,
              delay: i * 3,
              ease: "linear",
            }}
          />
        ))}

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute w-20 h-20 border border-primary/10 rounded-xl"
          style={{ top: "20%", left: "15%" }}
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-14 h-14 border border-accent/10 rounded-lg"
          style={{ top: "60%", right: "20%" }}
          animate={{ rotate: -360, scale: [1, 1.15, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-24 h-24 border border-primary/[0.07]"
          style={{ bottom: "25%", left: "30%", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          animate={{ rotate: 180, borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-primary/20"
          style={{ top: "35%", right: "35%" }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-accent/20"
          style={{ top: "70%", left: "45%" }}
          animate={{ scale: [1, 2, 1], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      {/* Fade to background at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

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
