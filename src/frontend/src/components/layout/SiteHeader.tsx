import { useState } from 'react';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { HOSPITAL_NAME } from '@/config/branding';
import { Button } from '@/components/ui/button';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={() => handleNavigation('/')}
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
        >
          <img
            src="/assets/generated/mahalaxmi-health-care-logo.dim_512x512.png"
            alt="Mahalaxmi Health Care Logo"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold tracking-tight text-foreground">
            {HOSPITAL_NAME}
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button
              key={link.path}
              variant={currentPath === link.path ? 'secondary' : 'ghost'}
              onClick={() => handleNavigation(link.path)}
              className="font-medium"
            >
              {link.label}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant={currentPath === link.path ? 'secondary' : 'ghost'}
                onClick={() => handleNavigation(link.path)}
                className="justify-start font-medium"
              >
                {link.label}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
