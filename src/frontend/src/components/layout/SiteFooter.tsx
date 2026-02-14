import { Heart, Phone, MapPin, Clock } from 'lucide-react';
import { HOSPITAL_NAME } from '@/config/branding';
import { CONTACT_DETAILS } from '@/config/contactDetails';

export default function SiteFooter() {
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'unknown-app';

  return (
    <footer className="bg-muted/30 border-t border-border/40">
      <div className="container py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/mahalaxmi-health-care-logo.dim_512x512.png"
                alt=""
                className="h-12 w-12"
                width="48"
                height="48"
                aria-hidden="true"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold">{HOSPITAL_NAME}</span>
                <span className="text-xs text-muted-foreground">Excellence in Healthcare</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Providing compassionate, quality healthcare to our community with state-of-the-art facilities and experienced medical professionals dedicated to your wellbeing.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact Us</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <address className="not-italic">{CONTACT_DETAILS.address}</address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                <a
                  href={`tel:${CONTACT_DETAILS.phone}`}
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  {CONTACT_DETAILS.phone}
                </a>
              </div>
              {CONTACT_DETAILS.emergency && (
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0 text-destructive" aria-hidden="true" />
                  <a
                    href={`tel:${CONTACT_DETAILS.emergency}`}
                    className="font-medium text-destructive hover:text-destructive/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  >
                    Emergency: {CONTACT_DETAILS.emergency}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Hours</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium text-foreground">Emergency Care</p>
                  <p>{CONTACT_DETAILS.hours.emergency}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © {new Date().getFullYear()} {HOSPITAL_NAME}. Built with <Heart className="h-4 w-4 text-destructive fill-destructive" aria-label="love" /> using{' '}
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
