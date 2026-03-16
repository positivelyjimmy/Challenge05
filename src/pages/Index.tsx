import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TeamSection from "@/components/TeamSection";
import ChallengesSection from "@/components/ChallengesSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <ProblemSection />
      <SolutionSection />
      <TeamSection />
      <ChallengesSection />
      <Footer />
    </div>
  );
};

export default Index;
