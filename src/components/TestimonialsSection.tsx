import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "A true e-commerce genius! Super available, fast, and precise. Working together was a pleasure. I'll definitely recommend his services.",
    author: "miocuginoadv",
  },
  {
    text: "Very fast and concrete. He solved my problem and was extremely helpful. I'll definitely reach out again for future projects.",
    author: "fabriziocical",
  },
  {
    text: "The transaction was smooth and easy. I am new in the ecommerce business and Dan helped me a lot to understand and manage the shop. He is available even after the transaction!",
    author: "Harald Weigmann",
  },
];

const TestimonialsSection = () => {
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
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border/50 relative"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6" />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                    {t.author.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="font-medium text-sm text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                  {t.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
