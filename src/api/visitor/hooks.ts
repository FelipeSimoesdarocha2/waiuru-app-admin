// React-query
import { useMutation, useQuery } from '@tanstack/react-query';

// Models
import { CreateVisitorsProps, DataItemTableResidents } from 'models';

// Requests
import { createVisitorRequest, getVisitorByCondoRequest } from './requests';

// CREATE
const getRequestWrapper = async (data: CreateVisitorsProps) => {
  return createVisitorRequest(data);
};

export const useCreateVisitor = () => useMutation(getRequestWrapper);

export const useGetVisitorsCondominium = (condominiumId: string, enabled?: boolean) =>
  useQuery<DataItemTableResidents[], Error>(
    ['getVisitorByCondoRequest', condominiumId],
    () => getVisitorByCondoRequest(condominiumId),
    { enabled }
  );
