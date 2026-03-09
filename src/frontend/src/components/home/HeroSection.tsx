import { Button } from "@/components/ui/button";
import { withCacheBust } from "@/utils/generatedAssets";
import { useNavigate } from "@tanstack/react-router";
import { Calendar, Phone } from "lucide-react";

export default function HeroSection() {
  const navigate = useNavigate();
  const heroImageUrl = withCacheBust(
    "/assets/generated/hero-medical.dim_1920x800.png",
  );

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImageUrl}
          alt="Modern medical facility"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div className="space-y-6 text-white">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Trusted Healthcare Since 2010
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your Health is Our Priority
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl">
              Comprehensive medical care with state-of-the-art facilities and
              experienced professionals dedicated to your wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate({ to: "/appointments" })}
                className="text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate({ to: "/contact" })}
                className="text-base font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
