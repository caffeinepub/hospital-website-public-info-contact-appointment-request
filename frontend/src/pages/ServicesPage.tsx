import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Stethoscope, 
  Heart, 
  Baby, 
  Bone, 
  Eye, 
  Brain, 
  Syringe,
  Activity,
  Pill,
  Microscope,
  Scan,
  Scissors,
  Thermometer,
  Droplet,
  Zap,
  Waves,
  Shield
} from 'lucide-react';
import { withCacheBust } from '@/utils/generatedAssets';
import PdfExportButton from '@/components/shared/PdfExportButton';

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Comprehensive primary care and health management',
    },
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced heart care and cardiovascular treatments',
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents',
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Treatment for bone, joint, and muscle conditions',
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care and vision services',
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert care for neurological disorders',
    },
    {
      icon: Syringe,
      title: 'Vaccination',
      description: 'Immunization services for all age groups',
    },
    {
      icon: Activity,
      title: 'Physiotherapy',
      description: 'Rehabilitation and physical therapy services',
    },
    {
      icon: Pill,
      title: 'Pharmacy',
      description: '24/7 in-house pharmacy with quality medications',
    },
    {
      icon: Microscope,
      title: 'Laboratory',
      description: 'Advanced diagnostic and pathology services',
    },
    {
      icon: Scan,
      title: 'Radiology',
      description: 'State-of-the-art imaging and diagnostic services',
    },
    {
      icon: Scissors,
      title: 'Surgery',
      description: 'Modern surgical facilities with expert surgeons',
    },
    {
      icon: Thermometer,
      title: 'Emergency Care',
      description: '24/7 emergency medical services',
    },
    {
      icon: Droplet,
      title: 'Dialysis',
      description: 'Comprehensive kidney care and dialysis services',
    },
    {
      icon: Zap,
      title: 'Critical Care',
      description: 'Intensive care unit with advanced life support',
    },
    {
      icon: Waves,
      title: 'Ultrasound',
      description: 'Advanced ultrasound and sonography services',
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Health screenings and wellness programs',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* PDF Export Button - floating */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden">
        <PdfExportButton filename="mahalaxmi-health-care-services.pdf" />
      </div>

      {/* Hero Section */}
      <section className="section-spacing-sm bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Our Medical Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive healthcare solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Services Highlight - moved to top for immediate visibility */}
      <section className="section-spacing bg-destructive/5 border-y border-destructive/20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-semibold">
                Available 24/7
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Emergency Services</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our emergency department is equipped with state-of-the-art facilities and staffed by experienced medical professionals ready to handle any medical emergency, 24 hours a day, 7 days a week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  variant="destructive"
                  onClick={() => navigate({ to: '/contact' })}
                >
                  Emergency Contact
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate({ to: '/appointments' })}
                >
                  Book Appointment
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={withCacheBust('/assets/generated/emergency-department.dim_1200x800.png')}
                alt="Emergency department"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Medical Technology - moved up to showcase capabilities */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto items-center">
            <div className="relative overflow-hidden rounded-xl shadow-lg order-2 lg:order-1">
              <img
                src={withCacheBust('/assets/generated/medical-equipment.dim_1200x800.png')}
                alt="Advanced medical equipment"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Advanced Medical Technology</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We invest in the latest medical equipment and technology to ensure accurate diagnoses and effective treatments. Our modern facilities are designed to provide the highest standard of care.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Scan className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>State-of-the-art diagnostic imaging equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Microscope className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Advanced laboratory and pathology services</span>
                </li>
                <li className="flex items-start gap-3">
                  <Activity className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Modern surgical and critical care facilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Grid - moved after technology showcase */}
      <section className="section-spacing bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Comprehensive Medical Services</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From routine checkups to specialized treatments, we're here for you
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - remains at bottom */}
      <section className="section-spacing bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Need Medical Assistance?</h2>
              <p className="text-lg md:text-xl text-white/90">
                Our team is ready to provide the care you need
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate({ to: '/appointments' })}
                className="text-base font-semibold shadow-lg"
              >
                Book Appointment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate({ to: '/contact' })}
                className="text-base font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
