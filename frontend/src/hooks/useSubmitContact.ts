import { useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ContactFormData {
  name: string;
  contactInfo: string;
  subject: string;
  message: string;
}

export function useSubmitContact() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) {
        throw new Error('Backend actor not available');
      }

      try {
        await actor.submitContact(
          data.name,
          data.contactInfo,
          data.subject,
          data.message
        );
      } catch (error: any) {
        // Normalize error messages for better UX
        if (error.message?.includes('decommission')) {
          throw new Error('Service is temporarily unavailable. Please try again later.');
        }
        throw new Error(error.message || 'Failed to submit contact form');
      }
    },
  });
}
