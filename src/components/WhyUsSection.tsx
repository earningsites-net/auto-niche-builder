import { motion } from "framer-motion";
import { Lightbulb, Smartphone, TrendingUp, Award } from "lucide-react";

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

const WhyUsSection = () => {
  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6">
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
                className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <r.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm mb-2 text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
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
