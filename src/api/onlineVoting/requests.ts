// Models
import { OnlineVotingProps, UpdateOnlineVotingProps } from 'models';

// Api
import { fetcher } from '../fetch';

// GET
export const getOnlineVotingRequest = () => fetcher('/v1/online-voting').then(response => response.json());

// CREATE
export const createOnlineVotingRequest = async (data: OnlineVotingProps) => {
  return fetcher('/v1/online-voting', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

// UPDATE
export const updateOnlineVotingRequest = async (data: UpdateOnlineVotingProps) => {
  return fetcher(`/v1/online-voting/${data.id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};
