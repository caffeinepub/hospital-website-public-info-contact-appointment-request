import { useNavigate } from '@tanstack/react-router';
import { Calendar, Clock, MapPin, Phone, Stethoscope, Heart, Activity, Brain, Bone, Eye, Baby, Users } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Suite {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  specialties: string[];
  availability: string;
  location: string;
}

const suites: Suite[] = [
  {
    id: 'general-medicine',
    name: 'General Medicine Suite',
    icon: Stethoscope,
    description: 'Comprehensive primary care and internal medicine services for adults and families.',
    specialties: ['Primary Care', 'Preventive Medicine', 'Chronic Disease Management'],
    availability: 'Mon-Sat: 9:00 AM - 6:00 PM',
    location: 'Ground Floor, Wing A',
  },
  {
    id: 'cardiology',
    name: 'Cardiology Suite',
    icon: Heart,
    description: 'Advanced cardiac care with state-of-the-art diagnostic and treatment facilities.',
    specialties: ['Heart Disease', 'ECG & Echo', 'Cardiac Rehabilitation'],
    availability: 'Mon-Fri: 10:00 AM - 5:00 PM',
    location: 'First Floor, Wing B',
  },
  {
    id: 'emergency',
    name: 'Emergency Medicine Suite',
    icon: Activity,
    description: '24/7 emergency medical services with rapid response and critical care capabilities.',
    specialties: ['Trauma Care', 'Critical Care', 'Emergency Surgery'],
    availability: '24/7 - Always Open',
    location: 'Ground Floor, Emergency Wing',
  },
  {
    id: 'neurology',
    name: 'Neurology Suite',
    icon: Brain,
    description: 'Specialized care for neurological conditions and brain health.',
    specialties: ['Stroke Care', 'Epilepsy', 'Headache Management'],
    availability: 'Tue, Thu, Sat: 11:00 AM - 4:00 PM',
    location: 'Second Floor, Wing A',
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics Suite',
    icon: Bone,
    description: 'Expert treatment for bone, joint, and musculoskeletal conditions.',
    specialties: ['Joint Replacement', 'Sports Medicine', 'Fracture Care'],
    availability: 'Mon-Sat: 9:00 AM - 5:00 PM',
    location: 'First Floor, Wing C',
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology Suite',
    icon: Eye,
    description: 'Comprehensive eye care services from routine exams to advanced treatments.',
    specialties: ['Cataract Surgery', 'Glaucoma', 'Retinal Care'],
    availability: 'Mon, Wed, Fri: 10:00 AM - 4:00 PM',
    location: 'Second Floor, Wing B',
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics Suite',
    icon: Baby,
    description: 'Dedicated healthcare for infants, children, and adolescents in a child-friendly environment.',
    specialties: ['Well-Child Visits', 'Vaccinations', 'Growth Monitoring'],
    availability: 'Mon-Sat: 9:00 AM - 6:00 PM',
    location: 'Ground Floor, Wing B',
  },
  {
    id: 'family-medicine',
    name: 'Family Medicine Suite',
    icon: Users,
    description: 'Comprehensive healthcare for all ages, from newborns to seniors.',
    specialties: ['Family Health', 'Preventive Care', 'Health Screenings'],
    availability: 'Mon-Sat: 8:00 AM - 7:00 PM',
    location: 'Ground Floor, Wing C',
  },
];

export default function DoctorsPage() {
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        title="Doctor Suites"
        subtitle="Specialized medical departments with expert physicians dedicated to your health and wellness"
        variant="pattern"
        className="bg-gradient-to-br from-orange-50 via-background to-orange-50/30 dark:from-orange-950/20 dark:via-background dark:to-orange-950/10"
      >
        <Badge variant="secondary" className="bg-orange-100 text-orange-900 dark:bg-orange-900/30 dark:text-orange-100 border-orange-200 dark:border-orange-800">
          8 Specialized Departments
        </Badge>
      </PageHero>

      <Section>
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Our Medical Departments</h2>
            <p className="text-muted-foreground">
              Each suite is equipped with modern facilities and staffed by experienced medical professionals
              committed to providing exceptional care.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {suites.map((suite) => {
              const Icon = suite.icon;
              return (
                <Card
                  key={suite.id}
                  className="group hover:shadow-lg transition-all duration-300 border-orange-100 dark:border-orange-900/30 hover:border-orange-300 dark:hover:border-orange-700"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <CardTitle className="text-xl group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                          {suite.name}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="mt-3">{suite.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-orange-900 dark:text-orange-100">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {suite.specialties.map((specialty) => (
                          <Badge
                            key={specialty}
                            variant="secondary"
                            className="bg-orange-50 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300 border-orange-200 dark:border-orange-800"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 text-orange-500" aria-hidden="true" />
                        <span>{suite.availability}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-orange-500" aria-hidden="true" />
                        <span>{suite.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      <Section variant="muted" className="bg-gradient-to-br from-orange-50/50 via-muted/30 to-orange-50/30 dark:from-orange-950/10 dark:via-muted/30 dark:to-orange-950/5">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Ready to Schedule Your Visit?</h2>
            <p className="text-lg text-muted-foreground">
              Book an appointment with our specialized medical teams or contact us for more information
              about our services.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate({ to: '/appointments' })}
              className="bg-orange-600 hover:bg-orange-700 text-white dark:bg-orange-600 dark:hover:bg-orange-700"
            >
              <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate({ to: '/contact' })}
              className="border-orange-300 text-orange-700 hover:bg-orange-50 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-950/30"
            >
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
