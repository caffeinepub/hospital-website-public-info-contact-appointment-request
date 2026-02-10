import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import { getPageTitle } from '@/config/branding';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function DecommissionedPage() {
  useEffect(() => {
    document.title = getPageTitle('Site Decommissioned');
  }, []);

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <Alert className="border-muted-foreground/20">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle className="text-xl font-semibold mb-2">
            Service Decommissioned
          </AlertTitle>
          <AlertDescription className="text-base space-y-4">
            <p>
              This website has been decommissioned and is no longer accepting new submissions or providing active services.
            </p>
            <p className="text-sm text-muted-foreground">
              Thank you for your interest. If you need assistance, please contact us through alternative channels.
            </p>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
