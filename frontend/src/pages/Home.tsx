import DashboardNavbar from '@/components/DashboardNavbar';
import DashboardSection from '@/components/DashboardSection';
import DashboardFooter from '@/components/DashboardFooter';

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DashboardNavbar />
      <main className="flex-1 pt-16">
        <DashboardSection />
      </main>
      <DashboardFooter />
    </div>
  );
};

export default Home;
