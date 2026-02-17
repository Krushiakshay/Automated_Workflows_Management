import { Button } from '@/components/ui/button';

import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden bg-primary/5">
      <div className="section-container relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
          <span className="text-foreground">Transform Workforce</span>
          <br />
          <span className="gradient-text">Operations with Intelligence</span>
        </h2>
        
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Join leading enterprises optimizing their workforce with AI-driven analytics and real-time insights.
        </p>

        <Button variant="hero" size="xl" onClick={() => navigate('/home')}>
          Access Dashboard
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
