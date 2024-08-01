// Models
import { CreateVehiclesProps } from 'models';

// Api
import { fetcher } from '../fetch';

// CREATE
export const createVehicleRequest = async (data: CreateVehiclesProps) => {
  return fetcher('/v1/vehicle', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
