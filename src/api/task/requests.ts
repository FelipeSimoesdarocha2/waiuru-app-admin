// Models
import { CreateTaskDto } from 'models/task';

// Api
import { fetcher } from '../fetch';

// GET
export const getTaskRequest = (condominium_id: string) =>
  fetcher(`/v1/task/condominium/${condominium_id}`).then(response => response.json());

// CREATE
export const createTaskRequest = async (data: CreateTaskDto) => {
  return fetcher('/v1/task', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
