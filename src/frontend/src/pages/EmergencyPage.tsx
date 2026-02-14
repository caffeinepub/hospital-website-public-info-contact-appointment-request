import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getEmergencyPhone, getEmergencyPhoneTel } from '@/config/contactDetails';
import { Ambulance, Phone, Clock, Heart, AlertCircle, Activity } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';

export default function EmergencyPage() {
  const emergencyPhone = getEmergencyPhone();
  const emergencyPhoneTel = getEmergencyPhoneTel();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="24/7 Emergency Services"
        subtitle="Round-the-clock emergency medical care with rapid response team. We're here when you need us most."
        variant="gradient"
        badge={
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10">
            <Ambulance className="h-10 w-10 text-destructive" aria-hidden="true" />
          </div>
        }
      >
        <Button size="lg" variant="destructive" asChild className="mt-4">
          <a href={emergencyPhoneTel} className="text-lg">
            <Phone className="mr-2 h-6 w-6" aria-hidden="true" />
            Emergency: {emergencyPhone}
          </a>
        </Button>
      </PageHero>

      {/* Emergency Services Overview */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Emergency Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive emergency care available 24 hours a day, 7 days a week
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: 'Rapid Response',
              desc: 'Immediate triage and assessment by experienced emergency medical professionals',
              icon: Activity,
            },
            {
              title: 'Advanced Life Support',
              desc: 'State-of-the-art equipment and facilities for critical care and life-saving interventions',
              icon: Heart,
            },
            {
              title: '24/7 Availability',
              desc: 'Our emergency department never closes - always ready to serve you',
              icon: Clock,
            },
            {
              title: 'Trauma Care',
              desc: 'Specialized trauma team for accident and injury cases requiring immediate attention',
              icon: AlertCircle,
            },
            {
              title: 'Cardiac Emergency',
              desc: 'Immediate care for heart attacks, chest pain, and other cardiac emergencies',
              icon: Heart,
            },
            {
              title: 'Ambulance Service',
              desc: 'Emergency ambulance services with trained paramedics and medical equipment',
              icon: Ambulance,
            },
          ].map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-10 w-10 text-destructive mb-2" aria-hidden="true" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* When to Visit Emergency */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">When to Visit Emergency</h2>
            <p className="text-lg text-muted-foreground">
              Seek immediate emergency care if you experience any of these conditions
            </p>
          </div>
          <Card className="shadow-medium">
            <CardContent className="p-8">
              <ul className="space-y-4" role="list">
                {[
                  'Chest pain or pressure',
                  'Difficulty breathing or shortness of breath',
                  'Severe bleeding or wounds',
                  'Sudden severe headache or vision changes',
                  'Loss of consciousness or fainting',
                  'Severe abdominal pain',
                  'Suspected broken bones or fractures',
                  'High fever with confusion or severe symptoms',
                  'Severe allergic reactions',
                  'Poisoning or drug overdose',
                  'Severe burns',
                  'Stroke symptoms (facial drooping, arm weakness, speech difficulty)',
                ].map((condition) => (
                  <li key={condition} className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Emergency Contact CTA */}
      <Section>
        <Card className="bg-gradient-to-br from-destructive/10 to-background border-destructive/20 shadow-medium max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <Ambulance className="h-16 w-16 text-destructive mx-auto" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-bold">In Case of Emergency</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't wait. Call our emergency hotline immediately for life-threatening conditions.
            </p>
            <Button size="lg" variant="destructive" asChild>
              <a href={emergencyPhoneTel} className="text-lg">
                <Phone className="mr-2 h-6 w-6" aria-hidden="true" />
                Call Emergency: {emergencyPhone}
              </a>
            </Button>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
