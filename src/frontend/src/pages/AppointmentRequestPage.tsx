import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppointmentRequestForm from '@/components/forms/AppointmentRequestForm';
import { Calendar, Clock, FileText, CheckCircle } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export default function AppointmentRequestPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="Book an Appointment"
        subtitle="Schedule your visit with our medical professionals. We're here to help you."
        variant="pattern"
      />

      {/* Process Steps */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to book your appointment
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12 max-w-6xl mx-auto">
          {[
            {
              title: 'Fill the Form',
              desc: 'Provide your details and preferred time',
              icon: FileText,
            },
            {
              title: 'Choose Department',
              desc: 'Select the medical service you need',
              icon: Calendar,
            },
            {
              title: 'We Review',
              desc: 'Our team reviews your request',
              icon: Clock,
            },
            {
              title: 'Confirmation',
              desc: 'Receive appointment confirmation',
              icon: CheckCircle,
            },
          ].map((step, index) => (
            <Card key={step.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-2 relative">
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <step.icon className="h-10 w-10 text-primary" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Appointment Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">Request an Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              <AppointmentRequestForm />
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
