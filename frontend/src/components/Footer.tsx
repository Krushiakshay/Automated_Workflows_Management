import { Activity, GraduationCap, Heart } from 'lucide-react';

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
              AWMS
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-xl text-foreground mb-2">
            Automated Workforce Management System
          </h3>
          <p className="text-muted-foreground mb-8">
            Using Real-Time Analytics
          </p>

          {/* Academic Badge */}
          <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">IOMP project</span>
          </div>

          {/* Credits */}
          <div className="text-muted-foreground text-sm space-y-2">
            <p>Developed as part of academic curriculum requirements</p>
            <p className="flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-destructive animate-pulse" /> for learning and demonstration
            </p>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />

          {/* Copyright */}
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} AWMS Project. All rights reserved for academic purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
