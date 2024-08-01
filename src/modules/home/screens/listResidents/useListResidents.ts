// React
import { useState, useEffect } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { ResidentDto } from 'models/residents';

// Api
import { useGetListResidentCondominiumRequest } from 'api/resident';

// Constants
import { columns } from './ListResidents.constants';

export const useListResidents = () => {
  const session = useAppSelector(selectUser);
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState<ResidentDto[]>([]);

  const { data, isLoading } = useGetListResidentCondominiumRequest(
    session?.user?.condominium_id,
    !!session?.user?.condominium_id
  );

  useEffect(() => {
    if (data && data.length > 0) {
      const dataFilter = data.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
      setFilteredData(dataFilter);
    }
  }, [data, searchValue]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);

    if (data === undefined) return;
    const dataFilter = data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(dataFilter);
  };

  return {
    data,
    columns,
    isLoading,
    searchValue,
    filteredData,
    handleSearchChange,
  };
};
