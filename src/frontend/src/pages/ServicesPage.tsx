import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Heart,
  Stethoscope,
  Brain,
  Bone,
  Baby,
  Eye,
  Activity,
  Pill,
  Syringe,
  Microscope,
  Ambulance,
  UserPlus,
  Droplet,
  Bandage,
} from 'lucide-react';
import { getPageTitle } from '@/config/branding';
import { CONTACT_DETAILS } from '@/config/contactDetails';

const services = [
  {
    icon: Ambulance,
    title: 'Emergency Medicine',
    description:
      '24/7 emergency care with rapid response teams, trauma services, and critical care capabilities for life-threatening conditions.',
  },
  {
    icon: Heart,
    title: 'Cardiology',
    description:
      'Comprehensive heart care including diagnostics, interventional procedures, cardiac rehabilitation, and preventive cardiology.',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description:
      'Treatment for bone, joint, and muscle conditions including sports medicine, joint replacement, and spine surgery.',
  },
  {
    icon: Brain,
    title: 'Neurology',
    description:
      'Expert care for neurological conditions including stroke, epilepsy, Parkinson\'s disease, and multiple sclerosis.',
  },
  {
    icon: Brain,
    title: 'Brain Stroke Care',
    description:
      'Specialized stroke treatment with rapid intervention, advanced imaging, clot-busting therapies, and comprehensive rehabilitation programs for optimal recovery.',
  },
  {
    icon: Baby,
    title: 'Maternity & Pediatrics',
    description:
      'Complete care for mothers and children including prenatal care, delivery services, NICU, and pediatric specialties.',
  },
  {
    icon: Activity,
    title: 'Surgery',
    description:
      'Advanced surgical services including minimally invasive procedures, robotic surgery, and comprehensive post-operative care.',
  },
  {
    icon: Stethoscope,
    title: 'Primary Care',
    description:
      'Family medicine and internal medicine for routine checkups, preventive care, chronic disease management, and wellness.',
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description:
      'Complete eye care including cataract surgery, LASIK, glaucoma treatment, and retinal disease management.',
  },
  {
    icon: Pill,
    title: 'Oncology',
    description:
      'Comprehensive cancer care with medical oncology, radiation therapy, surgical oncology, and supportive services.',
  },
  {
    icon: Microscope,
    title: 'Laboratory Services',
    description:
      'State-of-the-art diagnostic testing including blood work, pathology, microbiology, and molecular diagnostics.',
  },
  {
    icon: Syringe,
    title: 'Radiology & Imaging',
    description:
      'Advanced imaging services including MRI, CT, ultrasound, X-ray, mammography, and interventional radiology.',
  },
  {
    icon: UserPlus,
    title: 'Rehabilitation',
    description:
      'Physical therapy, occupational therapy, speech therapy, and cardiac rehabilitation programs for recovery and wellness.',
  },
  {
    icon: Droplet,
    title: 'Diabetes Care',
    description:
      'Comprehensive diabetes management including blood sugar monitoring, medication management, nutrition counseling, and lifestyle education.',
  },
  {
    icon: Bandage,
    title: 'Diabetes Wound Care',
    description:
      'Specialized treatment for diabetic foot ulcers and wounds with advanced healing therapies, infection control, and prevention strategies.',
  },
];

export default function ServicesPage() {
  useEffect(() => {
    document.title = getPageTitle('Our Services');
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Comprehensive Medical Services
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              From emergency care to specialized treatments, we offer a full spectrum of healthcare
              services to meet your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="h-full">
                <CardHeader>
                  <Icon className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-muted/30 border-y border-border/40">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Need Help Finding the Right Service?</h2>
            <p className="text-lg text-muted-foreground">
              Our patient care coordinators are available to help you navigate our services and connect
              you with the right specialist for your needs.
            </p>
            <p className="text-muted-foreground">
              Call us at <span className="font-semibold text-foreground">{CONTACT_DETAILS.phone}</span> or use
              our online appointment request form.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
