import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { getEmergencyPhone, getEmergencyPhoneTel } from '@/config/contactDetails';
import { Phone, Ambulance, Clock, MapPin, AlertTriangle, Heart, Activity, Zap } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import PageHeroImage from '@/components/layout/PageHeroImage';
import Section from '@/components/layout/Section';

export default function EmergencyPage() {
  const emergencyPhone = getEmergencyPhone();
  const emergencyPhoneTel = getEmergencyPhoneTel();

  const emergencyServices = [
    {
      title: 'Trauma Care',
      desc: 'Immediate treatment for severe injuries and accidents',
      icon: AlertTriangle,
    },
    {
      title: 'Cardiac Emergency',
      desc: 'Rapid response for heart attacks and cardiac events',
      icon: Heart,
    },
    {
      title: 'Critical Care',
      desc: 'Advanced life support and intensive care',
      icon: Activity,
    },
    {
      title: 'Rapid Response',
      desc: 'Quick assessment and stabilization',
      icon: Zap,
    },
  ];

  const whenToVisit = [
    'Severe chest pain or difficulty breathing',
    'Uncontrolled bleeding or severe injuries',
    'Loss of consciousness or severe head injury',
    'Sudden severe abdominal pain',
    'Signs of stroke (facial drooping, arm weakness, speech difficulty)',
    'Severe allergic reactions',
    'High fever with confusion or severe headache',
    'Poisoning or drug overdose',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="24/7 Emergency Services"
        subtitle="Immediate medical care when you need it most"
        variant="pattern"
        badge={
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium">
            <Ambulance className="h-4 w-4" aria-hidden="true" />
            Always Available
          </span>
        }
      >
        <PageHeroImage
          src="/assets/generated/emergency-room.dim_1600x900.png"
          alt="Emergency room at Mahalaxmi Health Care"
          width={1600}
          height={900}
          loading="eager"
          className="mt-8 max-w-4xl mx-auto"
        />
      </PageHero>

      {/* Emergency Contact Alert */}
      <Section>
        <Alert className="max-w-4xl mx-auto border-destructive/50 bg-destructive/5">
          <AlertTriangle className="h-5 w-5 text-destructive" aria-hidden="true" />
          <AlertDescription className="text-base">
            <strong className="font-semibold">In case of emergency, call immediately:</strong>
            <div className="mt-2">
              <Button size="lg" variant="destructive" asChild className="text-base">
                <a href={emergencyPhoneTel}>
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  {emergencyPhone}
                </a>
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </Section>

      {/* Ambulance Photo */}
      <Section variant="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Emergency Response Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our ambulance service is ready to respond to emergencies 24/7
          </p>
        </div>
        <PageHeroImage
          src="/assets/generated/emergency-ambulance.dim_1600x900.png"
          alt="Emergency ambulance at Mahalaxmi Health Care"
          width={1600}
          height={900}
          loading="lazy"
          className="max-w-5xl mx-auto"
        />
      </Section>

      {/* Emergency Services */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Emergency Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive emergency care with state-of-the-art facilities
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {emergencyServices.map((service) => (
            <Card key={service.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-2">
                  <service.icon className="h-10 w-10 text-destructive" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* When to Visit */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">When to Visit Emergency</h2>
            <p className="text-lg text-muted-foreground">
              Seek immediate emergency care if you experience any of these conditions
            </p>
          </div>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {whenToVisit.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-muted-foreground">{condition}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Emergency Contact Section */}
      <Section>
        <Card className="bg-gradient-to-br from-destructive/10 to-background border-destructive/20 shadow-medium max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-2">
                <Ambulance className="h-8 w-8 text-destructive" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Emergency Contact</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our emergency department is open 24/7 with experienced medical staff ready to help
              </p>
              <div className="space-y-4">
                <Button size="lg" variant="destructive" asChild className="text-base">
                  <a href={emergencyPhoneTel}>
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                    Call Emergency: {emergencyPhone}
                  </a>
                </Button>
                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto text-left">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-destructive mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="font-semibold">24/7 Availability</div>
                      <div className="text-sm text-muted-foreground">Always open, every day</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-destructive mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="font-semibold">Ground Floor</div>
                      <div className="text-sm text-muted-foreground">Emergency entrance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
