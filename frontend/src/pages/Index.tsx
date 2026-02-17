import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import AILogicSection from '@/components/AILogicSection';
import ArchitectureSection from '@/components/ArchitectureSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import TechStackSection from '@/components/TechStackSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <AILogicSection />
        <AdvantagesSection />
        <ArchitectureSection />
        <TechStackSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
