// React-query
import { useMutation, useQuery } from '@tanstack/react-query';

// Models
import { CondominiumProps } from 'models';

// Requests
import { createCondoRequest, getCondoByAdminIdRequest } from './requests';

// GET
export const useGetCondoByAdminIdRequest = (adminId?: string, enabled?: boolean) =>
  useQuery<CondominiumProps[], Error>(
    ['getCondoByAdminIdRequest', adminId],
    ({ queryKey }: any) => getCondoByAdminIdRequest(queryKey[1]),
    { enabled }
  );

export const useCreateCondoRequest = () => useMutation(createCondoRequest);
