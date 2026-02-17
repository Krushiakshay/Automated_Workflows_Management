import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import ComparisonSection from '@/components/ComparisonSection';
import SolutionSection from '@/components/SolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import DashboardSection from '@/components/DashboardSection';
import AILogicSection from '@/components/AILogicSection';
import ArchitectureSection from '@/components/ArchitectureSection';
import TechStackSection from '@/components/TechStackSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <ComparisonSection />
        <SolutionSection />
        <FeaturesSection />
        <DashboardSection />
        <AILogicSection />
        <ArchitectureSection />
        <TechStackSection />
        <AdvantagesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
