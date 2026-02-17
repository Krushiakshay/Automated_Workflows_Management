import { 
  Clock, 
  BarChart3, 
  TrendingUp, 
  Bell, 
  Brain,
  Shield,
  Zap,
  Users
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Real-Time Attendance Monitoring',
    description: 'Track employee check-ins and check-outs instantly with live status updates and location verification.',
    gradient: 'from-primary to-primary/50',
  },
  {
    icon: BarChart3,
    title: 'Productivity Analytics Dashboard',
    description: 'Comprehensive metrics visualizing individual and team productivity with trend analysis.',
    gradient: 'from-secondary to-secondary/50',
  },
  {
    icon: TrendingUp,
    title: 'Performance Tracking',
    description: 'Monitor KPIs, goal completion rates, and performance scores with automated reporting.',
    gradient: 'from-success to-success/50',
  },
  {
    icon: Bell,
    title: 'Smart Alerts & Notifications',
    description: 'Automated alerts for anomalies, deadlines, and important workforce events.',
    gradient: 'from-warning to-warning/50',
  },
  {
    icon: Brain,
    title: 'AI-Based Insights',
    description: 'Machine learning powered predictions for workforce optimization and risk detection.',
    gradient: 'from-primary to-secondary',
  },
  {
    icon: Shield,
    title: 'Compliance Monitoring',
    description: 'Automated tracking of work hours, breaks, and regulatory compliance requirements.',
    gradient: 'from-destructive to-destructive/50',
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Sub-second data processing ensures all insights are current and actionable.',
    gradient: 'from-primary to-success',
  },
  {
    icon: Users,
    title: 'Department Analytics',
    description: 'Compare and analyze performance metrics across different departments and teams.',
    gradient: 'from-secondary to-primary',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Core</span>{' '}
            <span className="gradient-text">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful features designed to revolutionize how organizations manage their workforce.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-futuristic group hover:border-primary/50 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-4`}>
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
