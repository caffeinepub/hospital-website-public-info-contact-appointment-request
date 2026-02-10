import { Heart } from 'lucide-react';
import { HOSPITAL_NAME } from '@/config/branding';
import { CONTACT_DETAILS } from '@/config/contactDetails';

export default function SiteFooter() {
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'unknown-app';

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/mahalaxmi-health-care-logo.dim_512x512.png"
                alt="Mahalaxmi Health Care Logo"
                className="h-10 w-10"
              />
              <span className="text-lg font-bold">{HOSPITAL_NAME}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Providing compassionate, quality healthcare to our community.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{CONTACT_DETAILS.address}</p>
              <p className="pt-2">Phone: {CONTACT_DETAILS.phone}</p>
              {CONTACT_DETAILS.emergency && (
                <p>Emergency: {CONTACT_DETAILS.emergency}</p>
              )}
              <p className="pt-2">Hours: {CONTACT_DETAILS.hours.emergency} Emergency Care</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © {new Date().getFullYear()}. Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
