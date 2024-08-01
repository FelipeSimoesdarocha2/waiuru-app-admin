// React-query
import { useMutation } from '@tanstack/react-query';

// Models
import { OnlineVotingProps } from 'models';

// Requests
import { createOnlineVotingRequest, updateOnlineVotingRequest } from './requests';

// CREATE
const getRequestWrapper = async (data: OnlineVotingProps) => {
  return createOnlineVotingRequest(data);
};

export const useCreateOnlineVoting = () => useMutation(getRequestWrapper);

export const useUpdateOnlineVotingRequest = () => useMutation(updateOnlineVotingRequest);
