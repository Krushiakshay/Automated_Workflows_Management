import { Check, X, ArrowRight, Rocket } from 'lucide-react';

const advantages = [
  'Real-time visibility into workforce status',
  'Automated data collection and processing',
  'AI-powered insights and recommendations',
  'Reduced manual errors and time theft',
  'Improved decision-making with data',
  'Scalable to any organization size',
  'Enhanced compliance and audit trails',
  'Cost savings through efficiency gains',
];

const limitations = [
  'Data is simulated, not from real sources',
  'No persistent database storage',
  'AI predictions are conceptual demonstrations',
  'Requires modern browser for best experience',
];

const futureEnhancements = [
  {
    title: 'Real Database Integration',
    description: 'Connect to SQL or NoSQL databases for persistent data storage and historical analysis.',
  },
  {
    title: 'Machine Learning Models',
    description: 'Implement TensorFlow.js or similar for actual predictive analytics and pattern recognition.',
  },
  {
    title: 'IoT & Biometric Integration',
    description: 'Support for fingerprint scanners, facial recognition, and RFID-based attendance systems.',
  },
  {
    title: 'Mobile Application',
    description: 'Native iOS and Android apps for on-the-go workforce management and notifications.',
  },
  {
    title: 'API Integrations',
    description: 'Connect with HR systems, payroll software, and project management tools.',
  },
  {
    title: 'Advanced Reporting',
    description: 'Exportable reports, scheduled emails, and customizable dashboards for executives.',
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Evaluation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Advantages &</span>{' '}
            <span className="gradient-text">Future Scope</span>
          </h2>
        </div>

        {/* Advantages & Limitations */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Advantages */}
          <div className="card-futuristic border-success/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-success/20 text-success">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                Advantages
              </h3>
            </div>
            <ul className="space-y-3">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-success" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Limitations */}
          <div className="card-futuristic border-warning/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-warning/20 text-warning">
                <X className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                Current Limitations
              </h3>
            </div>
            <ul className="space-y-3">
              {limitations.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-warning/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-warning" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Future Enhancements */}
        <div>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Rocket className="w-6 h-6" />
              <span className="font-display font-semibold">Future Enhancements</span>
            </div>
            <p className="text-muted-foreground">
              Potential improvements and extensions for the system
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureEnhancements.map((enhancement, index) => (
              <div
                key={index}
                className="card-futuristic group hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-2">
                      {enhancement.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {enhancement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
