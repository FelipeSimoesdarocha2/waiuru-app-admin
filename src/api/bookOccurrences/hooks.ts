// React-query
import { useMutation, useQuery } from '@tanstack/react-query';

// Models
import { CreateBookOccurrencesProps, DataItemTableBookOccurrences } from 'models';

// Requests
import { createBookOccurrencesRequest, getIncidentsRequest, updateBookOccurrencesRequest } from './requests';

// GET
export const useGetIncidents = (condominiumId?: string, enabled?: boolean) =>
  useQuery<DataItemTableBookOccurrences[], Error>(
    ['getIncidentsRequest', condominiumId],
    ({ queryKey }: any) => getIncidentsRequest(queryKey[1]),
    { enabled }
  );

// CREATE
const getRequestWrapper = async (data: CreateBookOccurrencesProps) => {
  return createBookOccurrencesRequest(data);
};

export const useCreateBookOccurrences = () => useMutation(getRequestWrapper);

export const useUpdateBookOccurrencesRequest = () => useMutation(updateBookOccurrencesRequest);
