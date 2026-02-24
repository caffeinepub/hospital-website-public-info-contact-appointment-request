import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Award, Target, Building2, Stethoscope, ClipboardCheck, UserCheck, Calendar, Presentation, Activity, HeartPulse } from 'lucide-react';
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

      {/* Occupational Health Care Division */}
      <Section>
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Occupational Health Care & Wellness Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              First of its kind in the Healthcare Industry
            </p>
          </div>

          <Card className="border-primary/20 shadow-lg">
            <CardContent className="p-8 md:p-10 space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Mahalaxmi Health Care (Occupational health care and wellness service provider)</strong> is a division of Mahalaxmi Multi Specialty Hospital, first of its kind in Healthcare Industry. Mahalaxmi Health Care is managing a health centre or running Onsite Health Check-ups are not at all a challenge to us.
                </p>
                <p>
                  Mahalaxmi Health Care (Occupational health care and wellness service provider) division was formed to bridge the gap between the "Industry's Requirement" and the services provided by Hospitals, which was studied in careful analysis from the extensive experience of our Managing Director in running Multispecialty Hospitals & OHC's.
                </p>
              </div>

              <div className="pt-6 border-t">
                <h3 className="text-xl font-semibold mb-6 text-center">Our Comprehensive Services</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      icon: Building2,
                      title: 'OHC Setup & Management',
                      desc: 'Complete assistance in setting up and running Occupational Health Centres',
                    },
                    {
                      icon: Stethoscope,
                      title: 'Medical Staffing',
                      desc: 'Full-time and part-time doctors and paramedical staff deployment',
                    },
                    {
                      icon: Activity,
                      title: 'Lab & Pharmacy',
                      desc: 'On-site laboratory and pharmacy management services',
                    },
                    {
                      icon: UserCheck,
                      title: 'Pre-Employment Exams',
                      desc: 'Comprehensive pre-employment medical examinations',
                    },
                    {
                      icon: ClipboardCheck,
                      title: 'Periodic Health Check-ups',
                      desc: 'Regular on-site health check-ups for employees',
                    },
                    {
                      icon: Presentation,
                      title: 'Health Awareness',
                      desc: 'Doctors talks and health awareness sessions',
                    },
                    {
                      icon: HeartPulse,
                      title: 'Screening Camps',
                      desc: 'Free screening camps for employees and their families',
                    },
                    {
                      icon: Calendar,
                      title: 'Wellness Programs',
                      desc: 'Customized wellness programs for corporate clients',
                    },
                  ].map((service) => (
                    <div key={service.title} className="flex gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex-shrink-0">
                        <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{service.title}</h4>
                        <p className="text-xs text-muted-foreground">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section variant="muted">
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
      <Section>
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
