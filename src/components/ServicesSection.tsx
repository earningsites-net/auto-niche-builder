import { motion } from "framer-motion";
import { Globe, ShoppingCart, Smartphone } from "lucide-react";

const iconDrawVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
};

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

const AnimatedIcon = ({ icon: Icon }: { icon: typeof Globe }) => (
  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors relative overflow-hidden">
    <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <motion.div
        initial="hidden"
        whileInView="hidden"
        className="w-6 h-6 text-primary group-hover:animate-none"
      >
        <Icon className="w-6 h-6 text-primary [&>*]:stroke-primary [&>*]:transition-all [&>*]:duration-700 [&>*]:ease-out group-hover:[stroke-dasharray:100] group-hover:[stroke-dashoffset:0]" 
          style={{
            animation: "none",
          }}
        />
      </motion.div>
    </div>
  </div>
);

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
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 transition-all duration-500 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-500">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.2 + 0.4, ease: "easeOut" }}
                  className="group-hover:scale-0 transition-transform duration-300"
                >
                  <service.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div
                  className="absolute"
                  initial={{ scale: 0, rotate: 180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                >
                  <service.icon className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300" style={{ fontFamily: "var(--font-heading)" }}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
