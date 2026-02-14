import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Award, Target } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import PageHeroImage from '@/components/layout/PageHeroImage';
import Section from '@/components/layout/Section';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="About Mahalaxmi Health Care"
        subtitle="Committed to providing exceptional healthcare services with compassion, integrity, and excellence"
        variant="pattern"
      >
        <PageHeroImage
          src="/assets/generated/hospital-lobby.dim_1600x900.png"
          alt="Modern hospital lobby at Mahalaxmi Health Care"
          width={1600}
          height={900}
          loading="eager"
          className="mt-8 max-w-4xl mx-auto"
        />
      </PageHero>

      {/* Mission & Vision */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Target className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To deliver comprehensive, patient-centered healthcare services that improve the health and wellbeing 
                of our community through compassionate care, medical excellence, and continuous innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Award className="h-10 w-10 text-primary mb-2" aria-hidden="true" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading healthcare provider in the region, recognized for our commitment to quality care, 
                patient satisfaction, and medical innovation while maintaining the highest standards of professional excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Facilities Corridor Photo */}
      <Section variant="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Hospital Facilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clean, modern, and welcoming environment for all our patients
          </p>
        </div>
        <PageHeroImage
          src="/assets/generated/about-facilities-corridor.dim_1600x900.png"
          alt="Hospital ward corridor at Mahalaxmi Health Care"
          width={1600}
          height={900}
          loading="lazy"
          className="max-w-5xl mx-auto"
        />
      </Section>

      {/* Core Values */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {[
            {
              title: 'Compassion',
              desc: 'We treat every patient with empathy, respect, and dignity',
              icon: Heart,
            },
            {
              title: 'Integrity',
              desc: 'We uphold the highest ethical standards in all our practices',
              icon: Award,
            },
            {
              title: 'Collaboration',
              desc: 'We work together as a team to provide the best care',
              icon: Users,
            },
            {
              title: 'Quality',
              desc: 'We are committed to excellence in everything we do',
              icon: Target,
            },
          ].map((value) => (
            <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-2">
                  <value.icon className="h-10 w-10 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Key Features */}
      <Section variant="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What sets us apart in healthcare delivery
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {[
            {
              title: 'Experienced Medical Team',
              desc: 'Our doctors and nurses bring years of expertise and dedication to patient care',
            },
            {
              title: 'Advanced Technology',
              desc: 'We invest in the latest medical equipment and diagnostic tools',
            },
            {
              title: 'Patient-Centered Approach',
              desc: 'Every treatment plan is tailored to individual patient needs',
            },
            {
              title: 'Comprehensive Services',
              desc: 'From routine checkups to specialized treatments under one roof',
            },
            {
              title: 'Affordable Healthcare',
              desc: 'Quality medical care at transparent and reasonable prices',
            },
            {
              title: '24/7 Emergency Care',
              desc: 'Round-the-clock emergency services with rapid response',
            },
          ].map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
