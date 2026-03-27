import { motion } from "framer-motion";
import { Globe, ShoppingCart, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites",
    description: "Landing pages, showcase sites, and custom portals. Modern design with optimal performance.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Complete online stores with product management, secure payments, and advanced integrations.",
  },
  {
    icon: Smartphone,
    title: "Applications",
    description: "Web apps and custom digital solutions to automate and grow your business.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Our Services
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
              className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
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
