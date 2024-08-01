// Models
import { CreateBookOccurrencesProps, DataItemTableBookOccurrences } from 'models';

// Api
import { fetcher } from '../fetch';

// GET
export const getIncidentsRequest = (condominium_id: string) =>
  fetcher(`/v1/incident/${condominium_id}`).then(response => response.json());

// CREATE
export const createBookOccurrencesRequest = async (data: CreateBookOccurrencesProps) => {
  return fetcher('/v1/incident', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

// UPDATE
export const updateBookOccurrencesRequest = async (data: DataItemTableBookOccurrences) => {
  return fetcher(`/v1/incident/${data.id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};
