import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Users, Rocket, PresentationIcon, Globe } from "lucide-react";

const challenges = [
  {
    num: "01",
    title: "Introduction",
    icon: Users,
    description: "Introducing ourselves, giving fun facts about us and communicating our vision for change.",
    link: "https://youtu.be/f9qmPMHh-7Y?si=hZ8cnjFMWQe4u8mx",
  },
  {
    num: "02",
    title: "Discover Africa",
    icon: BookOpen,
    description: "Exploring the community of people living near national parks in Rwanda to highlight the connection between people, nature, and climate change.",
    link: "https://youtu.be/Ah5v6H0_QCY?si=OMioNdKanaLDWWiK",
  },
  {
    num: "03",
    title: "HELP-LAB",
    icon: Lightbulb,
    description: "Interviewing small-scale farmers about their journeys and reflecting on their experiences in farming.",
    link: "https://youtu.be/pdKLkCTIrmE?si=0E_G9FMSj1eyjEGi",
  },
  {
    num: "04",
    title: "Hunting for Treasure",
    icon: Rocket,
    description: "Interviewing small-scale farmers about their journeys and reflecting on their experiences in farming.",
    link: "https://youtu.be/-3OZQC3eyL0",
  },
  {
    num: "05",
    title: "Launch your mission",
    icon: PresentationIcon,
    description: "Pitching our solution proposal to communicate our mission, justify our approach to make it happen.",
    link: "https://youtu.be/QnPfxN-l5lA",
  },
  {
    num: "06",
    title: "Digital Print",
    icon: Globe,
    description: "Building a website that highlights our solution through a clear mission and our project proposal.",
    link: null,
  },
];

const ChallengesSection = () => (
  <section id="challenges" className="py-24 px-6 relative overflow-hidden">

    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/team-bg.jpeg')" }}
    />
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/75" />

    <div className="max-w-6xl mx-auto relative z-10">
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
            onClick={() => c.link && window.open(c.link, "_blank")}
            className={`bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 group hover:border-primary/40 transition-all hover:glow-gold relative ${c.link ? "cursor-pointer" : "cursor-default"}`}
          >
            {c.link && (
              <span className="absolute top-3 right-3 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                ▶ Watch
              </span>
            )}
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