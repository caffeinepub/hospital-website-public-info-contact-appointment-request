import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Phone, Calendar } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import PageHeroImage from '@/components/layout/PageHeroImage';
import Section from '@/components/layout/Section';

export default function DoctorsPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        subtitle="Meet our team of experienced medical professionals dedicated to your health and wellbeing"
        variant="pattern"
      >
        <PageHeroImage
          src="/assets/generated/doctors-team.dim_1600x900.png"
          alt="Medical team of doctors at Mahalaxmi Health Care"
          width={1600}
          height={900}
          loading="eager"
          className="mt-8 max-w-4xl mx-auto"
        />
      </PageHero>

      {/* Doctor Portraits Photo */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Medical Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced doctors committed to providing excellent patient care
          </p>
        </div>
        <PageHeroImage
          src="/assets/generated/doctors-portraits-collage.dim_1600x900.png"
          alt="Group portrait of doctors at Mahalaxmi Health Care"
          width={1600}
          height={900}
          loading="lazy"
          className="max-w-5xl mx-auto"
        />
      </Section>

      {/* CTA Section */}
      <Section variant="muted">
        <Card className="bg-gradient-to-br from-orange-500/10 to-background border-orange-500/20 shadow-medium max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Need to See a Specialist?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book an appointment with our experienced doctors or contact us for more information
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700" onClick={() => navigate({ to: '/appointments' })}>
                <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })}>
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
