// Models
import { CreateLostAndFoundDto, UpdateLostAndFoundDto } from 'models';

// Api
import { fetcher } from '../fetch';

// GET
export const getLostAndFoundRequest = (condominium_id: string) =>
  fetcher(`/v1/lost-and-found/${condominium_id}`).then(response => response.json());

// CREATE
export const createLostAndFoundRequest = (data: CreateLostAndFoundDto) => {
  return fetch('/v1/lost-and-found', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(response => response.json());
};

// UPDATE
export const updateLostAndFoundRequest = (data: UpdateLostAndFoundDto) => {
  return fetch(`/v1/lost-and-found/${data.id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  }).then(response => {
    console.log('response', response);
    return response.json();
  });
};
