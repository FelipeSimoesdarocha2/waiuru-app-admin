// React
import { useState, useEffect } from 'react';

// Store
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

// Models
import { DataItemTableBookOccurrences, DataItemTableResidents } from 'models';

// Api
import { useGetResidentCondominiumRequest } from 'api/resident';

export const useBookOccurrencesPreview = (data: DataItemTableBookOccurrences | null) => {
  const [searchValue, setSearchValue] = useState('');
  const session = useAppSelector(selectUser);
  const { data: user, isLoading } = useGetResidentCondominiumRequest(
    session?.user?.condominium_id || '',
    !!session?.user?.condominium_id
  );
  const [selectedScreen, setSelectedScreen] = useState('1');
  const [selectedUser, setSelectedUser] = useState<{
    resident_id: string;
    resident_name: string;
  }>({
    resident_id: '',
    resident_name: '',
  });

  const handleLinkClick = (resident_id: string, resident_name: string) => {
    setSelectedUser({ resident_id, resident_name });
    setSelectedScreen('1');
  };
  const [filteredData, setFilteredData] = useState<DataItemTableResidents[]>([]);

  useEffect(() => {
    if (user) {
      setFilteredData(user);
    }
  }, [user]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    const filter = user?.filter(item => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredData(filter ?? []);
  };

  return {
    isLoading,
    searchValue,
    filteredData,
    dataResident: data,
    selectedScreen,
    selectedUser,
    handleLinkClick,
    handleSearchChange,
    setSelectedScreen,
  };
};
