import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Heart, Users, Target } from 'lucide-react';
import { HOSPITAL_NAME, getPageTitle } from '@/config/branding';

export default function AboutPage() {
  useEffect(() => {
    document.title = getPageTitle('About Us');
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About {HOSPITAL_NAME}</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Dedicated to providing exceptional healthcare with compassion and commitment since 1985.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                At {HOSPITAL_NAME}, our mission is to provide accessible, high-quality healthcare
                services to our community. We are committed to treating every patient with dignity,
                respect, and compassion while delivering evidence-based medical care that improves
                health outcomes and enhances quality of life.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Compassion:</strong> We treat every patient
                    with empathy and understanding
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Quality:</strong> We strive for the highest
                    standards in medical care
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Integrity:</strong> We maintain honesty and
                    ethical practices in all we do
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong className="text-foreground">Innovation:</strong> We embrace new
                    technologies and treatment methods
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-muted/30 border-y border-border/40">
        <div className="container py-16 md:py-24">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine advanced medical technology with personalized, compassionate care.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Accredited Care</CardTitle>
                <CardDescription>
                  Nationally recognized for quality care and patient safety standards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Expert Team</CardTitle>
                <CardDescription>
                  Board-certified physicians and specialists with years of experience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mb-3" />
                <CardTitle>Patient-Centered</CardTitle>
                <CardDescription>
                  Your comfort, dignity, and well-being are our top priorities.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-center">Our Facilities</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                {HOSPITAL_NAME} features state-of-the-art medical facilities designed to provide the
                highest level of care in a comfortable, healing environment. Our campus includes:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Modern emergency department with 24/7 trauma care</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Advanced surgical suites with robotic-assisted technology</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Comprehensive diagnostic imaging center</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Intensive care units with specialized monitoring</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Family-centered maternity and neonatal care units</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Outpatient clinics and specialty centers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
