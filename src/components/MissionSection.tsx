import { motion } from "framer-motion";
import { Target } from "lucide-react";

const MissionSection = () => (
  <section id="mission" className="py-24 px-6 relative">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <Target className="w-6 h-6 text-primary" />
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">Our Mission</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gradient-gold">Why We Exist</h2>
        <div className="w-20 h-1 bg-gradient-gold mx-auto mb-10 rounded-full" />
      </motion.div>

      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
        <p className="text-lg md:text-xl leading-relaxed text-foreground italic">
          "Our think tank mission is to assist and tackle the climate change challenge for the small-scale farmers 
          in the Eastern province in order to address the issue of crops being affected by climate change."
        </p>
      </motion.blockquote>
    </div>
  </section>
);

export default MissionSection;
