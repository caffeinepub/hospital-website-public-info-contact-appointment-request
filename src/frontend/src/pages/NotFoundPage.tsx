import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from '@tanstack/react-router';
import { Home, MapPin } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import PageHeroImage from '@/components/layout/PageHeroImage';
import Section from '@/components/layout/Section';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <PageHero
        title="404 - Page Not Found"
        subtitle="The page you're looking for doesn't exist"
        variant="pattern"
      >
        <PageHeroImage
          src="/assets/generated/medical-404-illustration.dim_1200x600.png"
          alt="404 page not found illustration"
          width={1200}
          height={600}
          loading="eager"
          className="mt-8 max-w-3xl mx-auto"
        />
      </PageHero>

      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Need Help Finding Your Way?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let us guide you back to the right path
          </p>
        </div>
        <PageHeroImage
          src="/assets/generated/notfound-navigation-illustration.dim_1200x600.png"
          alt="Navigation help illustration with map and compass"
          width={1200}
          height={600}
          loading="lazy"
          className="max-w-3xl mx-auto"
        />
      </Section>

      <Section variant="muted">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-2">
              <MapPin className="h-10 w-10 text-primary" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Lost in the Hospital?</h3>
              <p className="text-muted-foreground">
                Don't worry! We can help you find what you're looking for.
              </p>
            </div>
            <Button
              size="lg"
              onClick={() => navigate({ to: '/' })}
              className="text-base"
            >
              <Home className="mr-2 h-5 w-5" aria-hidden="true" />
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
