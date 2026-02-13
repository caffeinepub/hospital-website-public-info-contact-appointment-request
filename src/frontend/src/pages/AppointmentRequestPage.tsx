import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppointmentRequestForm from '@/components/forms/AppointmentRequestForm';
import { Calendar, Clock, FileText, CheckCircle } from 'lucide-react';

export default function AppointmentRequestPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Book an Appointment</h1>
            <p className="text-lg text-muted-foreground">
              Schedule your visit with our experienced medical professionals. We're here to help you.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="container py-16 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to book your appointment
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          {[
            { title: 'Fill Form', desc: 'Complete the appointment request form', icon: FileText },
            { title: 'Choose Date', desc: 'Select your preferred date and time', icon: Calendar },
            { title: 'Confirmation', desc: 'Receive confirmation from our team', icon: CheckCircle },
            { title: 'Visit', desc: 'Visit us at the scheduled time', icon: Clock },
          ].map((step, index) => (
            <Card key={step.title} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-2 relative">
                  <step.icon className="h-10 w-10 text-primary" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
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
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Request an Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              <AppointmentRequestForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
