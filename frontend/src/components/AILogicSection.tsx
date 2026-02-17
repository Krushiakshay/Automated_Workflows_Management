import { Brain, Cpu, LineChart, Database } from 'lucide-react';

const concepts = [
  {
    icon: Database,
    title: 'Data Collection',
    description: 'Continuous ingestion of raw workforce data from biometric devices, apps, and system logs.',
  },
  {
    icon: Cpu,
    title: 'AI Processing',
    description: 'Real-time algorithms process data streams instantly to normalize and structure information.',
  },
  {
    icon: Brain,
    title: 'Insight Generation',
    description: 'Pattern recognition models identify trends, anomalies, and efficiency opportunities.',
  },
  {
    icon: LineChart,
    title: 'Automated Execution',
    description: 'Intelligent systems automatically schedule resources and trigger corrective actions.',
  },
];

const AILogicSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Workflow
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">How It</span>{' '}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A seamless four-step process from data ingestion to actionable intelligence.
          </p>
        </div>

        {/* Concepts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className="card-futuristic group hover:border-secondary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
                  <concept.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {concept.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {concept.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Box */}
        <div className="max-w-4xl mx-auto p-8 rounded-xl border border-secondary/30 bg-secondary/5">
          <div className="flex items-start gap-4">
            <Brain className="w-10 h-10 text-secondary flex-shrink-0" />
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                How AI Enhances Decision Making
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Pattern Recognition:</strong> The system learns from historical data to identify normal behavior patterns, making it easier to spot deviations that may indicate issues.
                </p>
                <p>
                  <strong className="text-foreground">Predictive Modeling:</strong> By analyzing trends over time, the AI can forecast future states such as expected attendance levels, productivity dips, or resource bottlenecks.
                </p>
                <p>
                  <strong className="text-foreground">Intelligent Alerts:</strong> Rather than simple threshold alerts, the AI considers context and patterns to generate meaningful notifications that require action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILogicSection;
