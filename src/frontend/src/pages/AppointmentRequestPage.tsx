import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';
import AppointmentRequestForm from '../components/forms/AppointmentRequestForm';
import { getPageTitle } from '@/config/branding';

export default function AppointmentRequestPage() {
  useEffect(() => {
    document.title = getPageTitle('Book Appointment');
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Book an Appointment</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Request an appointment with one of our specialists. We'll confirm your booking within 24
              hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Information */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">What to Expect</h2>
              <p className="text-muted-foreground mb-8">
                Complete the form to request an appointment. Our scheduling team will review your
                request and contact you to confirm the date and time.
              </p>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Calendar className="h-5 w-5 text-primary mt-1" />
                    <div className="space-y-1">
                      <CardTitle className="text-base">Step 1: Submit Request</CardTitle>
                      <CardDescription>
                        Fill out the appointment request form with your preferred date and time.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div className="space-y-1">
                      <CardTitle className="text-base">Step 2: We'll Contact You</CardTitle>
                      <CardDescription>
                        Our team will call or email you within 24 hours to confirm your appointment.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                    <div className="space-y-1">
                      <CardTitle className="text-base">Step 3: Visit Us</CardTitle>
                      <CardDescription>
                        Arrive 15 minutes early with your insurance card and ID for check-in.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Need immediate care?</strong> For emergencies,
                  call 911 or visit our Emergency Department. For urgent but non-emergency care, visit
                  our Urgent Care clinic (no appointment needed).
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Appointment Form */}
          <div className="lg:col-span-3">
            <AppointmentRequestForm />
          </div>
        </div>
      </section>
    </div>
  );
}
