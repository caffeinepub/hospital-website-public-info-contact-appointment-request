import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface AppointmentRequestSubmission {
  name: string;
  contactDetails: string;
  preferredDateTime: string;
  departmentService: string;
  notes: string | null;
}

export function useSubmitAppointmentRequest() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: AppointmentRequestSubmission) => {
      if (!actor) {
        throw new Error('Backend connection not available');
      }

      await actor.submitAppointmentRequest(
        data.name,
        data.contactDetails,
        data.preferredDateTime,
        data.departmentService,
        data.notes
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
    onError: (error: Error) => {
      console.error('Failed to submit appointment request:', error);
    },
  });
}
