import { Code2, Palette, Zap, FileCode } from 'lucide-react';

const technologies = [
  {
    icon: FileCode,
    name: 'HTML5',
    role: 'Structure',
    description: 'Semantic markup for creating the document structure, sections, and content hierarchy.',
    features: ['Semantic elements', 'Accessibility', 'SEO-friendly'],
    color: 'from-orange-500 to-orange-400',
  },
  {
    icon: Palette,
    name: 'CSS3',
    role: 'Styling',
    description: 'Modern styling with animations, gradients, flexbox, and grid layouts for responsive design.',
    features: ['Animations', 'Flexbox/Grid', 'Custom properties'],
    color: 'from-blue-500 to-blue-400',
  },
  {
    icon: Zap,
    name: 'JavaScript',
    role: 'Logic',
    description: 'Core programming logic for real-time updates, data simulation, and DOM manipulation.',
    features: ['Real-time updates', 'Event handling', 'Data simulation'],
    color: 'from-yellow-500 to-yellow-400',
  },
  {
    icon: Code2,
    name: 'React',
    role: 'Framework',
    description: 'Component-based architecture for building modular, maintainable user interfaces.',
    features: ['Components', 'State management', 'Virtual DOM'],
    color: 'from-cyan-500 to-cyan-400',
  },
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technologies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Technology</span>{' '}
            <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built using modern web technologies for optimal performance and maintainability.
          </p>
        </div>

        {/* Tech Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="card-futuristic group hover:scale-[1.02] transition-all duration-300"
            >
              {/* Icon with gradient */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <tech.icon className="w-8 h-8 text-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="text-xs text-primary font-medium mb-1">{tech.role}</div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                {tech.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {tech.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {tech.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Note */}
        <div className="mt-16 p-6 rounded-xl border border-border bg-card/50 text-center">
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">Enterprise-Grade:</span> Built with a modular architecture that ensures
            high availability, fault tolerance, and seamless integration with existing enterprise systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
