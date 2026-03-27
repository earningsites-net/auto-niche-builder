import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Let's Talk About Your Project
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Tell us about your idea. We'll get back to you within 24 hours with a tailored proposal.
          </p>

          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg shadow-primary/5">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-5 h-5 text-primary" />
              <a
                href="mailto:info@earningsites.net"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                info@earningsites.net
              </a>
            </div>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:info@earningsites.net">
                Write to Us <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
