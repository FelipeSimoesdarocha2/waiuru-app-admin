// React-query
import { useMutation } from '@tanstack/react-query';

// Models
import { RecreationAreaProps } from 'models';

// Requests
import { createRecreationAreaRequest } from './requests';

// CREATE
const getRequestWrapper = async (data: RecreationAreaProps) => {
  return createRecreationAreaRequest(data);
};

export const useCreateRecreationArea = () => useMutation(getRequestWrapper);
