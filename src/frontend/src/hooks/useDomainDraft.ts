import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { DomainDraft } from '@/backend';

export function useGetDomainDraft() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<DomainDraft | null>({
    queryKey: ['domainDraft'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getDomainDraft();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveDomainDraft() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (content: string) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveDomainDraft(content);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['domainDraft'] });
    },
    onError: (error: Error) => {
      console.error('Failed to save domain draft:', error);
    },
  });
}
