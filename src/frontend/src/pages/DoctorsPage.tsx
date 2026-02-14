import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from '@tanstack/react-router';
import { MapPin, Clock, Phone, Calendar } from 'lucide-react';
import PageHero from '@/components/layout/PageHero';
import PageHeroImage from '@/components/layout/PageHeroImage';
import Section from '@/components/layout/Section';

export default function DoctorsPage() {
  const navigate = useNavigate();

  const suites = [
    {
      name: 'General Medicine Suite',
      doctor: 'Dr. Rajesh Kumar',
      specialties: ['Primary Care', 'Preventive Medicine', 'Chronic Disease Management'],
      availability: 'Mon-Sat: 9:00 AM - 5:00 PM',
      location: 'Ground Floor, Room 101',
    },
    {
      name: 'Cardiology Suite',
      doctor: 'Dr. Priya Sharma',
      specialties: ['Heart Disease', 'Hypertension', 'ECG & Echo'],
      availability: 'Mon-Fri: 10:00 AM - 4:00 PM',
      location: 'First Floor, Room 201',
    },
    {
      name: 'Pediatrics Suite',
      doctor: 'Dr. Anjali Mehta',
      specialties: ['Child Health', 'Vaccinations', 'Growth Monitoring'],
      availability: 'Mon-Sat: 9:00 AM - 6:00 PM',
      location: 'Ground Floor, Room 105',
    },
    {
      name: 'Orthopedics Suite',
      doctor: 'Dr. Vikram Singh',
      specialties: ['Bone & Joint Care', 'Sports Injuries', 'Fracture Treatment'],
      availability: 'Tue-Sat: 11:00 AM - 5:00 PM',
      location: 'First Floor, Room 203',
    },
    {
      name: 'Ophthalmology Suite',
      doctor: 'Dr. Sunita Reddy',
      specialties: ['Eye Care', 'Vision Testing', 'Cataract Surgery'],
      availability: 'Mon-Fri: 9:00 AM - 3:00 PM',
      location: 'Second Floor, Room 301',
    },
    {
      name: 'ENT Suite',
      doctor: 'Dr. Arun Patel',
      specialties: ['Ear, Nose & Throat', 'Hearing Tests', 'Sinus Treatment'],
      availability: 'Mon-Sat: 10:00 AM - 4:00 PM',
      location: 'Second Floor, Room 305',
    },
    {
      name: 'Neurology Suite',
      doctor: 'Dr. Kavita Desai',
      specialties: ['Neurological Disorders', 'Headache Treatment', 'Stroke Care'],
      availability: 'Wed-Sat: 2:00 PM - 6:00 PM',
      location: 'First Floor, Room 207',
    },
    {
      name: 'Dermatology Suite',
      doctor: 'Dr. Rahul Gupta',
      specialties: ['Skin Care', 'Acne Treatment', 'Cosmetic Dermatology'],
      availability: 'Tue-Fri: 11:00 AM - 5:00 PM',
      location: 'Second Floor, Room 308',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHero
        title="Doctor Suites"
        subtitle="Meet our team of experienced medical professionals dedicated to your health and wellbeing"
        variant="pattern"
      >
        <PageHeroImage
          src="/assets/generated/doctors-team.dim_1600x900.png"
          alt="Medical team of doctors at Mahalaxmi Health Care"
          width={1600}
          height={900}
          loading="eager"
          className="mt-8 max-w-4xl mx-auto"
        />
      </PageHero>

      {/* Doctor Portraits Photo */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Medical Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced doctors committed to providing excellent patient care
          </p>
        </div>
        <PageHeroImage
          src="/assets/generated/doctors-portraits-collage.dim_1600x900.png"
          alt="Group portrait of doctors at Mahalaxmi Health Care"
          width={1600}
          height={900}
          loading="lazy"
          className="max-w-5xl mx-auto"
        />
      </Section>

      {/* Doctor Suites Grid */}
      <Section variant="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Specialized Suites</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert care across multiple specialties with dedicated consultation rooms
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {suites.map((suite) => (
            <Card key={suite.name} className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{suite.name}</CardTitle>
                    <CardDescription className="text-base font-medium text-orange-600">
                      {suite.doctor}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {suite.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-orange-500" aria-hidden="true" />
                    <span>{suite.availability}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-orange-500" aria-hidden="true" />
                    <span>{suite.location}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Button
                    size="sm"
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    onClick={() => navigate({ to: '/appointments' })}
                  >
                    <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                    Book Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <Card className="bg-gradient-to-br from-orange-500/10 to-background border-orange-500/20 shadow-medium max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Need to See a Specialist?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book an appointment with our experienced doctors or contact us for more information
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700" onClick={() => navigate({ to: '/appointments' })}>
                <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate({ to: '/contact' })}>
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
