// React-query
import { useMutation, useQuery } from '@tanstack/react-query';

// Models
import { CreateOrderProps, OrderDto } from 'models';

// Requests
import { createOrderRequest, getOrdersByCondoIdRequest, getOrdersByUserIdRequest } from './requests';

// GET
export const useGetOrdersByCondoId = (condominiumId?: string, enabled?: boolean) =>
  useQuery<OrderDto[], Error>(
    ['getOrdersRequest', condominiumId],
    ({ queryKey }: any) => getOrdersByCondoIdRequest(queryKey[1]),
    { enabled }
  );

// CREATE
const getRequestWrapper = async (data: CreateOrderProps) => {
  return createOrderRequest(data);
};

export const useCreateOrder = () => useMutation(getRequestWrapper);

export const useGetOrdersByUserId = () => useQuery<OrderDto[], Error>(['getOrdersRequest'], getOrdersByUserIdRequest);
