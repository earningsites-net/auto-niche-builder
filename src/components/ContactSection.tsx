import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = ({ hideContact = false }: { hideContact?: boolean }) => {
  return (
    <section id="contact" className={hideContact ? "pb-0" : "pt-28 pb-0"}>
      <div className="brand-gradient pt-20 pb-16">
        {!hideContact && <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            {/* Left column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/70 text-sm font-medium tracking-[0.2em] uppercase mb-3">Contact</p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Let's Talk About Your Project
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Tell us about your idea. We'll get back to you within 24 hours with a tailored proposal.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Email</p>
                    <a href="mailto:info@earningsites.net" className="text-white font-medium hover:underline">
                      info@earningsites.net
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Response Time</p>
                    <p className="text-white font-medium">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-white font-medium">Remote — Worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column - CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/15"
            >
              <h3
                className="text-xl font-semibold text-white mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready to get started?
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Drop us a line and let's build something amazing together. No commitment required — just a friendly conversation about your goals.
              </p>

              <Button
                size="lg"
                asChild
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
              >
                <a href="mailto:info@earningsites.net">
                  Write to Us <ArrowUpRight className="w-4 h-4 ml-2" />
                </a>
              </Button>

            </motion.div>
          </div>
        </div>

        {/* Footer integrated */}
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50 pb-8">
            <p>© {new Date().getFullYear()} EarningSites.net — All rights reserved</p>
            <p>15+ years of digital experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
