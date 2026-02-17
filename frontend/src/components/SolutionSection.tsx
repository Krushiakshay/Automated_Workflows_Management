import { Database, Cpu, BarChart3, Brain, ArrowDown } from 'lucide-react';

const steps = [
  {
    icon: Database,
    title: 'Real-Time Analytics',
    description: 'Monitor workforce performance, attendance, and operational metrics as they happen.',
    color: 'primary',
  },
  {
    icon: Brain,
    title: 'AI Forecasting',
    description: 'Predict future staffing needs and potential bottlenecks using advanced machine learning models.',
    color: 'secondary',
  },
  {
    icon: Cpu,
    title: 'Automated Scheduling',
    description: 'Automatically assign shifts and tasks based on skills, availability, and demand predictions.',
    color: 'success',
  },
  {
    icon: BarChart3,
    title: 'Performance Monitoring',
    description: 'Continuous tracking of individual and team KPIs to ensure optimal productivity levels.',
    color: 'warning',
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
            Our Solution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Intelligent</span>{' '}
            <span className="gradient-text">Workforce Optimization</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive four-stage pipeline that transforms raw workforce data 
            into actionable intelligence.
          </p>
        </div>

        {/* Process Flow */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="card-futuristic mb-4 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-${step.color}/20 flex items-center justify-center`}>
                      <step.icon className={`w-7 h-7 text-${step.color}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-display font-bold text-primary border border-primary/50">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent relative">
                    <ArrowDown className="w-5 h-5 text-primary/50 absolute -bottom-2 left-1/2 -translate-x-1/2" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Outcome Box */}
        <div className="mt-16 max-w-3xl mx-auto p-8 rounded-xl border border-primary/30 bg-primary/5 text-center glow-box">
          <Brain className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
          <h3 className="font-display font-bold text-xl text-foreground mb-2">
            Intelligent Workforce Management
          </h3>
          <p className="text-muted-foreground">
            The result is a fully automated system that provides real-time visibility, 
            predictive analytics, and AI-driven recommendations for optimal workforce management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
