// Api
import { fetcher } from '../fetch';

// GET
export const getUserRequest = (id: string) => fetcher(`/v1/user/details/${id}`).then(response => response.json());
