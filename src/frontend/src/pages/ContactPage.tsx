import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import PageHero from '@/components/layout/PageHero';
import PageHeroImage from '@/components/layout/PageHeroImage';
import Section from '@/components/layout/Section';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for appointments, inquiries, or feedback"
        variant="pattern"
      >
        <PageHeroImage
          src="/assets/generated/hospital-exterior.dim_1600x900.png"
          alt="Mahalaxmi Health Care hospital exterior"
          width={1600}
          height={900}
          loading="eager"
          className="mt-8 max-w-4xl mx-auto"
        />
      </PageHero>

      {/* Reception Photo */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Visit Our Reception</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our friendly staff is ready to assist you with appointments and inquiries
          </p>
        </div>
        <PageHeroImage
          src="/assets/generated/contact-reception.dim_1600x900.png"
          alt="Reception desk at Mahalaxmi Health Care"
          width={1600}
          height={900}
          loading="lazy"
          className="max-w-5xl mx-auto"
        />
      </Section>

      {/* Contact Information */}
      <Section variant="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help with all your healthcare needs
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-2">
                <Phone className="h-10 w-10 text-primary" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p className="text-xs text-muted-foreground mt-1">Mon-Sat: 9 AM - 6 PM</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-2">
                <Mail className="h-10 w-10 text-primary" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground break-all">
                <a href="mailto:info@mahalaxmihealthcare.com" className="hover:text-primary transition-colors">
                  info@mahalaxmihealthcare.com
                </a>
              </p>
              <p className="text-xs text-muted-foreground mt-1">24-48 hour response</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-2">
                <MapPin className="h-10 w-10 text-primary" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                123 Healthcare Avenue<br />
                Medical District<br />
                City, State 123456
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-2">
                <Clock className="h-10 w-10 text-primary" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Mon-Sat: 9 AM - 6 PM<br />
                Sunday: Closed<br />
                Emergency: 24/7
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact Form */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Send Us a Message</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>
    </div>
  );
}
