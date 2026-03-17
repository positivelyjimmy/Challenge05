import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Users, Rocket, PresentationIcon, Globe } from "lucide-react";

const challenges = [
  {
    num: "01",
    title: "Introduction",
    icon: Users,
    description: "Understanding our personal strengths, values, and leadership styles to effectively drive change in our communities.",
  },
  {
    num: "02",
    title: "Discover Africa",
    icon: BookOpen,
    description: "Identifying and analyzing the climate change challenges facing small-scale farmers in Rwanda's Eastern Province through research and fieldwork.",
  },
  {
    num: "03",
    title: "HELP-LAB",
    icon: Lightbulb,
    description: "Generating innovative solutions through collaborative brainstorming, focusing on agroforestry and drought-resistant farming approaches.",
  },
  {
    num: "04",
    title: "Hunting for Treasure",
    icon: Rocket,
    description: "Developing and testing our prototype solution for climate-smart agriculture, gathering feedback from local farming communities.",
  },
  {
    num: "05",
    title: "Launch your mission",
    icon: PresentationIcon,
    description: "Presenting our solution to stakeholders, refining our pitch, and communicating the impact of our climate-smart agricultural approach.",
  },
  {
    num: "06",
    title: "Digital Print",
    icon: Globe,
    description: "Creating a digital presence to showcase our E-Lab journey, documenting our process, and sharing our vision for sustainable farming in Rwanda.",
  },
];

const ChallengesSection = () => (
  <section id="challenges" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <BookOpen className="w-6 h-6 text-primary" />
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">Our Journey</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient-gold">E-LAB Challenges</h2>
        <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8 rounded-full" />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Documenting the six core challenges we undertook throughout our E-Lab entrepreneurial journey.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((c, i) => (
          <motion.div
            key={c.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 group hover:border-primary/40 transition-all hover:glow-gold"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-black text-gradient-gold font-['Playfair_Display']">{c.num}</span>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ChallengesSection;
