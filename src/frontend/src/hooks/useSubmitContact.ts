import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ContactSubmission {
  name: string;
  contactInfo: string;
  subject: string;
  message: string;
}

export function useSubmitContact() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactSubmission) => {
      if (!actor) {
        throw new Error('Backend connection not available');
      }

      await actor.submitContact(data.name, data.contactInfo, data.subject, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
    onError: (error: Error) => {
      console.error('Failed to submit contact:', error);
    },
  });
}
