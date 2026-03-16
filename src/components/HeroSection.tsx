import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary sparkle" />
    <div className="absolute top-40 right-20 w-1.5 h-1.5 rounded-full bg-primary sparkle" style={{ animationDelay: "1s" }} />
    <div className="absolute bottom-40 left-1/4 w-1 h-1 rounded-full bg-primary sparkle" style={{ animationDelay: "2s" }} />
    <div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 rounded-full bg-primary/50 sparkle" style={{ animationDelay: "0.5s" }} />

    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">E-Lab Digital Print</span>
        </div>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-gradient-gold">The Forge</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Forging solutions for climate-smart agriculture in Rwanda's Eastern Province
      </motion.p>

      <motion.a
        href="#mission"
        className="inline-block bg-gradient-gold text-background font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Explore Our Journey
      </motion.a>
    </div>

    {/* Bottom wave */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" fill="none" className="w-full">
        <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z" fill="hsl(36 90% 50%)" fillOpacity="0.15" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
