// React-query
import { useMutation, useQuery } from '@tanstack/react-query';

// Models
import { CreateResidentsProps, DataItemTableResidents, CreateResidentInviteDto } from 'models';
import { ResidentDto } from 'models/residents';

// Requests
import {
  getResidentById,
  updateResidentRequest,
  createResidentRequest,
  createResidentInviteRequest,
  getResidentCondominiumRequest,
} from './requests';

// GET
export const useGetResidentCondominiumRequest = (condominiumId?: string, enabled?: boolean) =>
  useQuery<DataItemTableResidents[], Error>(
    ['getResidentCondominiumRequest', condominiumId],
    ({ queryKey }: any) => getResidentCondominiumRequest(queryKey[1]),
    { enabled }
  );

// GET
export const useGetListResidentCondominiumRequest = (condominiumId?: string, enabled?: boolean) =>
  useQuery<ResidentDto[], Error>(
    ['getResidentCondominiumRequest', condominiumId],
    ({ queryKey }: any) => getResidentCondominiumRequest(queryKey[1]),
    { enabled }
  );

// GET:ID
export const useGetResidentById = (condominiumId?: string, enabled?: boolean) =>
  useQuery<ResidentDto[], Error>(
    ['getOrdersRequest', condominiumId],
    ({ queryKey }: any) => getResidentById(queryKey[1]),
    { enabled }
  );

export const useUpdateResidentRequest = () => useMutation(updateResidentRequest);

// CREATE-INVITE
const getRequestWrapper = async (data: CreateResidentsProps) => {
  return createResidentRequest(data);
};

// CREATE-INVITE
const getRequestInviteWrapper = async (data: CreateResidentInviteDto) => {
  return createResidentInviteRequest(data);
};

export const useCreateResident = () => useMutation(getRequestWrapper);

export const useCreateEmployeeInvite = () => useMutation(getRequestInviteWrapper);
