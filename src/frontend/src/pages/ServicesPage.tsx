import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';
import { getEmergencyPhone, getMainPhoneTel } from '@/config/contactDetails';
import {
  Heart,
  Stethoscope,
  Activity,
  Brain,
  Bone,
  Eye,
  Baby,
  Syringe,
  Pill,
  Microscope,
  Scan,
  XCircle,
  Droplet,
  Thermometer,
  Scissors,
  Zap,
  Waves,
  Phone,
} from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export default function ServicesPage() {
  const navigate = useNavigate();
  const emergencyPhone = getEmergencyPhone();
  const mainPhoneTel = getMainPhoneTel();

  const services = [
    {
      title: 'Emergency Care',
      desc: '24/7 emergency medical services with rapid response team and advanced life support',
      icon: Heart,
    },
    {
      title: 'General Medicine',
      desc: 'Comprehensive primary care, preventive health services, and routine medical consultations',
      icon: Stethoscope,
    },
    {
      title: 'Cardiology',
      desc: 'Heart health services including diagnosis, treatment, and management of cardiovascular conditions',
      icon: Activity,
    },
    {
      title: 'Neurology',
      desc: 'Specialized care for neurological disorders, brain, and nervous system conditions',
      icon: Brain,
    },
    {
      title: 'Orthopedics',
      desc: 'Treatment of bone, joint, and musculoskeletal system disorders and injuries',
      icon: Bone,
    },
    {
      title: 'Ophthalmology',
      desc: 'Comprehensive eye care services including vision testing and eye disease treatment',
      icon: Eye,
    },
    {
      title: 'Pediatrics',
      desc: 'Specialized medical care for infants, children, and adolescents',
      icon: Baby,
    },
    {
      title: 'Vaccination',
      desc: 'Immunization services for children and adults with all essential vaccines',
      icon: Syringe,
    },
    {
      title: 'Pharmacy',
      desc: 'In-house pharmacy with a wide range of medications and pharmaceutical care',
      icon: Pill,
    },
    {
      title: 'Laboratory (Lab Facilities)',
      desc: 'Complete diagnostic laboratory services with accurate and timely test results',
      icon: Microscope,
    },
    {
      title: 'CT Scan',
      desc: 'Advanced CT scanning technology for detailed diagnostic imaging',
      icon: Scan,
    },
    {
      title: 'X-Ray',
      desc: 'Digital X-ray services for quick and accurate diagnostic imaging',
      icon: XCircle,
    },
    {
      title: 'Pathology',
      desc: 'Comprehensive pathology services for disease diagnosis and monitoring',
      icon: Droplet,
    },
    {
      title: 'General Surgery',
      desc: 'Surgical procedures performed by experienced surgeons with modern techniques',
      icon: Scissors,
    },
    {
      title: 'Physiotherapy',
      desc: 'Rehabilitation and physical therapy services for injury recovery and pain management',
      icon: Zap,
    },
    {
      title: 'Ultrasound',
      desc: 'Diagnostic ultrasound imaging for various medical conditions',
      icon: Waves,
    },
    {
      title: 'Fever Clinic',
      desc: 'Specialized clinic for fever evaluation, diagnosis, and treatment',
      icon: Thermometer,
    },
    {
      title: 'Dental Care',
      desc: 'Comprehensive dental services including preventive care and treatments',
      icon: Stethoscope,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="Our Medical Services"
        subtitle="Comprehensive healthcare services delivered by experienced professionals with state-of-the-art facilities"
        variant="pattern"
      />

      {/* Services Grid */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="muted">
        <Card className="bg-gradient-to-br from-primary/10 to-background border-primary/20 shadow-medium max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Need Medical Assistance?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team is ready to help you. Book an appointment or call us for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate({ to: '/appointments' })}>
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={mainPhoneTel}>
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call: {emergencyPhone}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
