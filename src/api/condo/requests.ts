// Models
import { CreateCondoProps } from 'models';

// Api
import { fetcher } from '../fetch';

// GET
export const getCondoByAdminIdRequest = (adminId: string) =>
  fetcher(`/v1/condominium/admin/${adminId}`).then(response => response.json());

// CREATE
export const createCondoRequest = async (data: CreateCondoProps) => {
  return fetcher('/v1/condominium/signup', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const getCondoById = (condoId: string) =>
  fetcher(`/v1/condominium/${condoId}`).then(response => response.json());
