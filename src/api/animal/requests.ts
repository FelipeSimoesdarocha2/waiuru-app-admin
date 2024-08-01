// Models
import { CreateAnimalsProps } from 'models';

// Api
import { fetcher } from '../fetch';

// CREATE
export const createAnimalRequest = async (data: CreateAnimalsProps) => {
  return fetcher('/v1/animal', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
