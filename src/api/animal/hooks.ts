// React-query
import { useMutation } from '@tanstack/react-query';

// Models
import { CreateAnimalsProps } from 'models';

// Requests
import { createAnimalRequest } from './requests';

// CREATE
const getRequestWrapper = async (data: CreateAnimalsProps) => {
  return createAnimalRequest(data);
};

export const useCreateAnimal = () => useMutation(getRequestWrapper);
