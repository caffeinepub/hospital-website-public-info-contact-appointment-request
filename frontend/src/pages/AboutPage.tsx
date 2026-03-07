import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Target, Building2, Stethoscope, ClipboardCheck, UserCheck, Calendar, Presentation, Activity, HeartPulse, Eye, Lightbulb } from 'lucide-react';
import FacilityHighlights from '@/components/about/FacilityHighlights';
import { withCacheBust } from '@/utils/generatedAssets';
import PdfExportButton from '@/components/shared/PdfExportButton';

export default function AboutPage() {
  const coreValues = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We treat every patient with empathy and understanding',
    },
    {
      icon: Eye,
      title: 'Excellence',
      description: 'Committed to the highest standards of medical care',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing latest medical technology and practices',
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'Honest, transparent, and ethical in all we do',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* PDF Export Button - floating */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden">
        <PdfExportButton filename="mahalaxmi-health-care-about.pdf" />
      </div>

      {/* Hero Section */}
      <section className="section-spacing-sm bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">About Mahalaxmi Health Care</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Committed to providing exceptional healthcare services with compassion, integrity, and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Full Description Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Who We Are</h2>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Mahalaxmi Health Care (Occupational health care and wellness service provider) is a division of Mahalaxmi Multi Specialty Hospital, first of its kind in Healthcare Industry. Mahalaxmi Health Care is managing a health centre or running Onsite Health Check-ups are not at all a challenge to us. Mahalaxmi Health Care (Occupational health care and wellness service provider) division was formed to bridge the gap between the "Industry's Requirement" and the services provided by Hospitals, which was studied in careful analysis from the extensive experience of our Managing Director in running Multispecialty Hospitals &amp; OHC's. We can assist you in setting up OHC's, running it with required no of Doctors (full time/Part time), Paramedical staff, run LAB &amp; Pharmacy, conduct Pre-Employment Examination, Periodic Health Check up of the EMPLOYEES on-site, organize Doctors Talk, Health Awareness Sessions, Free Screening Camps for the employees &amp; their families, etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - moved up for immediate value proposition */}
      <section className="section-spacing bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Core Values</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {coreValues.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision with Images - moved after values for narrative flow */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto items-center">
            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-shadow border-primary/20">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To deliver compassionate, high-quality healthcare services that improve the health and wellbeing of our community through excellence in medical care, education, and innovation.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-secondary/20">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Eye className="h-7 w-7 text-secondary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To be the leading healthcare provider in the region, recognized for our commitment to patient-centered care, medical excellence, and continuous improvement in healthcare delivery.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={withCacheBust('/assets/generated/hospital-corridor.dim_1200x800.png')}
                  alt="Modern hospital corridor"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={withCacheBust('/assets/generated/medical-equipment.dim_1200x800.png')}
                  alt="Advanced medical equipment"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Highlights - remains at bottom to showcase infrastructure */}
      <FacilityHighlights />

      {/* Occupational Health Care Services */}
      <section className="section-spacing bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Comprehensive Occupational Health Care</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Supporting workplace health and employee wellbeing
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <ClipboardCheck className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>Pre-Employment Screening</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive health assessments to ensure workplace fitness and safety compliance
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Calendar className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>Periodic Health Checkups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular monitoring and preventive care programs for employees
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Activity className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>Fitness Assessments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized evaluations for job-specific physical requirements
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <HeartPulse className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>Workplace Injury Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Immediate treatment and rehabilitation for work-related injuries
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Presentation className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>Health Education Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Wellness workshops and training for workplace health promotion
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <UserCheck className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>Return-to-Work Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Structured support for safe and effective workplace reintegration
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
