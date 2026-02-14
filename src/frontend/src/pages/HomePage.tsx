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
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] bg-repeat"
          style={{
            backgroundImage: 'url(/assets/generated/medical-pattern.dim_1800x1200.png)',
            backgroundSize: '600px 400px',
          }}
          aria-hidden="true"
        />
        <div className="container py-16 md:py-24 lg:py-28 relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Activity className="h-4 w-4" aria-hidden="true" />
                    Trusted Healthcare Provider
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Your Health,<br />Our Priority
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Mahalaxmi Health Care provides comprehensive medical services with compassion, expertise, and state-of-the-art facilities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => navigate({ to: '/appointments' })} className="text-base">
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base">
                  <a href={googleSearchUrl} target="_blank" rel="noopener noreferrer">
                    <Search className="mr-2 h-5 w-5" aria-hidden="true" />
                    Find Us on Google
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero Image with Stats Card */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-strong">
                <img
                  src="/assets/generated/doctors-hero.dim_1600x700.png"
                  alt="Professional medical team at Mahalaxmi Health Care"
                  className="w-full h-auto"
                  width="1600"
                  height="700"
                  loading="eager"
                />
              </div>
              
              {/* Floating Stats Card */}
              <Card className="absolute -bottom-6 -left-4 sm:left-4 right-4 sm:right-auto sm:w-80 shadow-strong bg-card/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
                      <div className="text-xs sm:text-sm text-muted-foreground mt-1">Emergency Care</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary">15+</div>
                      <div className="text-xs sm:text-sm text-muted-foreground mt-1">Specialties</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary">100+</div>
                      <div className="text-xs sm:text-sm text-muted-foreground mt-1">Staff</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Highlight */}
      <section className="bg-muted/30 py-16 md:py-24 mt-8 lg:mt-0">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-2">
              <Ambulance className="h-8 w-8 text-destructive" aria-hidden="true" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">24/7 Emergency Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Round-the-clock emergency care with rapid response team and advanced life support
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              {
                title: 'Rapid Response',
                desc: 'Immediate medical attention when you need it most',
                icon: Activity,
              },
              {
                title: 'Expert Team',
                desc: 'Experienced emergency physicians and nurses',
                icon: Users,
              },
              {
                title: 'Always Open',
                desc: 'Emergency department never closes',
                icon: Clock,
              },
              {
                title: 'Advanced Care',
                desc: 'State-of-the-art emergency equipment',
                icon: Heart,
              },
            ].map((feature) => (
              <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-2">
                    <feature.icon className="h-10 w-10 text-destructive" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="destructive" asChild>
              <a href={emergencyPhoneTel} className="text-base">
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Emergency: {emergencyPhone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services for all your medical needs
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                title: 'General Medicine',
                desc: 'Primary care and routine medical consultations',
                icon: Stethoscope,
              },
              {
                title: 'Cardiology',
                desc: 'Heart health and cardiovascular care',
                icon: Activity,
              },
              {
                title: 'Pediatrics',
                desc: 'Specialized care for children and infants',
                icon: Heart,
              },
              {
                title: 'Orthopedics',
                desc: 'Bone, joint, and musculoskeletal treatment',
                icon: Users,
              },
              {
                title: 'Laboratory Services',
                desc: 'Complete diagnostic testing facilities',
                icon: Shield,
              },
              {
                title: 'Imaging Services',
                desc: 'CT scan, X-ray, and ultrasound',
                icon: Search,
              },
            ].map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" onClick={() => navigate({ to: '/services' })}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands for quality healthcare
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              {
                title: 'Experienced Doctors',
                desc: 'Highly qualified medical professionals',
                icon: Award,
              },
              {
                title: 'Modern Facilities',
                desc: 'State-of-the-art medical equipment',
                icon: Shield,
              },
              {
                title: 'Patient-Centered',
                desc: 'Compassionate and personalized care',
                icon: Heart,
              },
              {
                title: 'Affordable Care',
                desc: 'Quality healthcare at fair prices',
                icon: Users,
              },
            ].map((signal) => (
              <div key={signal.title} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <signal.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold">{signal.title}</h3>
                <p className="text-sm text-muted-foreground">{signal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="bg-gradient-to-br from-primary/10 to-background border-primary/20 shadow-medium">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Book an appointment today and experience quality healthcare with compassion
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate({ to: '/appointments' })}>
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })}>
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
