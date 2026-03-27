import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "hsl(228 30% 96%)" }}>
      {/* Animated geometric background */}
      <div className="absolute inset-0">
        {/* Large animated gradient orbs */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(43,102,255,0.22) 0%, transparent 70%)",
            top: "-5%",
            left: "-5%",
          }}
          animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139,60,242,0.18) 0%, transparent 70%)",
            bottom: "-10%",
            right: "-10%",
          }}
          animate={{ x: [0, -50, 0], y: [0, 35, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full blur-2xl"
          style={{
            background: "radial-gradient(circle, rgba(43,102,255,0.14) 0%, transparent 65%)",
            top: "40%",
            right: "15%",
          }}
          animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full blur-2xl"
          style={{
            background: "radial-gradient(circle, rgba(139,60,242,0.12) 0%, transparent 65%)",
            top: "15%",
            right: "30%",
          }}
          animate={{ x: [0, -20, 30, 0], y: [0, 30, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Grid with visible lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gridH" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2b66ff" stopOpacity="0" />
              <stop offset="20%" stopColor="#2b66ff" stopOpacity="0.12" />
              <stop offset="80%" stopColor="#8b3cf2" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#8b3cf2" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gridV" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2b66ff" stopOpacity="0" />
              <stop offset="20%" stopColor="#2b66ff" stopOpacity="0.1" />
              <stop offset="80%" stopColor="#8b3cf2" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#8b3cf2" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={`${10 * (i + 1)}%`} x2="100%" y2={`${10 * (i + 1)}%`} stroke="url(#gridH)" strokeWidth="1" />
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={`v-${i}`} x1={`${7.14 * (i + 1)}%`} y1="0" x2={`${7.14 * (i + 1)}%`} y2="100%" stroke="url(#gridV)" strokeWidth="1" />
          ))}
        </svg>

        {/* Bright pulse beams traveling the grid */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={`pulse-h-${i}`}
            className="absolute left-0 h-[2px]"
            style={{
              width: "300px",
              background: "linear-gradient(90deg, transparent, rgba(43,102,255,0.6), rgba(139,60,242,0.5), transparent)",
              top: `${20 + i * 20}%`,
              filter: "blur(0.5px)",
            }}
            animate={{ x: ["-300px", "120vw"] }}
            transition={{
              duration: 5 + i * 1.5,
              repeat: Infinity,
              delay: i * 1.8,
              ease: "linear",
            }}
          />
        ))}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`pulse-v-${i}`}
            className="absolute top-0"
            style={{
              width: "2px",
              height: "200px",
              background: "linear-gradient(180deg, transparent, rgba(139,60,242,0.5), rgba(43,102,255,0.6), transparent)",
              left: `${25 + i * 25}%`,
              filter: "blur(0.5px)",
            }}
            animate={{ y: ["-200px", "120vh"] }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
          />
        ))}

        {/* Intersection glow dots at grid crossings */}
        {[
          { top: "30%", left: "28%" },
          { top: "50%", left: "50%" },
          { top: "40%", left: "71%" },
          { top: "60%", left: "35%" },
          { top: "20%", left: "57%" },
          { top: "70%", left: "64%" },
        ].map((pos, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              ...pos,
              background: i % 2 === 0 ? "rgba(43,102,255,0.5)" : "rgba(139,60,242,0.5)",
              boxShadow: i % 2 === 0
                ? "0 0 12px rgba(43,102,255,0.4), 0 0 30px rgba(43,102,255,0.15)"
                : "0 0 12px rgba(139,60,242,0.4), 0 0 30px rgba(139,60,242,0.15)",
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}

        {/* Floating geometric shapes - more visible */}
        <motion.div
          className="absolute w-24 h-24 border-2 border-primary/20 rounded-2xl"
          style={{ top: "18%", left: "12%" }}
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-16 h-16 border-2 border-accent/20 rounded-xl"
          style={{ top: "65%", right: "15%" }}
          animate={{ rotate: -360, scale: [1, 1.15, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-32 h-32 border-2 border-primary/15 rounded-full"
          style={{ bottom: "20%", left: "8%" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-20 h-20 border-2 border-accent/15"
          style={{ top: "12%", right: "25%", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          animate={{
            rotate: 180,
            borderRadius: [
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "70% 30% 30% 70% / 70% 70% 30% 30%",
              "30% 70% 70% 30% / 30% 30% 70% 70%",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
