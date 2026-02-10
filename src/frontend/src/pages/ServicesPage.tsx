import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { getPageTitle } from '@/config/branding';
import { getEmergencyPhone, getEmergencyPhoneTel, getMainPhoneTel, CONTACT_DETAILS } from '@/config/contactDetails';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Heart, 
  Stethoscope, 
  Baby, 
  Bone, 
  Eye, 
  Brain,
  Activity,
  Pill,
  Syringe,
  Thermometer,
  Scissors,
  Microscope,
  Ambulance,
  HeartPulse,
  Droplet
} from 'lucide-react';

export default function ServicesPage() {
  const navigate = useNavigate();
  const emergencyPhone = getEmergencyPhone();
  const emergencyPhoneTel = getEmergencyPhoneTel();
  const mainPhoneTel = getMainPhoneTel();

  useEffect(() => {
    document.title = getPageTitle('Services');
  }, []);

  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      desc: 'Comprehensive heart care including diagnostics, treatment, and cardiac rehabilitation',
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      desc: 'Primary care services for routine checkups, preventive care, and chronic disease management',
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      desc: 'Specialized care for infants, children, and adolescents with compassionate approach',
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      desc: 'Treatment for bone, joint, and muscle conditions including sports injuries',
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      desc: 'Complete eye care services from routine exams to advanced surgical procedures',
    },
    {
      icon: Brain,
      title: 'Neurology',
      desc: 'Expert diagnosis and treatment of nervous system disorders and conditions',
    },
    {
      icon: Activity,
      title: 'Critical Care',
      desc: 'Intensive care unit with advanced life support for critically ill patients',
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      desc: 'Full-service pharmacy with prescription medications and health consultations',
    },
    {
      icon: Syringe,
      title: 'Vaccination',
      desc: 'Comprehensive immunization services for all ages following recommended schedules',
    },
    {
      icon: Thermometer,
      title: 'Diagnostic Services',
      desc: 'Advanced laboratory and imaging services for accurate diagnosis',
    },
    {
      icon: Scissors,
      title: 'Surgery',
      desc: 'Modern surgical facilities with experienced surgeons and post-operative care',
    },
    {
      icon: Microscope,
      title: 'Pathology',
      desc: 'Comprehensive laboratory testing and diagnostic pathology services',
    },
    {
      icon: Ambulance,
      title: 'Emergency Care',
      desc: '24/7 emergency services with rapid response and trauma care capabilities',
    },
    {
      icon: HeartPulse,
      title: 'Physiotherapy',
      desc: 'Rehabilitation services to restore function and improve quality of life',
    },
    {
      icon: Droplet,
      title: 'Diabetes Care',
      desc: 'Specialized diabetes management including education and treatment planning',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Medical Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive healthcare services delivered by experienced professionals using modern medical technology
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <Card className="bg-gradient-to-br from-primary/10 to-background border-primary/20">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Need Medical Assistance?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our team is ready to help. Schedule an appointment or contact us for more information about our services.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={() => navigate({ to: '/appointments' })}>
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })}>
                  Contact Us
                </Button>
              </div>
              <div className="pt-4 text-sm text-muted-foreground">
                <p>Emergency? Call <a href={emergencyPhoneTel} className="font-bold text-destructive hover:underline">{emergencyPhone}</a> immediately</p>
                <p className="mt-1">General Inquiries: <a href={mainPhoneTel} className="font-medium text-primary hover:underline">{CONTACT_DETAILS.phone}</a></p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
