// Models
import { OrderDto } from 'models';

// Api
import { fetcher } from '../fetch';

export const getOrderRequest = (condominium_id: string) =>
  fetcher(`/v1/orders/${condominium_id}`).then(response => response.json());

export const getOrdersRequest = () => fetcher('/v1/orders').then(response => response.json());

export const updateOrderRequest = (data: OrderDto) => {
  return fetcher(`/v1/orders/${data.id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};
