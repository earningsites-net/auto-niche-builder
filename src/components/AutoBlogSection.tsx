import { motion } from "framer-motion";
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

const AutoBlogSection = () => {
  return (
    <section id="autoblog" className="py-28 relative">
      {/* Brand gradient background */}
      <div className="absolute inset-0 brand-gradient" />
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
              <a href="#contact">Discover AutoBlog</a>
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
