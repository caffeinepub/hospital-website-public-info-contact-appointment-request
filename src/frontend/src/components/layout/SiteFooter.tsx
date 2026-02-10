import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';
import { HOSPITAL_NAME } from '@/config/branding';
import { CONTACT_DETAILS } from '@/config/contactDetails';

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/hospital-logo.dim_512x512.png"
                alt="Hospital Logo"
                className="h-10 w-10"
              />
              <span className="text-lg font-bold">{HOSPITAL_NAME}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Providing compassionate, quality healthcare to our community since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <Link
                to="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                Services
              </Link>
              <Link
                to="/appointment"
                className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                Book Appointment
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{CONTACT_DETAILS.address}</p>
              <p className="pt-2">Phone: {CONTACT_DETAILS.phone}</p>
              <p>Emergency: {CONTACT_DETAILS.emergency}</p>
              <p className="pt-2">Hours: {CONTACT_DETAILS.hours.emergency} Emergency Care</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © 2026. Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using{' '}
            <a
              href="https://caffeine.ai"
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
