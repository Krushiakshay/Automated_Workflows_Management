import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Activity, Users, TrendingUp, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float delay-300" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span>IOMP Project</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 animate-fade-in delay-100">
            <span className="text-foreground">Automated</span>
            <br />
            <span className="gradient-text glow-text">Workforce Management</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary font-display mb-4 animate-fade-in delay-200">
            Using Real-Time Analytics
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in delay-300">
            AI-powered workforce automation that transforms how organizations track attendance, 
            monitor productivity, and make data-driven decisions in real-time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-400">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#dashboard">
                View Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#problem">
                <Play className="w-5 h-5" />
                Project Overview
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in delay-500">
            {[
              { icon: Users, label: 'Employees Tracked', value: '500+' },
              { icon: Activity, label: 'Real-Time Updates', value: '24/7' },
              { icon: TrendingUp, label: 'Productivity Boost', value: '40%' },
              { icon: Zap, label: 'Response Time', value: '<1s' },
            ].map((stat, index) => (
              <div key={index} className="card-futuristic group hover:border-primary/50 transition-all duration-300">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="font-display font-bold text-xl md:text-2xl text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
