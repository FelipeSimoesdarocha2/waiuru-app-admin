// React-query
import { useMutation, useQuery } from '@tanstack/react-query';

// Models
import { OrderDto } from 'models';

// Requests
import { updateOrderRequest } from './requests';

export const useGetOrders = () => useQuery<OrderDto[], Error>(['getOrdersRequest']);

export const useUpdateOrderRequest = () => useMutation(updateOrderRequest);
