import { useState } from 'react';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { Menu, X, Search, Phone } from 'lucide-react';
import { HOSPITAL_NAME } from '@/config/branding';
import { Button } from '@/components/ui/button';
import { getEmergencyPhone, getEmergencyPhoneTel } from '@/config/contactDetails';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const emergencyPhone = getEmergencyPhone();
  const emergencyPhoneTel = getEmergencyPhoneTel();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/doctor-suites', label: 'Doctor Suites' },
    { path: '/emergency', label: 'Emergency' },
    { path: '/contact', label: 'Contact' },
    { path: '/appointments', label: 'Appointments' },
  ];

  const handleNavigation = (path: string) => {
    navigate({ to: path });
    setMobileMenuOpen(false);
  };

  const googleSearchUrl = 'https://www.google.com/search?q=Mahalakshmi+Health+Care';

  return (
    <header className="sticky top-0 z-50 w-full bg-card shadow-sm">
      {/* Top bar with emergency contact */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex flex-wrap h-auto min-h-10 items-center justify-between py-2 gap-2">
          <div className="flex items-center gap-4">
            <a 
              href={emergencyPhoneTel}
              className="flex items-center gap-2 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm px-1"
              aria-label={`Call emergency number ${emergencyPhone}`}
            >
              <Phone className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
              <span className="font-medium text-sm">Emergency: {emergencyPhone}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/90 font-bold text-base md:text-2xl">24/7 Emergency Services Available</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-border/40">
        <div className="container flex h-20 items-center justify-between gap-4">
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm flex-shrink-0"
            aria-label={`Go to ${HOSPITAL_NAME} homepage`}
          >
            <img
              src="/assets/generated/mahalaxmi-health-care-logo.dim_512x512.png"
              alt=""
              className="h-12 w-12"
              width="48"
              height="48"
              aria-hidden="true"
            />
            <div className="flex flex-col items-start">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                {HOSPITAL_NAME}
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">Excellence in Healthcare</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant={currentPath === link.path ? 'default' : 'ghost'}
                onClick={() => handleNavigation(link.path)}
                className="text-sm font-medium"
                aria-current={currentPath === link.path ? 'page' : undefined}
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              asChild
              className="ml-2"
            >
              <a href={googleSearchUrl} target="_blank" rel="noopener noreferrer">
                <Search className="h-4 w-4 mr-2" aria-hidden="true" />
                Find Us
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-b border-border/40 bg-card"
        >
          <nav className="container py-4 flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant={currentPath === link.path ? 'default' : 'ghost'}
                onClick={() => handleNavigation(link.path)}
                className="justify-start text-base font-medium"
                aria-current={currentPath === link.path ? 'page' : undefined}
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="outline"
              asChild
              className="justify-start mt-2"
            >
              <a href={googleSearchUrl} target="_blank" rel="noopener noreferrer">
                <Search className="h-4 w-4 mr-2" aria-hidden="true" />
                Find Us on Google
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
