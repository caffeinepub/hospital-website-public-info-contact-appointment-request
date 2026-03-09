import HeroSection from "@/components/home/HeroSection";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";
import PdfExportButton from "@/components/shared/PdfExportButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { withCacheBust } from "@/utils/generatedAssets";
import { useNavigate } from "@tanstack/react-router";
import { Award, Clock, Shield, Users } from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();

  const trustSignals = [
    {
      icon: Shield,
      title: "Trusted Care",
      description: "Over a decade of excellence in healthcare",
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Highly qualified and experienced medical professionals",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Round-the-clock emergency services",
    },
    {
      icon: Users,
      title: "Patient Focused",
      description: "Personalized care tailored to your needs",
    },
  ];

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "15+", label: "Specialties" },
    { value: "100+", label: "Healthcare Staff" },
    { value: "24/7", label: "Emergency Care" },
  ];

  return (
    <div className="flex flex-col">
      <OrganizationJsonLd />

      {/* PDF Export Button - floating top-right */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden">
        <PdfExportButton filename="mahalaxmi-health-care-home.pdf" />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Hospital Photos Gallery */}
      <section className="section-spacing-sm bg-muted/20">
        <div className="container">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Our Hospital</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into Mahalaxmi Health Care
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-md group">
              <img
                src={withCacheBust(
                  "/assets/generated/hospital-exterior.dim_1200x800.png",
                )}
                alt="Mahalaxmi Hospital exterior"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="p-4 text-white font-semibold">
                  Hospital Building
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-md group">
              <img
                src={withCacheBust(
                  "/assets/generated/medical-team.dim_1200x800.png",
                )}
                alt="Our medical team"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="p-4 text-white font-semibold">Our Medical Team</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-md group">
              <img
                src={withCacheBust(
                  "/assets/generated/hospital-ward.dim_1200x800.png",
                )}
                alt="Hospital ward"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="p-4 text-white font-semibold">Patient Ward</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-md group">
              <img
                src={withCacheBust(
                  "/assets/generated/hospital-ambulance.dim_1200x800.png",
                )}
                alt="Emergency ambulance"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="p-4 text-white font-semibold">
                  24/7 Emergency Services
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-md group">
              <img
                src={withCacheBust(
                  "/assets/generated/radiology-room.dim_1200x800.png",
                )}
                alt="Radiology department"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="p-4 text-white font-semibold">
                  Radiology & Imaging
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-md group">
              <img
                src={withCacheBust(
                  "/assets/generated/hospital-pharmacy.dim_1200x800.png",
                )}
                alt="Hospital pharmacy"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="p-4 text-white font-semibold">
                  In-House Pharmacy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - moved up for immediate trust building */}
      <section className="section-spacing">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Why Choose Mahalaxmi Health Care
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference of patient-centered healthcare
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {trustSignals.map((signal) => (
              <Card
                key={signal.title}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <signal.icon
                      className="h-8 w-8 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{signal.title}</h3>
                  <p className="text-muted-foreground">{signal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar - moved after trust signals for credibility flow */}
      <section className="bg-white border-y">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Facilities Showcase - moved up to showcase infrastructure */}
      <section className="section-spacing bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              State-of-the-Art Facilities
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern infrastructure and advanced medical equipment for superior
              care
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src={withCacheBust(
                  "/assets/generated/hospital-reception.dim_1200x800.png",
                )}
                alt="Modern hospital reception area"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Welcoming Reception
                  </h3>
                  <p className="text-white/90">
                    Comfortable and modern patient reception area
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src={withCacheBust(
                  "/assets/generated/medical-equipment.dim_1200x800.png",
                )}
                alt="Advanced medical equipment"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Advanced Equipment
                  </h3>
                  <p className="text-white/90">
                    Latest medical technology for accurate diagnosis
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg group md:col-span-2">
              <img
                src={withCacheBust(
                  "/assets/generated/doctor-consultation.dim_1200x800.png",
                )}
                alt="Doctor consultation room"
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Expert Consultations
                  </h3>
                  <p className="text-white/90">
                    Private consultation rooms with experienced medical
                    professionals
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src={withCacheBust(
                  "/assets/generated/operation-theatre.dim_1200x800.png",
                )}
                alt="Modern operation theatre"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Operation Theatre</h3>
                  <p className="text-white/90">
                    Fully equipped sterile surgical suites
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src={withCacheBust(
                  "/assets/generated/icu-ward.dim_1200x800.png",
                )}
                alt="ICU intensive care unit"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Intensive Care Unit
                  </h3>
                  <p className="text-white/90">
                    24/7 critical care with advanced monitoring
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights - moved after facilities to show what we offer */}
      <ServiceHighlights />

      {/* CTA Section - remains at bottom for conversion */}
      <section className="section-spacing bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-lg md:text-xl text-white/90">
                Book an appointment today and experience quality healthcare
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate({ to: "/appointments" })}
                className="text-base font-semibold shadow-lg"
              >
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate({ to: "/services" })}
                className="text-base font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
