// Models
import { CreateEmployeeProps } from 'models';

// Api
import { fetcher } from '../fetch';

// GET
export const getEmployeeRequest = (condominium_id: string) =>
  fetcher(`/v1/employee/condominium/${condominium_id}`).then(response => response.json());

// GET:ID
export const getEmployeeById = (employee_id: string) =>
  fetcher(`/v1/employee/details/${employee_id}`).then(response => response.json());

// CREATE
export const createEmployeeRequest = async (data: CreateEmployeeProps) => {
  return fetcher('/v1/employee/signup', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
