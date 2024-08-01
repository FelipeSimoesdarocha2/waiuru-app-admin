// React
import { useState, useEffect, ChangeEvent } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { CardServiceStatusOccurrence, CardServiceTypeOccurrence, DataItemTableBookOccurrences } from 'models';

// Api
import { useGetIncidents, useUpdateBookOccurrencesRequest } from 'api/bookOccurrences';

// i18n
import useTranslation from 'i18n';

// Constants
import { links, screen, columns, cardsData, dataReturned, labelsReturned } from './BookOccurrences.constants';

export const useBookOccurrences = () => {
  const [type, setType] = useState<CardServiceTypeOccurrence | string>('');
  const [dateStart, setDateStart] = useState('');
  const [dateFinish, setDateFinish] = useState('');
  const [openPreview, setOpenPreview] = useState<{
    isOpen: boolean;
    index: number | null;
    itemId: DataItemTableBookOccurrences | null;
  }>({
    isOpen: false,
    index: null,
    itemId: null,
  });
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [searchValue, setSearchValue] = useState('');
  const [selectedScreen, setSelectedScreen] = useState('1');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [filteredData, setFilteredData] = useState<DataItemTableBookOccurrences[]>([]);

  const t = useTranslation();
  const session = useAppSelector(selectUser);
  const { mutateAsync } = useUpdateBookOccurrencesRequest();
  const { data, refetch, isLoading } = useGetIncidents(session?.user.condominium_id, !!session?.user.condominium_id);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedItems([...selectedItems, index]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== index));
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    if (data) {
      const dataFilter = data.filter(
        item =>
          item.incident.toLowerCase().includes(value.toLowerCase()) && item.status === CardServiceStatusOccurrence.OPEN
      );
      setFilteredData(dataFilter);
    }
  };

  const handleDeleteSelected = () => {
    setDeleteLoading(true);
    selectedItems.forEach(async index => {
      const data = {
        ...filteredData[index],
        status: CardServiceStatusOccurrence.CLOSE,
      };
      setDeleteLoading(true);
      try {
        await mutateAsync(data);
        setFilteredData(filteredData.filter(item => item.id !== data.id));
      } catch (error) {
        console.log('error', error);
      }
    });
    setDeleteLoading(false);
    refetch();
    setSelectedItems([]);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      console.log(
        'useEffect 2',
        data.filter(item => item.status === CardServiceStatusOccurrence.OPEN)
      );
      setFilteredData(data.filter(item => item.status === CardServiceStatusOccurrence.OPEN));
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      if (type === CardServiceTypeOccurrence.COMPLAINT) {
        const dataFilter = data.filter(item => item.type === CardServiceTypeOccurrence.COMPLAINT);
        setFilteredData(dataFilter);
      }
      if (type === CardServiceTypeOccurrence.SUGGESTION) {
        const dataFilter = data.filter(item => item.type === CardServiceTypeOccurrence.SUGGESTION);
        setFilteredData(dataFilter);
      }
      if (type === CardServiceTypeOccurrence.OBSERVATION) {
        const dataFilter = data.filter(item => item.type === CardServiceTypeOccurrence.OBSERVATION);
        setFilteredData(dataFilter);
      }
    }
  }, [type]);

  useEffect(() => {
    if (data) {
      if (dateStart) {
        const dataFilter = data.filter(item => new Date(item.date).getTime() >= new Date(dateStart).getTime());
        setFilteredData(dataFilter);
      }
      if (dateFinish) {
        const dataFilter = data.filter(item => new Date(item.date).getTime() <= new Date(dateFinish).getTime());
        setFilteredData(dataFilter);
      }
    }
  }, [dateStart, dateFinish]);

  useEffect(() => {
    refetch();
  }, [openForm]);

  useEffect(() => {
    if (selectedItems.length > 0) {
      setOpenDelete(true);
    } else {
      setOpenDelete(false);
    }
  }, [selectedItems]);

  return {
    t,
    data,
    screen,
    columns,
    openForm,
    isLoading,
    cardsData,
    openDelete,
    openFilter,
    searchValue,
    openPreview,
    dataReturned,
    filteredData,
    selectedItems,
    deleteLoading,
    selectedScreen,
    labelsReturned,
    type,
    dateStart,
    dateFinish,
    setType,
    setDateStart,
    setDateFinish,
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
