import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { getPageTitle } from '@/config/branding';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CONTACT_DETAILS } from '@/config/contactDetails';

export default function DoctorsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = getPageTitle('Our Doctors');
  }, []);

  const doctors = [
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiology',
      credentials: 'MD, DM (Cardiology)',
      availability: 'Mon-Fri, 9 AM - 5 PM',
    },
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Pediatrics',
      credentials: 'MBBS, MD (Pediatrics)',
      availability: 'Mon-Sat, 10 AM - 6 PM',
    },
    {
      name: 'Dr. Anil Verma',
      specialty: 'Orthopedics',
      credentials: 'MS (Orthopedics)',
      availability: 'Tue-Sat, 11 AM - 7 PM',
    },
    {
      name: 'Dr. Sunita Reddy',
      specialty: 'General Medicine',
      credentials: 'MBBS, MD',
      availability: 'Mon-Fri, 8 AM - 4 PM',
    },
    {
      name: 'Dr. Vikram Singh',
      specialty: 'Neurology',
      credentials: 'MD, DM (Neurology)',
      availability: 'Wed-Sun, 10 AM - 6 PM',
    },
    {
      name: 'Dr. Meera Patel',
      specialty: 'Ophthalmology',
      credentials: 'MS (Ophthalmology)',
      availability: 'Mon-Sat, 9 AM - 5 PM',
    },
    {
      name: 'Dr. Arjun Nair',
      specialty: 'Surgery',
      credentials: 'MS (General Surgery)',
      availability: 'Mon-Fri, 2 PM - 8 PM',
    },
    {
      name: 'Dr. Kavita Desai',
      specialty: 'Diabetes Care',
      credentials: 'MD (Endocrinology)',
      availability: 'Tue-Sat, 10 AM - 6 PM',
    },
    {
      name: 'Dr. Ramesh Iyer',
      specialty: 'Emergency Medicine',
      credentials: 'MBBS, DNB (Emergency)',
      availability: '24/7 Emergency',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Meet Our Medical Team</h1>
            <p className="text-lg text-muted-foreground">
              Experienced healthcare professionals dedicated to providing exceptional patient care
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <Card key={doctor.name} className="hover:shadow-lg transition-shadow overflow-hidden">
              {/* Background Banner */}
              <div className="relative h-32 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/assets/unnamed.webp)' }}
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
              </div>

              <CardHeader className="-mt-8 relative z-10">
                <CardTitle className="text-xl">{doctor.name}</CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {doctor.specialty}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Credentials</p>
                  <p className="text-sm">{doctor.credentials}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Availability</p>
                  <p className="text-sm">{doctor.availability}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <Card className="bg-gradient-to-br from-primary/10 to-background border-primary/20">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Schedule Your Appointment</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Book a consultation with one of our experienced doctors today
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={() => navigate({ to: '/appointments' })}>
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })}>
                  Contact Us
                </Button>
              </div>
              <div className="pt-4 text-sm text-muted-foreground">
                <p>Call us at <a href={`tel:${CONTACT_DETAILS.phone}`} className="font-medium text-primary hover:underline">{CONTACT_DETAILS.phone}</a></p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
