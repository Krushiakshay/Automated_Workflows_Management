import { Monitor, Cpu, Database, Brain, ArrowRight, ArrowDown } from 'lucide-react';

const layers = [
  {
    icon: Monitor,
    title: 'User Interface Layer',
    subtitle: 'Presentation',
    description: 'HTML/CSS dashboard that displays real-time data visualizations, charts, and alerts to end users.',
    color: 'primary',
  },
  {
    icon: Cpu,
    title: 'JavaScript Logic Layer',
    subtitle: 'Processing',
    description: 'Core JavaScript engine handles data processing, timer-based updates, DOM manipulation, and state management.',
    color: 'secondary',
  },
  {
    icon: Database,
    title: 'Simulated Data Layer',
    subtitle: 'Data Source',
    description: 'JavaScript-generated random data simulates real workforce inputs like attendance records and activity logs.',
    color: 'success',
  },
  {
    icon: Brain,
    title: 'AI Analytics Layer',
    subtitle: 'Intelligence',
    description: 'Conceptual AI module that analyzes patterns and generates intelligent insights and recommendations.',
    color: 'warning',
  },
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technical Design
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">System</span>{' '}
            <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simplified view of the layered architecture powering the workforce management system.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-4xl mx-auto">
          {/* Vertical Flow - Mobile */}
          <div className="lg:hidden space-y-4">
            {layers.map((layer, index) => (
              <div key={index}>
                <div className={`card-futuristic border-${layer.color}/30 hover:border-${layer.color}/50 transition-colors`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-${layer.color}/10`}>
                      <layer.icon className={`w-6 h-6 text-${layer.color}`} />
                    </div>
                    <div>
                      <span className={`text-xs text-${layer.color} font-medium`}>{layer.subtitle}</span>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        {layer.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                </div>
                {index < layers.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Horizontal Flow - Desktop */}
          <div className="hidden lg:block">
            {/* Top Row */}
            <div className="flex items-center justify-center gap-8 mb-8">
              {layers.slice(0, 2).map((layer, index) => (
                <div key={index} className="flex items-center gap-8">
                  <div className={`card-futuristic w-80 border-${layer.color}/30 hover:border-${layer.color}/50 hover:scale-105 transition-all`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-${layer.color}/10`}>
                        <layer.icon className={`w-6 h-6 text-${layer.color}`} />
                      </div>
                      <div>
                        <span className={`text-xs text-${layer.color} font-medium`}>{layer.subtitle}</span>
                        <h3 className="font-display font-semibold text-foreground">
                          {layer.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mt-4">
                      {layer.description}
                    </p>
                  </div>
                  {index === 0 && (
                    <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                  )}
                </div>
              ))}
            </div>

            {/* Center Connection */}
            <div className="flex justify-center mb-8">
              <div className="flex flex-col items-center gap-2">
                <ArrowDown className="w-6 h-6 text-primary animate-pulse" />
                <div className="w-px h-8 bg-gradient-to-b from-primary to-secondary" />
                <ArrowDown className="w-6 h-6 text-secondary animate-pulse" />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-center gap-8">
              {layers.slice(2).map((layer, index) => (
                <div key={index} className="flex items-center gap-8">
                  <div className={`card-futuristic w-80 border-${layer.color}/30 hover:border-${layer.color}/50 hover:scale-105 transition-all`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-${layer.color}/10`}>
                        <layer.icon className={`w-6 h-6 text-${layer.color}`} />
                      </div>
                      <div>
                        <span className={`text-xs text-${layer.color} font-medium`}>{layer.subtitle}</span>
                        <h3 className="font-display font-semibold text-foreground">
                          {layer.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mt-4">
                      {layer.description}
                    </p>
                  </div>
                  {index === 0 && (
                    <ArrowRight className="w-6 h-6 text-success animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Flow Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-muted-foreground">Data flows from</span>
            <span className="text-success font-semibold">Source</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-secondary font-semibold">Processing</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-primary font-semibold">Display</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
