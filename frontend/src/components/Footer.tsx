import { Activity } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 relative overflow-hidden border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <Activity className="w-10 h-10 text-primary" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            </div>
            <span className="font-display font-bold text-2xl gradient-text">
              AWM
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-xl text-foreground mb-2">
            Automated Workforce Management
          </h3>
          <p className="text-muted-foreground mb-8">
            Enterprise Workforce Intelligence
          </p>

          {/* Links */}
          <div className="flex gap-6 mb-8 text-sm font-medium text-muted-foreground">
            <a href="/#problem" className="hover:text-primary transition-colors">About</a>
            <a href="/#features" className="hover:text-primary transition-colors">Platform</a>
            <a href="/#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
            <a href="/#benefits" className="hover:text-primary transition-colors">Benefits</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />

          {/* Copyright */}
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} AWM Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
