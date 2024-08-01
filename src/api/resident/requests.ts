// Models
import { CreateResidentsProps, CreateResidentInviteDto } from 'models';
import { ResidentDto } from 'models/residents';

// Api
import { fetcher } from '../fetch';

// GET
export const getResidentCondominiumRequest = (condominium_id: string) =>
  fetcher(`/v1/resident/condominium/${condominium_id}`).then(response => response.json());

// CREATE
export const createResidentRequest = async (data: CreateResidentsProps) => {
  return fetcher('/v1/resident/signup', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

// GET:ID
export const getResidentById = (id: string) => fetcher(`/v1/resident/${id}`).then(response => response.json());

// UPDATE
export const updateResidentRequest = async (data: ResidentDto) => {
  return fetcher(`/v1/resident/${data.id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};

// CREATE-INVITE
export const createResidentInviteRequest = async (data: CreateResidentInviteDto) => {
  return fetcher('/v1/resident/invite', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
