import { AlertTriangle, Clock, Eye, BarChart3, Users, FileX } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Manual Time Tracking',
    description: 'Traditional punch cards and manual registers lead to errors, buddy punching, and time theft.',
  },
  {
    icon: Eye,
    title: 'Lack of Visibility',
    description: 'Managers have no real-time insight into employee attendance, location, or current workload.',
  },
  {
    icon: BarChart3,
    title: 'No Productivity Metrics',
    description: 'Without data analytics, measuring and improving workforce productivity becomes guesswork.',
  },
  {
    icon: FileX,
    title: 'Delayed Reporting',
    description: 'End-of-month reports arrive too late to make timely decisions or course corrections.',
  },
  {
    icon: Users,
    title: 'Resource Misallocation',
    description: 'Without predictive insights, departments are often over or understaffed.',
  },
  {
    icon: AlertTriangle,
    title: 'Compliance Risks',
    description: 'Manual systems make it difficult to maintain accurate records for audits and compliance.',
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">The Workforce</span>{' '}
            <span className="gradient-text">Challenge</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Traditional workforce management systems suffer from critical limitations 
            that impact organizational efficiency and decision-making.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="card-futuristic group hover:border-destructive/50 hover:shadow-[0_0_30px_hsl(var(--destructive)/0.2)] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-destructive/10 text-destructive group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 p-8 rounded-xl border border-destructive/30 bg-destructive/5 text-center">
          <AlertTriangle className="w-10 h-10 text-destructive mx-auto mb-4" />
          <p className="text-lg text-foreground font-medium">
            These inefficiencies cost organizations an average of{' '}
            <span className="text-destructive font-bold">20-30%</span> in lost productivity annually.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
