// React
import { useState, useEffect } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { DataItemTableResidents } from 'models';

// Api
import { useGetResidentCondominiumRequest } from 'api/resident';

export const useListResidentModal = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState<DataItemTableResidents[]>([]);
  const session = useAppSelector(selectUser);
  const { data, isLoading } = useGetResidentCondominiumRequest(
    session.user?.condominium_id,
    !!session.user?.condominium_id
  );

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    const filtered = data?.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered || []);
  };

  return {
    data,
    isLoading,
    searchValue,
    filteredData,
    handleSearchChange,
  };
};
