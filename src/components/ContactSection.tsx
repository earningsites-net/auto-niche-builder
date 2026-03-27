import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contatti" className="py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Contatti</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Parliamo del tuo progetto
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Raccontaci la tua idea. Ti risponderemo entro 24 ore con una proposta personalizzata.
          </p>

          <div className="glass rounded-2xl p-8 glow">
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
                Scrivici ora <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
