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
        <div className="container flex h-10 items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a 
              href={emergencyPhoneTel}
              className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="font-medium">Emergency: {emergencyPhone}</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-primary-foreground/90">24/7 Emergency Services Available</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-border/40">
        <div className="container flex h-20 items-center justify-between">
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <img
              src="/assets/generated/mahalaxmi-health-care-logo.dim_512x512.png"
              alt="Mahalaxmi Health Care Logo"
              className="h-12 w-12"
            />
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold tracking-tight text-foreground">
                {HOSPITAL_NAME}
              </span>
              <span className="text-xs text-muted-foreground">Excellence in Healthcare</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant={currentPath === link.path ? 'default' : 'ghost'}
                onClick={() => handleNavigation(link.path)}
                className="font-medium"
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="outline"
              asChild
              className="ml-2"
            >
              <a
                href={googleSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Search className="h-4 w-4" />
                Search on Google
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/40 bg-card shadow-medium">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant={currentPath === link.path ? 'default' : 'ghost'}
                onClick={() => handleNavigation(link.path)}
                className="justify-start font-medium"
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="outline"
              asChild
              className="justify-start"
            >
              <a
                href={googleSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Search className="h-4 w-4" />
                Search on Google
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
