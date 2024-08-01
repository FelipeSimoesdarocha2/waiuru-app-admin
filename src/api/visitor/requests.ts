// Models
import { CreateVisitorsProps } from 'models';

// Api
import { fetcher } from '../fetch';

// CREATE
export const createVisitorRequest = async (data: CreateVisitorsProps) => {
  return fetcher('/v1/temporary-visitor', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

// GET
export const getVisitorByCondoRequest = async (id: string) => {
  return fetcher(`/v1/temporary-visitor/condominium/${id}`).then(response => response.json());
};
