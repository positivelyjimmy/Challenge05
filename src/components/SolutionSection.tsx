import { motion } from "framer-motion";
import { Lightbulb, TreePine, Sprout } from "lucide-react";

const solutions = [
  {
    icon: TreePine,
    title: "Agroforestry",
    description: "Integrating trees with crops to create sustainable farming systems that improve soil health, provide shade, and diversify income sources for farmers.",
  },
  {
    icon: Sprout,
    title: "Drought-Resistant Crops",
    description: "Planting crops that can withstand dry conditions, ensuring food security even during periods of irregular rainfall and extended droughts.",
  },
];

const SolutionSection = () => (
  <section id="solution" className="py-24 px-6 relative overflow-hidden">

    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/solution-bg.jpeg')" }}    />
    {/* Dark overlay to keep text readable */}
    <div className="absolute inset-0 bg-black/70" />

    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <Lightbulb className="w-6 h-6 text-primary" />
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">Our Solution</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient-gold">The Way Forward</h2>
        <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8 rounded-full" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We are planning on working on agroforestry and planting drought-resistant crops around our chosen area in Rwanda's Eastern Province.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;