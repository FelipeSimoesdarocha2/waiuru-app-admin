// React
import { useState, useEffect, ChangeEvent } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { CardServiceStatusOrder, OrderDto } from 'models';

// Api
import { useGetOrdersByCondoId } from 'api/order';

// Constants
import {
  screen,
  columns,
  cardsData,
  dataReceived,
  dataReturned,
  labelsReturned,
  labelsReceived,
} from './Orders.constants';

export const useOrders = (type: string, dateStart: string, dateFinish: string) => {
  const [openPreview, setOpenPreview] = useState<{
    isOpen: boolean;
    index: number | null;
    itemId: OrderDto | null;
  }>({
    isOpen: false,
    index: null,
    itemId: null,
  });
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState('');
  const [selectedScreen, setSelectedScreen] = useState('1');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [filteredData, setFilteredData] = useState<OrderDto[]>([]);

  const session = useAppSelector(selectUser);
  const { data, isLoading, refetch } = useGetOrdersByCondoId(session?.user?.condominium_id, !!session?.user.condominium_id);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedItems([...selectedItems, index]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== index));
    }
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const dataFilter = data.filter(item => item.provider_name.toLowerCase().includes(searchValue.toLowerCase()));
      setFilteredData(dataFilter);
    }
  }, [data]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);

    if (data === undefined) return;
    const dataFilter = data.filter(item => item.provider_name.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(dataFilter);
  };

  const handleDeleteSelected = () => {
    setFilteredData(prevData => {
      const newData = prevData.filter((_, index) => !selectedItems.includes(index));
      return newData;
    });
    setSelectedItems([]);
  };

  useEffect(() => {
    if (selectedItems.length > 0) {
      setOpenDelete(true);
    } else {
      setOpenDelete(false);
    }
  }, [selectedItems]);

  useEffect(() => {
    if (data) {
      if (type === 'concierge') {
        const dataFilter = data.filter(item => item.status === CardServiceStatusOrder.CONCIERGE);
        setFilteredData(dataFilter);
      } else if (type === 'delivered') {
        const dataFilter = data.filter(item => item.status === CardServiceStatusOrder.DELIVERED);
        setFilteredData(dataFilter);
      }
    }
  }, [type]);

  useEffect(() => {
    if (data) {
      if (dateStart) {
        const dataFilter = data.filter(item => new Date(item.delivery_date).getTime() >= new Date(dateStart).getTime());
        setFilteredData(dataFilter);
      }
      if (dateFinish) {
        const dataFilter = data.filter(
          item => new Date(item.delivery_date).getTime() <= new Date(dateFinish).getTime()
        );
        setFilteredData(dataFilter);
      }
    }
  }, [dateStart, dateFinish]);

  return {
    data,
    screen,
    columns,
    openForm,
    isLoading,
    cardsData,
    openDelete,
    openFilter,
    openPreview,
    searchValue,
    dataReceived,
    dataReturned,
    filteredData,
    selectedItems,
    selectedScreen,
    labelsReturned,
    labelsReceived,
    refetch,
    setOpenForm,
    setOpenFilter,
    setOpenPreview,
    setSelectedItems,
    setSelectedScreen,
    handleSearchChange,
    handleDeleteSelected,
    handleCheckboxChange,
  };
};
