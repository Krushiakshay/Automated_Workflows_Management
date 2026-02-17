import { TrendingUp, Users, Zap, Shield, BarChart3, Globe } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Reduced Operational Costs',
    description: 'Optimize resource allocation and reduce overtime costs through intelligent scheduling and forecasting.',
  },
  {
    icon: Users,
    title: 'Improved Productivity',
    description: 'Real-time monitoring and performance metrics drive employee engagement and output.',
  },
  {
    icon: Shield,
    title: 'Higher Service Quality',
    description: 'Ensure the right skills are available at the right time to meet customer demand and service levels.',
  },
  {
    icon: Zap,
    title: 'Faster Decision Making',
    description: 'Instant access to real-time data enables managers to resolve issues before they impact operations.',
  },
  {
    icon: Globe,
    title: 'Scalable Architecture',
    description: 'Cloud-native design that grows with your organization from a single site to global operations.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Culture',
    description: 'Transform subjective management into objective, metric-based performance optimization.',
  },
];

const AdvantagesSection = () => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            ROI & Value
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Strategic</span>{' '}
            <span className="gradient-text">Benefits</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering measurable value across every level of your organization.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-futuristic group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default AdvantagesSection;
