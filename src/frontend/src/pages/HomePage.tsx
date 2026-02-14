import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { getEmergencyPhone, getEmergencyPhoneTel } from '@/config/contactDetails';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Heart, Users, Clock, Phone, Ambulance, Search, Shield, Award, Stethoscope, Activity, AlertCircle, RefreshCw } from 'lucide-react';
import OrganizationJsonLd from '@/components/seo/OrganizationJsonLd';
import { withCacheBust } from '@/utils/generatedAssets';
import PageHeroImage from '@/components/layout/PageHeroImage';

export default function HomePage() {
  const navigate = useNavigate();
  const emergencyPhone = getEmergencyPhone();
  const emergencyPhoneTel = getEmergencyPhoneTel();
  const googleSearchUrl = 'https://www.google.com/search?q=Mahalakshmi+Health+Care';
  const [heroImageError, setHeroImageError] = useState(false);

  // Apply cache-busting to all generated assets
  const patternUrl = withCacheBust('/assets/generated/medical-pattern.dim_1800x1200.png');
  const heroImageUrl = withCacheBust('/assets/generated/doctors-team.dim_1600x900.png');

  return (
    <div className="flex flex-col">
      <OrganizationJsonLd />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] bg-repeat"
          style={{
            backgroundImage: `url(${patternUrl})`,
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
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                  Your Health,<br />Our Priority<br />24/7
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
              {heroImageError ? (
                <div className="relative rounded-2xl overflow-hidden shadow-strong bg-muted/30 border border-border">
                  <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-4" style={{ minHeight: '400px' }}>
                    <AlertCircle className="h-12 w-12 text-muted-foreground/50" aria-hidden="true" />
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Image not available</p>
                      <p className="text-xs text-muted-foreground/70 max-w-md">
                        Try refreshing the page (Ctrl+F5 / Cmd+Shift+R) or open in a private/incognito window to see the latest images.
                      </p>
                    </div>
                    <button
                      onClick={() => window.location.reload()}
                      className="inline-flex items-center gap-2 text-xs text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
                    >
                      <RefreshCw className="h-3 w-3" aria-hidden="true" />
                      Refresh Page
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden shadow-strong">
                  <img
                    src={heroImageUrl}
                    alt="Professional medical team at Mahalaxmi Health Care"
                    className="w-full h-auto"
                    width="1600"
                    height="900"
                    loading="eager"
                    onError={() => setHeroImageError(true)}
                  />
                </div>
              )}
              
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

      {/* Facilities Photo Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Modern Facilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art medical equipment and comfortable patient areas
            </p>
          </div>
          <PageHeroImage
            src="/assets/generated/home-facilities-collage.dim_1600x900.png"
            alt="Modern hospital facilities and equipment at Mahalaxmi Health Care"
            width={1600}
            height={900}
            loading="lazy"
            className="max-w-5xl mx-auto"
          />
        </div>
      </section>

      {/* Emergency Services Highlight */}
      <section className="bg-muted/30 py-16 md:py-24">
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
          <Card className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-primary/20">
            <CardHeader className="text-center space-y-4 pb-8">
              <CardTitle className="text-3xl md:text-4xl">Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg">
                Book your appointment today and experience quality healthcare
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
              <Button size="lg" onClick={() => navigate({ to: '/appointments' })}>
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })}>
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
