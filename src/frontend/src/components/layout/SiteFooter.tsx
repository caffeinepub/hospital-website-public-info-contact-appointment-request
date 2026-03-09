import { HOSPITAL_NAME } from "@/config/branding";
import { getBuildVersion } from "@/config/buildInfo";
import { withCacheBust } from "@/utils/generatedAssets";
import { useNavigate } from "@tanstack/react-router";
import { Clock, Heart, Mail, MapPin, Phone } from "lucide-react";

export default function SiteFooter() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const logoUrl = withCacheBust(
    "/assets/generated/mhc-logo-hq.dim_512x512.png",
  );
  const buildVersion = getBuildVersion();

  const appIdentifier =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "unknown-app";
  const caffeineUrl = `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`;

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about" },
    { label: "Appointments", path: "/appointments" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt={`${HOSPITAL_NAME} logo`}
                className="h-12 w-12"
                width="48"
                height="48"
              />
              <div className="font-bold text-lg leading-tight">
                {HOSPITAL_NAME}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Providing quality healthcare services with compassion and
              excellence. Your health is our priority.
            </p>
          </div>

          {/* Quick Links - reordered to match header navigation */}
          <div className="space-y-4">
            <h3 className="font-bold text-base">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    type="button"
                    onClick={() => navigate({ to: link.path })}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours - moved before contact for better visual balance */}
          <div className="space-y-4">
            <h3 className="font-bold text-base">Operating Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock
                  className="h-4 w-4 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <div>Mon-Sat: 9 AM - 6 PM</div>
                  <div>Sunday: Closed</div>
                  <div className="text-destructive font-medium mt-1">
                    Emergency: 24/7
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info - moved to last column */}
          <div className="space-y-4">
            <h3 className="font-bold text-base">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone
                  className="h-4 w-4 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>
                  <a
                    href="tel:04177233330"
                    className="hover:text-primary transition-colors block"
                  >
                    04177233330
                  </a>
                  <a
                    href="tel:7200041183"
                    className="hover:text-primary transition-colors block"
                  >
                    7200041183
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail
                  className="h-4 w-4 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="mailto:mahalaxmihospitalakm@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  mahalaxmihospitalakm@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  className="h-4 w-4 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>
                  NO-H 67, JOTHI NAGAR, ARAKKONAM, RANIPET DISTRICT - 631003
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>
              © {currentYear} {HOSPITAL_NAME}. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span>Built with</span>
              <Heart
                className="h-4 w-4 text-destructive fill-destructive"
                aria-label="love"
              />
              <span>using</span>
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary transition-colors"
              >
                caffeine.ai
              </a>
            </div>
            {buildVersion && buildVersion !== "dev" && (
              <div className="text-xs">v{buildVersion}</div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
