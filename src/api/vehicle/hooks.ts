// React-query
import { useMutation } from '@tanstack/react-query';

// Models
import { CreateVehiclesProps } from 'models';

// Requests
import { createVehicleRequest } from './requests';

// CREATE
const getRequestWrapper = async (data: CreateVehiclesProps) => {
  return createVehicleRequest(data);
};

export const useCreateVehicle = () => useMutation(getRequestWrapper);
