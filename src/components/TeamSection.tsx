import { motion } from "framer-motion";
import { Users, Mail } from "lucide-react";

const members = [
  { name: "Jimmy Prince Shimwa", email: "p.shimwa@alustudent.com", initials: "JS" },
  { name: "Rogan Munya Buranga", email: "r.munya@alustudent.com", initials: "RB" },
  { name: "Rebecca Benegusenga", email: "r.benegusen@alustudent.com", initials: "RB" },
  { name: "Sage Rusagara", email: "s.rusagara@alustudent.com", initials: "SR" },
  { name: "Ruth Mahoro", email: "r.mahoro@alustudent.com", initials: "RM" },
];

const colors = [
  "from-orange-500 to-amber-600",
  "from-amber-500 to-yellow-600",
  "from-yellow-600 to-orange-500",
  "from-orange-600 to-red-500",
  "from-amber-600 to-orange-700",
];

const TeamSection = () => (
  <section id="team" className="py-24 px-6 bg-card">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <Users className="w-6 h-6 text-primary" />
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">The Think Tank</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient-gold">Meet The Forge</h2>
        <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background border border-border rounded-2xl p-6 text-center group hover:border-primary/40 transition-colors"
          >
            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${colors[i]} flex items-center justify-center mx-auto mb-5 text-2xl font-bold text-background`}>
              {m.initials}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{m.name}</h3>
            <a href={`mailto:${m.email}`} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" />
              {m.email}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
