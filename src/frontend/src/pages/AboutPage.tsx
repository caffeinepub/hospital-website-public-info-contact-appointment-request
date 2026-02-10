import { useEffect } from 'react';
import { getPageTitle } from '@/config/branding';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Shield, Users, Award } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    document.title = getPageTitle('About Us');
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Mahalaxmi Health Care</h1>
            <p className="text-lg text-muted-foreground">
              Dedicated to providing exceptional healthcare services with compassion, integrity, and clinical excellence
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Mahalaxmi Health Care, our mission is to deliver comprehensive, patient-centered healthcare 
              that improves the health and wellbeing of our community. We are committed to providing accessible, 
              high-quality medical services in a caring and respectful environment.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be the trusted healthcare provider of choice, recognized for clinical quality, 
              compassionate care, and innovative medical practices that enhance the lives of those we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Heart,
                title: 'Compassion',
                desc: 'We treat every patient with empathy, dignity, and respect',
              },
              {
                icon: Shield,
                title: 'Integrity',
                desc: 'We uphold the highest ethical standards in all our practices',
              },
              {
                icon: Users,
                title: 'Collaboration',
                desc: 'We work together as a team to deliver the best outcomes',
              },
              {
                icon: Award,
                title: 'Quality',
                desc: 'We are committed to continuous improvement and clinical standards',
              },
            ].map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container py-16 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What sets Mahalaxmi Health Care apart
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Experienced Team',
              desc: 'Our medical professionals bring decades of combined experience and specialized expertise',
            },
            {
              title: 'Modern Facilities',
              desc: 'State-of-the-art medical equipment and comfortable patient care environments',
            },
            {
              title: 'Accredited Care',
              desc: 'Meeting rigorous standards for safety, quality, and patient satisfaction',
            },
            {
              title: 'Patient-Centered',
              desc: 'Your health goals and preferences guide our treatment recommendations',
            },
            {
              title: 'Comprehensive Services',
              desc: 'From prevention to treatment, we offer a full spectrum of medical care',
            },
            {
              title: '24/7 Emergency',
              desc: 'Round-the-clock emergency services when you need them most',
            },
          ].map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Facilities</h2>
              <p className="text-lg text-muted-foreground">
                Modern infrastructure designed for optimal patient care
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Inpatient Care</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Comfortable private and semi-private rooms with modern amenities
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>24/7 nursing care</li>
                    <li>Advanced monitoring systems</li>
                    <li>Family-friendly visiting hours</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Diagnostic Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Comprehensive diagnostic capabilities for accurate assessments
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Advanced imaging technology</li>
                    <li>Full-service laboratory</li>
                    <li>Rapid result turnaround</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
