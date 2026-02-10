import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Phone, Heart, Stethoscope, Users, Building2 } from 'lucide-react';
import { getPageTitle } from '@/config/branding';

export default function HomePage() {
  useEffect(() => {
    document.title = getPageTitle('Quality Healthcare for Your Family');
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
        <div className="container py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Your Health, Our Priority
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Experience compassionate, comprehensive healthcare from our dedicated team of medical
                professionals. We're here for you 24/7.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="text-base">
                  <Link to="/appointment">Book an Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/assets/generated/hospital-hero.dim_1600x600.png"
                alt="Modern hospital facility with welcoming atmosphere"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="border-y border-border/40 bg-destructive/5">
        <div className="container py-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:text-left">
            <Phone className="h-6 w-6 text-destructive" />
            <p className="text-sm font-medium">
              <span className="text-destructive">Emergency?</span> Call 911 or visit our Emergency
              Department — Open 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="container py-16 md:py-24">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Core Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive medical care across multiple specialties, all under one roof.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Heart className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Emergency Care</CardTitle>
              <CardDescription>
                24/7 emergency services with state-of-the-art trauma care facilities.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Stethoscope className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Primary Care</CardTitle>
              <CardDescription>
                Comprehensive family medicine and preventive care for all ages.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Specialist Care</CardTitle>
              <CardDescription>
                Expert specialists in cardiology, orthopedics, neurology, and more.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Building2 className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Surgical Services</CardTitle>
              <CardDescription>
                Advanced surgical procedures with minimally invasive options.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Urgent Care</CardTitle>
              <CardDescription>
                Walk-in care for non-life-threatening conditions with minimal wait times.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Maternity Care</CardTitle>
              <CardDescription>
                Complete prenatal, delivery, and postnatal care for mothers and babies.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-muted/30 border-y border-border/40">
        <div className="container py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 text-center max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Medical Professionals</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Patients Served Annually</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Schedule Your Visit?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Our friendly staff is ready to help you book an appointment with the right specialist
                for your needs.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link to="/appointment">Book Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
