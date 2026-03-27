import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw, TrendingUp } from "lucide-react";
import autoblogImg from "@/assets/autoblog-feature.png";

const features = [
  {
    icon: Sparkles,
    title: "Contenuti AI",
    desc: "Articoli originali generati automaticamente, ottimizzati SEO per la tua nicchia.",
  },
  {
    icon: RefreshCw,
    title: "Aggiornamento mensile",
    desc: "Nuovi contenuti pubblicati ogni mese senza alcun intervento manuale.",
  },
  {
    icon: TrendingUp,
    title: "Crescita organica",
    desc: "Traffico in costante aumento grazie a contenuti freschi e rilevanti.",
  },
];

const AutoBlogSection = () => {
  return (
    <section id="autoblog" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Novità</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              AutoBlog: il blog che
              <br />
              <span className="text-gradient">si scrive da solo</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Lancia un blog in qualsiasi nicchia e lascia che i contenuti si generino automaticamente ogni mese. 
              Nessuno sforzo, solo risultati.
            </p>

            <div className="space-y-5 mb-10">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-heading)" }}>{f.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="#contatti">Scopri AutoBlog</a>
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
              <div className="absolute -inset-8 bg-primary/5 rounded-3xl blur-3xl" />
              <img
                src={autoblogImg}
                alt="AutoBlog feature"
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
