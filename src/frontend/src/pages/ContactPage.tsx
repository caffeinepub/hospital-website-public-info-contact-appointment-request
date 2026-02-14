import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ContactForm from '@/components/forms/ContactForm';
import { CONTACT_DETAILS, getEmergencyPhone } from '@/config/contactDetails';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export default function ContactPage() {
  const emergencyPhone = getEmergencyPhone();
  const showEmergencyPhone = CONTACT_DETAILS.emergency !== '';

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with us for appointments, inquiries, or any assistance you need"
        variant="pattern"
      />

      {/* Contact Information */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Phone className="h-8 w-8 text-primary mb-2" aria-hidden="true" />
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`tel:${CONTACT_DETAILS.phone}`}
                className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                {CONTACT_DETAILS.phone}
              </a>
              {showEmergencyPhone && (
                <>
                  <div className="text-sm text-muted-foreground mt-2">Emergency:</div>
                  <a
                    href={`tel:${emergencyPhone}`}
                    className="text-destructive hover:text-destructive/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  >
                    {emergencyPhone}
                  </a>
                </>
              )}
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Mail className="h-8 w-8 text-primary mb-2" aria-hidden="true" />
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="text-muted-foreground hover:text-primary break-all transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                {CONTACT_DETAILS.email}
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <MapPin className="h-8 w-8 text-primary mb-2" aria-hidden="true" />
              <CardTitle className="text-lg">Address</CardTitle>
            </CardHeader>
            <CardContent>
              <address className="text-sm text-muted-foreground not-italic">{CONTACT_DETAILS.address}</address>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Clock className="h-8 w-8 text-primary mb-2" aria-hidden="true" />
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
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
