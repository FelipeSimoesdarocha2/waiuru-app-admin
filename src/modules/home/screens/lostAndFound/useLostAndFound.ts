// React
import { useState, useEffect, ChangeEvent } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { LostAndFoundDto } from 'models';

// Api
import { useGetLostAndFound } from 'api/lostAndFound';

// Constants
import {
  screen,
  columns,
  cardsData,
  dataReceived,
  dataReturned,
  labelsReceived,
  labelsReturned,
} from './LostAndFound.constants';

export const useLostAndFound = () => {
  const [openPreview, setOpenPreview] = useState<{
    isOpen: boolean;
    index: number | null;
    itemId: LostAndFoundDto | null;
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
  const [filteredData, setFilteredData] = useState<LostAndFoundDto[]>([]);

  const session = useAppSelector(selectUser);
  const { data, isLoading } = useGetLostAndFound(session.user?.condominium_id, !!session.user?.condominium_id);

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
      setFilteredData(data);
    }
  }, [data]);

  const handleDeleteSelected = () => {
    // setData(prevData => {
    //   const newData = prevData.filter((_, index) => !selectedItems.includes(index));
    //   return newData;
    // });
    setSelectedItems([]);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (selectedItems.length > 0) {
      setOpenDelete(true);
    } else {
      setOpenDelete(false);
    }
  }, [selectedItems]);

  return {
    data,
    screen,
    columns,
    openForm,
    isLoading,
    cardsData,
    openFilter,
    openDelete,
    openPreview,
    searchValue,
    filteredData,
    dataReceived,
    dataReturned,
    selectedItems,
    labelsReceived,
    labelsReturned,
    selectedScreen,
    setOpenForm,
    setOpenFilter,
    setOpenPreview,
    setSelectedItems,
    setSelectedScreen,
    handleSearchChange,
    handleCheckboxChange,
    handleDeleteSelected,
  };
};
