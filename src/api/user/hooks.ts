// React-query
import { useQuery } from '@tanstack/react-query';

// Models
import { GetUserById } from 'models';

// Requests
import { getUserRequest } from './requests';

// GET
export const useGetUserRequest = (userId?: string, enabled?: boolean) =>
  useQuery<GetUserById, Error>(['getUserRequest', userId], ({ queryKey }: any) => getUserRequest(queryKey[1]), {
    enabled,
  });
