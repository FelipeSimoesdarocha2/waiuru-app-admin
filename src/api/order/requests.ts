// Models
import { CreateOrderProps } from 'models';

// Api
import { fetcher } from '../fetch';

// GET
export const getOrdersByUserIdRequest = () => fetcher(`/v1/orders`).then(response => response.json());

// GET:ID
export const getOrdersByCondoIdRequest = (condominiumId: string) =>
  fetcher(`/v1/orders/${condominiumId}`).then(response => response.json());

// CREATE
export const createOrderRequest = async (data: CreateOrderProps) => {
  return fetcher('/v1/orders', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
