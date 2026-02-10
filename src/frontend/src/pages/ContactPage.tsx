import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/forms/ContactForm';
import { getPageTitle } from '@/config/branding';
import { CONTACT_DETAILS } from '@/config/contactDetails';

export default function ContactPage() {
  useEffect(() => {
    document.title = getPageTitle('Contact Us');
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              We're here to help. Reach out to us with any questions or concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have a question or need assistance? Fill out the form and our team will respond within
                24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div className="space-y-1">
                      <CardTitle className="text-base">Phone</CardTitle>
                      <CardDescription>
                        Main: {CONTACT_DETAILS.phone}
                        <br />
                        Emergency: {CONTACT_DETAILS.emergency}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div className="space-y-1">
                      <CardTitle className="text-base">Email</CardTitle>
                      <CardDescription>{CONTACT_DETAILS.email}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div className="space-y-1">
                      <CardTitle className="text-base">Address</CardTitle>
                      <CardDescription>
                        {CONTACT_DETAILS.address}
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
                      <CardTitle className="text-base">Hours</CardTitle>
                      <CardDescription>
                        Emergency: {CONTACT_DETAILS.hours.emergency}
                        <br />
                        Outpatient: {CONTACT_DETAILS.hours.outpatient}
                        <br />
                        Urgent Care: {CONTACT_DETAILS.hours.urgentCare}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
