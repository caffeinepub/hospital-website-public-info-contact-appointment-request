import { Button } from "@/components/ui/button";
import { HOSPITAL_NAME } from "@/config/branding";
import {
  getEmergencyPhone,
  getEmergencyPhoneTel,
} from "@/config/contactDetails";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const emergencyPhone = getEmergencyPhone();
  const emergencyPhoneTel = getEmergencyPhoneTel();

  const logoUrl = "/assets/uploads/NEW-LOGO-1-1.png";

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleNavigation = (path: string) => {
    navigate({ to: path });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      {/* Emergency Contact Bar — ivory background */}
      <div
        style={{ backgroundColor: "#FFFFF0" }}
        className="border-b border-stone-200"
      >
        <div className="container py-2">
          <div
            className="flex items-center justify-center gap-2 text-sm font-medium"
            style={{ color: "#1c1917" }}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>24/7 Emergency:</span>
            <a
              href={emergencyPhoneTel}
              className="font-bold hover:underline"
              style={{ color: "#1c1917" }}
              aria-label={`Call emergency number ${emergencyPhone}`}
            >
              {emergencyPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavigation("/")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label={`${HOSPITAL_NAME} home`}
          >
            <img
              src={logoUrl}
              alt={`${HOSPITAL_NAME} logo`}
              className="h-16 w-16 object-contain"
              width="64"
              height="64"
            />
            <div className="text-left">
              <div className="font-bold text-lg leading-tight text-foreground">
                {HOSPITAL_NAME}
              </div>
              <div className="text-xs text-muted-foreground">
                Quality Healthcare
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                onClick={() => handleNavigation(item.path)}
                className={`text-base font-medium ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => handleNavigation("/appointments")}
              className="ml-4"
            >
              Book Appointment
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden py-4 border-t"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  onClick={() => handleNavigation(item.path)}
                  className={`justify-start text-base font-medium ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  }`}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                onClick={() => handleNavigation("/appointments")}
                className="mt-2"
              >
                Book Appointment
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
