import { useNavigate } from '@tanstack/react-router';
import { getEmergencyPhone, getEmergencyPhoneTel } from '@/config/contactDetails';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Heart, Users, Clock, Phone, Ambulance, Search, Shield, Award, Stethoscope, Activity } from 'lucide-react';
import OrganizationJsonLd from '@/components/seo/OrganizationJsonLd';

export default function HomePage() {
  const navigate = useNavigate();
  const emergencyPhone = getEmergencyPhone();
  const emergencyPhoneTel = getEmergencyPhoneTel();
  const googleSearchUrl = 'https://www.google.com/search?q=Mahalakshmi+Health+Care';

  return (
    <div className="flex flex-col">
      <OrganizationJsonLd />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Activity className="h-4 w-4" />
                    Trusted Healthcare Provider
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Your Health,<br />Our Priority
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Mahalaxmi Health Care provides comprehensive medical services with compassion and excellence. 
                  Our experienced team is dedicated to your wellbeing.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => navigate({ to: '/appointments' })} className="shadow-soft">
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate({ to: '/services' })}>
                  Our Services
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a
                    href={googleSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Search className="h-5 w-5" />
                    Search on Google
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-medium border border-border/40">
                <img
                  src="/assets/generated/mahalaxmi-health-care-hero.dim_1600x700.png"
                  alt="Mahalaxmi Health Care"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border shadow-medium rounded-xl p-6 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">1000+</p>
                    <p className="text-sm text-muted-foreground">Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Emergency Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <Card className="border-destructive/20 shadow-medium overflow-hidden">
            <div className="bg-gradient-to-br from-destructive/5 to-background">
              <CardContent className="p-8 md:p-12">
                <div className="grid gap-8 lg:grid-cols-2 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10">
                      <Ambulance className="h-8 w-8 text-destructive" />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-bold">24/7 Emergency Services</h2>
                      <p className="text-lg text-muted-foreground">
                        Round-the-clock emergency medical care with rapid response team. 
                        We're here when you need us most, day or night.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" variant="destructive" asChild className="shadow-soft">
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
                    <Card className="border-border/40">
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 flex-shrink-0">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Immediate Response</h3>
                          <p className="text-sm text-muted-foreground">
                            Our emergency team responds within minutes to provide critical care
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-border/40">
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 flex-shrink-0">
                          <Stethoscope className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Expert Medical Staff</h3>
                          <p className="text-sm text-muted-foreground">
                            Experienced doctors and nurses available around the clock
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-border/40">
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 flex-shrink-0">
                          <Activity className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Advanced Equipment</h3>
                          <p className="text-sm text-muted-foreground">
                            State-of-the-art medical technology for accurate diagnosis
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services delivered with expertise and compassion
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/40 hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cardiology</CardTitle>
                <CardDescription>
                  Advanced cardiac care with state-of-the-art diagnostic and treatment facilities
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border/40 hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>General Medicine</CardTitle>
                <CardDescription>
                  Comprehensive primary care services for all your health needs
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border/40 hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                  <Stethoscope className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Pediatrics</CardTitle>
                <CardDescription>
                  Specialized care for infants, children, and adolescents
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" onClick={() => navigate({ to: '/services' })}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence in healthcare through commitment, expertise, and compassion
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Trusted Care</h3>
              <p className="text-muted-foreground">
                Years of experience providing quality healthcare to our community
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mx-auto">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Expert Team</h3>
              <p className="text-muted-foreground">
                Highly qualified doctors and medical professionals dedicated to your health
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mx-auto">
                <Activity className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Modern Facilities</h3>
              <p className="text-muted-foreground">
                State-of-the-art medical equipment and comfortable patient care environment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container">
          <Card className="border-primary/20 shadow-medium overflow-hidden">
            <div className="bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
                  <p className="text-lg text-muted-foreground">
                    Book an appointment today and experience quality healthcare with a personal touch
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" onClick={() => navigate({ to: '/appointments' })} className="shadow-soft">
                      Book Appointment
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })}>
                      Contact Us
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
