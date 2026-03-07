import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Sparkles } from 'lucide-react';
import { withCacheBust } from '@/utils/generatedAssets';

export default function FacilityHighlights() {
  const highlights = [
    {
      icon: Building2,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art facilities designed for patient comfort and care',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly qualified medical professionals dedicated to your health',
    },
    {
      icon: Sparkles,
      title: 'Advanced Technology',
      description: 'Latest medical equipment for accurate diagnosis and treatment',
    },
  ];

  return (
    <section className="section-spacing">
      <div className="container">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Facilities</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience healthcare in a modern, comfortable environment
            </p>
          </div>

          {/* Facility Images Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src={withCacheBust('/assets/generated/team-collab.dim_1200x800.png')}
                alt="Medical team collaboration"
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">Collaborative Care</h3>
                  <p className="text-white/90 text-sm">Expert team working together</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src={withCacheBust('/assets/generated/hospital-reception.dim_1200x800.png')}
                alt="Modern reception area"
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">Welcoming Reception</h3>
                  <p className="text-white/90 text-sm">Comfortable patient experience</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src={withCacheBust('/assets/generated/surgical-suite.dim_1200x800.png')}
                alt="Advanced surgical suite"
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">Surgical Excellence</h3>
                  <p className="text-white/90 text-sm">Advanced surgical facilities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="grid gap-6 md:grid-cols-3 pt-8">
            {highlights.map((highlight) => (
              <Card key={highlight.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <highlight.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
