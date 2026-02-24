import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from '@tanstack/react-router';
import { 
  Stethoscope, Heart, Baby, Bone, Eye, Ear, Brain, Microscope, 
  Activity, Syringe, Pill, Ambulance, TestTube, Scan, Users, 
  Thermometer, Droplet, Shield, AlertCircle, Phone
} from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import PageHeroImage from '@/components/layout/PageHeroImage';
import Section from '@/components/layout/Section';
import { getEmergencyPhone, getEmergencyPhoneTel } from '@/config/contactDetails';

export default function ServicesPage() {
  const navigate = useNavigate();
  const emergencyPhone = getEmergencyPhone();
  const emergencyPhoneTel = getEmergencyPhoneTel();

  const services = [
    {
      title: 'Emergency Services',
      desc: '24/7 emergency medical services and trauma care - Always available when you need us',
      icon: AlertCircle,
      featured: true,
    },
    {
      title: 'General Medicine',
      desc: 'Comprehensive primary care for common illnesses and health concerns',
      icon: Stethoscope,
    },
    {
      title: 'Cardiology',
      desc: 'Heart health assessment, treatment, and cardiovascular care',
      icon: Heart,
    },
    {
      title: 'Pediatrics',
      desc: 'Specialized medical care for infants, children, and adolescents',
      icon: Baby,
    },
    {
      title: 'Orthopedics',
      desc: 'Treatment of bone, joint, and musculoskeletal conditions',
      icon: Bone,
    },
    {
      title: 'Ophthalmology',
      desc: 'Eye care, vision testing, and treatment of eye conditions',
      icon: Eye,
    },
    {
      title: 'ENT (Ear, Nose, Throat)',
      desc: 'Diagnosis and treatment of ear, nose, and throat disorders',
      icon: Ear,
    },
    {
      title: 'Neurology',
      desc: 'Treatment of nervous system and neurological disorders',
      icon: Brain,
    },
    {
      title: 'Dermatology',
      desc: 'Skin care, treatment of skin conditions and cosmetic procedures',
      icon: Shield,
    },
    {
      title: 'Laboratory Services',
      desc: 'Complete diagnostic testing and pathology services',
      icon: Microscope,
    },
    {
      title: 'Radiology & Imaging',
      desc: 'X-ray, CT scan, ultrasound, and other imaging services',
      icon: Scan,
    },
    {
      title: 'Ambulance Services',
      desc: 'Emergency ambulance transport and pre-hospital care',
      icon: Ambulance,
    },
    {
      title: 'Physiotherapy',
      desc: 'Rehabilitation and physical therapy services',
      icon: Activity,
    },
    {
      title: 'Vaccination Services',
      desc: 'Immunization programs for children and adults',
      icon: Syringe,
    },
    {
      title: 'Pharmacy',
      desc: 'In-house pharmacy with prescription and OTC medications',
      icon: Pill,
    },
    {
      title: 'Health Checkups',
      desc: 'Comprehensive health screening and preventive care packages',
      icon: TestTube,
    },
    {
      title: 'Diabetes Care',
      desc: 'Specialized care and management for diabetic patients',
      icon: Droplet,
    },
    {
      title: 'Fever Clinic',
      desc: 'Dedicated clinic for fever assessment and treatment',
      icon: Thermometer,
    },
    {
      title: 'Geriatric Care',
      desc: 'Specialized healthcare services for elderly patients',
      icon: Users,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="Our Medical Services"
        subtitle="Comprehensive healthcare services delivered with expertise and compassion"
        variant="pattern"
      >
        <PageHeroImage
          src="/assets/generated/doctor-consultation.dim_1600x900.png"
          alt="Doctor consultation at Mahalaxmi Health Care"
          width={1600}
          height={900}
          loading="eager"
          className="mt-8 max-w-4xl mx-auto"
        />
      </PageHero>

      {/* Medical Equipment Photo */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Advanced Medical Equipment</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art technology for accurate diagnosis and effective treatment
          </p>
        </div>
        <PageHeroImage
          src="/assets/generated/services-equipment-collage.dim_1600x900.png"
          alt="Medical services equipment at Mahalaxmi Health Care"
          width={1600}
          height={900}
          loading="lazy"
          className="max-w-5xl mx-auto"
        />
      </Section>

      {/* Services Grid */}
      <Section variant="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Complete Healthcare Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine checkups to specialized treatments, we've got you covered
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service) => {
            if (service.featured) {
              return (
                <Card 
                  key={service.title} 
                  className="border-destructive/50 bg-destructive/5 hover:shadow-lg transition-all sm:col-span-2 lg:col-span-3"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-3">
                        <service.icon 
                          className="h-12 w-12 text-destructive flex-shrink-0" 
                          aria-hidden="true" 
                        />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-2xl">{service.title}</CardTitle>
                            <Badge variant="destructive" className="text-xs">24/7</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{service.desc}</p>
                        </div>
                      </div>
                      <Button 
                        size="lg" 
                        variant="destructive"
                        asChild
                        className="flex-shrink-0"
                      >
                        <a href={emergencyPhoneTel} className="flex items-center gap-2">
                          <Phone className="h-5 w-5" aria-hidden="true" />
                          <span className="font-bold">{emergencyPhone}</span>
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex gap-3">
                        <img
                          src="/assets/generated/emergency-room.dim_1600x900.png"
                          alt="Emergency room at Mahalaxmi Health Care"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex gap-3">
                        <img
                          src="/assets/generated/emergency-ambulance.dim_1600x900.png"
                          alt="Emergency ambulance services"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-background rounded-lg border border-destructive/20">
                      <p className="text-sm font-medium text-center">
                        <span className="text-destructive">Immediate medical attention</span> for trauma, cardiac emergencies, and critical care. Our emergency department is staffed 24/7 with experienced physicians and equipped with advanced life support systems.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            }

            return (
              <Card 
                key={service.title} 
                className="hover:shadow-lg transition-all"
              >
                <CardHeader>
                  <service.icon 
                    className="h-10 w-10 mb-2 text-primary" 
                    aria-hidden="true" 
                  />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <Card className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Need Medical Care?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book an appointment with our specialists or contact us for more information
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate({ to: '/appointments' })}>
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })}>
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
