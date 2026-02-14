import { useState } from 'react';
import { useSubmitContact } from '@/hooks/useSubmitContact';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const { mutate: submitContact, isPending, isError, error } = useSubmitContact();

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = 'Contact information is required';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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

    submitContact(
      {
        name: formData.name,
        contactInfo: formData.contactInfo,
        subject: formData.subject,
        message: formData.message,
      },
      {
        onSuccess: () => {
          setShowSuccess(true);
          setFormData({ name: '', contactInfo: '', subject: '', message: '' });
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
          <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
          <AlertDescription className="text-primary">
            Thank you for contacting us! We'll get back to you soon.
          </AlertDescription>
        </Alert>
      )}

      {isError && (
        <Alert variant="destructive">
          <AlertDescription>
            {error instanceof Error ? error.message : 'Failed to submit contact form. Please try again.'}
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-destructive" aria-label="required">*</span>
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="John Doe"
          disabled={isPending}
          className={errors.name ? 'border-destructive' : ''}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          required
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-destructive" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contactInfo">
          Contact Information <span className="text-destructive" aria-label="required">*</span>
        </Label>
        <Input
          id="contactInfo"
          value={formData.contactInfo}
          onChange={(e) => handleChange('contactInfo', e.target.value)}
          placeholder="email@example.com or phone number"
          disabled={isPending}
          className={errors.contactInfo ? 'border-destructive' : ''}
          aria-invalid={!!errors.contactInfo}
          aria-describedby={errors.contactInfo ? 'contactInfo-error' : undefined}
          required
        />
        {errors.contactInfo && (
          <p id="contactInfo-error" className="text-sm text-destructive" role="alert">
            {errors.contactInfo}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">
          Subject <span className="text-destructive" aria-label="required">*</span>
        </Label>
        <Input
          id="subject"
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          placeholder="General inquiry"
          disabled={isPending}
          className={errors.subject ? 'border-destructive' : ''}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          required
        />
        {errors.subject && (
          <p id="subject-error" className="text-sm text-destructive" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-destructive" aria-label="required">*</span>
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Your message here..."
          rows={5}
          disabled={isPending}
          className={errors.message ? 'border-destructive' : ''}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          required
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
