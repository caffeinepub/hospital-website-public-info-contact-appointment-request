import { useState } from 'react';
import { useSubmitAppointmentRequest } from '@/hooks/useSubmitAppointmentRequest';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function AppointmentRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    contactDetails: '',
    preferredDateTime: '',
    departmentService: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const { mutate: submitAppointment, isPending, isError, error } = useSubmitAppointmentRequest();

  const departments = [
    'General Medicine',
    'Cardiology',
    'Pediatrics',
    'Orthopedics',
    'Ophthalmology',
    'Neurology',
    'Surgery',
    'Emergency Care',
    'Diabetes Care',
    'Physiotherapy',
  ];

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.contactDetails.trim()) {
      newErrors.contactDetails = 'Contact details are required';
    }
    if (!formData.preferredDateTime.trim()) {
      newErrors.preferredDateTime = 'Preferred date/time is required';
    }
    if (!formData.departmentService) {
      newErrors.departmentService = 'Please select a department';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(false);

    if (!validateForm()) {
      return;
    }

    submitAppointment(
      {
        name: formData.name,
        contactDetails: formData.contactDetails,
        preferredDateTime: formData.preferredDateTime,
        departmentService: formData.departmentService,
        notes: formData.notes || null,
      },
      {
        onSuccess: () => {
          setShowSuccess(true);
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

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {showSuccess && (
        <Alert className="bg-primary/10 border-primary/20">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <AlertDescription className="text-primary">
            Appointment request submitted successfully! We'll contact you soon to confirm.
          </AlertDescription>
        </Alert>
      )}

      {isError && (
        <Alert variant="destructive">
          <AlertDescription>
            {error instanceof Error ? error.message : 'Failed to submit appointment request. Please try again.'}
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="John Doe"
          disabled={isPending}
          className={errors.name ? 'border-destructive' : ''}
        />
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactDetails">Contact Details *</Label>
        <Input
          id="contactDetails"
          value={formData.contactDetails}
          onChange={(e) => handleChange('contactDetails', e.target.value)}
          placeholder="Phone number or email"
          disabled={isPending}
          className={errors.contactDetails ? 'border-destructive' : ''}
        />
        {errors.contactDetails && <p className="text-sm text-destructive">{errors.contactDetails}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferredDateTime">Preferred Date & Time *</Label>
        <Input
          id="preferredDateTime"
          value={formData.preferredDateTime}
          onChange={(e) => handleChange('preferredDateTime', e.target.value)}
          placeholder="e.g., Monday, Feb 12, 10:00 AM"
          disabled={isPending}
          className={errors.preferredDateTime ? 'border-destructive' : ''}
        />
        {errors.preferredDateTime && <p className="text-sm text-destructive">{errors.preferredDateTime}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="departmentService">Department / Service *</Label>
        <Select
          value={formData.departmentService}
          onValueChange={(value) => handleChange('departmentService', value)}
          disabled={isPending}
        >
          <SelectTrigger id="departmentService" className={errors.departmentService ? 'border-destructive' : ''}>
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
        {errors.departmentService && <p className="text-sm text-destructive">{errors.departmentService}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes (Optional)</Label>
        <Textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => handleChange('notes', e.target.value)}
          placeholder="Any specific concerns or requirements..."
          rows={4}
          disabled={isPending}
        />
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Appointment Request'
        )}
      </Button>
    </form>
  );
}
