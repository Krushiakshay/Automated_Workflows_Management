import { X, Check, ArrowRight } from 'lucide-react';

const existingSystem = [
  'Manual attendance tracking',
  'Paper-based reports',
  'No real-time visibility',
  'Delayed decision making',
  'High error rates',
  'Limited scalability',
];

const proposedSystem = [
  'Automated real-time tracking',
  'Dynamic digital dashboards',
  'Live workforce analytics',
  'Instant AI-powered insights',
  'High accuracy (99%+)',
  'Infinitely scalable',
];

const ComparisonSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            System Comparison
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Existing vs</span>{' '}
            <span className="gradient-text">Proposed System</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A clear comparison between traditional methods and our AI-powered solution.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Existing System */}
          <div className="card-futuristic border-destructive/30 hover:border-destructive/50 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-destructive/20 text-destructive">
                <X className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                Existing System
              </h3>
            </div>
            <ul className="space-y-4">
              {existingSystem.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Proposed System */}
          <div className="card-futuristic border-success/30 hover:border-success/50 glow-box-success transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-success/20 text-success">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                Proposed System
              </h3>
            </div>
            <ul className="space-y-4">
              {proposedSystem.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-success" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Transformation Arrow */}
        <div className="flex justify-center items-center mt-12">
          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-muted-foreground">Traditional</span>
            <ArrowRight className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold">AI-Powered</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
