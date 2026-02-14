import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Award, Target } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
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
        <div className="mt-8 relative rounded-2xl overflow-hidden shadow-strong max-w-4xl mx-auto">
          <img
            src="/assets/generated/facility-banner.dim_1600x600.png"
            alt="Mahalaxmi Health Care modern medical facility"
            className="w-full h-auto"
            width="1600"
            height="600"
            loading="eager"
          />
        </div>
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

      {/* Core Values */}
      <Section variant="muted">
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
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What sets us apart in healthcare delivery
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: 'Experienced Professionals',
              desc: 'Our team of skilled doctors and healthcare professionals bring years of expertise',
            },
            {
              title: 'Modern Facilities',
              desc: 'State-of-the-art medical equipment and comfortable patient care environments',
            },
            {
              title: '24/7 Emergency Care',
              desc: 'Round-the-clock emergency services with rapid response capabilities',
            },
            {
              title: 'Comprehensive Services',
              desc: 'Full range of medical services from preventive care to specialized treatments',
            },
            {
              title: 'Patient-Centered Approach',
              desc: 'We put patients first, ensuring personalized care and attention',
            },
            {
              title: 'Affordable Healthcare',
              desc: 'Quality medical services at competitive prices with transparent billing',
            },
          ].map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Facilities */}
      <Section variant="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Facilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern infrastructure designed for optimal patient care
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
          {[
            {
              title: 'Emergency Department',
              desc: 'Fully equipped 24/7 emergency department with advanced life support systems and rapid triage capabilities',
            },
            {
              title: 'Diagnostic Center',
              desc: 'Complete diagnostic services including CT scan, X-ray, laboratory facilities, and advanced imaging technologies',
            },
            {
              title: 'Outpatient Clinics',
              desc: 'Specialized outpatient departments for various medical specialties with comfortable waiting areas',
            },
            {
              title: 'Patient Care Units',
              desc: 'Well-maintained patient rooms with modern amenities ensuring comfort during recovery',
            },
          ].map((facility) => (
            <Card key={facility.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{facility.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{facility.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
