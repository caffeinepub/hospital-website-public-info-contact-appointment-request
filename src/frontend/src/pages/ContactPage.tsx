import { useEffect } from 'react';
import { getPageTitle } from '@/config/branding';
import { CONTACT_DETAILS } from '@/config/contactDetails';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

export default function ContactPage() {
  useEffect(() => {
    document.title = getPageTitle('Contact Us');
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with our team. We're here to help with your healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions or need assistance? Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="grid gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Phone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">General: <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-foreground hover:text-primary">{CONTACT_DETAILS.phone}</a></p>
                  {CONTACT_DETAILS.emergency && (
                    <p className="text-sm text-muted-foreground">Emergency: <a href={`tel:${CONTACT_DETAILS.emergency}`} className="text-foreground hover:text-primary">{CONTACT_DETAILS.emergency}</a></p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-sm text-muted-foreground hover:text-primary">
                    {CONTACT_DETAILS.email}
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Address</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{CONTACT_DETAILS.address}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-1">
                  <p className="text-sm text-muted-foreground">Emergency: {CONTACT_DETAILS.hours.emergency}</p>
                  <p className="text-sm text-muted-foreground">Outpatient: {CONTACT_DETAILS.hours.outpatient}</p>
                  <p className="text-sm text-muted-foreground">Urgent Care: {CONTACT_DETAILS.hours.urgentCare}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
