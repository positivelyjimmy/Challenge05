import { motion } from "framer-motion";
import { AlertTriangle, Thermometer, Users, TrendingDown } from "lucide-react";

const stats = [
  { icon: Thermometer, value: "1.4°C", label: "Temperature rise since 1970" },
  { icon: TrendingDown, value: "2.0°C", label: "Projected rise by 2030s" },
  { icon: Users, value: "69%", label: "Workforce in agriculture" },
  { icon: AlertTriangle, value: "27%", label: "Agriculture GDP contribution" },
];

const ProblemSection = () => (
  <section id="problem" className="py-24 px-6 bg-card relative">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <AlertTriangle className="w-6 h-6 text-primary" />
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">The Problem</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient-gold">The Climate Crisis</h2>
        <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-4 gap-6 mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-secondary border border-border rounded-xl p-6 text-center"
          >
            <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold text-gradient-gold mb-1">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="bg-background border border-border rounded-2xl p-8 md:p-12"
      >
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          According to the Rwanda climate change portal, Rwanda has experienced a <strong className="text-primary">1.4°C temperature increase</strong> since 1970, 
          with projections suggesting a further rise of up to <strong className="text-primary">2.0°C by the 2030s</strong>. Climate change is a growing challenge 
          in Rwanda, significantly affecting smallholder farmers who depend on agriculture for their livelihoods. Agriculture employs about 
          <strong className="text-primary"> 69% of Rwanda's working population</strong> and contributes approximately <strong className="text-primary">27% to the national GDP</strong> (FAO, 2022–2023).
        </p>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground mt-4">
          However, changing weather patterns such as droughts, floods, and unpredictable rainfall have reduced crop yields and food security. 
          If this challenge continues, farmers' income and national food production will decline. To address this problem, Rwanda can promote 
          climate-smart agricultural entrepreneurship by supporting irrigation systems, drought-resistant crops, and agroforestry projects. 
          By implementing training programs and providing financial support from 2026 to 2035, farmers can increase productivity, strengthen 
          resilience, and improve food security sustainably.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
