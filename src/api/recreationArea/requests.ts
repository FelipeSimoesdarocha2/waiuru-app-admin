// Models
import { RecreationAreaProps } from 'models';

// Api
import { fetcher } from '../fetch';

// GET
export const getRecreationAreaRequest = (condominium_id: string) =>
  fetcher(`/v1/recreation-area/${condominium_id}`).then(response => response.json());

// CREATE
export const createRecreationAreaRequest = async (data: RecreationAreaProps) => {
  return fetcher('/v1/recreation-area', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
