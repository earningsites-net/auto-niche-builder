import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does it cost to build a website?",
    answer: "Costs vary depending on the project's complexity, features, and design requirements. We offer competitive packages for every budget — from simple landing pages to complex e-commerce platforms. Contact us for a free, no-obligation quote tailored to your needs.",
  },
  {
    question: "What is a responsive website?",
    answer: "A responsive website automatically adapts its layout to look perfect on any device — desktop, tablet, or smartphone. This isn't just an aesthetic choice: Google prioritizes mobile-friendly sites in search results, making responsiveness essential for your online visibility.",
  },
  {
    question: "How do you build a successful e-commerce?",
    answer: "The development phase is the most critical when launching your brand online. We focus on conversion-optimized design, secure payment integration, intuitive product management, and marketing strategies to maximize your ROI from day one.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "A standard website typically takes 2-4 weeks. E-commerce and complex applications may take 4-8 weeks depending on scope. We provide a clear timeline upfront and keep you informed at every stage of development.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4" style={{ fontFamily: "var(--font-heading)" }}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-60" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
