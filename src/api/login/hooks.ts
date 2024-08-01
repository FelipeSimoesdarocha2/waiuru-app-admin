// React-query
import { useMutation } from '@tanstack/react-query';

// Requests
import { getUserRequest } from './requests';

export const useGetUserRequest = () => useMutation(getUserRequest);
