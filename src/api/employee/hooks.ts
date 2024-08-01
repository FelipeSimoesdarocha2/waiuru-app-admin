// React-query
import { useMutation, useQuery } from '@tanstack/react-query';

// Models
import { CreateEmployeeProps } from 'models';
import { EmployeeDto } from 'models/employees';

// Requests
import { createEmployeeRequest, getEmployeeRequest, getEmployeeById } from './requests';

// GET
export const useGetEmployees = (condominiumId?: string, enabled?: boolean) => {
  return useQuery<EmployeeDto[], Error>(
    ['getEmployee', condominiumId],
    ({ queryKey }: any) => getEmployeeRequest(queryKey[1]),
    { enabled }
  );
};

// GET:ID
export const useGetEmployeeById = (condominiumId?: string, enabled?: boolean) =>
  useQuery<EmployeeDto[], Error>(
    ['getOrdersRequest', condominiumId],
    ({ queryKey }: any) => getEmployeeById(queryKey[1]),
    { enabled }
  );

// CREATE
const getRequestWrapper = async (data: CreateEmployeeProps) => {
  return createEmployeeRequest(data);
};

export const useCreateEmployee = () => useMutation(getRequestWrapper);
