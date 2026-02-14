import PageHero from '@/components/layout/PageHero';
import PageHeroImage from '@/components/layout/PageHeroImage';
import Section from '@/components/layout/Section';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function DecommissionedPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Service Decommissioned"
        subtitle="This service is currently unavailable"
        variant="pattern"
      >
        <PageHeroImage
          src="/assets/generated/medical-decommissioned-illustration.dim_1200x600.png"
          alt="Service decommissioned notice"
          width={1200}
          height={600}
          loading="eager"
          className="mt-8 max-w-3xl mx-auto"
        />
      </PageHero>

      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Maintenance Notice</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're working to improve our services
          </p>
        </div>
        <PageHeroImage
          src="/assets/generated/decommissioned-tools-illustration.dim_1200x600.png"
          alt="Maintenance tools and caution signage"
          width={1200}
          height={600}
          loading="lazy"
          className="max-w-3xl mx-auto"
        />
      </Section>

      <Section variant="muted">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-2">
              <AlertTriangle className="h-8 w-8 text-orange-600" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold">Service Temporarily Unavailable</h3>
            <p className="text-muted-foreground">
              This service has been temporarily decommissioned for maintenance and improvements. 
              We apologize for any inconvenience and appreciate your patience.
            </p>
            <p className="text-sm text-muted-foreground">
              Please check back later or contact our support team for more information.
            </p>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
