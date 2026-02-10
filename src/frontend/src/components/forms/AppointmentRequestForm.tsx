import { useState } from 'react';
import { useSubmitAppointmentRequest } from '../../hooks/useSubmitAppointmentRequest';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  contactDetails: string;
  preferredDateTime: string;
  departmentService: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  contactDetails?: string;
  preferredDateTime?: string;
  departmentService?: string;
}

const departments = [
  'Cardiology',
  'Orthopedics',
  'Neurology',
  'Pediatrics',
  'Obstetrics & Gynecology',
  'Emergency Medicine',
  'Family Medicine',
  'Oncology',
  'Radiology',
  'Surgery',
  'Diabetes',
  'Other',
];

export default function AppointmentRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contactDetails: '',
    preferredDateTime: '',
    departmentService: '',
    notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { mutate: submitAppointment, isPending, isError, error } = useSubmitAppointmentRequest();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.contactDetails.trim()) {
      newErrors.contactDetails = 'Contact details are required';
    }

    if (!formData.preferredDateTime.trim()) {
      newErrors.preferredDateTime = 'Preferred date and time are required';
    }

    if (!formData.departmentService) {
      newErrors.departmentService = 'Please select a department or service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    submitAppointment(
      {
        name: formData.name.trim(),
        contactDetails: formData.contactDetails.trim(),
        preferredDateTime: formData.preferredDateTime.trim(),
        departmentService: formData.departmentService,
        notes: formData.notes.trim() || null,
      },
      {
        onSuccess: () => {
          setIsSubmitted(true);
          setFormData({
            name: '',
            contactDetails: '',
            preferredDateTime: '',
            departmentService: '',
            notes: '',
          });
          setErrors({});
        },
      }
    );
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Appointment Request Received</CardTitle>
          <CardDescription>We'll confirm your appointment soon</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Thank you for your request!</AlertTitle>
            <AlertDescription>
              Your appointment request has been received. Our scheduling team will contact you within
              24 hours to confirm your appointment date and time.
            </AlertDescription>
          </Alert>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="w-full"
          >
            Request Another Appointment
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request an Appointment</CardTitle>
        <CardDescription>
          Complete the form below and we'll contact you to confirm your appointment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {isError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {error?.message || 'Failed to submit appointment request. Please try again.'}
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="appt-name">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="appt-name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Your full name"
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'appt-name-error' : undefined}
              disabled={isPending}
            />
            {errors.name && (
              <p id="appt-name-error" className="text-sm text-destructive" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="appt-contact">
              Contact Details <span className="text-destructive">*</span>
            </Label>
            <Input
              id="appt-contact"
              value={formData.contactDetails}
              onChange={(e) => handleChange('contactDetails', e.target.value)}
              placeholder="Email or phone number"
              aria-required="true"
              aria-invalid={!!errors.contactDetails}
              aria-describedby={errors.contactDetails ? 'appt-contact-error' : undefined}
              disabled={isPending}
            />
            {errors.contactDetails && (
              <p id="appt-contact-error" className="text-sm text-destructive" role="alert">
                {errors.contactDetails}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="appt-datetime">
              Preferred Date & Time <span className="text-destructive">*</span>
            </Label>
            <Input
              id="appt-datetime"
              value={formData.preferredDateTime}
              onChange={(e) => handleChange('preferredDateTime', e.target.value)}
              placeholder="e.g., Monday, March 15 at 2:00 PM"
              aria-required="true"
              aria-invalid={!!errors.preferredDateTime}
              aria-describedby={errors.preferredDateTime ? 'appt-datetime-error' : undefined}
              disabled={isPending}
            />
            {errors.preferredDateTime && (
              <p id="appt-datetime-error" className="text-sm text-destructive" role="alert">
                {errors.preferredDateTime}
              </p>
            )}
            <p className="text-sm text-muted-foreground">
              Enter your preferred date and time. We'll do our best to accommodate your request.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="appt-department">
              Department / Service <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.departmentService}
              onValueChange={(value) => handleChange('departmentService', value)}
              disabled={isPending}
            >
              <SelectTrigger
                id="appt-department"
                aria-required="true"
                aria-invalid={!!errors.departmentService}
                aria-describedby={errors.departmentService ? 'appt-department-error' : undefined}
              >
                <SelectValue placeholder="Select a department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.departmentService && (
              <p id="appt-department-error" className="text-sm text-destructive" role="alert">
                {errors.departmentService}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="appt-notes">Additional Notes (Optional)</Label>
            <Textarea
              id="appt-notes"
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              placeholder="Any additional information or special requests..."
              rows={4}
              disabled={isPending}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Request'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
