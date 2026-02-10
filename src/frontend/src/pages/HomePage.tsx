import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { getPageTitle } from '@/config/branding';
import { getEmergencyPhone, getEmergencyPhoneTel } from '@/config/contactDetails';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Clock, Phone, Ambulance } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();
  const emergencyPhone = getEmergencyPhone();
  const emergencyPhoneTel = getEmergencyPhoneTel();

  useEffect(() => {
    document.title = getPageTitle('Home');
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Your Health, Our Priority
              </h1>
              <p className="text-lg text-muted-foreground">
                Mahalaxmi Health Care provides comprehensive medical services with compassion and excellence. 
                Our experienced team is dedicated to your wellbeing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => navigate({ to: '/appointments' })}>
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate({ to: '/services' })}>
                  Our Services
                </Button>
              </div>
            </div>
            <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden shadow-xl">
              <img
                src="/assets/generated/mahalaxmi-health-care-hero.dim_1600x700.png"
                alt="Mahalaxmi Health Care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Emergency Section */}
      <section className="bg-gradient-to-br from-destructive/10 via-background to-background py-16 md:py-24">
        <div className="container">
          <Card className="border-destructive/20 bg-gradient-to-br from-destructive/5 to-background">
            <CardContent className="p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10">
                    <Ambulance className="h-8 w-8 text-destructive" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">24/7 Emergency Services</h2>
                  <p className="text-lg text-muted-foreground">
                    Round-the-clock emergency medical care with rapid response team. 
                    We're here when you need us most, day or night.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" variant="destructive" asChild>
                      <a href={emergencyPhoneTel}>
                        <Phone className="mr-2 h-5 w-5" />
                        Call: {emergencyPhone}
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => navigate({ to: '/emergency' })}>
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                    <Clock className="h-6 w-6 text-destructive flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Always Available</div>
                      <div className="text-sm text-muted-foreground">
                        Our emergency department never closes
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                    <Heart className="h-6 w-6 text-destructive flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Expert Care</div>
                      <div className="text-sm text-muted-foreground">
                        Experienced emergency medical professionals
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                    <Ambulance className="h-6 w-6 text-destructive flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Rapid Response</div>
                      <div className="text-sm text-muted-foreground">
                        Quick triage and immediate treatment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Services Highlight */}
      <section className="container py-16 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Care Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine checkups to specialized treatments, we offer a full range of medical services
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Emergency Care', desc: '24/7 emergency medical services with rapid response team', icon: Heart },
            { title: 'General Medicine', desc: 'Comprehensive primary care and preventive health services', icon: Users },
            { title: 'Specialized Care', desc: 'Expert specialists in cardiology, orthopedics, and more', icon: Clock },
          ].map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" onClick={() => navigate({ to: '/services' })}>
            View All Services
          </Button>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Medical Professionals</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">Patients Served Annually</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <Card className="bg-gradient-to-br from-primary/10 to-background border-primary/20">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Schedule an appointment today and experience quality healthcare with compassion
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => navigate({ to: '/appointments' })}>
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })}>
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
