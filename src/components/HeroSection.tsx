import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Dal 2009 — Oltre 15 anni di esperienza
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Creiamo il tuo
            <br />
            <span className="text-gradient">successo digitale</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Siti web, e-commerce e applicazioni su misura.
            <br className="hidden md:block" />
            Soluzioni che generano risultati concreti.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#contatti">Richiedi un preventivo</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#autoblog">Scopri AutoBlog</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
