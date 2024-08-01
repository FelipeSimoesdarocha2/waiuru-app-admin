// React-query
import { useMutation, useQuery } from '@tanstack/react-query';

// Models
import { CreateTaskDto, GetTaskDto } from 'models/task';

// Requests
import { createTaskRequest, getTaskRequest } from './requests';

// GET
export const useGetTaskRequest = (condominiumId?: string, enabled?: boolean) =>
  useQuery<GetTaskDto[], Error>(['getTaskRequest', condominiumId], ({ queryKey }: any) => getTaskRequest(queryKey[1]), {
    enabled,
  });

// CREATE
const getRequestWrapper = async (data: CreateTaskDto) => {
  return createTaskRequest(data);
};

export const useCreateTask = () => useMutation(getRequestWrapper);
