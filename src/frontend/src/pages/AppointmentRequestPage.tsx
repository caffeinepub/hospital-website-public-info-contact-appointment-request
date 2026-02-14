import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, FileText, CheckCircle } from 'lucide-react';
import AppointmentRequestForm from '@/components/forms/AppointmentRequestForm';
import PageHero from '@/components/layout/PageHero';
import PageHeroImage from '@/components/layout/PageHeroImage';
import Section from '@/components/layout/Section';

export default function AppointmentRequestPage() {
  const steps = [
    {
      icon: FileText,
      title: 'Fill the Form',
      desc: 'Provide your details and preferred appointment time',
    },
    {
      icon: Clock,
      title: 'We Review',
      desc: 'Our team reviews your request and checks availability',
    },
    {
      icon: CheckCircle,
      title: 'Confirmation',
      desc: 'You receive confirmation via phone or email',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="Book an Appointment"
        subtitle="Schedule your visit with our medical professionals"
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

      {/* Consultation Room Photo */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Consultation Rooms</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Private, comfortable spaces for your medical consultations
          </p>
        </div>
        <PageHeroImage
          src="/assets/generated/appointments-consult-room.dim_1600x900.png"
          alt="Consultation room at Mahalaxmi Health Care"
          width={1600}
          height={900}
          loading="lazy"
          className="max-w-5xl mx-auto"
        />
      </Section>

      {/* Process Steps */}
      <Section variant="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to book your appointment
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center space-y-4">
              <div className="relative inline-flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-10 w-10 text-primary" aria-hidden="true" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Appointment Form */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Calendar className="h-12 w-12 text-primary mx-auto" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-bold">Request an Appointment</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll contact you to confirm your appointment
            </p>
          </div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <AppointmentRequestForm />
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
