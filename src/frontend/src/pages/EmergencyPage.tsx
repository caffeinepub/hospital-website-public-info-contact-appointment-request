import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { getPageTitle } from '@/config/branding';
import { getEmergencyPhone, getEmergencyPhoneTel, CONTACT_DETAILS } from '@/config/contactDetails';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Clock, Ambulance, AlertCircle, MapPin, Heart } from 'lucide-react';

export default function EmergencyPage() {
  const navigate = useNavigate();
  const emergencyPhone = getEmergencyPhone();
  const emergencyPhoneTel = getEmergencyPhoneTel();

  useEffect(() => {
    document.title = getPageTitle('24/7 Emergency');
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-destructive/10 via-background to-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 mb-4">
              <Ambulance className="h-10 w-10 text-destructive" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">24/7 Emergency Services</h1>
            <p className="text-lg text-muted-foreground">
              Round-the-clock emergency medical care with rapid response team and advanced trauma facilities
            </p>
            <div className="pt-4">
              <Button size="lg" variant="destructive" asChild className="text-lg px-8 py-6">
                <a href={emergencyPhoneTel}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Emergency: {emergencyPhone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Overview */}
      <section className="container py-16 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">When Every Second Counts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our emergency department is equipped to handle all medical emergencies with experienced staff and state-of-the-art equipment
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-destructive/20">
            <CardHeader>
              <Clock className="h-10 w-10 text-destructive mb-2" />
              <CardTitle>24/7 Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our emergency department never closes. We're here for you day and night, every day of the year.
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/20">
            <CardHeader>
              <Ambulance className="h-10 w-10 text-destructive mb-2" />
              <CardTitle>Rapid Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Immediate triage and treatment by trained emergency medical professionals with quick response times.
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/20">
            <CardHeader>
              <Heart className="h-10 w-10 text-destructive mb-2" />
              <CardTitle>Advanced Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Modern emergency facilities with advanced life support equipment and trauma care capabilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* When to Visit Emergency */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold">When to Visit Emergency</h2>
              <p className="text-lg text-muted-foreground">
                Seek immediate emergency care if you experience any of these conditions
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Chest pain or pressure',
                'Difficulty breathing or shortness of breath',
                'Severe bleeding or injuries',
                'Sudden severe headache',
                'Loss of consciousness or fainting',
                'Severe allergic reactions',
                'Stroke symptoms (facial drooping, arm weakness, speech difficulty)',
                'Severe abdominal pain',
                'High fever with confusion',
                'Poisoning or drug overdose',
                'Severe burns',
                'Major trauma or accidents',
              ].map((condition) => (
                <div key={condition} className="flex items-start gap-3 p-4 bg-background rounded-lg border">
                  <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-destructive/10 to-background border-destructive/20">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Emergency Contact Information</h2>
                <p className="text-lg text-muted-foreground">
                  In case of emergency, call us immediately or visit our emergency department
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start gap-4 p-6 bg-background rounded-lg border">
                  <Phone className="h-6 w-6 text-destructive flex-shrink-0" />
                  <div className="space-y-1">
                    <div className="font-semibold">Emergency Hotline</div>
                    <a 
                      href={emergencyPhoneTel}
                      className="text-lg font-bold text-destructive hover:underline"
                    >
                      {emergencyPhone}
                    </a>
                    <div className="text-sm text-muted-foreground">Available {CONTACT_DETAILS.hours.emergency}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-background rounded-lg border">
                  <MapPin className="h-6 w-6 text-destructive flex-shrink-0" />
                  <div className="space-y-1">
                    <div className="font-semibold">Emergency Department</div>
                    <div className="text-sm">{CONTACT_DETAILS.address}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button size="lg" variant="destructive" asChild>
                  <a href={emergencyPhoneTel}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call Emergency Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })}>
                  View All Contact Info
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
