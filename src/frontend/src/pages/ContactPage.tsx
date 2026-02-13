import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ContactForm from '@/components/forms/ContactForm';
import { CONTACT_DETAILS, getEmergencyPhone } from '@/config/contactDetails';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const emergencyPhone = getEmergencyPhone();
  const showEmergencyPhone = CONTACT_DETAILS.emergency !== '';

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with us for appointments, inquiries, or any assistance you need
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <Card>
            <CardHeader>
              <Phone className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-muted-foreground hover:text-primary">
                {CONTACT_DETAILS.phone}
              </a>
              {showEmergencyPhone && (
                <>
                  <div className="text-sm text-muted-foreground mt-2">Emergency:</div>
                  <a href={`tel:${emergencyPhone}`} className="text-destructive hover:text-destructive/80">
                    {emergencyPhone}
                  </a>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Mail className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="text-muted-foreground hover:text-primary break-all"
              >
                {CONTACT_DETAILS.email}
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MapPin className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{CONTACT_DETAILS.address}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-sm">
                <div>
                  <div className="font-medium">Emergency</div>
                  <div className="text-muted-foreground">{CONTACT_DETAILS.hours.emergency}</div>
                </div>
                <div>
                  <div className="font-medium">Outpatient</div>
                  <div className="text-muted-foreground">{CONTACT_DETAILS.hours.outpatient}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
