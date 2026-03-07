import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ContactForm from '@/components/forms/ContactForm';
import { HOSPITAL_NAME } from '@/config/branding';
import { withCacheBust } from '@/utils/generatedAssets';
import PdfExportButton from '@/components/shared/PdfExportButton';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* PDF Export Button - floating */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden">
        <PdfExportButton filename="mahalaxmi-health-care-contact.pdf" />
      </div>

      {/* Hero Section */}
      <section className="section-spacing-sm bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Contact Us</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Get in touch with us for appointments, inquiries, or feedback
            </p>
          </div>
        </div>
      </section>

      {/* Reception Image */}
      <section className="section-spacing bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={withCacheBust('/assets/generated/hospital-reception.dim_1200x800.png')}
                alt="Hospital reception area"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">Visit Our Modern Facility</h2>
                  <p className="text-white/90 text-lg">Our friendly staff is ready to assist you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  We're here to help. Reach out to us through any of the following channels.
                </p>
              </div>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle>Address</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <address className="not-italic text-muted-foreground">
                    {HOSPITAL_NAME}<br />
                    123 Healthcare Avenue<br />
                    Medical District<br />
                    City, State 12345
                  </address>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle>Phone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <div className="font-medium">Main Line:</div>
                    <a href="tel:+1234567890" className="text-primary hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                  <div>
                    <div className="font-medium">Emergency:</div>
                    <a href="tel:+1234567899" className="text-destructive hover:underline font-semibold">
                      +1 (234) 567-899
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle>Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@mahalaxmihealthcare.com" className="text-primary hover:underline">
                    info@mahalaxmihealthcare.com
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle>Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between">
                      <span className="text-destructive font-medium">Emergency:</span>
                      <span className="font-semibold">24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
