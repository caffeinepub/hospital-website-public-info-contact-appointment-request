import { useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';

interface AppointmentRequestData {
  name: string;
  contactDetails: string;
  preferredDateTime: string;
  departmentService: string;
  notes: string | null;
}

export function useSubmitAppointmentRequest() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: AppointmentRequestData) => {
      if (!actor) {
        throw new Error('Backend actor not available');
      }

      try {
        await actor.submitAppointmentRequest(
          data.name,
          data.contactDetails,
          data.preferredDateTime,
          data.departmentService,
          data.notes
        );
      } catch (error: any) {
        // Normalize error messages for better UX
        if (error.message?.includes('decommission')) {
          throw new Error('Service is temporarily unavailable. Please try again later.');
        }
        throw new Error(error.message || 'Failed to submit appointment request');
      }
    },
  });
}
