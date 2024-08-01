// React-query
import { useMutation } from '@tanstack/react-query';

// Requests
import { uploadImageRequest } from './requests';

export const useUploadImage = () => useMutation(uploadImageRequest);
