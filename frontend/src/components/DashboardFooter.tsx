import { Activity } from 'lucide-react';

const DashboardFooter = () => {
  return (
    <footer className="py-6 border-t border-border bg-muted/20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-primary opacity-50" />
            <span>© {new Date().getFullYear()} AWM Enterprise.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Help Center</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
