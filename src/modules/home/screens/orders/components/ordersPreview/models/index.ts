import { OrderDto } from 'models';

export interface OrdersPreviewProps {
  data: OrderDto | null;
  onCloseModal?: () => void;
  refetch: () => void;
}
