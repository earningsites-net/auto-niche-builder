import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "StampaVolantini.org",
    year: "2009–2024",
    url: "https://www.stampavolantini.org/",
    description: "E-commerce platform for print services, running successfully for over 15 years.",
  },
  {
    name: "Bluetiful.it",
    year: "2022",
    url: "https://www.bluetiful.it/",
    description: "Modern showcase website with elegant design and intuitive navigation.",
  },
  {
    name: "Ardues.com",
    year: "2022",
    url: "https://www.ardues.com/",
    description: "Custom web application with advanced features and scalable architecture.",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Recent Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 block"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-primary font-medium tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
                  {project.year}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                {project.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
