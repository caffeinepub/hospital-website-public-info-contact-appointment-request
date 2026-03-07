import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, FileText } from 'lucide-react';
import AppointmentRequestForm from '@/components/forms/AppointmentRequestForm';
import { withCacheBust } from '@/utils/generatedAssets';
import PdfExportButton from '@/components/shared/PdfExportButton';

export default function AppointmentRequestPage() {
  const processSteps = [
    {
      icon: Calendar,
      title: 'Choose Your Date',
      description: 'Select your preferred appointment date and time',
    },
    {
      icon: FileText,
      title: 'Provide Details',
      description: 'Fill in your information and reason for visit',
    },
    {
      icon: Clock,
      title: 'Get Confirmation',
      description: 'Receive confirmation and appointment details',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* PDF Export Button - floating */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden">
        <PdfExportButton filename="mahalaxmi-health-care-appointment.pdf" />
      </div>

      {/* Hero Section */}
      <section className="section-spacing-sm bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Book an Appointment</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Schedule your visit with our experienced medical team
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Images */}
      <section className="section-spacing bg-muted/30">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={withCacheBust('/assets/generated/doctor-consultation.dim_1600x900.png')}
                alt="Doctor consultation"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">Expert Consultations</h3>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={withCacheBust('/assets/generated/hospital-corridor.dim_1200x800.png')}
                alt="Hospital corridor"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">Modern Facilities</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps and Form */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
            {/* Process Steps */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                <p className="text-muted-foreground text-lg">
                  Booking an appointment is quick and easy. Follow these simple steps.
                </p>
              </div>

              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-primary">Step {index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Need Immediate Help?</h3>
                  <p className="text-muted-foreground mb-4">
                    For medical emergencies, please call our emergency line immediately.
                  </p>
                  <a
                    href="tel:+1234567899"
                    className="text-destructive font-bold text-xl hover:underline"
                  >
                    Emergency: +1 (234) 567-899
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Appointment Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Request an Appointment</CardTitle>
                </CardHeader>
                <CardContent>
                  <AppointmentRequestForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
