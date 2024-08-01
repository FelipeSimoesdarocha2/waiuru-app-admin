// React-query
import { useMutation, useQuery } from '@tanstack/react-query';

// Models
import { LostAndFoundDto } from 'models';

// Requests
import { createLostAndFoundRequest, getLostAndFoundRequest, updateLostAndFoundRequest } from './requests';

// GET
export const useGetLostAndFound = (condominiumId?: string, enabled?: boolean) => {
  return useQuery<LostAndFoundDto[], Error>(
    ['getLostAndFound', condominiumId],
    ({ queryKey }: any) => getLostAndFoundRequest(queryKey[1]),
    { enabled }
  );
};

export const useCreateLostAndFound = () => useMutation(createLostAndFoundRequest);

export const useUpdateLostAndFoundRequest = () => useMutation(updateLostAndFoundRequest);
