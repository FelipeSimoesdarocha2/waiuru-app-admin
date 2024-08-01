// React
import { useState } from 'react';

// Models
import { OrderDto, UpdateOrderProps, CardServiceStatusOrder } from 'models';

// Api
import { useUpdateOrderRequest } from 'api/orders';

// Moment
import moment from 'moment';

export const useOrdersPreview = (data: OrderDto | null, refetch: () => void) => {
  const [selectedScreen, setSelectedScreen] = useState('1');

  const [selectedUser, setSelectedUser] = useState<{
    resident_name: string;
  }>({
    resident_name: '',
  });

  const { mutateAsync } = useUpdateOrderRequest();

  const submit = async () => {
    if (!data) return;

    const dataRequest: UpdateOrderProps = {
      ...data,
      status: CardServiceStatusOrder.DELIVERED,
      picked_up_by_name: selectedUser.resident_name,
      pickup_date: moment().toISOString(),
    };

    try {
      await mutateAsync(dataRequest);
    } catch (error) {
      console.log('error', error);
    } finally {
      setSelectedScreen('1');
      refetch();
    }
  };

  return {
    selectedScreen,
    submit,
    setSelectedUser,
    setSelectedScreen,
  };
};
