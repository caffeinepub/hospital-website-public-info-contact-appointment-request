import { useNavigate } from '@tanstack/react-router';
import { Heart, Stethoscope, Activity, TestTube, Ambulance, Users } from 'lucide-react';
import ServiceCard from '@/components/shared/ServiceCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ServiceHighlights() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Ambulance,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response team and advanced life support systems.',
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Comprehensive primary care for all your health concerns with experienced physicians.',
    },
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced cardiac care with state-of-the-art diagnostic and treatment facilities.',
    },
    {
      icon: Activity,
      title: 'Physiotherapy',
      description: 'Expert rehabilitation services to help you recover and regain mobility.',
    },
    {
      icon: TestTube,
      title: 'Laboratory Services',
      description: 'Complete diagnostic testing with accurate results and quick turnaround times.',
    },
    {
      icon: Users,
      title: 'Occupational Health',
      description: 'Comprehensive workplace health solutions and employee wellness programs.',
    },
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Medical Services</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare solutions delivered with expertise, compassion, and cutting-edge technology
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-12">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate({ to: '/services' })}
            className="group"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
