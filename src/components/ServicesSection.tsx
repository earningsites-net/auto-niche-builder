import { motion } from "framer-motion";
import { Globe, ShoppingCart, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Siti Web",
    description: "Landing page, siti vetrina e portali su misura. Design moderno e performance ottimali.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Negozi online completi con gestione prodotti, pagamenti sicuri e integrazioni avanzate.",
  },
  {
    icon: Smartphone,
    title: "Applicazioni",
    description: "Web app e soluzioni digitali personalizzate per automatizzare e far crescere il tuo business.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servizi" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Cosa facciamo</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            I nostri servizi
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 hover:glow transition-shadow duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
