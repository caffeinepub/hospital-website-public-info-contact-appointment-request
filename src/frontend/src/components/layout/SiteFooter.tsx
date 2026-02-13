import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { HOSPITAL_NAME } from '@/config/branding';
import { CONTACT_DETAILS } from '@/config/contactDetails';

export default function SiteFooter() {
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'unknown-app';

  return (
    <footer className="bg-muted/30 border-t border-border/40">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/mahalaxmi-health-care-logo.dim_512x512.png"
                alt="Mahalaxmi Health Care Logo"
                className="h-12 w-12"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold">{HOSPITAL_NAME}</span>
                <span className="text-xs text-muted-foreground">Excellence in Healthcare</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Providing compassionate, quality healthcare to our community with state-of-the-art facilities and experienced medical professionals dedicated to your wellbeing.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact Us</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <p>{CONTACT_DETAILS.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <p>{CONTACT_DETAILS.phone}</p>
              </div>
              {CONTACT_DETAILS.emergency && (
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0 text-destructive" />
                  <p className="font-medium text-destructive">Emergency: {CONTACT_DETAILS.emergency}</p>
                </div>
              )}
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Hours</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
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
            © {new Date().getFullYear()} {HOSPITAL_NAME}. Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using{' '}
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
