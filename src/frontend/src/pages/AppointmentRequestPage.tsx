import { useEffect } from 'react';
import { getPageTitle } from '@/config/branding';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, FileText } from 'lucide-react';
import AppointmentRequestForm from '@/components/forms/AppointmentRequestForm';

export default function AppointmentRequestPage() {
  useEffect(() => {
    document.title = getPageTitle('Book Appointment');
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Book an Appointment</h1>
            <p className="text-lg text-muted-foreground">
              Schedule your visit with our healthcare professionals. We'll confirm your appointment shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card className="text-center">
            <CardHeader>
              <FileText className="h-10 w-10 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">1. Fill the Form</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Provide your details and preferred appointment time</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Calendar className="h-10 w-10 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">2. We'll Confirm</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Our team will contact you to confirm your appointment</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Clock className="h-10 w-10 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">3. Visit Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Arrive on time for your scheduled appointment</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="container pb-16 md:pb-24">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Appointment Request Form</CardTitle>
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
