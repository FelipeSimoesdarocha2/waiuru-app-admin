// Api
import { fetcher } from '../fetch';

// GET
export const getFeedRequest = (condominium_id: string) =>
  fetcher(`/v1/feed/${condominium_id}`).then(response => response.json());
