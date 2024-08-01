// React-query
import { useMutation, useQuery } from '@tanstack/react-query';

// Models
import { Chat } from 'models';

// Requests
import { getChatByUserIdRequest, createChatRequest, updateChatRequest } from './requests';

// GET
export const useGetChatByUserIdRequest = (id?: string, enabled?: boolean) =>
  useQuery<Chat[], Error>(['getChatByUserIdRequest', id], ({ queryKey }: any) => getChatByUserIdRequest(queryKey[1]), {
    enabled,
  });

export const useCreateChatRequest = () => useMutation(createChatRequest);

export const useUpdateChatRequest = () => useMutation(updateChatRequest);
